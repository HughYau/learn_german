// AI 客户端：本地运行时经 server.py 代理；公开静态站由浏览器直连用户配置的端点。
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
  { id: 'custom', label: '自定义（OpenAI 兼容）', base: '', hint: '填入允许浏览器跨域访问的 OpenAI 兼容端点' },
];

function providerDef(id) { return PROVIDERS.find(p => p.id === id); }

export function hasKey() {
  const { provider, apiKey } = getSettings();
  if (providerDef(provider)?.noKey) return true;
  return !!apiKey;
}

export function usesLocalAiProxy(hostname = globalThis.location?.hostname || '') {
  return hostname === 'localhost' || hostname === '127.0.0.1';
}

function safeBaseUrl(baseUrl) {
  const base = String(baseUrl || '').trim().replace(/\/+$/, '');
  if (!base) throw new Error('no-endpoint');
  let parsed;
  try { parsed = new URL(base); }
  catch { throw new Error('unsafe-endpoint'); }
  const localHttp = parsed.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(parsed.hostname);
  if (parsed.protocol !== 'https:' && !localHttp) throw new Error('unsafe-endpoint');
  return base;
}

export function aiRequestUrl(path, baseUrl, hostname = globalThis.location?.hostname || '') {
  if (usesLocalAiProxy(hostname)) return `/api${path}`;
  return safeBaseUrl(baseUrl) + path;
}

function requestHeaders(provider, apiKey, baseUrl, hostname = globalThis.location?.hostname || '') {
  const localProxy = usesLocalAiProxy(hostname);
  const headers = {};
  if (localProxy) headers['X-Upstream-Base'] = safeBaseUrl(baseUrl);
  if (provider === 'anthropic') {
    if (apiKey) {
      headers['x-api-key'] = apiKey;
      headers['anthropic-version'] = '2023-06-01';
      if (!localProxy) headers['anthropic-dangerous-direct-browser-access'] = 'true';
    }
  } else if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }
  return headers;
}

function directFetchOptions() {
  return usesLocalAiProxy() ? {} : { credentials: 'omit', referrerPolicy: 'no-referrer' };
}

export async function chat(messages, system) {
  const { baseUrl, apiKey, model, provider } = getSettings();
  if (!apiKey && !providerDef(provider)?.noKey) throw new Error('no-key');
  if (!model) throw new Error('no-model');
  const isAnthropic = provider === 'anthropic';
  const path = isAnthropic ? '/messages' : '/chat/completions';
  let res;
  try {
    res = await fetch(aiRequestUrl(path, baseUrl), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...requestHeaders(provider, apiKey, baseUrl),
      },
      ...directFetchOptions(),
      body: JSON.stringify(isAnthropic ? {
        model,
        max_tokens: 1600,
        temperature: 0.7,
        system,
        messages,
      } : {
        model,
        messages: [{ role: 'system', content: system }, ...messages],
        max_tokens: 1600,
        temperature: 0.7,
      }),
    });
  } catch (e) {
    if (['no-endpoint', 'unsafe-endpoint'].includes(e?.message)) throw e;
    throw new Error('network');
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
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
  const text = (msg.content || '').replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  if (!text) throw new Error('empty-content');
  return text;
}

// 校验当前设置的模型是否真的存在于服务器；不存在则自动切换到一个可用模型。
// 结果缓存 10 分钟，避免每次打开陪练页都请求一次。
export async function ensureValidModel() {
  const { baseUrl } = getSettings();
  const CACHE_KEY = 'dl.modelcheck.' + baseUrl;
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.at < 10 * 60 * 1000) return cached.result;
  } catch { /* 忽略缓存损坏 */ }

  const models = await fetchModels();
  const cur = getSettings().model;
  let result;
  if (models.includes(cur)) {
    result = { changed: false, model: cur };
  } else {
    const pick = models.find(m => /gpt-4|claude|deepseek-chat|gemini|glm-4|qwen(2\.5|3)?[-.]?(max|plus|72b)/i.test(m))
      || models.find(m => /qwen.*(?:2\d\d|3\d\d)b/i.test(m))
      || models.find(m => /qwen|llama.*70b|gpt-oss/i.test(m))
      || models[0];
    if (!pick) throw new Error('empty-model-list');
    setSettings({ model: pick });
    result = { changed: true, model: pick, old: cur };
  }
  sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), result }));
  return result;
}

export async function fetchModels() {
  const { baseUrl, apiKey, provider } = getSettings();
  let res;
  try {
    res = await fetch(aiRequestUrl('/models', baseUrl), {
      headers: requestHeaders(provider, apiKey, baseUrl),
      ...directFetchOptions(),
    });
  } catch (e) {
    if (['no-endpoint', 'unsafe-endpoint'].includes(e?.message)) throw e;
    throw new Error('network');
  }
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
