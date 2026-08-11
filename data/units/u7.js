// 第 7 单元：时间日期与预约
export default {
  id: 'u7', num: '7', color: 'blue', shape: 'square',
  de: 'Termine und Uhrzeit', zh: '时间日期与预约',
  desc: '从"几点"到"哪天"，德国人报时间有正式和口语两套说法——halb drei 到底是几点半，是中文母语者最容易踩的坑。这个单元教你读懂钟点日期，还能打电话约一个具体的见面时间。',
  kann: [
    { de: 'Ich kann die Uhrzeit formell und umgangssprachlich sagen und verstehen.', zh: '我能用正式和口语两种方式说出并听懂时间。' },
    { de: 'Ich kann „halb“ richtig verstehen und benutzen (halb neun = 8:30).', zh: '我能正确理解和使用“halb”（halb neun 是8点半）。' },
    { de: 'Ich kann am Telefon einen Termin vereinbaren, verschieben oder absagen.', zh: '我能在电话里约定、改期或取消一个预约。' },
    { de: 'Ich kann Zeitangaben mit um/am/im richtig benutzen.', zh: '我能正确使用 um/am/im 表达时间。' },
  ],
  lessons: [
    {
      id: 'u7l1', title: '现在几点？', de: 'Wie spät ist es?',
      intro: '德国人说时间有两套系统：写在车票、日历上的正式说法（14:30）,和日常说话时的口语说法（halb drei）。这一课把两套系统都学会，还有星期、月份和"今天/明天/昨天"这几个每天都用得上的词。中文母语者最容易在 halb 上栽跟头——它说的不是"三点半"，这一点必须专门练。',
      sections: [
        {
          type: 'vocab', title: '时间名词', sub: '',
          items: [
            { de: 'Uhr', art: 'die', pl: 'Uhren', zh: '钟，表；点钟', en: 'clock / o’clock', ex: 'Es ist acht Uhr.', exZh: '现在八点。' },
            { de: 'Zeit', art: 'die', pl: 'Zeiten', zh: '时间', en: 'time', ex: 'Hast du Zeit?', exZh: '你有时间吗？' },
            { de: 'Minute', art: 'die', pl: 'Minuten', zh: '分钟', en: 'minute', ex: 'Ich habe nur fünf Minuten.', exZh: '我只有五分钟。' },
            { de: 'Stunde', art: 'die', pl: 'Stunden', zh: '小时', en: 'hour', ex: 'Der Kurs dauert eine Stunde.', exZh: '这门课持续一小时。' },
            { de: 'Kalender', art: 'der', pl: 'Kalender', zh: '日历', en: 'calendar', ex: 'Ich habe einen neuen Kalender.', exZh: '我有一本新日历。' },
            { de: 'Woche', art: 'die', pl: 'Wochen', zh: '星期，周', en: 'week', ex: 'Die Woche hat sieben Tage.', exZh: '一周有七天。' },
            { de: 'Monat', art: 'der', pl: 'Monate', zh: '月，月份', en: 'month', ex: 'Der Monat hat dreißig Tage.', exZh: '这个月有三十天。' },
            { de: 'Jahr', art: 'das', pl: 'Jahre', zh: '年', en: 'year', ex: 'Das Jahr hat zwölf Monate.', exZh: '一年有十二个月。' },
            { de: 'früh', zh: '早的', en: 'early', ex: 'Das ist mir zu früh.', exZh: '这对我来说太早了。' },
            { de: 'spät', zh: '晚的，迟的', en: 'late', ex: 'Bin ich zu spät?', exZh: '我来晚了吗？' },
            { de: 'pünktlich', zh: '准时的', en: 'punctual', ex: 'Der Zug ist pünktlich.', exZh: '火车很准时。', note: '德国人非常看重这个词——约会迟到几分钟都最好提前说一声' },
          ]
        },
        {
          type: 'vocab', title: '星期', sub: 'Montag 到 Sonntag，德国的一周从周一开始',
          items: [
            { de: 'Montag', art: 'der', zh: '星期一', en: 'Monday', ex: 'Bis Montag!', exZh: '周一见！' },
            { de: 'Dienstag', art: 'der', zh: '星期二', en: 'Tuesday', ex: 'Der Termin ist am Dienstag.', exZh: '预约在周二。' },
            { de: 'Mittwoch', art: 'der', zh: '星期三', en: 'Wednesday', ex: 'Am Mittwoch arbeite ich lange.', exZh: '周三我要工作很久。' },
            { de: 'Donnerstag', art: 'der', zh: '星期四', en: 'Thursday', ex: 'Das Meeting ist am Donnerstag.', exZh: '会议在周四。' },
            { de: 'Freitag', art: 'der', zh: '星期五', en: 'Friday', ex: 'Am Freitag habe ich frei.', exZh: '周五我休息。' },
            { de: 'Samstag', art: 'der', zh: '星期六', en: 'Saturday', ex: 'Am Samstag schlafe ich lange.', exZh: '周六我睡懒觉。', note: '德国北部和东部（包括萨克森/莱比锡）也常说 Sonnabend，意思一样；南德和奥地利则只说 Samstag' },
            { de: 'Sonntag', art: 'der', zh: '星期日', en: 'Sunday', ex: 'Am Sonntag ist alles geschlossen.', exZh: '周日所有店都关门。' },
          ]
        },
        {
          type: 'vocab', title: '今天、明天、昨天', sub: '',
          items: [
            { de: 'heute', zh: '今天', en: 'today', ex: 'Heute ist Montag.', exZh: '今天是星期一。' },
            { de: 'morgen', zh: '明天', en: 'tomorrow', ex: 'Morgen habe ich einen Termin.', exZh: '明天我有一个预约。', note: '和 der Morgen（早上）拼写一样，但小写、不带冠词时是"明天"' },
            { de: 'übermorgen', zh: '后天', en: 'the day after tomorrow', ex: 'Übermorgen ist Freitag.', exZh: '后天是星期五。' },
            { de: 'gestern', zh: '昨天', en: 'yesterday', ex: 'Das Brot ist von gestern.', exZh: '这面包是昨天的。' },
            { de: 'nächste Woche', zh: '下周', en: 'next week', ex: 'Nächste Woche habe ich viel Zeit.', exZh: '下周我有很多时间。' },
          ]
        },
        {
          type: 'dialogue', title: '会议是几点？', scene: '下午在研究所办公室，Anna 问 Wei 现在几点，两人顺便确认下午会议的时间。',
          lines: [
            { sp: 'Anna', de: 'Wei, wie spät ist es gerade?', zh: 'Wei，现在几点了？' },
            { sp: 'Wei', de: 'Es ist Viertel nach zwei. Also 14:15 Uhr.', zh: '现在两点一刻。也就是14点15分。' },
            { sp: 'Anna', de: 'Ach, schon so spät! Das Meeting ist doch um halb drei.', zh: '啊，已经这么晚了！会议不是两点半吗。' },
            { sp: 'Wei', de: 'Halb drei? Das heißt 15:30, oder?', zh: '两点半？就是15点30分，对吧？' },
            { sp: 'Anna', de: 'Nein, nein! Halb drei ist 14:30 – zwei Uhr dreißig, nicht drei Uhr dreißig.', zh: '不不不！halb drei 是14点30分——两点三十分，不是三点三十分。' },
            { sp: 'Wei', de: 'Ach so! Auf Chinesisch sagen wir einfach "zwei Uhr dreißig".', zh: '原来如此！中文里我们就直接说"两点三十分"。' },
            { sp: 'Anna', de: 'Ja, das verwechseln viele Deutschlerner. Wir haben also noch fünfzehn Minuten.', zh: '是的，很多学德语的人都会搞混。那我们还有十五分钟。' },
            { sp: 'Wei', de: 'Gut, dann hole ich schnell noch einen Kaffee.', zh: '好，那我快去拿杯咖啡。' },
            { sp: 'Anna', de: 'Sei pünktlich! Um halb drei geht’s los.', zh: '要准时啊！两点半准时开始。' },
            { sp: 'Wei', de: 'Klar, bin in fünf Minuten wieder da.', zh: '好的，我五分钟就回来。' },
          ]
        },
        {
          type: 'grammar', title: '正式与口语：两套读时间的方法', sub: '从真实例句出发，再总结规则',
          html: `<p>德语报时间有两套系统。<b>正式读法</b>用在车票、日历、新闻播报里，直接念出小时和分钟，24小时制：</p>
<p class="de">Es ist <mark>14:30</mark> Uhr. → <b>vierzehn Uhr dreißig</b></p>
<p><b>口语读法</b>是日常对话里更常用的说法，围绕着"整点"和"半点"来描述，逻辑和中文完全不同：</p>
<table><tr><th>正式（24小时制）</th><th>口语</th><th>中文</th></tr>
<tr><td class="hl">14:00 Uhr</td><td class="hl">zwei Uhr</td><td>两点</td></tr>
<tr><td class="hl">14:15 Uhr</td><td class="hl">Viertel nach zwei</td><td>两点一刻</td></tr>
<tr><td class="hl">14:30 Uhr</td><td class="hl">halb drei</td><td>两点半</td></tr>
<tr><td class="hl">14:45 Uhr</td><td class="hl">Viertel vor drei</td><td>差一刻三点（两点四十五）</td></tr></table>
<p><b>nach</b>（之后）和 <b>vor</b>（之前）分别指向"刚过整点"和"快到整点"，方向不能弄反：<mark>Viertel nach zwei</mark> 是两点已经过了一刻钟；<mark>Viertel vor drei</mark> 是还差一刻钟到三点。</p>`
        },
        {
          type: 'grammar', title: '"halb" 的坑：说的是"半到"，不是"半过"', sub: '中文母语者最容易出错的一个词',
          html: `<p>中文说"两点半"，是"两点已经过了半个小时"。德语的 <b class="de">halb</b> 逻辑完全相反：它指向<b>下一个整点的一半</b>，也就是"还有半小时就到下一点了"。所以：</p>
<ul>
<li><mark>halb drei</mark>（字面：半到三点）= <b>2:30</b>，不是 3:30</li>
<li><mark>halb neun</mark>（字面：半到九点）= <b>8:30</b>，不是 9:30</li>
<li><mark>halb eins</mark>（字面：半到一点）= <b>12:30</b>，不是 1:30</li>
</ul>
<p>记忆窍门：<b>halb 后面的数字永远比实际的"点"大 1</b>——看到 halb drei，脑子里先反应"三点的前一小时半"，也就是两点半。这条规律没有例外，务必先练熟这几个例子再往下学。</p>
<p>补充：口语里同一逻辑还能表达 X点20分/40分——<mark>zwanzig nach neun</mark>（9点20分）、<mark>zwanzig vor zehn</mark>（9点40分，字面"差二十到十点"），原理和 halb 完全一样，都是围着最近的整点或半点数数。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">拿不准就用正式读法。</b>如果一时反应不过来口语说法，直接说 "vierzehn Uhr dreißig" 这种24小时制的正式读法完全没问题，德国人自己在电话里确认重要约会时也常常这样报时间，比口语说法更不容易产生歧义。约会时间务必确认两遍——德国人对准时非常认真，迟到超过5分钟最好提前发消息说一声。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"halb drei" 是几点？', options: ['2:30', '3:30', '3:00'], answer: 0, why: 'halb 指向"下一个整点的一半"，halb drei 是差半小时到三点，也就是两点半。' },
        { type: 'cloze', zhHint: '现在是八点一刻（8:15）。', before: 'Es ist Viertel', after: 'acht.', options: ['nach', 'vor', 'um'], answer: 0, why: '8:15 是八点已经过了一刻钟，用 nach（之后）；Viertel vor acht 才是7:45。' },
        { type: 'mcq', q: '"Viertel vor drei" 对应正式时间是？', options: ['14:45', '15:15', '14:15'], answer: 0, why: 'vor 表示"还差多久到某点"，vor drei 是还差一刻到三点，也就是2:45。' },
        { type: 'order', zh: '现在几点了？', words: ['Wie', 'spät', 'ist', 'es'], why: '这是德语问时间的固定句型：疑问副词 wie spät + 动词 ist + 主语 es。' },
        { type: 'match', pairs: [['Montag', '星期一'], ['Freitag', '星期五'], ['Samstag', '星期六'], ['Sonntag', '星期日']] },
        { type: 'listen', audio: 'Es ist halb neun.', q: '这句话说的是几点？', options: ['8:30', '9:30', '9:00'], answer: 0, why: 'halb neun = 差半小时到九点 = 8:30。' },
        { type: 'listen', audio: 'Der Termin ist um Viertel vor zehn.', q: '这句话是什么意思？', options: ['预约是9点45分。', '预约是10点15分。', '预约是10点30分。'], answer: 0, why: 'Viertel vor zehn = 还差一刻到十点 = 9:45。' },
        { type: 'speak', de: 'Es ist Viertel nach zwei. Wir haben noch fünfzehn Minuten.', zh: '现在两点一刻。我们还有十五分钟。' },
      ],
      task: { title: '今天的生活任务', desc: '今天看一眼手表或手机，试着用口语读法说出现在几点——如果正好是几点半，特别练习一下 "halb + 下一个数字" 这个说法，说给自己听或者说给朋友听。' }
    },
    {
      id: 'u7l2', title: '我们约个时间吧', de: 'Einen Termin vereinbaren',
      intro: '会说时间了，接下来要学会真正"约"一件事：提议一个时间、接受、或者改期。这一课学会打电话预约的完整流程，还有三个决定"什么时候"的介词——um、am、im，各管各的领地，分清楚以后再也不用瞎猜。',
      sections: [
        {
          type: 'vocab', title: '预约动词', sub: '',
          items: [
            { de: 'Termin', art: 'der', pl: 'Termine', zh: '预约，约定的时间', en: 'appointment', ex: 'Ich habe einen Termin um 10 Uhr.', exZh: '我十点有个预约。' },
            { de: 'vereinbaren', zh: '约定，商定', en: 'to arrange', ex: 'Können wir einen Termin vereinbaren?', exZh: '我们能约个时间吗？' },
            { de: 'passen', zh: '合适，来得及', en: 'to suit', ex: 'Passt dir Montag?', exZh: '你周一方便吗？' },
            { de: 'verschieben', zh: '改期，推迟', en: 'to reschedule', ex: 'Können wir den Termin verschieben?', exZh: '我们能改一下预约时间吗？' },
            { de: 'absagen', zh: '取消（约定）', en: 'to cancel', ex: 'Ich muss den Termin leider absagen.', exZh: '我很遗憾必须取消这个预约。' },
            { de: 'anrufen', zh: '打电话给……', en: 'to call', ex: 'Können Sie mich bitte anrufen?', exZh: '您能给我打个电话吗？' },
            { de: 'frei', zh: '有空的，空闲的', en: 'free/available', ex: 'Sind Sie am Donnerstag frei?', exZh: '您星期四有空吗？', note: '注意：Haben Sie frei? 问的是"您休息/不上班吗"，问有没有空用 Sind Sie frei? 或 Haben Sie Zeit?' },
            { de: 'besetzt', zh: '被占用的，没空的', en: 'busy/occupied', ex: 'Die Nummer ist immer besetzt.', exZh: '这个号码总是占线。' },
          ]
        },
        {
          type: 'vocab', title: '打电话预约', sub: '',
          items: [
            { de: 'Frisör', art: 'der', pl: 'Frisöre', zh: '理发师，理发店', en: 'hairdresser', ex: 'Ich brauche einen Termin beim Frisör.', exZh: '我需要一个理发的预约。', note: '也拼作 der Friseur' },
            { de: 'Frisörin', art: 'die', pl: 'Frisörinnen', zh: '女理发师', en: 'hairdresser (female)', ex: 'Die Frisörin ist sehr nett.', exZh: '这位理发师很亲切。' },
            { de: 'Salon', art: 'der', pl: 'Salons', zh: '（理发/美容）店', en: 'salon', ex: 'Der Salon öffnet um neun Uhr.', exZh: '理发店九点开门。' },
            { de: 'klingeln', zh: '（电话）响铃', en: 'to ring', ex: 'Das Telefon klingelt.', exZh: '电话响了。' },
            { de: 'Moment mal', zh: '稍等一下', en: 'just a moment', ex: 'Moment mal, wie spät ist es?', exZh: '稍等一下，现在几点了？' },
            { de: 'na klar', zh: '当然啦', en: 'of course', ex: 'Na klar, das passt!', exZh: '当然啦，这个时间没问题！' },
            { de: 'wunderbar', zh: '太好了，棒极了', en: 'wonderful', ex: 'Wunderbar, bis Donnerstag!', exZh: '太好了，周四见！' },
            { de: 'spätestens', zh: '最晚，至迟', en: 'at the latest', ex: 'Ich komme spätestens um zehn Uhr.', exZh: '我最晚十点到。' },
          ]
        },
        {
          type: 'dialogue', title: '打电话约理发', scene: 'Wei 给一家理发店打电话，想约一个理发的时间。',
          lines: [
            { sp: 'Empfangsdame', de: 'Frisörsalon Krause, guten Tag!', zh: '克劳泽理发店，您好！' },
            { sp: 'Wei', de: 'Guten Tag! Ich hätte gern einen Termin für einen Haarschnitt.', zh: '您好！我想预约一个理发。' },
            { sp: 'Empfangsdame', de: 'Gerne. Diese Woche oder nächste Woche?', zh: '好的。这周还是下周？' },
            { sp: 'Wei', de: 'Diese Woche, wenn möglich.', zh: '如果可能的话，这周。' },
            { sp: 'Empfangsdame', de: 'Moment mal... Am Mittwoch ist um 16 Uhr noch etwas frei, oder am Donnerstag um halb elf.', zh: '稍等……周三下午4点还有一个空档，或者周四10点半。' },
            { sp: 'Wei', de: 'Donnerstag um halb elf passt mir besser. Geht das?', zh: '周四10点半我更方便。可以吗？' },
            { sp: 'Empfangsdame', de: 'Ja, das passt. Ein Termin für Sie, Donnerstag, halb elf.', zh: '可以。给您预约周四10点半。' },
            { sp: 'Wei', de: 'Super, vielen Dank! Wie lange dauert das ungefähr?', zh: '太好了，谢谢！大概要多久？' },
            { sp: 'Empfangsdame', de: 'Ungefähr eine Stunde. Bitte kommen Sie spätestens fünf Minuten vorher.', zh: '大概一小时。请最晚提前五分钟到。' },
            { sp: 'Wei', de: 'Alles klar, mache ich. Bis Donnerstag!', zh: '明白，我会的。周四见！' },
            { sp: 'Empfangsdame', de: 'Bis Donnerstag, auf Wiederhören!', zh: '周四见，再见！' },
          ]
        },
        {
          type: 'grammar', title: 'Termin vereinbaren / verschieben / absagen', sub: '预约的三个动作，各配一个动词',
          html: `<p>约事情、改期、取消——这三件事在德语里各有专属动词，而且都习惯搭配<b>第四格宾语</b>（复习 u3 学过的 einen）：</p>
<table><tr><th>动词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">vereinbaren</td><td>约定（第一次约）</td><td class="hl">Ich möchte einen Termin vereinbaren.</td></tr>
<tr><td class="hl">verschieben</td><td>改期（约好了又要挪）</td><td class="hl">Können wir den Termin verschieben?</td></tr>
<tr><td class="hl">absagen</td><td>取消（约好了不去了）</td><td class="hl">Ich muss den Termin leider absagen.</td></tr></table>
<p>三个动词后面几乎总是跟着 <mark>einen Termin</mark>（第一次提到，用不定冠词）或 <mark>den Termin</mark>（已经提过的那个预约，用定冠词）——阳性名词 der Termin 在第四格都要变成 den/einen，这也是为什么这几句话里从头到尾都是 den/einen 而不是 der/ein。</p>`
        },
        {
          type: 'grammar', title: '时间介词：um / am / im', sub: '钟点、星期、月份，各归各的介词管',
          html: `<p>先看三个真实例句：</p>
<p class="de">Der Termin ist <mark>um</mark> 14 Uhr. Ich habe <mark>am</mark> Montag Zeit. <mark>Im</mark> Mai fahre ich nach China.</p>
<p>三个介词分工非常清楚，一个介词只管一类时间信息：</p>
<table><tr><th>介词</th><th>用于</th><th>例句</th></tr>
<tr><td class="hl">um</td><td>具体钟点</td><td class="hl">um 8 Uhr, um Viertel nach neun</td></tr>
<tr><td class="hl">am</td><td>星期几、日期、一天中的时段</td><td class="hl">am Montag, am Morgen, am 3. Mai</td></tr>
<tr><td class="hl">im</td><td>月份、季节、年份范围</td><td class="hl">im Mai, im Winter, im Jahr 2024</td></tr></table>
<p>唯一的例外先记一下：晚上说 <mark>in der Nacht</mark>，不是 am Nacht——这个例外先当固定搭配背下来，完整的介词格规则以后的单元会系统讲。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">打电话的告别语不一样。</b>面对面说再见用 <mark>Auf Wiedersehen</mark>，但挂电话时德国人习惯说 <mark>Auf Wiederhören</mark>（字面"再听"，因为电话里"看不见"只"听得见"）。这个小细节很多教材不讲，但打电话预约时说出来会显得特别地道。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Der Termin ist ___ Montag." 应该填哪个介词？', options: ['am', 'um', 'im'], answer: 0, why: '星期几用 am：am Montag。' },
        { type: 'cloze', zhHint: '我十四点有个预约。', before: 'Ich habe einen Termin', after: '14 Uhr.', options: ['um', 'am', 'im'], answer: 0, why: '具体钟点用 um：um 14 Uhr。' },
        { type: 'mcq', q: '"Ich muss den Termin leider absagen." 是什么意思？', options: ['我很遗憾必须取消这个预约。', '我想改一下预约时间。', '我想约一个新的预约。'], answer: 0, why: 'absagen = 取消；leider = 很遗憾。' },
        { type: 'order', zh: '我们能改一下这个预约吗？', words: ['Können', 'wir', 'den', 'Termin', 'verschieben'], why: '是非问句动词提前：Können（情态动词）+ 主语 wir + 宾语 den Termin + 动词原形 verschieben 在句尾。' },
        { type: 'match', pairs: [['vereinbaren', '约定'], ['verschieben', '改期'], ['absagen', '取消'], ['passen', '合适，来得及']] },
        { type: 'listen', audio: 'Passt dir Donnerstag um halb elf?', q: '这句话在问什么？', options: ['你周四十点半方便吗？', '你周四晚上有空吗？', '你想周四取消预约吗？'], answer: 0, why: 'passen = 合适/来得及，halb elf = 10:30。' },
        { type: 'listen', audio: 'Im Mai fahre ich nach China.', q: '这句话是什么意思？', options: ['我五月要去中国。', '我每天都去中国。', '我周一去中国。'], answer: 0, why: 'im Mai = 在五月，月份用 im。' },
        { type: 'speak', de: 'Ich hätte gern einen Termin für einen Haarschnitt.', zh: '我想预约一个理发。' },
      ],
      task: { title: '今天的生活任务', desc: '真实给一个人发消息，提议一个具体的见面时间，句子里用上 um（钟点）或 am（星期几），比如 "Hast du am Freitag um 18 Uhr Zeit?"。' }
    },
  ]
};
