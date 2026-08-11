// 语法速查手册：8 个 A1 核心语法主题，供随时查阅
export const grammarTopics = [
  {
    id: 'g1', num: '01', title: '发音速查表', de: 'Aussprache-Spickzettel',
    html: `<p>德语拼写和发音高度对应，掌握这张表基本能读出所有单词。核心原则：元音后跟一个辅音或 h 读长音，跟两个及以上辅音读短音；<b>ie</b> 永远长音，<b>ei</b> 永远读"艾"。中文母语者还有个隐藏优势——<mark>ü</mark> 就是拼音里"鱼"的音，很多英语母语者练很多年都发不准。</p>
<table><tr><th>类型</th><th>字母</th><th>读法</th><th>例词</th></tr>
<tr><td class="hl">变元音</td><td class="hl">ä</td><td>类似"哎"</td><td class="hl">Käse</td></tr>
<tr><td class="hl">变元音</td><td class="hl">ö</td><td>"欸"嘴唇拢圆</td><td class="hl">schön</td></tr>
<tr><td class="hl">变元音</td><td class="hl">ü</td><td>拼音"鱼"的音</td><td class="hl">fünf</td></tr>
<tr><td class="hl">双元音</td><td class="hl">ei</td><td>"艾" [ai]</td><td class="hl">nein</td></tr>
<tr><td class="hl">双元音</td><td class="hl">ie</td><td>长音"衣" [iː]</td><td class="hl">Bier</td></tr>
<tr><td class="hl">双元音</td><td class="hl">au</td><td>"奥" [au]</td><td class="hl">Haus</td></tr>
<tr><td class="hl">双元音</td><td class="hl">eu</td><td>"欧伊" [ɔy]</td><td class="hl">neun</td></tr>
<tr><td class="hl">辅音</td><td class="hl">w</td><td>读英语 v</td><td class="hl">Wasser</td></tr>
<tr><td class="hl">辅音</td><td class="hl">v</td><td>读 f</td><td class="hl">vier</td></tr>
<tr><td class="hl">辅音</td><td class="hl">z</td><td>"茨" [ts]</td><td class="hl">zehn</td></tr>
<tr><td class="hl">辅音</td><td class="hl">sch</td><td>"什" [ʃ]</td><td class="hl">Schule</td></tr>
<tr><td class="hl">辅音</td><td class="hl">st-/sp-（词首）</td><td>scht-/schp-</td><td class="hl">Straße</td></tr>
<tr><td class="hl">辅音</td><td class="hl">ch（a/o/u 后）</td><td>硬音 [x]</td><td class="hl">Buch</td></tr>
<tr><td class="hl">辅音</td><td class="hl">ch（e/i 后）</td><td>软音 [ç]</td><td class="hl">ich</td></tr>
<tr><td class="hl">词尾</td><td class="hl">b/d/g</td><td>清化为 p/t/k</td><td class="hl">Tag→"塔克"</td></tr>
<tr><td class="hl">词尾</td><td class="hl">-er</td><td>轻"啊"</td><td class="hl">Wasser→"瓦萨"</td></tr>
<tr><td class="hl">词尾</td><td class="hl">-ig</td><td>软音 [ç]</td><td class="hl">zwanzig</td></tr></table>`
  },
  {
    id: 'g2', num: '02', title: '名词的性与复数', de: 'Genus und Plural',
    html: `<p>德语名词分三性：<b>der（阳性）</b>、<b>die（阴性）</b>、<b>das（中性）</b>，纯语法分类，必须和单词一起背。本站用颜色固定标注：<b>der 蓝色、die 红色、das 绿色</b>，词汇卡片、复习卡全站统一，看多了自然形成条件反射。下面是几条能猜对大部分性别的结尾规律，以及五种最常见的复数模式。</p>
<table><tr><th>结尾规律</th><th>性</th><th>例词</th></tr>
<tr><td class="hl">-ung 结尾</td><td class="hl">die（阴性）</td><td class="hl">die Verspätung</td></tr>
<tr><td class="hl">-heit/-keit 结尾</td><td class="hl">die（阴性）</td><td class="hl">die Möglichkeit</td></tr>
<tr><td class="hl">-chen/-lein 结尾</td><td class="hl">das（中性）</td><td class="hl">das Brötchen</td></tr>
<tr><td class="hl">-er 结尾（指人）</td><td class="hl">der（阳性）</td><td class="hl">der Lehrer</td></tr>
<tr><td class="hl">-tion/-ie 结尾</td><td class="hl">die（阴性）</td><td class="hl">die Nation</td></tr></table>
<table><tr><th>复数模式</th><th>例词</th></tr>
<tr><td class="hl">加 -e</td><td class="hl">der Tag → die Tage</td></tr>
<tr><td class="hl">加 -en/-n</td><td class="hl">die Banane → die Bananen</td></tr>
<tr><td class="hl">加 -er（常变音）</td><td class="hl">das Ei → die Eier</td></tr>
<tr><td class="hl">加 -s（外来词）</td><td class="hl">das Café → die Cafés</td></tr>
<tr><td class="hl">不变（-er/-chen/-lein 结尾）</td><td class="hl">das Brötchen → die Brötchen</td></tr></table>
<p>记住一个偷懒技巧：<b>所有名词的复数定冠词永远是 die</b>，不管单数是什么性别。</p>`
  },
  {
    id: 'g3', num: '03', title: '人称代词与 sein / haben', de: 'Personalpronomen, sein & haben',
    html: `<p>sein（是）和 haben（有）是德语使用频率最高的两个动词，且都不规则，必须整体背下来。先认清六个人称代词，再套进变位表。</p>
<table><tr><th>人称代词</th><th>中文</th><th>sein</th><th>haben</th></tr>
<tr><td class="hl">ich</td><td>我</td><td class="hl">bin</td><td class="hl">habe</td></tr>
<tr><td class="hl">du</td><td>你</td><td class="hl">bist</td><td class="hl">hast</td></tr>
<tr><td class="hl">er/sie/es</td><td>他/她/它</td><td class="hl">ist</td><td class="hl">hat</td></tr>
<tr><td class="hl">wir</td><td>我们</td><td class="hl">sind</td><td class="hl">haben</td></tr>
<tr><td class="hl">ihr</td><td>你们</td><td class="hl">seid</td><td class="hl">habt</td></tr>
<tr><td class="hl">sie/Sie</td><td>他们/您</td><td class="hl">sind</td><td class="hl">haben</td></tr></table>
<p><b>sie（他们）</b>和<b>Sie（您，敬称）</b>共用同一套变位，唯一区别是大小写——句首无法靠大小写分辨时，就靠上下文判断。</p>`
  },
  {
    id: 'g4', num: '04', title: '规则动词现在时', de: 'Präsens der regelmäßigen Verben',
    html: `<p>大多数德语动词是"规则动词"：去掉词干后的 -en，按人称加固定词尾。以 <b class="de">wohnen</b> 为例：</p>
<table><tr><th>人称</th><th>词尾</th><th>wohnen</th><th>arbeiten</th></tr>
<tr><td class="hl">ich</td><td class="hl">-e</td><td class="hl">wohne</td><td class="hl">arbeite</td></tr>
<tr><td class="hl">du</td><td class="hl">-st</td><td class="hl">wohnst</td><td class="hl">arbeitest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">-t</td><td class="hl">wohnt</td><td class="hl">arbeitet</td></tr>
<tr><td class="hl">wir</td><td class="hl">-en</td><td class="hl">wohnen</td><td class="hl">arbeiten</td></tr>
<tr><td class="hl">ihr</td><td class="hl">-t</td><td class="hl">wohnt</td><td class="hl">arbeitet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">-en</td><td class="hl">wohnen</td><td class="hl">arbeiten</td></tr></table>
<p>词干以 <b>-t/-d</b> 结尾的动词（如 arbeiten）在 du/er-sie-es/ihr 前要插入一个 <mark>e</mark> 方便发音。另外要留意<b>变音动词</b>：sprechen（du sprichst, er spricht）、essen（du isst, er isst）、nehmen（du nimmst, er nimmt）——只在 du 和 er/sie/es 两个人称变音，其余照常规变化。</p>`
  },
  {
    id: 'g5', num: '05', title: '语序三条铁律', de: 'Wortstellung',
    html: `<p>德语语序比英语死板，但规则清楚，记住三条就能应付几乎所有日常句子：</p>
<table><tr><th>句型</th><th>规则</th><th>例句</th></tr>
<tr><td class="hl">陈述句</td><td>变位动词永远在第二位（V2）</td><td class="hl">Ich <b>lerne</b> jeden Tag Deutsch.</td></tr>
<tr><td class="hl">W 疑问句</td><td>W词 + 动词 + 主语</td><td class="hl">Woher <b>kommst</b> du?</td></tr>
<tr><td class="hl">是非问句</td><td>动词提到第一位</td><td class="hl"><b>Sprichst</b> du Deutsch?</td></tr></table>
<p>"动词第二位"是最容易被忽略的规则：不是"主语后面"，而是"整个句子的第二个成分后面"。比如把时间提前，动词照样紧跟着：<mark>Jeden Tag</mark> <b>lerne</b> ich Deutsch.——注意这里主语 ich 被挤到动词后面去了，因为动词必须占据第二位。</p>`
  },
  {
    id: 'g6', num: '06', title: '一格与四格入门', de: 'Nominativ und Akkusativ',
    html: `<p>德语名词有四个"格"，A1 阶段先掌握最常用的两个：<b>第一格（主语）</b>和<b>第四格（宾语，及物动词的直接对象）</b>。好消息是：不定冠词变化只发生在阳性名词上。</p>
<table><tr><th>性</th><th>第一格</th><th>第四格</th><th>例句</th></tr>
<tr><td class="hl">阳性</td><td class="hl">ein Kaffee</td><td class="hl">einen Kaffee</td><td class="hl">Ich nehme einen Kaffee.</td></tr>
<tr><td class="hl">阴性</td><td class="hl">eine Cola</td><td class="hl">eine Cola（不变）</td><td class="hl">Ich nehme eine Cola.</td></tr>
<tr><td class="hl">中性</td><td class="hl">ein Wasser</td><td class="hl">ein Wasser（不变）</td><td class="hl">Ich nehme ein Wasser.</td></tr></table>
<p>定冠词同理，只有阳性变化：<b>der → den</b>（Ich nehme den Kaffee.），die 和 das 不变。点单、购物时最常用的句型 <b class="de">Ich hätte gern einen/eine/ein ...</b> 直接套用这条规则即可，不用先弄懂"格"的完整理论。</p>`
  },
  {
    id: 'g7', num: '07', title: '数字、价格与时间', de: 'Zahlen, Preise, Uhrzeit',
    html: `<p>数字规律：0-12 各不相同要单独背；13-19 是"个位 + zehn"；20 以后是"个位 + und + 十位"，和英语顺序相反。</p>
<table><tr><th>数字</th><th>德语</th></tr>
<tr><td class="hl">0</td><td class="hl">null</td></tr>
<tr><td class="hl">1</td><td class="hl">eins</td></tr>
<tr><td class="hl">2</td><td class="hl">zwei</td></tr>
<tr><td class="hl">3</td><td class="hl">drei</td></tr>
<tr><td class="hl">4</td><td class="hl">vier</td></tr>
<tr><td class="hl">5</td><td class="hl">fünf</td></tr>
<tr><td class="hl">6</td><td class="hl">sechs</td></tr>
<tr><td class="hl">7</td><td class="hl">sieben</td></tr>
<tr><td class="hl">8</td><td class="hl">acht</td></tr>
<tr><td class="hl">9</td><td class="hl">neun</td></tr>
<tr><td class="hl">10</td><td class="hl">zehn</td></tr>
<tr><td class="hl">11</td><td class="hl">elf</td></tr>
<tr><td class="hl">12</td><td class="hl">zwölf</td></tr>
<tr><td class="hl">13</td><td class="hl">dreizehn</td></tr>
<tr><td class="hl">14</td><td class="hl">vierzehn</td></tr>
<tr><td class="hl">15</td><td class="hl">fünfzehn</td></tr>
<tr><td class="hl">16</td><td class="hl">sechzehn</td></tr>
<tr><td class="hl">17</td><td class="hl">siebzehn</td></tr>
<tr><td class="hl">18</td><td class="hl">achtzehn</td></tr>
<tr><td class="hl">19</td><td class="hl">neunzehn</td></tr>
<tr><td class="hl">20</td><td class="hl">zwanzig</td></tr></table>
<table><tr><th>整十</th><th>德语</th><th>组合示例</th></tr>
<tr><td class="hl">30</td><td class="hl">dreißig</td><td class="hl">35 = fünfunddreißig</td></tr>
<tr><td class="hl">40</td><td class="hl">vierzig</td><td class="hl">48 = achtundvierzig</td></tr>
<tr><td class="hl">50</td><td class="hl">fünfzig</td><td class="hl">53 = dreiundfünfzig</td></tr>
<tr><td class="hl">60</td><td class="hl">sechzig</td><td class="hl">67 = siebenundsechzig</td></tr>
<tr><td class="hl">70</td><td class="hl">siebzig</td><td class="hl">72 = zweiundsiebzig</td></tr>
<tr><td class="hl">80</td><td class="hl">achtzig</td><td class="hl">99 = neunundneunzig</td></tr>
<tr><td class="hl">90</td><td class="hl">neunzig</td><td class="hl">100 = hundert</td></tr></table>
<p>价格读法：德语用<b>逗号</b>做小数点，12,40 € 读作 <mark>zwölf Euro vierzig</mark>；金额不带零头就直接说"X Euro"。时间读法：口语整点常用 <mark>Uhr</mark>：<b>8 Uhr</b>（八点）、<b>halb neun</b>（8点半，字面"差半到9点"）、<b>Viertel nach acht</b>（8点一刻）、<b>Viertel vor neun</b>（8点45）。</p>
<table><tr><th>星期</th><th>德语</th></tr>
<tr><td class="hl">周一</td><td class="hl">Montag</td></tr>
<tr><td class="hl">周二</td><td class="hl">Dienstag</td></tr>
<tr><td class="hl">周三</td><td class="hl">Mittwoch</td></tr>
<tr><td class="hl">周四</td><td class="hl">Donnerstag</td></tr>
<tr><td class="hl">周五</td><td class="hl">Freitag</td></tr>
<tr><td class="hl">周六</td><td class="hl">Samstag</td></tr>
<tr><td class="hl">周日</td><td class="hl">Sonntag</td></tr></table>`
  },
  {
    id: 'g8', num: '08', title: 'du 还是 Sie？', de: 'du oder Sie?',
    html: `<p>德语区分"你"（du，非正式）和"您"（Sie，敬称）。选错不会闹出大问题，但用对了会显得更得体：</p>
<table><tr><th>场合</th><th>用 du</th><th>用 Sie</th></tr>
<tr><td class="hl">同事/同学</td><td class="hl">同龄、平级、关系熟络</td><td class="hl">初次见面、明显年长、上下级</td></tr>
<tr><td class="hl">日常办事</td><td class="hl">几乎不用</td><td class="hl">银行、市政厅、医院、邮局</td></tr>
<tr><td class="hl">商店/餐厅</td><td class="hl">年轻人开的小店偶尔用</td><td class="hl">默认用 Sie，除非对方先用 du</td></tr>
<tr><td class="hl">大学/研究所</td><td class="hl">同一课题组、国际化环境常见</td><td class="hl">对教授、行政人员</td></tr></table>
<p>对应的动词形式和物主代词也不同：</p>
<table><tr><th></th><th>du</th><th>Sie</th></tr>
<tr><td class="hl">动词变位</td><td class="hl">-st 词尾：du kommst</td><td class="hl">-en 词尾：Sie kommen</td></tr>
<tr><td class="hl">"你/您"呢</td><td class="hl">Und dir?</td><td class="hl">Und Ihnen?</td></tr>
<tr><td class="hl">你的/您的</td><td class="hl">dein</td><td class="hl">Ihr</td></tr></table>
<p>拿不准时，先用 Sie 更安全——最多显得有点生分，用错 du 才容易显得不礼貌。很多德国人也会主动提议 "Wir können uns duzen"（我们可以互相说 du，duzen 就是"以 du 相称"这个动作的专用动词），这时候顺势换过去就行。</p>`
  },
  {
    id: 'g9', num: '09', title: '时间的两套读法', de: 'Uhrzeit',
    html: `<p>德语报时间有<b>正式</b>（24小时制，写在车票、日历上）和<b>口语</b>（围绕整点/半点描述）两套系统，日常对话里两套都要能听懂：</p>
<table><tr><th>正式（24小时制）</th><th>口语</th><th>中文</th></tr>
<tr><td class="hl">14:00 Uhr</td><td class="hl">zwei Uhr</td><td>两点</td></tr>
<tr><td class="hl">14:15 Uhr</td><td class="hl">Viertel nach zwei</td><td>两点一刻</td></tr>
<tr><td class="hl">14:30 Uhr</td><td class="hl">halb drei</td><td>两点半</td></tr>
<tr><td class="hl">14:45 Uhr</td><td class="hl">Viertel vor drei</td><td>差一刻三点（两点四十五）</td></tr></table>
<p><b class="t">halb 的坑：</b>中文说"两点半"是"过了两点半小时"，德语的 <mark>halb</mark> 指向<b>下一个整点的一半</b>——<b>halb drei = 2:30，不是 3:30</b>。记忆窍门：halb 后面的数字永远比实际的"点"大 1。<mark>nach</mark>（之后）和 <mark>vor</mark>（之前）方向也不能弄反：Viertel nach zwei 是两点过了一刻；Viertel vor drei 是还差一刻到三点。</p>
<p><b class="t">时间介词 um / am / im 一览：</b></p>
<table><tr><th>介词</th><th>用于</th><th>例句</th></tr>
<tr><td class="hl">um</td><td>具体钟点</td><td class="hl">um 8 Uhr, um Viertel nach neun</td></tr>
<tr><td class="hl">am</td><td>星期几、日期、一天中的时段</td><td class="hl">am Montag, am Morgen, am 3. Mai</td></tr>
<tr><td class="hl">im</td><td>月份、季节、年份范围</td><td class="hl">im Mai, im Winter, im Jahr 2024</td></tr></table>
<p>例外：晚上说 <mark>in der Nacht</mark>，不是 am Nacht——先当固定搭配记住，完整的介词格系统留到后面单元系统学习。</p>`
  },
  {
    id: 'g10', num: '10', title: '情态动词与句框结构', de: 'Modalverben & Satzklammer',
    html: `<p>六个情态动词是德语口语里出镜率最高的一类词，全部不规则，且都遵守同一条规律：<b>ich 和 er/sie/es 的变位形式完全相同，不加通常的 -t 词尾</b>。</p>
<table><tr><th>人称</th><th>möchten</th><th>können</th><th>müssen</th><th>dürfen</th><th>wollen</th><th>sollen</th></tr>
<tr><td class="hl">ich</td><td class="hl">möchte</td><td class="hl">kann</td><td class="hl">muss</td><td class="hl">darf</td><td class="hl">will</td><td class="hl">soll</td></tr>
<tr><td class="hl">du</td><td class="hl">möchtest</td><td class="hl">kannst</td><td class="hl">musst</td><td class="hl">darfst</td><td class="hl">willst</td><td class="hl">sollst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">möchte</td><td class="hl">kann</td><td class="hl">muss</td><td class="hl">darf</td><td class="hl">will</td><td class="hl">soll</td></tr>
<tr><td class="hl">wir</td><td class="hl">möchten</td><td class="hl">können</td><td class="hl">müssen</td><td class="hl">dürfen</td><td class="hl">wollen</td><td class="hl">sollen</td></tr>
<tr><td class="hl">ihr</td><td class="hl">möchtet</td><td class="hl">könnt</td><td class="hl">müsst</td><td class="hl">dürft</td><td class="hl">wollt</td><td class="hl">sollt</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">möchten</td><td class="hl">können</td><td class="hl">müssen</td><td class="hl">dürfen</td><td class="hl">wollen</td><td class="hl">sollen</td></tr></table>
<p>意思速查：<b>möchten</b> 想要（礼貌）、<b>können</b> 能/会、<b>müssen</b> 必须、<b>dürfen</b> 可以/被允许、<b>wollen</b> 想要（更直接）、<b>sollen</b> 应该。</p>
<p><b class="t">Satzklammer 句框结构：</b>情态动词句子像一个夹子——<b>情态动词站在位置2</b>，<b>实义动词以原形踢到句尾</b>，中间可以夹很多内容：</p>
<table><tr><th>位置1</th><th>位置2（情态动词）</th><th>中间</th><th>句尾（动词原形）</th></tr>
<tr><td class="hl">Ich</td><td class="hl">möchte</td><td class="hl">Deutsch</td><td class="hl">lernen.</td></tr>
<tr><td class="hl">Wir</td><td class="hl">müssen</td><td class="hl">noch eine Uhrzeit</td><td class="hl">finden.</td></tr></table>
<p>是非问句时把情态动词整个挪到第一位，动词原形依然留在句尾不动：<mark>Möchtest</mark> du heute Abend joggen <mark>gehen</mark>? 这个"两端固定、中间自由"的结构后面会在可分动词、完成时里反复出现，是最值得练熟的语序规则之一。</p>`
  },
  {
    id: 'g11', num: '11', title: '否定：kein 还是 nicht', de: 'Verneinung',
    html: `<p>判断口诀：<b>如果否定的东西前面本来可以有 ein/eine，或者是没有冠词的名词（复数、不可数），就用 kein；其余情况——动词、形容词、副词、带定冠词/物主冠词的名词——一律用 nicht。</b>kein 本身要像 ein 一样变位（kein/keine/keinen……）。</p>
<table><tr><th>肯定句</th><th>否定句</th><th>为什么</th></tr>
<tr><td>Ich habe einen Bruder.</td><td class="hl">Ich habe keinen Bruder.</td><td>否定带 ein 的名词</td></tr>
<tr><td>Ich bin müde.</td><td class="hl">Ich bin nicht müde.</td><td>否定形容词</td></tr>
<tr><td>Das ist mein Auto.</td><td class="hl">Das ist nicht mein Auto.</td><td>名词前已有物主冠词，不能再套 kein</td></tr>
<tr><td>Ich trinke Kaffee.</td><td class="hl">Ich trinke keinen Kaffee.</td><td>无冠词的不可数名词</td></tr>
<tr><td>Ich komme aus Berlin.</td><td class="hl">Ich komme nicht aus Berlin.</td><td>否定介词短语</td></tr></table>
<p>做题时先问自己："这里本来能不能填 ein？"——能填就用 kein 家族的词，不能填就用 nicht。</p>
<p><b class="t">doch 的特殊用法：</b>被问到否定问句（如 "Bist du nicht verheiratet?"）而实际情况是肯定的，不能直接说 Ja（会被理解成"对，我没结婚"），要用专门的词 <mark>doch</mark> 来推翻否定：<b>"Doch, ich bin verheiratet!"</b>（不，我结婚了！）</p>`
  },
  {
    id: 'g12', num: '12', title: '命令式与 Dativ 初见', de: 'Imperativ & Dativ',
    html: `<p>命令式对应三种称呼——du、ihr、Sie，各有各的形式：</p>
<table><tr><th>称呼</th><th>陈述式</th><th>命令式</th></tr>
<tr><td class="hl">du</td><td class="hl">du trinkst</td><td class="hl">Trink!</td></tr>
<tr><td class="hl">ihr</td><td class="hl">ihr trinkt</td><td class="hl">Trinkt!</td></tr>
<tr><td class="hl">Sie</td><td class="hl">Sie trinken</td><td class="hl">Trinken Sie!</td></tr></table>
<p>规则：<b>du 命令式</b> = 去掉 du 和词尾 -st，只留词干（变音动词 a→ä 的 du 命令式不带变音：schlafen→<b>Schlaf!</b>，不是 Schläf!）；<b>ihr 命令式</b> = 和 ihr 现在时变位相同，去掉 ihr；<b>Sie 命令式</b> = 动词提到句首 + Sie。几个常用的不规则形式：</p>
<table><tr><th>动词</th><th>du 命令式</th></tr>
<tr><td class="hl">nehmen（du nimmst）</td><td class="hl">Nimm!</td></tr>
<tr><td class="hl">essen（du isst）</td><td class="hl">Iss!</td></tr>
<tr><td class="hl">sein（完全不规则）</td><td class="hl">Sei! / Seid! / Seien Sie!</td></tr></table>
<p><b class="t">Dativ 初见：</b>说"哪里疼"要用到德语第三个格——Dativ，第一次露面先只学人称代词 <mark>mir/dir/Ihnen</mark> 配几个固定搭配，不展开完整变格表：</p>
<table><tr><th>人称</th><th>Dativ 代词</th><th>固定搭配</th></tr>
<tr><td class="hl">ich</td><td class="hl">mir</td><td class="hl">Der Kopf tut mir weh. / Mir geht’s nicht gut.</td></tr>
<tr><td class="hl">du</td><td class="hl">dir</td><td class="hl">Tut dir der Bauch weh?</td></tr>
<tr><td class="hl">Sie</td><td class="hl">Ihnen</td><td class="hl">Was fehlt Ihnen?</td></tr></table>
<p>完整的 Dativ 人称代词表（他/她/我们/你们的形式）和 Dativ 完整变格规则留到后面的单元系统学习，现在把这几个固定搭配当整句背下来就够用。</p>`
  },
];

// ---- Phase 2-5 新增主题（g13-g32）：从分文件合并进来并统一编号 ----
import { topicsP2a } from './grammar-p2a.js';
import { topicsP2b } from './grammar-p2b.js';
import { topicsP3 } from './grammar-p3.js';
import { topicsP4 } from './grammar-p4.js';
import { topicsP5a } from './grammar-p5a.js';
import { topicsP5b } from './grammar-p5b.js';
import { topicsP6 } from './grammar-p6.js';
[...topicsP2a, ...topicsP2b, ...topicsP3, ...topicsP4, ...topicsP5a, ...topicsP5b, ...topicsP6].forEach((t, i) => {
  grammarTopics.push({ ...t, num: String(13 + i).padStart(2, '0') });
});
