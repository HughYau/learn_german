// 第 23 单元：媒体与新闻入门
export default {
  id: 'u23', num: '23', color: 'green', shape: 'half',
  de: 'Nachrichten', zh: '媒体与新闻入门',
  desc: '从新闻标题的名词堆叠到被动态入门，这个单元教你在不认识每个词的情况下也能抓住新闻大意，还会讲透德语被动态最常用的现在时结构。',
  kann: [
    { de: 'Ich kann aus einer deutschen Nachrichtenüberschrift die grobe Bedeutung erschließen, auch ohne jedes Wort zu kennen.', zh: '我能在不认识每个词的情况下，从新闻标题猜出大意。' },
    { de: 'Ich kann mit laut + Quelle eine Information weitergeben.', zh: '我能用 laut + 消息来源转述一条信息。' },
    { de: 'Ich kann einfache Passivsätze im Präsens (wird + Partizip II) erkennen und verstehen.', zh: '我能识别并理解简单的现在时被动态句子（wird + 分词）。' },
  ],
  lessons: [
    {
      id: 'u23l1', title: '读懂新闻标题', de: 'Was steht in der Zeitung?',
      intro: '德语新闻标题看起来吓人，其实全是套路——名词喜欢堆成一个长长的复合词，冠词能省则省。这一课学新闻核心词汇，语法上专门拆解几条真实风格的标题，教你不认识每个词也能猜出大意。',
      sections: [
        {
          type: 'vocab', title: '新闻基础词汇', sub: '',
          items: [
            { de: 'Nachricht', art: 'die', pl: 'Nachrichten', zh: '消息，新闻', en: 'news', ex: 'Hast du die Nachricht schon gelesen?', exZh: '你看过这条消息了吗？' },
            { de: 'Schlagzeile', art: 'die', pl: 'Schlagzeilen', zh: '新闻标题', en: 'headline', ex: 'Die Schlagzeile ist heute interessant.', exZh: '今天的新闻标题很有意思。' },
            { de: 'Bericht', art: 'der', pl: 'Berichte', zh: '报道', en: 'report', ex: 'Der Bericht steht in der Zeitung.', exZh: '这篇报道登在报纸上。' },
            { de: 'berichten', zh: '报道', en: 'to report', ex: 'Die Zeitung berichtet über den Streik.', exZh: '报纸报道了这次罢工。' },
            { de: 'Meldung', art: 'die', pl: 'Meldungen', zh: '简讯，消息', en: 'news item/report', ex: 'Die Meldung kommt aus Leipzig.', exZh: '这条简讯来自莱比锡。' },
          ]
        },
        {
          type: 'vocab', title: '新闻主题与用词', sub: '',
          items: [
            { de: 'Zeitung', art: 'die', pl: 'Zeitungen', zh: '报纸', en: 'newspaper', ex: 'Ich lese morgens die Zeitung.', exZh: '我早上看报纸。' },
            { de: 'laut', zh: '据……（介词 + Dativ）', en: 'according to', ex: 'Laut der Zeitung kommt der Zug pünktlich.', exZh: '据报纸报道，这趟车会准点到。' },
            { de: 'aktuell', zh: '最新的，当前的', en: 'current', ex: 'Die Meldung ist aktuell.', exZh: '这条消息是最新的。' },
            { de: 'lokal', zh: '本地的', en: 'local', ex: 'Die Zeitung berichtet vor allem lokal.', exZh: '这份报纸主要报道本地新闻。' },
            { de: 'Politik', art: 'die', zh: '政治', en: 'politics', ex: 'Wir sprechen oft über Politik.', exZh: '我们经常谈论政治。' },
            { de: 'Wirtschaft', art: 'die', zh: '经济', en: 'economy', ex: 'Die Zeitung berichtet über die Wirtschaft.', exZh: '报纸报道经济方面的新闻。' },
          ]
        },
        {
          type: 'dialogue', title: '今天的新闻聊什么', scene: '午休时 Anna 跟 Wei 聊起今天看到的几条新闻标题，两人顺便对比了一下平时看新闻的习惯。',
          lines: [
            { sp: 'Anna', de: 'Hast du die Schlagzeile heute gesehen? "Bahnstreik legt Verkehr lahm."', zh: '你看到今天的新闻标题了吗？"火车罢工导致交通瘫痪。"' },
            { sp: 'Wei', de: 'Nein, noch nicht. Was bedeutet das genau?', zh: '没有，还没看到。这具体是什么意思？' },
            { sp: 'Anna', de: 'Es gibt heute einen Streik bei der Bahn. Viele Züge fahren heute nicht.', zh: '今天德铁在罢工。很多火车今天都不开。' },
            { sp: 'Wei', de: 'Oh, interessant! Ich lese eigentlich selten die Nachrichten.', zh: '哦，有意思！我其实很少看新闻。' },
            { sp: 'Anna', de: 'Ich auch nicht viel, aber ich schaue morgens kurz auf die Schlagzeilen.', zh: '我也看得不多，不过我早上会大概看一眼标题。' },
            { sp: 'Wei', de: 'Was berichten die Zeitungen sonst noch? Etwas aus der Politik?', zh: '报纸上还报道了什么？政治方面的吗？' },
            { sp: 'Anna', de: 'Ja, laut der Zeitung plant der Stadtrat mehr Fahrradwege in Leipzig.', zh: '有的，据报纸报道，市议会计划在莱比锡修建更多自行车道。' },
            { sp: 'Wei', de: 'Das finde ich gut, ich fahre ja oft mit dem Rad zur Arbeit.', zh: '这我觉得挺好的，我经常骑车上班。' },
            { sp: 'Anna', de: 'Genau, und in der Wirtschaft gibt es auch eine aktuelle Meldung über neue Jobs in Leipzig.', zh: '是啊，经济方面也有一条最新消息，说莱比锡新增了不少工作岗位。' },
            { sp: 'Wei', de: 'Interessant! Ich sollte wirklich öfter die lokalen Nachrichten lesen.', zh: '有意思！我真该更常看看本地新闻了。' },
            { sp: 'Anna', de: 'Kein Stress, für den Anfang reichen ja auch nur die Schlagzeilen.', zh: '不用有压力，一开始只看标题也够了。' },
            { sp: 'Wei', de: 'Gute Idee, das mache ich ab jetzt öfter.', zh: '好主意，我以后会更常这么做。' },
          ]
        },
        {
          type: 'grammar', title: '读新闻标题的技巧：名词堆叠与省略冠词', sub: '拆解几条真实风格的标题',
          html: `<p>德语新闻标题有两个固定套路：<b>把相关名词直接拼成一个复合词</b>（不用"的"或介词连接），<b>能省略冠词就省略</b>（节省版面）。学会拆解这两点，不认识每个词也能猜出标题大意：</p>
<table><tr><th>标题</th><th>拆解</th><th>意思</th></tr>
<tr><td class="hl">Bahnstreik legt Verkehr lahm.</td><td>Bahnstreik = Bahn + Streik；省略了 Der/Den</td><td>火车罢工使交通瘫痪。</td></tr>
<tr><td class="hl">Neue Regeln für Mietpreise in Leipzig</td><td>Mietpreise = Miete + Preise；省略了 Die vor Regeln</td><td>莱比锡房租新规定</td></tr>
<tr><td class="hl">Stadtrat plant mehr Fahrradwege.</td><td>Stadtrat = Stadt + Rat；Fahrradwege = Fahrrad + Wege</td><td>市议会计划修建更多自行车道。</td></tr>
<tr><td class="hl">Wetterdienst warnt vor Sturm.</td><td>Wetterdienst = Wetter + Dienst；省略了 Der/Vor dem</td><td>气象局警告有暴风雨。</td></tr></table>
<p>看到一个陌生的长单词，先试着把它拆成几个你认识的短名词——德语复合词的意思基本是"从后往前"理解，最后一个词是核心，前面的词是修饰：<mark>Fahrradwege</mark> = "自行车的路"，核心是 Wege（路），Fahrrad（自行车）修饰它。</p>`
        },
        {
          type: 'grammar', title: 'laut + 消息来源：转述新闻最简单的方法', sub: '预告 u30 会系统学转述',
          html: `<p>读新闻、转述消息来源，最简单好用的词是 <b class="de">laut</b>（据……），口语里常常直接搭配 Dativ：</p>
<table><tr><th>例句</th><th>意思</th></tr>
<tr><td class="hl">Laut der Zeitung kommt der Zug pünktlich.</td><td>据报纸报道，这趟车会准点到。</td></tr>
<tr><td class="hl">Laut dem Bericht steigen die Preise.</td><td>据报道，价格在上涨。</td></tr></table>
<p>laut 后面直接接 Dativ 名词，不用逗号也不用从句，是新闻/口语里转述消息来源最简单的说法。以后 u30 还会系统学更完整的转述句型（间接引语），这里先学会读新闻时最常见的这个词就够了。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">读新闻标题的小技巧：</b>不用每个词都认识，先抓大写开头的名词（尤其是复合名词），大概能猜出主题是什么。莱比锡本地报纸叫 Leipziger Volkszeitung（简称 LVZ），网上也能免费看到部分内容和头条，是了解本地新闻的好起点。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '德语新闻标题里常见的"名词堆叠"指的是？', options: ['把几个名词直接组合成一个复合词', '把名词都改成动词', '把所有名词都省略'], answer: 0, why: '比如 Bahnstreik = Bahn + Streik，德语习惯把相关名词拼成一个复合词。' },
        { type: 'mcq', q: '新闻标题里经常省略什么？', options: ['冠词（der/die/das 等）', '动词', '所有名词'], answer: 0, why: '标题为了简洁，常常省略冠词，比如 "Stadtrat plant mehr Fahrradwege" 没有 der/den。' },
        { type: 'cloze', zhHint: '据报纸报道，市议会计划修建更多自行车道。', before: 'Ja,', after: 'der Zeitung plant der Stadtrat mehr Fahrradwege.', options: ['laut', 'laute', 'lauten'], answer: 0, why: 'laut + Dativ 表示"据……报道"，是转述消息来源最简单的说法。' },
        { type: 'order', zh: '气象局警告有暴风雨。', words: ['Der', 'Wetterdienst', 'warnt', 'vor', 'Sturm'], why: 'warnen vor + Dativ 是固定搭配，Sturm 是阳性名词。' },
        { type: 'match', pairs: [['die Schlagzeile', '新闻标题'], ['der Bericht', '报道'], ['berichten', '报道（动词）'], ['aktuell', '最新的，当前的']] },
        { type: 'listen', audio: 'Ich lese eigentlich selten die Nachrichten.', q: '这句话是什么意思？', options: ['我其实很少看新闻。', '我每天都看新闻。', '我从不读书。'], answer: 0, why: 'selten=很少，die Nachrichten=新闻。' },
        { type: 'listen', audio: 'Laut der Zeitung plant der Stadtrat mehr Fahrradwege in Leipzig.', q: '这句话是什么意思？', options: ['据报纸报道，市议会计划在莱比锡修建更多自行车道。', '报纸上说莱比锡取消了所有自行车道。', '市议会反对修建自行车道。'], answer: 0, why: 'laut der Zeitung=据报纸报道，planen=计划。' },
        { type: 'speak', de: 'Was berichten die Zeitungen sonst noch? Etwas aus der Politik?', zh: '报纸上还报道了什么？政治方面的吗？' },
      ],
      task: { title: '今天的生活任务', desc: '找一条德语新闻标题（LVZ、Tagesschau 或任意德语新闻网站都可以），试着拆解里面的复合名词，猜出大概意思，不需要每个词都认识。' }
    },
    {
      id: 'u23l2', title: '被动态入门', de: 'Die Brücke wird gebaut',
      intro: '新闻标题里到处都是 "wird + 过去分词" 这个结构——这就是德语的被动态（Passiv）。这一课学会构成规则：werden 变位 + Partizip II（复用 u12 学过的过去分词库），还会明白为什么新闻特别偏爱被动态：新闻关心事情本身，不关心谁做的。',
      sections: [
        {
          type: 'vocab', title: '新闻中的被动态高频动词', sub: '',
          items: [
            { de: 'bauen', zh: '建造', en: 'to build', ex: 'Die Brücke wird gebaut.', exZh: '这座桥正在被建造。' },
            { de: 'eröffnen', zh: '开业，开通', en: 'to open', ex: 'Der Bahnhof wird bald eröffnet.', exZh: '这座车站很快就要开通了。' },
            { de: 'schließen', zh: '关闭', en: 'to close', ex: 'Das Geschäft wird geschlossen.', exZh: '这家店正在被关闭。' },
            { de: 'planen', zh: '计划', en: 'to plan', note: '复现 u23l1 的 planen（Stadtrat plant...）', ex: 'Der Stadtrat plant mehr Fahrradwege.', exZh: '市议会计划修建更多自行车道。' },
          ]
        },
        {
          type: 'vocab', title: '结果状态词汇', sub: '',
          items: [
            { de: 'verboten', zh: '被禁止的', en: 'forbidden', ex: 'Rauchen ist hier verboten.', exZh: '这里禁止吸烟。' },
            { de: 'erlaubt', zh: '被允许的', en: 'allowed', ex: 'Ist das hier erlaubt?', exZh: '这里允许这样做吗？' },
            { de: 'renoviert', zh: '装修/翻新过的', en: 'renovated', ex: 'Der Bahnhof wird renoviert.', exZh: '火车站正在被翻新。' },
          ]
        },
        {
          type: 'dialogue', title: '标题里都是被动态', scene: 'Wei 和 Anna 一起看一条本地新闻，发现标题里反复出现同一个结构：wird + 分词，两人一起把它认出来。',
          lines: [
            { sp: 'Wei', de: 'Schau mal, hier steht: "Die neue Fahrradbrücke wird bald eröffnet."', zh: '你看，这里写着："新的自行车桥很快就要开通了。"' },
            { sp: 'Anna', de: 'Ah, die wird schon seit Monaten gebaut. Endlich!', zh: '啊，这座桥都建了好几个月了。终于要完工了！' },
            { sp: 'Wei', de: 'Genau. Und schau, hier steht auch: "Der alte Bahnhof wird renoviert."', zh: '是啊。你看，这儿还写着："老火车站正在被翻新。"' },
            { sp: 'Anna', de: 'Das ist mir ganz neu! Wird er lange geschlossen?', zh: '这我还真不知道！它会关闭很久吗？' },
            { sp: 'Wei', de: 'Das steht hier leider nicht. Aber schau, in der Schlagzeile steht immer "wird" plus ein Partizip.', zh: '这里可惜没写。不过你看，标题里总是"wird"加一个分词。' },
            { sp: 'Anna', de: 'Stimmt! "Wird" plus Partizip – das muss das Passiv sein, oder?', zh: '没错！"wird"加分词——这肯定就是被动态吧？' },
            { sp: 'Wei', de: 'Genau, das ist das Passiv. Im Aktiv sagt man: "Die Stadt baut die Brücke." Aber in der Zeitung steht meistens das Passiv.', zh: '对，就是被动态。主动态会说："市政府在建这座桥。"但报纸上大多用被动态。' },
            { sp: 'Anna', de: 'Warum eigentlich?', zh: '这是为什么呢？' },
            { sp: 'Wei', de: 'In der Zeitung ist die Person nicht wichtig. Nur das Ereignis selbst zählt.', zh: '在新闻报道里，是谁并不重要。只有发生的事情本身才重要。' },
            { sp: 'Anna', de: 'Ah, jetzt verstehe ich das Prinzip! Ziemlich praktisch, dieses Passiv.', zh: '啊，我现在明白这个原理了！这个被动态还挺实用的。' },
            { sp: 'Wei', de: 'Genau. Das Gleiche gilt für "Der Bahnhof wird renoviert". Die Firma oder Person bleibt meistens unbekannt.', zh: '没错。"火车站正在被翻新"这句话也是一样。是哪家公司或者谁在做，通常都不会写出来。' },
            { sp: 'Anna', de: 'Jetzt erkenne ich das Passiv viel schneller. Danke für die Erklärung!', zh: '现在我认被动态认得快多了。谢谢你的讲解！' },
          ]
        },
        {
          type: 'grammar', title: 'Passiv 入门：werden + Partizip II', sub: '第一次正式认识 werden 这个词',
          html: `<p>这一课第一次正式认识 <b class="de">werden</b> 这个词——它是德语里除了 sein/haben 之外最高频的动词之一，先学它作为<b>被动态助动词</b>的用法。变位（不规则，要整体记）：</p>
<table><tr><th>人称</th><th>werden</th></tr>
<tr><td class="hl">ich</td><td class="hl">werde</td></tr>
<tr><td class="hl">du</td><td class="hl">wirst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">wird</td></tr>
<tr><td class="hl">wir</td><td class="hl">werden</td></tr>
<tr><td class="hl">ihr</td><td class="hl">werdet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">werden</td></tr></table>
<p>被动态（Vorgangspassiv）现在时的构成，是又一个熟悉的句框结构：<b>werden 变位站第二位，Partizip II（复用 u12 学过的过去分词库）踢到句尾</b>：</p>
<table><tr><th>主动 Aktiv</th><th>被动 Passiv</th></tr>
<tr><td class="hl">Die Stadt baut die Brücke.</td><td class="hl">Die Brücke wird gebaut.</td></tr>
<tr><td class="hl">Die Firma renoviert den Bahnhof.</td><td class="hl">Der Bahnhof wird renoviert.</td></tr></table>
<p>被动句里，主动句的宾语（被造的桥、被翻新的车站）变成了被动句的主语——这也是为什么被动句读起来像"事情自己发生了"，动作的执行者往往干脆不提。</p>`
        },
        {
          type: 'grammar', title: '谁做了不重要：被动态和新闻文体', sub: 'Aktiv 变 Passiv 的对比练习',
          html: `<p>被动句如果想说明是谁做的，可以加 <b class="de">von + Dativ</b>，但新闻里经常干脆省略这部分：</p>
<table><tr><th>带执行者</th><th>省略执行者（新闻里更常见）</th></tr>
<tr><td class="hl">Die Brücke wird von der Stadt gebaut.</td><td class="hl">Die Brücke wird gebaut.</td></tr></table>
<p>这正是新闻文体偏爱被动态的原因："新闻关心事情本身，不关心谁做的"——比起"市政府建了这座桥"，新闻更想说的是"这座桥正在被建"这件事本身。看到 <mark>wird + Partizip II</mark> 这个组合，第一反应就是：这是一句被动句，而且大概率不会明说是谁做的。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">Nachrichtenleicht：</b>如果新闻原文读起来还是有点吃力，可以试试 Deutschlandfunk 的 nachrichtenleicht.de——用简化过的德语（大致 B1 以下水平）复述一周的重要新闻，每周五更新，是新闻德语入门的经典资源。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'Passiv（被动态）现在时怎么构成？', options: ['werden 变位 + Partizip II', 'haben 变位 + Partizip II', 'sein 变位 + Partizip II'], answer: 0, why: 'Vorgangspassiv 现在时：werden 变位站第二位，Partizip II 踢到句尾。' },
        { type: 'mcq', q: '"Die Brücke ___ gebaut." 应该填哪个？', options: ['wird', 'ist', 'hat'], answer: 0, why: '第三人称单数的 werden 变位是 wird。' },
        { type: 'cloze', zhHint: '新的自行车桥很快就要开通了。', before: 'Die neue Fahrradbrücke', after: 'bald eröffnet.', options: ['wird', 'werden', 'wirst'], answer: 0, why: '主语 die Fahrradbrücke 是单数第三人称，werden 变位是 wird。' },
        { type: 'order', zh: '老火车站正在被翻新。', words: ['Der', 'alte', 'Bahnhof', 'wird', 'renoviert'], why: 'Passiv 语序：wird 站第二位，Partizip II renoviert 踢到句尾。' },
        { type: 'match', pairs: [['werden', '（被动态助动词）被'], ['bauen → gebaut', '建造 → 被建造'], ['eröffnen → eröffnet', '开业 → 被开业'], ['schließen → geschlossen', '关闭 → 被关闭']] },
        { type: 'listen', audio: 'Die Brücke wird schon seit Monaten gebaut.', q: '这句话是什么意思？', options: ['这座桥已经建了好几个月了。', '这座桥刚刚开始建。', '这座桥已经建好了。'], answer: 0, why: 'wird...gebaut=被动态现在时，seit Monaten=好几个月以来。' },
        { type: 'listen', audio: 'In der Zeitung steht meistens das Passiv.', q: '这句话是什么意思？', options: ['报纸上大多用被动态。', '报纸上从不用被动态。', '报纸上只用主动态。'], answer: 0, why: 'das Passiv=被动态，meistens=大多，通常。' },
        { type: 'speak', de: 'Die neue Fahrradbrücke wird bald eröffnet.', zh: '新的自行车桥很快就要开通了。' },
      ],
      task: { title: '今天的生活任务', desc: '找一条 Nachrichtenleicht（nachrichtenleicht.de）的新闻标题或短文，标出里面 wird + Partizip II 的被动态结构，数一数一共用了几次被动态。' }
    },
  ]
};
