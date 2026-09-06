// 极简 DOM 工具
export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

// 给 innerHTML 灌进来的富文本里的 <table> 外套一层横向滚动容器，窄屏上宽表格自己滚、不撑开整页
export function wrapTables(root) {
  root.querySelectorAll('table').forEach(table => {
    if (table.parentElement?.classList.contains('table-scroll')) return;
    const scroller = document.createElement('div');
    scroller.className = 'table-scroll';
    table.replaceWith(scroller);
    scroller.append(table);
  });
  return root;
}

export function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
