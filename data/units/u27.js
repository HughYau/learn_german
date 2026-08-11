// 第 27 单元：莱比锡文化生活
export default {
  id: 'u27', num: '27', color: 'red', shape: 'circle',
  de: 'Kultur in Leipzig', zh: '莱比锡文化生活',
  desc: 'Phase 4 收官单元：用关系从句精确地推荐一场音乐会或一个展览，再学完形容词词尾变化的最后一步——无冠词。学完这一课，A2 语法主线全部打通。',
  kann: [
    { de: 'Ich kann mit einem Relativsatz genauer beschreiben, was für eine Veranstaltung ich empfehle.', zh: '我能用关系从句更精确地描述我推荐的活动是什么样的。' },
    { de: 'Ich kann im Relativsatz zwischen Nominativ und Akkusativ des Relativpronomens richtig wählen.', zh: '我能在关系从句中正确判断关系代词用第一格还是第四格。' },
    { de: 'Ich kann ohne Artikel die passende Adjektivendung verwenden (guter Kaffee, frisches Brot).', zh: '我能在无冠词时正确使用形容词词尾。' },
  ],
  lessons: [
    {
      id: 'u27l1', title: '我想推荐一场音乐会', de: 'Ein Konzert, das ich dir empfehle',
      intro: 'Jonas 向 Wei 推荐周末的文化活动——一场在 Gewandhaus 的音乐会，还有一个博物馆展览。这一课学关系从句（Relativsätze）：用一句话就能说清楚"是什么样的"，不用再拆成两个短句。',
      sections: [
        {
          type: 'vocab', title: '文化场所与活动', sub: '',
          items: [
            { de: 'Buchmesse', art: 'die', pl: 'Buchmessen', zh: '书展，图书博览会', en: 'book fair', ex: 'Die Leipziger Buchmesse findet jedes Jahr im März statt.', exZh: '莱比锡书展每年三月举办。', note: '具体日期每年略有不同，以官网为准' },
            { de: 'Konzert', art: 'das', pl: 'Konzerte', zh: '音乐会，演唱会', en: 'concert', ex: 'Wir gehen heute Abend in ein Konzert.', exZh: '我们今晚去听一场音乐会。' },
            { de: 'Ausstellung', art: 'die', pl: 'Ausstellungen', zh: '展览，展会', en: 'exhibition', ex: 'Die Ausstellung im Museum ist sehr interessant.', exZh: '博物馆的这个展览很有意思。' },
            { de: 'Museum', art: 'das', pl: 'Museen', zh: '博物馆', en: 'museum', ex: 'Das Museum der bildenden Künste liegt in der Innenstadt.', exZh: '造型艺术博物馆在市中心。', note: '外来词，复数是 Museen，不是 Museums' },
            { de: 'Oper', art: 'die', pl: 'Opern', zh: '歌剧，歌剧院', en: 'opera', ex: 'Sie geht gern in die Oper.', exZh: '她喜欢去看歌剧。' },
          ]
        },
        {
          type: 'vocab', title: '门票与推荐', sub: '',
          items: [
            { de: 'Eintritt', art: 'der', zh: '入场，门票费用', en: 'admission/entry', ex: 'Der Eintritt kostet zehn Euro.', exZh: '门票要十欧元。', note: '通常不用复数' },
            { de: 'Karte', art: 'die', pl: 'Karten', zh: '票，门票（新义）', en: 'ticket (new meaning)', ex: 'Hast du schon Karten für das Konzert?', exZh: '你买音乐会的票了吗？', note: '复现词：此前学过 die Karte 表示"卡片/地图"，这里是"门票"的新义项' },
            { de: 'empfehlen', zh: '推荐，建议', en: 'to recommend', ex: 'Ich empfehle dir dieses Museum.', exZh: '我推荐你去这家博物馆。', note: '变音动词：du empfiehlst, er empfiehlt' },
            { de: 'stattfinden', zh: '举行，举办（活动）', en: 'to take place', ex: 'Das Konzert findet im Gewandhaus statt.', exZh: '音乐会在 Gewandhaus 举行。', note: '可分动词' },
            { de: 'Erlebnis', art: 'das', pl: 'Erlebnisse', zh: '经历，体验', en: 'experience', ex: 'Das war ein tolles Erlebnis!', exZh: '那是次很棒的体验！' },
          ]
        },
        {
          type: 'dialogue', title: '我想推荐一场音乐会', scene: 'Jonas 向 Wei 推荐周末的文化活动——一场在 Gewandhaus 的音乐会，还有一个博物馆展览，两人用关系从句把"是什么样的"补充得清清楚楚。',
          lines: [
            { sp: 'Jonas', de: 'Wei, hast du am Wochenende schon Pläne?', zh: 'Wei，你周末有安排了吗？' },
            { sp: 'Wei', de: 'Noch nicht so richtig. Hast du eine Idee?', zh: '还没定呢。你有什么想法吗？' },
            { sp: 'Jonas', de: 'Ja! Es gibt ein Konzert, das ich dir sehr empfehle.', zh: '有！有一场音乐会，我特别推荐给你。' },
            { sp: 'Wei', de: 'Klingt gut, wo findet es statt?', zh: '听起来不错，在哪儿举行？' },
            { sp: 'Jonas', de: 'Im Gewandhaus. Das ist der Konzertsaal, der in der Innenstadt liegt.', zh: '在 Gewandhaus。就是那个在市中心的音乐厅。' },
            { sp: 'Wei', de: 'Ah, den kenne ich! Und was für Musik spielen sie?', zh: '啊，我知道那个地方！他们演什么音乐？' },
            { sp: 'Jonas', de: 'Klassische Musik. Der Dirigent, den sie eingeladen haben, ist sehr bekannt.', zh: '古典音乐。他们请来的这位指挥很有名。' },
            { sp: 'Wei', de: 'Interessant! Kennst du auch eine Ausstellung, die ich mir ansehen könnte?', zh: '有意思！你知道有什么展览是我可以去看看的吗？' },
            { sp: 'Jonas', de: 'Ja, im Museum der bildenden Künste gibt es eine Ausstellung, die noch bis nächsten Monat läuft.', zh: '有，造型艺术博物馆有个展览，一直办到下个月。' },
            { sp: 'Wei', de: 'Perfekt, das ist ein Erlebnis, das ich nicht verpassen will.', zh: '太好了，这是个我不想错过的体验。' },
            { sp: 'Jonas', de: 'Die Karten, die ich gekauft habe, waren übrigens gar nicht teuer.', zh: '对了，我买的这些票其实一点都不贵。' },
            { sp: 'Wei', de: 'Super, dann komme ich mit!', zh: '太好了，那我跟你一起去！' },
          ]
        },
        {
          type: 'grammar', title: '关系从句：用一句话说清楚"是什么样的"', sub: '关系代词长得和定冠词一模一样',
          html: `<p>想更精确地描述一个人或一件事，可以在名词后面直接加一个从句补充说明——这就是<b class="de">Relativsatz（关系从句）</b>：</p>
<p class="de">Es gibt ein Konzert, <mark>das</mark> ich dir empfehle.（有一场音乐会，是我推荐给你的。）</p>
<p><b>关系代词的形式和定冠词几乎一样</b>，只在 Akkusativ 阳性有变化：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nominativ（从句主语）</td><td class="hl">der</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr>
<tr><td>Akkusativ（从句宾语）</td><td class="hl">den</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr></table>
<p>从句里的动词依然遵守已经学过的 <b>V-letzt</b>（复现 weil/dass/ob 从句的规则），被描述的名词（先行词）后面<b>紧跟</b>关系代词，中间用逗号隔开：<b class="de">先行词, 关系代词 + ...其他成分 + 动词.</b></p>`
        },
        {
          type: 'grammar', title: 'Nominativ 还是 Akkusativ？看关系代词在从句里的身份', sub: '判断方法：它是从句的主语还是宾语',
          html: `<p>关系代词该用哪个格，只看它<b>在从句内部</b>扮演什么角色，和先行词本身的格无关：</p>
<table><tr><th>例句</th><th>分析</th></tr>
<tr><td class="hl">der Konzertsaal, <mark>der</mark> in der Innenstadt liegt</td><td>der 是从句里 liegt 的主语 → Nominativ</td></tr>
<tr><td class="hl">ein Konzert, <mark>das</mark> ich dir empfehle</td><td>das 是从句里 empfehle 的宾语，中性 Akkusativ 和 Nominativ 同形 → 还是 das</td></tr>
<tr><td class="hl">der Dirigent, <mark>den</mark> sie eingeladen haben</td><td>den 是从句里 eingeladen haben 的宾语，阳性 → Akkusativ，必须用 den（不能用 der）</td></tr></table>
<p>诀窍：把从句单独拎出来看它是不是完整的句子——<mark>der (Konzertsaal) liegt in der Innenstadt</mark> 里 der 是主语；<mark>sie haben den (Dirigenten) eingeladen</mark> 里 den 是宾语。阳性是唯一 Nominativ 和 Akkusativ 长得不一样的性，判断时格外留意。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">莱比锡文化生活小贴士：</b>Leipziger Buchmesse（莱比锡书展）是欧洲第二大书展，每年三月举办；Gewandhaus 音乐厅位于市中心的 Augustusplatz，是 Gewandhausorchester（布商大厦管弦乐团）的主场；Thomaskirche（圣托马斯教堂）和巴赫渊源很深，Thomanerchor（圣托马斯童声合唱团）通常在周五、周六有 Motette 演出——具体场次和时间以官网为准。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '关系代词的形式基本等于哪类词？', options: ['定冠词（der/die/das/die）', '不定冠词', '人称代词'], answer: 0, why: '关系代词的形式和定冠词几乎一样，只有阳性 Akkusativ 变成 den。' },
        { type: 'cloze', zhHint: '有一场音乐会，我特别推荐给你。（Akkusativ 中性，先行词 das Konzert）', before: 'Es gibt ein Konzert,', after: 'ich dir sehr empfehle.', options: ['das', 'der', 'den'], answer: 0, why: '先行词 Konzert 是中性，且在从句里是 empfehle 的宾语——中性 Akkusativ 和 Nominativ 同形，都是 das。' },
        { type: 'cloze', zhHint: '他们请来的这位指挥很有名。（Akkusativ 阳性，先行词 der Dirigent）', before: 'Der Dirigent,', after: 'sie eingeladen haben, ist sehr bekannt.', options: ['den', 'der', 'das'], answer: 0, why: '关系代词在从句里是 eingeladen haben 的宾语，阳性 Akkusativ 用 den。' },
        { type: 'mcq', q: '为什么 "Der Konzertsaal, der in der Innenstadt liegt" 里用 der 而不是 den？', options: ['因为 der 在从句里是 liegt 的主语（Nominativ）', '因为 Konzertsaal 是阴性名词', '因为 der 是唯一正确的关系代词形式'], answer: 0, why: '关系代词的格由它在从句内部的身份决定，这里 der 是从句的主语，用 Nominativ。' },
        { type: 'order', zh: '这是个我不想错过的体验。', words: ['Das', 'ist', 'ein', 'Erlebnis', 'das', 'ich', 'nicht', 'verpassen', 'will'], why: '先行词 Erlebnis 紧跟关系代词 das（中性 Akkusativ），从句动词 will 踢到最后。' },
        { type: 'match', pairs: [['die Buchmesse', '书展'], ['das Museum', '博物馆'], ['die Oper', '歌剧'], ['stattfinden', '举行']] },
        { type: 'listen', audio: 'Im Museum der bildenden Künste gibt es eine Ausstellung, die noch bis nächsten Monat läuft.', q: '这句话是什么意思？', options: ['造型艺术博物馆有个展览，一直办到下个月。', '那个博物馆下个月就要关闭了。', '这个展览已经结束了。'], answer: 0, why: 'eine Ausstellung, die...läuft = 一个还在展出的展览，bis nächsten Monat = 直到下个月。' },
        { type: 'speak', de: 'Ich empfehle dir ein Konzert, das im Gewandhaus stattfindet.', zh: '我推荐你一场在 Gewandhaus 举行的音乐会。' },
      ],
      task: { title: '今天的生活任务', desc: '用关系从句向朋友推荐一个莱比锡的文化活动（书展、音乐会、展览都行），写 2-3 句话，比如 Das ist ein Konzert, das ich dir empfehle. / Das ist eine Ausstellung, die...' }
    },
    {
      id: 'u27l2', title: '在书展上', de: 'Bei der Buchmesse',
      intro: 'Wei 和 Anna 一起逛 Leipziger Buchmesse，喝着咖啡聊起周末去 Gewandhaus 听音乐会的计划——满耳朵都是"无冠词形容词"的说法：guter Kaffee、gute Musik。这一课学 Adjektivdeklination 的最后一步，学完这一课，A2 语法主线正式收官。',
      sections: [
        {
          type: 'vocab', title: '书展词汇', sub: '',
          items: [
            { de: 'Lesung', art: 'die', pl: 'Lesungen', zh: '朗读会，读书会', en: '(author) reading', ex: 'Die Autorin hält heute eine Lesung.', exZh: '这位作家今天有一场朗读会。' },
            { de: 'Stand', art: 'der', pl: 'Stände', zh: '展位，摊位', en: 'booth/stand', ex: 'Der Stand des Verlags ist sehr groß.', exZh: '这家出版社的展位很大。' },
            { de: 'signieren', zh: '（给书）签名', en: 'to sign (a book)', ex: 'Der Autor signiert heute seine Bücher.', exZh: '这位作者今天签售他的书。' },
            { de: 'Autor / die Autorin', art: 'der', pl: 'Autoren/Autorinnen', zh: '作者', en: 'author', ex: 'Die Autorin ist sehr bekannt.', exZh: '这位女作者很有名。' },
          ]
        },
        {
          type: 'vocab', title: '无冠词常见描述词', sub: '',
          items: [
            { de: 'frisch', zh: '新鲜的，刚……的', en: 'fresh', ex: 'Hier gibt es frischen Kaffee.', exZh: '这里有新鲜咖啡。' },
            { de: 'regional', zh: '本地的，地区性的', en: 'regional/local', ex: 'Ich mag regionales Bier.', exZh: '我喜欢本地啤酒。' },
            { de: 'hausgemacht', zh: '自制的，家常的', en: 'homemade', ex: 'Der Kuchen ist hausgemacht.', exZh: '这个蛋糕是自制的。' },
          ]
        },
        {
          type: 'dialogue', title: '在书展上', scene: 'Wei 和 Anna 一起逛 Leipziger Buchmesse，喝着咖啡聊起周末去 Gewandhaus 听音乐会的计划。',
          lines: [
            { sp: 'Anna', de: 'Wei, schau mal, hier gibt es frischen Kaffee und leckeren Kuchen!', zh: 'Wei，你看，这里有新鲜咖啡和美味蛋糕！' },
            { sp: 'Wei', de: 'Perfekt, mit gutem Kaffee macht das Bücherschauen gleich mehr Spaß.', zh: '太好了，有杯好咖啡逛书展就更有意思了。' },
            { sp: 'Anna', de: 'Stimmt! Ich liebe die Atmosphäre hier – überall gute Musik und interessante Lesungen.', zh: '是啊！我很喜欢这里的氛围——到处都是好听的音乐和有趣的朗读会。' },
            { sp: 'Wei', de: 'Der Stand dort drüben hat wirklich gutes Bier aus der Region.', zh: '那边那个展位真的有很棒的本地啤酒。' },
            { sp: 'Anna', de: 'Oh, regionales Bier mag ich sehr! Und guter Wein natürlich auch.', zh: '哦，本地啤酒我很喜欢！好的葡萄酒当然也喜欢。' },
            { sp: 'Wei', de: 'Übrigens, kommst du am Samstag mit ins Gewandhaus?', zh: '对了，你周六要跟我一起去 Gewandhaus 吗？' },
            { sp: 'Anna', de: 'Gern! Ich höre, dort gibt es klassische Musik mit berühmten Solisten.', zh: '好呀！我听说那里有古典音乐会，还有著名的独奏家。' },
            { sp: 'Wei', de: 'Genau. Mit guter Musik und netter Gesellschaft wird der Abend bestimmt schön.', zh: '没错。有好音乐和好伙伴，这个晚上肯定会很美好。' },
            { sp: 'Anna', de: 'Ich freue mich schon. Soll ich frisches Brot und hausgemachten Kuchen mitbringen?', zh: '我已经开始期待了。要不要我带点新鲜面包和自制蛋糕来？' },
            { sp: 'Wei', de: 'Das wäre toll! Herzlichen Dank im Voraus.', zh: '那太好了！先谢谢你了。' },
            { sp: 'Anna', de: 'Kein Problem. Gute Freunde teilen eben gutes Essen.', zh: '没事。好朋友就是要分享美食嘛。' },
            { sp: 'Wei', de: 'Ganz genau!', zh: '完全同意！' },
          ]
        },
        {
          type: 'grammar', title: '无冠词时：形容词自己扛起格与性的信息', sub: '词尾几乎照搬定冠词',
          html: `<p>没有冠词打头阵时（常见于菜单、标签、泛指的场合），形容词要独自承担起本该由冠词表达的性、格信息：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nominativ</td><td class="hl">guter Wein</td><td class="hl">gute Musik</td><td class="hl">gutes Bier</td><td class="hl">gute Freunde</td></tr>
<tr><td>Akkusativ</td><td class="hl">guten Wein</td><td class="hl">gute Musik</td><td class="hl">gutes Bier</td><td class="hl">gute Freunde</td></tr>
<tr><td>Dativ</td><td class="hl">mit gutem Wein</td><td class="hl">mit guter Musik</td><td class="hl">mit gutem Bier</td><td class="hl">mit guten Freunden</td></tr></table>
<p>只看词尾：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nom</td><td class="hl">-er</td><td class="hl">-e</td><td class="hl">-es</td><td class="hl">-e</td></tr>
<tr><td>Akk</td><td class="hl">-en</td><td class="hl">-e</td><td class="hl">-es</td><td class="hl">-e</td></tr>
<tr><td>Dat</td><td class="hl">-em</td><td class="hl">-er</td><td class="hl">-em</td><td class="hl">-en</td></tr></table>
<p>这套词尾几乎就是把定冠词（der/die/das/dem/der/dem/den）去掉开头的 d-，剩下的部分当词尾——因为没有冠词打头阵，形容词只能自己"变成"半个冠词。唯一要注意的小差异在 Dativ 阳性/中性：定冠词是 dem，形容词词尾却是 <mark>-em</mark>（不是 -en）；复数 Dativ 的形容词是 -en，别忘了名词本身也要加 -n（<mark>mit guten Freunden</mark>）。</p>`
        },
        {
          type: 'grammar', title: '三步全景：一张表看懂形容词词尾', sub: '定冠词后 vs 不定冠词后 vs 无冠词，对比着记',
          html: `<p>三次学到的规律其实是同一条逻辑的三种表现，放在一起对比着看最清楚（以 Nominativ 为例）：</p>
<table><tr><th></th><th>阳性</th><th>阴性</th><th>中性</th></tr>
<tr><td>定冠词后（u24）</td><td class="hl">der neue Job（-e）</td><td class="hl">die neue Stelle（-e）</td><td class="hl">das neue Projekt（-e）</td></tr>
<tr><td>不定冠词后（u25）</td><td class="hl">ein neuer Job（-er）</td><td class="hl">eine neue Stelle（-e）</td><td class="hl">ein neues Projekt（-es）</td></tr>
<tr><td>无冠词（u27）</td><td class="hl">neuer Job（-er）</td><td class="hl">neue Stelle（-e）</td><td class="hl">neues Projekt（-es）</td></tr></table>
<p>阴性 Nominativ 三种情况全是 <mark>-e</mark>，因为 die/eine/（无冠词时形容词自己）都不需要额外操心。阳性和中性只有"定冠词后"是 -e，因为 der/das 已经把性别交代得明明白白；另外两种情况（不定冠词模糊、无冠词缺席）都要形容词自己站出来标性别，所以是 -er/-es。<b>一句话总结全 Phase 4 的形容词语法：冠词标好性别，形容词就偷懒；冠词没标或没有冠词，形容词就自己扛。</b></p>`
        },
        {
          type: 'tip',
          html: '<b class="t">恭喜完成 A2！</b>从 u0 的发音规则到今天的无冠词形容词词尾，这条语法主线走完了 A1 到 A2 的全部核心内容——过去时态、格系统、从句、虚拟式、关系从句，样样都摸过一遍。现在具备的能力：读懂简易新闻、表达观点和假设、用关系从句精确描述人和事、参与本地文化生活对话。建议花点时间回头翻一遍语法速查手册（g1-g26），把零散的知识点在脑子里连成一张网；接下来 Phase 5 会带你冲向 B1，从"讲清自己的职业经历"开始，继续往前走。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '无冠词时，形容词词尾主要模仿哪类词的词尾？', options: ['定冠词（der/die/das...）', '不定冠词', '人称代词'], answer: 0, why: '无冠词时形容词自己承担起冠词的角色，词尾几乎照搬定冠词的形态。' },
        { type: 'cloze', zhHint: '这里有新鲜咖啡。（Akkusativ 阳性，无冠词）', before: 'Hier gibt es', after: 'Kaffee.', options: ['frischen', 'frischer', 'frisches'], answer: 0, why: '"es gibt" 后接 Akkusativ，Kaffee 是阳性名词，无冠词 Akkusativ 阳性词尾是 -en。' },
        { type: 'cloze', zhHint: '有杯好咖啡（Dativ 阳性，无冠词）逛书展更有意思。', before: 'Mit', after: 'Kaffee macht das Bücherschauen mehr Spaß.', options: ['gutem', 'guter', 'gutes'], answer: 0, why: 'mit + Dativ。无冠词时形容词自己承担冠词的信息：Dativ 阳性/中性照搬 dem 的词尾 -em——注意别按"定冠词后一律 -en"的习惯误写成 guten。' },
        { type: 'mcq', q: '"guter Wein" 和 "mit gutem Wein" 词尾不一样，为什么？', options: ['格不一样：前者 Nominativ 用 -er，后者 Dativ 用 -em', '这是任意的例外，没有规律', 'Wein 在两句话里性别不同'], answer: 0, why: 'Nominativ 阳性无冠词是 -er，Dativ 阳性无冠词是 -em，两者格不同，词尾自然不同。' },
        { type: 'order', zh: '好朋友就是要分享美食。', words: ['Gute', 'Freunde', 'teilen', 'eben', 'gutes', 'Essen'], why: 'Gute Freunde 是主语（复数 Nominativ，-e），gutes Essen 是宾语（中性 Akkusativ，-es）。' },
        { type: 'match', pairs: [['die Lesung', '朗读会'], ['der Stand', '展位，摊位'], ['signieren', '签名'], ['der Autor', '作者']] },
        { type: 'listen', audio: 'Regionales Bier mag ich sehr, und guter Wein natürlich auch.', q: '这句话是什么意思？', options: ['本地啤酒我很喜欢，好的葡萄酒当然也喜欢。', '我一点都不喜欢啤酒。', '我只喝进口的葡萄酒。'], answer: 0, why: 'regionales Bier = 本地啤酒（Akkusativ 中性 -es），guter Wein = 好葡萄酒（Nominativ 阳性 -er）。' },
        { type: 'speak', de: 'Ich mag regionales Bier und hausgemachten Kuchen, das ist ein tolles Erlebnis.', zh: '我喜欢本地啤酒和自制蛋糕，这是一次很棒的体验。' },
      ],
      task: { title: '今天的生活任务', desc: '逛一次（真实或想象的）市场、书展或咖啡馆，用无冠词的形容词短语写 3 句话描述你看到/尝到的东西（比如 guter Kaffee、frisches Brot、regionales Bier）——写完这三句，A2 语法主线就正式收官了！' }
    },
  ]
};
