// 无依赖的静态产物/离线依赖检查；既可校验源码，也可校验 Pages 的 _site。
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ASSET_DIRS = ['css', 'js', 'data', 'icons'];
export const ROOT_ASSETS = ['index.html', 'manifest.webmanifest'];

export function listAssets(root) {
  function walk(dir) {
    return readdirSync(join(root, dir), { withFileTypes: true }).flatMap(entry => {
      if (entry.name.startsWith('.')) return [];
      const path = `${dir}/${entry.name}`;
      return entry.isDirectory() ? walk(path) : [path];
    });
  }
  return [...ROOT_ASSETS, ...ASSET_DIRS.flatMap(walk)].sort();
}

export function precachePaths(source) {
  const literal = source.match(/const SHELL = (\[[\s\S]*?\]);/)?.[1];
  if (!literal) throw new Error('sw.js 缺少静态 SHELL 清单');
  const paths = JSON.parse(literal);
  if (!Array.isArray(paths) || paths.some(path => typeof path !== 'string')) {
    throw new Error('SHELL 必须是字符串数组');
  }
  return paths;
}

export function validateSite(root) {
  root = resolve(root);
  const errors = new Set();
  const origin = 'https://site.invalid/';
  const exists = path => { try { return statSync(join(root, path)).isFile(); } catch { return false; } };
  function localPath(ref, owner) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(ref) || ref.startsWith('data:')) return null;
    const url = new URL(ref, new URL(owner, origin));
    return decodeURIComponent(url.pathname.slice(1));
  }
  function checkRef(ref, owner) {
    const path = localPath(ref, owner);
    if (path && !exists(path)) errors.add(`${owner} 引用不存在的文件：${path}`);
    return path;
  }
  try {
    for (const path of [...ROOT_ASSETS, 'sw.js']) {
      if (!exists(path)) errors.add(`缺少必需文件：${path}`);
    }
    if (errors.size) return [...errors];
    const assets = listAssets(root);
    const shell = precachePaths(readFileSync(join(root, 'sw.js'), 'utf8'));
    const cached = new Set(shell.map(ref => checkRef(ref, 'sw.js')));
    if (cached.size !== shell.length) errors.add('SHELL 存在重复或非本地资源');
    for (const path of assets) {
      if (!cached.has(path)) errors.add(`SHELL 未预缓存：${path}`);
      const source = /\.(?:html|js|css)$/.test(path) ? readFileSync(join(root, path), 'utf8') : '';
      if (path.endsWith('.html')) {
        for (const match of source.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) checkRef(match[1], path);
      } else if (path.endsWith('.js')) {
        // 当前项目使用字面量 ES module 导入；也检查字面量动态导入。
        for (const match of source.matchAll(/\b(?:import|export)\s+(?:[^;'"\n]*?\s+from\s*)?["']([^"']+)["']/g)) {
          checkRef(match[1], path);
        }
        for (const match of source.matchAll(/\bimport\(\s*["']([^"']+)["']\s*\)/g)) checkRef(match[1], path);
      } else if (path.endsWith('.css') && !source.includes('url(\"data:') && !source.includes("url('data:")) {
        for (const match of source.matchAll(/url\(\s*["']?([^"')\s]+)["']?\s*\)/g)) checkRef(match[1], path);
      }
    }
    const manifest = JSON.parse(readFileSync(join(root, 'manifest.webmanifest'), 'utf8'));
    for (const icon of manifest.icons || []) checkRef(icon.src, 'manifest.webmanifest');
  } catch (error) {
    errors.add(`检查失败：${error.message}`);
  }
  return [...errors];
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const site = resolve(process.argv[2] || '_site');
  const errors = validateSite(site);
  if (errors.length) {
    console.error(errors.map(error => `- ${error}`).join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`✅ 静态站点及离线资源检查通过：${relative(process.cwd(), site) || '.'}`);
  }
}
