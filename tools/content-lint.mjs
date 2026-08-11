// 内容质量检查工具：node tools/content-lint.mjs
// 三合一：① 结构校验 ② de/art 冠词重复检查 ③ 例句语法进度检查
// 每次新增/修改课程内容后运行，全绿再上线。
const m = await import('../data/course.js');
const g = await import('../data/grammar.js');

let problems = 0;
const warn = (...args) => { console.log(' ', ...args); problems++; };

/* ---------- ① 结构校验 ---------- */
console.log('=== ① 结构校验 ===');
const cards = m.allVocabCards();
console.log(`units:${m.units.length} lessons:${m.allLessons().length} cards:${cards.length} grammar:${g.grammarTopics.length}`);
if (new Set(cards.map(c => c.id)).size !== cards.length) warn('词卡 id 重复');
for (const unit of m.units) {
  if (!Array.isArray(unit.kann)) { warn(unit.id, '缺 kann 数组'); continue; }
  if (unit.kann.length < 3 || unit.kann.length > 5) warn(unit.id, `kann 条数为 ${unit.kann.length}，应为 3-5 条`);
  for (const k of unit.kann) {
    if (!k.de || typeof k.de !== 'string' || !k.de.trim()) warn(unit.id, 'kann 条目缺 de');
    else if (!k.de.startsWith('Ich kann')) warn(unit.id, 'kann.de 未以 "Ich kann" 开头:', k.de);
    if (!k.zh || typeof k.zh !== 'string' || !k.zh.trim()) warn(unit.id, 'kann 条目缺 zh:', k.de);
  }
}
for (const { unit, lesson } of m.allLessons()) {
  for (const e of lesson.exercises) {
    if ((e.type === 'mcq' || e.type === 'listen' || e.type === 'cloze') &&
      (e.answer == null || !e.options || e.answer >= e.options.length || new Set(e.options).size !== e.options.length))
      warn(lesson.id, '选择题字段问题');
    if (e.type === 'match' && (!e.pairs || e.pairs.length !== 4)) warn(lesson.id, 'match 非4对');
    if (e.type === 'order' && (!e.words || e.words.length < 3)) warn(lesson.id, 'order 过短');
  }
  const types = new Set(lesson.exercises.map(e => e.type));
  if (!types.has('listen') || !types.has('speak')) warn(lesson.id, '缺 listen 或 speak 题');
  for (const s of lesson.sections) {
    if (s.type === 'dialogue') {
      if (new Set(s.lines.map(l => l.sp)).size !== 2) warn(lesson.id, '对话说话人≠2');
      if ((s.scene && !/[一-鿿]/.test(s.scene)) || (s.title && !/[一-鿿]/.test(s.title))) warn(lesson.id, '对话 title/scene 非中文');
    }
    if (s.type === 'vocab') for (const it of s.items) {
      if (it.art && !['der', 'die', 'das'].includes(it.art)) warn(lesson.id, '非法 art:', it.de);
    }
  }
}

/* ---------- ② de 字段冠词重复 ---------- */
console.log('=== ② de/art 冠词重复 ===');
for (const { lesson } of m.allLessons())
  for (const s of lesson.sections)
    if (s.type === 'vocab')
      for (const it of s.items)
        if (it.art && it.de.startsWith(it.art + ' ')) warn(lesson.id, 'de 含冠词:', it.de);

