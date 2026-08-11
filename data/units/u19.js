// 第 19 单元：火车出行
export default {
  id: 'u19', num: '19', color: 'blue', shape: 'half',
  de: 'Bahn fahren', zh: '火车出行',
  desc: '从买票到应对延误改签，这个单元带你在德国火车系统里独立行动——顺便一次性讲透两组"永远"介词和人称代词的完整三格体系。',
  kann: [
    { de: 'Ich kann am Schalter eine Zugfahrkarte kaufen und nach Gleis und Anschluss fragen.', zh: '我能在售票窗口买火车票并询问站台和换乘。' },
    { de: 'Ich kann feste Dativ- und Akkusativ-Präpositionen (mit, zu, für, ohne ...) korrekt benutzen.', zh: '我能正确使用永远接第三格或第四格的固定介词。' },
    { de: 'Ich kann bei Verspätung oder verpasstem Anschluss am Schalter mein Problem schildern und umbuchen.', zh: '我能在火车晚点或错过换乘时向服务台说明情况并办理改签。' },
  ],
  lessons: [
    {
      id: 'u19l1', title: '买票与乘车', de: 'Einmal nach Dresden, bitte',
      intro: '坐火车是德国生活绕不开的一件事。这一课学会买票、看懂站台信息的核心词汇，语法上正式讲一批"永远"接第三格的介词——aus/bei/mit/nach/seit/von/zu，不用像 u16 的两格介词那样判断 wo 还是 wohin，记住这七个词，格就固定了。',
      sections: [
        {
          type: 'vocab', title: '车票与车站', sub: '',
          items: [
            { de: 'Fahrkarte', art: 'die', pl: 'Fahrkarten', zh: '车票', en: 'ticket', ex: 'Ich kaufe eine Fahrkarte nach Dresden.', exZh: '我买一张去德累斯顿的车票。' },
            { de: 'Gleis', art: 'das', pl: 'Gleise', zh: '站台，轨道号', en: 'track/platform number', ex: 'Der Zug fährt von Gleis 5 ab.', exZh: '这趟车从5号站台发车。' },
            { de: 'Bahnsteig', art: 'der', pl: 'Bahnsteige', zh: '站台', en: 'platform', note: 'Gleis 指具体的轨道编号，Bahnsteig 指站台本身，日常说法里两个词常常混用', ex: 'Wir warten auf dem Bahnsteig.', exZh: '我们在站台上等着。' },
            { de: 'Abfahrt', art: 'die', pl: 'Abfahrten', zh: '出发，发车', en: 'departure', ex: 'Die Abfahrt ist um 9:15 Uhr.', exZh: '发车时间是9点15分。' },
            { de: 'Ankunft', art: 'die', pl: 'Ankünfte', zh: '到达', en: 'arrival', ex: 'Die Ankunft ist um 11:40 Uhr.', exZh: '到达时间是11点40分。' },
            { de: 'ICE', art: 'der', pl: 'ICEs', zh: '城际特快列车', en: 'high-speed train', note: 'InterCityExpress 的缩写，德国最快的火车类型', ex: 'Ich fahre mit dem ICE.', exZh: '我乘坐城际特快列车去。' },
            { de: 'BahnCard', art: 'die', pl: 'BahnCards', zh: '德铁优惠卡', en: 'Bahn discount card', note: 'BahnCard 25/50 分别打75折/5折，是否值得办、具体价格以 bahn.de 官网为准', ex: 'Ich zahle weniger mit meiner BahnCard.', exZh: '用我的德铁优惠卡我付得更少。' },
          ]
        },
        {
          type: 'vocab', title: '乘车动词与短语', sub: '',
          items: [
            { de: 'abfahren', zh: '发车，出发', en: 'to depart', ex: 'Der Zug fährt gleich ab.', exZh: '这趟车马上就要发车了。', note: '可分动词（呼应 u13），Perfekt 用 sein：der Zug ist abgefahren' },
            { de: 'ankommen', zh: '到达', en: 'to arrive', ex: 'Wann kommt der Zug an?', exZh: '这趟车什么时候到？', note: '可分动词，Perfekt 用 sein：der Zug ist angekommen' },
            { de: 'Anschluss', art: 'der', pl: 'Anschlüsse', zh: '换乘车次，衔接', en: 'connection', ex: 'Ich habe meinen Anschluss verpasst.', exZh: '我错过了换乘车次。' },
            { de: 'Reservierung', art: 'die', pl: 'Reservierungen', zh: '（座位）预订', en: 'reservation', ex: 'Brauche ich eine Reservierung?', exZh: '我需要预订座位吗？' },
            { de: 'einfach', zh: '单程（车票）', en: 'one-way', ex: 'Einfach oder hin und zurück?', exZh: '单程还是往返？', note: 'einfach 本来的意思是"简单地，就"（u16、u18 的对话里出现过），这里是买票时的固定问法，专指"单程"' },
            { de: 'hin und zurück', zh: '往返（车票）', en: 'round trip', ex: 'Eine Fahrkarte hin und zurück, bitte.', exZh: '一张往返票，谢谢。' },
          ]
        },
        {
          type: 'dialogue', title: '在售票窗口买票', scene: 'Wei 想坐火车去德累斯顿看表姐 Lin，在 DB 的 Reisezentrum 窗口向工作人员买票、问站台和预订座位的事。',
          lines: [
            { sp: 'Wei', de: 'Guten Tag, ich möchte eine Fahrkarte nach Dresden kaufen.', zh: '您好，我想买一张去德累斯顿的车票。' },
            { sp: 'Verkäufer', de: 'Gern. Einfach oder hin und zurück?', zh: '好的。单程还是往返？' },
            { sp: 'Wei', de: 'Hin und zurück, bitte. Ich fahre zu meiner Kusine.', zh: '往返，谢谢。我是去找我表姐。' },
            { sp: 'Verkäufer', de: 'Alles klar. Fahren Sie lieber mit dem ICE oder mit einem Regionalzug?', zh: '好的。您想坐 ICE 还是普通的地区列车？' },
            { sp: 'Wei', de: 'Mit dem ICE, das geht schneller. Brauche ich eine Reservierung?', zh: '坐 ICE 吧，比较快。我需要预订座位吗？' },
            { sp: 'Verkäufer', de: 'Nicht unbedingt, aber am Wochenende ist der Zug oft voll.', zh: '不是必须的，不过周末这趟车经常很满。' },
            { sp: 'Wei', de: 'Dann nehme ich lieber eine Reservierung. Von welchem Gleis fährt der Zug ab?', zh: '那我还是订个座位吧。这趟车从几号站台发车？' },
            { sp: 'Verkäufer', de: 'Die Abfahrt ist von Gleis 12, die Ankunft in Dresden ist um 11:40 Uhr.', zh: '从12号站台发车，到德累斯顿的时间是11点40分。' },
            { sp: 'Wei', de: 'Perfekt. Und seit wann gibt es diese direkte Verbindung?', zh: '太好了。这趟直达车是从什么时候开始有的？' },
            { sp: 'Verkäufer', de: 'Schon seit ein paar Jahren, sie ist sehr beliebt.', zh: '已经好几年了，这趟车很受欢迎。' },
            { sp: 'Wei', de: 'Gut zu wissen. Was kostet die Fahrkarte mit meiner BahnCard?', zh: '知道了。用我的 BahnCard 买票要多少钱？' },
            { sp: 'Verkäufer', de: 'Mit der BahnCard 25 zahlen Sie 25 Prozent weniger. Das macht dann 38 Euro.', zh: '用 BahnCard 25 您能便宜25%。这样算下来是38欧元。' },
          ]
        },
        {
          type: 'grammar', title: 'Dativ 介词全套：永远接第三格', sub: '不用判断 wo 还是 wohin，这七个词固定接 Dativ',
          html: `<p>德语有一批介词永远只接第三格（Dativ），不用像 u16 学的两格介词那样判断 wo 还是 wohin——记住这七个词，格就固定了：<b class="de">aus、bei、mit、nach、seit、von、zu</b>。买票、说明来去哪里的场景会大量用到它们：</p>
<table><tr><th>介词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">aus</td><td>来自，从……出来</td><td class="hl">Ich komme aus China.</td></tr>
<tr><td class="hl">bei</td><td>在……那里，在（公司/人）那儿</td><td class="hl">Ich arbeite bei einem Institut.</td></tr>
<tr><td class="hl">mit</td><td>和……一起；乘坐（交通工具）</td><td class="hl">Ich fahre mit dem ICE.</td></tr>
<tr><td class="hl">nach</td><td>去（城市/国家，无冠词）；……之后</td><td class="hl">Der Zug fährt nach Dresden.</td></tr>
<tr><td class="hl">seit</td><td>自……以来（时间起点）</td><td class="hl">Ich wohne seit einem Jahr hier.</td></tr>
<tr><td class="hl">von</td><td>从……（出发点）；属于</td><td class="hl">Der Zug kommt von Berlin.</td></tr>
<tr><td class="hl">zu</td><td>去，朝向（人或建筑物）</td><td class="hl">Ich fahre zu meiner Kusine.</td></tr></table>
<p><b class="t">记忆口诀：</b><mark>Aus, bei, mit, nach, seit, von, zu – Dativ, das schwöre ich dir zu!</mark>（这些词后面——我向你保证——永远接第三格！）最后一个词 zu 正好也押韵在句尾，一举两得。</p>
<p><b class="t">nach 还是 zu？</b>两个词都能表示"去某地"，但分工不同：<b>nach</b> 后面接没有冠词的地名（城市、国家）——<mark>nach Dresden</mark>；<b>zu</b> 后面接人或者有冠词的建筑物/机构——<mark>zu meiner Kusine</mark>、<mark>zum Bahnhof</mark>（u16 学过的缩合 zu+dem=zum、zu+der=zur，在这批介词里用得最多）。</p>`
        },
        {
          type: 'grammar', title: 'seit：从过去一直到现在', sub: '时间介词深化，呼应 u7 的 um/am/im',
          html: `<p>u7 学过时间介词 <mark>um/am/im</mark>，这一课再学一个：<b class="de">seit</b>，表示"从过去某个时间点一直持续到现在"，中文常翻译成"自……以来"：</p>
<table><tr><th>例句</th><th>意思</th></tr>
<tr><td class="hl">Ich wohne seit einem Jahr in Leipzig.</td><td>我在莱比锡住了一年了（现在还住着）。</td></tr>
<tr><td class="hl">Seit wann fährst du mit der Bahn?</td><td>你从什么时候开始坐火车的？</td></tr></table>
<p><b class="t">小心拼写：</b><mark>seit</mark>（自……以来，介词）和 <mark>seid</mark>（ihr 的 sein 变位，"你们是"）发音一样，写的时候容易搞混，靠上下文区分。</p>
<p>和 seit 常常成对出现的还有 <b class="de">bis</b>（到……为止，表示终点）：<mark>Der Anschlusszug fährt bis Dresden.</mark>（这趟接续的车开到德累斯顿为止。）bis 单独接地名/时间点用法比较灵活，这里先学会识别，跟人/建筑物连用时常常搭配 zu：<mark>bis zum Bahnhof</mark>。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">在德国买火车票：</b>DB App（或 bahn.de 官网）是最常用的购票方式，也可以在车站的自动售票机或 Reisezentrum 人工窗口买。买票时常被问 <mark>Einfach oder hin und zurück?</mark>（单程还是往返）。如果经常坐火车，办一张 BahnCard 能长期打折（BahnCard 25 打75折、BahnCard 50 打5折），但要不要办、具体价格以 bahn.de 官网当前信息为准。短途 Regionalzug 通常不需要 Reservierung，但长途 ICE 高峰期建议提前订座，免得站着几个小时。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"去德累斯顿"用哪个介词最合适？', options: ['nach Dresden', 'zu Dresden', 'bei Dresden'], answer: 0, why: 'nach + 无冠词城市名，表示"去某地"。' },
        { type: 'mcq', q: '"Ich fahre ___ dem ICE nach Berlin." 应该填哪个介词？', options: ['mit', 'bei', 'aus'], answer: 0, why: 'mit + Dativ 表示"乘坐交通工具"。' },
        { type: 'cloze', zhHint: '我在莱比锡住了一年了。', before: 'Ich wohne', after: 'einem Jahr in Leipzig.', options: ['seit', 'seid', 'vor'], answer: 0, why: 'seit + Dativ 表示"自……以来"，注意别和 ihr 的动词形式 seid 搞混。' },
        { type: 'order', zh: '这趟车从5号站台发车。', words: ['Der', 'Zug', 'fährt', 'von', 'Gleis', '5', 'ab'], why: 'abfahren 可分动词，前缀 ab 踢到句尾；von Gleis 5 表示从哪个站台出发。' },
        { type: 'match', pairs: [['die Abfahrt', '出发，发车'], ['die Ankunft', '到达'], ['der Anschluss', '换乘车次'], ['die Reservierung', '（座位）预订']] },
        { type: 'listen', audio: 'Der Zug fährt von Gleis 5 ab und kommt um 11:40 Uhr in Dresden an.', q: '这句话是什么意思？', options: ['这趟车从5号站台发车，11点40到德累斯顿。', '这趟车5点发车，11点到柏林。', '这趟车取消了。'], answer: 0, why: 'abfahren=发车，ankommen=到达，von Gleis 5=从5号站台。' },
        { type: 'listen', audio: 'Einfach oder hin und zurück?', q: '这句话是什么意思？', options: ['单程还是往返？', '现在还是以后？', '贵还是便宜？'], answer: 0, why: 'einfach=单程，hin und zurück=往返，买票时的固定问法。' },
        { type: 'speak', de: 'Ich fahre mit dem ICE zu meiner Kusine nach Dresden.', zh: '我坐城际特快去德累斯顿找我表姐。' },
      ],
      task: { title: '今天的生活任务', desc: '打开 DB App 或 bahn.de 官网，查一趟你感兴趣的真实路线（比如莱比锡到你想去的城市），记下 Abfahrt、Ankunft、Gleis，并用一句德语说一遍，比如 "Der Zug fährt um ... von Gleis ... ab."。' }
    },
    {
      id: 'u19l2', title: '延误与改签', de: 'Der Zug hat Verspätung',
      intro: '火车晚点、错过换乘，是德国铁路生活迟早会遇到的事。这一课学会向工作人员说明情况、办理免费改签，语法上再学一批"永远"介词——这次是接第四格的 durch/für/gegen/ohne/um，加上第一次完整摆出的人称代词 Dativ/Akkusativ 全表。',
      sections: [
        {
          type: 'vocab', title: '延误与问题', sub: '',
          items: [
            { de: 'Verspätung', art: 'die', pl: 'Verspätungen', zh: '晚点，延误', en: 'delay', note: '复现 u5：der Zug hat Verspätung = 火车晚点了', ex: 'Der Zug hat Verspätung.', exZh: '火车晚点了。' },
            { de: 'ausfallen', zh: '（班次）取消', en: 'to be cancelled', ex: 'Der Zug fällt aus.', exZh: '这趟车取消了。', note: '复现 u5 的 "fällt aus"，可分动词' },
            { de: 'umsteigen', zh: '换乘', en: 'to change/transfer', note: '复现 u5', ex: 'Ich muss in Berlin umsteigen.', exZh: '我得在柏林换乘。' },
            { de: 'verpassen', zh: '错过', en: 'to miss', ex: 'Ich habe meinen Anschluss verpasst.', exZh: '我错过了换乘车次。' },
            { de: 'Störung', art: 'die', pl: 'Störungen', zh: '故障，问题', en: 'malfunction/disruption', ex: 'Es gibt eine technische Störung.', exZh: '出现了技术故障。' },
            { de: 'rechtzeitig', zh: '及时的，来得及的', en: 'in time', note: '和 u7 的 pünktlich 不同：pünktlich 强调"准时"，rechtzeitig 强调"来得及赶上"', ex: 'Wir sind rechtzeitig da.', exZh: '我们及时到了。' },
          ]
        },
        {
          type: 'vocab', title: '改签与求助', sub: '',
          items: [
            { de: 'umbuchen', zh: '改签', en: 'to rebook', ex: 'Kann ich meine Fahrkarte umbuchen?', exZh: '我能改签我的车票吗？' },
            { de: 'Auskunft', art: 'die', pl: 'Auskünfte', zh: '问讯，咨询处', en: 'information (desk)', ex: 'Ich frage mal bei der Auskunft.', exZh: '我去问讯处问问。' },
            { de: 'kostenlos', zh: '免费的', en: 'free of charge', ex: 'Die Umbuchung ist kostenlos.', exZh: '改签是免费的。' },
            { de: 'gültig', zh: '有效的', en: 'valid', note: '复现 u14：der Ausweis ist gültig', ex: 'Die Fahrkarte ist gültig.', exZh: '这张车票是有效的。' },
            { de: 'Verbindung', art: 'die', pl: 'Verbindungen', zh: '（交通）车次，连接', en: 'connection (transport)', note: '和 der Anschluss 意思相近，Verbindung 泛指某条路线的车次组合', ex: 'Es gibt eine direkte Verbindung.', exZh: '有一趟直达车次。' },
          ]
        },
        {
          type: 'dialogue', title: '错过换乘怎么办', scene: 'Wei 的火车晚点，错过了去德累斯顿的换乘车次，他到服务台向工作人员说明情况，办理免费改签。',
          lines: [
            { sp: 'Wei', de: 'Entschuldigung, mein Zug hatte Verspätung, und ich habe meinen Anschluss verpasst.', zh: '打扰了，我的火车晚点了，我错过了换乘的车次。' },
            { sp: 'Mitarbeiterin', de: 'Das tut mir leid. Zeigen Sie mir bitte Ihre Fahrkarte – wohin möchten Sie denn?', zh: '真抱歉。请给我看一下您的车票——您想去哪里？' },
            { sp: 'Wei', de: 'Ich muss nach Dresden, zu meiner Kusine. Gibt es einen späteren Zug ohne Umsteigen?', zh: '我得去德累斯顿，找我表姐。有没有不用换乘的晚一点的车？' },
            { sp: 'Mitarbeiterin', de: 'Ja, gegen 16 Uhr fährt ein ICE. Mit dem kommen Sie direkt durch bis Dresden.', zh: '有的，大约16点有一趟ICE。坐这趟车您可以直达德累斯顿，中途不停。' },
            { sp: 'Wei', de: 'Kann ich für diesen Zug umbuchen? Kostet das extra?', zh: '我能给这趟车改签吗？这个要额外付费吗？' },
            { sp: 'Mitarbeiterin', de: 'Nein, bei einer Störung ist die Umbuchung für Sie kostenlos.', zh: '不用，遇到故障的话，给您改签是免费的。' },
            { sp: 'Wei', de: 'Super, danke! Gilt die alte Reservierung auch für den neuen Zug?', zh: '太好了，谢谢！之前的预订对这趟新车次也有效吗？' },
            { sp: 'Mitarbeiterin', de: 'Ja, die Reservierung bleibt gültig. Sie müssen nichts mehr bezahlen.', zh: '有效的，预订仍然有效。您不用再付钱了。' },
            { sp: 'Wei', de: 'Von welchem Gleis fährt der Zug ab?', zh: '这趟车是从几号站台发车的？' },
            { sp: 'Mitarbeiterin', de: 'Von Gleis 7 – der Aufzug ist gleich um die Ecke, gehen Sie nicht durch die Unterführung.', zh: '从7号站台——电梯就在拐角处，别走地下通道。' },
            { sp: 'Wei', de: 'Alles klar, das mache ich. Vielen Dank für Ihre Hilfe!', zh: '明白了，我这么做。非常感谢您的帮助！' },
            { sp: 'Mitarbeiterin', de: 'Gern geschehen. Gute Reise nach Dresden!', zh: '不客气。祝您去德累斯顿一路顺利！' },
          ]
        },
        {
          type: 'grammar', title: 'Akkusativ 介词全套：永远接第四格', sub: 'u3 学过 ein→einen，现在是固定搭配版',
          html: `<p>u3 学过 Akkusativ 只在阳性冠词上变化（ein→einen），现在再学一批固定接第四格（Akkusativ）的介词——不管东西在哪儿，永远用第四格：<b class="de">durch、für、gegen、ohne、um</b>：</p>
<table><tr><th>介词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">durch</td><td>穿过，通过</td><td class="hl">Der Zug fährt durch den Tunnel.</td></tr>
<tr><td class="hl">für</td><td>为了，给</td><td class="hl">Eine Fahrkarte für zwei Personen, bitte.</td></tr>
<tr><td class="hl">gegen</td><td>反对；大约（时间）</td><td class="hl">Der Zug kommt gegen 16 Uhr an.</td></tr>
<tr><td class="hl">ohne</td><td>没有</td><td class="hl">Ich fahre lieber ohne Umsteigen.</td></tr>
<tr><td class="hl">um</td><td>围绕，在……周围（也表示时钟点，u7 学过）</td><td class="hl">Der Aufzug ist gleich um die Ecke.</td></tr></table>
<p><b class="t">记忆技巧：</b>把这五个词的首字母拼起来——<b>f</b>ür、<b>u</b>m、<b>d</b>urch、<b>g</b>egen、<b>o</b>hne——就是 <mark>FUDGO</mark>，一个好记的小怪词，念起来像英语 fudge（软糖）加个 o。看到这五个词，反射性地用 den/die/das（Akkusativ）就对了。</p>
<p>现在三类介词都学全了，做个总览方便区分：</p>
<table><tr><th>类型</th><th>规则</th><th>介词</th></tr>
<tr><td class="hl">永远 Akkusativ</td><td>不用判断，固定第四格</td><td class="hl">durch, für, gegen, ohne, um</td></tr>
<tr><td class="hl">永远 Dativ</td><td>不用判断，固定第三格</td><td class="hl">aus, bei, mit, nach, seit, von, zu</td></tr>
<tr><td class="hl">两格介词（Wechsel）</td><td>wo? 用 Dativ / wohin? 用 Akkusativ（u16）</td><td class="hl">an, auf, hinter, in, neben, über, unter, vor, zwischen</td></tr></table>
<p>三选一判断法：先问"这个介词是不是在前两组固定列表里？"是的话直接套格，不用想 wo/wohin；只有第三组的九个两格介词，才需要回到 u16 学的"位置还是方向"逻辑。</p>`
        },
        {
          type: 'grammar', title: '人称代词全表：Nominativ / Dativ / Akkusativ', sub: 'u10 的 mir/dir、u17 的部分用法，这里第一次完整摆出',
          html: `<p>u10 学过 Dativ 人称代词 mir/dir/Ihnen，u17 也用过 Akkusativ 的一部分——现在把三套人称代词第一次完整摆在一张表里：</p>
<table><tr><th>Nominativ</th><th>Dativ</th><th>Akkusativ</th></tr>
<tr><td class="hl">ich</td><td class="hl">mir</td><td class="hl">mich</td></tr>
<tr><td class="hl">du</td><td class="hl">dir</td><td class="hl">dich</td></tr>
<tr><td class="hl">er</td><td class="hl">ihm</td><td class="hl">ihn</td></tr>
<tr><td class="hl">sie（她）</td><td class="hl">ihr</td><td class="hl">sie</td></tr>
<tr><td class="hl">es</td><td class="hl">ihm</td><td class="hl">es</td></tr>
<tr><td class="hl">wir</td><td class="hl">uns</td><td class="hl">uns</td></tr>
<tr><td class="hl">ihr</td><td class="hl">euch</td><td class="hl">euch</td></tr>
<tr><td class="hl">sie（他们）</td><td class="hl">ihnen</td><td class="hl">sie</td></tr>
<tr><td class="hl">Sie（您）</td><td class="hl">Ihnen</td><td class="hl">Sie</td></tr></table>
<p><b class="t">最小对比：</b>同一个人称，Dativ 和 Akkusativ 常常长得不一样，靠动词决定用哪个：</p>
<table><tr><th>Akkusativ 例句</th><th>Dativ 例句</th></tr>
<tr><td class="hl">Er sieht mich.（他看见我）</td><td class="hl">Er hilft mir.（他帮我）</td></tr>
<tr><td class="hl">Ich rufe dich an.（我给你打电话）</td><td class="hl">Ich gebe dir das Buch.（我把书给你）</td></tr></table>
<p>固定接 Dativ 的介词后面配 Dativ 代词（<mark>mit mir</mark>、<mark>bei dir</mark>、<mark>zu ihm</mark>），固定接 Akkusativ 的介词后面配 Akkusativ 代词（<mark>für dich</mark>、<mark>ohne mich</mark>、<mark>um ihn</mark>）——这批"永远"介词记熟了，代词往后一套就对。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">德铁改签小知识：</b>如果晚点或错过换乘是德铁自身的责任（比如技术故障 die Störung），通常可以在 Reisezentrum 服务台或用 DB App 免费改签到下一班同方向的车，不需要额外证明。具体规则和赔偿细则（Fahrgastrechte）以官网当前政策为准——这部分内容会在后面的单元详细展开。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Eine Fahrkarte ___ zwei Personen, bitte." 应该填哪个？', options: ['für', 'durch', 'gegen'], answer: 0, why: 'für + Akkusativ 表示"为了/给"，für zwei Personen = 给两位。' },
        { type: 'mcq', q: '"Ich fahre lieber ___ Umsteigen." 应该填哪个？', options: ['ohne', 'ohne der', 'ohne dem'], answer: 0, why: '固定短语 ohne Umsteigen（不用换乘）常常省略冠词直接用。' },
        { type: 'cloze', zhHint: '他帮我。（用人称代词）', before: 'Er hilft', after: '.', options: ['mir', 'mich', 'ich'], answer: 0, why: 'helfen 是接 Dativ 的动词，"我"用 mir。' },
        { type: 'order', zh: '这趟车大约16点到达。', words: ['Der', 'Zug', 'kommt', 'gegen', '16', 'Uhr', 'an'], why: 'gegen + Akkusativ 表示"大约"，ankommen 可分动词，前缀 an 踢到句尾。' },
        { type: 'match', pairs: [['durch', '穿过'], ['für', '为了'], ['ohne', '没有'], ['um', '围绕/大约']] },
        { type: 'listen', audio: 'Bei einer Störung ist die Umbuchung kostenlos.', q: '这句话是什么意思？', options: ['如果出现故障，改签是免费的。', '出现故障时车会取消。', '改签总是要收费的。'], answer: 0, why: 'bei + Dativ 这里表示"遇到……情况时"，kostenlos=免费的。' },
        { type: 'listen', audio: 'Von welchem Gleis fährt der Zug ab?', q: '这句话是什么意思？', options: ['这趟车从几号站台发车？', '这趟车什么时候到？', '这张票多少钱？'], answer: 0, why: 'von welchem Gleis = 从哪个站台，abfahren 可分动词。' },
        { type: 'speak', de: 'Kann ich für diesen Zug umbuchen? Kostet das extra?', zh: '我能给这趟车改签吗？这个要额外付费吗？' },
      ],
      task: { title: '今天的生活任务', desc: '如果你的火车真的晚点过，用今天学的句型（umbuchen、ohne Umsteigen、Anschluss）描述一次真实或假设的改签经历；没有真实经历的话，虚构一次，写3-4句话，用上至少一个 Dativ 介词和一个 Akkusativ 介词。' }
    },
  ]
};
