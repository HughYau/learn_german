// #/chat AI 陪练
import { el } from '../ui.js';
import { ttsBtn } from '../audio.js';
import { hasKey, chat as aiChat, tutorSystem, ensureValidModel } from '../ai.js';
import { isLessonPassed } from '../state.js';
import { findUnit } from '../../data/course.js';

const SCENARIOS = [
  { id: 'free', label: '自由聊天', scenario: null },
  { id: 'bakery', label: '☕ 面包店点单', scenario: '在面包店（Bäckerei）柜台，你是店员，学生是顾客，来买面包点单。' },
  { id: 'market', label: '🛒 超市对话', scenario: '在超市（Supermarkt），你是店员或收银员，帮学生找东西、结账。' },
  { id: 'colleague', label: '💬 同事寒暄', scenario: '在办公室，你是学生的德国同事，和学生简单寒暄闲聊。' },
  { id: 'directions', label: '🚋 问路', scenario: '在莱比锡街头，你是路人，学生向你问路，你给出简单指引。' },
  { id: 'doctor', label: '🩺 看医生', scenario: '在家庭医生诊所（Hausarztpraxis），你是医生，先问诊（Was fehlt Ihnen?），学生描述症状，你给出简单建议。' },
  { id: 'interview', label: '💼 求职面试', scenario: '模拟求职面试（Vorstellungsgespräch），你是 HR，请学生介绍自己的经历（Werdegang）、优缺点，并追问一两个问题。适合 A2 以上练习。' },
  { id: 'complaint', label: '📮 投诉索赔', scenario: '学生的火车延误/包裹丢失，你是客服（Kundenservice），学生要说明情况并要求解决方案，你按流程回应。适合 A2 以上练习。' },
  { id: 'debate', label: '🗣️ 观点讨论', scenario: '你和学生就一个日常话题（如在家办公、环保、周末该不该工作）交换观点，你先给出自己的看法并邀请学生表态，追问理由。适合 B1 水平练习。' },
];

// 按课程完成进度自动分档：完成过 u28+ 的课 → B1；完成过 u19-u27 的课 → A2；否则 A1
function currentLevel() {
  const doneIn = (from, to) => {
    for (let i = from; i <= to; i++) {
      const u = findUnit('u' + i);
      if (u && u.lessons.some(l => isLessonPassed(l.id))) return true;
    }
    return false;
  };
  if (doneIn(28, 33)) return 'B1';
  if (doneIn(19, 27)) return 'A2';
  return 'A1';
}

