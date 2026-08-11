// 第 13 单元：可分动词与日常作息
export default {
  id: 'u13', num: '13', color: 'yellow', shape: 'half',
  de: 'Mein Tag', zh: '可分动词与日常作息',
  desc: '几点起床、几点下班、晚上做什么——描述一天的作息离不开一类特殊的德语动词：可分动词。前缀会跳到句尾，构成又一种句框结构。',
  kann: [
    { de: 'Ich kann meinen typischen Tagesablauf mit trennbaren Verben beschreiben (aufstehen, einkaufen ...).', zh: '我能用可分动词描述我典型的一天。' },
    { de: 'Ich kann trennbare Verben im Perfekt richtig bilden (ge- zwischen Präfix und Stamm).', zh: '我能正确构造可分动词的完成时形式。' },
    { de: 'Ich kann erzählen, was ich gestern gemacht habe, inklusive trennbarer Verben.', zh: '我能讲述我昨天做了什么，包括可分动词的用法。' },
  ],
  lessons: [
    {
      id: 'u13l1', title: '我的一天', de: 'Mein Tagesablauf',
      intro: '德语里有一大类动词，长得像"介词/副词 + 动词"拼在一起，比如 aufstehen（起床）= auf + stehen。这一课学 9 个最常用的可分动词，还有它们在现在时里最重要的规律：前缀会跳到句子最后，是继情态动词之后的第二种 Satzklammer。',
      sections: [
        {
          type: 'vocab', title: '可分动词：作息（1）', sub: '',
          items: [
            { de: 'aufstehen', zh: '起床', en: 'to get up', ex: 'Ich stehe um 7 Uhr auf.', exZh: '我七点起床。', note: '可分动词：前缀 auf + 词干 stehen，现在时前缀踢到句尾' },
            { de: 'anfangen', zh: '开始', en: 'to begin', ex: 'Die Arbeit fängt um 9 Uhr an.', exZh: '工作九点开始。', note: '前缀 an + fangen（变音动词，du fängst an）' },
            { de: 'aufhören', zh: '停止，结束', en: 'to stop/finish', ex: 'Ich höre um 17 Uhr auf.', exZh: '我五点下班（结束工作）。' },
            { de: 'einkaufen', zh: '购物，采购', en: 'to shop', ex: 'Ich kaufe nach der Arbeit ein.', exZh: '我下班后去购物。' },
          ]
        },
        {
          type: 'vocab', title: '可分动词：作息（2）', sub: '',
          items: [
            { de: 'anrufen', zh: '打电话给……', en: 'to call (someone)', ex: 'Ich rufe meine Mutter an.', exZh: '我给我妈妈打电话。' },
            { de: 'fernsehen', zh: '看电视', en: 'to watch TV', ex: 'Abends sehe ich fern.', exZh: '晚上我看电视。', note: '前缀 fern + sehen（变音动词，du siehst fern）' },
            { de: 'aufräumen', zh: '收拾，打扫', en: 'to tidy up', ex: 'Am Wochenende räume ich die Wohnung auf.', exZh: '周末我打扫房子。' },
            { de: 'mitkommen', zh: '一起来，一起去', en: 'to come along', ex: 'Kommst du heute Abend mit?', exZh: '你今晚要一起来吗？' },
            { de: 'abholen', zh: '接，去取', en: 'to pick up', ex: 'Ich hole die Kinder ab.', exZh: '我去接孩子。' },
          ]
        },
        {
          type: 'vocab', title: '描述作息', sub: '',
          items: [
            { de: 'Tagesablauf', art: 'der', pl: 'Tagesabläufe', zh: '日常作息，一天的安排', en: 'daily routine', ex: 'Wie ist dein Tagesablauf?', exZh: '你的日常作息是怎样的？' },
            { de: 'normalerweise', zh: '通常，一般来说', en: 'normally', ex: 'Normalerweise stehe ich um sieben auf.', exZh: '我通常七点起床。' },
            { de: 'meistens', zh: '大多数时候', en: 'mostly', ex: 'Meistens kaufe ich nach der Arbeit ein.', exZh: '我大多下班后去购物。' },
          ]
        },
        {
          type: 'dialogue', title: '语伴聊作息', scene: 'Wei 在德语课认识了新语伴 Jonas，两人约出来聊天，顺便比较一下彼此的日常作息。',
          lines: [
            { sp: 'Jonas', de: 'Wei, wie sieht eigentlich dein Tagesablauf aus? Wann stehst du normalerweise auf?', zh: 'Wei，你平时的日常作息是怎样的？你一般几点起床？' },
            { sp: 'Wei', de: 'Ich stehe meistens um sieben Uhr auf. Und du?', zh: '我一般七点起床。你呢？' },
            { sp: 'Jonas', de: 'Ich stehe viel früher auf, schon um sechs. Meine Arbeit fängt um acht an.', zh: '我起得早多了，六点就起。我的工作八点开始。' },
            { sp: 'Wei', de: 'Wow, das ist früh! Meine Arbeit fängt erst um neun an.', zh: '哇，真早！我的工作九点才开始。' },
            { sp: 'Jonas', de: 'Und wann hörst du auf zu arbeiten?', zh: '那你几点下班？' },
            { sp: 'Wei', de: 'Ich höre normalerweise um fünf auf. Danach kaufe ich manchmal noch ein.', zh: '我一般五点下班。之后我有时候还会去买点东西。' },
            { sp: 'Jonas', de: 'Ich auch! Ich kaufe meistens direkt nach der Arbeit ein, dann rufe ich meine Eltern an.', zh: '我也是！我一般下班后直接去购物，然后给我父母打电话。' },
            { sp: 'Wei', de: 'Schön. Und was machst du abends?', zh: '真好。那你晚上做什么？' },
            { sp: 'Jonas', de: 'Meistens räume ich ein bisschen auf, und dann sehe ich fern.', zh: '一般我会收拾一下，然后看电视。' },
            { sp: 'Wei', de: 'Klingt entspannt. Sag mal, kommst du am Samstag mit ins Fitnessstudio?', zh: '听起来挺放松的。对了，你周六要一起去健身房吗？' },
            { sp: 'Jonas', de: 'Gerne! Aber ich muss vorher noch meine Tochter abholen.', zh: '好呀！不过我得先去接我女儿。' },
            { sp: 'Wei', de: 'Kein Problem, wir können auch später los.', zh: '没问题，我们可以晚点出发。' },
          ]
        },
        {
          type: 'grammar', title: '可分动词：前缀踢到句尾', sub: '第二种 Satzklammer——呼应 u9 情态动词',
          html: `<p>可分动词（Trennbare Verben）由"前缀 + 基础动词"组成，比如 <b class="de">aufstehen</b> = <mark>auf</mark> + stehen。在现在时的陈述句里，<b>基础动词按人称正常变位、站在位置2</b>，<b>前缀被踢到句子最后</b>——这是继情态动词句框之后的第二种 Satzklammer：</p>
<table><tr><th>原形</th><th>位置2（变位的基础动词）</th><th>中间</th><th>句尾（前缀）</th></tr>
<tr><td>aufstehen</td><td class="hl">stehe</td><td class="hl">um 7 Uhr</td><td class="hl">auf.</td></tr>
<tr><td>anfangen</td><td class="hl">fängt</td><td class="hl">um 9 Uhr</td><td class="hl">an.</td></tr>
<tr><td>anrufen</td><td class="hl">rufe</td><td class="hl">meine Mutter</td><td class="hl">an.</td></tr></table>
<p>和 u9 的情态动词句框对比一下：<b>结构完全一样</b>——都是"位置2放一个变位的词，句尾放另一半"，唯一的区别是这次句尾放的不是动词原形，而是一个前缀。练熟这个模式，以后遇到任何新的可分动词都能直接套用。</p>`
        },
        {
          type: 'grammar', title: '前缀不影响变位，只影响位置', sub: '基础动词该怎么变位还是怎么变位',
          html: `<p>可分动词的变位规则完全由"基础动词"决定，前缀只是被搬了个位置，不参与变位判断。几个例子：</p>
<table><tr><th>可分动词</th><th>基础动词</th><th>ich</th><th>du</th><th>er/sie/es</th></tr>
<tr><td class="hl">aufstehen</td><td>stehen（规则）</td><td class="hl">stehe auf</td><td class="hl">stehst auf</td><td class="hl">steht auf</td></tr>
<tr><td class="hl">anfangen</td><td>fangen（变音 a→ä）</td><td class="hl">fange an</td><td class="hl">fängst an</td><td class="hl">fängt an</td></tr>
<tr><td class="hl">fernsehen</td><td>sehen（变音 e→ie）</td><td class="hl">sehe fern</td><td class="hl">siehst fern</td><td class="hl">sieht fern</td></tr></table>
<p>也就是说，fangen 该变音还是变音（du fängst），sehen 该变音还是变音（du siehst）——只是变位后的词站在位置2，前缀单独站到句尾。是非问句和 W-Frage 的规律也一样：<mark>Fängst</mark> du gleich <mark>an</mark>? / <mark>Wann fängst</mark> du <mark>an</mark>?</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">怎么认出一个动词是不是可分动词？</b>德语词典通常会用一个竖线标出来，比如 <mark>auf|stehen</mark>、<mark>an|fangen</mark>——竖线前面就是会被踢到句尾的前缀。常见的可分前缀有 auf-、an-、ein-、mit-、ab-、fern-、zurück- 等，大多是能独立使用的介词或副词，这也是为什么它们能"分得开"：本质上更像"动词 + 一个紧跟着的副词"，只是写的时候常常拼在一起。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"我七点起床" 正确的语序是？', options: ['Ich stehe um 7 Uhr auf.', 'Ich aufstehe um 7 Uhr.', 'Ich stehe auf um 7 Uhr.'], answer: 0, why: '基础动词 stehe 站第二位，前缀 auf 踢到句尾，中间插入时间状语 um 7 Uhr。' },
        { type: 'cloze', zhHint: '工作九点开始。', before: 'Die Arbeit', after: 'um neun Uhr an.', options: ['fängt', 'fange', 'fangt'], answer: 0, why: '主语是第三人称单数 die Arbeit，fangen 变音后是 fängt。' },
        { type: 'mcq', q: '可分动词在陈述句里，前缀应该放在句子的哪个位置？', options: ['句尾', '动词前面', '句首'], answer: 0, why: '前缀被踢到句尾，和基础动词（位置2）分开两端，是第二种 Satzklammer。' },
        { type: 'order', zh: '我给我妈妈打电话。', words: ['Ich', 'rufe', 'meine', 'Mutter', 'an'], why: 'rufe 站第二位，前缀 an 踢到句尾。' },
        { type: 'match', pairs: [['aufstehen', '起床'], ['einkaufen', '购物'], ['anrufen', '打电话给……'], ['abholen', '接，去取']] },
        { type: 'listen', audio: 'Ich stehe um sieben Uhr auf.', q: '这句话是什么意思？', options: ['我七点起床。', '我七点下班。', '我七点睡觉。'], answer: 0, why: 'stehe...auf = 起床，um sieben Uhr = 七点。' },
        { type: 'listen', audio: 'Ich hole die Kinder ab.', q: '这句话是什么意思？', options: ['我去接孩子。', '我在照顾孩子。', '我要送孩子。'], answer: 0, why: 'hole...ab = 接，去取，die Kinder = 孩子们。' },
        { type: 'speak', de: 'Ich stehe früh auf und kaufe nach der Arbeit ein.', zh: '我起得早，下班后去购物。' },
      ],
      task: { title: '今天的生活任务', desc: '写一段"我典型的一天"，从起床到睡觉，用上至少 5 个可分动词（比如 aufstehen、einkaufen、anrufen、aufräumen、fernsehen）。先留着这段文字，下一课要把它改写成"我昨天的一天"。' }
    },
    {
      id: 'u13l2', title: '我昨天起得很早', de: 'Ich bin gestern früh aufgestanden',
      intro: '可分动词的 Perfekt 有个特别的地方：ge- 不是加在最前面，而是插进前缀和词干中间——比如 aufstehen 的 Partizip II 是 aufgestanden，不是 geaufstehen。这一课学会这个规律，还有可分动词跟情态动词连用时的另一个规律：前缀不分开。',
      sections: [
        {
          type: 'vocab', title: '可分动词的 Perfekt（用 haben）', sub: '',
          items: [
            { de: 'eingekauft', zh: '买过东西了', en: 'shopped', ex: 'Ich habe eingekauft.', exZh: '我买东西了。', note: 'einkaufen 的 Partizip II：ge- 插进 ein 和 kauft 中间，ein-ge-kauft' },
            { de: 'angerufen', zh: '打过电话了', en: 'called', ex: 'Ich habe meine Mutter angerufen.', exZh: '我给我妈妈打了电话。', note: 'anrufen 的 Partizip II：an-ge-rufen（rufen 本身是不规则动词）' },
            { de: 'aufgeräumt', zh: '收拾过了', en: 'tidied up', ex: 'Ich habe die Wohnung aufgeräumt.', exZh: '我打扫了房子。', note: 'aufräumen 的 Partizip II：auf-ge-räumt' },
            { de: 'ferngesehen', zh: '看过电视了', en: 'watched TV', ex: 'Gestern habe ich lange ferngesehen.', exZh: '昨天我看了很久电视。', note: '高危点！fernsehen 的 Partizip II 是 fern-ge-sehen，不是 gefernsehen' },
            { de: 'abgeholt', zh: '接过，取过了', en: 'picked up', ex: 'Ich habe die Kinder abgeholt.', exZh: '我接了孩子。', note: 'abholen 的 Partizip II：ab-ge-holt' },
          ]
        },
        {
          type: 'vocab', title: '可分动词的 Perfekt（用 sein）', sub: '',
          items: [
            { de: 'aufgestanden', zh: '起床了', en: 'gotten up', ex: 'Ich bin heute früh aufgestanden.', exZh: '我今天起得很早。', note: '高危点！aufstehen 虽然带前缀 auf，但因为是位移/状态变化动词，Perfekt 用 sein，不是 haben' },
            { de: 'mitgekommen', zh: '一起来过，一起去过', en: 'come along', ex: 'Jonas ist leider nicht mitgekommen.', exZh: 'Jonas 可惜没有一起来。', note: 'mitkommen 基于 kommen，同样用 sein' },
          ]
        },
        {
          type: 'vocab', title: '更多可分动词的 Perfekt', sub: '',
          items: [
            { de: 'angefangen', zh: '开始了', en: 'begun', ex: 'Die Arbeit hat um neun angefangen.', exZh: '工作九点开始了。' },
            { de: 'aufgehört', zh: '结束了，停止了', en: 'stopped/finished', ex: 'Ich habe um fünf aufgehört.', exZh: '我五点下班了（结束了）。' },
          ]
        },
        {
          type: 'dialogue', title: '昨天过得怎么样', scene: 'Wei 和 Jonas 又见面了，这次聊的是"昨天"——顺便 Wei 提到明天要早起，可分动词的 Perfekt 和情态动词句在对话里都用上了。',
          lines: [
            { sp: 'Jonas', de: 'Na, wie war dein Tag gestern? Bist du auch so früh aufgestanden?', zh: '你昨天过得怎么样？你也起得这么早吗？' },
            { sp: 'Wei', de: 'Ja, ich bin um sieben aufgestanden, wie immer. Danach habe ich eingekauft.', zh: '是的，我七点起的，跟往常一样。之后我去买了东西。' },
            { sp: 'Jonas', de: 'Was hast du gekauft?', zh: '你买了什么？' },
            { sp: 'Wei', de: 'Nur ein paar Sachen fürs Frühstück. Dann habe ich meine Mutter angerufen.', zh: '就买了点早餐用的东西。然后我给我妈妈打了电话。' },
            { sp: 'Jonas', de: 'Schön. Und am Abend?', zh: '真好。那晚上呢？' },
            { sp: 'Wei', de: 'Ich habe die Wohnung aufgeräumt und danach ein bisschen ferngesehen.', zh: '我打扫了房子，之后看了会儿电视。' },
            { sp: 'Jonas', de: 'Bist du eigentlich am Samstag mitgekommen? Ins Fitnessstudio?', zh: '你周六到底有没有一起去健身房？' },
            { sp: 'Wei', de: 'Nein, ich bin leider nicht mitgekommen – ich hatte keine Zeit.', zh: '没有，我可惜没能一起去——我当时没时间。' },
            { sp: 'Jonas', de: 'Schade! Und was ist heute mit dir? Du siehst müde aus.', zh: '真可惜！那你今天怎么了？你看起来很累。' },
            { sp: 'Wei', de: 'Ich muss morgen früh aufstehen, ich habe einen wichtigen Termin.', zh: '我明天得早起，我有个重要的预约。' },
            { sp: 'Jonas', de: 'Ach so. Musst du auch jemanden abholen?', zh: '这样啊。你还得去接什么人吗？' },
            { sp: 'Wei', de: 'Nein, diesmal nicht. Aber ich muss sehr früh anfangen.', zh: '不用，这次不用。但我得很早开始工作。' },
          ]
        },
        {
          type: 'grammar', title: '可分动词的 Perfekt：ge- 插进前缀和词干中间', sub: '呼应 u12 的 Perfekt 构成',
          html: `<p>可分动词的 Partizip II 遵守一条固定规律：<b>把 ge- 插进"前缀"和"词干"的中间</b>，而不是加在整个词的最前面：</p>
<table><tr><th>可分动词</th><th>基础动词的 Partizip II</th><th>可分动词的 Partizip II</th></tr>
<tr><td>einkaufen</td><td>kaufen → gekauft</td><td class="hl">ein + ge + kauft = eingekauft</td></tr>
<tr><td>anrufen</td><td>rufen → gerufen</td><td class="hl">an + ge + rufen = angerufen</td></tr>
<tr><td>aufräumen</td><td>räumen → geräumt</td><td class="hl">auf + ge + räumt = aufgeräumt</td></tr>
<tr><td>abholen</td><td>holen → geholt</td><td class="hl">ab + ge + holt = abgeholt</td></tr>
<tr><td class="hl">fernsehen</td><td>sehen → gesehen</td><td class="hl">fern + ge + sehen = ferngesehen</td></tr></table>
<p><b>fernsehen 是最容易写错的一个</b>：很多学习者会下意识地在整个词前面加 ge-，写成"gefernsehen"——正确形式是把 ge- 塞进 fern 和 sehen 中间，变成 <mark>ferngesehen</mark>。这条规律对所有可分动词都成立，记住"ge- 永远紧贴着词干，不贴着前缀"就不会出错。</p>
<p>助动词选择和 u12 学的规律完全一样——<b class="de">aufstehen</b> 虽然前缀是 auf，但因为是位移/状态变化动词，Perfekt 依然用 <b>sein</b>：<mark>Ich bin früh aufgestanden.</mark> 千万不要因为看到前缀就默认用 haben。</p>`
        },
        {
          type: 'grammar', title: '三种形态对照：可分动词到底分不分？', sub: '现在时分开，情态动词句不分，Perfekt 里 ge- 插中间',
          html: `<p>同一个可分动词，在三种句子结构里长得完全不一样，很容易混淆，放在一起对照记：</p>
<table><tr><th>句子结构</th><th>例句</th><th>前缀怎么样</th></tr>
<tr><td class="hl">现在时（独立变位）</td><td class="hl">Ich stehe früh auf.</td><td>分开，前缀单独踢到句尾</td></tr>
<tr><td class="hl">情态动词句</td><td class="hl">Ich muss früh aufstehen.</td><td><b>不分开</b>，整个动词原形完整地待在句尾</td></tr>
<tr><td class="hl">Perfekt</td><td class="hl">Ich bin früh aufgestanden.</td><td>ge- 插进前缀和词干中间</td></tr></table>
<p>第二行最容易出错：情态动词句里的可分动词是<b>原形</b>，原形不会被"拆开"，所以 <mark>Ich muss früh aufstehen</mark> 是对的，不能写成"Ich muss früh auf stehen"或者把 auf 挪到别的位置——只要动词还没变位（原形状态），前缀和词干就永远粘在一起。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">记这三种形态最好的办法是造一组对比句自己念一遍：</b>"Ich stehe auf." → "Ich muss aufstehen." → "Ich bin aufgestanden." 三句连着说几遍，耳朵会自己记住哪种情况前缀该分开、哪种情况该粘在一起。这个"变形三连"以后遇到任何新的可分动词都可以拿来套用自测。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"einkaufen" 的 Partizip II 是？', options: ['eingekauft', 'geeinkauft', 'einkaufget'], answer: 0, why: 'ge- 插进前缀 ein 和词干 kauft 中间：ein-ge-kauft。' },
        { type: 'cloze', zhHint: '我今天起得很早。', before: 'Ich', after: 'heute früh aufgestanden.', options: ['bin', 'habe', 'bist'], answer: 0, why: 'aufstehen 是位移/状态变化动词，Perfekt 用 sein，ich 对应 bin。' },
        { type: 'mcq', q: '可分动词与情态动词连用时（如 Ich muss früh aufstehen），前缀应该怎么处理？', options: ['不分开，整个动词原形留在句尾', '分开，前缀单独放句尾', '前缀放在情态动词前面'], answer: 0, why: '情态动词句里可分动词是原形，原形不拆开，整个词完整留在句尾。' },
        { type: 'order', zh: '我得早起。', words: ['Ich', 'muss', 'früh', 'aufstehen'], why: '情态动词 muss 站第二位，可分动词原形 aufstehen 完整地留在句尾，不拆开。' },
        { type: 'match', pairs: [['eingekauft', '买过东西了'], ['angerufen', '打过电话了'], ['aufgeräumt', '收拾过了'], ['ferngesehen', '看过电视了']] },
        { type: 'listen', audio: 'Ich bin heute früh aufgestanden.', q: '这句话是什么意思？', options: ['我今天起得很早。', '我今天起得很晚。', '我今天没有起床。'], answer: 0, why: 'bin...aufgestanden = 起床了（sein 类 Perfekt），früh = 早。' },
        { type: 'listen', audio: 'Ich muss früh aufstehen, ich habe einen Termin.', q: '这句话是什么意思？', options: ['我得早起，我有个预约。', '我不用早起，我没有安排。', '我昨天起得很早。'], answer: 0, why: 'muss...aufstehen = 得起床，einen Termin haben = 有个预约。' },
        { type: 'speak', de: 'Ich bin früh aufgestanden und habe die Wohnung aufgeräumt.', zh: '我起得很早，还打扫了房子。' },
      ],
      task: { title: '今天的生活任务', desc: '把上一课写的"我典型的一天"改写成"我昨天的一天"，全部换成 Perfekt——特别注意 aufstehen 要用 sein（ich bin aufgestanden），其余大多数可分动词用 haben。' }
    },
  ]
};
