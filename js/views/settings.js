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

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'EINSTELLUNGEN'));
  container.append(el('h1', { class: 'page' }, '设置 ', el('span', { class: 'de' }, 'Einstellungen')));
  container.append(el('p', { class: 'page-sub' }, '接口、发音、数据——都在这里管理。'));

  const s = getSettings();
  const isStaticDeployment = !['localhost', '127.0.0.1'].includes(location.hostname);

  /* ---- 1. AI 陪练接口 ---- */
  const g1 = el('div', { class: 'set-group card' });
  g1.append(el('h3', {}, 'AI 陪练接口'));
  g1.append(el('div', { class: 'd' }, '本地运行时，AI 请求经由 server.py 转发到你选择的服务商，Key 只保存在当前浏览器。GitHub Pages 只能托管静态学习功能，公开部署后若要启用 AI，需要另配安全的代理后端；不要把 Key 写进仓库。'));

  const curProvider = () => PROVIDERS.find(p => p.id === s.provider) || PROVIDERS[0];

  const providerSelect = el('select', {});
  PROVIDERS.forEach(p => {
    providerSelect.append(el('option', { value: p.id, selected: p.id === s.provider }, p.label));
  });
  const providerHint = el('div', { class: 'd', style: 'margin-top:6px' }, curProvider().hint || '');

  const baseUrlInput = el('input', { type: 'text', value: s.baseUrl || '' });
  const apiKeyInput = el('input', { type: 'password', value: s.apiKey || '', placeholder: curProvider().noKey ? '此服务商无需 Key' : '' });

  providerSelect.addEventListener('change', () => {
    const def = PROVIDERS.find(p => p.id === providerSelect.value) || PROVIDERS[0];
    if (def.id !== 'custom') baseUrlInput.value = def.base;
    providerHint.textContent = def.hint || '';
    apiKeyInput.placeholder = def.noKey ? '此服务商无需 Key' : '';
    // 切换服务商时清除旧 Key 和模型，避免把一家的凭据误发给另一家端点。
    apiKeyInput.value = '';
    modelSelect.innerHTML = '';
    setSettings({ provider: def.id, baseUrl: baseUrlInput.value.trim(), apiKey: '', model: '' });
  });

  const modelSelect = el('select', { style: 'flex:1' });
  if (s.model) modelSelect.append(el('option', { value: s.model, selected: true }, s.model));
  // 即选即存，避免"选了模型但忘点保存"
  modelSelect.addEventListener('change', () => setSettings({ model: modelSelect.value }));
  const refreshBtn = el('button', { class: 'btn ghost small', type: 'button' }, '刷新模型列表');
  const modelRow = el('div', { style: 'display:flex; gap:10px; align-items:center; max-width:480px' }, modelSelect, refreshBtn);
  const modelMsg = el('div', { class: 'd', style: 'margin-top:6px; min-height:1.2em' }, '');

  refreshBtn.addEventListener('click', async () => {
    const key = apiKeyInput.value.trim();
    const base = baseUrlInput.value.trim();
    const provider = PROVIDERS.find(p => p.id === providerSelect.value) || PROVIDERS[0];
    if (!key && !provider.noKey) {
      modelMsg.textContent = '请先填入 API Key，再刷新模型列表。';
      return;
    }
    setSettings({ provider: provider.id, baseUrl: base, apiKey: key });
    refreshBtn.disabled = true;
    refreshBtn.textContent = '获取中…';
    modelMsg.textContent = '';
    try {
      const models = await fetchModels();
      const cur = modelSelect.value;
      modelSelect.innerHTML = '';
      models.forEach(id => modelSelect.append(el('option', { value: id, selected: id === cur }, id)));
      if (models.length && !models.includes(cur)) modelSelect.value = models[0];
      setSettings({ model: modelSelect.value }); // 刷新后立刻保存当前选中的模型
      modelMsg.textContent = `已获取 ${models.length} 个模型，当前选择已保存。`;
    } catch (e) {
      modelMsg.textContent = '获取失败，请检查 API 端点和 Key 是否正确。';
    } finally {
      refreshBtn.disabled = false;
      refreshBtn.textContent = '刷新模型列表';
    }
  });

  const saveBtn = el('button', { class: 'btn', type: 'button', style: 'margin-top:18px' }, '保存');
  const okNote = el('div', { class: 'ok-note', style: 'display:none' }, '已保存 ✓');
  saveBtn.addEventListener('click', () => {
    setSettings({
      baseUrl: baseUrlInput.value.trim(),
      apiKey: apiKeyInput.value.trim(),
      model: modelSelect.value || (modelSelect.options[0] && modelSelect.options[0].value) || '',
    });
    okNote.style.display = '';
    setTimeout(() => { okNote.style.display = 'none'; }, 2000);
  });

  g1.append(
    fieldBlock('服务商', providerSelect),
    providerHint,
    fieldBlock('API 端点', baseUrlInput),
    fieldBlock('API Key', apiKeyInput),
    fieldBlock('模型', modelRow),
    modelMsg, saveBtn, okNote
  );

  if (isStaticDeployment) {
    [providerSelect, baseUrlInput, apiKeyInput, modelSelect, refreshBtn, saveBtn]
      .forEach(node => { node.disabled = true; });
    modelMsg.textContent = '公开静态版未配置 AI 后端，已停用凭据输入；其余学习功能不受影响。';
  }

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
