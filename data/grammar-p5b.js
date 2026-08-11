// 语法速查手册补充：Phase 5 后半（u31-u33）新增的 3 个语法主题
export const topicsP5b = [
  {
    id: 'g30', num: '', title: '被动态各时态', de: 'Passiv in allen Zeiten',
    html: `<p>u23/g22 学过的 Präsens Passiv（<mark>wird</mark> + Partizip II）只是被动态的第一个时态。新闻、正式文书和 B1 写作里，过去发生的事同样常用被动态表达——这里把整个时态谱系放在一张表里看全：</p>
<table><tr><th>时态</th><th>构成</th><th>例句</th></tr>
<tr><td class="hl">Präsens Passiv</td><td class="hl">wird + Partizip II</td><td class="hl">Das Gesetz <mark>wird</mark> diskutiert.（正在被讨论）</td></tr>
<tr><td class="hl">Präteritum Passiv</td><td class="hl">wurde + Partizip II</td><td class="hl">Das Gesetz <mark>wurde</mark> verabschiedet.（被通过了）</td></tr>
<tr><td class="hl">Perfekt Passiv</td><td class="hl">ist/sind + Partizip II + worden</td><td class="hl">Das Gesetz <mark>ist</mark> verabschiedet <mark>worden</mark>.（已经被通过了）</td></tr></table>
<p><b class="t">werden 的 Präteritum 变位（Präteritum Passiv 要用到）：</b></p>
<table><tr><th>人称</th><th>werden → Präteritum</th></tr>
<tr><td class="hl">ich</td><td class="hl">wurde</td></tr>
<tr><td class="hl">du</td><td class="hl">wurdest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">wurde</td></tr>
<tr><td class="hl">wir</td><td class="hl">wurden</td></tr>
<tr><td class="hl">ihr</td><td class="hl">wurdet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">wurden</td></tr></table>
<p><b class="t">高危警示——worden 绝不是 geworden：</b>werden 单独当实义动词（"变成"）时，Perfekt 用 <mark>ist geworden</mark>：<b class="de">Er ist Arzt geworden.</b>（他成为了医生。）但 werden 在 Perfekt Passiv 里只是助动词，这时它的分词要<b>去掉 ge-</b>，缩短成 <mark>worden</mark>：<b class="de">Das Gesetz ist verabschiedet worden.</b> 绝对不能写成 <b class="de">ist verabschiedet geworden</b>。判断方法：句子里如果还有另一个动词的 Partizip II（如 verabschiedet），worden 就在最后当"配角"；如果 werden 本身是唯一的动词，才用 geworden。</p>
<p><b class="t">情态动词 + 被动：</b>新闻评论最常见的结构，说"应该/必须被……"：</p>
<table><tr><th>结构</th><th>例句</th></tr>
<tr><td class="hl">情态动词(变位) + Partizip II + werden(原形)</td><td class="hl">Das Problem <mark>muss</mark> gelöst <mark>werden</mark>.（这个问题必须被解决。）</td></tr>
<tr><td></td><td class="hl">Die Fakten <mark>können</mark> überprüft <mark>werden</mark>.（这些事实可以被核实。）</td></tr>
<tr><td></td><td class="hl">Der Antrag <mark>soll</mark> bis Freitag eingereicht <mark>werden</mark>.（申请应在周五前提交。）</td></tr></table>
<p>句框结构和情态动词的其他用法完全一致：情态动词变位站第二位，句尾垫着"Partizip II + werden"两块。</p>
<p><b class="t">四种形态一次看全（以 reparieren 为例）：</b></p>
<table><tr><th>形态</th><th>例句</th></tr>
<tr><td class="hl">Präsens</td><td class="hl">Das Auto wird repariert.</td></tr>
<tr><td class="hl">Präteritum</td><td class="hl">Das Auto wurde repariert.</td></tr>
<tr><td class="hl">Perfekt</td><td class="hl">Das Auto ist repariert worden.</td></tr>
<tr><td class="hl">Modalverb + Passiv</td><td class="hl">Das Auto muss repariert werden.</td></tr></table>
<p><b class="t">主动改被动的步骤：</b>Aktiv 的 Akkusativ 宾语变成 Passiv 的 Nominativ 主语；原来的主语要保留就用 <mark>von + Dativ</mark>，客观陈述常直接省略：<b class="de">Der Stadtrat verabschiedete das Gesetz.</b> → <b class="de">Das Gesetz wurde (vom Stadtrat) verabschiedet.</b></p>`
  },
  {
    id: 'g31', num: '', title: 'Konjunktiv II 过去式', de: 'Konjunktiv II der Vergangenheit',
    html: `<p>g25 学过的 Konjunktiv II 现在式（würde/wäre/hätte/könnte）表达<b>对现在/将来的假设</b>；复盘已经发生的事——"当时要是……就好了"——用的是<b>对过去的假设</b>，构成公式：<b class="t">hätte/wäre + Partizip II</b>。</p>
<table><tr><th>人称</th><th>hätte</th><th>wäre</th></tr>
<tr><td class="hl">ich</td><td class="hl">hätte</td><td class="hl">wäre</td></tr>
<tr><td class="hl">du</td><td class="hl">hättest</td><td class="hl">wärst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">hätte</td><td class="hl">wäre</td></tr>
<tr><td class="hl">wir</td><td class="hl">hätten</td><td class="hl">wären</td></tr>
<tr><td class="hl">ihr</td><td class="hl">hättet</td><td class="hl">wärt</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">hätten</td><td class="hl">wären</td></tr></table>
<p class="de">Ich <mark>hätte</mark> das anders <mark>gesagt</mark>.（我当时会换种说法。）　Ich <mark>wäre</mark> vorsichtiger <mark>gewesen</mark>.（我当时会更谨慎。）</p>
<p><b class="t">hätte 还是 wäre？和 Perfekt 的 haben/sein 选择规律完全一致：</b>移动或状态改变的动词（gehen、kommen、bleiben、sein 本身）用 wäre，其余大多数用 hätte：</p>
<table><tr><th>动词</th><th>Perfekt</th><th>Konjunktiv II 过去式</th></tr>
<tr><td class="hl">sagen</td><td class="hl">hat gesagt</td><td class="hl">hätte gesagt</td></tr>
<tr><td class="hl">wissen</td><td class="hl">hat gewusst</td><td class="hl">hätte gewusst</td></tr>
<tr><td class="hl">gehen</td><td class="hl">ist gegangen</td><td class="hl">wäre gegangen</td></tr>
<tr><td class="hl">bleiben</td><td class="hl">ist geblieben</td><td class="hl">wäre geblieben</td></tr>
<tr><td class="hl">sein</td><td class="hl">ist gewesen</td><td class="hl">wäre gewesen</td></tr></table>
<p><b class="t">条件句结构：</b>和现在式条件句（g25）一模一样——wenn 从句 V-letzt，主句倒装——只是两边都换成过去式：</p>
<table><tr><th>wenn 从句（V-letzt，hätte/wäre 垫底）</th><th>主句（hätte/wäre 紧跟第二位）</th></tr>
<tr><td class="hl">Wenn ich das gewusst hätte,</td><td class="hl">wäre ich vorsichtiger gewesen.</td></tr>
<tr><td class="hl">Wenn ich früher gekommen wäre,</td><td class="hl">hätte ich den Zug nicht verpasst.</td></tr></table>
<p>注意从句里的顺序是 <mark>Partizip II + hätte/wäre</mark>（gewusst hätte），因为 V-letzt 要求变位的那个词排在从句最末尾。</p>
<p><b class="t">现在式 vs 过去式虚拟对照：</b></p>
<table><tr><th></th><th>Konjunktiv II 现在式（g25）</th><th>Konjunktiv II 过去式</th></tr>
<tr><td class="hl">指向</td><td class="hl">现在/将来的假设</td><td class="hl">过去的假设（已无法改变）</td></tr>
<tr><td class="hl">构成</td><td class="hl">würde + Infinitiv（或 wäre/hätte/könnte）</td><td class="hl">hätte/wäre + Partizip II</td></tr>
<tr><td class="hl">例句</td><td class="hl">Wenn ich Zeit hätte, würde ich reisen.（要是我有时间，我就会去旅行。）</td><td class="hl">Wenn ich Zeit gehabt hätte, wäre ich gereist.（当时要是有时间，我就去旅行了。）</td></tr></table>
<p><b class="t">情态动词的特殊语序——Ersatzinfinitiv（替代不定式）：</b>情态动词在这个结构里不用自己的 Partizip II（gekonnt/gemusst），而是<b>保持原形</b>排在最后：</p>
<table><tr><th>结构</th><th>例句</th></tr>
<tr><td class="hl">hätte + 实义动词原形 + 情态动词原形</td><td class="hl">Ich hätte das <mark>sagen sollen</mark>.（我当时应该那么说。）</td></tr>
<tr><td></td><td class="hl">Ich hätte das freundlicher <mark>formulieren können</mark>.（我当时本可以表达得更友好。）</td></tr></table>
<p><b class="t">委婉批评句型（u32 的语用工具包）：</b><mark>Vielleicht hätte man...</mark>（也许可以……）、<mark>Ich hätte mir gewünscht, dass...</mark>（我本来希望……）、<mark>An deiner Stelle hätte ich...</mark>（要是我是你，当时我会……）——用 man 代替 du，把"针对你"软化成"针对一般情况"。</p>`
  },
  {
    id: 'g32', num: '', title: '关系从句全格', de: 'Relativsätze komplett',
    html: `<p>g26 学过 Nominativ/Akkusativ 关系代词，u33 补上 Dativ 和 Genitiv——关系代词表在这里集齐四个格：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nominativ</td><td class="hl">der</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr>
<tr><td>Akkusativ</td><td class="hl">den</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr>
<tr><td>Dativ</td><td class="hl">dem</td><td class="hl">der</td><td class="hl">dem</td><td class="hl">denen</td></tr>
<tr><td>Genitiv</td><td class="hl">dessen</td><td class="hl">deren</td><td class="hl">dessen</td><td class="hl">deren</td></tr></table>
<p><b class="t">和定冠词表逐格对比，只有三个形态不一样：</b>Dativ 复数的 <mark>denen</mark>（定冠词是 den）、Genitiv 阳性/中性的 <mark>dessen</mark>（定冠词是 des）、Genitiv 阴性/复数的 <mark>deren</mark>（定冠词是 der）。其余格子和定冠词一模一样，不用重新背。</p>
<p><b class="t">Dativ 关系代词：</b>关系代词在从句里作 Dativ 宾语时使用——最常见的是从句动词本身支配 Dativ（helfen/danken/gefallen…）：</p>
<table><tr><th>例句</th><th>分析</th></tr>
<tr><td class="hl">Das ist der Nachbar, <mark>dem</mark> ich geholfen habe.</td><td>helfen + Dativ，先行词阳性 → dem</td></tr>
<tr><td class="hl">Die Kollegin, <mark>der</mark> ich das Problem erklärt habe, war hilfsbereit.</td><td>erklären + Dativ（人），先行词阴性 → der</td></tr>
<tr><td class="hl">Die Freunde, <mark>denen</mark> ich vertraue, wohnen in Leipzig.</td><td>vertrauen + Dativ，先行词复数 → denen</td></tr></table>
<p><b class="t">Genitiv 关系代词 dessen/deren：</b>表示"先行词的……"，作用像物主代词，后面的名词<b>不再加冠词</b>：</p>
<table><tr><th>例句</th><th>分析</th></tr>
<tr><td class="hl">der Nachbar, <mark>dessen</mark> Wohnung ich renoviert habe</td><td>阳性先行词 →"他的房子"用 dessen（不能说 dessen die Wohnung）</td></tr>
<tr><td class="hl">die Frau, <mark>deren</mark> Auto kaputt ist</td><td>阴性先行词 →"她的车"用 deren</td></tr>
<tr><td class="hl">die Geschäfte, <mark>deren</mark> Kunden mit dem Auto kommen</td><td>复数先行词 →"它们的顾客"用 deren</td></tr></table>
<p><b class="t">介词 + 关系代词：</b>先行词在从句里是介词宾语时，介词紧挨着排在关系代词前面，两者中间不能插入别的词。格由两条规则决定：</p>
<table><tr><th>情况</th><th>判断方法</th><th>例句</th></tr>
<tr><td class="hl">① 两格介词表位置</td><td class="hl">wo（在哪儿）→ Dativ；wohin（去哪儿）→ Akkusativ（复现 g16）</td><td class="hl">die Wohnung, <mark>in der</mark> ich wohne（wohnen 表位置，wo+Dativ）</td></tr>
<tr><td class="hl">② 固定动词+介词搭配</td><td class="hl">格由动词锁死，与空间逻辑无关（复现 g22）</td><td class="hl">der Termin, <mark>auf den</mark> ich mich vorbereitet habe（sich vorbereiten auf + Akk.）</td></tr></table>
<p>常见的"锁格"动词搭配：<mark>warten auf + Akk.</mark>、<mark>sich freuen auf + Akk.</mark>、<mark>sich interessieren für + Akk.</mark>、<mark>denken an + Akk.</mark>、<mark>teilnehmen an + Dat.</mark>——遇到这类动词，先问"这个动词固定配哪个格"，而不是套 wo/wohin 逻辑。</p>
<p><b class="t">两条老规则依然有效（复现 g26）：</b>先行词后面紧跟关系代词，中间用逗号隔开；从句动词永远 V-letzt 垫底。关系代词的格只看它<b>在从句内部</b>的身份，和先行词在主句里的格无关。</p>`
  },
  {
    id: 'g33', num: '', title: 'zu 不定式', de: 'Infinitiv mit zu',
    html: `<p>u24 第一次遇到 <b class="de">Infinitiv mit zu</b>（zu 不定式）：某些动词/短语后面接第二个动词时，第二个动词不能像情态动词后那样光秃秃地用原形，而要写成 <b class="t">zu + 动词原形</b>，整体踢到句尾。这里把触发词按词性分三组集齐，并系统补上和情态动词、damit 从句的对比。</p>
<p><b class="t">① 动词类触发词：</b></p>
<table><tr><th>动词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">anfangen</td><td>开始</td><td class="hl">Sie hat angefangen, Klavier zu spielen.</td></tr>
<tr><td class="hl">aufhören</td><td>停止</td><td class="hl">Er hat aufgehört zu rauchen.</td></tr>
<tr><td class="hl">versuchen</td><td>尝试</td><td class="hl">Ich versuche, pünktlich zu kommen.</td></tr>
<tr><td class="hl">vergessen</td><td>忘记</td><td class="hl">Vergiss nicht, den Schlüssel mitzunehmen.</td></tr>
<tr><td class="hl">vorhaben</td><td>打算</td><td class="hl">Wir haben vor, im Herbst umzuziehen.</td></tr>
<tr><td class="hl">beginnen</td><td>开始（书面）</td><td class="hl">Das Projekt beginnt, Formen anzunehmen.</td></tr>
<tr><td class="hl">planen</td><td>计划</td><td class="hl">Sie planen, das Haus zu verkaufen.</td></tr>
<tr><td class="hl">hoffen</td><td>希望</td><td class="hl">Ich hoffe, dich bald wiederzusehen.</td></tr></table>
<p><b class="t">② 名词短语类触发词：</b></p>
<table><tr><th>短语</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">Lust haben</td><td>有兴致</td><td class="hl">Hast du Lust, mitzukommen?</td></tr>
<tr><td class="hl">Zeit haben</td><td>有时间</td><td class="hl">Ich habe keine Zeit, das zu lesen.</td></tr>
<tr><td class="hl">die Möglichkeit haben</td><td>有机会</td><td class="hl">Er hatte die Möglichkeit, im Ausland zu studieren.</td></tr>
<tr><td class="hl">die Absicht haben</td><td>有意图（书面）</td><td class="hl">Sie hat nicht die Absicht, umzuziehen.</td></tr></table>
<p><b class="t">③ Es ist + 形容词类触发词：</b></p>
<table><tr><th>结构</th><th>例句</th></tr>
<tr><td class="hl">Es ist wichtig, ... zu ...</td><td class="hl">Es ist wichtig, jeden Tag zu üben.</td></tr>
<tr><td class="hl">Es ist schwierig, ... zu ...</td><td class="hl">Es war schwierig, eine Wohnung zu finden.</td></tr>
<tr><td class="hl">Es ist möglich, ... zu ...</td><td class="hl">Es ist möglich, den Termin zu verschieben.</td></tr>
<tr><td class="hl">Es macht Spaß, ... zu ...</td><td class="hl">Es macht Spaß, mit ihm zu diskutieren.</td></tr></table>
<p><b class="t">可分动词：zu 插进前缀和词干之间，写成一个词：</b></p>
<table><tr><th>可分动词</th><th>zu 不定式</th><th>例句</th></tr>
<tr><td class="hl">mitkommen</td><td class="hl">mitzukommen</td><td class="hl">Hast du Lust, heute Abend mitzukommen?</td></tr>
<tr><td class="hl">anrufen</td><td class="hl">anzurufen</td><td class="hl">Vergiss nicht, mich anzurufen.</td></tr>
<tr><td class="hl">einkaufen</td><td class="hl">einzukaufen</td><td class="hl">Ich habe vor, morgen einzukaufen.</td></tr>
<tr><td class="hl">mitnehmen</td><td class="hl">mitzunehmen</td><td class="hl">Vergiss nicht, den Schlüssel mitzunehmen.</td></tr></table>
<p>不可分前缀动词（<mark>be-, ge-, ver-, er-, ent-, emp-, zer-</mark> 等）不受影响，zu 照常排在整个动词前面：<b class="de">Es ist wichtig, das zu verstehen.</b></p>
<p><b class="t">和情态动词的对比——判断是否要加 zu：</b>情态动词（<mark>möchte/kann/muss/darf/will/soll</mark>）后面的第二个动词永远用光秃原形，不加 zu；本页列出的触发词则相反，必须加 zu。两者结构表面相似，是中文母语者最容易混淆的一对：</p>
<table><tr><th></th><th>情态动词</th><th>zu 不定式触发词</th></tr>
<tr><td>结构</td><td class="hl">情态动词(变位) + ... + Infinitiv</td><td class="hl">触发词(变位) + ..., zu + Infinitiv</td></tr>
<tr><td>例句</td><td class="hl">Ich muss arbeiten.</td><td class="hl">Ich versuche zu arbeiten.</td></tr>
<tr><td>例句</td><td class="hl">Ich will das Buch lesen.</td><td class="hl">Ich habe vor, das Buch zu lesen.</td></tr></table>
<p><b class="t">逗号规则：</b>zu 不定式短语只有 zu + 动词原形一个词时，逗号可加可不加（<mark>Er versucht zu schlafen.</mark>）；短语带宾语、状语等更多成分时，标准正字法要求用逗号把它和主句隔开（<mark>Ich habe angefangen, Deutsch zu lernen.</mark>）；此外，主句里如果已经用 <mark>es</mark> 或 <mark>das</mark> 提前指代这个 zu 不定式短语（<mark>Es macht Spaß, ...</mark>），逗号也必须加。</p>
<p><b class="t">um...zu 与 damit 简短对比（B1 深化）：</b><b class="de">um...zu</b> + Infinitiv 表示"为了做某事"，只有当<b>主句主语和不定式动作的执行者是同一人</b>时才能用：<b class="de">Ich lerne Deutsch, um in Leipzig besser zurechtzukommen.</b>（我学德语，为了在莱比锡更好地生活。）如果目的动作的执行者和主句主语<b>不是同一人</b>，就不能用 um...zu，要换成 <b class="de">damit</b> 从句（V-letzt 语序）：<b class="de">Die Lehrerin spricht langsam, damit die Schüler sie verstehen.</b>（老师说得慢，为的是让学生们能听懂——"听懂"的是学生，不是老师自己。）这条判断标准（主语是否同一）以及 damit 从句的完整用法留到 B1 系统展开，这里先建立"两者都表目的，选哪个看主语是否一致"的整体印象。</p>`
  },
];
