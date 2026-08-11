// OpenAI 兼容 API 客户端（GWDG SAIA 等学术 API），另外原生支持 Anthropic Messages API
// 注意：SAIA 网关（Kong）对 CORS 预检请求也要求 API key，浏览器无法直连，
// 所以所有请求都走本机 server.py 提供的同源代理 /api/*，代理再转发到 X-Upstream-Base 指定的真实端点。
import { getSettings, setSettings } from './state.js';

// 服务商预设表，供设置页渲染下拉选项
export const PROVIDERS = [
  { id: 'saia', label: 'GWDG SAIA（学术）', base: 'https://chat-ai.academiccloud.de/v1', hint: '德国学术联合会网关，教育科研机构账号可申请' },
  { id: 'openai', label: 'OpenAI', base: 'https://api.openai.com/v1', hint: 'platform.openai.com 获取 Key' },
  { id: 'anthropic', label: 'Anthropic Claude', base: 'https://api.anthropic.com/v1', hint: 'console.anthropic.com 获取 Key', native: 'anthropic' },
  { id: 'gemini', label: 'Google Gemini', base: 'https://generativelanguage.googleapis.com/v1beta/openai', hint: 'aistudio.google.com 获取 Key（OpenAI 兼容端点）' },
  { id: 'deepseek', label: 'DeepSeek', base: 'https://api.deepseek.com/v1', hint: 'platform.deepseek.com 获取 Key' },
  { id: 'qwen', label: '通义千问 DashScope', base: 'https://dashscope.aliyuncs.com/compatible-mode/v1', hint: '阿里云百炼获取 Key（兼容模式）' },
  { id: 'kimi', label: 'Kimi Moonshot', base: 'https://api.moonshot.cn/v1', hint: 'platform.moonshot.cn 获取 Key' },
  { id: 'glm', label: '智谱 GLM', base: 'https://open.bigmodel.cn/api/paas/v4', hint: 'open.bigmodel.cn 获取 Key' },
  { id: 'siliconflow', label: 'SiliconFlow 硅基流动', base: 'https://api.siliconflow.cn/v1', hint: 'siliconflow.cn 获取 Key' },
  { id: 'openrouter', label: 'OpenRouter', base: 'https://openrouter.ai/api/v1', hint: 'openrouter.ai 获取 Key（聚合多家模型）' },
  { id: 'ollama', label: 'Ollama（本地）', base: 'http://localhost:11434/v1', hint: '本机运行 Ollama 即可，无需 API Key', noKey: true },
  { id: 'custom', label: '自定义（OpenAI 兼容）', base: '', hint: '填入任意 OpenAI 兼容端点（以 /v1 结尾）' },
];

function providerDef(id) { return PROVIDERS.find(p => p.id === id); }

export function hasKey() {
  const { provider, apiKey } = getSettings();
  if (providerDef(provider)?.noKey) return true;
  return !!apiKey;
}

function upstreamHeaders(provider, apiKey, baseUrl) {
  const headers = { 'X-Upstream-Base': baseUrl || 'https://chat-ai.academiccloud.de/v1' };
  if (provider === 'anthropic') {
    if (apiKey) {
      headers['x-api-key'] = apiKey;
      headers['anthropic-version'] = '2023-06-01';
    }
  } else if (apiKey) {
    // ollama 本地无需 Key 时不发 Authorization 头，其余服务商都用 Bearer
    headers['Authorization'] = `Bearer ${apiKey}`;
  }
  return headers;
}

