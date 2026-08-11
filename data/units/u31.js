// 第 31 单元：媒体与新闻
export default {
  id: 'u31', num: '31', color: 'green', shape: 'square',
  de: 'Nachrichten hinterfragen', zh: '媒体与新闻',
  desc: 'B1 收官前半程：学会区分新闻里的事实和观点，再把被动态从 u23 的入门一次性补全到 Präsens/Präteritum/Perfekt 三个时态外加情态动词被动——尤其要记住 worden 不是 geworden。',
  kann: [
    { de: 'Ich kann in einem Nachrichtentext Fakten und Meinungen anhand von Signalwörtern unterscheiden.', zh: '我能借助信号词区分新闻文本中的事实和观点。' },
    { de: 'Ich kann Passivsätze in Präsens, Präteritum und Perfekt erkennen und ihre Zeitform bestimmen.', zh: '我能识别现在时、过去时、完成时的被动句并判断其时态。' },
    { de: 'Ich kann eine Passivkonstruktion mit Modalverb (muss geprüft werden) verstehen.', zh: '我能理解情态动词加被动态的结构。' },
  ],
  lessons: [
    {
      id: 'u31l1', title: '这是真的还是他自己觉得？', de: 'Tatsache oder Meinung?',
      intro: 'Wei 读到一篇关于莱比锡新自行车道的新闻，想弄清楚哪些是被证实的事实、哪些只是记者或读者自己的看法。这一课学新闻德语里区分"事实"和"观点"的语言信号，并读两篇 Nachrichtenleicht 风格短文练手。',
      sections: [
        {
          type: 'vocab', title: '新闻与信息', sub: '',
          items: [
            { de: 'Quelle', art: 'die', pl: 'Quellen', zh: '来源，消息来源', en: 'source', ex: 'Die Zeitung nennt ihre Quelle nicht.', exZh: '这家报纸没有透露它的消息来源。' },
            { de: 'Tatsache', art: 'die', pl: 'Tatsachen', zh: '事实', en: 'fact', ex: 'Das ist eine Tatsache, kein Gerücht.', exZh: '这是事实，不是谣言。' },
            { de: 'Behauptung', art: 'die', pl: 'Behauptungen', zh: '声称，断言', en: 'claim/assertion', ex: 'Diese Behauptung ist noch nicht bewiesen.', exZh: '这个说法还没有被证实。' },
            { de: 'Bericht', art: 'der', pl: 'Berichte', zh: '报道，报告（复现）', en: 'report', ex: 'Der Bericht wurde heute veröffentlicht.', exZh: '这篇报道今天发布了。', note: '复现词：u23 学过 der Bericht，这里在被动态语境里复现' },
            { de: 'veröffentlichen', zh: '发布，公开发表', en: 'to publish', ex: 'Die Zeitung veröffentlicht den Artikel morgen.', exZh: '这家报纸明天发表这篇文章。' },
          ]
        },
        {
          type: 'vocab', title: '可信度判断', sub: '',
          items: [
            { de: 'objektiv', zh: '客观的', en: 'objective', ex: 'Die Nachricht ist objektiv geschrieben.', exZh: '这条新闻写得很客观。' },
            { de: 'subjektiv', zh: '主观的', en: 'subjective', ex: 'Das ist nur seine subjektive Meinung.', exZh: '这只是他的主观看法。' },
            { de: 'überprüfen', zh: '核实，核查', en: 'to verify', ex: 'Man sollte die Fakten immer überprüfen.', exZh: '应该总是核实这些事实。' },
            { de: 'glaubwürdig', zh: '可信的', en: 'credible', ex: 'Ist diese Quelle glaubwürdig?', exZh: '这个消息来源可信吗？' },
            { de: 'Falschmeldung', art: 'die', pl: 'Falschmeldungen', zh: '假消息，虚假报道', en: 'false report/fake news', ex: 'Das war leider eine Falschmeldung.', exZh: '可惜那是一条假消息。' },
          ]
        },
        {
          type: 'dialogue', title: '这是真的还是他自己觉得？', scene: 'Wei 在读一篇关于莱比锡新自行车道的新闻，跟 Jonas 讨论文章里哪些是事实、哪些只是记者或读者的个人看法。',
          lines: [
            { sp: 'Jonas', de: 'Was liest du da so konzentriert?', zh: '你在这么专心地读什么呢？' },
            { sp: 'Wei', de: 'Einen Artikel über die neuen Fahrradwege in Leipzig. Aber ich bin nicht sicher, was Tatsache ist und was nur Meinung.', zh: '一篇关于莱比锡新自行车道的文章。不过我不太确定哪些是事实，哪些只是观点。' },
            { sp: 'Jonas', de: 'Zeig mal. Was steht denn ganz oben?', zh: '给我看看。最上面写的是什么？' },
            { sp: 'Wei', de: 'Der Stadtrat hat das Projekt am Montag beschlossen. Das klingt nach einer Tatsache, oder?', zh: '"市议会周一通过了这个项目。"这听起来像是事实，对吧？' },
            { sp: 'Jonas', de: 'Genau, das ist überprüfbar – es gibt ein Datum und eine Quelle, den Stadtrat.', zh: '没错，这是可以核实的——有具体日期，还有明确来源，市议会。' },
            { sp: 'Wei', de: 'Aber weiter unten steht: Viele Bürger finden die Kosten zu hoch.', zh: '但下面又写着："很多市民觉得费用太高了。"' },
            { sp: 'Jonas', de: 'Das ist eher subjektiv. Finden zeigt, dass es eine Meinung ist, keine belegte Tatsache.', zh: '这更偏主观。"finden"（觉得）说明这是一种观点，不是有据可查的事实。' },
            { sp: 'Wei', de: 'Verstehe. Und was ist mit angeblich kostet das Projekt zwei Millionen Euro?', zh: '明白了。那"据说这个项目要花两百万欧元"这句呢？' },
            { sp: 'Jonas', de: 'Angeblich ist ein Warnsignal – die Zahl ist noch nicht offiziell bestätigt.', zh: '"angeblich"（据说）是个警示信号——这个数字还没有得到官方证实。' },
            { sp: 'Wei', de: 'Gut zu wissen. Ich muss also nicht jeder Behauptung glauben, nur weil sie in der Zeitung steht.', zh: '学到了。看来我不能因为一句话印在报纸上就轻信每个说法。' },
            { sp: 'Jonas', de: 'Genau. Am besten immer fragen: Wer sagt das, und woher kommt die Information?', zh: '没错。最好的办法永远是问：这是谁说的，信息从哪儿来的？' },
            { sp: 'Wei', de: 'Danke, jetzt lese ich Nachrichten mit ganz anderen Augen.', zh: '谢谢，现在我读新闻的眼光完全不一样了。' },
          ]
        },
        {
          type: 'grammar', title: '事实还是观点？辨认新闻语言里的信号词', sub: '两类句子背后各自依赖什么',
          html: `<p>读新闻和评论文章时，最重要的技能不是查每个生词，而是分清哪些句子是<b class="de">Tatsache（事实）</b>，哪些是<b class="de">Meinung（观点）</b>——这两类句子在德语里有非常固定的语言信号：</p>
<table><tr><th>事实信号（可核实）</th><th>观点/未证实信号</th></tr>
<tr><td class="hl">laut + Dativ/Genitiv（据……）</td><td class="hl">ich finde/glaube/denke（我觉得）</td></tr>
<tr><td class="hl">eine Studie zeigt, dass...（研究显示）</td><td class="hl">meiner Meinung nach（在我看来）</td></tr>
<tr><td class="hl">es wurde bestätigt, dass...（已被证实）</td><td class="hl">angeblich（据说，未经证实）</td></tr>
<tr><td class="hl">被动态 + 具体数字/日期/机构</td><td class="hl">sollte/könnte（应该/可能，建议或猜测）</td></tr></table>
<p>判断诀窍：事实句背后总能找到<b>可核实的东西</b>——一个数字、一个日期、一个具名的机构或来源；观点句则依赖<b>说话人自己的判断</b>，就算说得很肯定，也换不来"可以去查证"这件事。</p>
<p class="de">Der Stadtrat hat das Projekt am Montag beschlossen.（事实：有具体日期和明确来源——市议会）</p>
<p class="de">Viele Bürger finden die Kosten zu hoch.（观点：finden 说明这是主观判断，不是可核实的数据）</p>`
        },
        {
          type: 'grammar', title: '阅读实战：这句话是事实还是观点？', sub: '两篇 Nachrichtenleicht 风格短文，逐段标注',
          html: `<p>下面两篇短文，试着自己先判断每段是事实还是观点，再看批注：</p>
<p><b class="t">短文一：Fahrpreise steigen ab Januar</b></p>
<p class="de">In Leipzig steigen die Preise für Bus und Bahn ab dem 1. Januar um durchschnittlich acht Prozent. Das wurde von den Leipziger Verkehrsbetrieben (LVB) am Dienstag bestätigt. Grund seien die gestiegenen Energiekosten.</p>
<p>→ <mark>事实</mark>：wurde…bestätigt（已被证实）+ 具体日期、百分比、机构名称（LVB），都是可核实的信息。</p>
<p class="de">Laut LVB-Sprecherin Anna Berger sind die höheren Kosten notwendig, um den Betrieb zu sichern. Rund 200.000 Fahrgäste nutzen täglich die Busse und Bahnen der Stadt.</p>
<p>→ <mark>事实（转述）</mark>：laut + 具名发言人，是可查证的转述，附带具体数字。</p>
<p class="de">Viele Fahrgäste finden die Erhöhung zu hoch. Manche meinen, die Stadt sollte stattdessen bei anderen Ausgaben sparen, statt die Preise für Bus und Bahn zu erhöhen.</p>
<p>→ <mark>观点</mark>：finden/meinen + sollte，是市民的主观判断，没有数据支撑，也无法证实"该不该"。</p>
<p><b class="t">短文二：Kommentar – Ist Homeoffice wirklich die Zukunft?</b></p>
<p class="de">Eine neue Studie zeigt, dass mittlerweile fast 30 Prozent der Angestellten in Deutschland regelmäßig von zu Hause arbeiten. Das ist doppelt so viel wie vor fünf Jahren. Besonders in der IT-Branche ist der Anteil noch höher.</p>
<p>→ <mark>事实</mark>：eine Studie zeigt + 具体百分比、时间对比、行业细分，都是可查证的研究数据。</p>
<p class="de">Meiner Meinung nach ist das eine positive Entwicklung. Ich glaube, Homeoffice macht Mitarbeiter zufriedener und spart Zeit. Außerdem sollten Firmen ihren Angestellten mehr Flexibilität bieten.</p>
<p>→ <mark>观点</mark>：meiner Meinung nach / ich glaube / sollten，全部是作者的主观立场和建议。</p>
<p class="de">Kritiker behaupten allerdings, dass Homeoffice die Teamarbeit verschlechtert und die Firmenkultur schwächt. Ob das wirklich stimmt, ist noch nicht sicher – dazu fehlen bisher verlässliche Zahlen.</p>
<p>→ <mark>观点（未证实的说法）</mark>：behaupten（声称）本身就暗示"尚未证明"，加上"fehlen verlässliche Zahlen"（缺乏可靠数据）更加确认这是有争议的断言，不是确凿事实。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">读新闻时的小窍门：</b>先找信号词——laut、wurde bestätigt、eine Studie zeigt 这类表示可核实的事实；ich finde、angeblich、manche meinen 这类表示观点或未证实的说法。再判断这句话背后有没有具体来源、数字或日期——"看起来像事实"的句子不一定就是事实，最好养成"这是谁说的"的追问习惯。Nachrichtenleicht（Deutschlandfunk 出品）是练习这个技能的好起点，词汇量比普通新闻友好很多。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '哪一组词组是"可以核实的事实"的典型语言信号？', options: ['laut / es wurde bestätigt, dass...', 'ich finde / meiner Meinung nach', 'angeblich'], answer: 0, why: '客观事实常用可核实的来源词如 laut、wurde bestätigt；ich finde 和 angeblich 都指向主观判断或未证实的说法。' },
        { type: 'cloze', zhHint: '很多市民觉得费用太高了。', before: 'Viele Bürger', after: 'die Kosten zu hoch.', options: ['finden', 'findet', 'gefunden'], answer: 0, why: '主语 Bürger 是复数，finden 的复数变位不加词尾，直接是 finden。' },
        { type: 'cloze', zhHint: '应该总是核实这些事实。', before: 'Man sollte die Fakten immer', after: '.', options: ['überprüfen', 'überprüft', 'überprüfte'], answer: 0, why: 'sollte 是情态动词，后面的实义动词必须用原形踢到句尾，不能用分词或过去式。' },
        { type: 'mcq', q: '"Der Stadtrat hat das Projekt am Montag beschlossen." 这句话属于事实还是观点？', options: ['事实——有具体日期和明确的机构来源，可以核实', '观点——因为句子比较长', '无法判断，信息不够'], answer: 0, why: '有具体日期（am Montag）和明确来源（Der Stadtrat），属于可核实的客观陈述。' },
        { type: 'order', zh: '应该总是核实这些事实。', words: ['Man', 'sollte', 'die', 'Fakten', 'immer', 'überprüfen'], why: 'sollte 变位站第二位，überprüfen 原形踢到句尾——情态动词句框结构的复现。' },
        { type: 'match', pairs: [['die Quelle', '来源，消息来源'], ['die Behauptung', '声称，断言'], ['glaubwürdig', '可信的'], ['die Falschmeldung', '假消息']] },
        { type: 'listen', audio: 'Viele Bürger finden die Kosten zu hoch, aber das ist nur eine Meinung.', q: '这句话主要想表达什么？', options: ['这是市民的主观看法，不是被证实的事实', '费用已经被官方证实过高', '这句话没有提到任何观点'], answer: 0, why: 'finden...+ "nur eine Meinung" 明确点出这是观点而非事实。' },
        { type: 'speak', de: 'Man sollte nicht jeder Behauptung glauben, nur weil sie in der Zeitung steht.', zh: '不能因为一句话印在报纸上就轻信每个说法。' },
      ],
      task: { title: '今天的生活任务', desc: '读一篇真实的（或本课的）简易新闻，标出至少 3 句事实、2 句观点，并写下你依据的信号词是什么（比如 laut、wurde bestätigt、ich finde、angeblich）。' }
    },
    {
      id: 'u31l2', title: '这项法律到底怎么通过的？', de: 'Wie wurde das Gesetz beschlossen?',
      intro: 'u23 学过的 Passiv 现在时只是冰山一角——这一课把被动态补全成完整的时态谱系：Präteritum、Perfekt（当心 worden 不是 geworden！）和情态动词+被动，新闻和评论文章里几乎每句话都离不开这几个结构。',
      sections: [
        {
          type: 'vocab', title: '陈述与核实', sub: '',
          items: [
            { de: 'vermuten', zh: '推测，猜测', en: 'to suspect/assume', ex: 'Man vermutet, dass das Gesetz bald geändert wird.', exZh: '据推测，这项法律很快会被修改。' },
            { de: 'bestätigen', zh: '证实，确认', en: 'to confirm', ex: 'Die Polizei hat die Information bestätigt.', exZh: '警方证实了这条信息。' },
            { de: 'Artikel', art: 'der', pl: 'Artikel', zh: '文章', en: 'article', ex: 'Ich habe einen interessanten Artikel gelesen.', exZh: '我读了一篇有意思的文章。' },
            { de: 'Kommentar', art: 'der', pl: 'Kommentare', zh: '评论', en: 'commentary/comment', ex: 'Der Kommentar zeigt die Meinung des Autors.', exZh: '这篇评论展示了作者的观点。' },
          ]
        },
        {
          type: 'vocab', title: '数据与影响', sub: '',
          items: [
            { de: 'Auswirkung', art: 'die', pl: 'Auswirkungen', zh: '影响，后果', en: 'effect/impact', ex: 'Die Auswirkungen des Gesetzes sind noch unklar.', exZh: '这项法律的影响目前还不明朗。' },
            { de: 'Anteil', art: 'der', pl: 'Anteile', zh: '比例，份额', en: 'share/proportion', ex: 'Der Anteil ist in den letzten Jahren gestiegen.', exZh: '这个比例近几年上升了。' },
            { de: 'steigen', zh: '上升', en: 'to rise', ex: 'Die Zahlen steigen seit Monaten.', exZh: '这些数字已经上升了好几个月。', note: '完成时用 sein：ist gestiegen' },
            { de: 'sinken', zh: '下降', en: 'to fall/decrease', ex: 'Die Preise sinken selten.', exZh: '价格很少下降。', note: '完成时用 sein：ist gesunken' },
            { de: 'mittlerweile', zh: '如今，与此同时', en: 'by now/meanwhile', ex: 'Mittlerweile wurde das Problem gelöst.', exZh: '如今这个问题已经被解决了。' },
          ]
        },
        {
          type: 'dialogue', title: '这项法律到底怎么通过的？', scene: 'Wei 和 Anna 在办公室讨论一则关于新法律的新闻，两人用被动态的三种时态加情态动词，把事情的来龙去脉理清楚。',
          lines: [
            { sp: 'Anna', de: 'Hast du gehört? Ein neues Verkehrsgesetz wird gerade im Bundestag diskutiert.', zh: '你听说了吗？联邦议院正在讨论一项新的交通法。' },
            { sp: 'Wei', de: 'Ja, ich habe den Artikel gelesen. Wann wurde das Gesetz eigentlich vorgeschlagen?', zh: '嗯，我看了那篇文章。这项法律到底是什么时候提出来的？' },
            { sp: 'Anna', de: 'Der erste Entwurf wurde schon letztes Jahr geschrieben.', zh: '第一版草案去年就写好了。' },
            { sp: 'Wei', de: 'Und ist es schon verabschiedet worden?', zh: '那已经通过了吗？' },
            { sp: 'Anna', de: 'Noch nicht ganz, aber ein Teil davon ist letzte Woche verabschiedet worden.', zh: '还没完全通过，不过其中一部分上周已经通过了。' },
            { sp: 'Wei', de: 'Ah, verabschiedet worden – nicht geworden, richtig?', zh: '啊，是"verabschiedet worden"——不是"geworden"，对吧？' },
            { sp: 'Anna', de: 'Genau, das verwechseln viele! Bei werden als Hilfsverb im Perfekt Passiv heißt es immer worden.', zh: '没错，好多人会搞混！"werden"在完成时被动态里当助动词时，一律用 worden。' },
            { sp: 'Wei', de: 'Gut, das merke ich mir. Und was passiert jetzt mit dem Rest des Gesetzes?', zh: '好，我记住了。那这项法律剩下的部分现在怎么办？' },
            { sp: 'Anna', de: 'Der Rest muss noch vom Bundesrat geprüft werden.', zh: '剩下的部分还必须由联邦参议院审查。' },
            { sp: 'Wei', de: 'Verstehe – geprüft werden, also Modalverb plus Passiv.', zh: '明白了——geprüft werden，情态动词加被动态。' },
            { sp: 'Anna', de: 'Richtig. Und danach kann es vielleicht schon im Sommer angewendet werden.', zh: '对。之后说不定夏天就能开始实施了。' },
            { sp: 'Wei', de: 'Spannend, wie viele Zeitformen man braucht, nur um über ein Gesetz zu sprechen!', zh: '真有意思，光是聊一项法律就要用到这么多时态！' },
            { sp: 'Anna', de: 'Willkommen im Passiv-Dschungel der Nachrichtensprache!', zh: '欢迎来到新闻语言的被动态丛林！' },
          ]
        },
        {
          type: 'grammar', title: '被动态三时态对照：现在 → 过去 → 完成', sub: 'worden 绝不是 geworden',
          html: `<p>u23 学过的 Präsens Passiv（<mark>wird</mark> + Partizip II）只是被动态时态谱系的第一步。新闻和评论文章里，过去发生的事同样常用被动态表达，这里把三个时态放在一起对比：</p>
<table><tr><th>时态</th><th>构成</th><th>例句</th></tr>
<tr><td>Präsens Passiv</td><td class="hl">wird + Partizip II</td><td class="hl">Das Gesetz <mark>wird</mark> diskutiert.（这项法律正在被讨论。）</td></tr>
<tr><td>Präteritum Passiv</td><td class="hl">wurde + Partizip II</td><td class="hl">Das Gesetz <mark>wurde</mark> letzte Woche verabschiedet.（这项法律上周被通过了。）</td></tr>
<tr><td>Perfekt Passiv</td><td class="hl">ist/sind + Partizip II + worden</td><td class="hl">Das Gesetz <mark>ist</mark> letzte Woche verabschiedet <mark>worden</mark>.（这项法律上周已经被通过了。）</td></tr></table>
<p>werden 的 Präteritum 变位（构成 Präteritum Passiv 时要用到）：</p>
<table><tr><th>人称</th><th>werden 的 Präteritum</th></tr>
<tr><td class="hl">ich</td><td class="hl">wurde</td></tr><tr><td class="hl">du</td><td class="hl">wurdest</td></tr><tr><td class="hl">er/sie/es</td><td class="hl">wurde</td></tr>
<tr><td class="hl">wir</td><td class="hl">wurden</td></tr><tr><td class="hl">ihr</td><td class="hl">wurdet</td></tr><tr><td class="hl">sie/Sie</td><td class="hl">wurden</td></tr></table>
<p><b class="t">高危警示——worden 绝不是 geworden：</b>werden 单独当实义动词用（"变成"）时，Perfekt 是 <mark>ist/sind + geworden</mark>（<span class="de">Er ist Arzt geworden.</span> 他成为了医生）。但 werden 在 Perfekt Passiv 里只是个"打下手"的助动词，这时它的分词要<b>去掉 ge-</b>，缩短成 <mark>worden</mark>：<span class="de">Das Gesetz ist verabschiedet worden.</span> 绝对不能写成 <span class="de">ist verabschiedet geworden</span>。两个词长得像双胞胎，意思却完全不是一回事，新闻和正式文本里出现频率很高，务必单独记一次。</p>`
        },
        {
          type: 'grammar', title: '情态动词 + 被动：新闻评论最爱用的结构', sub: '四种时态一次看全',
          html: `<p>新闻评论常常不只是陈述"发生了什么"，还会说"应该/必须怎么处理"——这时用<b class="de">情态动词 + 被动态</b>：</p>
<table><tr><th>结构</th><th>例句</th></tr>
<tr><td class="hl">情态动词(变位) + Partizip II + werden(原形)</td><td class="hl">Das Problem <mark>muss</mark> gelöst <mark>werden</mark>.（这个问题必须被解决。）</td></tr>
<tr><td></td><td class="hl">Die Fakten <mark>müssen</mark> überprüft <mark>werden</mark>.（这些事实必须被核实。）</td></tr>
<tr><td></td><td class="hl">Der Rest <mark>muss</mark> noch vom Bundesrat geprüft <mark>werden</mark>.（剩下的部分还必须由联邦参议院审查。）</td></tr></table>
<p>句框结构（Satzklammer）和情态动词的其他用法完全一致：情态动词变位站第二位，句尾堆着"Partizip II + werden"这两块——这是全书学过的 Satzklammer 结构里"垫底部分最长"的一种，但逻辑不变。</p>
<p><b class="t">四种时态一次看全（以 reparieren 为例）：</b></p>
<table><tr><th>时态</th><th>例句</th></tr>
<tr><td>Präsens</td><td class="hl">Das Auto wird repariert.</td></tr>
<tr><td>Präteritum</td><td class="hl">Das Auto wurde repariert.</td></tr>
<tr><td>Perfekt</td><td class="hl">Das Auto ist repariert worden.</td></tr>
<tr><td>Modalverb + Passiv</td><td class="hl">Das Auto muss repariert werden.</td></tr></table>
<p><b class="t">从主动改被动的诀窍：</b>Aktiv 的宾语（Akkusativ）变成 Passiv 的主语（Nominativ），原来的主语如果要保留，用 <mark>von + Dativ</mark> 补充，但客观陈述常常直接省略施动者：<span class="de">Der Stadtrat verabschiedet das Gesetz.</span> → <span class="de">Das Gesetz wird (vom Stadtrat) verabschiedet.</span></p>`
        },
        {
          type: 'tip',
          html: '<b class="t">worden 还是 geworden？记住这条铁律：</b>werden 单独作为实义动词（变成……）时，Perfekt 用 ist/sind + geworden（Er ist Arzt geworden。他成为了医生）；werden 在 Perfekt Passiv 里作助动词（被……）时，专属分词是 worden，不能写成 geworden（Das Gesetz ist verabschiedet worden，不是 ist verabschiedet geworden）。两个词长得很像，意思天差地别，值得单独记一次——判断方法：句子里如果还有另一个动词的过去分词（如 verabschiedet），worden 就在最后当"配角"；如果 werden 本身就是唯一的动词，那才用 geworden。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'Perfekt Passiv 的构成是？', options: ['sein + Partizip II + worden', 'sein + Partizip II + geworden', 'haben + Partizip II + worden'], answer: 0, why: 'Perfekt Passiv = ist/sind + Partizip II + worden，worden 是 werden 作被动态助动词时的特殊分词形式，不能写成 geworden。' },
        { type: 'cloze', zhHint: '这项法律上周已经通过了。（Perfekt Passiv）', before: 'Das Gesetz ist letzte Woche', after: '.', options: ['verabschiedet worden', 'verabschiedet geworden', 'worden verabschiedet'], answer: 0, why: 'Perfekt Passiv 固定语序：ist + Partizip II + worden，worden 放在最后，且必须是 worden 不是 geworden。' },
        { type: 'cloze', zhHint: '这个问题必须被解决。（情态动词+被动）', before: 'Das Problem', after: 'werden.', options: ['muss gelöst', 'gelöst muss', 'muss lösen'], answer: 0, why: '情态动词+被动的语序：muss（第二位）+ Partizip II（gelöst）+ werden（句尾原形）。' },
        { type: 'mcq', q: '"Das Gesetz wurde letzte Woche verabschiedet." 这是哪个时态的被动态？', options: ['Präteritum Passiv（wurde + Partizip II）', 'Präsens Passiv（wird + Partizip II）', 'Perfekt Passiv（ist + Partizip II + worden）'], answer: 0, why: 'wurde 是 werden 的 Präteritum 形式，新闻报道最常用这个时态描述过去发生的事。' },
        { type: 'order', zh: '剩下的部分还必须由联邦参议院审查。', words: ['Der', 'Rest', 'muss', 'noch', 'vom', 'Bundesrat', 'geprüft', 'werden'], why: '情态动词 muss 站第二位，Partizip II（geprüft）+ werden（原形）一起踢到句尾。' },
        { type: 'match', pairs: [['vermuten', '推测'], ['bestätigen', '证实'], ['die Auswirkung', '影响'], ['mittlerweile', '如今，与此同时']] },
        { type: 'listen', audio: 'Der erste Entwurf wurde schon letztes Jahr geschrieben, aber ein Teil ist erst letzte Woche verabschiedet worden.', q: '这句话是什么意思？', options: ['草案去年就写好了，但其中一部分上周才通过', '整部法律已经完全生效', '法律草案还没有开始写'], answer: 0, why: 'wurde geschrieben（过去被动，草案完成）+ ist...verabschiedet worden（完成时被动，刚通过部分内容）。' },
        { type: 'speak', de: 'Der Rest muss noch vom Bundesrat geprüft werden.', zh: '剩下的部分还必须由联邦参议院审查。' },
      ],
      task: { title: '今天的生活任务', desc: '找一条真实的 Nachrichtenleicht 新闻，标出里面所有的被动态句子，并判断是哪种时态（现在/过去/完成/情态动词+被动）——特别留意有没有 worden。' }
    },
  ]
};
