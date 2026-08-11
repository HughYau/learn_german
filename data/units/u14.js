// 第 14 单元：Amt 办事全流程
export default {
  id: 'u14', num: '14', color: 'blue', shape: 'square',
  de: 'Beim Amt', zh: 'Amt 办事全流程',
  desc: '搬到新家第一件事就是去 Bürgeramt 办 Anmeldung——这个单元教你填表、签字、递交材料的全套词汇，还有怎么读懂一封满是官腔的官方信件。',
  kann: [
    { de: 'Ich kann beim Bürgeramt sagen, dass ich mich anmelden möchte, und die nötigen Unterlagen nennen.', zh: '我能在市民服务中心说明要办理登记，并说出需要的材料。' },
    { de: 'Ich kann Sie-Imperative und Modalverben in offiziellen Anweisungen verstehen.', zh: '我能听懂官方指示里用命令式和情态动词给出的要求。' },
    { de: 'Ich kann in einem offiziellen Brief die wichtigsten Informationen (Frist, fehlende Unterlagen) finden, ohne jedes Wort zu verstehen.', zh: '我能不逐字理解也能从官方信件里找出截止日期和缺失材料等关键信息。' },
  ],
  lessons: [
    {
      id: 'u14l1', title: '我想办登记', de: 'Ich möchte mich anmelden',
      intro: '在德国搬家后第一件必须办的事就是 Anmeldung——去 Bürgeramt 登记新住址。这一课学齐办事窗口最常用的词汇：表格、签字、申请、证件，还会复习 u9 情态动词和 u10 命令式在正式场合的高频用法。',
      sections: [
        {
          type: 'vocab', title: '在 Bürgeramt', sub: '',
          items: [
            { de: 'Anmeldung', art: 'die', pl: 'Anmeldungen', zh: '（住址）登记，报到', en: 'registration', ex: 'Ich brauche einen Termin für die Anmeldung.', exZh: '我需要一个登记的预约。' },
            { de: 'Bürgeramt', art: 'das', pl: 'Bürgerämter', zh: '市民服务中心（办登记、证件等事务）', en: "citizens' registration office", ex: 'Das Bürgeramt ist in der Nähe vom Hauptbahnhof.', exZh: '市民服务中心离火车总站很近。' },
            { de: 'Formular', art: 'das', pl: 'Formulare', zh: '表格', en: 'form', ex: 'Bitte füllen Sie das Formular aus.', exZh: '请填写这张表格。' },
            { de: 'ausfüllen', zh: '填写', en: 'to fill out', ex: 'Ich habe das Formular schon ausgefüllt.', exZh: '我已经填好表格了。', note: '可分动词，呼应 u13：现在时 füllen...aus，Perfekt 是 ausgefüllt' },
          ]
        },
        {
          type: 'vocab', title: '签字与申请', sub: '',
          items: [
            { de: 'Unterschrift', art: 'die', pl: 'Unterschriften', zh: '签名', en: 'signature', ex: 'Ihre Unterschrift fehlt hier noch.', exZh: '这里还缺您的签名。' },
            { de: 'unterschreiben', zh: '签署，签字', en: 'to sign', ex: 'Unterschreiben Sie bitte hier.', exZh: '请在这里签字。', note: 'unter- 在这里是不可分前缀（重音在 schreiben 上），和 u13 学的可分动词不一样：永远不拆开，Perfekt 也不额外加 ge-，是 unterschrieben' },
            { de: 'Antrag', art: 'der', pl: 'Anträge', zh: '申请，申请表', en: 'application', ex: 'Ich möchte einen Antrag stellen.', exZh: '我想提交一份申请。', note: '固定搭配：einen Antrag stellen = 提交申请' },
            { de: 'beantragen', zh: '申请（某事物）', en: 'to apply for', ex: 'Ich möchte eine Aufenthaltserlaubnis beantragen.', exZh: '我想申请一个居留许可。', note: 'be- 前缀，同样是不可分动词' },
          ]
        },
        {
          type: 'vocab', title: '证件与材料', sub: '',
          items: [
            { de: 'Bescheinigung', art: 'die', pl: 'Bescheinigungen', zh: '证明，证明文件', en: 'certificate/confirmation', ex: 'Sie bekommen die Bescheinigung per Post.', exZh: '您会收到邮寄的证明。' },
            { de: 'Ausweis', art: 'der', pl: 'Ausweise', zh: '证件，身份证', en: 'ID card', ex: 'Bringen Sie bitte Ihren Ausweis mit.', exZh: '请带上您的证件。' },
            { de: 'Frist', art: 'die', pl: 'Fristen', zh: '截止日期，期限', en: 'deadline', ex: 'Die Frist ist der 30. Juni.', exZh: '截止日期是6月30日。' },
            { de: 'gültig', zh: '有效的', en: 'valid', ex: 'Der Ausweis ist noch gültig.', exZh: '这个证件还有效。' },
            { de: 'Nachweis', art: 'der', pl: 'Nachweise', zh: '证明材料，凭证', en: 'proof/evidence', ex: 'Sie brauchen einen Nachweis über Ihre Adresse.', exZh: '您需要一个地址证明。' },
          ]
        },
        {
          type: 'dialogue', title: '在 Bürgeramt 办登记', scene: 'Wei 搬进 u11 看的那套房子后，第一次去 Bürgeramt 办 Anmeldung，工作人员一步步说明需要什么材料。',
          lines: [
            { sp: 'Beamtin', de: 'Der Nächste bitte! Guten Tag, worum geht es?', zh: '下一位请！您好，您有什么事？' },
            { sp: 'Wei', de: 'Guten Tag, ich möchte mich anmelden. Ich bin vor Kurzem umgezogen.', zh: '您好，我想办登记。我不久前刚搬家。' },
            { sp: 'Beamtin', de: 'Gut, dann brauchen wir das Anmeldeformular. Haben Sie es schon ausgefüllt?', zh: '好的，那我们需要登记表格。您已经填好了吗？' },
            { sp: 'Wei', de: 'Ja, hier ist es. Muss ich noch etwas unterschreiben?', zh: '填好了，给您。我还需要签什么字吗？' },
            { sp: 'Beamtin', de: 'Ja, bitte unterschreiben Sie hier unten.', zh: '是的，请在下面签字。' },
            { sp: 'Wei', de: 'So, fertig. Brauchen Sie sonst noch etwas?', zh: '好了，写完了。您还需要别的什么吗？' },
            { sp: 'Beamtin', de: 'Ihren Ausweis und den Nachweis vom Vermieter, bitte.', zh: '您的证件和房东的证明材料，请给我。' },
            { sp: 'Wei', de: 'Hier, bitte. Ist der Nachweis so in Ordnung?', zh: '给您。这份材料这样可以吗？' },
            { sp: 'Beamtin', de: 'Ja, das passt. Und Ihr Ausweis ist auch noch gültig, sehr gut.', zh: '可以，没问题。您的证件也还在有效期内，很好。' },
            { sp: 'Wei', de: 'Super. Was passiert jetzt mit dem Antrag?', zh: '太好了。这份申请接下来会怎么处理？' },
            { sp: 'Beamtin', de: 'Wir bearbeiten ihn heute noch. Sie bekommen die Bescheinigung per Post.', zh: '我们今天就会处理。您会收到邮寄的登记证明。' },
            { sp: 'Wei', de: 'Alles klar, vielen Dank für Ihre Hilfe!', zh: '明白了，非常感谢您的帮助！' },
          ]
        },
        {
          type: 'grammar', title: 'Sie müssen / Sie können：情态动词在正式场合复现', sub: '复习 u9 的 Satzklammer，用在办事场景里',
          html: `<p>u9 学的情态动词在正式/官方场景里出现频率极高——工作人员几乎全靠这几句话说明流程：</p>
<table><tr><th>句子</th><th>意思</th></tr>
<tr><td class="hl">Sie müssen das Formular ausfüllen.</td><td>您必须填写这张表格。</td></tr>
<tr><td class="hl">Sie müssen Ihren Ausweis mitbringen.</td><td>您必须带上您的证件。</td></tr>
<tr><td class="hl">Sie können den Antrag auch online stellen.</td><td>您也可以在线提交申请。</td></tr></table>
<p>注意第一句：<b class="de">ausfüllen</b> 是 u13 学过的可分动词，跟在情态动词后面时是<b>原形，不拆开</b>——Sie müssen das Formular <mark>ausfüllen</mark>，而不是"Sie müssen das Formular füllen aus"。这正是 u13 讲过的"情态动词句里可分动词不分开"的规律，在正式语境里同样成立。</p>`
        },
        {
          type: 'grammar', title: 'Imperativ Sie 在表格说明里复现', sub: '复习 u10 的命令式',
          html: `<p>窗口工作人员给指示时，命令式（复习 u10）和可分动词经常一起出现，规律不变：<b>动词提到句首，前缀依然踢到句尾</b>：</p>
<table><tr><th>陈述句</th><th>命令式</th></tr>
<tr><td>Sie füllen das Formular aus.</td><td class="hl">Füllen Sie das Formular aus!</td></tr>
<tr><td>Sie unterschreiben hier.</td><td class="hl">Unterschreiben Sie hier!</td></tr>
<tr><td>Sie bringen Ihren Ausweis mit.</td><td class="hl">Bringen Sie Ihren Ausweis mit!</td></tr></table>
<p>把 u9 情态动词、u10 命令式、u13 可分动词这三课的句框规律叠在一起看，会发现德语的"句尾专属位置"其实只有几种常客：动词原形、过去分词、可分动词前缀——办事窗口的德语听起来复杂，但句子结构翻来覆去用的都是你已经学过的几个框架。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">莱比锡办 Anmeldung 的实际流程：</b>需要在搬家后两周内到就近的 <mark>Bürgeramt</mark>（可以在市政府官网预约 Termin）办理，费用<b>全程免费</b>。最容易被忽略、也最容易导致材料不全被退回的一项是 <mark>Wohnungsgeberbestätigung</mark>（房东出具的入住确认书）——签租房合同时最好当场跟房东要一份，免得之后还要专门再要一次。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"das Formular" 的意思是？', options: ['表格', '证件', '申请'], answer: 0, why: 'das Formular = 表格。' },
        { type: 'cloze', zhHint: '请填写这张表格。', before: 'Bitte', after: 'Sie das Formular aus.', options: ['füllen', 'füllt', 'fülle'], answer: 0, why: 'Sie 命令式：动词（与现在时 Sie 变位相同）提到句首，Sie 紧跟其后，前缀 aus 留在句尾。' },
        { type: 'mcq', q: '"Unterschreiben Sie hier!" 用的是哪种称呼形式？', options: ['Sie（正式）', 'du（熟人）', 'ihr（一群人）'], answer: 0, why: '动词提到句首 + Sie，是 Sie 命令式的标志。' },
        { type: 'order', zh: '您的证件还有效。', words: ['Ihr', 'Ausweis', 'ist', 'noch', 'gültig'], why: '陈述句语序：主语 Ihr Ausweis + ist（第二位）+ 其余成分。' },
        { type: 'match', pairs: [['das Formular', '表格'], ['der Antrag', '申请'], ['der Ausweis', '证件'], ['gültig', '有效的']] },
        { type: 'listen', audio: 'Bitte füllen Sie das Formular aus und unterschreiben Sie hier.', q: '这句话是什么意思？', options: ['请填写这张表格并在这里签字。', '请把这张表格带回家。', '这张表格已经填好了。'], answer: 0, why: 'füllen Sie...aus = 请填写，unterschreiben Sie = 请签字。' },
        { type: 'listen', audio: 'Ihr Ausweis ist noch gültig.', q: '这句话是什么意思？', options: ['您的证件还有效。', '您的证件过期了。', '您需要一个新证件。'], answer: 0, why: 'noch gültig = 还有效。' },
        { type: 'speak', de: 'Ich möchte mich anmelden. Hier ist das Formular und mein Ausweis.', zh: '我想办登记。这是表格和我的证件。' },
      ],
      task: { title: '今天的生活任务', desc: '如果还没办过 Anmeldung，去 Bürgeramt Leipzig 官网查一下需要带哪些材料（Ausweis、Wohnungsgeberbestätigung……），用德语词汇写一份清单；已经办过的，用今天学的词复述一遍当时的流程。' }
    },
    {
      id: 'u14l2', title: '一封官方来信', de: 'Ein Brief vom Amt',
      intro: '德国官方信件有一套自己的"套路"：一堆固定短语（hiermit、bitte beachten Sie、spätestens bis）撑起整封信的骨架。这一课不追求逐字翻译，而是学一套阅读策略——一眼找出"缺什么"和"什么时候之前"这两个最重要的信息。',
      sections: [
        {
          type: 'vocab', title: 'Amtsdeutsch 常见套话', sub: '',
          items: [
            { de: 'hiermit', zh: '特此，兹（官方文书开头常用）', en: 'hereby', ex: 'Hiermit bestätigen wir Ihre Anmeldung.', exZh: '我们特此确认您的登记。', note: '日常口语几乎不用，几乎只出现在正式公文里' },
            { de: 'bitte beachten Sie', zh: '请注意', en: 'please note', ex: 'Bitte beachten Sie die Frist.', exZh: '请注意截止日期。' },
            { de: 'spätestens bis', zh: '最晚到……为止', en: 'at the latest by', ex: 'Bitte antworten Sie spätestens bis zum 30. Juni.', exZh: '请最晚在6月30日前回复。', note: '官方信件里标出截止日期最常用的说法，读信时优先找这个短语' },
            { de: 'Sehr geehrte(r) ...', zh: '尊敬的……（正式信件称呼）', en: 'Dear ... (formal)', ex: 'Sehr geehrter Herr Wei,', exZh: '尊敬的 Wei 先生，', note: '对男士用 geehrter，对女士用 geehrte——词尾区分在 u15 系统学习' },
          ]
        },
        {
          type: 'vocab', title: '读信辅助词汇', sub: '',
          items: [
            { de: 'Behörde', art: 'die', pl: 'Behörden', zh: '官方机构，行政部门', en: 'authority/agency', ex: 'Ich habe einen Brief von der Behörde bekommen.', exZh: '我收到了一封行政部门的来信。' },
            { de: 'Bescheid', art: 'der', pl: 'Bescheide', zh: '（官方）通知，批复', en: 'official notice', ex: 'Sie erhalten einen schriftlichen Bescheid.', exZh: '您会收到一份书面通知。' },
          ]
        },
        {
          type: 'dialogue', title: '看不懂这封信', scene: 'Wei 收到一封 Bürgeramt 的来信，看不太懂，请同事 Anna 帮忙——两人一起用"抓关键信息"的策略读完了整封信。',
          lines: [
            { sp: 'Wei', de: 'Anna, kannst du mir helfen? Ich habe einen Brief vom Bürgeramt bekommen und verstehe ihn nicht ganz.', zh: 'Anna，你能帮我个忙吗？我收到了一封市民服务中心的信，看不太懂。' },
            { sp: 'Anna', de: 'Klar, zeig mal her. Ah, das ist ganz klassisches Amtsdeutsch.', zh: '当然，给我看看。啊，这是很典型的官方公文体。' },
            { sp: 'Wei', de: 'Genau, ich verstehe fast jedes zweite Wort nicht.', zh: '没错，我大概每隔一个词就看不懂。' },
            { sp: 'Anna', de: 'Kein Problem, du musst nicht jedes Wort verstehen. Wichtig ist nur: Was fehlt, und bis wann?', zh: '没关系，你不用弄懂每一个词。重要的只是：缺了什么，什么时候之前要交？' },
            { sp: 'Wei', de: 'Achso. Hier steht: "Es fehlt der Nachweis Ihres Vermieters".', zh: '哦这样。这里写着："缺房东的证明材料"。' },
            { sp: 'Anna', de: 'Genau, die Wohnungsgeberbestätigung. Die brauchst du unbedingt für die Anmeldung.', zh: '对，就是房东确认书。这是登记必须要有的。' },
            { sp: 'Wei', de: 'Und hier steht: "spätestens bis zum 15.08.2026".', zh: '这里还写着："最晚到2026年8月15日"。' },
            { sp: 'Anna', de: 'Das ist deine Frist! Du musst das Dokument bis dahin nachreichen.', zh: '这就是你的截止日期！你必须在那之前把材料补交上。' },
            { sp: 'Wei', de: 'Verstanden. Ich rufe gleich meine Vermieterin an und bitte sie um die Bestätigung.', zh: '明白了。我马上给房东打电话，请她开这份确认书。' },
            { sp: 'Anna', de: 'Gute Idee. Und keine Sorge, das ist bestimmt kein großes Problem.', zh: '好主意。别担心，这肯定不是什么大问题。' },
            { sp: 'Wei', de: 'Danke, das beruhigt mich wirklich.', zh: '谢谢，这真的让我安心多了。' },
          ]
        },
        {
          type: 'grammar', title: '读一封真实的官方信件', sub: '策略：先找日期和要求，不逐字翻译',
          html: `<p>这是 Wei 收到的那封信（简化版）——先通读一遍，不用管每个词，试试看能不能抓住"缺什么"和"什么时候之前"：</p>
<p class="de">Amt für Bürgerservice Leipzig</p>
<p class="de"><b>Sehr geehrter Herr Wei,</b></p>
<p class="de">hiermit teilen wir Ihnen mit: Ihre Anmeldung vom 03.08.2026 ist noch nicht vollständig. Es fehlt der Nachweis Ihres Vermieters (die Wohnungsgeberbestätigung).</p>
<p class="de">Bitte beachten Sie: Ohne diesen Nachweis ist die Anmeldung nicht gültig.</p>
<p class="de">Bitte reichen Sie das fehlende Dokument <mark>spätestens bis zum 15.08.2026</mark> nach. Sie können es persönlich vorbeibringen oder per Post schicken.</p>
<p class="de">Bei Fragen erreichen Sie uns unter der oben genannten Telefonnummer.</p>
<p class="de">Mit freundlichen Grüßen<br>Amt für Bürgerservice Leipzig</p>`
        },
        {
          type: 'grammar', title: '逐段拆解：抓重点而不是逐字翻译', sub: '',
          html: `<table><tr><th>段落</th><th>在说什么</th><th>你该做什么</th></tr>
<tr><td class="hl">Sehr geehrter Herr Wei,</td><td>正式信件的称呼语</td><td>确认这封信是写给你的</td></tr>
<tr><td class="hl">hiermit teilen wir Ihnen mit...</td><td>说明问题：材料不全，缺 Wohnungsgeberbestätigung</td><td>找出"缺了什么"</td></tr>
<tr><td class="hl">Bitte beachten Sie: ...</td><td>警告：没有这份材料，登记无效</td><td>意识到后果的严重性</td></tr>
<tr><td class="hl">spätestens bis zum 15.08.2026</td><td>最晚补交日期</td><td><b>划出这个日期，这是全信最重要的信息</b></td></tr></table>
<p>读官方信件的核心策略：<b>先扫一遍找日期、要求做的动作这几类关键信息</b>，而不是从第一个词开始逐字翻译。这封信真正要传达的只有一件事——"8月15日前把 Wohnungsgeberbestätigung 补交上"，其余大段文字都只是包装这句话的正式套话，读不懂 hiermit/vollständig 这类词完全不影响抓住重点。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">真赶不上截止日期怎么办？</b>德国官方机构通常可以打电话说明情况、申请延期（<mark>eine Fristverlängerung beantragen</mark>）——收到这类信不用慌，尽早打电话或发邮件说明情况，永远好过埋头拖延到期限过了都不联系。这也是为什么信末总会留一个联系电话："Bei Fragen erreichen Sie uns unter..."。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"hiermit" 在官方信件里大致的意思是？', options: ['特此，兹', '现在', '立刻'], answer: 0, why: 'hiermit = 特此，官方公文常用的开头套话。' },
        { type: 'cloze', zhHint: '请最晚在8月15日前补交这份材料。', before: 'Bitte reichen Sie das Dokument', after: 'bis zum 15. August nach.', options: ['spätestens', 'endlich', 'vielleicht'], answer: 0, why: 'spätestens bis = 最晚到……为止，标记截止日期的固定短语。' },
        { type: 'mcq', q: '读官方信件时最有效的策略是？', options: ['先找日期、要求和后果，不逐字翻译', '从第一个词开始逐字翻译', '只看称呼语就够了'], answer: 0, why: '抓关键信息（缺什么、什么时候前）比逐字翻译更快也更实用。' },
        { type: 'order', zh: '请注意截止日期。', words: ['Bitte', 'beachten', 'Sie', 'die', 'Frist'], why: 'Sie 命令式：动词 beachten 提到句首，Sie 紧跟其后。' },
        { type: 'match', pairs: [['hiermit', '特此，兹'], ['die Frist', '截止日期'], ['gültig', '有效的'], ['der Nachweis', '证明材料']] },
        { type: 'listen', audio: 'Bitte reichen Sie das Dokument spätestens bis zum 15. August nach.', q: '这句话是什么意思？', options: ['请最晚在8月15日前补交这份材料。', '这份材料已经交过了。', '这份材料不需要了。'], answer: 0, why: 'reichen...nach = 补交，spätestens bis = 最晚到……为止。' },
        { type: 'listen', audio: 'Ohne diesen Nachweis ist die Anmeldung nicht gültig.', q: '这句话是什么意思？', options: ['没有这份材料，登记就无效。', '这份材料不重要。', '登记已经完成了。'], answer: 0, why: 'ohne = 没有，nicht gültig = 无效。' },
        { type: 'speak', de: 'Ich habe einen Brief vom Bürgeramt bekommen. Es fehlt ein Dokument.', zh: '我收到了一封市民服务中心的信。缺了一份材料。' },
      ],
      task: { title: '今天的生活任务', desc: '如果手头有真实的德国官方信件或邮件，用今天学的策略读一遍，划出"缺什么/要做什么"和"截止日期"；没有的话，把课上这封模拟信再读一遍，用中文说出这两个关键信息。' }
    },
  ]
};
