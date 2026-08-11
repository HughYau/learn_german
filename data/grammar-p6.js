// 语法速查手册补充：发音进阶 + 学习策略（g34-g38）
export const topicsP6 = [
  {
    id: 'g34', num: '', title: '发音进阶：长短元音与词重音', de: 'Vokallänge & Wortakzent',
    html: `<p>g1 的发音速查表已经给过"元音后跟一个辅音读长音、跟两个及以上辅音读短音"的总原则。这里把这条规律落实到几组最容易搞混的辨义对（同一个词，元音长短一变，意思就变），再补上德语词重音的规律——两者合起来，才是"读得准"和"读得像"的完整拼图。</p>
<table><tr><th>长音</th><th>短音</th><th>区别</th></tr>
<tr><td class="hl"><b class="de">Miete</b>（房租）</td><td class="hl"><b class="de">Mitte</b>（中间）</td><td>ie 永远长音；tt 双写辅音逼前面的元音读短音</td></tr>
<tr><td class="hl"><b class="de">Staat</b>（国家）</td><td class="hl"><b class="de">Stadt</b>（城市）</td><td>aa 双写元音字母＝长音；dt 组合＝短音</td></tr>
<tr><td class="hl"><b class="de">Ofen</b>（烤箱）</td><td class="hl"><b class="de">offen</b>（开着的）</td><td>单个 f 前面元音长；双写 ff 前面元音短</td></tr></table>
<p><b class="t">三条判断规律：</b></p>
<table><tr><th>信号</th><th>结果</th><th>例词</th></tr>
<tr><td class="hl">双写辅音（tt/ff/mm/nn/ss/pp…）</td><td>前面的元音读<b>短音</b></td><td class="hl">Mitte, offen, kommen, Suppe</td></tr>
<tr><td class="hl">元音后跟 <mark>h</mark>（不发音，只拉长）</td><td>前面的元音读<b>长音</b></td><td class="hl">Wohnung, Kuh, Sohn, Stuhl</td></tr>
<tr><td class="hl"><mark>ie</mark> 组合</td><td>永远读<b>长音</b> [iː]</td><td class="hl">Miete, Liebe, Bier, wie</td></tr></table>
<p>这条规律在阅读生词时非常实用：看到双写辅音，不用查词典也能猜出前面元音是短的；看到不发音的 h 或 ie，就知道元音要拖长。</p>
<p><b class="t">词重音四条规律：</b>德语本族词的重音位置不是随机的，四条规律能覆盖绝大多数日常词汇：</p>
<table><tr><th>规律</th><th>例词</th></tr>
<tr><td class="hl">本族词（非外来词）重音落在<b>第一个音节</b></td><td class="hl"><b>WOH</b>nung, <b>AR</b>beit, <b>FREUND</b>schaft, <b>LER</b>nen</td></tr>
<tr><td class="hl">可分前缀（auf-, aus-, mit-, an- 等）<b>重读</b></td><td class="hl"><b>AUF</b>stehen, <b>AUS</b>gehen, <b>MIT</b>kommen, <b>AN</b>rufen</td></tr>
<tr><td class="hl">不可分前缀（be-, ge-, ver-, er-, ent-, emp-, zer- 等）<b>不重读</b>，重音落在词干</td><td class="hl">ver<b>STE</b>hen, be<b>KOM</b>men, ent<b>DE</b>cken, er<b>KLÄ</b>ren</td></tr>
<tr><td class="hl">-ieren 结尾的动词，重音固定落在 <mark>ie</mark> 上</td><td class="hl">stud<b>IE</b>ren, telefon<b>IE</b>ren, fotograf<b>IE</b>ren, funktion<b>IE</b>ren</td></tr></table>
<p>可分前缀 vs 不可分前缀这条规律和 u13/u24 学过的"可分动词 ge- 插在前缀和词干之间"是同一套底层逻辑的两面：可分前缀既重读、又能在句尾独立活动；不可分前缀既不重读、也永远焊死在词干前面，Perfekt 分词也不加 ge-（<b class="de">verstanden</b>，不是 <b class="de">geverstanden</b>）。重音位置本身就是判断"这个前缀能不能分开"的听觉线索。</p>`
  },
  {
    id: 'g35', num: '', title: '发音进阶：ch、r、-ig 与 schwa', de: 'ch, r, -ig und Schwa',
    html: `<p>g1 提过 ch 分硬音 [x] 和软音 [ç] 两种，这里给出完整的分布规律，再补上德语最容易被中文母语者读错的两个音——词尾元音化的 r，和几乎所有虚词/词尾里都藏着的弱化元音 schwa。</p>
<p><b class="t">ch 怎么分：ach-Laut [x] 还是 ich-Laut [ç]？</b>只看 ch 前面是什么元音：</p>
<table><tr><th>前面的元音</th><th>读法</th><th>例词</th></tr>
<tr><td class="hl"><mark>a / o / u / au</mark> 后</td><td class="hl">ach-Laut [x]（喉咙后部摩擦，像清嗓子）</td><td class="hl">Bach, Buch, Kuchen, Bauch, Nacht</td></tr>
<tr><td class="hl">其余情况：<mark>e / i / ä / ö / ü / eu</mark> 后，辅音（l/n/r）后，词首，<mark>-chen</mark> 结尾</td><td class="hl">ich-Laut [ç]（舌面贴近硬腭，像拼音 x 但更靠后）</td><td class="hl">ich, sprechen, Milch, durch, Mädchen, München</td></tr></table>
<p><b class="t">r 的元音化——德语标准音里，很多 r 根本不读辅音：</b></p>
<table><tr><th>位置</th><th>读法</th><th>例词</th></tr>
<tr><td class="hl">词尾 <mark>-er</mark>（非重读音节）</td><td class="hl">弱化成类似"啊"的元音 [ɐ]，不再是辅音 r</td><td class="hl">Wasser, Vater, Mutter, immer, aber</td></tr>
<tr><td class="hl">长元音后的 r（音节尾）</td><td class="hl">同样元音化 [ɐ]</td><td class="hl">Uhr, Ohr, Tür, mehr, wir, Jahr</td></tr>
<tr><td class="hl">r 在元音<b>前面</b>（音节开头）</td><td class="hl">读正常的辅音 r（小舌音，类似漱口的颤音）</td><td class="hl">rot, hören, fahren, Straße</td></tr></table>
<p><b class="t">给中文母语者的提醒：</b>德语 r 不是拼音里的卷舌 r（如"日"），而是小舌后部发音，接近清嗓子的感觉；很多时候（尤其词尾）它根本不发成辅音，而是弱化成一个模糊的元音——初学阶段不用强求发出小舌颤音，先能听辨、模仿"元音化的 r"更实用。</p>
<p><b class="t">-ig 词尾：</b>词尾 <mark>-ig</mark> 读作 ich-Laut [ɪç]，和词首"硬 g"完全不同：</p>
<table><tr><th>词</th><th>读法</th></tr>
<tr><td class="hl">zwanzig, wichtig, richtig, ruhig</td><td class="hl">词尾 -ig → [ɪç]，不读 [ɪk]</td></tr>
<tr><td class="hl">königlich（König + lich）</td><td class="hl">例外：-ig 后面还接了词尾（不在词末），这时读回硬音 [ɪk]</td></tr></table>
<p><b class="t">Schwa [ə]——最不起眼却最高频的元音：</b>不重读的 <mark>e</mark>（多出现在词尾 -e、-en、-em、-et 等语法词尾里）弱化成一个很轻、很短、几乎听不清的央元音，德语人称它 "Schwa"：<b class="de">bitte</b> [ˈbɪtə]、<b class="de">Name</b> [ˈnaːmə]、<b class="de">gehe</b> [ˈɡeːə]。日常口语里这个 e 有时弱到几乎消失（<b class="de">haben</b> 说快了像 "hab'n"）——听力练习中听到"吃掉一个音"的现象，很可能就是 schwa 被进一步弱化。</p>
<p><b class="t">三个中文母语者的常见坑：</b>①把 r 读成汉语拼音的卷舌 r；②把 ich-Laut [ç] 和 ach-Laut [x] 混用——听起来像"总是发一个模糊的 h"；③给德语词尾辅音后面加一个多余的元音（汉语音节习惯开音节收尾），比如把 <b class="de">und</b> 读成"und-e"——德语词尾辅音要干脆收住，不能拖出额外元音。</p>`
  },
  {
    id: 'g36', num: '', title: '语调与句重音', de: 'Intonation & Satzakzent',
    html: `<p>发音发准了每个音，句子听起来还是可能"怪怪的"——这往往是语调（整句的音高走向）和句重音（哪个词读得最突出）没到位。这两点决定了一句话听起来是不是"像德国人说的"。</p>
<p><b class="t">四种句型的语调走向：</b></p>
<table><tr><th>句型</th><th>语调</th><th>例句</th></tr>
<tr><td class="hl">陈述句</td><td class="hl">句末<b>降调</b> ↘</td><td class="hl">Ich komme aus China. ↘</td></tr>
<tr><td class="hl">W-Frage（W 疑问句）</td><td class="hl">句末同样<b>降调</b> ↘（和陈述句一致，不是很多人以为的升调）</td><td class="hl">Woher kommst du? ↘</td></tr>
<tr><td class="hl">Ja/Nein-Frage（是非问句）</td><td class="hl">句末<b>升调</b> ↗</td><td class="hl">Kommst du aus China? ↗</td></tr>
<tr><td class="hl">列举/枚举</td><td class="hl">每一项<b>升调</b> ↗，只有<b>最后一项降调</b> ↘</td><td class="hl">Ich kaufe Brot ↗, Milch ↗ und Eier. ↘</td></tr></table>
<p>W-Frage 降调是最容易被中文母语者忽略的一条——受英语"疑问句就该升调"的直觉影响，很多学习者把 <mark>Woher kommst du?</mark> 读成升调，德国人听感上会觉得不太自然，甚至有点咄咄逼人。记忆窍门：W-Frage 已经用 W 词（wer/wo/was…）明确标出了"这是个问题"，不需要再靠语调强调，所以可以像陈述句一样自然降调；Ja/Nein-Frage 没有 W 词标记，只能靠语调本身让对方听出"这是个问题"，所以必须升调。</p>
<p><b class="t">句重音（Satzakzent）落在哪个词：</b>德语句子里不是每个词都读得一样重——最核心的原则是：<b>句重音落在"新信息"或"对比信息"上，已知/重复的信息不重读。</b></p>
<table><tr><th>场景</th><th>例句</th><th>说明</th></tr>
<tr><td class="hl">中性陈述（无特殊上下文）</td><td class="hl">Ich trinke <mark>Kaffee</mark>.</td><td>默认重音落在句尾的核心内容词上</td></tr>
<tr><td class="hl">对比强调</td><td class="hl">Ich trinke <mark>Kaffee</mark>, nicht <mark>Tee</mark>.</td><td>两个被对比的词都重读，其余词弱读</td></tr>
<tr><td class="hl">回答疑问的焦点词</td><td class="hl">— Wer kommt heute? — <mark>Anna</mark> kommt heute.</td><td>回答里真正的新信息（Anna）重读，"kommt heute" 是已知信息，弱读</td></tr></table>
<p>这条规律在听力里同样有用：抓住一句话里读得最重的那个词，往往就抓住了说话人真正想强调的信息，比逐词翻译更快理解大意。</p>`
  },
  {
    id: 'g37', num: '', title: '学习策略：名词性别怎么记', de: 'Lernstrategie: Genus merken',
    html: `<p>德语名词性别没有万能公式，但一批高频后缀能"定性"——看到某些结尾，性别八九不离十能猜对，不用每个词都硬背。这里把后缀规律、类别倾向、和本站的颜色记忆系统整理成一张地图。</p>
<p><b class="t">后缀定性别——覆盖面最广的一批规律：</b></p>
<table><tr><th>性</th><th>后缀</th><th>例词</th></tr>
<tr><td class="hl">der（阳性）</td><td class="hl">-er（指人/职业）、-ling、-ismus、-ant、-or</td><td class="hl">der Lehrer, der Frühling, der Tourismus, der Praktikant, der Motor</td></tr>
<tr><td class="hl">die（阴性）</td><td class="hl">-ung、-heit、-keit、-schaft、-tion、-ie、-ik、-ur</td><td class="hl">die Wohnung, die Freiheit, die Möglichkeit, die Freundschaft, die Nation, die Familie, die Musik, die Kultur</td></tr>
<tr><td class="hl">das（中性）</td><td class="hl">-chen、-lein、-um、-ment</td><td class="hl">das Mädchen, das Fräulein, das Museum, das Dokument</td></tr></table>
<p>这批后缀里，<b>-chen/-lein 是最可靠的一条</b>：不管原来的词是什么性别（der Hund → das Hündchen），加上这两个小称后缀，性别一律变成 das——"缩小版"永远是中性。</p>
<p><b class="t">类别倾向——按词的"类别"猜性别：</b></p>
<table><tr><th>类别</th><th>倾向性</th><th>例词</th></tr>
<tr><td class="hl">星期、月份、季节</td><td class="hl">几乎全部是 der</td><td class="hl">der Montag, der Mai, der Sommer, der Winter</td></tr>
<tr><td class="hl">酒精饮料</td><td class="hl">多数是 der（例外：das Bier）</td><td class="hl">der Wein, der Sekt, der Schnaps；<mark>但 das Bier 是例外</mark></td></tr>
<tr><td class="hl">汽车品牌/车型</td><td class="hl">通常是 der（隐含 der Wagen）</td><td class="hl">der Golf, der BMW, der Passat</td></tr></table>
<p>类别倾向不如后缀规律可靠，遇到例外（比如 das Bier）直接当整词记住，不用纠结"为什么"。</p>
<p><b class="t">本站的颜色联想系统：</b>词汇卡片、语法手册全站统一用 <b>der 蓝色、die 红色、das 绿色</b>标注冠词。这套颜色不是装饰，而是刻意设计的记忆锚点——每次看到蓝色的词卡就应该在脑内下意识补一个"der"，看多了会形成条件反射，比死记语法规则更快、更稳。建议结合后缀规律主动做联想：看到 <mark>die Wohnung</mark> 时，先反应"-ung 结尾 → die → 红色"，再确认词卡颜色对不对，用规律倒推巩固记忆，而不是被动接受颜色。</p>
<p><b class="t">最重要的一条原则：</b>德语名词永远和冠词一起记，从来不背裸词。背 <b>die Wohnung</b>，不要只背 <b>Wohnung</b>——哪怕这个词的后缀规律很可靠，冠词也要开口一起说、动笔一起写，养成的是肌肉记忆，不是"关键时刻现推"的规则记忆。</p>`
  },
  {
    id: 'g38', num: '', title: '学习策略：复数、复合词与词族', de: 'Lernstrategie: Plural, Komposita & Wortfamilien',
    html: `<p>名词的复数、复合词的性别、以及"举一反三"式的词族联想，是把已学词汇量翻倍利用的三个高杠杆策略——这一章把它们放在一起，作为词汇学习方法论的收尾。</p>
<p><b class="t">复数五大模式——不是随机的，各自有倾向的名词群体：</b></p>
<table><tr><th>模式</th><th>倾向</th><th>例词</th></tr>
<tr><td class="hl">加 <mark>-e</mark>（常带变音）</td><td class="hl">多为单音节阳性/中性词</td><td class="hl">der Tag → die Tage；der Baum → die Bäume（变音）</td></tr>
<tr><td class="hl">加 <mark>-en/-n</mark>（从不变音）</td><td class="hl">绝大多数阴性名词；也覆盖"弱变化"阳性名词（指人）</td><td class="hl">die Frau → die Frauen；der Junge → die Jungen</td></tr>
<tr><td class="hl">加 <mark>-er</mark>（能变音则必变音）</td><td class="hl">多为单音节中性词，部分阳性</td><td class="hl">das Buch → die Bücher；das Haus → die Häuser；der Mann → die Männer</td></tr>
<tr><td class="hl">加 <mark>-s</mark></td><td class="hl">外来词、元音结尾的词</td><td class="hl">das Auto → die Autos；die Kamera → die Kameras</td></tr>
<tr><td class="hl">不变（可能变音）</td><td class="hl">词尾已是 -er/-en/-chen/-lein/-el 的阳性/中性词</td><td class="hl">der Lehrer → die Lehrer（不变）；der Vater → die Väter（变音）；das Mädchen → die Mädchen（不变）</td></tr></table>
<p>记生词时同步记下复数形式的模式（哪怕不是精确记住形式，先记住"属于哪一类"），读到复数名词时能更快反应出单数原形，反过来也一样。</p>
<p><b class="t">复合词：性别和复数只看最后一个词（Grundwort）：</b>德语复合词由"限定词（Bestimmungswort）+ 基本词（Grundwort）"组成，<b>永远是最后一个词决定整个复合词的性别和复数变化</b>，前面的词只负责"限定/修饰"含义：</p>
<table><tr><th>复合词</th><th>拆解</th><th>性别/复数由谁决定</th></tr>
<tr><td class="hl">das Wörterbuch（词典）</td><td class="hl">Wörter（词，复数）+ Buch（书）</td><td class="hl">Buch 是 Grundwort → das；复数 die Wörterbücher（跟 Buch 的复数模式）</td></tr>
<tr><td class="hl">der Blumentopf（花盆）</td><td class="hl">die Blume（花）+ der Topf（罐）</td><td class="hl">Topf 是 Grundwort → der，不管 Blume 本身是 die</td></tr>
<tr><td class="hl">die Bahnhofstraße（火车站街）</td><td class="hl">der Bahnhof（火车站）+ die Straße（街道）</td><td class="hl">Straße 是 Grundwort → die，不管 Bahnhof 本身是 der</td></tr></table>
<p>遇到没见过的复合词，先找到最后一个词根——这个词根往往是已经学过的基础词，性别、复数、大致含义直接照搬；前面的词只是在缩小范围（"哪种花盆" "哪条街"）。</p>
<p><b class="t">词族联想（Wortfamilie）：一个动词能带出一整串亲戚词</b>——德语大量名词、形容词、可分动词由同一个词根派生，学会一个词根等于半价拿下一整组词：</p>
<table><tr><th>词根</th><th>派生词</th></tr>
<tr><td class="hl">fahren（开车/乘车去）</td><td class="hl">die Fahrt（行程，名词）</td></tr>
<tr><td></td><td class="hl">der Fahrer（司机，指人）</td></tr>
<tr><td></td><td class="hl">die Abfahrt（出发/发车）</td></tr>
<tr><td></td><td class="hl">ab|fahren（出发，可分动词）</td></tr></table>
<p>看到 <b class="de">die Ausfahrt</b>（高速公路出口）这种没学过的新词时，先拆出熟悉的词根 <mark>fahren</mark>，再结合前缀 <mark>aus-</mark>（"出"）猜出大意是"驶出的地方"——这就是复合词规律 + 词族联想组合起来的猜词策略，比每个生词都查词典高效得多，也是阅读文库和真实场景中读懂陌生词最实用的一招。</p>`
  },
];
