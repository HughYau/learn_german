// 第 26 单元：假设与愿望
export default {
  id: 'u26', num: '26', color: 'green', shape: 'tri',
  de: 'Wenn ich Zeit hätte', zh: '假设与愿望',
  desc: 'u15 学过的 Könnten Sie/Ich würde gern 其实只是冰山一角——这个单元把 Konjunktiv II 系统讲透：万能公式 würde+Infinitiv、四个必背专属形式，还有"如果……我就……"的完整条件句。',
  kann: [
    { de: 'Ich kann mit würde + Infinitiv sagen, was ich in einer bestimmten Situation tun würde.', zh: '我能用 würde + 动词原形表达在某种情况下我会做什么。' },
    { de: 'Ich kann wäre, hätte, könnte und müsste in eigenen Wunschsätzen verwenden.', zh: '我能在表达愿望的句子里使用 wäre、hätte、könnte、müsste。' },
    { de: 'Ich kann einen vollständigen Konditionalsatz („Wenn ich..., würde ich...“) bilden.', zh: '我能构造完整的“如果……我就……”虚拟条件句。' },
    { de: 'Ich kann einem Freund mit „An deiner Stelle...“ oder „Du könntest doch...“ einen höflichen Vorschlag machen.', zh: '我能用委婉的方式给朋友提建议。' },
  ],
  lessons: [
    {
      id: 'u26l1', title: '要是有更多时间就好了', de: 'Ich hätte gern mehr Zeit',
      intro: 'Wei 最近有点累，和 Jonas 聊起"如果有更多时间会做什么"。这一课系统学习 Konjunktiv II（虚拟式二式）的现在式：万能公式 würde + Infinitiv，还有必须单独背的四个专属形式 wäre/hätte/könnte/müsste——u15 学过的 Könnten Sie 原来就是这套系统的一部分。',
      sections: [
        {
          type: 'vocab', title: '愿望词汇', sub: '',
          items: [
            { de: 'Wunsch', art: 'der', pl: 'Wünsche', zh: '愿望', en: 'wish', ex: 'Das ist mein größter Wunsch.', exZh: '这是我最大的愿望。' },
            { de: 'sich wünschen', zh: '希望，渴望（+ Akkusativ）', en: 'to wish for', ex: 'Ich wünsche mir mehr freie Zeit.', exZh: '我希望能有更多自由时间。', note: '反身动词，wünschen sich + Akkusativ，和 der Wunsch 同根' },
            { de: 'eigentlich', zh: '其实，本来（说实话）', en: 'actually', ex: 'Eigentlich hätte ich gern mehr Zeit.', exZh: '其实我想有更多时间。' },
            { de: 'stattdessen', zh: '而是，作为替代', en: 'instead', ex: 'Ich fahre nicht ans Meer, ich bleibe stattdessen zu Hause.', exZh: '我不去海边了，而是待在家里。' },
          ]
        },
        {
          type: 'vocab', title: '想象与假设', sub: '',
          items: [
            { de: 'träumen (von)', zh: '梦想，向往（+ von 接 Dativ）', en: 'to dream (of)', ex: 'Ich träume von einem langen Urlaub.', exZh: '我梦想着一次长假。' },
            { de: 'Traum', art: 'der', pl: 'Träume', zh: '梦，梦想', en: 'dream', ex: 'Das ist ein schöner Traum.', exZh: '这是个美好的梦想。' },
          ]
        },
        {
          type: 'dialogue', title: '要是有更多时间就好了', scene: 'Wei 觉得最近有点累，和 Jonas 聊起"如果有更多时间会做什么"——这一课学的 würde/wäre/hätte/könnte/müsste 全都用得上。',
          lines: [
            { sp: 'Jonas', de: 'Wei, wie geht\'s? Du siehst müde aus.', zh: 'Wei，你还好吗？看起来挺累的。' },
            { sp: 'Wei', de: 'Ja, ich hätte gern mehr Zeit für mich selbst.', zh: '是啊，我希望能有更多属于自己的时间。' },
            { sp: 'Jonas', de: 'Verstehe ich total. Was würdest du denn machen, wenn du mehr Zeit hättest?', zh: '完全理解。如果你有更多时间，你会做什么？' },
            { sp: 'Wei', de: 'Ich würde öfter Sport machen und mehr lesen.', zh: '我会更常运动，多读点书。' },
            { sp: 'Jonas', de: 'Ich wäre jetzt auch gern am Meer, ehrlich gesagt.', zh: '说实话，我现在也想在海边。' },
            { sp: 'Wei', de: 'Das klingt schön! Ich müsste eigentlich auch mal wieder Urlaub nehmen.', zh: '听起来真不错！其实我也该休个假了。' },
            { sp: 'Jonas', de: 'Könntest du dir nicht einfach eine Woche freinehmen?', zh: '你不能干脆请一周假吗？' },
            { sp: 'Wei', de: 'Vielleicht. Ich könnte meinen Chef fragen.', zh: '也许吧。我可以问问我老板。' },
            { sp: 'Jonas', de: 'Was würdest du am liebsten tun im Urlaub?', zh: '你休假时最想做什么？' },
            { sp: 'Wei', de: 'Ich würde am liebsten wandern gehen, irgendwo in den Bergen.', zh: '我最想去徒步，找个山里的地方。' },
            { sp: 'Jonas', de: 'Das wäre bestimmt toll. Ich würde stattdessen lieber ans Meer fahren.', zh: '那肯定很棒。我的话会更想去海边。' },
            { sp: 'Wei', de: 'Jeder hat eben einen anderen Wunsch!', zh: '每个人的愿望都不一样嘛！' },
          ]
        },
        {
          type: 'grammar', title: 'würde + Infinitiv：万能的假设公式', sub: '回顾 u15 学过的雏形，这次讲透原理',
          html: `<p>u15 学过 <mark>Ich würde gern...</mark> 当固定礼貌短语用——现在揭晓完整原理：<b class="de">würde</b> 是 <b class="de">werden</b> 的 Konjunktiv II（虚拟式二式），和情态动词一样构成句框（Satzklammer）：<b>würde 站第二位，动词原形踢到句尾</b>。这套结构几乎对所有动词都适用：</p>
<table><tr><th>人称</th><th>würde</th></tr>
<tr><td class="hl">ich</td><td class="hl">würde</td></tr>
<tr><td class="hl">du</td><td class="hl">würdest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">würde</td></tr></table>
<p class="de">Ich <mark>würde</mark> öfter Sport <mark>machen</mark>.（我会更常运动。）　Was <mark>würdest</mark> du <mark>machen</mark>?（你会做什么？）</p>
<p>u15 的 <mark>Könnten Sie...?</mark> 和 <mark>Ich würde gern...</mark> 正是这套虚拟式系统的两个具体实例——现在你知道了它们背后完整的变位逻辑，不再只是死记的固定短语。</p>`
        },
        {
          type: 'grammar', title: 'wäre、hätte、könnte、müsste：四个必须单独背的形式', sub: 'sein/haben/情态动词不用 würde，有自己专属的形式',
          html: `<p>sein、haben 和情态动词不用"würde + Infinitiv"这套万能公式，而是有自己专属的 Konjunktiv II 形式，必须单独记熟：</p>
<table><tr><th>人称</th><th>sein → wäre</th><th>haben → hätte</th><th>können → könnte</th><th>müssen → müsste</th></tr>
<tr><td class="hl">ich</td><td class="hl">wäre</td><td class="hl">hätte</td><td class="hl">könnte</td><td class="hl">müsste</td></tr>
<tr><td class="hl">du</td><td class="hl">wärst</td><td class="hl">hättest</td><td class="hl">könntest</td><td class="hl">müsstest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">wäre</td><td class="hl">hätte</td><td class="hl">könnte</td><td class="hl">müsste</td></tr></table>
<p><b class="t">愿望句的两个高频框架：</b><mark>Ich hätte gern mehr Zeit.</mark>（我想有更多时间。）　<mark>Ich wäre jetzt gern am Meer.</mark>（我现在想在海边。）——这两句直接把 hätte/wäre 当句子的主要动词用，后面不需要再接动词原形。</p>
<p>注意 <b class="de">könnte/müsste</b> 都带变音（können→könnte，müssen→müsste），这是因为它们的原形本身就带变音（kann/muss）；下一课会遇到不带变音的情态动词虚拟式（wollte/sollte），别弄混。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">Konjunktiv II 的两种用法，别混淆：</b>一种是礼貌客气（u15 学过的 Könnten Sie...?），另一种是真正的假设/愿望（这一课的 Wenn ich Zeit hätte...）。形式完全一样，靠语境区分——这也是为什么 u15 先让你"知其然"背短语，现在才"知其所以然"讲原理：语法点吃透了，两种用法自然就都会用了。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'würde + Infinitiv 结构里，动词原形应该放在哪里？', options: ['句尾', '紧跟在 würde 后面', '句首'], answer: 0, why: '和情态动词句框一样，würde 站第二位，动词原形踢到句尾。' },
        { type: 'cloze', zhHint: '如果你有更多时间，你会做什么？', before: 'Was', after: 'du machen, wenn du mehr Zeit hättest?', options: ['würdest', 'würde', 'würden'], answer: 0, why: '主语是 du，对应 würdest。' },
        { type: 'cloze', zhHint: '我现在也想在海边。', before: 'Ich', after: 'jetzt auch gern am Meer.', options: ['wäre', 'würde', 'hätte'], answer: 0, why: '"在某处"用 sein 的虚拟式 wäre，不用 würde+sein。' },
        { type: 'mcq', q: 'sein、haben、情态动词的虚拟式二式，为什么不用 würde+Infinitiv？', options: ['它们有自己专属的固定形式（wäre/hätte/könnte...），比 würde+sein/haben 更自然', '因为这几个动词没有虚拟式', '因为 würde 只能用于规则动词'], answer: 0, why: 'sein/haben/情态动词各自有专属的 Konjunktiv II 形式，德语里几乎不说 würde sein / würde haben。' },
        { type: 'order', zh: '其实我也该休个假了。', words: ['Ich', 'müsste', 'eigentlich', 'auch', 'mal', 'wieder', 'Urlaub', 'nehmen'], why: 'müsste 是变位动词站第二位，nehmen 原形踢到句尾。' },
        { type: 'match', pairs: [['der Wunsch', '愿望'], ['sich wünschen', '希望，渴望'], ['träumen von', '梦想，向往'], ['der Traum', '梦想']] },
        { type: 'listen', audio: 'Ich würde am liebsten wandern gehen, irgendwo in den Bergen.', q: '这句话是什么意思？', options: ['我最想去徒步，找个山里的地方。', '我讨厌爬山。', '我已经去爬过山了。'], answer: 0, why: 'würde am liebsten...gehen = 最想去……，in den Bergen = 在山里。' },
        { type: 'speak', de: 'Wenn ich mehr Zeit hätte, würde ich öfter Sport machen.', zh: '如果我有更多时间，我会更常运动。' },
      ],
      task: { title: '今天的生活任务', desc: '用 Konjunktiv II 写 3 个关于自己生活的愿望句，wäre/hätte/könnte/müsste 和 würde+Infinitiv 各至少用一次，比如 Ich hätte gern.../Ich wäre gern.../Ich würde gern...' }
    },
    {
      id: 'u26l2', title: '如果我中了彩票', de: 'Wenn ich im Lotto gewinnen würde',
      intro: 'Wei 和 Jonas 闲聊"如果中了彩票会怎样"，聊着聊着变成了认真讨论怎么给自己多留点时间——这一课学完整的虚拟条件句结构，还有委婉建议的说法：An deiner Stelle würde ich.../Du könntest doch...',
      sections: [
        {
          type: 'vocab', title: '条件句关键词', sub: '',
          items: [
            { de: 'Million', art: 'die', pl: 'Millionen', zh: '百万', en: 'million', ex: 'Wenn ich eine Million hätte, würde ich reisen.', exZh: '如果我有一百万，我会去旅行。' },
            { de: 'gewinnen', zh: '赢得，中奖', en: 'to win', ex: 'Er hat im Lotto gewonnen.', exZh: '他中了彩票。' },
            { de: 'Glück', art: 'das', zh: '运气，幸运，幸福', en: 'luck/happiness', ex: 'Wir hätten dann mehr Glück im Alltag.', exZh: '那我们日常生活中就会更幸福了。' },
          ]
        },
        {
          type: 'vocab', title: '委婉建议', sub: '',
          items: [
            { de: 'an deiner Stelle', zh: '要是我是你的话', en: 'in your place / if I were you', ex: 'An deiner Stelle würde ich das ansprechen.', exZh: '要是我是你，我会提出来。' },
            { de: 'Rat', art: 'der', pl: 'Ratschläge', zh: '建议，忠告', en: 'advice', ex: 'Das ist ein guter Rat.', exZh: '这是个好建议。', note: '复数不规则，Rat → Ratschläge' },
            { de: 'raten', zh: '建议（某人，+ Dativ）', en: 'to advise (sb.)', ex: 'Ich rate dir, mit ihm zu sprechen.', exZh: '我建议你和他谈谈。' },
          ]
        },
        {
          type: 'dialogue', title: '如果我中了彩票', scene: 'Wei 和 Jonas 闲聊"如果中了彩票会怎样"，聊着聊着变成了认真讨论怎么给自己多留点时间——顺便学会怎么委婉给建议。',
          lines: [
            { sp: 'Jonas', de: 'Wei, was würdest du machen, wenn du im Lotto gewinnen würdest?', zh: 'Wei，如果你中了彩票你会做什么？' },
            { sp: 'Wei', de: 'Wenn ich eine Million gewinnen würde, würde ich sofort kündigen!', zh: '如果我中了一百万，我会立刻辞职！' },
            { sp: 'Jonas', de: 'Ha, das dachte ich mir! Und dann?', zh: '哈，我就知道！然后呢？' },
            { sp: 'Wei', de: 'Dann würde ich um die Welt reisen. Aber eigentlich bin ich gern hier in Leipzig.', zh: '然后我会环游世界。不过其实我挺喜欢待在莱比锡的。' },
            { sp: 'Jonas', de: 'Stimmt, so schlecht ist unser Leben ja auch nicht.', zh: '说得对，我们的生活也没那么糟。' },
            { sp: 'Wei', de: 'Genau. Wenn ich mehr Zeit hätte, würde ich einfach öfter verreisen, kein Lottogewinn nötig.', zh: '就是说。如果我有更多时间，我会更常出去旅行，都不需要中彩票。' },
            { sp: 'Jonas', de: 'An deiner Stelle würde ich mal mit deinem Chef über eine Viertagewoche sprechen.', zh: '要是我是你，我会找你老板聊聊四天工作制。' },
            { sp: 'Wei', de: 'Guter Rat! Du könntest doch auch mal fragen, oder?', zh: '好建议！你不也可以问问吗？' },
            { sp: 'Jonas', de: 'Stimmt, ich sollte das wirklich mal ansprechen.', zh: '说得对，我真该提一提这事。' },
            { sp: 'Wei', de: 'Wenn wir beide weniger arbeiten würden, hätten wir viel mehr Glück im Alltag.', zh: '如果我们俩都少工作一点，日常生活会幸福得多。' },
            { sp: 'Jonas', de: 'Da hast du recht. Lass uns das wirklich versuchen, statt nur davon zu träumen.', zh: '你说得对。我们真该试试，而不是只停留在梦想里。' },
            { sp: 'Wei', de: 'Abgemacht!', zh: '一言为定！' },
          ]
        },
        {
          type: 'grammar', title: '虚拟条件句：wenn 从句 V-letzt + 主句倒装', sub: '"如果……我就……"的完整结构',
          html: `<p>完整的虚拟条件句由两半组成，动词位置各有各的规则：</p>
<table><tr><th>wenn 从句（V-letzt，动词垫底）</th><th>主句（变位动词紧跟第二位）</th></tr>
<tr><td class="hl">Wenn ich eine Million gewinnen würde,</td><td class="hl">würde ich sofort kündigen.</td></tr>
<tr><td class="hl">Wenn ich mehr Zeit hätte,</td><td class="hl">würde ich öfter verreisen.</td></tr>
<tr><td class="hl">Wenn wir weniger arbeiten würden,</td><td class="hl">hätten wir mehr Glück.</td></tr></table>
<p><b>wenn 从句</b>里的动词（würde/hätte 等）照旧踢到从句最后，复现 weil/dass/ob 学过的 V-letzt。<b>主句</b>因为整个 wenn 从句占据了"第一位"，变位动词必须紧跟着站上"第二位"——主语和动词的位置对调，这叫<b class="de">Inversion（倒装）</b>：正常语序是"ich würde"，这里因为前面有 wenn 从句垫着，就变成"würde ich"。</p>`
        },
        {
          type: 'grammar', title: '委婉建议 + wäre/hätte 与 würde 的分工', sub: '两个高危点一起理清',
          html: `<p><b class="t">委婉建议的两个句型：</b></p>
<table><tr><th>句型</th><th>例句</th></tr>
<tr><td>An deiner Stelle würde ich...</td><td class="hl">An deiner Stelle würde ich mal mit dem Chef sprechen.</td></tr>
<tr><td>Du könntest doch...</td><td class="hl">Du könntest doch auch mal fragen.</td></tr></table>
<p><b class="t">高危点——记住这条分工规则：</b>sein → <mark>wäre</mark>，haben → <mark>hätte</mark>，情态动词（können/müssen/dürfen 等）→ <mark>könnte/müsste/dürfte...</mark>，这几个动词有专属的 Konjunktiv II 形式，<b>不用</b> würde+sein/würde+haben。除了这几个，<b>其余所有动词一律用 würde + Infinitiv</b>（würde reisen、würde arbeiten、würde sprechen）。</p>
<p>两个半句的动词位置也要分清：<b>wenn 从句动词永远垫底（V-letzt）</b>，<b>主句动词永远紧跟第二位</b>，逗号前后主谓顺序不能颠倒错位。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">条件句可以倒过来说：</b>Wenn 从句不一定放在前面——<mark>Ich würde sofort kündigen, wenn ich eine Million gewinnen würde.</mark> 这样说也完全正确，主句在前时用正常语序（不倒装），wenn 从句还是老老实实把动词放在最后。两种顺序哪个先说都可以，德国人口语里两种都常用。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'wenn 从句里的动词应该放在哪里？', options: ['从句最后（V-letzt）', '从句第二位', '从句最前面'], answer: 0, why: 'wenn 从句遵循 V-letzt 规则，动词垫底。' },
        { type: 'cloze', zhHint: '如果我中了一百万，我会立刻辞职。', before: 'Wenn ich eine Million gewinnen würde,', after: 'ich sofort kündigen.', options: ['würde', 'würdest', 'wäre'], answer: 0, why: '主句主语是 ich，对应 würde，且紧跟逗号后站第二位（倒装）。' },
        { type: 'cloze', zhHint: '要是我是你，我会找你老板聊聊。', before: 'An deiner Stelle', after: 'ich mal mit deinem Chef sprechen.', options: ['würde', 'würdest', 'wäre'], answer: 0, why: '主语是 ich，用 würde；sprechen 是普通动词，用万能公式 würde+Infinitiv。' },
        { type: 'mcq', q: '"Wenn ich mehr Zeit ___, würde ich öfter verreisen." 应该填哪个词？', options: ['hätte', 'würde haben', 'habe'], answer: 0, why: 'haben 的虚拟式是专属形式 hätte，不用 würde+haben。' },
        { type: 'order', zh: '如果我们俩都少工作一点，日常生活会更幸福。', words: ['Wenn', 'wir', 'weniger', 'arbeiten', 'würden', 'hätten', 'wir', 'mehr', 'Glück'], why: 'wenn 从句动词 würden 垫底，主句动词 hätten 紧跟着站第二位（倒装）。' },
        { type: 'match', pairs: [['die Million', '百万'], ['gewinnen', '赢得，中奖'], ['an deiner Stelle', '要是我是你'], ['raten', '建议（某人）']] },
        { type: 'listen', audio: 'Wenn ich mehr Zeit hätte, würde ich öfter verreisen.', q: '这句话是什么意思？', options: ['如果我有更多时间，我会更常去旅行。', '我从来没有时间旅行。', '我已经旅行太多次了。'], answer: 0, why: 'wenn ich mehr Zeit hätte = 如果我有更多时间，würde...verreisen = 会去旅行。' },
        { type: 'speak', de: 'An deiner Stelle würde ich mit dem Chef sprechen, du könntest doch einfach fragen.', zh: '要是我是你，我会去找老板谈谈，你完全可以直接问问看。' },
      ],
      task: { title: '今天的生活任务', desc: '用"Wenn ich..., würde ich..."的虚拟条件句结构写 2-3 个关于自己生活的假设句（"如果我有更多时间/如果我中了彩票，我会……"），再用 An deiner Stelle 或 Du könntest doch 给朋友提一条委婉建议。' }
    },
  ]
};