/* ---------- ③ 例句语法进度 ---------- */
console.log('=== ③ 例句语法进度（引入单元前不得使用） ===');
// 已裁定的例外（整句块教学 / 听力课接受性输入）
const WHITELIST = [
  /Was darf’s sein/, /Können Sie/, /Könnten Sie/, /Ich hätte gern/, /Ich würde gern/,
  /Hier müssen Sie umsteigen/, /Ich muss den Termin leider absagen/, /Ich möchte mich anmelden/,
];
const RULES = [
  { name: '情态动词', intro: 9, re: /\b(muss|musst|müssen|müsst|kann|kannst|könnt|will|willst|wollen|darf|darfst|dürfen|soll|sollst|sollen|möchte|möchtest|möchten)\b/i },
  { name: '命令式Sie', intro: 10, re: /^(Gehen|Trinken|Nehmen|Bleiben|Kommen|Schlafen|Warten|Schauen|Hören|Bringen|Füllen|Zeigen) Sie\b/ },
  { name: 'Perfekt', intro: 12, re: /\b(habe|hast|hat|haben|habt|bin|bist|sind|seid) [^.!?]*\bge\w+(t|en)\b/ },
  { name: 'weil 从句', intro: 18, re: /\bweil\b/i },
  { name: 'dass 从句', intro: 20, re: /\bdass\b/i },
  { name: '比较级als', intro: 17, re: /\b\w{3,}er als\b/ },
  { name: '被动态', intro: 23, re: /\b(wird|werden|wurde|wurden) [^.!?]*\bge\w+(t|en)\b|\bworden\b/i },
  { name: '反身动词', intro: 21, re: /\b(mich|dich|sich|uns|euch) (freue|freust|freut|fühle|fühlst|fühlt|erkälte|kümmere|kümmert|verabrede|erhole)\b/i },
  { name: 'KonjII', intro: 26, re: /\b(wäre|hätte|hättest|könnte|würde|würdest|müsste)\b/i },
  { name: 'Genitiv介词', intro: 29, re: /\b(wegen|trotz|während) (des|der|eines|einer) \w+/i },
  { name: 'zu不定式', intro: 24, re: /(,| nicht| Zeit| Lust| wichtig| schwierig|versuche\w*|vergesse\w*|anfange\w*|aufhöre\w*|vorhabe\w*) zu \w+(en|eln|ern)\b|\b\w+zu\w+(en|eln|ern)\b/ },
];
for (const { unit, lesson } of m.allLessons()) {
  const uNum = parseInt(unit.id.slice(1));
  for (const s of lesson.sections) {
    if (s.type !== 'vocab') continue;
    for (const it of s.items) {
      if (!it.ex) continue;
      if (WHITELIST.some(w => w.test(it.ex))) continue;
      // "sein + 分词作形容词"且分词就是词条本身 → 不算 Perfekt（如 Der Laden ist geschlossen.）
      for (const r of RULES) {
        if (uNum >= r.intro) continue;
        if (r.name === 'Perfekt' && /^ge\w+/.test(it.de) && it.ex.includes(it.de)) continue;
        if (r.re.test(it.ex)) warn(`[${lesson.id}] ${r.name}(u${r.intro}才教):`, `"${it.ex}"`, '←', it.de);
      }
    }
  }
}

/* ---------- ④ 听力数据校验 ---------- */
console.log('=== ④ 听力数据校验 ===');
const lst = await import('../data/listening.js');
const items = lst.listeningItems;
console.log(`listening items:${items.length}`);
if (new Set(items.map(i => i.id)).size !== items.length) warn('听力条目 id 重复');
const levelCount = { A1: 0, A2: 0, B1: 0 };
for (const it of items) {
  if (!['A1', 'A2', 'B1'].includes(it.level)) warn(it.id, '非法 level:', it.level);
  else levelCount[it.level]++;
  if (!it.text || typeof it.text !== 'string' || !it.text.trim()) warn(it.id, 'text 为空');
  if (!Array.isArray(it.questions) || it.questions.length !== 2) warn(it.id, 'questions 应恰为 2 题');
  else for (const q of it.questions) {
    if (q.answer == null || !q.options || q.answer >= q.options.length || new Set(q.options).size !== q.options.length)
      warn(it.id, '听力题字段问题');
  }
  if (!it.dictation || typeof it.dictation !== 'string' || !it.text.includes(it.dictation))
    warn(it.id, 'dictation 不是 text 的子串');
}
for (const lv of ['A1', 'A2', 'B1'])
  if (levelCount[lv] !== 7) warn(`听力 ${lv} 条数为 ${levelCount[lv]}，应为 7`);

