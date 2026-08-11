// 语法速查手册补充：Phase 4（u24-u27）新增的 4 个语法主题
export const topicsP4 = [
  {
    id: 'g23', num: '', title: '形容词词尾三步全景', de: 'Adjektivdeklination',
    html: `<p>德语形容词放在名词前面时，词尾要跟着"前面有没有冠词、冠词是哪种"变化。核心逻辑只有一条：<b>冠词已经把名词的性别、格交代清楚了，形容词就用最简单的词尾（多是 -e/-en）；冠词没交代清楚（不定冠词）或者压根没有冠词，形容词就得自己站出来把性别、格标出来。</b>本站分三次教这套系统，这里放在一起做完整对照。</p>

<p><b class="t">第一步：定冠词后（u24）——只有 -e 和 -en 两种词尾</b></p>
<table><tr><th>格</th><th>阳性 der</th><th>阴性 die</th><th>中性 das</th><th>复数 die</th></tr>
<tr><td>Nominativ</td><td class="hl">der neue Job</td><td class="hl">die neue Stelle</td><td class="hl">das neue Projekt</td><td class="hl">die neuen Kollegen</td></tr>
<tr><td>Akkusativ</td><td class="hl">den neuen Job</td><td class="hl">die neue Stelle</td><td class="hl">das neue Projekt</td><td class="hl">die neuen Kollegen</td></tr>
<tr><td>Dativ</td><td class="hl">dem neuen Job</td><td class="hl">der neuen Stelle</td><td class="hl">dem neuen Projekt</td><td class="hl">den neuen Kollegen</td></tr></table>
<p>词尾分布：<b>-e</b> 只出现在 5 个格子——Nominativ 的三个性（der/die/das 后都是 -e）+ Akkusativ 的阴性和中性（因为阴性/中性名词从 Nominativ 到 Akkusativ 冠词本身不变：die→die，das→das，形容词也跟着不变）。其余 7 个格子（Akkusativ 阳性 + 全部 Dativ + 全部复数）一律 <b>-en</b>。</p>

<p><b class="t">第二步：不定冠词后（u25）——阳性/中性 Nominativ 要形容词自己标性别</b></p>
<table><tr><th>格</th><th>阳性 ein</th><th>阴性 eine</th><th>中性 ein</th><th>复数 keine</th></tr>
<tr><td>Nominativ</td><td class="hl">ein neuer Kollege</td><td class="hl">eine gute Idee</td><td class="hl">ein wichtiges Thema</td><td class="hl">keine neuen Kollegen</td></tr>
<tr><td>Akkusativ</td><td class="hl">einen neuen Kollegen</td><td class="hl">eine gute Idee</td><td class="hl">ein wichtiges Thema</td><td class="hl">keine neuen Kollegen</td></tr>
<tr><td>Dativ</td><td class="hl">einem neuen Kollegen</td><td class="hl">einer guten Idee</td><td class="hl">einem wichtigen Thema</td><td class="hl">keinen neuen Kollegen</td></tr></table>
<p>和第一步唯一的区别在 <b>Nominativ 阳性（-er）</b>和 <b>Nominativ/Akkusativ 中性（-es）</b>：因为 <mark>ein</mark> 本身不像 der/die/das 那样一看就知道性别（ein Mann 和 ein Auto 用的是同一个 ein），形容词就要替它把性别标出来——阳性用 -er（模仿 der 的 r），中性用 -es（模仿 das 的 s）。其余格子（阴性、Akkusativ 阳性、全部 Dativ、全部复数）和第一步完全一样。</p>

<p><b class="t">第三步：无冠词（u27）——形容词独自扛起全部信息，词尾照搬定冠词</b></p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nominativ</td><td class="hl">guter Wein</td><td class="hl">gute Musik</td><td class="hl">gutes Bier</td><td class="hl">gute Freunde</td></tr>
<tr><td>Akkusativ</td><td class="hl">guten Wein</td><td class="hl">gute Musik</td><td class="hl">gutes Bier</td><td class="hl">gute Freunde</td></tr>
<tr><td>Dativ</td><td class="hl">mit gutem Wein</td><td class="hl">mit guter Musik</td><td class="hl">mit gutem Bier</td><td class="hl">mit guten Freunden</td></tr></table>
<p>没有冠词打头阵时，形容词词尾几乎就是定冠词（der/die/das/dem/der/dem/den）去掉开头 d- 剩下的部分。唯一的小差异在 Dativ 阳性/中性：定冠词是 dem，形容词词尾却是 <mark>-em</mark>（不是 -en）；复数 Dativ 词尾是 -en，且名词本身要加 -n（mit guten Freunden）。</p>

<p><b class="t">一句话记住全部三步：</b>冠词标好了性别（der/die/das），形容词就用最简单的 -e；冠词没标性别（ein）或者没有冠词，形容词就得自己扛起标性别的任务（-er/-es）。三步的 Akkusativ 阳性和全部 Dativ 几乎都是同一套词尾（-en，无冠词 Dativ 阳性/中性例外为 -em），不用分别记三遍。</p>`
  },
  {
    id: 'g24', num: '', title: '间接疑问句', de: 'Indirekte Fragesätze',
    html: `<p>想说"我不知道……是不是……"或"她问……什么时候……"，需要把一个完整的问句"塞"进另一个句子里，这就是<b class="de">间接疑问句</b>。规则分两种情况，都以 u18/u20 学过的 V-letzt（动词垫底）为基础：</p>
<table><tr><th>类型</th><th>直接问句</th><th>间接问句</th></tr>
<tr><td class="hl">是非问句（无疑问词）</td><td>Ist der Chef einverstanden?</td><td class="hl">Ich weiß nicht, <mark>ob</mark> der Chef einverstanden ist.</td></tr>
<tr><td class="hl">是非问句</td><td>Werden wir uns einig?</td><td class="hl">Ich weiß nicht, <mark>ob</mark> wir uns einig werden.</td></tr>
<tr><td class="hl">W-疑问句（wann）</td><td>Wann hat er Zeit?</td><td class="hl">Frag ihn, <mark>wann</mark> er Zeit hat.</td></tr>
<tr><td class="hl">W-疑问句（wie）</td><td>Wie geht es dir?</td><td class="hl">Sie fragt, <mark>wie</mark> es mir geht.</td></tr>
<tr><td class="hl">W-疑问句（warum）</td><td>Warum kommst du nicht?</td><td class="hl">Ich verstehe nicht, <mark>warum</mark> du nicht kommst.</td></tr></table>
<p><b class="t">规则：</b></p>
<ul>
<li><b>能用"是/不是"回答的问句</b>（原本没有疑问词，动词站句首）→ 间接问句用 <mark>ob</mark> 引导。</li>
<li><b>本来就带疑问词的问句</b>（wann/wo/warum/wie/was/wer...）→ 间接问句直接沿用同一个疑问词当连接词，不用额外加 ob。</li>
<li>两种情况共同的规则：原来问句里的动词（站句首或第二位）塞进间接问句后，<b>统统要挪到从句最后（V-letzt）</b>。</li>
</ul>
<p>间接疑问句常跟在这些开头后面：<mark>Ich weiß nicht, ...</mark>（我不知道……）、<mark>Ich frage mich, ...</mark>（我想知道……）、<mark>Sie fragt, ...</mark>（她问……）、<mark>Frag ihn/sie, ...</mark>（去问问他/她……）。</p>`
  },
  {
    id: 'g25', num: '', title: 'Konjunktiv II：假设、愿望与礼貌', de: 'Konjunktiv II',
    html: `<p>Konjunktiv II（虚拟式二式）用来表达"假设""愿望"和"礼貌客气"——u15 学过的 <mark>Könnten Sie...?</mark> 和 <mark>Ich würde gern...</mark> 正是这套系统的两个具体实例。</p>
<p><b class="t">万能公式：würde + Infinitiv</b>——绝大多数动词都用这个公式，werden 变位后站第二位，动词原形踢到句尾（和情态动词句框结构一样）：</p>
<table><tr><th>人称</th><th>würde</th></tr>
<tr><td class="hl">ich</td><td class="hl">würde</td></tr>
<tr><td class="hl">du</td><td class="hl">würdest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">würde</td></tr></table>
<p class="de">Was <mark>würdest</mark> du <mark>machen</mark>, wenn du mehr Zeit hättest?（如果你有更多时间，你会做什么？）</p>
<p><b class="t">四个必须单独背的专属形式：</b>sein、haben 和情态动词不用 würde+Infinitiv，有自己专属的形式：</p>
<table><tr><th>人称</th><th>sein → wäre</th><th>haben → hätte</th><th>können → könnte</th><th>müssen → müsste</th></tr>
<tr><td class="hl">ich</td><td class="hl">wäre</td><td class="hl">hätte</td><td class="hl">könnte</td><td class="hl">müsste</td></tr>
<tr><td class="hl">du</td><td class="hl">wärst</td><td class="hl">hättest</td><td class="hl">könntest</td><td class="hl">müsstest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">wäre</td><td class="hl">hätte</td><td class="hl">könnte</td><td class="hl">müsste</td></tr></table>
<p>注意变音规律：<mark>könnte（können）</mark>、<mark>müsste（müssen）</mark>、<mark>dürfte（dürfen）</mark> 带变音，因为它们的现在时本身就带变音（kann/muss/darf）；<mark>wollte（wollen）</mark>、<mark>sollte（sollen）</mark>不带变音，因为 wollen/sollen 现在时本身也没有变音。</p>
<p><b class="t">愿望句：</b><mark>Ich hätte gern mehr Zeit.</mark>（我想有更多时间。）　<mark>Ich wäre jetzt gern am Meer.</mark>（我现在想在海边。）——hätte/wäre 直接当句子主要动词用。</p>
<p><b class="t">虚拟条件句结构：</b>"如果……我就……"由两半组成，动词位置各有规则：</p>
<table><tr><th>wenn 从句（V-letzt，动词垫底）</th><th>主句（变位动词紧跟第二位，倒装）</th></tr>
<tr><td class="hl">Wenn ich mehr Zeit hätte,</td><td class="hl">würde ich öfter verreisen.</td></tr>
<tr><td class="hl">Wenn wir weniger arbeiten würden,</td><td class="hl">hätten wir mehr Glück.</td></tr></table>
<p>wenn 从句里的动词照旧踢到从句最后；主句因为 wenn 从句占据了"第一位"，变位动词必须紧跟着站上"第二位"（主谓位置对调，即 Inversion）。也可以把主句放在前面：<mark>Ich würde öfter verreisen, wenn ich mehr Zeit hätte.</mark>——这时主句用正常语序，不倒装。</p>
<p><b class="t">委婉建议句型：</b><mark>An deiner Stelle würde ich...</mark>（要是我是你，我会……）、<mark>Du könntest doch...</mark>（你其实可以……）。</p>
<p><b class="t">礼貌用法回顾（u15）：</b>同一套形式还能表达委婉客气，和"假设"用法形式完全相同，靠语境区分：</p>
<table><tr><th>直接说法</th><th>更礼貌的说法</th></tr>
<tr><td>Können Sie mir helfen?</td><td class="hl">Könnten Sie mir helfen?</td></tr>
<tr><td>Ich will einen Termin.</td><td class="hl">Ich würde gern einen Termin vereinbaren.</td></tr>
<tr><td>Ich will einen Kaffee.</td><td class="hl">Ich hätte gern einen Kaffee.</td></tr></table>`
  },
  {
    id: 'g26', num: '', title: '关系从句', de: 'Relativsätze',
    html: `<p>关系从句（Relativsatz）让人可以在名词后面直接补一个从句，精确说明"是什么样的"，不用拆成两个短句：</p>
<p class="de">Es gibt ein Konzert, <mark>das</mark> ich dir empfehle.（有一场音乐会，是我推荐给你的。）</p>
<p><b class="t">关系代词表（Nominativ / Akkusativ）：</b>形式和定冠词几乎一样，只有阳性 Akkusativ 变化：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nominativ（从句主语）</td><td class="hl">der</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr>
<tr><td>Akkusativ（从句宾语）</td><td class="hl">den</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr></table>
<p><b class="t">判断 Nominativ 还是 Akkusativ：</b>只看关系代词<b>在从句内部</b>的身份，和先行词本身在主句里的格无关：</p>
<table><tr><th>例句</th><th>分析</th></tr>
<tr><td class="hl">der Konzertsaal, <mark>der</mark> in der Innenstadt liegt</td><td>der 是从句里 liegt 的主语 → Nominativ</td></tr>
<tr><td class="hl">der Dirigent, <mark>den</mark> sie eingeladen haben</td><td>den 是从句里 eingeladen haben 的宾语 → Akkusativ</td></tr></table>
<p><b class="t">两条硬规则：</b></p>
<ul>
<li><b>先行词紧跟原则：</b>被描述的名词（先行词）后面立刻跟上关系代词，中间用逗号隔开，不能插入别的成分。</li>
<li><b>V-letzt：</b>从句里的动词永远排在从句最后一个位置，这是 weil/dass/ob 从句规则的又一次复现。</li>
</ul>
<p><b class="t">先说到这里：</b>Dativ 和 Genitiv 关系代词（<mark>dem/der/dem/denen</mark> 和 <mark>dessen/deren</mark>），以及"介词+关系代词"的用法（如 <mark>mit dem</mark>、<mark>für die</mark>），留到 B1 阶段（u33）系统学习——现在先把 Nominativ/Akkusativ 这两格用熟练。</p>`
  },
];