function stripParens(text) {
  return text.replace(/[（(][^）)]*[）)]/g, '').replace(/\s+/g, ' ').trim();
}

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'TANDEM'));
  container.append(el('h1', { class: 'page' }, 'AI 陪练 ', el('span', { class: 'de' }, "Sprich mit mir!")));
  container.append(el('p', { class: 'page-sub' },
    '用德语或中文都可以。说错了它会温柔纠正你。当前陪练难度：',
    el('b', {}, currentLevel()),
    '（随你的课程完成进度自动升级）'
  ));

  if (!hasKey()) {
    container.append(el('div', { class: 'card', style: 'padding:26px 30px' },
      el('p', {}, '先去设置页填入你的 API Key，才能开始 AI 陪练。'),
      el('a', { class: 'btn', href: '#/settings', style: 'margin-top:16px; display:inline-block' }, '前往设置')
    ));
    return;
  }

  let currentScenario = SCENARIOS[0];
  let messages = [];

  const scenarioRow = el('div', { class: 'scenario-row' });
  container.append(scenarioRow);

  const shell = el('div', { class: 'chat-shell card' });
  const chatLog = el('div', { class: 'chat-log' });
  const input = el('input', { type: 'text', placeholder: '用德语试试…中文也行' });
  const sendBtn = el('button', { class: 'btn', type: 'button' }, '发送');
  const inputRow = el('div', { class: 'chat-input-row' }, input, sendBtn);
  shell.append(chatLog, inputRow);
  container.append(shell);

  SCENARIOS.forEach(sc => {
    const chip = el('button', { class: 'scenario-chip' + (sc.id === currentScenario.id ? ' active' : ''), type: 'button' }, sc.label);
    chip.addEventListener('click', () => {
      if (sc.id === currentScenario.id) return;
      [...scenarioRow.children].forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      startScenario(sc);
    });
    scenarioRow.append(chip);
  });

  function showEmptyState() {
    chatLog.innerHTML = '';
    chatLog.append(el('div', { class: 'chat-empty' },
      el('div', { class: 'big-de' }, "Na, wie geht's?"),
      el('div', {}, '用德语或中文都可以打字。选一个上面的情景卡片开始角色扮演，或者直接开聊。')
    ));
  }
  function clearEmptyState() {
    const empty = chatLog.querySelector('.chat-empty');
    if (empty) empty.remove();
  }

  function appendUser(text) {
    clearEmptyState();
    chatLog.append(el('div', { class: 'msg user' }, text));
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  function appendThinking() {
    clearEmptyState();
    const t = el('div', { class: 'msg thinking' }, 'denkt nach… 思考中');
    chatLog.append(t);
    chatLog.scrollTop = chatLog.scrollHeight;
    return t;
  }
  function appendAssistant(text) {
    const msg = el('div', { class: 'msg assistant' });
    const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean);
    (lines.length ? lines : [text]).forEach(line => {
      const isDe = /^[A-Za-zÄÖÜäöüß]/.test(line);
      msg.append(el('div', isDe ? { class: 'de-text' } : {}, line));
    });
    const clean = stripParens(text);
    msg.append(el('div', { class: 'msg-tools' }, ttsBtn(clean || text)));
    chatLog.append(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  function appendError(text) {
    clearEmptyState();
    chatLog.append(el('div', { class: 'msg assistant' }, text));
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function setInputDisabled(disabled) {
    input.disabled = disabled;
    sendBtn.disabled = disabled;
  }

  async function sendMessage(text, { hidden = false } = {}) {
    messages.push({ role: 'user', content: text });
    if (!hidden) appendUser(text);
    const thinking = appendThinking();
    setInputDisabled(true);
    try {
      const reply = await aiChat(messages, tutorSystem(currentScenario.scenario, currentLevel()));
      thinking.remove();
      messages.push({ role: 'assistant', content: reply });
      appendAssistant(reply);
    } catch (e) {
      thinking.remove();
      let msg;
      if (e.message === 'auth') msg = 'API Key 无效、过期或没有调用该模型的权限，请到设置页检查。';
      else if (e.message === 'network') msg = ['localhost', '127.0.0.1'].includes(location.hostname)
        ? '连接失败：请确认 server.py 正在运行，稍后再试。'
        : '浏览器无法连接 API 端点。请检查地址，并确认服务商允许跨域请求（CORS）。';
      else if (e.message === 'no-endpoint' || e.message === 'unsafe-endpoint') msg = 'API 端点无效：请填写 HTTPS 地址；HTTP 仅允许本机地址。';
      else if (e.message === 'no-model') msg = '请先到设置页填写模型 ID。';
      else if (e.message === 'empty-content') msg = '模型返回了空内容——这个模型可能不适合对话，请到设置页换一个模型试试。';
      else if (e.status === 404 || e.status === 400) msg = `${e.message}（提示：可能是模型名无效，请到设置页点「刷新模型列表」重新选择）`;
      else msg = e.message || '出错了，请稍后再试';
      appendError(msg);
    } finally {
      setInputDisabled(false);
      input.focus();
    }
  }

  function startScenario(sc) {
    currentScenario = sc;
    messages = [];
    showEmptyState();
    if (sc.scenario) sendMessage('请开始情景对话', { hidden: true });
  }

  function doSend() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendMessage(text);
  }
  sendBtn.addEventListener('click', doSend);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSend(); });

  showEmptyState();

  // 打开陪练页时静默校验模型：设置里的模型若在服务器上不存在，自动切换并提示
  ensureValidModel().then(r => {
    if (r.changed) {
      appendError(`⚙ 原设置的模型「${r.old}」在服务器上不存在，已自动切换为「${r.model}」。可到设置页自行更换。`);
    }
  }).catch(() => { /* 校验失败不拦截聊天，真正报错时会在发送环节提示 */ });
}