/* ---------- ⑤ 阅读数据校验 ---------- */
console.log('=== ⑤ 阅读数据校验 ===');
const rd = await import('../data/reading.js');
const texts = rd.readingTexts;
console.log(`reading texts:${texts.length}`);
if (new Set(texts.map(t => t.id)).size !== texts.length) warn('阅读条目 id 重复');
const rLevelCount = { A1: 0, A2: 0, B1: 0 };
const rQCount = { A1: 2, A2: 3, B1: 3 };
for (const t of texts) {
  if (!['A1', 'A2', 'B1'].includes(t.level)) warn(t.id, '非法 level:', t.level);
  else rLevelCount[t.level]++;
  if (!t.text || typeof t.text !== 'string' || !t.text.trim()) warn(t.id, 'text 为空');
  if (!t.gloss || typeof t.gloss !== 'object') warn(t.id, '缺 gloss');
  else for (const key of Object.keys(t.gloss))
    if (!t.text.includes(key)) warn(t.id, 'gloss key 未出现在 text 中:', key);
  const expectedQ = rQCount[t.level];
  if (!Array.isArray(t.questions) || t.questions.length !== expectedQ)
    warn(t.id, `questions 数量为 ${t.questions?.length}，应为 ${expectedQ}（${t.level}）`);
  else for (const q of t.questions) {
    if (q.answer == null || !q.options || q.answer >= q.options.length || new Set(q.options).size !== q.options.length)
      warn(t.id, '阅读题字段问题:', q.q);
  }
}
for (const lv of ['A1', 'A2', 'B1'])
  if (rLevelCount[lv] !== 4) warn(`阅读 ${lv} 条数为 ${rLevelCount[lv]}，应为 4`);

/* ---------- ⑥ 词汇包校验 ---------- */
console.log('=== ⑥ 词汇包校验 ===');
const ws = await import('../data/wortschatz.js');
const packs = ws.wortschatzPacks;
console.log(`packs:${packs.length}`);
if (new Set(packs.map(p => p.id)).size !== packs.length) warn('词汇包 id 重复');
const courseWords = new Set(cards.map(c => c.de));
const seenPackWords = new Set();
for (const pack of packs) {
  const n = Array.isArray(pack.items) ? pack.items.length : 0;
  if (n < 20) warn(pack.id, `词数为 ${n}，应 ≥20`);
  if (!['A2', 'B1'].includes(pack.level)) warn(pack.id, '非法 level:', pack.level);
  const uNum = pack.level === 'B1' ? 33 : 23;
  for (const it of (pack.items || [])) {
    if (!it.de || typeof it.de !== 'string' || !it.de.trim()) { warn(pack.id, '词条缺 de'); continue; }
    if (/^(der|die|das) /.test(it.de)) warn(pack.id, 'de 含冠词:', it.de);
    if (it.art && !['der', 'die', 'das'].includes(it.art)) warn(pack.id, '非法 art:', it.de);
    if (!it.ex || typeof it.ex !== 'string' || !it.ex.trim()) warn(pack.id, '缺 ex:', it.de);
    if (!it.exZh || typeof it.exZh !== 'string' || !it.exZh.trim()) warn(pack.id, '缺 exZh:', it.de);
    if (courseWords.has(it.de)) warn(pack.id, 'de 与课程词重复:', it.de);
    if (seenPackWords.has(it.de)) warn(pack.id, 'de 与其他词汇包词条重复:', it.de);
    seenPackWords.add(it.de);
    if (it.ex && !WHITELIST.some(w => w.test(it.ex))) {
      for (const r of RULES) {
        if (uNum >= r.intro) continue;
        if (r.name === 'Perfekt' && /^ge\w+/.test(it.de) && it.ex.includes(it.de)) continue;
        if (r.re.test(it.ex)) warn(`[${pack.id}]`, r.name + `(u${r.intro}才教):`, `"${it.ex}"`, '←', it.de);
      }
    }
  }
}

console.log(problems === 0 ? '\n✅ 全部检查通过' : `\n❌ 共 ${problems} 处问题`);
