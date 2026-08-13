import test from 'node:test';
import assert from 'node:assert/strict';

const { syllabify, stressIndex, analyze, spokenForm, lookupEntry } = await import('../js/pronounce.js');
const { pronunciationDict } = await import('../data/pronunciation.js');

/* ---------------- 音节切分 ---------------- */

test('音节切分：Issue #1 点名的词', () => {
  assert.deepEqual(syllabify('schöne'), ['schö', 'ne']);
  assert.deepEqual(syllabify('Stadt'), ['Stadt']);
  assert.deepEqual(syllabify('Leipzig'), ['Leip', 'zig']);
  assert.deepEqual(syllabify('Straße'), ['Stra', 'ße']);
  assert.deepEqual(syllabify('Österreich'), ['Ös', 'ter', 'reich']);
  for (const w of ['der', 'die', 'das']) assert.deepEqual(syllabify(w), [w]);
});

test('音节切分：不可拆分的辅音组合整体归后一个音节', () => {
  assert.deepEqual(syllabify('Zucker'), ['Zu', 'cker']);   // ck 不拆
  assert.deepEqual(syllabify('Flasche'), ['Fla', 'sche']); // sch 不拆
  assert.deepEqual(syllabify('Mädchen'), ['Mäd', 'chen']); // ch 不拆
  assert.deepEqual(syllabify('Katze'), ['Kat', 'ze']);     // tz 照常拆
});

test('音节切分：构词前缀边界优先于通用规则', () => {
  assert.deepEqual(syllabify('verstehen'), ['ver', 'ste', 'hen']); // 不是 vers-te-hen
  assert.deepEqual(syllabify('aufstehen'), ['auf', 'ste', 'hen']); // 不是 aufs-te-hen
  assert.deepEqual(syllabify('bekommen'), ['be', 'kom', 'men']);
  assert.deepEqual(syllabify('Entschuldigung'), ['Ent', 'schul', 'di', 'gung']);
});

test('音节切分：假前缀不能误伤词根', () => {
  assert.deepEqual(syllabify('beide'), ['bei', 'de']); // be- 不能切进 ei 二合元音
  assert.deepEqual(syllabify('Ente'), ['En', 'te']);   // ent- 后面词干太短
  assert.deepEqual(syllabify('Ernte'), ['Ern', 'te']); // er- 后面 "nte" 不是合法音节开头
  assert.deepEqual(syllabify('besser'), ['bes', 'ser']);
});

test('音节切分：词典 syl 字段可以覆盖规则', () => {
  // 规则会把 Universität 误判成 un- 前缀
  assert.deepEqual(syllabify('Universität'), ['U', 'ni', 'ver', 'si', 'tät']);
});

test('音节切分：空值和单音节不炸', () => {
  assert.deepEqual(syllabify(''), []);
  assert.deepEqual(syllabify('   '), []);
  assert.deepEqual(syllabify(undefined), []);
  assert.deepEqual(syllabify('und'), ['und']);
});

test('音节切分：拼回去必须等于原词', () => {
  const words = ['schöne', 'Leipzig', 'Österreich', 'Universität', 'Entschuldigung',
    'zurückkommen', 'Bäckerei', 'Familie', 'beobachten', 'Geschwindigkeit'];
  for (const w of words) assert.equal(syllabify(w).join(''), w, `拼回失败：${w}`);
});

/* ---------------- 重音 ---------------- */

test('重音：默认落在第一个音节', () => {
  assert.equal(stressIndex('Leipzig'), 0);
  assert.equal(stressIndex('Straße'), 0);
  assert.equal(stressIndex('Österreich'), 0);
  assert.equal(stressIndex('schöne'), 0);
});

test('重音：不重读前缀往后挪一位', () => {
  assert.equal(stressIndex('verstehen'), 1);  // ver-STE-hen
  assert.equal(stressIndex('bekommen'), 1);   // be-KOM-men
  assert.equal(stressIndex('erzählen'), 1);   // er-ZÄH-len
  assert.equal(stressIndex('Entschuldigung'), 1);
});

test('重音：外来词后缀', () => {
  assert.equal(stressIndex('studieren'), 1);          // stu-DIE-ren
  assert.equal(stressIndex('Universität'), 4);        // …-TÄT
  assert.equal(stressIndex('Bäckerei'), 2);           // …-REI
  assert.equal(stressIndex('zurückkommen'), 1);       // zu-RÜCK-kom-men
});

