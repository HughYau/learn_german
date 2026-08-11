// 听力材料库：车站广播、店铺提示、语音留言、天气预报、新闻简讯、预约电话……
// 全部用浏览器 TTS 朗读（js/audio.js），不需要音频文件。
// 语法分级红线：A1 只用 u0-u11 语法（现在时/情态动词/命令式Sie/es gibt，无 Perfekt、无从句）；
// A2 可用 ≤u23（Perfekt、weil/dass/wenn、反身、比较级、被动现在时）；B1 可用全部 ≤u33。
export const listeningItems = [
  /* ---------------- A1 × 7 ---------------- */
  {
    id: 'h1', level: 'A1', type: 'durchsage', title: '车站广播：奥古斯都广场到站',
    text: 'Nächste Haltestelle: Augustusplatz. Hier ist die Universität. Die Straßenbahn fährt gleich weiter. Bitte steigen Sie schnell aus.',
    questions: [
      { q: '下一站是哪里？', options: ['奥古斯都广场（大学附近）', '中央火车站', '动物园'], answer: 0, why: '广播开头 "Nächste Haltestelle: Augustusplatz" 直接报出站名。' },
      { q: '广播提醒乘客做什么？', options: ['买票', '系好安全带', '尽快下车'], answer: 2, why: '"Bitte steigen Sie schnell aus" 是提醒乘客快下车。' },
    ],
    dictation: 'Die Straßenbahn fährt gleich weiter.',
  },
  {
    id: 'h2', level: 'A1', type: 'durchsage', title: '车站广播：6路公交晚点',
    text: 'Der Bus Linie sechs hat heute zehn Minuten Verspätung. Der Bus fällt nicht aus. Bitte warten Sie an der Haltestelle.',
    questions: [
      { q: '6路公交车怎么了？', options: ['取消了', '晚点十分钟', '提前到了'], answer: 1, why: '"hat...zehn Minuten Verspätung" 就是晚点十分钟。' },
      { q: '乘客应该怎么做？', options: ['换乘地铁', '在车站等待', '走路去下一站'], answer: 1, why: '"Bitte warten Sie an der Haltestelle" 让乘客在车站等。' },
    ],
    dictation: 'Der Bus fällt nicht aus.',
  },
  {
    id: 'h3', level: 'A1', type: 'ansage', title: '超市广播：即将打烊',
    text: 'Liebe Kundinnen und Kunden, unser Geschäft schließt in fünfzehn Minuten. Bitte gehen Sie jetzt zur Kasse. Vielen Dank für Ihren Einkauf!',
    questions: [
      { q: '商店广播在说什么？', options: ['商店在打折', '收银台坏了', '商店十五分钟后关门'], answer: 2, why: '"schließt in fünfzehn Minuten" 是十五分钟后打烊。' },
      { q: '顾客现在该去哪里？', options: ['出口', '收银台', '服务台'], answer: 1, why: '"Bitte gehen Sie jetzt zur Kasse" 让顾客现在去收银台。' },
    ],
    dictation: 'Bitte gehen Sie jetzt zur Kasse.',
  },
  {
    id: 'h4', level: 'A1', type: 'ansage', title: '诊所广播：叫号看诊',
    text: 'Herr Wagner, bitte kommen Sie jetzt ins Zimmer drei. Frau Doktor Klein wartet auf Sie.',
    questions: [
      { q: '这段广播在叫谁？', options: ['瓦格纳先生', '克莱恩医生', '护士'], answer: 0, why: '开头直接叫名字 "Herr Wagner"。' },
      { q: '瓦格纳先生应该去哪儿？', options: ['药房', '三号诊室', '前台'], answer: 1, why: '"ins Zimmer drei" 就是三号诊室。' },
    ],
    dictation: 'Frau Doktor Klein wartet auf Sie.',
  },
  {
    id: 'h5', level: 'A1', type: 'nachricht', title: '语音留言：周六派对',
    text: 'Hallo, hier ist Lena. Ich habe eine Frage zu deiner Party am Samstag. Kannst du mich bitte zurückrufen? Meine Nummer hast du ja. Bis bald!',
    questions: [
      { q: 'Lena 打电话是为了什么？', options: ['取消约会', '问周六派对的事', '借东西'], answer: 1, why: '"eine Frage zu deiner Party am Samstag" 说明是问派对的事。' },
      { q: 'Lena 希望对方做什么？', options: ['发短信', '来接她', '回电话给她'], answer: 2, why: '"Kannst du mich bitte zurückrufen?" 是请对方回电话。' },
    ],
    dictation: 'Kannst du mich bitte zurückrufen?',
  },
  {
    id: 'h6', level: 'A1', type: 'dialog', title: '面包店对话：点餐',
    text: 'A: Guten Tag! Was möchten Sie? B: Ich hätte gern zwei Brötchen und einen Kaffee. A: Das macht drei Euro fünfzig. B: Hier, bitte. Vielen Dank!',
    questions: [
      { q: '顾客点了什么？', options: ['一个蛋糕和一杯茶', '三个面包', '两个小面包和一杯咖啡'], answer: 2, why: '"zwei Brötchen und einen Kaffee" 就是两个小面包和一杯咖啡。' },
      { q: '一共要付多少钱？', options: ['三欧元五十分', '两欧元', '五欧元'], answer: 0, why: '"Das macht drei Euro fünfzig"。' },
    ],
    dictation: 'Ich hätte gern zwei Brötchen und einen Kaffee.',
  },
  {
    id: 'h7', level: 'A1', type: 'wetter', title: '天气预报：莱比锡今日天气',
    text: 'Guten Morgen! Hier ist das Wetter für Leipzig. Heute ist es kalt und windig. Am Nachmittag regnet es. Die Temperatur ist fünf Grad.',
    questions: [
      { q: '今天天气怎么样？', options: ['冷而且有风', '热而且晴朗', '下雪'], answer: 0, why: '"kalt und windig" 就是冷又有风。' },
      { q: '下午会怎样？', options: ['出太阳', '起雾', '下雨'], answer: 2, why: '"Am Nachmittag regnet es" 下午会下雨。' },
    ],
    dictation: 'Die Temperatur ist fünf Grad.',
  },

  /* ---------------- A2 × 7 ---------------- */
  {
    id: 'h8', level: 'A2', type: 'durchsage', title: '车站广播：4路因事故绕行',
    text: 'Liebe Fahrgäste, die Linie vier hat heute Verspätung, weil es einen Unfall auf der Straße gibt. Steigen Sie bitte in den Bus um. Der Bus wartet vor dem Hauptbahnhof.',
    questions: [
      { q: '为什么4路晚点？', options: ['司机生病了', '路上出了事故', '车坏了'], answer: 1, why: '"weil es einen Unfall auf der Straße gibt" 说明原因是发生了事故。' },
      { q: '广播建议乘客怎么做？', options: ['换乘公交车', '走路', '等下一班电车'], answer: 0, why: '"Steigen Sie bitte in den Bus um" 是让乘客换乘公交。' },
    ],
    dictation: 'Der Bus wartet vor dem Hauptbahnhof.',
  },
  {
    id: 'h9', level: 'A2', type: 'durchsage', title: '车站广播：扶梯故障',
    text: 'Die Rolltreppe ist heute ausgefallen. Techniker haben das Problem noch nicht repariert. Bitte benutzen Sie die Treppe.',
    questions: [
      { q: '发生了什么问题？', options: ['电梯着火了', '门锁坏了', '扶梯坏了'], answer: 2, why: '"Die Rolltreppe ist heute ausgefallen" 就是扶梯坏了。' },
      { q: '技术人员的情况是？', options: ['已经修好了', '还没修好', '明天来修'], answer: 1, why: '"haben das Problem noch nicht repariert" 说明还没修好。' },
    ],
    dictation: 'Bitte benutzen Sie die Treppe.',
  },
  {
    id: 'h10', level: 'A2', type: 'ansage', title: '超市广播：收银台关闭',
    text: 'Liebe Kundinnen und Kunden, wir möchten Ihnen mitteilen, dass unsere Kassen drei und vier heute geschlossen sind. Bitte gehen Sie zu Kasse eins oder zwei. Wir entschuldigen uns für die Unannehmlichkeiten.',
    questions: [
      { q: '广播通知了什么？', options: ['三号和四号收银台关闭', '商店提前关门', '正在打折'], answer: 0, why: '"dass unsere Kassen drei und vier heute geschlossen sind"。' },
      { q: '顾客应该去哪个收银台？', options: ['三号', '一号或二号', '四号'], answer: 1, why: '"Bitte gehen Sie zu Kasse eins oder zwei"。' },
    ],
    dictation: 'Bitte gehen Sie zu Kasse eins oder zwei.',
  },
  {
    id: 'h11', level: 'A2', type: 'nachricht', title: '语音留言：取消约会',
    text: 'Hallo Jonas, hier ist Mia. Ich habe schlechte Nachrichten: Ich muss unseren Termin am Mittwoch absagen. Können wir uns am Freitag treffen? Ruf mich bitte zurück.',
    questions: [
      { q: 'Mia 打电话说了什么？', options: ['她要迟到', '她要取消周三的约会', '她生病了'], answer: 1, why: '"Ich muss unseren Termin am Mittwoch absagen"。' },
      { q: 'Mia 提议什么？', options: ['取消所有计划', '改到下周', '周五见面'], answer: 2, why: '"Können wir uns am Freitag treffen?"。' },
    ],
    dictation: 'Ruf mich bitte zurück.',
  },
  {
    id: 'h12', level: 'A2', type: 'dialog', title: '药店对话：买头疼药',
    text: 'A: Guten Tag, haben Sie etwas gegen Kopfschmerzen? B: Ja, diese Tabletten sind gut. Sie sind stärker als die anderen. A: Prima, die nehme ich. Was kosten die? B: Das kostet sechs Euro fünfzig.',
    questions: [
      { q: '顾客想买什么？', options: ['感冒药', '创可贴', '治头疼的药'], answer: 2, why: '"etwas gegen Kopfschmerzen" 是治头疼的药。' },
      { q: '药店推荐的药怎么样？', options: ['比其他的药效更强', '比其他的药便宜', '已经卖完了'], answer: 0, why: '"Sie sind stärker als die anderen"。' },
    ],
    dictation: 'Was kosten die?',
  },
  {
    id: 'h13', level: 'A2', type: 'wetter', title: '天气预报：周末转暖',
    text: 'Am Wochenende wird es in Leipzig wärmer. Gestern hat es noch geregnet, aber morgen scheint die Sonne. Die Temperatur steigt auf achtzehn Grad. Abends wird es aber wieder kühler, weil der Wind aus dem Norden kommt.',
    questions: [
      { q: '周末天气趋势是？', options: ['变暖', '变冷', '一直下雨'], answer: 0, why: '"wird es in Leipzig wärmer" 是变暖。' },
      { q: '晚上为什么会变凉？', options: ['因为下雪', '因为在山区', '因为刮北风'], answer: 2, why: '"weil der Wind aus dem Norden kommt"。' },
    ],
    dictation: 'Die Temperatur steigt auf achtzehn Grad.',
  },
  {
    id: 'h14', level: 'A2', type: 'termin', title: '预约电话：牙医提醒',
    text: 'Guten Tag, hier spricht die Zahnarztpraxis Doktor Meier. Wir möchten Sie an Ihren Termin erinnern: morgen um vierzehn Uhr dreißig. Bitte bringen Sie Ihre Versichertenkarte mit. Wenn Sie den Termin nicht wahrnehmen können, rufen Sie uns bitte an.',
    questions: [
      { q: '这通电话在提醒什么？', options: ['药已经准备好了', '明天十四点半的预约', '诊所搬家了'], answer: 1, why: '"Wir möchten Sie an Ihren Termin erinnern: morgen um vierzehn Uhr dreißig"。' },
      { q: '病人需要带什么？', options: ['保险卡', '现金', '转诊单'], answer: 0, why: '"Bitte bringen Sie Ihre Versichertenkarte mit"。' },
    ],
    dictation: 'Bitte bringen Sie Ihre Versichertenkarte mit.',
  },

  /* ---------------- B1 × 7 ---------------- */
  {
    id: 'h15', level: 'B1', type: 'durchsage', title: '车站广播：站台临时变更',
    text: 'Achtung, eine Durchsage für Reisende, die nach Berlin fahren möchten: Der Zug fährt heute wegen Bauarbeiten von Gleis zwölf ab, nicht von Gleis acht. Wir bitten um Ihr Verständnis.',
    questions: [
      { q: '这段广播是给谁听的？', options: ['要去慕尼黑的旅客', '所有留在车站的人', '要去柏林的旅客'], answer: 2, why: '"für Reisende, die nach Berlin fahren möchten"。' },
      { q: '为什么站台改变了？', options: ['因为天气', '因为施工', '因为罢工'], answer: 1, why: '"wegen Bauarbeiten" 说明是因为施工。' },
    ],
    dictation: 'Wir bitten um Ihr Verständnis.',
  },
  {
    id: 'h16', level: 'B1', type: 'ansage', title: '商店公告：周日营业',
    text: 'Liebe Kundinnen und Kunden, ab sofort ist unser Geschäft auch sonntags geöffnet. Diese Entscheidung wurde vom Management getroffen, weil viele Kunden am Wochenende einkaufen möchten. Wir freuen uns auf Ihren Besuch.',
    questions: [
      { q: '这家店宣布了什么变化？', options: ['商店周日也营业', '商店周日关门', '价格上涨'], answer: 0, why: '"ab sofort ist unser Geschäft auch sonntags geöffnet"——sonntags = 每逢周日。' },
      { q: '做这个决定的原因是？', options: ['员工要求的', '很多顾客想在周末购物', '政府规定'], answer: 1, why: '"weil viele Kunden am Wochenende einkaufen möchten"。' },
    ],
    dictation: 'Wir freuen uns auf Ihren Besuch.',
  },
  {
    id: 'h17', level: 'B1', type: 'nachricht', title: '语音留言：邻居求助',
    text: 'Hallo Frau Hoffmann, hier ist Paul vom Nachbarhaus. Ich wollte fragen, ob Sie mir helfen könnten. Mein Schlüssel ist kaputt, und ich komme nicht in die Wohnung. Wenn Sie Zeit hätten, könnten Sie mich zurückrufen?',
    questions: [
      { q: 'Paul 遇到了什么问题？', options: ['忘记带钱包', '钥匙坏了，进不了家门', '邻居家漏水'], answer: 1, why: '"Mein Schlüssel ist kaputt, und ich komme nicht in die Wohnung"。' },
      { q: 'Paul 希望 Frau Hoffmann 做什么？', options: ['借她的钥匙', '帮忙叫锁匠', '有空的话回电话'], answer: 2, why: '"Wenn Sie Zeit hätten, könnten Sie mich zurückrufen?"。' },
    ],
    dictation: 'Mein Schlüssel ist kaputt, und ich komme nicht in die Wohnung.',
  },
  {
    id: 'h18', level: 'B1', type: 'dialog', title: '同事对话：聊天气新闻',
    text: 'A: Hast du gehört? Laut der Zeitung soll es nächste Woche wieder kälter werden. B: Ja, einerseits ist das schade, weil ich Urlaub habe, aber andererseits brauchen die Pflanzen den Regen.',
    questions: [
      { q: '报纸上说下周天气会怎样？', options: ['变得更热', '一直晴朗', '又变冷'], answer: 2, why: '"soll es nächste Woche wieder kälter werden"。' },
      { q: 'B 为什么说"一方面可惜"？', options: ['因为他正好在休假', '因为他要搬家', '因为他讨厌下雨'], answer: 0, why: '"einerseits ist das schade, weil ich Urlaub habe"。' },
    ],
    dictation: 'Hast du gehört?',
  },
  {
    id: 'h19', level: 'B1', type: 'wetter', title: '天气预报：一周天气+花粉提醒',
    text: 'Die Wettervorhersage für die neue Woche: Am Montag bleibt es bewölkt, aber ab Dienstag wird es sonniger, als es diese Woche war. Menschen, die empfindlich auf Pollen reagieren, sollten am Mittwoch besonders vorsichtig sein, weil die Pollenbelastung hoch ist.',
    questions: [
      { q: '周二起天气会怎样？', options: ['比这周更晴朗', '比这周更冷', '开始下雪'], answer: 0, why: '"wird es sonniger, als es diese Woche war"。' },
      { q: '广播提醒哪类人要小心？', options: ['有心脏病的人', '怕冷的人', '对花粉敏感的人'], answer: 2, why: '"Menschen, die empfindlich auf Pollen reagieren"。' },
    ],
    dictation: 'weil die Pollenbelastung hoch ist.',
  },
  {
    id: 'h20', level: 'B1', type: 'nachrichten', title: '新闻简讯：水管爆裂封路',
    text: 'Und nun die Nachrichten für Leipzig: Wegen eines Wasserrohrbruchs bleibt die Karl-Liebknecht-Straße bis Freitag gesperrt. Laut der Stadtverwaltung wird die Reparatur schnell durchgeführt. Autofahrer sollen eine andere Strecke nehmen.',
    questions: [
      { q: '卡尔李卜克内西大街怎么了？', options: ['正在举办集市', '因水管爆裂封路到周五', '变成步行街'], answer: 1, why: '"Wegen eines Wasserrohrbruchs bleibt die Karl-Liebknecht-Straße bis Freitag gesperrt"。' },
      { q: '司机应该怎么做？', options: ['走别的路线', '耐心等待', '联系市政府'], answer: 0, why: '"Autofahrer sollen eine andere Strecke nehmen"。' },
    ],
    dictation: 'Laut der Stadtverwaltung wird die Reparatur schnell durchgeführt.',
  },
  {
    id: 'h21', level: 'B1', type: 'termin', title: '预约电话：研究所改约',
    text: 'Guten Tag, hier ist das Sekretariat des Instituts. Ich rufe an, weil wir Ihren Termin am Montag leider verschieben müssen. Wäre es möglich, dass Sie stattdessen am Mittwoch um zehn Uhr kommen? Bitte rufen Sie uns zurück, wenn das nicht passt.',
    questions: [
      { q: '秘书处打电话是为了什么？', options: ['通知面试结果', '确认地址', '需要改约周一的预约'], answer: 2, why: '"weil wir Ihren Termin am Montag leider verschieben müssen"。' },
      { q: '新的建议时间是？', options: ['周五十点', '周三十点', '周一下午'], answer: 1, why: '"am Mittwoch um zehn Uhr"。' },
    ],
    dictation: 'Bitte rufen Sie uns zurück, wenn das nicht passt.',
  },
];
