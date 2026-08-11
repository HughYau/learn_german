// 第 32 单元：跨文化与误会
export default {
  id: 'u32', num: '32', color: 'yellow', shape: 'tri',
  de: 'Missverständnisse klären', zh: '跨文化与误会',
  desc: '从"当时要是……就好了"的反思句出发，学 Konjunktiv II 过去式（hätte/wäre+Partizip II），再把它用进委婉表达批评和跨文化误会的澄清里。',
  kann: [
    { de: 'Ich kann mit Konjunktiv II der Vergangenheit (hätte/wäre + Partizip II) über etwas nachdenken, das ich anders hätte machen sollen.', zh: '我能用虚拟式过去时反思本该做得不一样的事。' },
    { de: 'Ich kann ein Missverständnis klären und erklären, wie ich etwas eigentlich gemeint habe.', zh: '我能澄清一次误会，说明自己原本的意思。' },
    { de: 'Ich kann Kritik oder Feedback höflich und zurückhaltend formulieren.', zh: '我能委婉、有分寸地表达批评或反馈意见。' },
  ],
  lessons: [
    {
      id: 'u32l1', title: '我不是那个意思', de: 'Das habe ich nicht so gemeint',
      intro: 'Wei 写给 Anna 的一封工作邮件因为太直接被误解成不礼貌，两人当面把话说开——这一课学 Konjunktiv II 过去式（hätte/wäre+Partizip II），专门用来表达"当时要是……就好了"这种事后反思。',
      sections: [
        {
          type: 'vocab', title: '误会与澄清', sub: '',
          items: [
            { de: 'Missverständnis', art: 'das', pl: 'Missverständnisse', zh: '误会', en: 'misunderstanding', ex: 'Das war nur ein Missverständnis.', exZh: '那只是一场误会。' },
            { de: 'missverstehen', zh: '误解，理解错', en: 'to misunderstand', ex: 'Ich glaube, du hast mich missverstanden.', exZh: '我觉得你误解我了。', note: '不可分动词：miss- 前缀不分离，Perfekt 是 missverstanden（没有 ge-）' },
            { de: 'klären', zh: '澄清，弄清楚', en: 'to clarify', ex: 'Wir sollten das Missverständnis klären.', exZh: '我们应该把这个误会澄清一下。' },
            { de: 'Eindruck', art: 'der', pl: 'Eindrücke', zh: '印象', en: 'impression', ex: 'Ich hatte den falschen Eindruck.', exZh: '我当时的印象是错的。' },
            { de: 'Absicht', art: 'die', pl: 'Absichten', zh: '意图，本意', en: 'intention', ex: 'Das war nicht meine Absicht.', exZh: '那不是我的本意。' },
          ]
        },
        {
          type: 'vocab', title: '道歉与感受', sub: '',
          items: [
            { de: 'beabsichtigen', zh: '打算，意图是', en: 'to intend', ex: 'Ich habe das wirklich nicht beabsichtigt.', exZh: '我真的不是故意的。' },
            { de: 'sich entschuldigen (bei + Dat., für + Akk.)', zh: '道歉（复现）', en: 'to apologize', ex: 'Ich möchte mich bei dir entschuldigen.', exZh: '我想向你道歉。', note: '复现词：u18 起学过，这里补上完整搭配 bei jdm. für etw.' },
            { de: 'Entschuldigung', art: 'die', pl: 'Entschuldigungen', zh: '道歉', en: 'apology', ex: 'Meine Entschuldigung, das war unhöflich von mir.', exZh: '很抱歉，我那样做很不礼貌。' },
            { de: 'verletzen', zh: '伤害（感情）', en: 'to hurt (feelings)', ex: 'Ich wollte dich nicht verletzen.', exZh: '我不是想伤害你。' },
          ]
        },
        {
          type: 'dialogue', title: '我不是那个意思', scene: 'Wei 写给 Anna 的一封工作邮件用词太直接，被 Anna 误解为不礼貌。两人当面澄清误会，Wei 用 Konjunktiv II 过去式反思该怎么表达会更好。',
          lines: [
            { sp: 'Anna', de: 'Wei, hast du kurz Zeit? Ich wollte mit dir über deine E-Mail von gestern sprechen.', zh: 'Wei，你现在有空吗？我想跟你聊聊你昨天发的那封邮件。' },
            { sp: 'Wei', de: 'Klar. Ist etwas falsch gelaufen?', zh: '当然。是出什么问题了吗？' },
            { sp: 'Anna', de: 'Deine E-Mail war sehr direkt, fast ein bisschen unfreundlich. Ich hatte den Eindruck, du wärst sauer auf mich.', zh: '你的邮件写得特别直接，甚至有点不太友好。我当时感觉你是不是在生我的气。' },
            { sp: 'Wei', de: 'Oh nein, das war überhaupt nicht meine Absicht! Es tut mir leid, wenn das so angekommen ist.', zh: '哦不，我完全没有那个意思！要是给你这种感觉，我很抱歉。' },
            { sp: 'Anna', de: 'Kein Problem, ich wollte nur klären, was du eigentlich gemeint hast.', zh: '没关系，我只是想弄清楚你到底想表达什么。' },
            { sp: 'Wei', de: 'Ich hätte das viel freundlicher formulieren sollen. Im Deutschen bin ich manchmal noch zu direkt.', zh: '我本该写得更友好一些的。用德语的时候我有时候还是太直接了。' },
            { sp: 'Anna', de: 'Verstehe. In China ist direkte Kommunikation vielleicht üblicher?', zh: '我明白。在中国也许更常用直接的表达方式？' },
            { sp: 'Wei', de: 'Nicht unbedingt, aber im Job schreibe ich oft sehr knapp, das ist einfach Gewohnheit.', zh: '也不完全是，但工作里我经常写得很简短，这只是习惯。' },
            { sp: 'Anna', de: 'Wenn ich das gewusst hätte, wäre ich nicht so schnell verunsichert gewesen.', zh: '要是我早知道这一点，就不会那么快感到不安了。' },
            { sp: 'Wei', de: 'Nächstes Mal schreibe ich einfach noch einen freundlichen Satz dazu.', zh: '下次我干脆多加一句友好的话。' },
            { sp: 'Anna', de: 'Gute Idee! Ein „Liebe Grüße“ am Ende hätte schon geholfen.', zh: '好主意！结尾加一句"Liebe Grüße"就有帮助了。' },
            { sp: 'Wei', de: 'Danke, dass du das direkt angesprochen hast, statt es einfach so stehen zu lassen.', zh: '谢谢你直接跟我说了这件事，而不是就这么让它过去。' },
            { sp: 'Anna', de: 'Klar, so was klärt man am besten sofort.', zh: '当然，这种事最好马上说清楚。' },
          ]
        },
        {
          type: 'grammar', title: 'Konjunktiv II 过去式：hätte/wäre + Partizip II', sub: '对过去的假设，不是对现在的',
          html: `<p>u26 学过的 Konjunktiv II 现在式（<mark>würde/wäre/hätte/könnte</mark>）用来说"如果……我就……"这种<b>对现在/将来的假设</b>。但复盘一件已经发生的事——"当时要是……就好了"——需要<b>对过去的假设</b>，这就是 Konjunktiv II 过去式：</p>
<table><tr><th>人称</th><th>hätte</th><th>wäre</th></tr>
<tr><td class="hl">ich</td><td class="hl">hätte</td><td class="hl">wäre</td></tr>
<tr><td class="hl">du</td><td class="hl">hättest</td><td class="hl">wärst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">hätte</td><td class="hl">wäre</td></tr>
<tr><td class="hl">wir</td><td class="hl">hätten</td><td class="hl">wären</td></tr>
<tr><td class="hl">ihr</td><td class="hl">hättet</td><td class="hl">wärt</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">hätten</td><td class="hl">wären</td></tr></table>
<p><b class="t">构成公式：</b><mark>hätte/wäre + Partizip II</mark>——你已经从 Perfekt（u12 起）攒下了满满一库存的过去分词，这里只需要把它们重新配上 hätte/wäre 这个新框架：</p>
<p class="de">Ich <mark>hätte</mark> das anders <mark>gesagt</mark>.（我当时会换种说法。）　Ich <mark>wäre</mark> vorsichtiger <mark>gewesen</mark>.（我当时会更谨慎。）</p>
<p><b class="t">hätte 还是 wäre？和 Perfekt 的 haben/sein 选择规律完全一致：</b>移动或状态改变的动词（gehen、kommen、bleiben、sein 自己）用 wäre，其余大多数动词用 hätte：</p>
<table><tr><th>动词</th><th>Perfekt</th><th>Konjunktiv II 过去式</th></tr>
<tr><td>sagen</td><td>hat gesagt</td><td class="hl">hätte gesagt</td></tr>
<tr><td>wissen</td><td>hat gewusst</td><td class="hl">hätte gewusst</td></tr>
<tr><td>bleiben</td><td>ist geblieben</td><td class="hl">wäre geblieben</td></tr>
<tr><td>sein</td><td>ist gewesen</td><td class="hl">wäre gewesen</td></tr></table>`
        },
        {
          type: 'grammar', title: '条件句过去式 + 情态动词的特殊语序', sub: 'Ersatzinfinitiv：替代不定式',
          html: `<p><b class="t">虚拟条件句过去式：</b>结构和 u26 学过的现在式条件句一模一样，只是两边都换成过去式：</p>
<table><tr><th>wenn 从句（V-letzt，hätte/wäre 垫底）</th><th>主句（hätte/wäre 紧跟第二位，倒装）</th></tr>
<tr><td class="hl">Wenn ich das gewusst hätte,</td><td class="hl">wäre ich vorsichtiger gewesen.</td></tr>
<tr><td class="hl">Wenn ich das gewusst hätte,</td><td class="hl">hätte ich anders reagiert.</td></tr></table>
<p>注意从句里的顺序：<mark>Partizip II + hätte</mark>（gewusst hätte，不是 hätte gewusst）——因为 V-letzt 要求所有动词成分都排到从句最后，hätte 作为最后变位的那个词，必须排在整个动词组的最末尾。</p>
<p><b class="t">情态动词的特殊语序——替代不定式（Ersatzinfinitiv）：</b>情态动词（können/müssen/sollen…）的 Konjunktiv II 过去式不用它自己的 Partizip II（gekonnt/gemusst/gesollt），而是保持<b>原形</b>，排在句子最后，紧跟在另一个动词原形后面：</p>
<table><tr><th>结构</th><th>例句</th></tr>
<tr><td class="hl">hätte + 实义动词原形 + 情态动词原形</td><td class="hl">Ich hätte das <mark>sagen sollen</mark>.（我当时应该那么说。）</td></tr>
<tr><td></td><td class="hl">Ich hätte das freundlicher <mark>formulieren können</mark>.（我当时本可以表达得更友好。）</td></tr></table>
<p>常用搭配：<mark>hätte...sollen</mark>（本该……）、<mark>hätte...können</mark>（本可以……）、<mark>hätte...müssen</mark>（本必须……）——都是复盘反思时最好用的句型。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">情态动词的 Konjunktiv II 过去式有个特殊语序，务必记住：</b>hätte + 实义动词原形 + 情态动词原形（不是 Partizip II！）——Ich hätte das sagen sollen（不是 gesagt sollen 或 gesollt），Ich hätte das machen können（不是 gemacht können）。这叫 Ersatzinfinitiv（替代不定式），情态动词在这种结构里永远保持原形，站在整句话的最后。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'hätte 和 wäre 的选择规律和哪个语法点一致？', options: ['Perfekt 里 haben/sein 的选择规律（移动/状态改变用 sein，其余用 haben）', '完全随意，没有规律', '取决于句子长短'], answer: 0, why: 'Konjunktiv II 过去式的 hätte/wäre 选择和 Perfekt 的 haben/sein 选择规律完全一致，因为本质都是同一套助动词系统。' },
        { type: 'cloze', zhHint: '我本该写得更友好一些的。（Ersatzinfinitiv: hätte + 原形 + sollen）', before: 'Ich', after: 'das freundlicher formulieren sollen.', options: ['hätte', 'wäre', 'habe'], answer: 0, why: 'formulieren 是及物动词（haben 类），Konjunktiv II 过去式用 hätte；情态动词 sollen 在句尾用原形（Ersatzinfinitiv），不是 gesollt。' },
        { type: 'cloze', zhHint: '要是我早知道这一点，就不会那么快感到不安了。', before: 'Wenn ich das gewusst hätte,', after: 'ich nicht so schnell verunsichert gewesen.', options: ['wäre', 'hätte', 'würde'], answer: 0, why: '"verunsichert sein" 是 sein 类动词短语，Konjunktiv II 过去式用 wäre + Partizip II（gewesen）。' },
        { type: 'mcq', q: '"Wenn ich das gewusst hätte, wäre ich vorsichtiger gewesen." 从句里 hätte 的位置在哪里？', options: ['从句最后（V-letzt）', '从句第二位', '从句开头'], answer: 0, why: 'wenn 从句遵循 V-letzt，hätte 作为从句的（助）动词垫底，排在 gewusst 后面。' },
        { type: 'order', zh: '我本该写得更友好一些的。', words: ['Ich', 'hätte', 'das', 'freundlicher', 'formulieren', 'sollen'], why: 'hätte 站第二位，实义动词原形 formulieren 和情态动词原形 sollen 一起垫底（Ersatzinfinitiv 语序）。' },
        { type: 'match', pairs: [['das Missverständnis', '误会'], ['klären', '澄清'], ['die Absicht', '意图'], ['verletzen', '伤害到']] },
        { type: 'listen', audio: 'Ich hatte den Eindruck, du wärst sauer auf mich.', q: '这句话是什么意思？', options: ['我当时感觉你在生我的气', '我很确定你没有生气', '我根本不认识你'], answer: 0, why: 'den Eindruck haben = 有……印象，wärst sauer 表达当时的推测感觉。' },
        { type: 'speak', de: 'Ich hätte das viel freundlicher formulieren sollen.', zh: '我本该写得更友好一些的。' },
      ],
      task: { title: '今天的生活任务', desc: '回想一次真实的跨文化沟通小摩擦（或想象一次），用 Konjunktiv II 过去式写 3 句反思句，比如 Ich hätte.../Wenn ich das gewusst hätte, wäre ich...' }
    },
    {
      id: 'u32l2', title: '婉转的反馈', de: 'Feedback mit Fingerspitzengefühl',
      intro: 'Jonas 做完一个报告想听 Wei 的真实意见，正好是练习委婉反馈的好机会——这一课把 Konjunktiv II 过去式整合进"高情商"的委婉批评句型，再读一篇关于德中沟通习惯差异的短文。',
      sections: [
        {
          type: 'vocab', title: '文化差异', sub: '',
          items: [
            { de: 'Kultur', art: 'die', pl: 'Kulturen', zh: '文化', en: 'culture', ex: 'Es gibt viele kulturelle Unterschiede.', exZh: '存在很多文化差异。' },
            { de: 'Unterschied', art: 'der', pl: 'Unterschiede', zh: '区别，差异', en: 'difference', ex: 'Der Unterschied ist manchmal ziemlich groß.', exZh: '这种差异有时候相当大。' },
            { de: 'direkt', zh: '直接的', en: 'direct', ex: 'Deutsche kommunizieren oft direkter als Chinesen.', exZh: '德国人交流通常比中国人更直接。' },
            { de: 'indirekt', zh: '间接的', en: 'indirect', ex: 'In China ist Kritik oft indirekter formuliert.', exZh: '在中国，批评通常表达得更间接。' },
            { de: 'Höflichkeit', art: 'die', zh: '礼貌', en: 'politeness', ex: 'Höflichkeit wird in beiden Kulturen geschätzt, aber unterschiedlich gezeigt.', exZh: '两种文化都重视礼貌，只是表达方式不同。' },
          ]
        },
        {
          type: 'vocab', title: '回顾与建议', sub: '',
          items: [
            { de: 'taktvoll', zh: '有分寸的，得体的', en: 'tactful', ex: 'Er hat das sehr taktvoll gesagt.', exZh: '他说得很有分寸。' },
            { de: 'im Nachhinein', zh: '事后（回想起来）', en: 'in hindsight', ex: 'Im Nachhinein hätte ich anders reagiert.', exZh: '事后想想，我当时会有不同的反应。' },
            { de: 'bedauern', zh: '遗憾，后悔', en: 'to regret', ex: 'Ich bedauere, was ich gesagt habe.', exZh: '我为自己说过的话感到遗憾。' },
            { de: 'rückblickend', zh: '回顾起来地', en: 'looking back', ex: 'Rückblickend war das keine gute Idee.', exZh: '回顾起来，那不是个好主意。' },
            { de: 'Ratschlag', art: 'der', pl: 'Ratschläge', zh: '建议，忠告（复现 der Rat）', en: 'piece of advice', ex: 'Danke für den guten Ratschlag.', exZh: '谢谢你的好建议。', note: '复现词：u26 学过 der Rat，Ratschlag 是更常用的具体建议说法' },
          ]
        },
        {
          type: 'dialogue', title: '婉转的反馈', scene: 'Jonas 刚做完一个报告，想听听 Wei 的真实想法。Wei 借这个机会练习委婉但坦诚地给反馈，同时聊起中德沟通习惯的差异。',
          lines: [
            { sp: 'Jonas', de: 'Wei, wie fandest du meine Präsentation vorhin? Sei ehrlich.', zh: 'Wei，你觉得我刚才的报告怎么样？说实话就行。' },
            { sp: 'Wei', de: 'Insgesamt war sie gut. Aber darf ich dir etwas vorsichtig sagen?', zh: '总的来说不错。不过我能小心地提一点建议吗？' },
            { sp: 'Jonas', de: 'Klar, genau deshalb frage ich ja.', zh: '当然，我就是为了这个才问的。' },
            { sp: 'Wei', de: 'Vielleicht hätte man die Zahlen am Anfang etwas langsamer erklären können.', zh: '也许一开始的数据部分可以讲得再慢一点。' },
            { sp: 'Jonas', de: 'Stimmt, das war wahrscheinlich zu schnell.', zh: '没错，那部分可能确实讲太快了。' },
            { sp: 'Wei', de: 'Und ich hätte mir gewünscht, dass du am Ende noch mal kurz zusammenfasst.', zh: '另外我本来希望你最后能再简单总结一下。' },
            { sp: 'Jonas', de: 'Guter Punkt. In Deutschland sagt man solche Sachen oft sehr direkt – findest du das manchmal unhöflich?', zh: '说得好。在德国大家常常很直接地说这种话——你有时候会觉得这不太礼貌吗？' },
            { sp: 'Wei', de: 'Am Anfang schon. In China sagt man Kritik meistens indirekter, oft über Umwege.', zh: '一开始是的。在中国批评通常说得比较间接，常常拐弯抹角。' },
            { sp: 'Jonas', de: 'Interessant. Aber dein Feedback gerade war doch auch ziemlich klar formuliert.', zh: '有意思。不过你刚才的反馈其实也说得挺清楚的呀。' },
            { sp: 'Wei', de: 'Stimmt, ich übe das gerade – klar, aber trotzdem taktvoll.', zh: '是啊，我正在练习这个——清楚，但依然有分寸。' },
            { sp: 'Jonas', de: 'Das ist dir echt gut gelungen. Danke, dass du ehrlich warst.', zh: '你确实做得很好。谢谢你这么坦诚。' },
            { sp: 'Wei', de: 'Gern! Und deine Präsentation war wirklich stark, das meine ich ernst.', zh: '不客气！你的报告真的很棒，这是我真心的。' },
          ]
        },
        {
          type: 'grammar', title: '委婉批评的语用工具包', sub: '把已学的三样工具拧成一股绳',
          html: `<p>Konjunktiv II 过去式不只是用来"自责"，更常用来<b>委婉地给建议或提出批评</b>，把"你做错了"软化成"也许可以……"：</p>
<table><tr><th>句型</th><th>例句</th></tr>
<tr><td class="hl">Vielleicht hätte man...</td><td class="hl">Vielleicht hätte man die Zahlen langsamer erklären können.（也许数据部分可以讲得再慢一点。）</td></tr>
<tr><td class="hl">Ich hätte mir gewünscht, dass...</td><td class="hl">Ich hätte mir gewünscht, dass du am Ende zusammenfasst.（我本来希望你最后能总结一下。）</td></tr>
<tr><td class="hl">An deiner Stelle hätte ich...</td><td class="hl">An deiner Stelle hätte ich das anders gesagt.（要是我是你，我当时会换种说法。）</td></tr></table>
<p><b class="t">man 的妙用：</b>Vielleicht hätte man... 里用不定人称代词 <mark>man</mark> 而不是 <mark>du</mark>，故意把"针对你"变成"针对一般情况"，是德语里典型的委婉降级技巧——批评的内容一样，但听起来客气很多。</p>
<p>这套句型把三样已学的工具拧成了一股绳：Konjunktiv II 过去式（这一课）+ 情态动词（u9）+ dass 从句（u20）——语法本身都不新，新的是"组合起来能干什么"。</p>`
        },
        {
          type: 'grammar', title: '德中沟通文化小知识 + 复盘表达', sub: '',
          html: `<p><b class="t">阅读：德中沟通习惯的一点差异</b></p>
<p class="de">In Deutschland ist direkte Kommunikation weit verbreitet: Kritik wird oft klar und ohne große Umwege ausgesprochen, das gilt nicht als unhöflich, sondern als ehrlich und effizient. In China wird Kritik dagegen häufiger indirekt formuliert, oft über Andeutungen oder durch eine dritte Person, um das Gesicht des Gegenübers zu wahren. Keine der beiden Varianten ist "richtiger" – wichtig ist, die Regeln der jeweiligen Situation zu kennen und mit etwas Taktgefühl zu kombinieren, was zur Person und zum Kontext passt.</p>
<p><b class="t">道歉与复盘常用表达：</b></p>
<table><tr><th>表达</th><th>意思</th></tr>
<tr><td class="hl">Es tut mir leid, dass...</td><td class="hl">很抱歉，……</td></tr>
<tr><td class="hl">Im Nachhinein hätte ich...</td><td class="hl">事后看，我本该……</td></tr>
<tr><td class="hl">Rückblickend würde ich...</td><td class="hl">回顾起来，我会……</td></tr>
<tr><td class="hl">Das war nicht meine Absicht.</td><td class="hl">那不是我的本意。</td></tr></table>`
        },
        {
          type: 'tip',
          html: '<b class="t">跨文化沟通没有"唯一正确答案"：</b>直接和间接都不是绝对的对错，关键是根据场合和对象调整。用 Konjunktiv II 过去式复盘（Ich hätte..., Im Nachhinein wäre... besser gewesen）不是为了自责，而是把每次小摩擦变成下次更从容的底气——这也是 B1 阶段最重要的软技能之一。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Vielleicht hätte man..." 这个句型主要用来做什么？', options: ['委婉地提出建议或批评，避免太直接', '表达强烈的愤怒', '陈述一个确凿的事实'], answer: 0, why: 'man 把"针对你"变成"针对一般情况"，加上 hätte...können 的假设语气，整体效果就是把批评软化。' },
        { type: 'cloze', zhHint: '也许一开始的数据部分可以讲得再慢一点。（委婉建议）', before: 'Vielleicht', after: 'man die Zahlen am Anfang etwas langsamer erklären können.', options: ['hätte', 'wäre', 'würde'], answer: 0, why: '"hätte...können" 是 Ersatzinfinitiv 结构，表示"本可以，但没有"，是典型的委婉批评句型，erklären 是 haben 类动词。' },
        { type: 'cloze', zhHint: '我本来希望你能再简单总结一下。（委婉句型）', before: 'Ich', after: 'mir gewünscht, dass du am Ende zusammenfasst.', options: ['hätte', 'wäre', 'habe'], answer: 0, why: '"sich etwas wünschen" 是反身动词（haben 类），Konjunktiv II 过去式用 hätte + gewünscht；mir 是反身代词。' },
        { type: 'mcq', q: '关于德国和中国的沟通习惯，下面哪个说法更准确？', options: ['德国常常比较直接，但可以用委婉句型让语气更柔和；两种风格没有绝对的对错', '德国人从不给负面反馈', '中国人的沟通方式在任何场合都比德国人更礼貌'], answer: 0, why: '文化差异是风格上的不同，不是对错之分，关键是懂得根据场合调整表达方式。' },
        { type: 'order', zh: '也许一开始的数据部分可以讲得再慢一点。', words: ['Vielleicht', 'hätte', 'man', 'die', 'Zahlen', 'am', 'Anfang', 'langsamer', 'erklären', 'können'], why: 'Vielleicht 占第一位触发倒装，hätte 紧跟第二位，erklären（原形）+ können（情态动词原形）一起垫底，Ersatzinfinitiv 语序。' },
        { type: 'match', pairs: [['die Kultur', '文化'], ['der Unterschied', '区别'], ['taktvoll', '有分寸的'], ['rückblickend', '回顾地']] },
        { type: 'listen', audio: 'In China sagt man Kritik meistens indirekter, oft über Umwege.', q: '这句话是什么意思？', options: ['在中国批评通常说得比较间接，常常拐弯抹角', '在中国从来不提批评意见', '在中国批评总是通过邮件表达'], answer: 0, why: 'indirekter（更间接）+ über Umwege（拐弯抹角）说明批评的表达方式偏委婉。' },
        { type: 'speak', de: 'Ich hätte mir gewünscht, dass du am Ende noch mal kurz zusammenfasst.', zh: '我本来希望你最后能再简单总结一下。' },
      ],
      task: { title: '今天的生活任务', desc: '用 Vielleicht hätte man.../Ich hätte mir gewünscht, dass... 给一位朋友或同事写 2-3 句委婉的反馈或建议——真实发送或私下练习都行。' }
    },
  ]
};
