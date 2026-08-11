// 第 15 单元：电话与邮件
export default {
  id: 'u15', num: '15', color: 'green', shape: 'tri',
  de: 'Anrufe & E-Mails', zh: '电话与邮件',
  desc: '打电话总是接到答录机、写邮件不知道称呼该怎么写——这个单元教你电话留言的固定套路，还有正式邮件从称呼到结束语的完整结构。',
  kann: [
    { de: 'Ich kann am Telefon eine klare Nachricht auf dem Anrufbeantworter hinterlassen.', zh: '我能在电话答录机上留下一段清楚的留言。' },
    { de: 'Ich kann mit „Könnten Sie...“ und „Ich würde gern...“ höflich um etwas bitten.', zh: '我能用 Könnten Sie 和 Ich würde gern 礼貌地提出请求。' },
    { de: 'Ich kann eine formelle E-Mail mit Anrede, Hauptteil und Grußformel schreiben.', zh: '我能写一封带称呼、正文和结束语的正式邮件。' },
  ],
  lessons: [
    {
      id: 'u15l1', title: '请您给我回个电话', de: 'Könnten Sie mich zurückrufen?',
      intro: '打电话找人，十次有三次会先接到答录机——这一课学会怎么听懂并留一段得体的语音留言，还有德语里最实用的礼貌句型雏形：Könnten Sie.../Ich würde gern...，先当固定短语用起来，虚拟式的完整原理留到 u26 系统学习。',
      sections: [
        {
          type: 'vocab', title: '打电话核心词汇', sub: '',
          items: [
            { de: 'Anrufbeantworter', art: 'der', pl: 'Anrufbeantworter', zh: '电话答录机', en: 'answering machine', ex: 'Ich habe eine Nachricht auf dem Anrufbeantworter hinterlassen.', exZh: '我在答录机上留了言。' },
            { de: 'erreichen', zh: '联系上，找到（某人）', en: 'to reach (someone)', ex: 'Sie erreichen mich am besten vormittags.', exZh: '您最好在上午联系我。' },
            { de: 'zurückrufen', zh: '回电话', en: 'to call back', ex: 'Ich rufe Sie später zurück.', exZh: '我稍后给您回电话。', note: '可分动词，呼应 u13：现在时 rufe...zurück，Perfekt 是 zurückgerufen' },
            { de: 'Rückruf', art: 'der', pl: 'Rückrufe', zh: '回电（名词）', en: 'callback', ex: 'Ich warte auf Ihren Rückruf.', exZh: '我在等您的回电。' },
          ]
        },
        {
          type: 'vocab', title: '接通与转接', sub: '',
          items: [
            { de: 'verbinden', zh: '转接（电话）', en: 'to connect/transfer (a call)', ex: 'Ich verbinde Sie mit Frau Schmidt.', exZh: '我帮您转接给施密特女士。' },
            { de: 'dringend', zh: '紧急的，急迫的', en: 'urgent', ex: 'Es ist dringend, ich muss sie sprechen.', exZh: '这很紧急，我必须跟她说上话。' },
            { de: 'eine Nachricht hinterlassen', zh: '留言', en: 'to leave a message', ex: 'Möchten Sie eine Nachricht hinterlassen?', exZh: '您想留言吗？' },
            { de: 'auflegen', zh: '挂断（电话）', en: 'to hang up', ex: 'Bitte legen Sie nicht auf!', exZh: '请不要挂断！', note: '可分动词' },
          ]
        },
        {
          type: 'vocab', title: '礼貌请求：Konjunktiv II 雏形', sub: '先当固定句型整体用起来',
          items: [
            { de: 'Könnten Sie...?', zh: '您能不能……（礼貌请求）', en: 'Could you...?', ex: 'Könnten Sie mir helfen?', exZh: '您能帮我一下吗？', note: '比 Können Sie...? 更礼貌委婉，是 Konjunktiv II（虚拟式）的雏形，完整变位原理 u26 系统学习' },
            { de: 'Ich würde gern...', zh: '我想……（礼貌表达意愿）', en: 'I would like to...', ex: 'Ich würde gern einen Termin vereinbaren.', exZh: '我想约一个时间。', note: '比 ich möchte 更委婉，正式场合/请陌生人办事时常用' },
          ]
        },
        {
          type: 'dialogue', title: '打给市民服务中心', scene: 'Wei 打电话去 Bürgeramt 想确认材料是否收到，结果只接通了答录机——他留下了一段清楚得体的语音留言。',
          lines: [
            { sp: 'Anrufbeantworter', de: 'Bürgeramt Leipzig, guten Tag. Sie erreichen uns momentan nicht persönlich.', zh: '莱比锡市民服务中心，您好。您现在无法联系到工作人员本人。' },
            { sp: 'Wei', de: 'Ach, schon wieder der Anrufbeantworter…', zh: '啊，又是答录机……' },
            { sp: 'Anrufbeantworter', de: 'Bitte hinterlassen Sie nach dem Signalton eine Nachricht. Wir rufen Sie schnellstmöglich zurück.', zh: '请在提示音后留言。我们会尽快给您回电。' },
            { sp: 'Wei', de: 'Guten Tag, hier ist Wei. Ich rufe wegen meiner Anmeldung an.', zh: '您好，我是Wei。我是关于我的登记打来的电话。' },
            { sp: 'Wei', de: 'Ich habe die Wohnungsgeberbestätigung bereits geschickt. Ist sie schon angekommen?', zh: '我已经把房东确认书寄出去了。它到了吗？' },
            { sp: 'Wei', de: 'Es ist ein bisschen dringend. Die Frist läuft bald ab.', zh: '有点紧急。截止日期快到了。' },
            { sp: 'Wei', de: 'Könnten Sie mich bitte zurückrufen? Meine Nummer ist 0176-12345678.', zh: '您能给我回个电话吗？我的号码是0176-12345678。' },
            { sp: 'Wei', de: 'Ich würde gern noch heute einen Rückruf bekommen, falls möglich.', zh: '如果可能的话，我希望今天能收到回电。' },
            { sp: 'Wei', de: 'Vielen Dank, auf Wiederhören!', zh: '非常感谢，再见！' },
            { sp: 'Anrufbeantworter', de: 'Ihre Nachricht wurde gespeichert. Auf Wiederhören.', zh: '您的留言已保存。再见。' },
          ]
        },
        {
          type: 'grammar', title: 'Könnten Sie... / Ich würde gern...：礼貌请求的固定句型', sub: '虚拟式雏形，先会用，原理 u26 再讲',
          html: `<p>德语里想让请求听起来更礼貌委婉，有一套固定的"升级版"说法——把 können/wollen 换成 könnten/würde，语气立刻从"直接"变成"客气"：</p>
<table><tr><th>直接说法</th><th>更礼貌的说法</th></tr>
<tr><td>Können Sie mir helfen?</td><td class="hl">Könnten Sie mir helfen?</td></tr>
<tr><td>Ich will einen Termin.</td><td class="hl">Ich würde gern einen Termin vereinbaren.</td></tr>
<tr><td>Rufen Sie mich zurück.</td><td class="hl">Könnten Sie mich zurückrufen?</td></tr></table>
<p>这背后其实是 <b class="de">Konjunktiv II</b>（虚拟式）的变位，但<b>现在完全不需要弄懂原理</b>——先把 <mark>Könnten Sie...?</mark> 和 <mark>Ich würde gern...</mark> 当成两个现成的礼貌句型整体背下来，套上任何请求内容就能用：打电话、写邮件、请陌生人帮忙，这两个框架几乎万能。完整的虚拟式变位规则（könnte/würde/hätte/wäre 一整套）会在 u26 系统学习。</p>`
        },
        {
          type: 'grammar', title: '电话开场白与结束语', sub: '德语电话是最程式化的口语场景之一',
          html: `<table><tr><th>用途</th><th>常用说法</th></tr>
<tr><td>接通后自报家门</td><td class="hl">Guten Tag, hier ist [Name].</td></tr>
<tr><td>说明来意</td><td class="hl">Ich rufe wegen... an.</td></tr>
<tr><td>请求回电</td><td class="hl">Könnten Sie mich zurückrufen?</td></tr>
<tr><td>电话专用的告别语</td><td class="hl">Auf Wiederhören!</td></tr></table>
<p>最后一条特别注意：电话里说"再见"用 <b class="de">Auf Wiederhören</b>（字面"再听见"），而不是当面道别时说的 <b class="de">Auf Wiedersehen</b>（字面"再看见"）——打电话时看不见对方，只能"听见"，这个区分德国人非常在意，说反了会显得很不熟悉电话礼仪。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">怕打电话很正常，但德语电话其实高度公式化。</b>几乎每一通电话都是同一套模板：自报家门 → 说明来意 → 提出请求/请求回电 → Auf Wiederhören。把这一课的模板背熟，实际打电话时只需要往里面填空，不需要临场自由发挥——这也是为什么留言比面对面对话更适合初学者练习：你可以提前打好草稿再念。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Auf Wiederhören!" 用在什么场合？', options: ['打电话结束时', '当面告别时', '早上问候时'], answer: 0, why: 'Auf Wiederhören 是电话专用的告别语，因为打电话时"听不见"而不是"看不见"。' },
        { type: 'cloze', zhHint: '您能不能帮我一下？（礼貌）', before: '', after: 'Sie mir bitte helfen?', options: ['Könnten', 'Kann', 'Würde'], answer: 0, why: 'Könnten Sie...? 是比 Können Sie...? 更礼貌的请求句型。' },
        { type: 'mcq', q: '"zurückrufen" 的意思是？', options: ['回电话', '挂断电话', '转接电话'], answer: 0, why: 'zurückrufen = 回电话，可分动词。' },
        { type: 'order', zh: '我是关于我的登记打来电话的。', words: ['Ich', 'rufe', 'wegen', 'meiner', 'Anmeldung', 'an'], why: 'rufe 站第二位，可分动词前缀 an 踢到句尾；"wegen + 名词"（因为，关于）先当固定搭配记，它的格规则以后系统学。' },
        { type: 'match', pairs: [['der Anrufbeantworter', '电话答录机'], ['dringend', '紧急的'], ['verbinden', '转接（电话）'], ['der Rückruf', '回电']] },
        { type: 'listen', audio: 'Könnten Sie mich bitte zurückrufen?', q: '这句话是什么意思？', options: ['您能不能给我回个电话？', '请不要给我打电话。', '我现在没有时间接电话。'], answer: 0, why: 'Könnten Sie...? = 您能不能……？zurückrufen = 回电话。' },
        { type: 'listen', audio: 'Ich würde gern einen Termin vereinbaren.', q: '这句话是什么意思？', options: ['我想约一个时间。', '我不能来赴约了。', '我已经有一个预约了。'], answer: 0, why: 'Ich würde gern... = 我想……（礼貌），einen Termin vereinbaren = 约一个时间。' },
        { type: 'speak', de: 'Guten Tag, hier ist Wei. Könnten Sie mich bitte zurückrufen?', zh: '您好，我是Wei。您能给我回个电话吗？' },
      ],
      task: { title: '今天的生活任务', desc: '真实或模拟地打一个电话（哪怕只是对着自己练习），用上"自报家门+说明来意+请求回电"这套模板，Könnten Sie 和 Ich würde gern 至少各说一句。' }
    },
    {
      id: 'u15l2', title: '暖气坏了', de: 'Die Heizung ist kaputt',
      intro: '冬天将至，Wei 家的暖气突然不工作了。这一课学正式邮件的完整结构——称呼语、正文、结束语，还有一个绝对不能写错的细节：Sehr geehrte(r) 后面到底该加不加词尾。',
      sections: [
        {
          type: 'vocab', title: '邮件结构词汇', sub: '',
          items: [
            { de: 'Betreff', art: 'der', pl: 'Betreffe', zh: '邮件主题', en: 'subject line', ex: 'Betreff: Kaputte Heizung', exZh: '主题：暖气坏了' },
            { de: 'Anhang', art: 'der', pl: 'Anhänge', zh: '附件', en: 'attachment', ex: 'Im Anhang finden Sie ein Foto.', exZh: '附件里有一张照片。' },
            { de: 'mitteilen', zh: '告知，通知', en: 'to inform', ex: 'Ich möchte Ihnen mitteilen: Die Heizung ist kaputt.', exZh: '我想通知您：暖气坏了。', note: '可分动词：mit-teilen' },
          ]
        },
        {
          type: 'vocab', title: '称呼语与结束语', sub: '',
          items: [
            { de: 'Sehr geehrte Frau / Sehr geehrter Herr', zh: '尊敬的女士/先生（正式邮件称呼）', en: 'Dear Ms./Mr. (formal)', ex: 'Sehr geehrte Frau Hoffmann,', exZh: '尊敬的 Hoffmann 女士，', note: '高危点！对女士用 geehrte（不加词尾），对男士用 geehrter（加 -er）——写反了会显得很不专业' },
            { de: 'Liebe(r) ...', zh: '亲爱的……（熟人间称呼）', en: 'Dear ... (informal)', ex: 'Liebe Anna,', exZh: '亲爱的 Anna，', note: '对女性用 Liebe，对男性用 Lieber（加 -r）' },
            { de: 'Mit freundlichen Grüßen', zh: '此致敬礼（正式邮件结束语）', en: 'Kind regards (formal)', ex: 'Mit freundlichen Grüßen – Wei', exZh: '此致敬礼——Wei' },
            { de: 'Viele Grüße', zh: '问候（熟人间结束语，较随意）', en: 'Best regards (informal)', ex: 'Viele Grüße aus Leipzig!', exZh: '来自莱比锡的问候！' },
          ]
        },
        {
          type: 'vocab', title: '报修常用词', sub: '',
          items: [
            { de: 'Heizung', art: 'die', pl: 'Heizungen', zh: '暖气，供暖设备', en: 'heating', ex: 'Die Heizung ist kaputt.', exZh: '暖气坏了。' },
            { de: 'kaputt', zh: '坏了的，损坏的', en: 'broken', ex: 'Der Herd ist kaputt.', exZh: '炉子坏了。' },
            { de: 'funktionieren', zh: '运转，起作用', en: 'to function/work', ex: 'Die Heizung funktioniert nicht mehr.', exZh: '暖气不工作了。' },
            { de: 'reparieren', zh: '修理', en: 'to repair', ex: 'Können Sie die Heizung reparieren?', exZh: '您能修一下暖气吗？' },
          ]
        },
        {
          type: 'dialogue', title: '给房东留言', scene: 'Wei 家的暖气从昨天起就不工作了，他打电话给 u11 认识的房东 Frau Hoffmann，又接到了答录机。',
          lines: [
            { sp: 'Anrufbeantworter', de: 'Hallo, Sie sind mit dem Anrufbeantworter von Frau Hoffmann verbunden. Bitte hinterlassen Sie eine Nachricht.', zh: '您好，您已接通 Hoffmann 女士的语音信箱。请留言。' },
            { sp: 'Wei', de: 'Guten Tag, Frau Hoffmann, hier ist Wei aus der Karl-Liebknecht-Straße.', zh: '您好，Hoffmann 女士，我是卡尔-李卜克内西大街的 Wei。' },
            { sp: 'Wei', de: 'Ich rufe an: Die Heizung funktioniert seit gestern nicht mehr.', zh: '我打电话是因为暖气从昨天起就不工作了。' },
            { sp: 'Wei', de: 'Es ist ziemlich kalt in der Wohnung, und ich mache mir ein bisschen Sorgen.', zh: '房子里挺冷的，我有点担心。' },
            { sp: 'Wei', de: 'Im Wohnzimmer und im Schlafzimmer ist es besonders kalt.', zh: '客厅和卧室尤其冷。' },
            { sp: 'Wei', de: 'Könnten Sie bitte einen Handwerker schicken?', zh: '您能不能派个师傅来？' },
            { sp: 'Wei', de: 'Bitte rufen Sie mich zurück. Meine Nummer haben Sie ja.', zh: '请给我回电话。您已经有我的号码了。' },
            { sp: 'Wei', de: 'Vielen Dank, auf Wiederhören!', zh: '非常感谢，再见！' },
            { sp: 'Anrufbeantworter', de: 'Ihre Nachricht wurde gespeichert. Auf Wiederhören.', zh: '您的留言已保存。再见。' },
          ]
        },
        {
          type: 'grammar', title: '正式邮件的骨架：称呼、正文、结束语', sub: '和熟人邮件对比着看',
          html: `<p>德语邮件按关系亲疏分两套完全不同的称呼语和结束语，绝对不能混用：</p>
<table><tr><th></th><th>正式（陌生人/官方/房东）</th><th>非正式（朋友/同事）</th></tr>
<tr><td>称呼语（对女士）</td><td class="hl">Sehr geehrte Frau Hoffmann,</td><td class="hl">Liebe Anna,</td></tr>
<tr><td>称呼语（对男士）</td><td class="hl">Sehr geehrter Herr Wei,</td><td class="hl">Lieber Thomas,</td></tr>
<tr><td>结束语</td><td class="hl">Mit freundlichen Grüßen</td><td class="hl">Viele Grüße</td></tr></table>
<p><b>高危点：geehrte 还是 geehrter？</b>只看收信人的性别——对<b>女士</b>用 <mark>geehrte</mark>（不加额外词尾），对<b>男士</b>用 <mark>geehrter</mark>（加 -er）。非正式称呼 Liebe/Lieber 是同一条规律：对女性 Liebe，对男性 Lieber。写反了在德语里是很明显的低级错误，值得专门花时间记熟。</p>`
        },
        {
          type: 'grammar', title: 'Wei 写给房东的报修邮件', sub: '一封完整的例文，还有房东的回信',
          html: `<p>语音留言没有得到回复，Wei 决定再写一封邮件——邮件比电话更适合说清楚细节，也方便房东随时查看：</p>
<p class="de"><b>Betreff: Kaputte Heizung in der Wohnung, Karl-Liebknecht-Straße</b></p>
<p class="de">Sehr geehrte Frau Hoffmann,</p>
<p class="de">mein Name ist Wei, ich wohne bei Ihnen zur Miete in der Karl-Liebknecht-Straße.</p>
<p class="de">Ich möchte Ihnen mitteilen: Die Heizung funktioniert seit gestern nicht mehr. Im Wohnzimmer und im Schlafzimmer ist es sehr kalt.</p>
<p class="de">Könnten Sie bitte einen Handwerker schicken? Ich wäre Ihnen sehr dankbar.</p>
<p class="de">Mit freundlichen Grüßen<br>Wei</p>
<p>房东很快回复了一封简短的邮件：</p>
<p class="de">Sehr geehrter Herr Wei,</p>
<p class="de">vielen Dank für Ihre Nachricht. Das tut mir leid. Ich schicke Ihnen morgen früh einen Handwerker vorbei.</p>
<p class="de">Mit freundlichen Grüßen<br>B. Hoffmann</p>
<p>注意两封信的称呼语正好对称：Wei 写给女房东用 <mark>Sehr geehrte Frau Hoffmann</mark>（geehrte，不加词尾），房东回信给 Wei 用 <mark>Sehr geehrter Herr Wei</mark>（geehrter，加 -er）——这条词尾规律只看"收信人的性别"，和写信人是谁无关，对着这两个例句多读几遍能记得更牢。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">写报修邮件的两个实用技巧：</b>如果能拍一张问题照片作为 <mark>Anhang</mark>（附件）一起发送，房东/物业处理起来会快很多，德国人对"有图有真相"的报修邮件反馈通常更迅速；Betreff（主题）尽量写得具体简短，比如 <mark>"Kaputte Heizung"</mark> 就比 <mark>"Hilfe!"</mark> 更容易被优先处理——德语邮件文化偏好直接说清楚问题，不需要过多寒暄铺垫。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Mit freundlichen Grüßen" 用在什么场合？', options: ['正式邮件的结束语', '熟人邮件的结束语', '邮件主题'], answer: 0, why: 'Mit freundlichen Grüßen 是正式邮件的标准结束语，熟人之间通常用更随意的 Viele Grüße。' },
        { type: 'cloze', zhHint: '尊敬的Hoffmann女士，（正式，对女士）', before: '', after: 'Frau Hoffmann,', options: ['Sehr geehrte', 'Sehr geehrter', 'Liebe'], answer: 0, why: '对女士的正式称呼用 geehrte，不加额外词尾。' },
        { type: 'mcq', q: '给一位不熟悉的男性写正式邮件，称呼语应该用哪个？', options: ['Sehr geehrter Herr', 'Sehr geehrte Herr', 'Lieber Herr'], answer: 0, why: '对男士的正式称呼用 geehrter，加 -er 词尾。' },
        { type: 'order', zh: '暖气坏了。', words: ['Die', 'Heizung', 'ist', 'kaputt'], why: '陈述句语序：主语 Die Heizung + ist（第二位）+ 表语 kaputt。' },
        { type: 'match', pairs: [['der Betreff', '邮件主题'], ['der Anhang', '附件'], ['mitteilen', '告知'], ['reparieren', '修理']] },
        { type: 'listen', audio: 'Die Heizung funktioniert seit gestern nicht mehr.', q: '这句话是什么意思？', options: ['暖气从昨天起就不工作了。', '暖气明天会修好。', '暖气一直都工作正常。'], answer: 0, why: 'funktioniert...nicht mehr = 不再工作了，seit gestern = 从昨天起。' },
        { type: 'listen', audio: 'Könnten Sie bitte einen Handwerker schicken?', q: '这句话是什么意思？', options: ['您能不能派个师傅来？', '师傅已经来过了。', '不需要师傅来修。'], answer: 0, why: 'Könnten Sie...? = 您能不能……？einen Handwerker schicken = 派个师傅来。' },
        { type: 'speak', de: 'Sehr geehrte Frau Hoffmann, die Heizung ist kaputt. Könnten Sie bitte einen Handwerker schicken?', zh: '尊敬的Hoffmann女士，暖气坏了。您能不能派个师傅来？' },
      ],
      task: { title: '今天的生活任务', desc: '写一封真实或模拟的请求类邮件（比如给房东、给诊所），Betreff、称呼语、正文、结束语一样不落——主题任选，记得根据收信人性别选对 geehrte/geehrter。' }
    },
  ]
};
