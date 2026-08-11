// 第 9 单元：情态动词与日常安排
export default {
  id: 'u9', num: '9', color: 'red', shape: 'half',
  de: 'Ich möchte...', zh: '情态动词与日常安排',
  desc: '同事约你周末一起运动，你想去健身房又要赶德语课——这个单元教你六个最常用的情态动词：想做、能做、必须做、可以做、要做、应该做，一次性说清楚。',
  kann: [
    { de: 'Ich kann mit möchten/können/müssen/dürfen/wollen/sollen sagen, was ich (nicht) tun will, kann oder muss.', zh: '我能用六个情态动词表达自己想做、能做、必须做的事。' },
    { de: 'Ich kann eine Einladung annehmen oder höflich mit „leider“ ablehnen.', zh: '我能接受邀请，或用 leider 礼貌婉拒。' },
    { de: 'Ich kann bei einer Absage einen Alternativvorschlag machen.', zh: '我能在婉拒时主动提出替代方案。' },
    { de: 'Ich kann Sätze mit Modalverb korrekt bilden (Modalverb Position 2, Infinitiv am Ende).', zh: '我能正确构造带情态动词的句子（情态动词第二位，动词原形在句尾）。' },
  ],
  lessons: [
    {
      id: 'u9l1', title: '我想学德语', de: 'Ich möchte Deutsch lernen',
      intro: '情态动词是德语口语里出镜率最高的一类词——"我想"、"我能"、"我必须"几乎每天都要用到。这一课先学最高频的三个：möchten、können、müssen，还有德语语序里最重要的结构之一——句框（Satzklammer）：情态动词站在第二位，真正的动词原形被踢到句子最后。',
      sections: [
        {
          type: 'vocab', title: '情态动词与运动', sub: '',
          items: [
            { de: 'möchten', zh: '想要（礼貌）', en: 'would like to', ex: 'Ich möchte Deutsch lernen.', exZh: '我想学德语。', note: '变位特殊，ich 和 er/sie/es 都是 möchte，见下方语法' },
            { de: 'können', zh: '能，会', en: 'can/to be able to', ex: 'Kannst du schwimmen?', exZh: '你会游泳吗？' },
            { de: 'müssen', zh: '必须', en: 'must/to have to', ex: 'Ich muss heute arbeiten.', exZh: '我今天必须工作。' },
            { de: 'Deutschkurs', art: 'der', pl: 'Deutschkurse', zh: '德语课', en: 'German course', ex: 'Ich muss am Samstag zum Deutschkurs.', exZh: '我周六得去上德语课。' },
            { de: 'Fitnessstudio', art: 'das', pl: 'Fitnessstudios', zh: '健身房', en: 'gym', ex: 'Ich möchte heute Abend ins Fitnessstudio gehen.', exZh: '我今晚想去健身房。' },
            { de: 'Sport machen', zh: '做运动', en: 'to do sports', ex: 'Kannst du am Wochenende Sport machen?', exZh: '你周末能运动吗？' },
            { de: 'Zeit haben', zh: '有时间', en: 'to have time', ex: 'Hast du heute Zeit?', exZh: '你今天有时间吗？' },
            { de: 'frei sein', zh: '有空的，空闲的', en: 'to be free', ex: 'Bist du am Freitag frei?', exZh: '你周五有空吗？' },
          ]
        },
        {
          type: 'vocab', title: '周末计划', sub: '',
          items: [
            { de: 'heute Abend', zh: '今晚', en: 'this evening', ex: 'Was machst du heute Abend?', exZh: '你今晚做什么？' },
            { de: 'dieses Wochenende', zh: '这个周末', en: 'this weekend', ex: 'Dieses Wochenende möchte ich joggen gehen.', exZh: '这个周末我想去慢跑。' },
            { de: 'vielleicht', zh: '也许', en: 'maybe', ex: 'Vielleicht können wir zusammen joggen.', exZh: '也许我们可以一起慢跑。' },
            { de: 'zusammen', zh: '一起', en: 'together', ex: 'Wir können zusammen lernen.', exZh: '我们可以一起学习。' },
            { de: 'joggen', zh: '慢跑', en: 'to jog', ex: 'Ich jogge nicht gern im Winter.', exZh: '冬天我不喜欢慢跑。' },
            { de: 'schwimmen', zh: '游泳', en: 'to swim', ex: 'Ich kann gut schwimmen.', exZh: '我游泳游得很好。', note: '规则变位：du schwimmst, er schwimmt——不像 sprechen 那样需要变音' },
            { de: 'Hobby', art: 'das', pl: 'Hobbys', zh: '爱好', en: 'hobby', ex: 'Was ist dein Hobby?', exZh: '你的爱好是什么？' },
          ]
        },
        {
          type: 'dialogue', title: '健身房还是德语课', scene: '午休时间，Anna 约 Wei 去健身房，但 Wei 还得为德语课学习——正好把三个情态动词全用上了。',
          lines: [
            { sp: 'Anna', de: 'Wei, ich möchte heute Abend ins Fitnessstudio gehen. Hast du Lust?', zh: 'Wei，我今晚想去健身房。你有兴趣吗？' },
            { sp: 'Wei', de: 'Das klingt gut, aber ich kann heute nicht. Ich muss noch für den Deutschkurs lernen.', zh: '听起来不错，但我今天不行。我还得为德语课学习。' },
            { sp: 'Anna', de: 'Ach, wann hast du denn Deutschkurs?', zh: '啊，你德语课是什么时候？' },
            { sp: 'Wei', de: 'Jeden Dienstag und Donnerstag. Ich muss viele Vokabeln lernen!', zh: '每周二和周四。我得学很多单词！' },
            { sp: 'Anna', de: 'Verstehe. Kannst du denn am Wochenende Sport machen?', zh: '明白了。那你周末能运动吗？' },
            { sp: 'Wei', de: 'Ja, am Wochenende kann ich. Möchtest du zusammen joggen gehen?', zh: '能，周末可以。你想一起去慢跑吗？' },
            { sp: 'Anna', de: 'Gerne! Ich möchte schon lange wieder joggen.', zh: '好呀！我早就想再去跑步了。' },
            { sp: 'Wei', de: 'Super, dann müssen wir nur noch eine Uhrzeit finden.', zh: '太好了，那我们只需要定一个时间了。' },
            { sp: 'Anna', de: 'Passt dir Samstag um zehn?', zh: '周六十点你方便吗？' },
            { sp: 'Wei', de: 'Ja, das passt. Ich kann Samstag um zehn.', zh: '可以，周六十点没问题。' },
          ]
        },
        {
          type: 'grammar', title: 'möchten / können / müssen 变位', sub: '情态动词都不规则，先整体背下来',
          html: `<p>情态动词的变位和规则动词不一样：<b>ich 和 er/sie/es 的形式完全相同</b>，都不加通常的 -t 词尾。看熟这条规律，三个动词的表格背起来会快很多：</p>
<table><tr><th>人称</th><th>möchten</th><th>können</th><th>müssen</th></tr>
<tr><td class="hl">ich</td><td class="hl">möchte</td><td class="hl">kann</td><td class="hl">muss</td></tr>
<tr><td class="hl">du</td><td class="hl">möchtest</td><td class="hl">kannst</td><td class="hl">musst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">möchte</td><td class="hl">kann</td><td class="hl">muss</td></tr>
<tr><td class="hl">wir</td><td class="hl">möchten</td><td class="hl">können</td><td class="hl">müssen</td></tr>
<tr><td class="hl">ihr</td><td class="hl">möchtet</td><td class="hl">könnt</td><td class="hl">müsst</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">möchten</td><td class="hl">können</td><td class="hl">müssen</td></tr></table>
<p>特别注意 <b class="de">möchten</b>：<mark>ich möchte</mark> 和 <mark>er/sie/es möchte</mark> 是完全一样的词，没有额外词尾——这一点新手很容易想当然地加上 -t 写成"möchtet"，要专门记住这个例外。</p>`
        },
        {
          type: 'grammar', title: 'Satzklammer：句子像个夹子', sub: '情态动词第二位，动词原形跑到句尾',
          html: `<p>德语句子里出现情态动词时，句子结构会变成一个"夹子"：<b>情态动词站在位置 2（该变位的动词的位置）</b>，而<b>真正表示动作的动词，永远以原形（不变位）出现在句子最后</b>，中间可以夹很多内容：</p>
<table><tr><th>位置1</th><th>位置2（情态动词，变位）</th><th>中间（宾语/状语……）</th><th>句尾（动词原形）</th></tr>
<tr><td class="hl">Ich</td><td class="hl">möchte</td><td class="hl">Deutsch</td><td class="hl">lernen.</td></tr>
<tr><td class="hl">Ich</td><td class="hl">kann</td><td class="hl">heute nicht</td><td class="hl">kommen.</td></tr>
<tr><td class="hl">Wir</td><td class="hl">müssen</td><td class="hl">noch eine Uhrzeit</td><td class="hl">finden.</td></tr></table>
<p>把这个结构想象成一个真的夹子：<b>左边的夹脚是情态动词</b>，<b>右边的夹脚是动词原形</b>，句子中间不管加多少东西（宾语、时间、地点），两端的位置永远固定不动。是非问句时，把情态动词整个挪到第一位，动词原形照样留在句尾不动：<mark>Möchtest</mark> du heute Abend joggen <mark>gehen</mark>?</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">试着把这周的安排都套进这个框架说一遍。</b>"Ich möchte...", "Ich kann...", "Ich muss..." 这三句开头，几乎能装下你这周所有的真实计划。每天练习用这个句框说一两句话，两端固定、中间自由填空——这个语感一旦建立，后面学到的可分动词、完成时都会用上同一个框架。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"du" 对应 möchten 的正确变位是？', options: ['möchtest', 'möchtet', 'möchte'], answer: 0, why: 'du 词尾是 -st：du möchtest。' },
        { type: 'cloze', zhHint: '我今天不能来。', before: 'Ich', after: 'heute nicht kommen.', options: ['kann', 'kannst', 'könnt'], answer: 0, why: '主语是 ich，können 的 ich 形式是 kann（没有词尾 -e）。' },
        { type: 'mcq', q: '在 Satzklammer 结构里，动词原形应该放在句子的哪个位置？', options: ['句尾', '第二位', '句首'], answer: 0, why: '情态动词占第二位，实义动词原形被踢到句尾，中间可以插入其他成分。' },
        { type: 'order', zh: '我周末想去慢跑。', words: ['Ich', 'möchte', 'am', 'Wochenende', 'joggen', 'gehen'], why: 'möchte 站在位置2，joggen gehen（去慢跑）作为动词原形组合留在句尾。' },
        { type: 'match', pairs: [['möchten', '想要'], ['können', '能，会'], ['müssen', '必须'], ['Zeit haben', '有时间']] },
        { type: 'listen', audio: 'Wir müssen eine Uhrzeit finden.', q: '这句话是什么意思？', options: ['我们得定一个时间。', '我们没有时间。', '我们想改一下时间。'], answer: 0, why: 'müssen = 必须，finden = 找到，合起来是"必须找到一个时间"。' },
        { type: 'listen', audio: 'Möchtest du zusammen joggen gehen?', q: '这句话在问什么？', options: ['你想一起去慢跑吗？', '你会游泳吗？', '你今天有空吗？'], answer: 0, why: 'möchtest du...gehen = 你想不想去……，zusammen joggen = 一起慢跑。' },
        { type: 'speak', de: 'Ich möchte am Wochenende Sport machen, aber ich muss auch lernen.', zh: '我周末想运动，但也得学习。' },
      ],
      task: { title: '今天的生活任务', desc: '用 ich möchte / ich kann / ich muss 各写一句本周真实的安排，至少挑一句对某个人说出来。' }
    },
    {
      id: 'u9l2', title: '也许下次吧', de: 'Vielleicht ein anderes Mal',
      intro: '有邀请就会有婉拒——德国人拒绝邀请时很少直接说"不"，而是先说 leider（可惜），给个理由，再提议一个新时间。这一课学剩下三个情态动词 dürfen、wollen、sollen，还有一整套礼貌婉拒的说法。',
      sections: [
        {
          type: 'vocab', title: '情态动词与邀请', sub: '',
          items: [
            { de: 'dürfen', zh: '可以，被允许', en: 'may/to be allowed to', ex: 'Hier darf man nicht rauchen.', exZh: '这里不允许吸烟。' },
            { de: 'wollen', zh: '想要（比 möchten 更直接）', en: 'to want to', ex: 'Ich will nach Hause.', exZh: '我想回家。' },
            { de: 'sollen', zh: '应该，被要求', en: 'should/to be supposed to', ex: 'Der Arzt sagt, ich soll mehr Wasser trinken.', exZh: '医生说我应该多喝水。' },
            { de: 'einladen', zh: '邀请', en: 'to invite', ex: 'Ich möchte dich einladen.', exZh: '我想邀请你。' },
            { de: 'Einladung', art: 'die', pl: 'Einladungen', zh: '邀请', en: 'invitation', ex: 'Danke für die Einladung!', exZh: '谢谢你的邀请！' },
            { de: 'Picknick', art: 'das', pl: 'Picknicks', zh: '野餐', en: 'picnic', ex: 'Wir machen am Sonntag ein Picknick.', exZh: '我们周日野餐。' },
            { de: 'Park', art: 'der', pl: 'Parks', zh: '公园', en: 'park', ex: 'Der Park ist sehr schön.', exZh: '这个公园很漂亮。' },
          ]
        },
        {
          type: 'vocab', title: '婉拒与改约', sub: '',
          items: [
            { de: 'Lust haben (auf)', zh: '对……有兴趣，想做……', en: 'to feel like (doing)', ex: 'Hast du Lust auf ein Picknick?', exZh: '你想去野餐吗？' },
            { de: 'leider', zh: '可惜，遗憾的是', en: 'unfortunately', ex: 'Ich habe leider keine Zeit.', exZh: '我很遗憾没有时间。', note: '婉拒邀请时最重要的词，几乎每次婉拒都会用到' },
            { de: 'stattdessen', zh: '作为替代，取而代之', en: 'instead', ex: 'Stattdessen können wir schwimmen gehen.', exZh: '我们可以改成去游泳。' },
            { de: 'ein anderes Mal', zh: '下次，改天', en: 'another time', ex: 'Können wir ein anderes Mal joggen gehen?', exZh: '我们可以改天去慢跑吗？' },
            { de: 'schade', zh: '可惜', en: 'a pity/shame', ex: 'Schade! Vielleicht ein anderes Mal.', exZh: '真可惜！那就改天吧。' },
            { de: 'klingt gut', zh: '听起来不错', en: 'sounds good', ex: 'Das klingt gut, aber ich kann leider nicht.', exZh: '听起来不错，但我恐怕不行。' },
            { de: 'draußen', zh: '在外面，户外', en: 'outside', ex: 'Wir können draußen essen.', exZh: '我们可以在外面吃。' },
            { de: 'drinnen', zh: '在里面，室内', en: 'inside', ex: 'Heute möchte ich drinnen bleiben.', exZh: '今天我想待在室内。' },
          ]
        },
        {
          type: 'dialogue', title: '周末野餐的邀请', scene: 'Anna 邀请 Wei 周六去公园野餐，但 Wei 要上德语课——看他怎么礼貌地婉拒并改约。',
          lines: [
            { sp: 'Anna', de: 'Wei, ich möchte dich einladen! Wir machen am Samstag ein Picknick im Park. Hast du Lust?', zh: 'Wei，我想邀请你！我们周六在公园野餐。你有兴趣吗？' },
            { sp: 'Wei', de: 'Oh, das klingt gut! Aber ich glaube, ich kann leider nicht.', zh: '哦，听起来不错！但我恐怕不行。' },
            { sp: 'Anna', de: 'Wieso nicht? Musst du arbeiten?', zh: '为什么不行？你要工作吗？' },
            { sp: 'Wei', de: 'Nein, ich muss am Samstag zum Deutschkurs. Den darf ich nicht verpassen.', zh: '不是，我周六要上德语课。我不能错过它。' },
            { sp: 'Anna', de: 'Ach so, schade! Wollt ihr nicht mal eine Pause machen?', zh: '啊，真可惜！你们不休息一下吗？' },
            { sp: 'Wei', de: 'Haha, das würde ich gern, aber der Kurs ist wirklich wichtig für mich.', zh: '哈哈，我也想啊，但这个课对我真的很重要。' },
            { sp: 'Anna', de: 'Verstehe ich total. Sollen wir das Picknick auf Sonntag verschieben?', zh: '完全理解。我们把野餐改到周日怎么样？' },
            { sp: 'Wei', de: 'Sonntag passt mir super! Da habe ich wirklich Lust auf ein Picknick.', zh: '周日我完全没问题！我确实很想去野餐。' },
            { sp: 'Anna', de: 'Perfekt! Dann treffen wir uns Sonntag um 14 Uhr im Park.', zh: '太好了！那我们周日下午两点在公园见。' },
            { sp: 'Wei', de: 'Toll, ich freue mich schon. Was soll ich bringen?', zh: '太棒了，我很期待。我该带点什么？' },
            { sp: 'Anna', de: 'Du musst nichts bringen, wir haben schon alles.', zh: '你什么都不用带，我们已经都准备好了。' },
          ]
        },
        {
          type: 'grammar', title: 'dürfen / wollen / sollen 变位', sub: '和 l1 学过的三个动词是同一套规律',
          html: `<p>还是同一条规律：<b>ich 和 er/sie/es 变位相同，都不加 -t</b>。</p>
<table><tr><th>人称</th><th>dürfen</th><th>wollen</th><th>sollen</th></tr>
<tr><td class="hl">ich</td><td class="hl">darf</td><td class="hl">will</td><td class="hl">soll</td></tr>
<tr><td class="hl">du</td><td class="hl">darfst</td><td class="hl">willst</td><td class="hl">sollst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">darf</td><td class="hl">will</td><td class="hl">soll</td></tr>
<tr><td class="hl">wir</td><td class="hl">dürfen</td><td class="hl">wollen</td><td class="hl">sollen</td></tr>
<tr><td class="hl">ihr</td><td class="hl">dürft</td><td class="hl">wollt</td><td class="hl">sollt</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">dürfen</td><td class="hl">wollen</td><td class="hl">sollen</td></tr></table>
<p>三个词的语气区别要分清：<b>dürfen</b> 是"被允许"（外部给的许可）；<b>wollen</b> 是"想要"，比 möchten 更直接、更强烈，熟人之间常用，正式场合更多用礼貌的 möchten；<b>sollen</b> 是"应该"，常带着"别人的要求或建议"的意味，比如医生的医嘱："Der Arzt sagt, ich soll mehr Wasser trinken."</p>`
        },
        {
          type: 'grammar', title: '六个情态动词总览', sub: '现在你已经学完全部六个',
          html: `<p>加上 l1 学过的三个，现在六个情态动词全部集齐了：</p>
<table><tr><th>情态动词</th><th>核心意思</th><th>例句</th></tr>
<tr><td class="hl">möchten</td><td>想要（礼貌）</td><td class="hl">Ich möchte Kaffee.</td></tr>
<tr><td class="hl">können</td><td>能，会</td><td class="hl">Ich kann schwimmen.</td></tr>
<tr><td class="hl">müssen</td><td>必须</td><td class="hl">Ich muss arbeiten.</td></tr>
<tr><td class="hl">dürfen</td><td>可以，被允许</td><td class="hl">Hier darf man nicht rauchen.</td></tr>
<tr><td class="hl">wollen</td><td>想要（直接）</td><td class="hl">Ich will nach Hause.</td></tr>
<tr><td class="hl">sollen</td><td>应该</td><td class="hl">Du sollst mehr schlafen.</td></tr></table>
<p>六个动词全都遵守 l1 学过的 Satzklammer 结构——不管用哪一个，句子第二位永远是变位的情态动词，句尾永远是动词原形。这个结构以后会在可分动词、完成时里反复出现，是目前为止最值得练熟的一条语序规则。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">婉拒邀请的地道公式：</b>先说 <mark>Das klingt gut, aber...</mark>（听起来不错，但……），接一个 <mark>leider</mark> + 理由，最后主动提议替代方案（<mark>Vielleicht ein anderes Mal?</mark> / <mark>Sollen wir das auf ... verschieben?</mark>）。直接说"不"在德语社交里会显得生硬——给理由、给替代方案，是更自然也更容易被接受的婉拒方式。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"du" 对应 wollen 的正确变位是？', options: ['willst', 'will', 'wollt'], answer: 0, why: 'du 词尾是 -st，词干元音也变化：du willst。' },
        { type: 'cloze', zhHint: '医生说我应该多喝水。', before: 'Der Arzt sagt, ich', after: 'mehr Wasser trinken.', options: ['soll', 'sollst', 'sollen'], answer: 0, why: '主语是 ich，sollen 的 ich 形式是 soll。' },
        { type: 'mcq', q: '想礼貌地婉拒一个邀请，比较地道的说法是？', options: ['Das klingt gut, aber ich kann leider nicht.', '直接说 Nein.', '不回复，假装没看到'], answer: 0, why: '德语社交里婉拒通常先肯定邀请，再用 leider 给出理由，比直接说不更礼貌。' },
        { type: 'order', zh: '我们把野餐改到周日吧？', words: ['Sollen', 'wir', 'das', 'Picknick', 'auf', 'Sonntag', 'verschieben'], why: 'Sollen 提到句首构成建议式问句，动词原形 verschieben 留在句尾。' },
        { type: 'match', pairs: [['dürfen', '可以，被允许'], ['wollen', '想要（直接）'], ['sollen', '应该'], ['schade', '可惜']] },
        { type: 'listen', audio: 'Ich habe leider keine Zeit.', q: '这句话是什么意思？', options: ['我很遗憾没有时间。', '我很有时间。', '我不想去。'], answer: 0, why: 'leider = 可惜，keine Zeit = 没有时间（kein 否定无冠词名词）。' },
        { type: 'listen', audio: 'Wollen wir zusammen ins Kino gehen?', q: '这句话在问什么？', options: ['我们要不要一起去看电影？', '你想一个人去看电影吗？', '电影几点开始？'], answer: 0, why: 'Wollen wir...? = 我们要不要……？是提议做某事的常见句型。' },
        { type: 'speak', de: 'Das klingt gut, aber ich kann leider nicht. Vielleicht ein anderes Mal?', zh: '听起来不错，但我恐怕不行。也许下次吧？' },
      ],
      task: { title: '今天的生活任务', desc: '用 leider + 一个理由，婉拒一次邀请（真实的或假想的），并主动提出一个替代方案，比如"改到周日怎么样？"。' }
    },
  ]
};
