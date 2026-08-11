// 分级阅读文库：楼道告示、朋友消息、二手广告、邮件、博客、本地简讯、活动推荐……
// 语法分级红线：A1 只用 u0-u11 语法（现在时/情态动词/命令式/es gibt；无 Perfekt、无从句、无反身动词、无比较级、无被动态）；
// A2 可用 ≤u23（Perfekt、weil/dass/wenn、比较级、反身动词、被动现在时；仍无关系从句、无 zu 不定式、无 Konjunktiv II、无二格介词）；
// B1 可用全部 ≤u33（关系从句、zu 不定式、Konjunktiv II、二格介词 wegen/trotz/während 等）。
// gloss 只放课程 740 词之外的生词（正文里的超纲词——这正是阅读扩词汇的通道），已在课程内的词不进 gloss。
export const readingTexts = [
  /* ================= A1 × 4 ================= */
  {
    id: 'r1', level: 'A1', genre: 'aushang', title: '楼道告示：停水通知', de: 'Aushang im Hausflur',
    text: 'Liebe Mieterinnen und Mieter,\n\nam Mittwoch ist das Wasser von neun bis fünfzehn Uhr abgestellt. Die Wasserwerke reparieren ein Rohr in der Karl-Liebknecht-Straße. Bitte füllen Sie am Morgen etwas Wasser in Flaschen – für Kaffee und Tee. Der Aufzug funktioniert normal, nur das Wasser fehlt. Fragen? Der Hausmeister, Herr Busch, ist im Büro im Erdgeschoss. Seine Telefonnummer ist 0341 55 12 34.\n\nVielen Dank für Ihr Verständnis!\n\nIhre Hausverwaltung',
    gloss: {
      'Wasserwerke': '自来水公司',
      'Rohr': '（水）管',
      'Hausmeister': '楼管员，看门人',
      'Erdgeschoss': '一楼，底层',
      'Verständnis': '理解，体谅',
      'Hausverwaltung': '物业管理处',
      'abgestellt': '（水/电等）被切断的',
    },
    questions: [
      { q: '停水的时间是什么时候？', options: ['周三 9 点到 15 点', '周五全天', '周一早上'], answer: 0, why: '文中 "am Mittwoch ist das Wasser von neun bis fünfzehn Uhr abgestellt" 说明是周三 9 点到 15 点。' },
      { q: '住户应该怎么提前准备？', options: ['提前联系水管工', '早上先接好做咖啡和茶用的水', '搬去酒店住'], answer: 1, why: '"Bitte füllen Sie am Morgen etwas Wasser in Flaschen – für Kaffee und Tee." 是让住户早上先接水备用。' },
    ],
  },
  {
    id: 'r2', level: 'A1', genre: 'nachricht', title: '朋友消息：周六公园约会', de: 'Nachricht an eine Freundin',
    text: 'Anna: Hallo Wei! Wie geht’s? Hast du am Samstag Zeit?\nWei: Ja, ich habe Zeit. Was machst du?\nAnna: Ich möchte im Clara-Zetkin-Park spazieren gehen. Das Wetter ist schön und warm. Am Teich füttern die Kinder oft die Enten. Kommst du mit?\nWei: Gern! Um wie viel Uhr und wo?\nAnna: Um elf Uhr, direkt am Eingang bei der Haltestelle.\nWei: Perfekt, bis Samstag! Ich bringe meinen Hund mit.\nAnna: Super, bis dann!',
    gloss: {
      'Teich': '池塘',
      'füttern': '喂（食）',
      'Enten': '鸭子（复数）',
      'Hund': '狗',
    },
    questions: [
      { q: 'Anna 提议周六做什么？', options: ['去公园散步', '去看电影', '去买东西'], answer: 0, why: '"Ich möchte im Clara-Zetkin-Park spazieren gehen." 说明是去公园散步。' },
      { q: '两人约在哪里见面？', options: ['公园入口的车站旁', 'Anna 家门口', '咖啡馆里'], answer: 0, why: '"Um elf Uhr, direkt am Eingang bei der Haltestelle." 约在入口的车站旁。' },
    ],
  },
  {
    id: 'r3', level: 'A1', genre: 'anzeige', title: '二手广告：转让自行车', de: 'Kleinanzeige: Fahrrad',
    text: 'Fahrrad zu verkaufen\n\nIch verkaufe mein Fahrrad. Es ist blau und noch in einem guten Zustand. Das Fahrrad hat sieben Gänge und einen Korb vorne. Der Sattel ist neu, die Reifen sind auch neu. Ich habe jetzt ein Auto und brauche das Fahrrad nicht mehr.\n\nPreis: 80 Euro. Abholung ist in Connewitz möglich.\n\nBei Interesse schreiben Sie mir bitte eine Nachricht. Meine Nummer: 0176 234 567.',
    gloss: {
      'Gänge': '档位（复数）',
      'Korb': '（车）筐',
      'Sattel': '车座',
      'Reifen': '轮胎',
      'Abholung': '取货，自提',
      'Interesse': '兴趣，意向',
    },
    questions: [
      { q: '这辆自行车怎么样？', options: ['全新，从没骑过', '状况良好，车座和轮胎是新的', '坏了，需要维修'], answer: 1, why: '"noch in einem guten Zustand... Der Sattel ist neu, die Reifen sind auch neu." 说明状况良好、车座轮胎是新的。' },
      { q: '卖家为什么不需要这辆自行车了？', options: ['他搬家了', '他现在有车了', '他买了新自行车'], answer: 1, why: '"Ich habe jetzt ein Auto und brauche das Fahrrad nicht mehr." 说明他现在有车了。' },
    ],
  },
  {
    id: 'r4', level: 'A1', genre: 'tipp', title: '活动推荐：周末跳蚤市场', de: 'Veranstaltungstipp fürs Wochenende',
    text: 'Tipp fürs Wochenende: Flohmarkt am Karl-Heine-Kanal\n\nSuchen Sie ein Geschenk oder einfach ein bisschen Spaß am Samstag? Der Flohmarkt am Karl-Heine-Kanal ist von zehn bis sechzehn Uhr geöffnet. Dort gibt es viele Stände mit alten Büchern, Möbeln und Schmuck. Der Eintritt ist kostenlos.\n\nEs gibt auch Musik und einen Stand mit Kaffee und Kuchen. Kinder können dort spielen. Bringen Sie am besten Bargeld mit, denn nicht jeder Stand nimmt Karte.\n\nDer Flohmarkt ist perfekt für einen entspannten Samstagvormittag!',
    gloss: {
      'Flohmarkt': '跳蚤市场',
      'Schmuck': '首饰',
      'Bargeld': '现金',
      'Samstagvormittag': '周六上午',
    },
    questions: [
      { q: '跳蚤市场几点开门？', options: ['10 点到 16 点', '9 点到 17 点', '12 点到 18 点'], answer: 0, why: '"ist von zehn bis sechzehn Uhr geöffnet" 说明是 10 点到 16 点。' },
      { q: '去跳蚤市场最好带什么？', options: ['信用卡', '现金', '优惠券'], answer: 1, why: '"Bringen Sie am besten Bargeld mit, denn nicht jeder Stand nimmt Karte." 建议带现金。' },
    ],
  },

  /* ================= A2 × 4 ================= */
  {
    id: 'r5', level: 'A2', genre: 'email', title: '邮件：暖气坏了', de: 'E-Mail an die Vermieterin',
    text: 'Sehr geehrte Frau Hoffmann,\n\nich schreibe Ihnen, weil die Heizung in meinem Wohnzimmer seit gestern nicht mehr richtig funktioniert. Ich habe sie mehrmals ausgeschaltet und wieder eingeschaltet, aber das Problem ist nicht gelöst. Das Zimmer wird jetzt viel kälter als die anderen Räume in der Wohnung.\n\nIch habe schon im Internet nachgeschaut, aber ich glaube, dass ein Techniker kommen muss. Können Sie bitte jemanden schicken? Ich bin meistens nach 17 Uhr zu Hause, aber am Mittwoch habe ich einen Termin und bin erst um 19 Uhr zurück.\n\nDer Thermostat zeigt an, dass die Heizung auf Stufe drei steht, aber sie wird trotzdem nicht warm. Ich habe mich schon bei meinem Nachbarn erkundigt – bei ihm funktioniert die Heizung ganz normal.\n\nVielen Dank im Voraus für Ihre schnelle Hilfe!\n\nMit freundlichen Grüßen\nWei Zhang',
    gloss: {
      'ausgeschaltet': '关掉了（abstellen 的分词，此处指 ausschalten）',
      'eingeschaltet': '打开了（einschalten 的分词）',
      'Thermostat': '恒温器，温控阀',
      'Stufe': '档位，级别',
      'erkundigt': '打听，询问（sich erkundigen 的分词）',
      'im Voraus': '提前，事先',
    },
    questions: [
      { q: 'Wei 写邮件的原因是什么？', options: ['房租要涨价', '客厅暖气坏了', '邻居太吵'], answer: 1, why: '"weil die Heizung in meinem Wohnzimmer... nicht mehr richtig funktioniert" 说明是客厅暖气坏了。' },
      { q: 'Wei 周三几点才能到家？', options: ['17 点', '19 点', '21 点'], answer: 1, why: '"am Mittwoch habe ich einen Termin und bin erst um 19 Uhr zurück" 说明是 19 点。' },
      { q: 'Wei 怎么知道邻居家暖气没问题？', options: ['物业告诉他的', '他问了邻居，邻居家暖气正常', '他自己检查了邻居家'], answer: 1, why: '"Ich habe mich schon bei meinem Nachbarn erkundigt – bei ihm funktioniert die Heizung ganz normal." 说明是问了邻居。' },
    ],
  },
  {
    id: 'r6', level: 'A2', genre: 'blog', title: '博客：莱比锡的一个周六', de: 'Blogeintrag: Ein Samstag in Leipzig',
    text: 'Mein Samstag in Leipzig\n\nHeute möchte ich von meinem Samstag erzählen. Ich bin früh aufgestanden, weil ich zuerst auf den Wochenmarkt am Augustusplatz gehen wollte. Dort habe ich frisches Gemüse und Brot gekauft. Der Markt war voller Menschen, aber die Atmosphäre war schöner als in einem normalen Supermarkt.\n\nDanach habe ich mich mit Anna im Café Konsum getroffen. Wir haben Kaffee getrunken und über unsere Arbeit im Institut gesprochen. Anna hat mir erzählt, dass sie am Wochenende oft mit dem Fahrrad zum Cospudener See fährt. Das klingt nach einer guten Idee für nächsten Sommer!\n\nAm Nachmittag bin ich durch den Clara-Zetkin-Park spaziert. Die Blätter werden gerade bunt, und es war ziemlich windig. Ich habe mich sehr wohlgefühlt, weil Leipzig im Herbst besonders gemütlich ist.\n\nAbends habe ich noch ein bisschen für meinen Deutschkurs gelernt. Ein guter, ruhiger Tag!',
    gloss: {
      'Wochenmarkt': '周末集市',
      'Atmosphäre': '氛围，气氛',
      'windig': '有风的',
      'wohlgefühlt': '感觉很舒服（sich wohlfühlen 的分词）',
      'gemütlich': '惬意的，舒适的',
      'Blätter': '树叶（复数）',
    },
    questions: [
      { q: 'Wei 一早去市场做什么？', options: ['买新鲜蔬菜和面包', '找工作', '看医生'], answer: 0, why: '"Dort habe ich frisches Gemüse und Brot gekauft." 说明是买菜和面包。' },
      { q: 'Anna 说她周末常做什么？', options: ['在家看书', '骑车去科斯普登湖', '去健身房'], answer: 1, why: '"sie am Wochenende oft mit dem Fahrrad zum Cospudener See fährt" 说明是骑车去湖边。' },
      { q: 'Wei 为什么觉得莱比锡的秋天特别舒服？', options: ['因为公园树叶变色、气氛惬意', '因为秋天不下雨', '因为秋天没有游客'], answer: 0, why: '"Ich habe mich sehr wohlgefühlt, weil Leipzig im Herbst besonders gemütlich ist." 结合前文树叶变色的描写。' },
    ],
  },
  {
    id: 'r7', level: 'A2', genre: 'meldung', title: '本地简讯：9 路电车临时改道', de: 'Lokalmeldung: Linie 9',
    text: 'Leipzig aktuell: Straßenbahn-Linie 9 ändert Route\n\nWegen Bauarbeiten am Connewitzer Kreuz fährt die Linie 9 ab Montag eine andere Strecke. Die Haltestelle „Connewitzer Kreuz“ wird bis Ende des Monats nicht bedient. Fahrgäste sollen stattdessen an der Haltestelle „Bornaische Straße“ aussteigen und den Rest zu Fuß gehen.\n\nDie LVB teilt mit, dass die Bauarbeiten notwendig sind, weil die alten Gleise beschädigt sind. Ein Sprecher sagte, dass die Arbeiten normalerweise vier Wochen dauern, aber bei schlechtem Wetter kann es länger dauern als geplant.\n\nErsatzbusse werden in dieser Zeit eingesetzt. Sie fahren alle zehn Minuten und sind kostenlos für Fahrgäste mit gültigem Ticket. Die Ersatzbusse halten an den gleichen Haltestellen wie sonst die Straßenbahn, nur eben nicht am Connewitzer Kreuz. Bei Fragen kann man sich beim Kundenservice der LVB melden.\n\nDie Stadt bittet alle Fahrgäste um Geduld.',
    gloss: {
      'Bauarbeiten': '施工，建筑工程',
      'Gleise': '轨道（复数）',
      'beschädigt': '损坏的',
      'Ersatzbusse': '替代班车（复数）',
      'Fahrgäste': '乘客（复数）',
      'Geduld': '耐心',
      'Sprecher': '发言人',
    },
    questions: [
      { q: '9 路电车为什么临时改道？', options: ['因为堵车', '因为在进行施工', '因为司机罢工'], answer: 1, why: '"Wegen Bauarbeiten am Connewitzer Kreuz fährt die Linie 9... eine andere Strecke." 说明是因为施工。' },
      { q: '要去 Connewitzer Kreuz 的乘客应该怎么办？', options: ['改坐出租车', '在 Bornaische Straße 站下车，剩下的路走过去', '等下一趟车'], answer: 1, why: '"sollen stattdessen an der Haltestelle „Bornaische Straße“ aussteigen und den Rest zu Fuß gehen" 说明是这样处理。' },
      { q: '施工期间的替代交通是什么？', options: ['免费班车，每十分钟一趟', '出租车报销', '没有替代交通'], answer: 0, why: '"Ersatzbusse werden in dieser Zeit eingesetzt. Sie fahren alle zehn Minuten und sind kostenlos..." 说明是免费班车。' },
    ],
  },
  {
    id: 'r8', level: 'A2', genre: 'nachricht', title: '朋友消息：感冒了', de: 'Nachricht zwischen Freunden',
    text: 'Jonas: Hey Wei, wie geht’s? Hast du heute Abend noch Zeit für das Fußballspiel im Fernsehen?\nWei: Eigentlich schon, aber ich fühle mich nicht so gut. Ich glaube, ich habe mich erkältet.\nJonas: Oh nein! Seit wann geht es dir schlecht?\nWei: Seit gestern Abend. Ich habe schon zwei Tabletten genommen, aber mein Kopf tut immer noch weh.\nJonas: Hast du auch Fieber?\nWei: Ein bisschen, aber nicht viel – knapp achtunddreißig Grad. Ich glaube, morgen geht es mir schon besser.\nJonas: Das klingt trotzdem nicht gut. Wenn du willst, bringe ich dir später Tee und ein bisschen Essen vorbei.\nWei: Das ist total lieb, danke! Aber ich glaube, ich schlafe heute früh, weil ich morgen fit sein muss.\nJonas: Verständlich. Erhol dich gut, dann wird es bestimmt schneller besser als gedacht. Falls nicht, sag mir Bescheid, dann komme ich morgen vorbei.\nWei: Danke, Jonas! Bis bald.',
    gloss: {
      'Fußballspiel': '足球比赛',
      'erkältet': '感冒了（sich erkälten 的分词）',
      'Verständlich': '可以理解',
      'Grad': '度（温度单位）',
    },
    questions: [
      { q: 'Wei 今晚感觉怎么样？', options: ['很好，想看球赛', '不舒服，好像感冒了', '很兴奋'], answer: 1, why: '"ich fühle mich nicht so gut. Ich glaube, ich habe mich erkältet." 说明是感冒了。' },
      { q: 'Wei 发烧到多少度？', options: ['36 度左右，没发烧', '38 度左右，低烧', '40 度，高烧'], answer: 1, why: '"Ein bisschen, aber nicht viel – knapp achtunddreißig Grad." 说明约 38 度。' },
      { q: 'Wei 打算今晚怎么做？', options: ['去看球赛', '早点睡觉，因为明天必须状态好', '去看医生'], answer: 1, why: '"ich glaube, ich schlafe heute früh, weil ich morgen fit sein muss." 说明是早点睡觉。' },
    ],
  },

  /* ================= B1 × 4 ================= */
  {
    id: 'r9', level: 'B1', genre: 'email', title: '邮件：卧室墙面潮湿投诉', de: 'E-Mail: Beschwerde wegen Feuchtigkeit',
    text: 'Betreff: Feuchtigkeit im Schlafzimmer\n\nSehr geehrte Frau Hoffmann,\n\nich möchte Sie auf ein Problem aufmerksam machen, das mir seit einigen Wochen Sorgen bereitet. An der Wand hinter meinem Bett, die direkt an die Außenwand grenzt, ist ein dunkler Fleck entstanden, der immer größer wird. Ich vermute, dass es sich um Schimmel handelt.\n\nTrotz regelmäßigen Lüftens – ich öffne die Fenster jeden Morgen und Abend – wird das Problem nicht besser. Ein Nachbar, dessen Wohnung im gleichen Stockwerk liegt, hat mir erzählt, dass er ein ähnliches Problem hatte, bevor die Fassade letztes Jahr saniert wurde.\n\nIch wäre Ihnen sehr dankbar, wenn Sie jemanden schicken könnten, der die Ursache prüft. Es wäre außerdem hilfreich zu wissen, ob es in diesem Gebäude schon früher ähnliche Fälle gegeben hat.\n\nWegen meiner Gesundheit – ich habe eine leichte Hausstauballergie – möchte ich das Problem möglichst schnell lösen. Außerdem möchte ich fragen, ob für die Zeit der Reparatur eine Mietminderung möglich ist.\n\nKönnten Sie mir bitte innerhalb der nächsten Woche Bescheid geben, wann ein Handwerker vorbeikommen kann? Ich bin fast jeden Nachmittag zu Hause und könnte den Termin auch kurzfristig ermöglichen.\n\nVielen Dank für Ihre Mühe.\n\nMit freundlichen Grüßen\nWei Zhang',
    gloss: {
      'Feuchtigkeit': '潮湿',
      'Fleck': '斑点，污渍',
      'Schimmel': '霉菌',
      'Mietminderung': '租金减免（因房屋缺陷依法少付房租）',
      'Fassade': '（建筑）外墙立面',
      'saniert': '翻新了的',
      'Hausstauballergie': '尘螨过敏',
      'Handwerker': '师傅，手艺人',
      'Stockwerk': '楼层',
    },
    questions: [
      { q: 'Wei 在信里描述了什么问题？', options: ['暖气坏了', '床后面的墙上出现了越来越大的深色霉斑', '邻居太吵'], answer: 1, why: '"An der Wand hinter meinem Bett... ist ein dunkler Fleck entstanden, der immer größer wird. Ich vermute, dass es sich um Schimmel handelt." 说明是墙上出现霉斑。' },
      { q: '邻居告诉 Wei 了什么？', options: ['他也有过类似问题，是在外墙翻新之前', '他从没遇到过这个问题', '他建议直接换房子'], answer: 0, why: '"Ein Nachbar... hat mir erzählt, dass er ein ähnliches Problem hatte, bevor die Fassade letztes Jahr saniert wurde." 说明邻居曾有类似问题。' },
      { q: 'Wei 在信中提出了什么请求？', options: ['立刻退租', '一周内告知何时能安排师傅上门', '要求降价一半'], answer: 1, why: '"Könnten Sie mir bitte innerhalb der nächsten Woche Bescheid geben, wann ein Handwerker vorbeikommen kann?" 说明是这个请求。' },
    ],
  },
  {
    id: 'r10', level: 'B1', genre: 'blog', title: '博客：在莱比锡的半年小结', de: 'Blogeintrag: Sechs Monate Leipzig',
    text: 'Sechs Monate Leipzig: eine kleine Bilanz\n\nVor sechs Monaten bin ich nach Leipzig gezogen, und rückblickend hätte ich nicht gedacht, dass ich mich hier so schnell wohlfühlen würde. Am Anfang war fast alles fremd: die Sprache, die Bürokratie, sogar das Brot, das hier viel dunkler ist als das, was ich aus meiner Heimat kenne.\n\nWas mir am meisten geholfen hat, war die Arbeit im Institut. Meine Kollegin Anna, die von Anfang an sehr geduldig mit mir war, hat mir gezeigt, wie man sich beim Bürgeramt anmeldet, wo man günstig einkauft und welche Buslinien wirklich zuverlässig sind. Ohne sie wäre der Start deutlich schwieriger gewesen.\n\nMittlerweile kenne ich mich in der Stadt gut aus. Ich weiß, welches Café am Wochenende die besten Croissants hat, und ich kann inzwischen sogar mit dem Vermieter über kleine Probleme diskutieren, ohne dass ich nach jedem dritten Wort ein Wörterbuch brauche.\n\nWas mich überrascht hat: Die Leipziger, deren Ruf manchmal als distanziert beschrieben wird, sind, sobald man sie besser kennt, sehr herzlich. Im Sommer, wenn überall am Kanal gegrillt wird, fühlt sich die Stadt fast wie ein großes Dorf an.\n\nNatürlich gibt es noch Dinge, die ich üben muss – vor allem, dass ich mich traue, auch komplizierte Sätze auf Deutsch zu sagen, ohne vorher im Kopf zu übersetzen. Aber ich bin zuversichtlich, dass das mit der Zeit von selbst kommt.',
    gloss: {
      'Bilanz': '总结，盘点',
      'Bürokratie': '官僚体系，行政手续',
      'geduldig': '有耐心的',
      'zuverlässig': '可靠的',
      'distanziert': '疏远的，有距离感的',
      'herzlich': '热情的，真诚的',
      'zuversichtlich': '有信心的',
      'Croissants': '牛角面包（复数）',
    },
    questions: [
      { q: 'Wei 对莱比锡的印象总体如何？', options: ['后悔搬来这里', '没想到自己能这么快适应，很有归属感', '觉得一直很陌生'], answer: 1, why: '"rückblickend hätte ich nicht gedacht, dass ich mich hier so schnell wohlfühlen würde." 说明没想到能这么快适应。' },
      { q: '谁在 Wei 刚到莱比锡时给了很大帮助？', options: ['房东', '同事 Anna', '邻居'], answer: 1, why: '"Meine Kollegin Anna, die von Anfang an sehr geduldig mit mir war, hat mir gezeigt..." 说明是同事 Anna。' },
      { q: 'Wei 觉得莱比锡人给人的刻板印象和实际相处后有什么不同？', options: ['传闻冷淡，熟悉后其实很热情', '传闻热情，实际上很冷淡', '和传闻完全一致，很冷淡'], answer: 0, why: '"Die Leipziger, deren Ruf manchmal als distanziert beschrieben wird, sind, sobald man sie besser kennt, sehr herzlich." 说明是这样。' },
    ],
  },
  {
    id: 'r11', level: 'B1', genre: 'meldung', title: '本地简讯：普拉格维茨新开 Konsum 超市', de: 'Lokalmeldung: Neuer Konsum in Plagwitz',
    text: 'Leipzig-Plagwitz bekommt einen neuen Konsum\n\nIn der Karl-Heine-Straße hat vergangene Woche ein neuer Konsum-Supermarkt eröffnet, der bereits am ersten Tag zahlreiche Kundinnen und Kunden anzog. Der Markt, dessen Fläche fast doppelt so groß ist wie die des alten Geschäfts, das vor zwei Jahren schließen musste, bietet neben dem üblichen Sortiment auch eine größere Auswahl an regionalen und biologischen Produkten.\n\nLaut der Geschäftsführung wurde bei der Planung besonders darauf geachtet, dass der neue Standort möglichst nachhaltig gebaut wird. So wird ein Teil der Energie durch Solarpanele auf dem Dach erzeugt, und Regenwasser wird gesammelt, um die Pflanzen vor dem Eingang zu bewässern.\n\n„Wir wollten einen Ort schaffen, an dem sich die Nachbarschaft trifft, nicht nur einen Laden, in den man schnell hineinläuft“, erklärte die Filialleiterin bei der Eröffnung. Deshalb gibt es im hinteren Bereich auch ein kleines Café, in dem man einen Kaffee trinken kann, während man auf Freunde wartet.\n\nAnwohner, die schon vor der Eröffnung neugierig waren, zeigten sich größtenteils zufrieden, auch wenn einige bemängelten, dass die Preise etwas höher sind als im Discounter um die Ecke. Die Geschäftsführung verspricht, dass es regelmäßig Angebote geben wird, damit sich auch Studierende den Einkauf leisten können.\n\nDer Konsum ist von Montag bis Samstag von sieben bis einundzwanzig Uhr geöffnet.',
    gloss: {
      'Solarpanele': '太阳能板（复数）',
      'Regenwasser': '雨水',
      'bewässern': '浇灌',
      'Geschäftsführung': '经营管理层',
      'nachhaltig': '可持续的',
      'Discounter': '折扣超市',
      'Anwohner': '附近居民（复数）',
      'Sortiment': '商品种类，货品范围',
    },
    questions: [
      { q: '新 Konsum 超市的可持续设计体现在哪里？', options: ['提供更多停车位', '屋顶太阳能板发电，收集雨水浇灌植物', '全部使用进口商品'], answer: 1, why: '"wird ein Teil der Energie durch Solarpanele auf dem Dach erzeugt, und Regenwasser wird gesammelt, um die Pflanzen... zu bewässern." 说明是这些设计。' },
      { q: '店内后部的小咖啡馆是为了什么目的？', options: ['额外赚钱', '打造一个邻里相聚的地方，而不只是快速采购的商店', '给员工休息用'], answer: 1, why: '"Wir wollten einen Ort schaffen, an dem sich die Nachbarschaft trifft, nicht nur einen Laden, in den man schnell hineinläuft" 说明是这个目的。' },
      { q: '部分居民对新超市有什么不满？', options: ['位置太远', '价格比附近的折扣超市略高', '营业时间太短'], answer: 1, why: '"einige bemängelten, dass die Preise etwas höher sind als im Discounter um die Ecke." 说明是价格略高。' },
    ],
  },
  {
    id: 'r12', level: 'B1', genre: 'tipp', title: '活动推荐：Gewandhaus 室内乐早场音乐会', de: 'Kulturtipp: Kammermusik im Gewandhaus',
    text: 'Kulturtipp: Kammermusik im Gewandhaus – auch für Neulinge\n\nWer in Leipzig wohnt, sollte sich früher oder später mit dem Gewandhausorchester beschäftigen – schließlich ist es eines der ältesten bürgerlichen Orchester der Welt. Wer aber glaubt, dass klassische Musik nur etwas für Kenner ist, sollte trotzdem einen Blick auf die Kammermusik-Matineen werfen, die einmal im Monat sonntags um elf Uhr im Mendelssohn-Saal stattfinden.\n\nAnders als bei den großen Abendkonzerten, bei denen der Saal oft voll besetzt ist, geht es hier vertrauter zu. Die Musikerinnen und Musiker erklären vor jedem Stück kurz, worum es geht und warum sie es ausgewählt haben – ideal für alle, die klassische Musik noch nicht so gut kennen, sich aber trauen möchten, sie auszuprobieren.\n\nDie Karten kosten deutlich weniger als für ein Abendkonzert, und wer unter 27 ist, bekommt an der Kasse häufig einen zusätzlichen Rabatt, wenn er seinen Studierendenausweis vorzeigt. Es lohnt sich, mindestens eine Woche im Voraus zu buchen, denn beliebte Termine sind schnell ausverkauft.\n\nEin Tipp von mir: Kommen Sie ruhig eine halbe Stunde früher, dann können Sie sich noch in Ruhe einen Kaffee im Foyer holen, bevor die Musik beginnt. Wer nach dem Konzert noch Lust auf ein Gespräch hat, findet meistens ein paar Leute, die sich vor dem Saal über das Gehörte austauschen.\n\nAuch wenn man am Anfang nicht jede Nuance versteht: Es lohnt sich, es einfach auszuprobieren.',
    gloss: {
      'Neulinge': '新手，新人（复数）',
      'Orchester': '管弦乐团',
      'Kammermusik-Matineen': '室内乐早场音乐会（周日上午场次）',
      'vertrauter': '更亲切、更随意的（vertraut 的比较级）',
      'Studierendenausweis': '学生证',
      'Foyer': '（剧院/音乐厅）休息大厅',
      'ausverkauft': '售罄的',
    },
    questions: [
      { q: '这个室内乐早场音乐会在什么时间举行？', options: ['每天晚上', '每月一次，周日上午 11 点', '只在圣诞节期间'], answer: 1, why: '"die Kammermusik-Matineen, die einmal im Monat sonntags um elf Uhr im Mendelssohn-Saal stattfinden." 说明是每月一次、周日上午 11 点。' },
      { q: '和晚场音乐会相比，这个早场音乐会有什么特点？', options: ['票价更贵', '气氛更随意亲切，音乐家会简短介绍曲目', '不允许迟到入场'], answer: 1, why: '"geht es hier vertrauter zu. Die Musikerinnen und Musiker erklären vor jedem Stück kurz, worum es geht..." 说明是这些特点。' },
      { q: '学生可以获得什么优惠？', options: ['免费入场', '出示学生证常可获得额外折扣', '优先座位'], answer: 1, why: '"wer unter 27 ist, bekommt an der Kasse häufig einen zusätzlichen Rabatt, wenn er seinen Studierendenausweis vorzeigt." 说明是这个优惠。' },
    ],
  },
];