export async function chat(messages, system) {
  const { baseUrl, apiKey, model, provider } = getSettings();
  if (!apiKey && !providerDef(provider)?.noKey) throw new Error('no-key');
  const isAnthropic = provider === 'anthropic';
  let res;
  try {
    res = await fetch(isAnthropic ? '/api/messages' : '/api/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...upstreamHeaders(provider, apiKey, baseUrl),
      },
      body: JSON.stringify(isAnthropic ? {
        model,
        max_tokens: 1600, // 推理型模型会先消耗思考 token，给足余量
        temperature: 0.7,
        system,
        messages, // 只含 user/assistant 轮，Anthropic 的 system 是单独字段
      } : {
        model,
        messages: [{ role: 'system', content: system }, ...messages],
        max_tokens: 1600,
        temperature: 0.7,
      }),
    });
  } catch (e) {
    throw new Error('network');
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    // SAIA/Kong 用顶层 {message}，OpenAI 风格用 {error:{message}}，两种都兼容
    const apiMsg = body?.error?.message || body?.message || `HTTP ${res.status}`;
    const err = new Error((res.status === 401 || res.status === 403) ? 'auth' : apiMsg);
    err.status = res.status;
    throw err;
  }
  const data = await res.json();
  if (isAnthropic) {
    if (data?.stop_reason === 'refusal') throw new Error('refusal');
    const text = (data?.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('')
      .replace(/<think>[\s\S]*?<\/think>/gi, '')
      .trim();
    if (!text) throw new Error('empty-content');
    return text;
  }
  if (data?.choices?.[0]?.finish_reason === 'content_filter') throw new Error('refusal');
  const msg = data?.choices?.[0]?.message || {};
  // 剥掉推理模型可能内嵌在正文里的 <think> 思维链；单独的 reasoning_content 字段直接忽略
  const text = (msg.content || '').replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  if (!text) throw new Error('empty-content');
  return text;
}

// 校验当前设置的模型是否真的存在于服务器；不存在则自动切换到一个可用模型。
// 结果缓存 10 分钟，避免每次打开陪练页都请求一次。
export async function ensureValidModel() {
  const { baseUrl } = getSettings();
  const CACHE_KEY = 'dl.modelcheck.' + baseUrl; // 按端点分开缓存，避免切换服务商后用到旧缓存
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.at < 10 * 60 * 1000) return cached.result;
  } catch { /* 忽略缓存损坏 */ }

  const models = await fetchModels(); // 失败会抛出，由调用方处理
  const cur = getSettings().model;
  let result;
  if (models.includes(cur)) {
    result = { changed: false, model: cur };
  } else {
    // 原模型不存在：优先挑各家的旗舰对话模型，再退到大参数开源模型保底
    const pick = models.find(m => /gpt-4|claude|deepseek-chat|gemini|glm-4|qwen(2\.5|3)?[-.]?(max|plus|72b)/i.test(m))
      || models.find(m => /qwen.*(?:2\d\d|3\d\d)b/i.test(m))
      || models.find(m => /qwen|llama.*70b|gpt-oss/i.test(m))
      || models[0];
    setSettings({ model: pick });
    result = { changed: true, model: pick, old: cur };
  }
  sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), result }));
  return result;
}

export async function fetchModels() {
  const { baseUrl, apiKey, provider } = getSettings();
  const res = await fetch('/api/models', {
    headers: upstreamHeaders(provider, apiKey, baseUrl),
  });
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}`);
    err.status = res.status;
    throw err;
  }
  const data = await res.json();
  const ids = (data?.data || []).map(m => m.id).filter(Boolean);
  return ids.sort();
}

// 按学习者进度分档的语言难度描述（由 chat 视图根据课程完成情况选择）
const LEVEL_RULES = {
  A1: `学生德语水平约为 A1 入门。
1. 你的德语回复必须极其简单：短句、现在时、高频词，每次回复不超过 2-3 个德语短句。
2. 每句德语后面用括号附上中文翻译，例如：Wie geht es dir? (你好吗？)`,
  A2: `学生德语水平约为 A2（已学完成时、情态动词、weil/dass/wenn 从句、两格介词）。
1. 你的德语回复保持在 A2 水平：可自然使用完成时、情态动词和常见从句，每次回复 3-4 个德语短句。
2. 每句德语后面用括号附上中文翻译。`,
  B1: `学生德语水平约为 B1（已学被动态、虚拟式、关系从句、间接引语等全部核心语法）。
1. 你的德语回复保持在 B1 水平：语言自然、可用各种从句和被动态，每次回复 4-5 句。
2. 只给较难的句子附上括号中文翻译，简单句不用翻译，鼓励学生多读德语。`,
};

export function tutorSystem(scenario, level = 'A1') {
  const rules = LEVEL_RULES[level] || LEVEL_RULES.A1;
  return `你是一位耐心的德语老师兼对话伙伴，学生是住在德国莱比锡的中文母语者。${rules}
3. 学生用德语说话时，如果有错误，先温和地给出正确说法（用 ✏️ 开头，附中文说明），再继续对话。
4. 学生用中文提问时，用中文解答，并给出相关的德语例句。
5. 多鼓励，一次只引入一个新表达。
${scenario ? `\n当前情景扮演：${scenario}。请你扮演其中的德国人角色，用德语开启并推进对话，但始终遵守以上规则。` : ''}`;
}
