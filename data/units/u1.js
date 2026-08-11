// 第 1 单元：你好，我是…
export default {
  id: 'u1', num: '1', color: 'red', shape: 'circle',
  de: 'Hallo!', zh: '你好，我是…',
  desc: '在莱比锡遇到新同事、新邻居，第一句话怎么说？这个单元教你打招呼、自我介绍，还有 sein 动词和最基本的语序。',
  kann: [
    { de: 'Ich kann mich mit Namen vorstellen und „Freut mich!“ sagen.', zh: '我能报出自己的名字并说“很高兴认识你”。' },
    { de: 'Ich kann sagen, woher ich komme und wo ich wohne.', zh: '我能说出我来自哪里、住在哪里。' },
    { de: 'Ich kann fragen und sagen, was jemand beruflich macht.', zh: '我能询问并说明某人是做什么的。' },
    { de: 'Ich kann du und Sie in Begrüßung und Anrede richtig unterscheiden.', zh: '我能在打招呼和称呼时正确区分 du 和 Sie。' },
  ],
  lessons: [
    {
      id: 'u1l1', title: '打招呼与自我介绍', de: 'Hallo und Tschüss',
      intro: '每一次德语对话都从一句问候开始。这一课你会学会一天中不同时间该说哪句"你好"，怎么说出自己的名字和来自哪里，还有德语里最重要的动词——sein（是）。学完就能应付研究所里第一次自我介绍。',
      sections: [
        {
          type: 'vocab', title: '问候与告别', sub: '一天中不同时间，说不同的"你好"',
          items: [
            { de: 'Hallo', zh: '你好（随时可用，非正式）', en: 'hello', ex: 'Hallo! Ich bin Wei.', exZh: '你好！我是 Wei。' },
            { de: 'Guten Morgen', zh: '早上好（大约到10点前）', en: 'good morning', ex: 'Guten Morgen! Wie geht’s?', exZh: '早上好！你好吗？' },
            { de: 'Guten Tag', zh: '你好（白天，比较正式）', en: 'good day', ex: 'Guten Tag, Frau Schmidt.', exZh: '您好，施密特女士。' },
            { de: 'Guten Abend', zh: '晚上好（傍晚以后）', en: 'good evening', ex: 'Guten Abend, Anna!', exZh: '晚上好，Anna！' },
            { de: 'Gute Nacht', zh: '晚安', en: 'good night', note: '只在真的要睡觉时说，不能当"再见"用', ex: 'Gute Nacht, Wei!', exZh: '晚安，Wei！' },
            { de: 'Tschüss', zh: '再见（非正式，日常最常用）', en: 'bye', ex: 'Tschüss, bis morgen!', exZh: '再见，明天见！' },
            { de: 'Auf Wiedersehen', zh: '再见（正式场合，比如办事、离店）', en: 'goodbye', ex: 'Auf Wiedersehen, Frau Schmidt.', exZh: '再见，施密特女士。' },
            { de: 'ja', zh: '是，对', en: 'yes', ex: 'Ja, genau.', exZh: '对，是的。' },
            { de: 'nein', zh: '不，不是', en: 'no', ex: 'Nein, danke.', exZh: '不，谢谢。' },
            { de: 'danke', zh: '谢谢', en: 'thanks', ex: 'Danke schön!', exZh: '非常感谢！' },
            { de: 'bitte', zh: '请 / 不客气', en: 'please / you’re welcome', note: '一词两用：请求时说"请"，回应感谢时说"不客气"', ex: 'Bitte schön!', exZh: '不客气！' },
            { de: 'Entschuldigung', art: 'die', pl: 'Entschuldigungen', zh: '不好意思，打扰了（引起注意/道歉）', en: 'excuse me / sorry', ex: 'Entschuldigung, wo ist die Toilette?', exZh: '打扰一下，请问洗手间在哪儿？' },
          ]
        },
        {
          type: 'vocab', title: '自我介绍关键词', sub: '四个短语，撑起一整段自我介绍',
          items: [
            { de: 'heißen', zh: '名叫……', en: 'to be called', ex: 'Ich heiße Wei.', exZh: '我叫 Wei。' },
            { de: 'kommen aus', zh: '来自……', en: 'to come from', ex: 'Ich komme aus China.', exZh: '我来自中国。' },
            { de: 'wohnen in', zh: '住在……', en: 'to live in', ex: 'Ich wohne in Leipzig.', exZh: '我住在莱比锡。' },
            { de: 'Freut mich', zh: '很高兴认识你（初次见面用语）', en: 'nice to meet you', ex: 'Freut mich, Wei!', exZh: '很高兴认识你，Wei！', note: '完整说法是 Es freut mich，口语中常省略 Es' },
          ]
        },
        {
          type: 'dialogue', title: '在研究所茶水间', scene: '午饭时间，Wei 在研究所茶水间第一次遇到同事 Anna，两人用 du 互相认识。',
          lines: [
            { sp: 'Anna', de: 'Hallo! Ich bin Anna.', zh: '你好！我是 Anna。' },
            { sp: 'Wei', de: 'Hallo, Anna! Ich heiße Wei.', zh: '你好，Anna！我叫 Wei。' },
            { sp: 'Anna', de: 'Freut mich, Wei! Woher kommst du?', zh: '很高兴认识你，Wei！你从哪儿来？' },
            { sp: 'Wei', de: 'Ich komme aus China. Und du, woher kommst du?', zh: '我来自中国。你呢，你从哪儿来？' },
            { sp: 'Anna', de: 'Ich komme aus Leipzig. Wohnst du auch hier in Leipzig?', zh: '我来自莱比锡。你也住在这儿，莱比锡吗？' },
            { sp: 'Wei', de: 'Ja, genau. Ich wohne jetzt in Leipzig.', zh: '对，是的。我现在住在莱比锡。' },
            { sp: 'Anna', de: 'Schön! Bis später, Wei!', zh: '太好了！回头见，Wei！' },
            { sp: 'Wei', de: 'Tschüss, Anna! Bis später!', zh: '再见，Anna！回头见！' },
          ]
        },
        {
          type: 'grammar', title: 'sein（是）动词变位', sub: '德语最重要的动词，先背熟这张表',
          html: `<p><b class="de">sein</b> 是德语中最常用、也最不规则的动词，相当于英语的 <b>to be</b>。六个人称各有各的形式，必须整体背下来。</p>
<table><tr><th>人称</th><th>sein</th><th>例句</th></tr>
<tr><td class="hl">ich</td><td class="hl">bin</td><td class="hl">Ich bin Wei.</td></tr>
<tr><td class="hl">du</td><td class="hl">bist</td><td class="hl">Du bist nett.</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">ist</td><td class="hl">Sie ist Anna.</td></tr>
<tr><td class="hl">wir</td><td class="hl">sind</td><td class="hl">Wir sind Kollegen.</td></tr>
<tr><td class="hl">ihr</td><td class="hl">seid</td><td class="hl">Ihr seid nett.</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">sind</td><td class="hl">Sie sind aus Leipzig.</td></tr></table>
<p>注意最后一行：<mark>sie（他们）</mark>和<mark>Sie（您，敬称）</mark>共用同一个变位 <b>sind</b>——大写 S 是唯一的区别，靠上下文和大小写分辨。</p>`
        },
        {
          type: 'grammar', title: '人称代词一览', sub: '谁是谁，先认清楚这六个',
          html: `<table><tr><th>德语</th><th>中文</th><th>说明</th></tr>
<tr><td class="hl">ich</td><td>我</td><td>—</td></tr>
<tr><td class="hl">du</td><td>你</td><td>熟人、同龄人、朋友之间</td></tr>
<tr><td class="hl">er / sie / es</td><td>他 / 她 / 它</td><td>对应阳性/阴性/中性名词</td></tr>
<tr><td class="hl">wir</td><td>我们</td><td>—</td></tr>
<tr><td class="hl">ihr</td><td>你们</td><td>—</td></tr>
<tr><td class="hl">sie / Sie</td><td>他们 / 您</td><td>Sie 大写＝敬称，见下方提示</td></tr></table>`
        },
        {
          type: 'tip',
          html: '<b class="t">du 还是 Sie？</b> 在研究所，年轻同事、同一个组的人之间通常直接用 <b>du</b>（国际化的所里尤其随意）。但遇到教授、行政人员、陌生人、办事员，用 <b>Sie</b> 更保险——先听对方怎么称呼你，跟着用同一个词最不会出错。拿不准时，Sie 永远是安全牌。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '如果是晚上八点见到同事，应该说哪句问候语？', options: ['Guten Abend', 'Guten Morgen', 'Gute Nacht'], answer: 0, why: 'Guten Abend 用于傍晚以后；Gute Nacht 是睡前告别语，不是问候。' },
        { type: 'cloze', zhHint: '我是 Wei。', before: '', after: 'bin Wei.', options: ['Ich', 'Du', 'Er'], answer: 0, why: '第一人称"我"对应 ich，动词 bin 只能配 ich。' },
        { type: 'mcq', q: 'du 和 Sie 的选择，拿不准时最保险的做法是？', options: ['先用 Sie', '先用 du', '都可以随便用'], answer: 0, why: 'Sie 是敬称，用错了最多显得客气；du 用错在陌生人/长辈面前会显得不礼貌。' },
        { type: 'order', zh: '你从哪里来？', words: ['Woher', 'kommst', 'du'], why: 'W 疑问词 woher 放最前，然后是变位动词 kommst，再是主语 du。' },
        { type: 'match', pairs: [['Hallo', '你好（随时可用）'], ['Tschüss', '再见（非正式）'], ['Entschuldigung', '不好意思'], ['Freut mich', '很高兴认识你']] },
        { type: 'listen', audio: 'Ich komme aus China.', q: '这句话是什么意思？', options: ['我来自中国。', '我住在中国。', '我要去中国。'], answer: 0, why: 'kommen aus = 来自，表示出生地/籍贯。' },
        { type: 'listen', audio: 'Wohnst du in Leipzig?', q: '这句问的是什么？', options: ['你住在莱比锡吗？', '你来自莱比锡吗？', '你喜欢莱比锡吗？'], answer: 0, why: 'wohnen in = 住在……，是非问句动词提到第一位。' },
        { type: 'speak', de: 'Ich heiße Wei. Freut mich!', zh: '我叫 Wei。很高兴认识你！' },
      ],
      task: { title: '今天的生活任务', desc: '在研究所或者日常遇到一个新面孔时，试着用 du 说 "Hallo, ich heiße ___. Freut mich!"，如果对方年纪较大或明显是长辈/办事人员，就换成 Guten Tag 加 Sie。今天至少主动打一次招呼。' }
    },
    {
      id: 'u1l2', title: '你是做什么的？', de: 'Was machst du?',
      intro: '打完招呼，德国人接下来最爱问的就是"你在这儿做什么"。这一课学会介绍自己的工作和学习状态，顺便掌握规则动词现在时——这是之后每一课都会用到的基础语法。',
      sections: [
        {
          type: 'vocab', title: '工作与学习动词', sub: '',
          items: [
            { de: 'machen', zh: '做，干', en: 'to do/make', ex: 'Was machst du hier?', exZh: '你在这儿做什么？' },
            { de: 'arbeiten', zh: '工作', en: 'to work', ex: 'Ich arbeite am Institut.', exZh: '我在研究所工作。' },
            { de: 'lernen', zh: '学习', en: 'to learn', ex: 'Ich lerne Deutsch.', exZh: '我在学德语。' },
            { de: 'sprechen', zh: '说', en: 'to speak', ex: 'Sprichst du Englisch?', exZh: '你说英语吗？', note: 'sprechen 是变音动词：du/er/sie/es 时 e 变成 i——du sprichst, er spricht' },
            { de: 'kommen', zh: '来', en: 'to come', ex: 'Wann kommst du?', exZh: '你什么时候来？' },
            { de: 'wohnen', zh: '居住', en: 'to live', ex: 'Wo wohnst du?', exZh: '你住在哪儿？' },
          ]
        },
        {
          type: 'vocab', title: '语言与日常词', sub: '',
          items: [
            { de: 'Deutsch', zh: '德语', en: 'German', ex: 'Ich spreche Deutsch.', exZh: '我说德语。' },
            { de: 'Englisch', zh: '英语', en: 'English', ex: 'Ich spreche ein bisschen Englisch.', exZh: '我会说一点英语。' },
            { de: 'Chinesisch', zh: '汉语', en: 'Chinese', ex: 'Sprichst du Chinesisch?', exZh: '你会说中文吗？' },
            { de: 'ein bisschen', zh: '一点点', en: 'a little', ex: 'Ich spreche ein bisschen Deutsch.', exZh: '我会说一点德语。' },
            { de: 'Arbeit', art: 'die', pl: 'Arbeiten', zh: '工作', en: 'work/job', ex: 'Die Arbeit ist interessant.', exZh: '这份工作很有意思。' },
            { de: 'Institut', art: 'das', pl: 'Institute', zh: '研究所', en: 'institute', ex: 'Das Institut ist groß.', exZh: '这家研究所很大。' },
            { de: 'jeden Tag', zh: '每天', en: 'every day', ex: 'Ich lerne jeden Tag Deutsch.', exZh: '我每天都学德语。' },
          ]
        },
        {
          type: 'dialogue', title: '休息室里的闲聊', scene: '休息室里，Anna 好奇地问 Wei 在莱比锡做什么。',
          lines: [
            { sp: 'Anna', de: 'Was machst du hier in Leipzig, Wei?', zh: 'Wei，你在莱比锡做什么呢？' },
            { sp: 'Wei', de: 'Ich arbeite am Institut.', zh: '我在研究所工作。' },
            { sp: 'Anna', de: 'Ach so! Und lernst du auch Deutsch?', zh: '原来如此！那你也在学德语吗？' },
            { sp: 'Wei', de: 'Ja, ich lerne jeden Tag ein bisschen Deutsch.', zh: '是的，我每天都学一点德语。' },
            { sp: 'Anna', de: 'Sprichst du schon gut Deutsch?', zh: '你德语说得已经很好了吗？' },
            { sp: 'Wei', de: 'Nein, ich spreche nur ein bisschen Deutsch. Aber ich lerne jeden Tag!', zh: '不，我只会说一点点德语。但我每天都在学！' },
            { sp: 'Anna', de: 'Das ist super! Übung macht den Meister.', zh: '太棒了！熟能生巧。' },
            { sp: 'Wei', de: 'Genau! Und du, arbeitest du auch am Institut?', zh: '没错！那你呢，你也在研究所工作吗？' },
            { sp: 'Anna', de: 'Ja, ich arbeite auch hier.', zh: '是的，我也在这儿工作。' },
          ]
        },
        {
          type: 'grammar', title: '规则动词现在时', sub: '词尾变化就这几种，看一眼记一年',
          html: `<p>德语规则动词现在时变位公式：找到动词词干（去掉 <b>-en</b>），按人称加对应词尾。以 <b class="de">wohnen</b>（住）为例：</p>
<table><tr><th>人称</th><th>词尾</th><th>wohnen</th></tr>
<tr><td class="hl">ich</td><td class="hl">-e</td><td class="hl">wohne</td></tr>
<tr><td class="hl">du</td><td class="hl">-st</td><td class="hl">wohnst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">-t</td><td class="hl">wohnt</td></tr>
<tr><td class="hl">wir</td><td class="hl">-en</td><td class="hl">wohnen</td></tr>
<tr><td class="hl">ihr</td><td class="hl">-t</td><td class="hl">wohnt</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">-en</td><td class="hl">wohnen</td></tr></table>
<p>词干以 <b>-t</b> 结尾的动词（如 <b class="de">arbeiten</b>）在 du/er-sie-es/ihr 前要多加一个 <mark>e</mark> 方便发音：<b>du arbeitest</b>、<b>er arbeitet</b>、<b>ihr arbeitet</b>——不加 e 会读成一坨辅音，德语人自己也读不出来。</p>`
        },
        {
          type: 'grammar', title: 'W 疑问词与语序', sub: '两条规则，德语句子就能自己拼出来',
          html: `<table><tr><th>疑问词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">wo</td><td>在哪里</td><td class="hl">Wo wohnst du?</td></tr>
<tr><td class="hl">woher</td><td>从哪里来</td><td class="hl">Woher kommst du?</td></tr>
<tr><td class="hl">was</td><td>什么</td><td class="hl">Was machst du?</td></tr>
<tr><td class="hl">wer</td><td>谁</td><td class="hl">Wer ist das?</td></tr>
<tr><td class="hl">wie</td><td>怎么样，如何</td><td class="hl">Wie heißt du?</td></tr></table>
<p>德语语序两条铁律：</p>
<ul>
<li><b>W 疑问句</b>：<mark>W词 + 变位动词 + 主语</mark>——Woher <mark>kommst</mark> du?</li>
<li><b>是非问句</b>（用"吗"提问）：<mark>变位动词提到第一位</mark>——<mark>Sprichst</mark> du Deutsch?</li>
</ul>`
        },
        {
          type: 'tip',
          html: '<b class="t">别怕说错。</b>"Ich spreche nur ein bisschen Deutsch" 这句话你会用一整年——德国人听到会很高兴你在努力，很少有人真的介意语法小错。语言学习最重要的是 <mark>jeden Tag</mark>（每天）哪怕五分钟。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Ich arbeite am Institut." 中 arbeite 对应哪个人称？', options: ['ich', 'du', 'er'], answer: 0, why: '词尾 -e 对应 ich。' },
        { type: 'cloze', zhHint: '你在研究所工作吗？', before: '', after: 'du am Institut?', options: ['Arbeitest', 'Arbeitet', 'Arbeite'], answer: 0, why: '是非问句动词提前，主语 du 对应词尾 -st，因为词干以 t 结尾要加 e：arbeitest。' },
        { type: 'mcq', q: 'sprechen 在 du/er/sie/es 时的特殊变化是？', options: ['e 变成 i：du sprichst', '词尾变化和 wohnen 一样，无变化', '变成 spreche'], answer: 0, why: 'sprechen 是变音动词，du/er-sie-es 时 e→i：du sprichst, er spricht。' },
        { type: 'order', zh: '我每天学一点德语。', words: ['Ich', 'lerne', 'jeden', 'Tag', 'ein', 'bisschen', 'Deutsch'], why: '陈述句语序：主语 Ich + 变位动词 lerne 在第二位，其余成分跟在后面。' },
        { type: 'match', pairs: [['Deutsch', '德语'], ['Englisch', '英语'], ['Chinesisch', '汉语'], ['das Institut', '研究所']] },
        { type: 'listen', audio: 'Was machst du hier?', q: '这句话是什么意思？', options: ['你在这儿做什么？', '你从哪儿来？', '你叫什么名字？'], answer: 0, why: 'was = 什么，machst 是 machen 的 du 变位，问的是"在做什么"。' },
        { type: 'listen', audio: 'Ich spreche nur ein bisschen Deutsch.', q: '这句话是什么意思？', options: ['我只会说一点点德语。', '我完全不会说德语。', '我说德语说得很好。'], answer: 0, why: 'ein bisschen = 一点点，nur 强调"只是"。' },
        { type: 'speak', de: 'Ich lerne jeden Tag Deutsch.', zh: '我每天都学德语。' },
      ],
      task: { title: '今天的生活任务', desc: '练习回答这三个问题：Woher kommst du? Wo wohnst du? Was machst du hier? 试着对着镜子或者录一段音说一遍，明天有机会就用在真实对话里。' }
    },
  ]
};
