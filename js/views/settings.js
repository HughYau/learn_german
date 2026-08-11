// #/settings 设置
import { el } from '../ui.js';
import { getSettings, setSettings, resetAll, exportData, importData } from '../state.js';
import { germanVoices, speak, speechSynthesisSupported } from '../audio.js';
import { fetchModels, PROVIDERS } from '../ai.js';

function fieldBlock(labelText, node) {
  const wrap = el('div', { style: 'margin-top:14px' });
  wrap.append(el('div', { style: 'font-size:.85rem; font-weight:700; margin-bottom:6px' }, labelText));
  wrap.append(node);
  return wrap;
}

function safeEndpoint(value) {
  try {
    const url = new URL(String(value || '').trim());
    return url.protocol === 'https:'
      || (url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname));
  } catch { return false; }
}

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'EINSTELLUNGEN'));
  container.append(el('h1', { class: 'page' }, '设置 ', el('span', { class: 'de' }, 'Einstellungen')));
  container.append(el('p', { class: 'page-sub' }, '接口、发音、数据——都在这里管理。'));

  const s = getSettings();
  const directMode = !['localhost', '127.0.0.1'].includes(location.hostname);

  /* ---- 1. AI 陪练接口 ---- */
  const g1 = el('div', { class: 'set-group card' });
  g1.append(el('h3', {}, 'AI 陪练接口'));
  g1.append(el('div', { class: 'd' }, directMode
    ? '公开版会从当前浏览器直接请求你填写的 API 端点。端点、模型和 Key 只保存在本机；服务商必须允许浏览器跨域访问。请只在可信设备上使用个人 Key。'
    : '本地版通过 server.py 转发 AI 请求。端点、模型和 Key 只保存在当前浏览器，不会写入项目文件。'));

  const curProvider = () => PROVIDERS.find(p => p.id === s.provider) || PROVIDERS[0];

  const providerSelect = el('select', {});
  PROVIDERS.forEach(p => {
    providerSelect.append(el('option', { value: p.id, selected: p.id === s.provider }, p.label));
  });
  const providerHint = el('div', { class: 'd', style: 'margin-top:6px' }, curProvider().hint || '');

  const baseUrlInput = el('input', { type: 'text', value: s.baseUrl || '', placeholder: 'https://example.com/v1', spellcheck: false });
  const apiKeyInput = el('input', { type: 'password', value: s.apiKey || '', placeholder: curProvider().noKey ? '此服务商无需 Key' : '', autocomplete: 'off' });
  const modelList = el('datalist', { id: 'ai-model-options' });
  const modelInput = el('input', { type: 'text', value: s.model || '', list: 'ai-model-options', placeholder: '模型 ID，也可以手动填写', spellcheck: false });

  providerSelect.addEventListener('change', () => {
    const def = PROVIDERS.find(p => p.id === providerSelect.value) || PROVIDERS[0];
    if (def.id !== 'custom') baseUrlInput.value = def.base;
    providerHint.textContent = def.hint || '';
    apiKeyInput.placeholder = def.noKey ? '此服务商无需 Key' : '';
    // 切换服务商时清除旧凭据和模型，避免误发给另一个端点。
    apiKeyInput.value = '';
    modelInput.value = '';
    modelList.innerHTML = '';
    setSettings({ provider: def.id, baseUrl: baseUrlInput.value.trim(), apiKey: '', model: '' });
  });
  modelInput.addEventListener('change', () => setSettings({ model: modelInput.value.trim() }));

  const refreshBtn = el('button', { class: 'btn ghost small', type: 'button' }, '刷新模型列表');
  const modelRow = el('div', { style: 'display:flex; gap:10px; align-items:center; max-width:560px' }, modelInput, modelList, refreshBtn);
  const modelMsg = el('div', { class: 'd', style: 'margin-top:6px; min-height:1.2em' }, '模型列表无法获取时，可直接手动填写模型 ID。');

  refreshBtn.addEventListener('click', async () => {
    const key = apiKeyInput.value.trim();
    const base = baseUrlInput.value.trim();
    const provider = PROVIDERS.find(p => p.id === providerSelect.value) || PROVIDERS[0];
    if (!safeEndpoint(base)) {
      modelMsg.textContent = '请输入 HTTPS 端点；HTTP 仅允许 localhost 或 127.0.0.1。';
      return;
    }
    if (!key && !provider.noKey) {
      modelMsg.textContent = '请先填入 API Key，再刷新模型列表。';
      return;
    }
    setSettings({ provider: provider.id, baseUrl: base, apiKey: key, model: modelInput.value.trim() });
    refreshBtn.disabled = true;
    refreshBtn.textContent = '获取中…';
    modelMsg.textContent = '';
    try {
      const models = await fetchModels();
      const cur = modelInput.value.trim();
      modelList.innerHTML = '';
      models.forEach(id => modelList.append(el('option', { value: id })));
      if (!cur && models.length) modelInput.value = models[0];
      setSettings({ model: modelInput.value.trim() });
      modelMsg.textContent = models.length
        ? `已获取 ${models.length} 个模型，当前模型已保存。`
        : '端点没有返回模型列表，请手动填写模型 ID。';
    } catch (e) {
      modelMsg.textContent = directMode && e?.message === 'network'
        ? '浏览器无法连接该端点。请确认地址正确，并确认服务商允许跨域请求（CORS）；仍可手动填写模型 ID 后尝试对话。'
        : '获取失败，请检查 API 端点、Key 和跨域设置。也可以手动填写模型 ID。';
    } finally {
      refreshBtn.disabled = false;
      refreshBtn.textContent = '刷新模型列表';
    }
  });

  const saveBtn = el('button', { class: 'btn', type: 'button', style: 'margin-top:18px' }, '保存');
  const okNote = el('div', { class: 'ok-note', style: 'display:none' }, '已保存 ✓');
  saveBtn.addEventListener('click', () => {
    const base = baseUrlInput.value.trim();
    if (!safeEndpoint(base)) {
      modelMsg.textContent = '未保存：请输入 HTTPS 端点；HTTP 仅允许本机地址。';
      return;
    }
    setSettings({
      provider: providerSelect.value,
      baseUrl: base,
      apiKey: apiKeyInput.value.trim(),
      model: modelInput.value.trim(),
    });
    okNote.style.display = '';
    setTimeout(() => { okNote.style.display = 'none'; }, 2000);
  });

  g1.append(
    fieldBlock('服务商', providerSelect),
    providerHint,
    fieldBlock('API 端点', baseUrlInput),
    fieldBlock('API Key（仅保存在本机）', apiKeyInput),
    fieldBlock('模型', modelRow),
    modelMsg, saveBtn, okNote
  );
  /* ---- 2. 发音 ---- */
  const g2 = el('div', { class: 'set-group card' });
  g2.append(el('h3', {}, '发音'));
  g2.append(el('div', { class: 'd' }, speechSynthesisSupported
    ? '推荐使用 Edge 浏览器的 Natural 语音，音质更接近真人。'
    : '当前浏览器不支持语音合成，朗读按钮会自动停用；课程文字内容仍可正常学习。'));

  const voiceSelect = el('select', {});
  function fillVoices() {
    const cur = getSettings().voiceName;
    voiceSelect.innerHTML = '';
    voiceSelect.append(el('option', { value: '' }, '自动选择'));
    germanVoices().forEach(v => {
      voiceSelect.append(el('option', { value: v.name, selected: v.name === cur }, v.name));
    });
  }
  fillVoices();
  // 浏览器语音列表是异步加载的，就绪后重新填充
  if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.addEventListener('voiceschanged', fillVoices, { once: true });
  }
  voiceSelect.addEventListener('mousedown', () => { if (voiceSelect.options.length <= 1) fillVoices(); });
  voiceSelect.addEventListener('change', () => setSettings({ voiceName: voiceSelect.value }));

  const rateInput = el('input', { type: 'range', min: '0.5', max: '1.2', step: '0.05', value: String(s.rate || 0.92) });
  const rateLabel = el('span', {}, String(s.rate || 0.92));
  const rateRow = el('div', { style: 'display:flex; align-items:center; gap:12px' }, rateInput, rateLabel);
  rateInput.addEventListener('input', () => {
    rateLabel.textContent = rateInput.value;
    setSettings({ rate: parseFloat(rateInput.value) });
  });

  const previewBtn = el('button', { class: 'btn ghost small', type: 'button', style: 'margin-top:16px', disabled: !speechSynthesisSupported }, '试听');
  previewBtn.addEventListener('click', () => speak('Guten Tag! Willkommen in Leipzig.'));

  g2.append(fieldBlock('德语语音', voiceSelect), fieldBlock('语速', rateRow), previewBtn);

  /* ---- 3. 关于学习数据 ---- */
  const g3 = el('div', { class: 'set-group card' });
  g3.append(el('h3', {}, '关于学习数据'));
  g3.append(el('div', { class: 'd' }, '所有学习进度、听读成绩、闪卡记录和设置都只保存在当前浏览器。换设备前请先导出备份，再在新设备导入；清空操作会删除全部 DailyGerman 本地数据。'));
  const clearBtn = el('button', { class: 'btn', type: 'button', style: 'margin-top:6px' }, '清空全部学习数据');
  clearBtn.addEventListener('click', () => {
    if (!confirm('确定要清空全部学习数据吗？此操作不可恢复。')) return;
    resetAll();
    location.hash = '#/';
  });
  g3.append(clearBtn);

  // ---- 导出备份 ----
  const backupWrap = el('div', { style: 'margin-top:22px; padding-top:18px; border-top:1px solid var(--line)' });
  backupWrap.append(el('div', { style: 'font-size:.85rem; font-weight:700; margin-bottom:8px' }, '导出 / 导入备份'));

  const includeKeyCheckbox = el('input', { type: 'checkbox' });
  const includeKeyLabel = el('label', { class: 'inline' }, includeKeyCheckbox, '包含 API Key');
  const includeKeyNote = el('div', { class: 'd', style: 'margin:2px 0 12px' }, '勾选后备份文件里会含明文 Key，请勿分享。');

  const exportBtn = el('button', { class: 'btn ghost small', type: 'button' }, '导出备份');
  exportBtn.addEventListener('click', () => {
    const data = exportData({ includeKey: includeKeyCheckbox.checked });
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().slice(0, 10);
    const a = el('a', { href: url, download: `dailygerman-backup-${dateStr}.json` });
    document.body.append(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  const importInput = el('input', { type: 'file', accept: 'application/json', style: 'display:none' });
  const importBtn = el('button', { class: 'btn ghost small', type: 'button', style: 'margin-left:10px' }, '导入备份');
  importBtn.addEventListener('click', () => importInput.click());
  importInput.addEventListener('change', () => {
    const file = importInput.files && importInput.files[0];
    if (!file) return;
    if (!confirm('导入备份将覆盖当前的学习进度、设置与收藏，确定要继续吗？')) {
      importInput.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const obj = JSON.parse(String(reader.result));
        importData(obj);
        alert('导入成功，页面将刷新');
        location.reload();
      } catch (e) {
        alert('导入失败：' + (e?.message || e));
      } finally {
        importInput.value = '';
      }
    };
    reader.onerror = () => {
      alert('导入失败：文件读取出错');
      importInput.value = '';
    };
    reader.readAsText(file);
  });

  backupWrap.append(includeKeyLabel, includeKeyNote, exportBtn, importBtn, importInput);
  g3.append(backupWrap);

  container.append(g1, g2, g3);
}