test('重音：词典覆盖赢过规则', () => {
  // Familie 以 -ie 结尾，但重音不在最后一个音节
  assert.equal(stressIndex('Familie'), 1);
  assert.equal(stressIndex('Linie'), 0);
  // 对照组：真正重音在词尾的 -ie
  assert.equal(stressIndex('Batterie'), 2);
});

test('重音：序号永远落在合法范围内', () => {
  for (const key of Object.keys(pronunciationDict)) {
    const syls = syllabify(key);
    const idx = stressIndex(key, syls);
    assert.ok(Number.isInteger(idx) && idx >= 0 && idx < syls.length,
      `${key} 重音序号 ${idx} 越界（共 ${syls.length} 个音节）`);
  }
});

/* ---------------- 冠词 / 朗读文本 ---------------- */

test('spokenForm：名词带冠词一起读', () => {
  assert.equal(spokenForm('Stadt', 'die'), 'die Stadt');
  assert.equal(spokenForm('Buch', 'das'), 'das Buch');
  assert.equal(spokenForm('Mann', 'der'), 'der Mann');
});

test('spokenForm：没传冠词时查词典补', () => {
  assert.equal(spokenForm('Stadt'), 'die Stadt');
  assert.equal(spokenForm('Haus'), 'das Haus');
});

test('spokenForm：已经带冠词不重复加', () => {
  assert.equal(spokenForm('die Stadt', 'die'), 'die Stadt');
  assert.equal(spokenForm('das Buch'), 'das Buch');
});

test('spokenForm：非名词原样返回', () => {
  assert.equal(spokenForm('gehen'), 'gehen');
  assert.equal(spokenForm(''), '');
});

test('spokenForm：习惯不带冠词的国名不能被加上冠词', () => {
  assert.equal(spokenForm('Österreich'), 'Österreich');
  assert.equal(spokenForm('Deutschland'), 'Deutschland');
  assert.equal(spokenForm('Leipzig'), 'Leipzig');
  // 对照：die Schweiz 是要带冠词的
  assert.equal(spokenForm('Schweiz'), 'die Schweiz');
});

/* ---------------- analyze ---------------- */

test('analyze：给 UI 的完整结果', () => {
  const a = analyze('Leipzig');
  assert.equal(a.word, 'Leipzig');
  assert.equal(a.marked, 'LEIP·zig');
  assert.equal(a.ipa, 'ˈlaɪ̯pt͡sɪç');
  assert.equal(a.known, true);
});

test('analyze：带冠词传入时会剥离并回填', () => {
  const a = analyze('die Stadt');
  assert.equal(a.word, 'Stadt');
  assert.equal(a.art, 'die');
  assert.equal(a.spoken, 'die Stadt');
});

test('analyze：未收录的词也能给出音节和重音，只是没有 IPA', () => {
  const a = analyze('Quatschkopf');
  assert.equal(a.known, false);
  assert.equal(a.ipa, null);
  assert.ok(a.syllables.length >= 1);
  assert.ok(a.marked.includes('·') || a.syllables.length === 1);
});

test('analyze：显式 art 参数优先于词典', () => {
  assert.equal(analyze('Stadt', { art: 'der' }).art, 'der');
});

/* ---------------- 词典自身的完整性 ---------------- */

test('词典：键全小写、字段合法', () => {
  for (const [key, entry] of Object.entries(pronunciationDict)) {
    assert.equal(key, key.toLowerCase(), `词典键必须小写：${key}`);
    assert.equal(typeof entry, 'object', `${key} 条目不是对象`);
    if ('ipa' in entry) assert.ok(typeof entry.ipa === 'string' && entry.ipa.length, `${key} 的 ipa 为空`);
    if ('art' in entry) assert.ok(['der', 'die', 'das'].includes(entry.art), `${key} 的 art 非法：${entry.art}`);
    if ('stress' in entry) assert.ok(Number.isInteger(entry.stress) && entry.stress >= 0, `${key} 的 stress 非法`);
    if ('syl' in entry) {
      assert.ok(Array.isArray(entry.syl), `${key} 的 syl 不是数组`);
      assert.equal(entry.syl.join('').toLowerCase(), key, `${key} 的 syl 拼回不等于原词`);
    }
  }
});

test('lookupEntry：忽略大小写和尾部标点', () => {
  assert.ok(lookupEntry('STADT'));
  assert.ok(lookupEntry('Stadt,'));
  assert.ok(lookupEntry('  stadt  '));
  assert.equal(lookupEntry('gibtesnicht'), null);
  assert.equal(lookupEntry(''), null);
});
