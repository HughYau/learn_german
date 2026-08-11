// 第 6 单元：读懂日常
export default {
  id: 'u6', num: '6', color: 'green', shape: 'circle',
  de: 'Lies mal!', zh: '读懂日常',
  desc: '招牌、标签、菜单——德语长词看着吓人，其实都是小词拼出来的。学会拆解，阅读能力立刻翻倍。',
  kann: [
    { de: 'Ich kann lange zusammengesetzte Wörter in ihre Bestandteile zerlegen und die Bedeutung erschließen.', zh: '我能把德语复合长词拆解成小词，猜出大意。' },
    { de: 'Ich kann Öffnungszeiten auf Schildern lesen und verstehen.', zh: '我能读懂招牌上的营业时间信息。' },
    { de: 'Ich kann nach dem Eingang oder einer anderen Örtlichkeit fragen.', zh: '我能询问入口等地点在哪儿。' },
  ],
  lessons: [
    {
      id: 'u6l1', title: '招牌、标签与菜单', de: 'Schilder und Etiketten',
      intro: '德语最大的"心理阴影"就是那些长得吓人的复合词。这一课教你一个作弊码：从后往前拆解，长词秒变几个你已经认识的小词。再顺便认清超市标签和餐厅菜单上最常见的那些词。',
      sections: [
        {
          type: 'vocab', title: '招牌与标识', sub: '',
          items: [
            { de: 'Eingang', art: 'der', pl: 'Eingänge', zh: '入口', en: 'entrance', ex: 'Wo ist der Eingang?', exZh: '入口在哪儿？' },
            { de: 'Ausgang', art: 'der', pl: 'Ausgänge', zh: '出口', en: 'exit', ex: 'Der Ausgang ist dort.', exZh: '出口在那边。' },
            { de: 'Notausgang', art: 'der', pl: 'Notausgänge', zh: '紧急出口', en: 'emergency exit', ex: 'Der Notausgang ist links.', exZh: '紧急出口在左边。' },
            { de: 'ziehen', zh: '拉（门上常见标识）', en: 'to pull', ex: 'Bitte ziehen.', exZh: '请拉。' },
            { de: 'drücken', zh: '推（门上常见标识）', en: 'to push', ex: 'Bitte drücken.', exZh: '请推。' },
            { de: 'geöffnet', zh: '营业中，开着的', en: 'open', ex: 'Die Bäckerei ist geöffnet.', exZh: '面包店营业中。' },
            { de: 'geschlossen', zh: '已关门，打烊', en: 'closed', ex: 'Der Supermarkt ist geschlossen.', exZh: '超市已经打烊了。' },
            { de: 'Öffnungszeiten', art: 'die', zh: '营业时间', en: 'opening hours', note: '只有复数形式使用', ex: 'Die Öffnungszeiten sind lang.', exZh: '营业时间很长。' },
            { de: 'kostenlos', zh: '免费的', en: 'free of charge', ex: 'Das WLAN ist kostenlos.', exZh: '无线网络免费。' },
            { de: 'Angebot', art: 'das', pl: 'Angebote', zh: '特价，优惠', en: 'special offer', ex: 'Das Angebot ist super.', exZh: '这个优惠很划算。' },
            { de: 'Rabatt', art: 'der', pl: 'Rabatte', zh: '折扣', en: 'discount', ex: 'Zehn Prozent Rabatt!', exZh: '九折优惠！' },
            { de: 'gesperrt', zh: '封闭的，禁止通行的', en: 'closed off/blocked', ex: 'Die Straße ist gesperrt.', exZh: '这条路封闭了。' },
          ]
        },
        {
          type: 'vocab', title: '食品标签与菜单', sub: '',
          items: [
            { de: 'Zutaten', art: 'die', zh: '配料', en: 'ingredients', note: '只有复数形式', ex: 'Die Zutaten sind auf der Packung.', exZh: '配料表在包装上。' },
            { de: 'mindestens haltbar bis', zh: '最佳赏味期至……（标签上常缩写 MHD）', en: 'best before', ex: 'Mindestens haltbar bis Freitag.', exZh: '最佳赏味期至周五。' },
            { de: 'bio', zh: '有机的', en: 'organic', ex: 'Der Apfel ist bio.', exZh: '这个苹果是有机的。' },
            { de: 'Vorspeise', art: 'die', pl: 'Vorspeisen', zh: '前菜，开胃菜', en: 'starter', ex: 'Die Vorspeise ist lecker.', exZh: '这道前菜很好吃。' },
            { de: 'Hauptgericht', art: 'das', pl: 'Hauptgerichte', zh: '主菜', en: 'main course', ex: 'Das Hauptgericht kostet zwölf Euro.', exZh: '这道主菜要十二欧元。' },
            { de: 'Nachtisch', art: 'der', pl: 'Nachtische', zh: '餐后甜点', en: 'dessert', ex: 'Der Nachtisch ist süß.', exZh: '这份甜点很甜。' },
            { de: 'Getränk', art: 'das', pl: 'Getränke', zh: '饮料', en: 'drink', ex: 'Das Getränk ist kalt.', exZh: '这杯饮料是冰的。' },
            { de: 'Speisekarte', art: 'die', pl: 'Speisekarten', zh: '菜单', en: 'menu', ex: 'Die Speisekarte ist hier.', exZh: '菜单在这儿。' },
          ]
        },
        {
          type: 'grammar', title: '德语阅读的作弊码：复合词拆解', sub: '长词不可怕，都是小词拼出来的',
          html: `<p>德语最大的特点（也是最大的"心理阴影"）：单词可以无限拼接，看起来很长很吓人。但规律很简单——<b>德语复合词从后往前理解，最后一个词决定核心意思，前面的词只是修饰</b>：</p>
<table><tr><th>长词</th><th>拆解</th><th>意思</th></tr>
<tr><td class="hl">Öffnungszeiten</td><td class="hl">Öffnung（开门）+ Zeiten（时间）</td><td>营业时间</td></tr>
<tr><td class="hl">Hauptbahnhof</td><td class="hl">Haupt（主）+ Bahnhof（车站）</td><td>中央车站</td></tr>
<tr><td class="hl">Notausgang</td><td class="hl">Not（紧急）+ Ausgang（出口）</td><td>紧急出口</td></tr>
<tr><td class="hl">Hauptgericht</td><td class="hl">Haupt（主）+ Gericht（菜）</td><td>主菜</td></tr></table>
<p>看到一个不认识的长词，别慌，先找里面藏着的<mark>小词</mark>——很可能你已经认识其中一半。这条技巧能让你"能读懂的德语"范围立刻扩大好几倍。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">MHD 不是"过期"，是"最佳赏味期"。</b><mark>mindestens haltbar bis</mark>（常缩写 MHD）后面的日期，意思是"至少保质到这天"，过了这个日期食品通常还能吃，只是口感、颜色可能不是最佳状态——不像英文 expiration date 那么绝对。真正要小心的是酸奶、肉类等标注 <b>zu verbrauchen bis</b>（"必须在此日期前食用"）的食品，这个日期才是硬性红线。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '看到门上贴着 "Notausgang"，拆开来看是什么意思？', options: ['Not(紧急) + Ausgang(出口) = 紧急出口', 'Not(不) + Ausgang(出口) = 非出口', '这是店名'], answer: 0, why: '复合词从后往前理解：Ausgang 是核心词"出口"，Not 修饰为"紧急"。' },
        { type: 'mcq', q: '商店门上写着 "geschlossen"，说明？', options: ['已经关门了', '正在营业', '免费入场'], answer: 0, why: 'geschlossen = 关闭的，反义词是 geöffnet（营业中）。' },
        { type: 'cloze', zhHint: '牛奶盒上印着最佳赏味期。', before: 'Auf der Milch steht', after: 'haltbar bis.', options: ['mindestens', 'kostenlos', 'gesperrt'], answer: 0, why: 'mindestens haltbar bis（MHD）是食品标签上最常见的保质期表达。' },
        { type: 'mcq', q: 'MHD 过期后的食品通常意味着？', options: ['大多还能吃，只是口感可能不是最佳', '必须立刻扔掉', '完全变质有毒'], answer: 0, why: 'mindestens haltbar bis 只是"最佳赏味期"，不是硬性到期日，真正的硬红线是 zu verbrauchen bis。' },
        { type: 'order', zh: '菜单上有主菜和甜点。', words: ['Die', 'Speisekarte', 'hat', 'Hauptgerichte', 'und', 'Nachtisch'], why: '陈述句：主语 Die Speisekarte + 变位动词 hat 在第二位。' },
        { type: 'match', pairs: [['der Eingang', '入口'], ['ziehen', '拉'], ['drücken', '推'], ['kostenlos', '免费的']] },
        { type: 'listen', audio: 'Die Öffnungszeiten sind von neun bis achtzehn Uhr.', q: '这句话在说什么？', options: ['营业时间是9点到18点', '这家店永久关闭', '入场免费'], answer: 0, why: 'Öffnungszeiten = 营业时间，von...bis... = 从……到……。' },
        { type: 'speak', de: 'Wo ist der Eingang, bitte?', zh: '请问入口在哪里？' },
      ],
      task: { title: '今天的生活任务', desc: '路上或超市里找一个复合长词（招牌、菜单、标签都行），试着拆成你认识的小词猜出意思。今天用这个技巧"破译"至少一个新词。' }
    },
  ]
};
