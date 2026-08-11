// 第 30 单元：观点与讨论
export default {
  id: 'u30', num: '30', color: 'red', shape: 'half',
  de: 'Meinungen und Debatten', zh: '观点与讨论',
  desc: '就环保、教育、工作方式这些日常话题表达自己的观点、转述别人说了什么、把两面的看法都摆出来——这个单元把 dass 转述、laut+名词、einerseits...andererseits 一次性配齐。',
  kann: [
    { de: 'Ich kann mit einem dass-Satz wiedergeben, was jemand anderes gesagt oder gemeint hat.', zh: '我能用 dass 从句转述别人说过或认为的观点。' },
    { de: 'Ich kann mit laut + Quelle eine Information oder Meinung zuordnen.', zh: '我能用 laut + 名词标明信息或观点的来源。' },
    { de: 'Ich kann mit einerseits...andererseits zwei Seiten eines Themas darstellen.', zh: '我能用 einerseits...andererseits 呈现一个话题的两面观点。' },
    { de: 'Ich kann mit einer indirekten Frage ausdrücken, worüber ich mir noch unsicher bin.', zh: '我能用间接疑问句表达自己还未确定的地方。' },
  ],
  lessons: [
    {
      id: 'u30l1', title: '转述同事的观点', de: 'Was die anderen gesagt haben',
      intro: 'Wei 参加一次关于气候变化的小组讨论，会后想跟 Jonas 转述同事说了什么。这一课学 Indirekte Rede（间接引语）最常用的两种方式：dass 从句和 laut + 名词——转述别人的观点从此不用干巴巴地说"他说了……"。',
      sections: [
        {
          type: 'vocab', title: '环保与社会话题', sub: '',
          items: [
            { de: 'Umwelt', art: 'die', zh: '环境', en: 'environment', ex: 'Wir müssen mehr für die Umwelt tun.', exZh: '我们得为环境做更多事。', note: '不用复数' },
            { de: 'Klimawandel', art: 'der', zh: '气候变化', en: 'climate change', ex: 'Der Klimawandel betrifft uns alle.', exZh: '气候变化影响我们所有人。', note: '不用复数' },
            { de: 'Bildung', art: 'die', zh: '教育', en: 'education', ex: 'Gute Bildung ist wichtig für die Zukunft.', exZh: '良好的教育对未来很重要。', note: '不用复数' },
            { de: 'Work-Life-Balance', art: 'die', zh: '工作生活平衡', en: 'work-life balance', ex: 'Viele Deutsche legen Wert auf die Work-Life-Balance.', exZh: '很多德国人很看重工作生活平衡。', note: '直接借用英语词，德语口语里也很常用' },
            { de: 'Studie', art: 'die', pl: 'Studien', zh: '研究，调查报告', en: 'study', ex: 'Laut einer aktuellen Studie arbeiten viele Menschen lieber im Homeoffice.', exZh: '据一项最新研究，很多人更喜欢在家办公。' },
          ]
        },
        {
          type: 'vocab', title: '转述与观点动词', sub: '',
          items: [
            { de: 'Standpunkt', art: 'der', pl: 'Standpunkte', zh: '立场，观点', en: 'standpoint', ex: 'Ich verstehe deinen Standpunkt.', exZh: '我理解你的立场。' },
            { de: 'behaupten', zh: '声称，断言', en: 'to claim', ex: 'Er behauptet, dass er recht hat.', exZh: '他声称自己是对的。' },
            { de: 'der Ansicht sein', zh: '持……观点，认为', en: 'to be of the opinion', ex: 'Ich bin der Ansicht, dass wir handeln müssen.', exZh: '我认为我们必须采取行动。', note: '固定搭配，等同 der Meinung sein' },
            { de: 'laut', zh: '据……，根据', en: 'according to', ex: 'Laut der Studie steigen die Temperaturen.', exZh: '据这项研究，气温在上升。', note: '后接 Genitiv 或 Dativ 均规范：laut der Studie / laut dem Bericht 都对——语法点见下方 grammar 区块' },
            { de: 'angeblich', zh: '据说的，号称的（暗示存疑）', en: 'allegedly', ex: 'Er ist angeblich krank, aber ich habe ihn joggen gesehen.', exZh: '他据说病了，但我看见他在跑步。' },
          ]
        },
        {
          type: 'dialogue', title: '转述同事的观点', scene: 'Wei 参加了一次关于气候变化的小组讨论，会后和 Jonas 聊起讨论内容，顺便转述另一位同事的看法。',
          lines: [
            { sp: 'Jonas', de: 'Wie war die Diskussion über den Klimawandel?', zh: '气候变化的那场讨论怎么样？' },
            { sp: 'Wei', de: 'Ziemlich spannend. Anna behauptet, dass wir viel zu wenig für die Umwelt tun.', zh: '挺精彩的。Anna 说我们为环境做得太少了。' },
            { sp: 'Jonas', de: 'Das sehe ich auch so. Was meint sie denn konkret?', zh: '我也这么认为。她具体是什么意思？' },
            { sp: 'Wei', de: 'Sie ist der Ansicht, dass jeder Einzelne mehr Verantwortung übernehmen sollte.', zh: '她认为每个人都应该承担更多责任。' },
            { sp: 'Jonas', de: 'Interessant. Gibt es dazu eigentlich Studien?', zh: '有意思。这方面有相关研究吗？' },
            { sp: 'Wei', de: 'Ja, laut einer Studie der Universität Leipzig sinkt der CO2-Verbrauch, wenn Menschen im Homeoffice arbeiten.', zh: '有，据莱比锡大学的一项研究，如果人们在家办公，二氧化碳排放就会下降。' },
            { sp: 'Jonas', de: 'Laut dem Bericht, den ich letzte Woche gelesen habe, stimmt das tatsächlich.', zh: '据我上周读到的一份报告，确实是这样。' },
            { sp: 'Wei', de: 'Ein anderer Kollege hat aber behauptet, dass Homeoffice angeblich die Produktivität senkt.', zh: '不过另一位同事说，据说在家办公会降低生产力。' },
            { sp: 'Jonas', de: 'Das würde ich anzweifeln, ehrlich gesagt.', zh: '说实话，这个我持怀疑态度。' },
            { sp: 'Wei', de: 'Ich auch. Aber es zeigt, wie unterschiedlich die Standpunkte sind.', zh: '我也是。不过这也说明大家的立场差别有多大。' },
            { sp: 'Jonas', de: 'Genau deshalb sind solche Diskussionen ja so wichtig.', zh: '正因为如此，这类讨论才这么重要。' },
            { sp: 'Wei', de: 'Stimmt. Ich finde, dass wir öfter offen darüber reden sollten.', zh: '是啊。我觉得我们应该更经常公开聊聊这个话题。' },
          ]
        },
        {
          type: 'grammar', title: 'Indirekte Rede 基础：用 dass 从句转述别人说的话', sub: '把"我认为"扩展成"转述别人所说"',
          html: `<p>u20 学过 <mark>dass</mark> 从句表达自己的看法（<span class="de">Ich finde, dass...</span>）——这一课把同一个结构用来<b>转述别人说的话</b>：</p>
<table><tr><th>转述动词</th><th>例句</th></tr>
<tr><td class="hl">sagen（说）</td><td class="hl">Er sagt, dass der Klimawandel das wichtigste Thema ist.</td></tr>
<tr><td class="hl">behaupten（声称）</td><td class="hl">Sie behauptet, dass wir zu wenig tun.</td></tr>
<tr><td class="hl">der Ansicht sein（认为）</td><td class="hl">Ich bin der Ansicht, dass jeder Verantwortung übernehmen sollte.</td></tr></table>
<p>结构完全是老朋友：<mark>dass</mark> 引导从句，动词垫底（V-letzt）——复现 u20。转述时人称要跟着说话人的身份调整：<span class="de">Anna sagt: "Ich tue genug."</span> 转述成 <span class="de">Anna sagt, dass <mark>sie</mark> genug tut.</span>（ich → sie）。</p>`
        },
        {
          type: 'grammar', title: 'laut + 名词：转述来源的另一种说法', sub: '不用 dass 从句，直接说"据……"',
          html: `<p><mark>laut</mark>（据……，根据）是转述的另一个高频工具，后面直接接名词，不需要从句：</p>
<p class="de">Laut <mark>einer Studie</mark> steigen die Temperaturen.（据一项研究，气温在上升。）</p>
<p class="de">Laut <mark>dem Bericht</mark> hat sich die Lage verbessert.（据这份报告，情况有所改善。）</p>
<p><b class="t">格的选择：</b>laut 后面接 Genitiv 或 Dativ <b>都是规范用法</b>——<mark>laut der Studie</mark>（Genitiv）和 <mark>laut dem Bericht</mark>（Dativ）两种说法都对，日常口语里 Dativ 更常见一些，但不必纠结选哪个，写对其中一种就是正确的。</p>
<p>把 laut 和 u29 刚学的 wegen/während/trotz 放在一起记：这几个介词后面接的名词都要"变格"，只是 laut 比较特殊——两个格都可以用。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">你可能会在新闻里见到另一种转述形式：</b>德语高阶书面语（尤其是新闻）还有一套专门用于转述的语法——Konjunktiv I（如 <mark>er sei</mark> 而不是 <mark>er ist</mark>），常见于"新闻说某人说了什么"这种场合。这一课不教这套系统，只需要知道它存在、读到 "sei/habe" 这类词形时能反应过来"这是在转述别人的话"就够了；日常口语和写作里，用这一课学的 dass 从句和 laut 完全够用。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"laut der Studie" 和 "laut dem Bericht" 哪个语法正确？', options: ['两个都对，laut 后接 Genitiv 或 Dativ 都规范', '只有 Genitiv 正确', '只有 Dativ 正确'], answer: 0, why: 'laut 是少数两个格都规范的介词，Genitiv 和 Dativ 都对。' },
        { type: 'cloze', zhHint: 'Anna 说她做得不够。（dass 从句转述）', before: 'Anna sagt,', after: 'sie zu wenig tut.', options: ['dass', 'weil', 'ob'], answer: 0, why: '转述别人说的话用 dass 从句，动词垫底。' },
        { type: 'cloze', zhHint: '据一项研究，气温在上升。（laut + Genitiv 阴性不定冠词）', before: 'Laut', after: 'Studie steigen die Temperaturen.', options: ['einer', 'eine', 'einen'], answer: 0, why: 'laut 后接 Genitiv，Studie 是阴性名词，不定冠词 Genitiv 阴性是 einer。' },
        { type: 'mcq', q: '"Er ist angeblich krank, aber ich habe ihn joggen gesehen." angeblich 在这里暗示什么？', options: ['说话人对这个说法有所怀疑', '说话人完全相信这个说法', '这是官方证实的消息'], answer: 0, why: 'angeblich 表示"据说，号称"，常带有说话人不完全相信的意味。' },
        { type: 'order', zh: '他声称他是对的。', words: ['Er', 'behauptet', 'dass', 'er', 'recht', 'hat'], why: 'behauptet 是主句动词（V2），dass 引导从句，动词 hat 垫底（V-letzt）。' },
        { type: 'match', pairs: [['der Klimawandel', '气候变化'], ['die Studie', '研究'], ['behaupten', '声称'], ['angeblich', '据说的']] },
        { type: 'listen', audio: 'Laut einer Studie der Universität Leipzig sinkt der CO2-Verbrauch, wenn Menschen im Homeoffice arbeiten.', q: '这句话是什么意思？', options: ['据莱比锡大学的一项研究，人们在家办公时二氧化碳排放会下降。', '这项研究还没有结果。', '在家办公会增加碳排放。'], answer: 0, why: 'Laut einer Studie = 据一项研究，sinkt = 下降。' },
        { type: 'speak', de: 'Ich bin der Ansicht, dass wir mehr für die Umwelt tun sollten.', zh: '我认为我们应该为环境多做一些。' },
      ],
      task: { title: '今天的生活任务', desc: '挑一个身边正在讨论的话题（环保/教育/工作方式），写 2 句用 dass 转述某人的观点，再写 1 句用 laut + 名词转述一个信息来源（新闻、研究、报告都行）。' }
    },
    {
      id: 'u30l2', title: '在家办公还是去办公室？', de: 'Homeoffice oder Büro?',
      intro: 'Wei 和 Anna 讨论"在家办公 vs. 去办公室"这个话题，两人观点不同。这一课学怎么用 einerseits...andererseits 说"一方面...另一方面..."把两边的观点都摆出来，还有怎么把讨论中出现的问题用间接疑问句表达出来。',
      sections: [
        {
          type: 'vocab', title: '讨论与立场', sub: '',
          items: [
            { de: 'Debatte', art: 'die', pl: 'Debatten', zh: '辩论，讨论', en: 'debate', ex: 'Die Debatte über Homeoffice ist noch nicht vorbei.', exZh: '关于在家办公的讨论还没有结束。' },
            { de: 'diskutieren', zh: '讨论', en: 'to discuss', ex: 'Wir diskutieren gerade über die Work-Life-Balance.', exZh: '我们正在讨论工作生活平衡的话题。' },
            { de: 'Vorschlag', art: 'der', pl: 'Vorschläge', zh: '建议，提议', en: 'proposal', ex: 'Das ist ein guter Vorschlag.', exZh: '这是个好建议。' },
            { de: 'vorschlagen', zh: '提议，建议', en: 'to suggest', ex: 'Ich schlage vor, zwei Tage im Homeoffice zu arbeiten.', exZh: '我建议每周有两天在家办公。', note: '可分动词' },
            { de: 'überzeugend', zh: '有说服力的', en: 'convincing', ex: 'Ihr Argument war sehr überzeugend.', exZh: '她的论点很有说服力。' },
          ]
        },
        {
          type: 'vocab', title: '赞同与反对', sub: '',
          items: [
            { de: 'zustimmen', zh: '同意（+Dativ）', en: 'to agree', ex: 'Ich stimme dir in diesem Punkt zu.', exZh: '在这一点上我同意你。', note: '复现词，u25 学过；可分动词' },
            { de: 'widersprechen', zh: '反驳，反对（+Dativ）', en: 'to contradict', ex: 'Da muss ich dir widersprechen.', exZh: '这一点我得反驳你。', note: '变音动词：du widersprichst' },
            { de: 'einerseits...andererseits', zh: '一方面……另一方面……', en: 'on the one hand...on the other hand', ex: 'Einerseits spare ich Zeit, andererseits fehlt mir der Kontakt zu Kollegen.', exZh: '一方面我省了时间，另一方面我缺少和同事的接触。' },
            { de: 'Kompromiss', art: 'der', pl: 'Kompromisse', zh: '妥协，折中方案', en: 'compromise', ex: 'Wir haben einen guten Kompromiss gefunden.', exZh: '我们找到了一个不错的折中方案。' },
          ]
        },
        {
          type: 'dialogue', title: '在家办公还是去办公室？', scene: 'Wei 和 Anna 讨论"在家办公 vs. 去办公室"这个话题，两人观点不同，用 einerseits...andererseits 把各自的立场说清楚。',
          lines: [
            { sp: 'Anna', de: 'Was denkst du eigentlich über Homeoffice? Ich diskutiere darüber ständig mit meinem Partner.', zh: '你到底怎么看在家办公这件事？我经常跟我伴侣讨论这个。' },
            { sp: 'Wei', de: 'Einerseits spare ich viel Zeit, wenn ich zu Hause arbeite. Andererseits fehlt mir manchmal der direkte Kontakt zu Kollegen.', zh: '一方面在家工作能省不少时间，另一方面有时候我会缺少和同事的直接接触。' },
            { sp: 'Anna', de: 'Genau das ist auch mein Punkt. Ich frage mich oft, ob wir überhaupt produktiver im Büro sind.', zh: '这正是我想说的。我常常在想，我们在办公室是不是真的更有效率。' },
            { sp: 'Wei', de: 'Das kann man wohl nicht pauschal beantworten. Es kommt darauf an, welche Aufgabe man gerade hat.', zh: '这个大概没法一概而论。要看当时手头是什么任务。' },
            { sp: 'Anna', de: 'Stimmt. Bei konzentrierter Arbeit bin ich zu Hause klar produktiver, bei Teambesprechungen eher im Büro.', zh: '没错。需要专注的工作我在家明显效率更高，团队会议倒是在办公室更好。' },
            { sp: 'Wei', de: 'Genau, deshalb schlage ich vor, dass wir einen Kompromiss finden: zwei Tage Homeoffice, drei Tage Büro.', zh: '是啊，所以我建议我们找一个折中方案：一周两天在家，三天在办公室。' },
            { sp: 'Anna', de: 'Das klingt überzeugend. Aber ich frage mich, wie unser Chef darauf reagieren würde.', zh: '听起来挺有说服力的。不过我在想我们老板会怎么反应。' },
            { sp: 'Wei', de: 'Keine Ahnung, aber wir könnten ihm ja mal vorschlagen, es einen Monat lang zu testen.', zh: '不知道，不过我们可以建议他先试行一个月看看。' },
            { sp: 'Anna', de: 'Guter Vorschlag! Ich stimme dir zu, ein Kompromiss ist meistens die beste Lösung.', zh: '好建议！我同意你，折中方案通常是最好的解决办法。' },
            { sp: 'Wei', de: 'Trotzdem widerspreche ich dir in einem Punkt: Ganz ohne Bürotage würde ich das Team zu wenig kennenlernen.', zh: '不过在一点上我要反驳你：完全不来办公室的话，我会对团队了解得太少。' },
            { sp: 'Anna', de: 'Da hast du recht. Einerseits mag ich die Freiheit, andererseits brauche ich auch den sozialen Kontakt.', zh: '你说得对。一方面我喜欢这种自由，另一方面我也需要社交接触。' },
            { sp: 'Wei', de: 'Genau. Am Ende ist es eben, wie so oft, eine Frage des Kompromisses.', zh: '是啊。说到底，这确实常常就是个折中的问题。' },
          ]
        },
        {
          type: 'grammar', title: 'einerseits...andererseits：把两边的观点都摆出来', sub: '讨论里最实用的"一方面...另一方面..."句型',
          html: `<p><mark>einerseits</mark>（一方面）和 <mark>andererseits</mark>（另一方面）成对使用，用来呈现一件事的两面，是讨论/辩论体裁里最常用的句型之一：</p>
<p class="de"><mark>Einerseits</mark> spare ich Zeit, <mark>andererseits</mark> fehlt mir der Kontakt zu Kollegen.（一方面我省了时间，另一方面我缺少和同事的接触。）</p>
<p>语序上，einerseits 和 andererseits 都各自占据自己那半句的第一位，属于 u29 学过的<b>连接副词</b>家族（就像 deshalb/trotzdem 一样）——占第一位就触发倒装，变位动词紧跟其后：</p>
<table><tr><th>einerseits 占第一位</th><th>andererseits 占第一位</th></tr>
<tr><td class="hl">Einerseits <mark>mag</mark> ich die Freiheit,</td><td class="hl">andererseits <mark>brauche</mark> ich auch Kontakt.</td></tr></table>
<p>也可以把 andererseits 挪到句中不触发倒装：<span class="de">..., ich brauche andererseits auch Kontakt.</span>——和 u29 的 deshalb/trotzdem 规律完全一样。</p>`
        },
        {
          type: 'grammar', title: '间接疑问句深化：讨论里的嵌套问题', sub: 'u25 学过的 ob/wie/wann/warum，这次嵌进更长的讨论句',
          html: `<p>u25 学过间接疑问句的基本规则——<mark>ob</mark> 引导是非问，<mark>wie/wann/warum</mark> 等疑问词直接沿用，从句动词垫底。讨论场景里，这套结构经常嵌进更复杂的主句：</p>
<table><tr><th>直接问句</th><th>讨论中的间接问句</th></tr>
<tr><td>Sind wir produktiver im Büro?</td><td class="hl">Ich frage mich, <mark>ob</mark> wir produktiver im Büro sind.</td></tr>
<tr><td>Wie würde der Chef reagieren?</td><td class="hl">Ich frage mich, <mark>wie</mark> unser Chef darauf reagieren würde.</td></tr></table>
<p>第二个例子里从句本身还带着 Konjunktiv II（<mark>würde reagieren</mark>）——间接疑问句和虚拟式可以自由叠加，动词垫底的规则不受影响，würde 一样乖乖排到最后。这类"我在想……是不是……""我很好奇……会怎样……"的句型是小组讨论里表达"存疑""待定"态度的常用工具，比直接下结论更礼貌、更留有余地。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">小组讨论实用短语：</b>想表达"我同意/不同意"可以用这一课的 <mark>zustimmen</mark>／<mark>widersprechen</mark>；想不直接否定对方又要提出不同看法，德语里常用 <mark>Das stimmt, aber...</mark>（这倒是没错，不过……）或 <mark>Ich sehe das etwas anders.</mark>（我看法有点不一样。）这种缓冲句开头，比直接说 "Das ist falsch" 更礼貌，也更符合德语讨论文化里"先认可、再补充"的习惯。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'einerseits...andererseits 语法上属于哪一类连接词？', options: ['连接副词（占第一位触发倒装），和 deshalb/trotzdem 是一类', '从属连词，引导从句', '并列连词，不影响语序'], answer: 0, why: 'einerseits/andererseits 各自占自己那半句的第一位时触发倒装，和 u29 学过的 deshalb/trotzdem 是同一类连接副词。' },
        { type: 'cloze', zhHint: '一方面我喜欢这种自由，另一方面我也需要社交接触。（andererseits 占位触发倒装）', before: 'Einerseits mag ich die Freiheit,', after: 'brauche ich auch Kontakt.', options: ['andererseits', 'aber', 'aber andererseits'], answer: 0, why: 'andererseits 单独占第一位就能触发倒装（brauche-ich），不需要额外加 aber。' },
        { type: 'cloze', zhHint: '我在想我们老板会怎么反应。（间接疑问句，wie + würde 垫底）', before: 'Ich frage mich,', after: 'unser Chef darauf reagieren würde.', options: ['wie', 'ob', 'dass'], answer: 0, why: '原问句带疑问词 wie（Wie würde der Chef reagieren?），间接问句直接沿用 wie，不需要 ob。' },
        { type: 'mcq', q: '"Ich frage mich, ob wir produktiver im Büro sind." 为什么用 ob 而不是具体疑问词？', options: ['原问句是是非问句（Sind wir...?），没有疑问词', 'ob 是任何间接疑问句都要加的词', '这句话用错了，应该用 dass'], answer: 0, why: '能用"是/不是"回答的问句（无疑问词）转成间接问句时用 ob 引导。' },
        { type: 'order', zh: '所以我建议我们找一个折中方案。', words: ['Deshalb', 'schlage', 'ich', 'vor', 'dass', 'wir', 'einen', 'Kompromiss', 'finden'], why: 'deshalb 占第一位触发倒装（schlage-ich），可分前缀 vor 留在主句末尾，dass 从句里 finden 垫底。' },
        { type: 'match', pairs: [['die Debatte', '辩论，讨论'], ['der Vorschlag', '建议，提议'], ['widersprechen', '反驳，反对'], ['der Kompromiss', '妥协，折中方案']] },
        { type: 'listen', audio: 'Einerseits spare ich Zeit, wenn ich zu Hause arbeite. Andererseits fehlt mir manchmal der direkte Kontakt zu Kollegen.', q: '这句话是什么意思？', options: ['一方面在家工作能省时间，另一方面有时会缺少和同事的直接接触。', '在家工作没有任何缺点。', '去办公室工作完全没有意义。'], answer: 0, why: 'einerseits...andererseits 呈现两面：省时间 vs 缺少直接接触。' },
        { type: 'speak', de: 'Einerseits mag ich die Freiheit im Homeoffice, andererseits brauche ich auch Kontakt zu Kollegen.', zh: '一方面我喜欢在家办公的自由，另一方面我也需要和同事的接触。' },
      ],
      task: { title: '今天的生活任务', desc: '挑一个身边正在讨论的话题（在家办公/环保/教育都行），用 einerseits...andererseits 写一句呈现两面观点的话，再用间接疑问句写一句"我在想……是不是/会不会……"，表达自己还没有下定论的地方。' }
    },
  ]
};
