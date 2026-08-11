// 第 29 单元：旅行与突发状况
export default {
  id: 'u29', num: '29', color: 'yellow', shape: 'circle',
  de: "Unterwegs, wenn's schiefgeht", zh: '旅行与突发状况',
  desc: '德铁又双叒晚点了。这个单元教你在旅行出岔子时怎么办：三类连接词的语序零容错对比（obwohl/deshalb/trotzdem），还有德语最后一个格——Genitiv 入门，够写一封正式投诉信。',
  kann: [
    { de: 'Ich kann obwohl, deshalb und trotzdem korrekt und ohne Doppelung verwenden.', zh: '我能正确使用 obwohl、deshalb、trotzdem，且不重复叠用。' },
    { de: 'Ich kann mit wegen/während/trotz + Genitiv einen Grund oder Umstand nennen.', zh: '我能用 wegen/während/trotz + 第二格说明原因或情况。' },
    { de: 'Ich kann einen formellen Beschwerdebrief zu einem Vorfall (z. B. Zugverspätung) schreiben.', zh: '我能就一次事件（如火车晚点）写一封正式投诉信。' },
  ],
  lessons: [
    {
      id: 'u29l1', title: '火车又晚点了', de: 'Der Zug hat schon wieder Verspätung',
      intro: 'Wei 和 Jonas 在月台上等一趟又晚点的火车。这一课学延误索赔相关词汇，还有德语里最容易混淆的三类连接词：obwohl（从属连词，动词垫底）、deshalb/trotzdem（连接副词，占第一位就触发倒装）——语序零容错，一定要分清楚。',
      sections: [
        {
          type: 'vocab', title: '延误与行李', sub: '',
          items: [
            { de: 'Verspätung', art: 'die', pl: 'Verspätungen', zh: '延误，晚点', en: 'delay', ex: 'Der Zug hat zwanzig Minuten Verspätung.', exZh: '火车晚点了二十分钟。', note: '复现词，u19 学过' },
            { de: 'Fahrgast', art: 'der', pl: 'Fahrgäste', zh: '乘客', en: 'passenger', ex: 'Alle Fahrgäste müssen umsteigen.', exZh: '所有乘客都得换乘。' },
            { de: 'Gepäck', art: 'das', zh: '行李', en: 'luggage', ex: 'Mein Gepäck ist noch nicht angekommen.', exZh: '我的行李还没到。', note: '不可数名词，不用复数' },
            { de: 'verloren gehen', zh: '丢失，遗失', en: 'to get lost, go missing', ex: 'Mein Koffer ist leider verloren gegangen.', exZh: '我的箱子很不幸丢了。', note: 'Perfekt: ist verloren gegangen（用 sein）' },
            { de: 'Fundsachen', art: 'die', zh: '失物招领（处）', en: 'lost and found', ex: 'Ich muss zu den Fundsachen gehen.', exZh: '我得去失物招领处一趟。', note: '通常只用复数形式' },
            { de: 'Ausfall', art: 'der', pl: 'Ausfälle', zh: '（班次）取消，故障', en: 'cancellation, breakdown', ex: 'Der Ausfall des Zuges hat viele Reisende überrascht.', exZh: '这趟车的取消让很多旅客措手不及。' },
          ]
        },
        {
          type: 'vocab', title: '原因与连接词', sub: '',
          items: [
            { de: 'Grund', art: 'der', pl: 'Gründe', zh: '原因', en: 'reason', ex: 'Was ist der Grund für die Verspätung?', exZh: '延误的原因是什么？' },
            { de: 'rechtzeitig', zh: '及时的，按时的', en: 'on time, in time', ex: 'Ich bin rechtzeitig am Bahnsteig angekommen.', exZh: '我及时到了站台。' },
            { de: 'deshalb', zh: '所以，因此', en: 'therefore', ex: 'Der Zug hatte Verspätung, deshalb habe ich den Anschluss verpasst.', exZh: '火车晚点了，所以我错过了转乘。', note: '连接副词，占第一位时触发倒装——语法点见下方 grammar 区块' },
            { de: 'trotzdem', zh: '尽管如此', en: 'nevertheless', ex: 'Der Zug hatte Verspätung, trotzdem habe ich den Anschluss geschafft.', exZh: '火车晚点了，尽管如此我还是赶上了转乘。', note: '连接副词，占第一位时触发倒装——语法点见下方 grammar 区块' },
            { de: 'obwohl', zh: '虽然，尽管', en: 'although', ex: 'Obwohl der Zug Verspätung hatte, blieb ich ruhig.', exZh: '虽然火车晚点了，我还是保持冷静。', note: '从属连词，引导从句，动词垫底——语法点见下方 grammar 区块' },
          ]
        },
        {
          type: 'dialogue', title: '火车又晚点了', scene: 'Wei 和 Jonas 在月台上等一趟又晚点的火车——正好借这个机会把 obwohl/trotzdem/deshalb 分清楚。',
          lines: [
            { sp: 'Wei', de: 'Schon wieder zwanzig Minuten Verspätung! Ich glaube, ich verpasse meinen Anschluss.', zh: '又晚点了二十分钟！我看要错过转乘了。' },
            { sp: 'Jonas', de: 'Echt ärgerlich. Was ist denn diesmal der Grund?', zh: '真烦人。这次是什么原因？' },
            { sp: 'Wei', de: 'Laut Durchsage gibt es eine Signalstörung. Deshalb müssen alle Züge auf dieser Strecke warten.', zh: '广播说是信号故障。所以这条线路上所有火车都得等着。' },
            { sp: 'Jonas', de: 'Obwohl die Bahn das ständig ankündigt, klappt es irgendwie nie richtig.', zh: '虽然德铁老是发这种通知，但好像从来都解决不好。' },
            { sp: 'Wei', de: 'Stimmt. Trotzdem bleibe ich optimistisch – vielleicht schaffe ich den Anschluss noch.', zh: '是啊。尽管如此我还是保持乐观——说不定还能赶上转乘。' },
            { sp: 'Jonas', de: 'Ich würde lieber gleich beim Kundenservice fragen, ob es eine spätere Verbindung gibt.', zh: '我更想直接去客服问问，看有没有晚一点的车次。' },
            { sp: 'Wei', de: 'Gute Idee. Mein Gepäck ist übrigens auch noch nicht da, das macht mich nervös.', zh: '好主意。对了，我的行李居然也还没到，这让我有点紧张。' },
            { sp: 'Jonas', de: 'Obwohl das Gepäck getrennt reist, sollte es eigentlich am Zielbahnhof ankommen.', zh: '虽然行李是分开托运的，但按理说应该会到目的地车站。' },
            { sp: 'Wei', de: 'Hoffentlich. Falls es verloren geht, muss ich zu den Fundsachen gehen.', zh: '希望如此。万一丢了，我就得去失物招领处。' },
            { sp: 'Jonas', de: 'Mach dir nicht zu viele Sorgen, du hast ja rechtzeitig eingecheckt.', zh: '别太担心，你不是已经及时办了值机手续吗。' },
            { sp: 'Wei', de: 'Rechtzeitig ja, aber trotzdem fällt der Zug vielleicht aus, laut der neuen Durchsage.', zh: '是及时办了没错，但据最新广播说，这趟车可能还是会取消。' },
            { sp: 'Jonas', de: 'Dann müssen wir wohl auf den nächsten Zug umsteigen, deshalb sollten wir uns beeilen.', zh: '那我们大概得改坐下一趟车了，所以我们得抓紧时间。' },
          ]
        },
        {
          type: 'grammar', title: 'Konnektoren 总表：从属连词 vs 并列连词 vs 连接副词', sub: '先看总表，再看例句怎么用',
          html: `<p>德语里"因为/所以/虽然/尽管如此"这些逻辑关系词，语序表现分三类，混着用是最容易出错的地方：</p>
<table><tr><th>类型</th><th>成员</th><th>语序规则</th></tr>
<tr><td>①并列连词</td><td class="hl">und, aber, oder</td><td>不占位置（"第 0 位"），后面还是正常 V2</td></tr>
<tr><td>②从属连词</td><td class="hl">weil, dass, wenn, <mark>obwohl</mark>（新）</td><td>引导从句，动词垫底（V-letzt）</td></tr>
<tr><td>③连接副词</td><td class="hl"><mark>deshalb, trotzdem</mark>（新）</td><td>占第一位时触发倒装（动词紧跟、主语后置）</td></tr></table>
<p>四组对比例句，感受三类的差别：</p>
<p class="de">1) Der Zug hat Verspätung, <mark>aber</mark> ich bleibe ruhig.（并列，不影响语序，两个独立分句各自 V2）</p>
<p class="de">2) Ich bleibe ruhig, <mark>obwohl</mark> der Zug Verspätung hat.（从属，从句动词 hat 垫底）</p>
<p class="de">3) <mark>Obwohl</mark> der Zug Verspätung hat, bleibe ich ruhig.（从句提前，主句 bleibe-ich 倒装）</p>
<p class="de">4) Der Zug hat Verspätung. <mark>Trotzdem</mark> bleibe ich ruhig.（连接副词占第一位，bleibe-ich 倒装）</p>`
        },
        {
          type: 'grammar', title: '常见陷阱：别把 obwohl 和 trotzdem 叠在一起用', sub: 'obwohl 已经表达了"尽管"，主句不需要再加 trotzdem',
          html: `<p><b class="t">高频错误：</b></p>
<table><tr><th>❌ 错误（重复表达"尽管"）</th><th>✅ 正确</th></tr>
<tr><td>Obwohl es regnete, trotzdem ging er raus.</td><td class="hl">Obwohl es regnete, ging er raus.</td></tr>
<tr><td></td><td class="hl">Es regnete. Trotzdem ging er raus.</td></tr></table>
<p><mark>obwohl</mark> 已经把"尽管"的意思放进从句了，主句不需要再加 trotzdem 强调一遍——要么用 obwohl 从句 + 普通主句，要么拆成两个独立句子，第二句用 trotzdem 起头。</p>
<p><b class="t">deshalb vs trotzdem：管好各自的逻辑关系</b>——<mark>deshalb</mark> 表示"因此/所以"（顺着因果推），<mark>trotzdem</mark> 表示"尽管如此"（打破预期的转折）：</p>
<p class="de">Der Zug hatte Verspätung, <mark>deshalb</mark> habe ich den Anschluss verpasst.（因为延误，所以错过了转乘——顺着因果。）</p>
<p class="de">Der Zug hatte Verspätung, <mark>trotzdem</mark> habe ich den Anschluss geschafft.（尽管延误，我还是赶上了转乘——打破预期。）</p>
<p>两句唯一的差别只在 deshalb/trotzdem，句子结构完全一样——变位动词 <mark>habe</mark> 都紧跟在逗号后的连接副词后面，因为它们都占了主句的第一位。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">实用小知识：</b>德铁（Deutsche Bahn）的 Fahrgastrechte-Formular 可以在火车站或 bahn.de 上填写，延误超过 60 分钟通常可以申请部分票款的 Entschädigung（赔偿）；行李寻找可以先去 Fundsachen（失物招领）或联系 DB 服务热线。下一课会学怎么把这些情况写成一封正式的投诉信。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '下面哪一组词是"连接副词"，占据第一位时会触发倒装？', options: ['deshalb, trotzdem', 'weil, dass', 'und, aber'], answer: 0, why: 'deshalb/trotzdem 是连接副词，占第一位时变位动词紧跟其后、主语后置；weil/dass 是从属连词（V-letzt）；und/aber 是并列连词（不占位）。' },
        { type: 'mcq', q: 'obwohl 引导的从句，动词应该放在哪里？', options: ['从句最后（V-letzt）', '从句第二位', '从句最前面'], answer: 0, why: 'obwohl 是从属连词，和 weil/dass/wenn 一样，从句动词垫底。' },
        { type: 'cloze', zhHint: '有信号故障，所以所有火车都得等着。（deshalb 占第一位，触发倒装）', before: 'Es gibt eine Signalstörung,', after: 'müssen alle Züge warten.', options: ['deshalb', 'trotzdem', 'obwohl'], answer: 0, why: '前后是因果关系（有故障→所以要等），用 deshalb；deshalb 占逗号后第一位，变位动词 müssen 紧跟其后。' },
        { type: 'cloze', zhHint: '虽然火车晚点了，我还是准时到了。（从属连词引导从句）', before: '', after: 'der Zug Verspätung hatte, kam ich pünktlich an.', options: ['Obwohl', 'Trotzdem', 'Deshalb'], answer: 0, why: '这里需要一个能引导从句、把动词 hatte 放到从句最后的词，只有从属连词 obwohl 能这样用；trotzdem/deshalb 是连接副词，不能引导从句。注意主句里不必再加 trotzdem——obwohl 已经表达了"尽管"。' },
        { type: 'order', zh: '尽管如此，我还是很乐观。', words: ['Trotzdem', 'bleibe', 'ich', 'optimistisch'], why: 'trotzdem 占第一位，变位动词 bleibe 紧跟其后，主语 ich 挪到动词后面（倒装）。' },
        { type: 'match', pairs: [['die Verspätung', '延误，晚点'], ['das Gepäck', '行李'], ['verloren gehen', '丢失，遗失'], ['der Ausfall', '（班次）取消，故障']] },
        { type: 'listen', audio: 'Laut Durchsage gibt es eine Signalstörung, deshalb müssen alle Züge auf dieser Strecke warten.', q: '这句话是什么意思？', options: ['广播说有信号故障，所以这条线路上所有火车都得等。', '广播说火车准点。', '广播说只有这一趟车延误。'], answer: 0, why: 'Signalstörung = 信号故障，deshalb...warten = 所以都得等。' },
        { type: 'speak', de: 'Der Zug hatte Verspätung, trotzdem habe ich den Anschluss geschafft.', zh: '火车晚点了，但我还是赶上了转乘。' },
      ],
      task: { title: '今天的生活任务', desc: '回想一次真实或想象的交通延误经历，用 obwohl 写一句"虽然……"，再用 deshalb 和 trotzdem 各写一句"所以……/尽管如此……"，一共 3 句话，注意主句动词的位置。' }
    },
    {
      id: 'u29l2', title: '在服务台了解索赔流程', de: 'Am Kundenschalter',
      intro: 'Wei 的火车因为一次技术故障大幅晚点，还错过了转乘。她到服务台了解怎么申请赔偿，之后打算写一封正式的投诉信。这一课学德语最后一个格——Genitiv（第二格）的入门：只学 wegen/während/trotz 这三个高频二格介词，够用来读懂和写投诉信就行。',
      sections: [
        {
          type: 'vocab', title: '投诉与赔偿', sub: '',
          items: [
            { de: 'Beschwerde', art: 'die', pl: 'Beschwerden', zh: '投诉', en: 'complaint', ex: 'Ich möchte eine Beschwerde einreichen.', exZh: '我想提交一份投诉。' },
            { de: 'sich beschweren', zh: '投诉，抱怨', en: 'to complain', ex: 'Ich beschwere mich über die Verspätung.', exZh: '我要为这次延误投诉。', note: '反身动词：sich beschweren über + Akkusativ' },
            { de: 'Entschädigung', art: 'die', pl: 'Entschädigungen', zh: '赔偿', en: 'compensation', ex: 'Bei über 60 Minuten Verspätung gibt es eine Entschädigung.', exZh: '延误超过 60 分钟就有赔偿。' },
            { de: 'Ersatz', art: 'der', zh: '替代物，赔偿物', en: 'replacement, compensation', ex: 'Die Bahn bietet Ersatz für den Schaden an.', exZh: '德铁为损失提供赔偿。', note: '通常不用复数' },
            { de: 'erstatten', zh: '赔付，报销', en: 'to reimburse', ex: 'Die Kosten werden Ihnen erstattet.', exZh: '费用会赔付给您。', note: '常用被动式：werden erstattet' },
          ]
        },
        {
          type: 'vocab', title: '原因状语与格', sub: '',
          items: [
            { de: 'Schaden', art: 'der', pl: 'Schäden', zh: '损失，损害', en: 'damage, loss', ex: 'Der Schaden am Koffer war zum Glück klein.', exZh: '幸好行李箱的损坏不大。' },
            { de: 'beantragen', zh: '申请', en: 'to apply for (formal)', ex: 'Sie können die Entschädigung online beantragen.', exZh: '您可以在线申请赔偿。', note: '复现词，u14 学过 der Antrag' },
            { de: 'Ursache', art: 'die', pl: 'Ursachen', zh: '起因，原因', en: 'cause', ex: 'Die Ursache der Verspätung war unklar.', exZh: '延误的原因不明。' },
            { de: 'wegen', zh: '因为，由于（+Genitiv）', en: 'because of', ex: 'Wegen einer technischen Störung kam der Zug später an.', exZh: '由于一次技术故障，火车晚到了。', note: '后接 Genitiv——语法点见下方 grammar 区块' },
          ]
        },
        {
          type: 'dialogue', title: '在服务台了解索赔流程', scene: 'Wei 的火车因为一次技术故障大幅晚点，还错过了转乘，她到服务台说明情况，了解怎么申请赔偿。',
          lines: [
            { sp: 'Wei', de: 'Entschuldigung, mein Zug hatte wegen einer technischen Störung eine Stunde Verspätung. Ich habe meinen Anschluss verpasst.', zh: '打扰一下，我的火车因为技术故障晚点了一个小时，我错过了转乘。' },
            { sp: 'Kundenbetreuer', de: 'Das tut mir leid. Bei so einer Verspätung können Sie auf jeden Fall eine Entschädigung beantragen.', zh: '很抱歉。这种程度的晚点，您完全可以申请赔偿。' },
            { sp: 'Wei', de: 'Gut zu wissen. Wie beschwere ich mich denn offiziell?', zh: '那太好了。我该怎么正式投诉呢？' },
            { sp: 'Kundenbetreuer', de: 'Am einfachsten online über das Fahrgastrechte-Formular, oder ich gebe Ihnen jetzt ein Formular mit.', zh: '最简单的是在网上填 Fahrgastrechte 表格，或者我现在给您一份表格。' },
            { sp: 'Wei', de: 'Gerne beides. Was muss ich denn genau angeben?', zh: '两个都要，谢谢。我具体需要填什么？' },
            { sp: 'Kundenbetreuer', de: 'Die Ursache der Verspätung, also die technische Störung, und natürlich den entstandenen Schaden – zum Beispiel die verpasste Verbindung.', zh: '延误的原因，也就是技术故障，当然还有产生的损失——比如错过的转乘。' },
            { sp: 'Wei', de: 'Verstanden. Während der Wartezeit habe ich übrigens auch ein Taxi genommen, weil ich einen wichtigen Termin hatte.', zh: '明白了。对了，等车的时候我还打了辆出租车，因为我有个重要的预约。' },
            { sp: 'Kundenbetreuer', de: 'Auch die Taxikosten können Sie wegen des verpassten Anschlusses geltend machen, wenn Sie die Quittung haben.', zh: '由于错过了转乘，出租车费用您也可以申请报销，前提是您有发票。' },
            { sp: 'Wei', de: 'Perfekt, die habe ich. Wird mir das Geld dann direkt erstattet?', zh: '太好了，我有发票。那这笔钱会直接退给我吗？' },
            { sp: 'Kundenbetreuer', de: 'In der Regel innerhalb von vier Wochen, ja.', zh: '一般四周之内会到账，是的。' },
            { sp: 'Wei', de: 'Vielen Dank für die Hilfe! Dann schreibe ich heute Abend noch die Beschwerde.', zh: '太感谢您的帮助了！那我今晚就把投诉信写好。' },
            { sp: 'Kundenbetreuer', de: 'Gerne, und denken Sie daran: Trotz des Ärgers lohnt sich die Mühe meistens.', zh: '不客气，另外提醒一下：尽管麻烦，但通常还是值得申请的。' },
          ]
        },
        {
          type: 'grammar', title: 'Genitiv 入门：第四个格，只学"介词+二格"这一种用法', sub: 'wegen/während/trotz 后面接的名词要变格',
          html: `<p>德语一共四个格：Nominativ、Akkusativ、Dativ 已经全部学过，<b class="de">Genitiv（第二格／属格）</b>是最后一个。B1 阶段先只学最实用的一种用法：<mark>wegen</mark>（因为）、<mark>während</mark>（在……期间）、<mark>trotz</mark>（尽管）这三个介词后面，名词要变成 Genitiv 形式。</p>
<table><tr><th>性/数</th><th>定冠词 Genitiv</th><th>名词变化</th><th>例子</th></tr>
<tr><td>阳性</td><td class="hl">des</td><td class="hl">名词 + -(e)s</td><td class="hl">wegen des Zuges / des Anschlusses</td></tr>
<tr><td>中性</td><td class="hl">des</td><td class="hl">名词 + -(e)s</td><td class="hl">wegen des Wetters</td></tr>
<tr><td>阴性</td><td class="hl">der</td><td class="hl">不变</td><td class="hl">wegen der Störung</td></tr>
<tr><td>复数</td><td class="hl">der</td><td class="hl">不变</td><td class="hl">wegen der Verspätungen</td></tr></table>
<p>规律很好记：<b>阳性和中性</b>要给名词加词尾——单音节或以 s/ß/z/x 结尾的词加 <mark>-es</mark>（Zug→Zuges，Anschluss→Anschlusses），其余大多数加 <mark>-s</mark> 就够（Wetter→Wetters）；<b>阴性和复数名词本身完全不变</b>，只有冠词从 die 变成 der。不定冠词同理：ein→ein<b>es</b>，eine→ein<b>er</b>。</p>
<p class="de">Wegen <mark>einer</mark> technischen Störung kam der Zug später an.（由于一次技术故障，火车晚到了。）</p>
<p>形容词跟在 Genitiv 名词前时，词尾统一是 <mark>-en</mark>（和 Dativ 一样）：<span class="de">wegen des verpassten Anschlusses</span>、<span class="de">einer technischen Störung</span>。</p>`
        },
        {
          type: 'grammar', title: '投诉信范文：wegen/trotz 在正式书面语里的样子', sub: '一封完整的 Beschwerdebrief',
          html: `<p class="de">Betreff: Entschädigung wegen Zugverspätung am 03.07.2026<br><br>Sehr geehrte Damen und Herren,<br>am 03.07.2026 hatte mein Zug von Leipzig nach Frankfurt <mark>wegen einer technischen Störung</mark> eine Verspätung von 65 Minuten. Dadurch habe ich meinen Anschlusszug verpasst und bin erst mit vier Stunden Verspätung an meinem Zielort angekommen. <mark>Während der langen Wartezeit</mark> am Bahnhof musste ich außerdem ein Taxi zu einem wichtigen Termin nehmen. <mark>Trotz des Ärgers</mark> über die Verspätung möchte ich sachlich bleiben und Sie bitten, mir die entstandenen Kosten zu erstatten. Im Anhang finden Sie die Fahrkarte sowie die Taxiquittung. Ich beantrage hiermit eine Entschädigung gemäß den Fahrgastrechten sowie die Erstattung der Taxikosten.<br><br>Für Rückfragen stehe ich gerne zur Verfügung.<br>Mit freundlichen Grüßen<br>Wei Zhang</p>
<p>投诉信结构：<b>Betreff（主题行）</b>点明事由 → <b>正文</b>客观陈述事实（时间、地点、发生了什么）→ 用 <mark>wegen/während/trotz</mark> 交代原因和背景 → 明确提出诉求（<mark>beantragen/erstatten</mark>）→ <b>Mit freundlichen Grüßen</b> 结尾（复现 u15 邮件格式）。语气要客观、不带情绪，"Trotz des Ärgers möchte ich sachlich bleiben" 这句本身就是投诉信的典型语气示范。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">你可能会听到 "wegen dem Zug" 而不是 "wegen des Zuges"：</b>口语德语里 wegen 后面接 Dativ 的用法越来越常见（wegen dem Regen），但这被认为不够正式。书面语和这一课学的投诉信/申请信里请坚持用 Genitiv（wegen des Regens）——während/trotz 也有同样的口语趋势，正式场合一律用 Genitiv 更保险。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'wegen/während/trotz 这三个介词后面，名词应该用哪个格？', options: ['Genitiv（第二格）', 'Dativ（第三格）', 'Akkusativ（第四格）'], answer: 0, why: 'wegen/während/trotz 是这一课学的三个二格介词，后接 Genitiv。' },
        { type: 'cloze', zhHint: '由于一次技术故障，火车晚到了。（wegen + Genitiv 阴性不定冠词）', before: 'Wegen', after: 'technischen Störung kam der Zug später an.', options: ['einer', 'eine', 'einen'], answer: 0, why: 'wegen 接 Genitiv，Störung 是阴性名词，不定冠词 Genitiv 阴性是 einer。' },
        { type: 'cloze', zhHint: '尽管有这些麻烦，我还是想保持客观。（trotz + Genitiv 阳性定冠词）', before: 'Trotz', after: 'Ärgers möchte ich sachlich bleiben.', options: ['des', 'der', 'dem'], answer: 0, why: 'trotz 接 Genitiv，Ärger 是阳性名词，定冠词 Genitiv 阳性是 des，名词加 -s。' },
        { type: 'mcq', q: '"wegen des Anschlusses" 里 Anschluss 为什么变成了 Anschlusses？', options: ['阳性名词的 Genitiv 要加词尾，以 -ss 结尾的词加 -es', '这是复数形式', 'Anschluss 本来就长这样，没有变化'], answer: 0, why: '阳性/中性名词 Genitiv 要加 -(e)s，以 s/ß/z/x 结尾的词为了方便发音加 -es：Anschluss → Anschlusses。' },
        { type: 'order', zh: '由于长时间的等待，我错过了我的预约。', words: ['Wegen', 'der', 'langen', 'Wartezeit', 'habe', 'ich', 'meinen', 'Termin', 'verpasst'], why: 'Wegen der langen Wartezeit（Genitiv 阴性）占第一位，变位动词 habe 紧跟其后（倒装），过去分词 verpasst 踢到句尾。' },
        { type: 'match', pairs: [['die Beschwerde', '投诉'], ['die Entschädigung', '赔偿'], ['der Schaden', '损失，损害'], ['beantragen', '申请']] },
        { type: 'listen', audio: 'Trotz des Ärgers über die Verspätung möchte ich sachlich bleiben und Sie bitten, mir die entstandenen Kosten zu erstatten.', q: '这句话是什么意思？', options: ['尽管为延误感到不满，我还是想保持客观，并请求赔偿产生的费用。', '我对这次延误完全不在意。', '我不需要任何赔偿。'], answer: 0, why: 'Trotz des Ärgers = 尽管有不满，möchte sachlich bleiben = 想保持客观，erstatten = 赔付。' },
        { type: 'speak', de: 'Wegen einer technischen Störung hatte mein Zug eine Stunde Verspätung.', zh: '由于一次技术故障，我的火车晚点了一个小时。' },
      ],
      task: { title: '今天的生活任务', desc: '如果有过真实的延误/行李经历，写一封投诉/说明邮件；没有的话虚构一次，按今天的 Beschwerdebrief 格式写 4-5 句话，要求用上至少一个 wegen/während/trotz + Genitiv，和至少一对 deshalb/trotzdem 或 obwohl。' }
    },
  ]
};
