// 生存短语手册：8 大分类，覆盖 A1 阶段最高频的实用场景
export const phraseCats = [
  {
    id: 'p1', title: '救命短语', de: 'Hilfe!',
    items: [
      { de: 'Wie bitte?', zh: '您说什么？（没听清，请对方重复）' },
      { de: 'Können Sie das bitte wiederholen?', zh: '您能再说一遍吗？' },
      { de: 'Langsamer, bitte.', zh: '请说慢一点。' },
      { de: 'Ich verstehe nicht.', zh: '我没听懂。' },
      { de: 'Ich spreche nur ein bisschen Deutsch.', zh: '我只会说一点点德语。' },
      { de: 'Sprechen Sie Englisch?', zh: '您会说英语吗？' },
      { de: 'Können Sie das bitte aufschreiben?', zh: '您能写下来吗？', note: '数字、地址听不清时特别好用' },
      { de: 'Wo ist die Toilette, bitte?', zh: '请问洗手间在哪儿？' },
    ]
  },
  {
    id: 'p2', title: '礼貌用语', de: 'Höflichkeit',
    items: [
      { de: 'Bitte.', zh: '请 / 不客气。' },
      { de: 'Danke schön.', zh: '非常感谢。' },
      { de: 'Vielen Dank.', zh: '多谢。' },
      { de: 'Entschuldigung.', zh: '不好意思 / 抱歉（引起注意或道歉）' },
      { de: 'Kein Problem.', zh: '没关系，没问题。' },
      { de: 'Gerne.', zh: '乐意之至（回应请求或感谢）' },
      { de: 'Alles klar.', zh: '明白了，都清楚了。' },
    ]
  },
  {
    id: 'p3', title: '超市购物', de: 'Einkaufen',
    items: [
      { de: 'Wo finde ich ___?', zh: '___在哪儿？', note: '把空格换成想找的商品名' },
      { de: 'Haben Sie ___?', zh: '你们有___吗？' },
      { de: 'Was kostet das?', zh: '这个多少钱？' },
      { de: 'Ich hätte gern ___.', zh: '我想要___。' },
      { de: 'Zahlen Sie bar oder mit Karte?', zh: '您付现金还是刷卡？', note: '结账时店员常问的一句' },
      { de: 'Mit Karte, bitte.', zh: '刷卡，谢谢。' },
      { de: 'Brauchen Sie eine Tüte?', zh: '需要袋子吗？' },
      { de: 'Das ist alles, danke.', zh: '就这些了，谢谢。' },
    ]
  },
  {
    id: 'p4', title: '面包店与咖啡馆', de: 'Bäckerei & Café',
    items: [
      { de: 'Was darf’s sein?', zh: '您要点什么？（店员招呼语）' },
      { de: 'Ich hätte gern ein Stück Kuchen.', zh: '我想要一块蛋糕。' },
      { de: 'Zum Hier-Essen oder zum Mitnehmen?', zh: '堂食还是外带？' },
      { de: 'Zum Mitnehmen, bitte.', zh: '外带，谢谢。' },
      { de: 'Noch etwas?', zh: '还要别的吗？' },
      { de: 'Das wär’s, danke.', zh: '就这些了，谢谢。' },
      { de: 'Mit Milch, ohne Zucker.', zh: '加牛奶，不加糖。' },
    ]
  },
  {
    id: 'p5', title: '餐厅', de: 'Im Restaurant',
    items: [
      { de: 'Ein Tisch für zwei, bitte.', zh: '请给我们一张两人桌。', note: '进餐厅先说这句' },
      { de: 'Die Speisekarte, bitte.', zh: '请给我菜单。' },
      { de: 'Was können Sie empfehlen?', zh: '您有什么推荐吗？' },
      { de: 'Ich nehme das Hauptgericht mit Pommes.', zh: '我要主菜配薯条。' },
      { de: 'Ohne Fleisch, bitte.', zh: '不要肉，谢谢。', note: '素食提示' },
      { de: 'Die Rechnung, bitte.', zh: '请结账。' },
      { de: 'Zahlen, bitte!', zh: '买单！', note: '比 Die Rechnung, bitte 更简短口语' },
      { de: 'Es war sehr lecker!', zh: '非常好吃！' },
    ]
  },
  {
    id: 'p6', title: '交通出行', de: 'Unterwegs',
    items: [
      { de: 'Eine Fahrkarte nach ___, bitte.', zh: '一张去___的票，谢谢。' },
      { de: 'Wann fährt die nächste Straßenbahn?', zh: '下一班电车什么时候开？' },
      { de: 'Muss ich umsteigen?', zh: '我需要换乘吗？' },
      { de: 'Welche Linie fährt zum Hauptbahnhof?', zh: '哪条线去中央火车站？' },
      { de: 'Ist dieser Platz frei?', zh: '这个座位有人吗？' },
      { de: 'Wie komme ich zu ___?', zh: '我怎么去___？', note: 'zu 后面根据名词性别变成 zum（阳性/中性）或 zur（阴性）' },
      { de: 'Fällt der Bus aus?', zh: '这班公交取消了吗？' },
      { de: 'Zurückbleiben, bitte!', zh: '请退后！（车门要关了）' },
    ]
  },
  {
    id: 'p7', title: '看病与药店', de: 'Arzt & Apotheke',
    items: [
      { de: 'Ich brauche einen Termin beim Arzt.', zh: '我需要预约看医生。' },
      { de: 'Ich habe Kopfschmerzen.', zh: '我头疼。' },
      { de: 'Mir ist schlecht.', zh: '我不舒服，难受。' },
      { de: 'Haben Sie etwas gegen Halsschmerzen?', zh: '你们有治嗓子疼的药吗？', note: '药店常用句' },
      { de: 'Ich bin allergisch gegen ___.', zh: '我对___过敏。' },
      { de: 'Brauche ich ein Rezept?', zh: '我需要处方吗？' },
      { de: 'Wo ist die nächste Apotheke?', zh: '最近的药店在哪儿？' },
      { de: 'Ich brauche einen Krankenwagen!', zh: '我需要救护车！', note: '紧急情况；德国急救电话是 112' },
    ]
  },
  {
    id: 'p8', title: '办事与邮件', de: 'Behörden & Post',
    items: [
      { de: 'Ich habe einen Termin um ___ Uhr.', zh: '我预约的时间是___点。' },
      { de: 'Ich möchte mich anmelden.', zh: '我想登记/注册。', note: '比如落户登记 Anmeldung' },
      { de: 'Wo kann ich das Formular abgeben?', zh: '我可以在哪儿提交这份表格？' },
      { de: 'Ich brauche eine Kopie meines Ausweises.', zh: '我需要一份证件复印件。' },
      { de: 'Wie lange dauert das?', zh: '这个需要多久？' },
      { de: 'Ein Paket nach China, bitte.', zh: '请寄一个包裹到中国。', note: '邮局常用句' },
      { de: 'Wo ist der nächste Briefkasten?', zh: '最近的邮筒在哪儿？' },
    ]
  },
  {
    id: 'p9', title: 'Redemittel · 表达观点', de: 'Meinung äußern',
    items: [
      { de: 'Meiner Meinung nach ist das eine gute Idee.', zh: '我认为这是个好主意。' },
      { de: 'Ich bin der Meinung, dass man jeden Tag etwas Neues lernen sollte.', zh: '我认为人应该每天学点新东西。' },
      { de: 'Ich finde, dass Leipzig eine sehr lebenswerte Stadt ist.', zh: '我觉得莱比锡是个很宜居的城市。' },
      { de: 'Für mich ist es wichtig, ehrlich zu sein.', zh: '对我来说，诚实很重要。' },
      { de: 'Ich bin nicht sicher, ob das stimmt.', zh: '我不确定这是否属实。', note: '表达不确定用 ob 从句' },
      { de: 'Meiner Ansicht nach sollte man das Problem sofort lösen.', zh: '依我看应该马上解决这个问题。', note: 'Ansicht 比 Meinung 更书面，写作里常用' },
      { de: 'Ich denke, dass wir mehr Zeit brauchen.', zh: '我认为我们需要更多时间。' },
    ]
  },
  {
    id: 'p10', title: 'Redemittel · 同意与反对', de: 'Zustimmen & Widersprechen',
    items: [
      { de: 'Da stimme ich dir/Ihnen zu.', zh: '这点我同意你/您的看法。' },
      { de: 'Das stimmt.', zh: '说得对。' },
      { de: 'Das stimmt so nicht ganz.', zh: '这话不完全对。' },
      { de: 'Das sehe ich (ganz) anders.', zh: '我的看法（完全）不一样。' },
      { de: 'Da bin ich anderer Meinung.', zh: '这点我有不同看法。' },
      { de: 'Einerseits hast du recht, andererseits gibt es auch andere Gründe.', zh: '一方面你说得对，另一方面也有别的原因。', note: 'einerseits ..., andererseits ... 是 B1 写作/口语高频连接词' },
      { de: 'Es kommt darauf an.', zh: '这得看情况。' },
      { de: 'Genau!', zh: '没错！就是这样！', note: '口语里最简短的强烈附和' },
    ]
  },
  {
    id: 'p11', title: 'Redemittel · 提议与建议', de: 'Vorschläge machen',
    items: [
      { de: 'Wie wäre es, wenn wir zusammen Deutsch lernen?', zh: '我们一起学德语怎么样？' },
      { de: 'Wir könnten doch am Wochenende ins Kino gehen.', zh: '我们周末可以去看电影呀。' },
      { de: 'Ich schlage vor, dass wir uns um 18 Uhr treffen.', zh: '我建议我们18点见面。' },
      { de: 'Was hältst du davon?', zh: '你觉得这个主意怎么样？' },
      { de: 'Hast du Lust, mitzukommen?', zh: '你有兴趣一起来吗？' },
      { de: 'Einverstanden!', zh: '同意！就这么定！' },
      { de: 'Das ist eine gute Idee, aber vielleicht sollten wir noch einen anderen Termin finden.', zh: '这是个好主意，不过也许我们该再找个别的时间。' },
    ]
  },
  {
    id: 'p12', title: 'Redemittel · 礼貌请求', de: 'Höfliche Bitten',
    items: [
      { de: 'Könnten Sie bitte das Fenster öffnen?', zh: '您能把窗户打开吗？' },
      { de: 'Wäre es möglich, den Termin zu verschieben?', zh: '有可能把预约改期吗？' },
      { de: 'Ich hätte eine Bitte.', zh: '我有个请求。' },
      { de: 'Dürfte ich kurz Ihre Meinung hören?', zh: '我可以听听您的意见吗？' },
      { de: 'Würden Sie mir bitte helfen?', zh: '您能帮我一下吗？' },
      { de: 'Wäre es Ihnen recht, wenn ich morgen vorbeikomme?', zh: '如果我明天过去，您方便吗？' },
    ]
  },
  {
    id: 'p13', title: 'Redemittel · 电话用语', de: 'Am Telefon',
    items: [
      { de: 'Guten Tag, hier spricht Wei Zhang.', zh: '您好，我是 Wei Zhang。', note: '接通后先自报全名（德国电话礼仪）' },
      { de: 'Kann ich bitte mit Herrn Schmidt sprechen?', zh: '我能和施密特先生通话吗？' },
      { de: 'Worum geht es?', zh: '是什么事？' },
      { de: 'Einen Moment, ich verbinde Sie.', zh: '请稍等，我给您转接。' },
      { de: 'Ich rufe später noch einmal an.', zh: '我稍后再打过来。' },
      { de: 'Können Sie mir Ihre Telefonnummer geben?', zh: '您能告诉我您的电话号码吗？' },
      { de: 'Es tut mir leid, er/sie ist gerade nicht erreichbar.', zh: '抱歉，他/她现在无法接通。' },
      { de: 'Auf Wiederhören!', zh: '再见！', note: '电话专用告别语，当面告别才用 Auf Wiedersehen' },
    ]
  },
  {
    id: 'p14', title: 'Redemittel · 邮件与书信', de: 'E-Mail schreiben',
    items: [
      { de: 'Sehr geehrte Damen und Herren,', zh: '尊敬的先生/女士，', note: '正式 · 不知具体收件人姓名时使用' },
      { de: 'Sehr geehrter Herr Schmidt,', zh: '尊敬的施密特先生，', note: '正式 · 知道对方姓名' },
      { de: 'Liebe Anna, / Lieber Tom,', zh: '亲爱的Anna / 亲爱的Tom，', note: '非正式 · 熟人之间' },
      { de: 'Vielen Dank für Ihre Nachricht.', zh: '非常感谢您的来信。', note: '正式/半正式通用' },
      { de: 'Ich schreibe Ihnen, weil ...', zh: '我写信是因为……', note: '正式 · 开头说明来意' },
      { de: 'Ich freue mich auf Ihre Antwort.', zh: '期待您的回复。', note: '正式' },
      { de: 'Bei Fragen stehe ich gerne zur Verfügung.', zh: '如有问题请随时联系我。', note: '正式' },
      { de: 'Mit freundlichen Grüßen', zh: '此致敬礼', note: '正式邮件结尾' },
      { de: 'Viele Grüße', zh: '问候', note: '非正式邮件结尾' },
    ]
  },
  {
    id: 'p15', title: 'Redemittel · 陈述与展开', de: 'Eine Präsentation halten',
    items: [
      { de: 'Ich möchte heute über meine Erfahrungen in Leipzig sprechen.', zh: '今天我想谈谈我在莱比锡的经历。', note: '歌德 B1 Sprechen Teil 2 陈述模板' },
      { de: 'Zuerst möchte ich sagen, dass ...', zh: '首先我想说……' },
      { de: 'Außerdem finde ich es wichtig, dass ...', zh: '此外我认为……很重要' },
      { de: 'Ein Beispiel dafür ist ...', zh: '一个例子是……' },
      { de: 'Das bedeutet, dass ...', zh: '这意味着……' },
      { de: 'Zum Schluss möchte ich betonen, dass ...', zh: '最后我想强调……' },
      { de: 'Zusammenfassend kann man sagen, dass ...', zh: '总而言之可以说……' },
      { de: 'Was mich betrifft, ...', zh: '就我而言……' },
    ]
  },
  {
    id: 'p16', title: 'Redemittel · 抱怨与投诉', de: 'Reklamation',
    items: [
      { de: 'Ich möchte mich beschweren.', zh: '我想投诉。' },
      { de: 'Das funktioniert leider nicht.', zh: '这个很遗憾用不了。' },
      { de: 'Ich hätte gern mein Geld zurück.', zh: '我想要退款。' },
      { de: 'Könnten Sie das Problem bitte lösen?', zh: '您能解决一下这个问题吗？' },
      { de: 'Das ist nicht das, was ich bestellt habe.', zh: '这不是我订的东西。' },
      { de: 'Ich bin sehr unzufrieden mit dem Service.', zh: '我对这次服务很不满意。' },
      { de: 'Wie kann ich eine Reklamation einreichen?', zh: '我该怎么提交投诉？' },
    ]
  },
];
