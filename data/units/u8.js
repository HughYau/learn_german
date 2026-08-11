// 第 8 单元：家庭与介绍他人
export default {
  id: 'u8', num: '8', color: 'green', shape: 'circle',
  de: 'Familie', zh: '家庭与介绍他人',
  desc: '周末聚餐总要互相介绍家人——"这是我的哥哥"、"我还没结婚"。这个单元教你用物主代词说清楚谁是谁，还有德语里最容易搞混的两个否定词：kein 和 nicht。',
  kann: [
    { de: 'Ich kann meine Familie mit Possessivartikeln (mein/meine) vorstellen.', zh: '我能用物主冠词介绍我的家人。' },
    { de: 'Ich kann mit kein und nicht richtig zwischen „etwas nicht haben“ und allgemeiner Verneinung unterscheiden.', zh: '我能用 kein 和 nicht 分别表达“没有”和一般否定。' },
    { de: 'Ich kann einfache Sätze über Geschwister, Eltern und Freunde bilden.', zh: '我能用简单句子说说我的兄弟姐妹、父母和朋友。' },
  ],
  lessons: [
    {
      id: 'u8l1', title: '这是我的家人', de: 'Das ist meine Familie',
      intro: '介绍家人是聚会上最自然的话题之一。这一课学会常见的家庭称谓词，还有物主代词 mein/dein/sein……——德语里说"我的、你的、他的"全靠这一组词，规律和 u3 学过的 ein→einen 是同一套逻辑，学起来会很快。',
      sections: [
        {
          type: 'vocab', title: '核心家庭成员', sub: '',
          items: [
            { de: 'Familie', art: 'die', pl: 'Familien', zh: '家庭', en: 'family', ex: 'Das ist meine Familie.', exZh: '这是我的家人。' },
            { de: 'Eltern', art: 'die', zh: '父母（只有复数）', en: 'parents', ex: 'Meine Eltern wohnen in China.', exZh: '我父母住在中国。', note: '没有单数形式，"我父亲"要单独说 der Vater' },
            { de: 'Mutter', art: 'die', pl: 'Mütter', zh: '母亲', en: 'mother', ex: 'Meine Mutter kocht sehr gut.', exZh: '我妈妈做饭很好吃。' },
            { de: 'Vater', art: 'der', pl: 'Väter', zh: '父亲', en: 'father', ex: 'Mein Vater trinkt gern Tee.', exZh: '我爸爸喜欢喝茶。' },
            { de: 'Kind', art: 'das', pl: 'Kinder', zh: '孩子', en: 'child', ex: 'Das Kind ist müde.', exZh: '孩子累了。' },
            { de: 'Bruder', art: 'der', pl: 'Brüder', zh: '兄弟', en: 'brother', ex: 'Ich habe einen Bruder.', exZh: '我有一个哥哥。' },
            { de: 'Schwester', art: 'die', pl: 'Schwestern', zh: '姐妹', en: 'sister', ex: 'Hast du eine Schwester?', exZh: '你有姐妹吗？' },
            { de: 'Sohn', art: 'der', pl: 'Söhne', zh: '儿子', en: 'son', ex: 'Unser Sohn heißt Paul.', exZh: '我们的儿子叫保罗。' },
            { de: 'Tochter', art: 'die', pl: 'Töchter', zh: '女儿', en: 'daughter', ex: 'Unsere Tochter ist fünf Jahre alt.', exZh: '我们的女儿五岁。' },
            { de: 'Geschwister', art: 'die', zh: '兄弟姐妹（只有复数）', en: 'siblings', ex: 'Hast du Geschwister?', exZh: '你有兄弟姐妹吗？' },
          ]
        },
        {
          type: 'vocab', title: '伴侣与关系', sub: '',
          items: [
            { de: 'Mann', art: 'der', pl: 'Männer', zh: '男人；丈夫', en: 'man / husband', ex: 'Das ist mein Mann Thomas.', exZh: '这是我丈夫托马斯。', note: '"我的丈夫"= mein Mann，靠上下文和物主代词分辨意思' },
            { de: 'Frau', art: 'die', pl: 'Frauen', zh: '女人；妻子', en: 'woman / wife', ex: 'Seine Frau kommt aus Leipzig.', exZh: '他的妻子来自莱比锡。' },
            { de: 'Partner', art: 'der', pl: 'Partner', zh: '伴侣（男）', en: 'partner (male)', ex: 'Mein Partner arbeitet am Institut.', exZh: '我的伴侣在研究所工作。' },
            { de: 'Partnerin', art: 'die', pl: 'Partnerinnen', zh: '伴侣（女）', en: 'partner (female)', ex: 'Seine Partnerin heißt Julia.', exZh: '他的伴侣叫尤莉娅。' },
            { de: 'Freund', art: 'der', pl: 'Freunde', zh: '朋友（男）；男朋友', en: 'friend / boyfriend', ex: 'Das ist ein Freund von mir.', exZh: '这是我的一个朋友。', note: '歧义词，见下方提示' },
            { de: 'Freundin', art: 'die', pl: 'Freundinnen', zh: '朋友（女）；女朋友', en: 'friend / girlfriend', ex: 'Hast du eine Freundin?', exZh: '你有女朋友吗？', note: '歧义词，见下方提示' },
            { de: 'Großeltern', art: 'die', zh: '祖父母（只有复数）', en: 'grandparents', ex: 'Meine Großeltern wohnen auch in China.', exZh: '我的祖父母也住在中国。' },
            { de: 'verheiratet', zh: '已婚的', en: 'married', ex: 'Bist du verheiratet?', exZh: '你结婚了吗？' },
            { de: 'ledig', zh: '单身的，未婚的', en: 'single', ex: 'Ich bin ledig.', exZh: '我是单身。' },
          ]
        },
        {
          type: 'dialogue', title: '烧烤聚会上看照片', scene: '周末烧烤聚会上，Anna 给 Wei 看家人的照片，聊起彼此的家庭。',
          lines: [
            { sp: 'Anna', de: 'Wei, schau mal, ich hab ein Foto von meiner Familie dabei.', zh: 'Wei，你看，我这儿有张我家人的照片。' },
            { sp: 'Wei', de: 'Oh, zeig mal! Wer ist das alles?', zh: '哦，给我看看！这都是谁呀？' },
            { sp: 'Anna', de: 'Das bin ich mit meinem Mann Thomas und unseren zwei Kindern.', zh: '这是我，和我丈夫托马斯，还有我们的两个孩子。' },
            { sp: 'Wei', de: 'Wie süß! Wie heißen eure Kinder?', zh: '真可爱！你们的孩子叫什么名字？' },
            { sp: 'Anna', de: 'Unser Sohn heißt Paul, er ist acht. Und unsere Tochter Mia ist fünf.', zh: '我们儿子叫保罗，八岁。女儿米娅五岁。' },
            { sp: 'Wei', de: 'Schön! Habt ihr noch mehr Familie hier in Leipzig?', zh: '真好！你们在莱比锡还有其他家人吗？' },
            { sp: 'Anna', de: 'Ja, meine Eltern wohnen auch hier. Und du? Hast du Geschwister?', zh: '有，我父母也住这儿。你呢？你有兄弟姐妹吗？' },
            { sp: 'Wei', de: 'Nein, ich habe keine Geschwister. Aber ich habe eine Cousine, Lin. Sie ist wie eine Schwester für mich.', zh: '没有，我没有兄弟姐妹。不过我有个表姐琳，她对我来说就像亲姐姐。' },
            { sp: 'Anna', de: 'Ist sie verheiratet?', zh: '她结婚了吗？' },
            { sp: 'Wei', de: 'Ja, sie ist verheiratet, aber sie hat noch keine Kinder.', zh: '结了，但她还没有孩子。' },
            { sp: 'Anna', de: 'Und deine Eltern? Wohnen die auch hier?', zh: '那你父母呢？他们也住这儿吗？' },
            { sp: 'Wei', de: 'Nein, meine Eltern wohnen in China. Ich vermisse sie manchmal.', zh: '不，我父母住在中国。我有时候会想他们。' },
          ]
        },
        {
          type: 'grammar', title: 'Possessivartikel（一格）：我的、你的、他的……', sub: '从真实介绍句出发，再看完整表格',
          html: `<p>介绍家人时最常用到"我的、你的、他的……"这类词，德语叫 <b>Possessivartikel（物主冠词）</b>。先看例句：</p>
<p class="de">Das ist <mark>mein</mark> Mann. Das ist <mark>meine</mark> Schwester. Das sind <mark>meine</mark> Eltern.</p>
<p>规律和 u3 学过的不定冠词 ein 完全一样：<b>mein</b> 后面加的词尾，跟着名词的性和数变化。下面是第一格（主语位置）完整表格：</p>
<table><tr><th>人称</th><th>阳性 der</th><th>阴性 die</th><th>中性 das</th><th>复数 die</th></tr>
<tr><td class="hl">ich</td><td class="hl">mein</td><td class="hl">meine</td><td class="hl">mein</td><td class="hl">meine</td></tr>
<tr><td class="hl">du</td><td class="hl">dein</td><td class="hl">deine</td><td class="hl">dein</td><td class="hl">deine</td></tr>
<tr><td class="hl">er/es</td><td class="hl">sein</td><td class="hl">seine</td><td class="hl">sein</td><td class="hl">seine</td></tr>
<tr><td class="hl">sie（她）</td><td class="hl">ihr</td><td class="hl">ihre</td><td class="hl">ihr</td><td class="hl">ihre</td></tr>
<tr><td class="hl">wir</td><td class="hl">unser</td><td class="hl">unsere</td><td class="hl">unser</td><td class="hl">unsere</td></tr>
<tr><td class="hl">ihr</td><td class="hl">euer</td><td class="hl">eure</td><td class="hl">euer</td><td class="hl">eure</td></tr>
<tr><td class="hl">sie（他们）</td><td class="hl">ihr</td><td class="hl">ihre</td><td class="hl">ihr</td><td class="hl">ihre</td></tr>
<tr><td class="hl">Sie（您）</td><td class="hl">Ihr</td><td class="hl">Ihre</td><td class="hl">Ihr</td><td class="hl">Ihre</td></tr></table>
<p>两个容易搞混的地方：① <b>euer</b> 加词尾时中间的 e 会省略——eure，不是 euere；② <mark>ihr</mark>（她的/他们的，小写）和 <mark>Ihr</mark>（您的，大写敬称）拼写一样，只靠大小写区分，句首无法靠大小写判断时要看上下文。</p>`
        },
        {
          type: 'grammar', title: 'Possessivartikel（四格）：只有阳性会变', sub: '好消息：只用多记一列',
          html: `<p>物主冠词做宾语（第四格）时，规律和 u3 学过的 ein→einen 一模一样：<b>只有阳性单数会变</b>，阴性、中性、复数原封不动。</p>
<p class="de">Ich liebe <mark>meinen</mark> Bruder.（阳性 → meinen） Ich liebe <mark>meine</mark> Schwester.（阴性不变）</p>
<table><tr><th>人称</th><th>阳性第一格</th><th>阳性第四格</th></tr>
<tr><td class="hl">ich</td><td class="hl">mein</td><td class="hl">meinen</td></tr>
<tr><td class="hl">du</td><td class="hl">dein</td><td class="hl">deinen</td></tr>
<tr><td class="hl">er/es</td><td class="hl">sein</td><td class="hl">seinen</td></tr>
<tr><td class="hl">sie（她）</td><td class="hl">ihr</td><td class="hl">ihren</td></tr>
<tr><td class="hl">wir</td><td class="hl">unser</td><td class="hl">unseren</td></tr>
<tr><td class="hl">ihr</td><td class="hl">euer</td><td class="hl">euren</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">ihr/Ihr</td><td class="hl">ihren/Ihren</td></tr></table>
<p>只要记住这条规律：<mark>阴性、中性、复数的物主冠词，第一格和第四格长得一样</mark>——需要变的只有阳性单数这一列，和 ein→einen 是同一个规律，不用重新背。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">"mein Freund" 到底是"我朋友"还是"我男朋友"？</b>德语里 der Freund / die Freundin 确实有歧义——听语气和上下文才能分清是普通朋友还是恋人。想说清楚"普通朋友"，更保险的说法是 <mark>ein Freund von mir</mark>（我的一个朋友）或者直接说 <mark>der/die Kollege/Kollegin</mark>（同事）；想说"男/女朋友"，加上 <mark>mein</mark> 通常就足够清楚了，尤其是配合"seit einem Jahr zusammen"这类语境。同理，<b>mein Mann / meine Frau</b> 在已婚人士口中默认就是"我丈夫/我妻子"，不会被理解成"我的男人/女人"。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Das ist ___ Schwester."（我的姐妹）应该填哪个词？', options: ['meine', 'mein', 'meinen'], answer: 0, why: 'Schwester 是阴性名词，物主冠词第一格阴性是 meine。' },
        { type: 'cloze', zhHint: '我爱我的哥哥。（第四格，阳性）', before: 'Ich liebe', after: 'Bruder.', options: ['mein', 'meinen', 'meine'], answer: 1, why: 'Bruder 是阳性名词，第四格要变成 meinen，规律和 ein→einen 一样。' },
        { type: 'mcq', q: '在什么情况下 "mein Freund" 最可能被理解成"我男朋友"而不是"我朋友"？', options: ['配合"seit einem Jahr zusammen"这类恋爱语境时', '在正式的工作邮件里', '在提到很多人的时候'], answer: 0, why: '这个词本身有歧义，恋爱相关的语境会让人明确理解成"男朋友"。' },
        { type: 'order', zh: '这些是我们的孩子。', words: ['Das', 'sind', 'unsere', 'Kinder'], why: 'Kinder 是复数，物主冠词用 unsere；动词用复数形式 sind。' },
        { type: 'match', pairs: [['die Mutter', '母亲'], ['der Bruder', '兄弟'], ['die Geschwister', '兄弟姐妹'], ['verheiratet', '已婚的']] },
        { type: 'listen', audio: 'Ich habe eine Schwester und einen Bruder.', q: '这句话是什么意思？', options: ['我有一个姐妹和一个兄弟。', '我没有兄弟姐妹。', '我有两个姐妹。'], answer: 0, why: 'eine Schwester = 一个姐妹，einen Bruder = 一个兄弟（阳性第四格）。' },
        { type: 'listen', audio: 'Meine Eltern wohnen in China.', q: '这句话是什么意思？', options: ['我父母住在中国。', '我父母住在莱比锡。', '我住在中国。'], answer: 0, why: 'meine Eltern = 我父母，wohnen in = 住在……' },
        { type: 'speak', de: 'Das ist meine Familie. Meine Eltern wohnen in China.', zh: '这是我的家人。我父母住在中国。' },
      ],
      task: { title: '今天的生活任务', desc: '写 3 句话介绍自己的家人，用上物主冠词 mein/meine——单身或者没有孩子也没关系，下一课会学怎么用 kein 说"没有"。' }
    },
    {
      id: 'u8l2', title: '我没有兄弟姐妹', de: 'Ich habe keine Geschwister',
      intro: '"没有"在德语里不是简单加个"不"就行——要分清楚该用 kein 还是 nicht。这一课把规则讲透，学完你会发现这条规则其实比看起来简单：只要判断句子里有没有一个"看不见的 ein"就够了。',
      sections: [
        {
          type: 'vocab', title: '大家庭', sub: '',
          items: [
            { de: 'Onkel', art: 'der', pl: 'Onkel', zh: '叔叔，舅舅，姨父，姑父', en: 'uncle', ex: 'Mein Onkel wohnt in Shanghai.', exZh: '我叔叔住在上海。' },
            { de: 'Tante', art: 'die', pl: 'Tanten', zh: '阿姨，姑姑，姨妈，舅妈', en: 'aunt', ex: 'Meine Tante hat zwei Kinder.', exZh: '我阿姨有两个孩子。' },
            { de: 'Cousin', art: 'der', pl: 'Cousins', zh: '表哥/堂哥（男性表亲）', en: 'cousin (male)', ex: 'Mein Cousin ist Student.', exZh: '我表哥是大学生。' },
            { de: 'Cousine', art: 'die', pl: 'Cousinen', zh: '表姐/堂姐（女性表亲）', en: 'cousin (female)', ex: 'Meine Cousine Lin wohnt in Leipzig.', exZh: '我表姐 Lin 住在莱比锡。' },
            { de: 'Einzelkind', art: 'das', pl: 'Einzelkinder', zh: '独生子女', en: 'only child', ex: 'Ich bin Einzelkind.', exZh: '我是独生子女。' },
            { de: 'Neffe', art: 'der', pl: 'Neffen', zh: '侄子，外甥', en: 'nephew', ex: 'Mein Neffe ist drei Jahre alt.', exZh: '我侄子三岁。' },
            { de: 'Nichte', art: 'die', pl: 'Nichten', zh: '侄女，外甥女', en: 'niece', ex: 'Meine Nichte ist noch klein.', exZh: '我侄女还很小。' },
            { de: 'Verwandten', art: 'die', zh: '亲戚们（只有复数）', en: 'relatives', ex: 'Meine Verwandten wohnen alle in China.', exZh: '我的亲戚都住在中国。' },
          ]
        },
        {
          type: 'vocab', title: '否定与常用副词', sub: '',
          items: [
            { de: 'nicht', zh: '不，没有（否定动词/形容词等）', en: 'not', ex: 'Ich bin nicht müde.', exZh: '我不累。' },
            { de: 'kein', zh: '没有（否定名词，随性数变化）', en: 'no/not a', ex: 'Ich habe kein Auto.', exZh: '我没有车。', note: '不是固定不变的词，要像 ein 一样变位：kein/keine/keinen……' },
            { de: 'nie', zh: '从不，从未', en: 'never', ex: 'Ich bin nie zu spät.', exZh: '我从不迟到。' },
            { de: 'noch nicht', zh: '还没', en: 'not yet', ex: 'Ich bin noch nicht verheiratet.', exZh: '我还没结婚。' },
            { de: 'schon', zh: '已经', en: 'already', ex: 'Es ist schon spät.', exZh: '已经很晚了。' },
            { de: 'doch', zh: '（对否定问题作肯定回答时）不，恰恰相反', en: 'yes, on the contrary', ex: 'Doch, ich bin verheiratet!', exZh: '不，我结婚了！', note: '专门用来反驳否定问句，见下方提示' },
            { de: 'gar nicht', zh: '一点也不，完全不', en: 'not at all', ex: 'Der Kaffee ist gar nicht teuer.', exZh: '这咖啡一点也不贵。' },
          ]
        },
        {
          type: 'dialogue', title: '家人与朋友', scene: '又一次午饭闲聊，话题回到了家庭——这段对话正好把"没有"的各种说法都用上了。',
          lines: [
            { sp: 'Anna', de: 'Hast du Geschwister, Wei?', zh: 'Wei，你有兄弟姐妹吗？' },
            { sp: 'Wei', de: 'Nein, ich habe keine Geschwister. Ich bin ein Einzelkind.', zh: '没有，我没有兄弟姐妹。我是独生子女。' },
            { sp: 'Anna', de: 'Ach so! Aber du hast bestimmt Cousins und Cousinen, oder?', zh: '原来如此！但你肯定有表兄弟表姐妹吧？' },
            { sp: 'Wei', de: 'Ja, viele! Drei Cousins und zwei Cousinen.', zh: '有，很多！三个表哥和两个表姐。' },
            { sp: 'Anna', de: 'Und bist du verheiratet?', zh: '那你结婚了吗？' },
            { sp: 'Wei', de: 'Nein, ich bin nicht verheiratet und ich habe keine Kinder.', zh: '没有，我还没结婚，也没有孩子。' },
            { sp: 'Anna', de: 'Kein Problem! Hast du denn eine Freundin hier in Leipzig?', zh: '没关系！那你在莱比锡有女朋友吗？' },
            { sp: 'Wei', de: 'Nein, ich habe keine Freundin. Aber ich habe viele gute Freunde.', zh: '没有，我没有女朋友。但我有很多好朋友。' },
            { sp: 'Anna', de: 'Das ist doch auch schön. Freunde sind wichtig.', zh: '那也很好呀。朋友很重要。' },
            { sp: 'Wei', de: 'Stimmt. Familie ist nicht nur Blutsverwandtschaft.', zh: '没错。家人不只是血缘关系。' },
          ]
        },
        {
          type: 'grammar', title: 'kein 还是 nicht？一条口诀分清楚', sub: '关键看："能不能想象出一个 ein"',
          html: `<p>先看两个例句对比：</p>
<p class="de">Ich habe <mark>keine</mark> Geschwister.（否定一个名词） Ich bin <mark>nicht</mark> verheiratet.（否定一个形容词）</p>
<p>判断口诀：<b>如果否定的东西前面本来可以有 ein/eine，或者是没有冠词的名词（复数、不可数），就用 kein；其余情况——动词、形容词、副词、带定冠词/物主冠词的名词——一律用 nicht。</b></p>
<table><tr><th>用 kein</th><th>用 nicht</th></tr>
<tr><td class="hl">否定带不定冠词的名词：<br>Ich habe einen Bruder. → Ich habe <mark>keinen</mark> Bruder.</td><td class="hl">否定动词/形容词：<br>Ich bin müde. → Ich bin <mark>nicht</mark> müde.</td></tr>
<tr><td class="hl">否定复数/不可数名词：<br>Ich trinke Kaffee. → Ich trinke <mark>keinen</mark> Kaffee.</td><td class="hl">否定带定冠词/物主冠词的名词：<br>Das ist mein Auto. → Das ist <mark>nicht</mark> mein Auto.</td></tr></table>
<p>换句话说：<b>kein 是 ein 的否定版本</b>（ein→kein，einen→keinen，同一套变位规律），只要句子里"该出现 ein 的位置"，否定时就把 ein 换成 kein；如果本来就没有 ein 可换（比如已经是 mein、der 或者动词本身），就只能靠 nicht 来否定整件事。</p>`
        },
        {
          type: 'grammar', title: '五组例句对照', sub: '照着这张表练习判断',
          html: `<table><tr><th>肯定句</th><th>否定句</th><th>为什么</th></tr>
<tr><td>Ich habe einen Bruder.</td><td class="hl">Ich habe keinen Bruder.</td><td>否定带 ein 的名词</td></tr>
<tr><td>Ich bin müde.</td><td class="hl">Ich bin nicht müde.</td><td>否定形容词</td></tr>
<tr><td>Das ist mein Auto.</td><td class="hl">Das ist nicht mein Auto.</td><td>名词前已有物主冠词，不能再套 kein</td></tr>
<tr><td>Ich trinke Kaffee.</td><td class="hl">Ich trinke keinen Kaffee.</td><td>无冠词的不可数名词</td></tr>
<tr><td>Ich komme aus Berlin.</td><td class="hl">Ich komme nicht aus Berlin.</td><td>否定介词短语</td></tr></table>
<p>做题时先问自己一句：<b>"这里本来能不能填 ein？"</b>——能填就用 kein 家族的词，不能填就用 nicht。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">被问否定问题时，用 doch 反驳。</b>如果有人问 "Bist du nicht verheiratet?"（你不是没结婚吗？），而实际上你已经结婚了，正常说 "Ja" 会让人误解成"对，我没结婚"。这时候要用专门的词 <mark>doch</mark>：<b>"Doch, ich bin verheiratet!"</b>（不，我结婚了！）——doch 专门用来推翻一个否定问句，是德语里一个很地道但教材经常漏讲的小词。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Ich habe ___ Schwester."（我没有姐妹）应该填哪个词？', options: ['keine', 'nicht', 'kein'], answer: 0, why: 'Schwester 是阴性名词，否定用 keine（kein 的阴性形式）。' },
        { type: 'cloze', zhHint: '我还没结婚。', before: 'Ich bin', after: 'verheiratet.', options: ['nicht', 'kein', 'keine'], answer: 0, why: 'verheiratet 是形容词，否定形容词用 nicht，不能用 kein。' },
        { type: 'mcq', q: '有人问 "Bist du nicht müde?"，但你其实很累，应该怎么回答？', options: ['Doch, ich bin sehr müde!', 'Ja, ich bin sehr müde!', 'Nein, ich bin sehr müde!'], answer: 0, why: '要推翻一个否定问句，用 doch 而不是 ja，避免造成"对，我不累"的误解。' },
        { type: 'order', zh: '我没有兄弟姐妹。', words: ['Ich', 'habe', 'keine', 'Geschwister'], why: 'Geschwister 是复数名词，否定用 keine；陈述句动词第二位。' },
        { type: 'match', pairs: [['der Onkel', '叔叔/舅舅'], ['die Tante', '阿姨/姑姑'], ['der Cousin', '表哥/堂哥'], ['das Einzelkind', '独生子女']] },
        { type: 'listen', audio: 'Ich trinke keinen Kaffee.', q: '这句话是什么意思？', options: ['我不喝咖啡。', '我不喝茶。', '我喝很多咖啡。'], answer: 0, why: 'keinen Kaffee = 否定无冠词名词 Kaffee，表示"不喝咖啡"。' },
        { type: 'listen', audio: 'Das ist nicht mein Auto.', q: '这句话是什么意思？', options: ['这不是我的车。', '这是我的车。', '我没有车。'], answer: 0, why: '名词前已有物主冠词 mein，否定要用 nicht，不能用 kein。' },
        { type: 'speak', de: 'Ich habe keine Geschwister, aber viele gute Freunde.', zh: '我没有兄弟姐妹，但有很多好朋友。' },
      ],
      task: { title: '今天的生活任务', desc: '用 kein 写 3 个关于自己的真实句子，比如 "Ich habe keine Geschwister" 或 "Ich habe keinen Hund"——单身、没孩子、没宠物都可以拿来练习。' }
    },
  ]
};
