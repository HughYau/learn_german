// 语法速查手册补充：Phase 3（u19-u23）新增的 4 个语法主题
export const topicsP3 = [
  {
    id: 'g19', num: '', title: '固定格介词', de: 'Präpositionen mit Dativ/Akkusativ',
    html: `<p>德语介词按"格"能分成三类。两组"永远"介词不用判断 wo 还是 wohin，直接固定格；第三组（u16 学过的两格介词）才需要按位置/方向判断：</p>
<table><tr><th>类型</th><th>规则</th><th>介词</th></tr>
<tr><td class="hl">永远 Akkusativ</td><td>不用判断，固定第四格</td><td class="hl">durch, für, gegen, ohne, um</td></tr>
<tr><td class="hl">永远 Dativ</td><td>不用判断，固定第三格</td><td class="hl">aus, bei, mit, nach, seit, von, zu</td></tr>
<tr><td class="hl">两格介词（Wechsel）</td><td>wo? 用 Dativ / wohin? 用 Akkusativ</td><td class="hl">an, auf, hinter, in, neben, über, unter, vor, zwischen</td></tr></table>
<p><b class="t">永远 Dativ 的七个介词：</b></p>
<table><tr><th>介词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">aus</td><td>来自，从……出来</td><td class="hl">Ich komme aus China.</td></tr>
<tr><td class="hl">bei</td><td>在……那里，在（公司/人）那儿</td><td class="hl">Ich arbeite bei einem Institut.</td></tr>
<tr><td class="hl">mit</td><td>和……一起；乘坐（交通工具）</td><td class="hl">Ich fahre mit dem ICE.</td></tr>
<tr><td class="hl">nach</td><td>去（城市/国家，无冠词）；……之后</td><td class="hl">Der Zug fährt nach Dresden.</td></tr>
<tr><td class="hl">seit</td><td>自……以来（时间起点）</td><td class="hl">Ich wohne seit einem Jahr hier.</td></tr>
<tr><td class="hl">von</td><td>从……（出发点）；属于</td><td class="hl">Der Zug kommt von Berlin.</td></tr>
<tr><td class="hl">zu</td><td>去，朝向（人或建筑物）</td><td class="hl">Ich fahre zu meiner Kusine.</td></tr></table>
<p>记忆口诀：<mark>Aus, bei, mit, nach, seit, von, zu – Dativ, das schwöre ich dir zu!</mark></p>
<p><b class="t">永远 Akkusativ 的五个介词：</b></p>
<table><tr><th>介词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">durch</td><td>穿过，通过</td><td class="hl">Der Zug fährt durch den Tunnel.</td></tr>
<tr><td class="hl">für</td><td>为了，给</td><td class="hl">Eine Fahrkarte für zwei Personen.</td></tr>
<tr><td class="hl">gegen</td><td>反对；大约（时间）</td><td class="hl">Der Zug kommt gegen 16 Uhr an.</td></tr>
<tr><td class="hl">ohne</td><td>没有</td><td class="hl">Ich fahre lieber ohne Umsteigen.</td></tr>
<tr><td class="hl">um</td><td>围绕；在……周围；也表示时钟点</td><td class="hl">Der Aufzug ist gleich um die Ecke.</td></tr></table>
<p>记忆技巧：首字母拼起来——<b>f</b>ür、<b>u</b>m、<b>d</b>urch、<b>g</b>egen、<b>o</b>hne——就是 <mark>FUDGO</mark>，念起来像英语 fudge（软糖）加个 o。</p>
<p><b class="t">nach 还是 zu？</b>nach 后面接没有冠词的地名（城市、国家）——<mark>nach Dresden</mark>；zu 后面接人或有冠词的建筑物/机构——<mark>zu meiner Kusine</mark>、<mark>zum Bahnhof</mark>。</p>
<p>固定接 Dativ 的介词后面配 Dativ 人称代词（<mark>mit mir</mark>、<mark>bei dir</mark>），固定接 Akkusativ 的介词后面配 Akkusativ 人称代词（<mark>für dich</mark>、<mark>ohne mich</mark>）——见 g20 的人称代词全表。</p>`
  },
  {
    id: 'g20', num: '', title: '人称代词全表', de: 'Personalpronomen (Nom./Akk./Dat.)',
    html: `<p>u10 学过 Dativ 人称代词 mir/dir/Ihnen，u17 也用过 Akkusativ 的一部分——这里第一次把 Nominativ、Dativ、Akkusativ 三套人称代词完整摆在一张表里：</p>
<table><tr><th>Nominativ</th><th>Dativ</th><th>Akkusativ</th></tr>
<tr><td class="hl">ich</td><td class="hl">mir</td><td class="hl">mich</td></tr>
<tr><td class="hl">du</td><td class="hl">dir</td><td class="hl">dich</td></tr>
<tr><td class="hl">er</td><td class="hl">ihm</td><td class="hl">ihn</td></tr>
<tr><td class="hl">sie（她）</td><td class="hl">ihr</td><td class="hl">sie</td></tr>
<tr><td class="hl">es</td><td class="hl">ihm</td><td class="hl">es</td></tr>
<tr><td class="hl">wir</td><td class="hl">uns</td><td class="hl">uns</td></tr>
<tr><td class="hl">ihr</td><td class="hl">euch</td><td class="hl">euch</td></tr>
<tr><td class="hl">sie（他们）</td><td class="hl">ihnen</td><td class="hl">sie</td></tr>
<tr><td class="hl">Sie（您）</td><td class="hl">Ihnen</td><td class="hl">Sie</td></tr></table>
<p><b class="t">最小对比：</b>同一个人称，Dativ 和 Akkusativ 常常长得不一样，靠动词决定用哪个：</p>
<table><tr><th>Akkusativ 例句</th><th>Dativ 例句</th></tr>
<tr><td class="hl">Er sieht mich.（他看见我）</td><td class="hl">Er hilft mir.（他帮我）</td></tr>
<tr><td class="hl">Ich rufe dich an.（我给你打电话）</td><td class="hl">Ich gebe dir das Buch.（我把书给你）</td></tr></table>
<p><b class="t">反身代词（u21）：</b>反身代词和 Akkusativ 人称代词几乎一样，唯一区别是第三人称/敬称统一变成 <mark>sich</mark>：</p>
<table><tr><th>Nominativ</th><th>反身代词</th></tr>
<tr><td class="hl">ich</td><td class="hl">mich</td></tr>
<tr><td class="hl">du</td><td class="hl">dich</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">sich</td></tr>
<tr><td class="hl">wir</td><td class="hl">uns</td></tr>
<tr><td class="hl">ihr</td><td class="hl">euch</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">sich</td></tr></table>
<p>固定接 Dativ 的介词后面配 Dativ 代词（mit mir、bei dir、zu ihm），固定接 Akkusativ 的介词后面配 Akkusativ 代词（für dich、ohne mich、um ihn）——参见 g19。</p>`
  },
  {
    id: 'g21', num: '', title: 'dass 与 wenn 从句、als/wenn 区分', de: 'Nebensätze: dass, wenn, als',
    html: `<p>德语从句家族到目前为止有四个成员，全部遵守同一条核心规则——<b>V-letzt：从句里变位动词要移到从句最后</b>：</p>
<table><tr><th>连接词</th><th>作用</th><th>引入单元</th></tr>
<tr><td class="hl">weil</td><td>给理由（因为）</td><td class="hl">u18</td></tr>
<tr><td class="hl">dass</td><td>转述内容/看法（……这件事）</td><td class="hl">u20</td></tr>
<tr><td class="hl">wenn</td><td>条件/反复发生的事（如果/每当）</td><td class="hl">u22</td></tr>
<tr><td class="hl">als</td><td>过去只发生一次的事（当……的时候）</td><td class="hl">u22</td></tr></table>
<p><b class="t">dass 从句：</b>常跟在 finden、denken、glauben、hoffen 这类看法动词后面：</p>
<table><tr><th>例句</th></tr>
<tr><td class="hl">Ich finde, dass die Regel wichtig ist.</td></tr>
<tr><td class="hl">Ich hoffe, dass alles gut klappt.</td></tr></table>
<p><b class="t">wenn 从句：</b>表示条件，也表示反复发生的事，从句在前时主句可加 dann：</p>
<table><tr><th>例句</th></tr>
<tr><td class="hl">Wenn ich Zeit habe, (dann) treffe ich mich mit Freunden.</td></tr></table>
<p><b class="t">als 与 wenn 的区分：</b>中文母语者最容易搞混的一对词，中文和英语都用同一个词覆盖两种意思，但德语分得很清楚——只看这件事是不是"过去只发生过一次"：</p>
<table><tr><th>情况</th><th>连接词</th><th>例句</th></tr>
<tr><td class="hl">过去，只发生一次</td><td class="hl">als</td><td class="hl">Als ich dich zum ersten Mal getroffen habe, war ich sehr nervös.</td></tr>
<tr><td class="hl">过去，反复发生</td><td class="hl">wenn</td><td class="hl">Wenn ich als Kind krank war, hat meine Mutter mir Tee gemacht.</td></tr>
<tr><td class="hl">现在/将来，条件或反复</td><td class="hl">wenn</td><td class="hl">Wenn ich Zeit habe, treffe ich mich mit Freunden.</td></tr></table>
<p>记忆窍门：als 本身只能用一次——因为它形容的事也只发生过一次；wenn 可以反复用——因为它形容的事本身也可以反复发生。</p>
<p>从句还可以连用，各自照自己的 V-letzt 规则排列：<mark>Als du die Verabredung abgesagt hast, war ich enttäuscht, weil ich mich so auf den Abend gefreut hatte.</mark></p>`
  },
  {
    id: 'g22', num: '', title: '反身动词与被动态入门', de: 'Reflexive Verben & Passiv',
    html: `<p><b class="t">反身代词：</b>动作"反过来作用在自己身上"的动词要配一个反身代词。形式和 Akkusativ 人称代词几乎一样，唯一区别是第三人称/敬称统一变成 <mark>sich</mark>：</p>
<table><tr><th>Nominativ</th><th>反身代词</th></tr>
<tr><td class="hl">ich</td><td class="hl">mich</td></tr>
<tr><td class="hl">du</td><td class="hl">dich</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">sich</td></tr>
<tr><td class="hl">wir</td><td class="hl">uns</td></tr>
<tr><td class="hl">ihr</td><td class="hl">euch</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">sich</td></tr></table>
<p><b class="t">常用反身动词一览：</b></p>
<table><tr><th>动词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">sich fühlen</td><td>感觉</td><td class="hl">Ich fühle mich nicht gut.</td></tr>
<tr><td class="hl">sich erkälten</td><td>感冒</td><td class="hl">Ich habe mich erkältet.</td></tr>
<tr><td class="hl">sich ausruhen</td><td>休息（反身+可分动词）</td><td class="hl">Ruhen Sie sich aus!</td></tr>
<tr><td class="hl">sich kümmern um + Akk.</td><td>照顾，负责</td><td class="hl">Ich kümmere mich um dich.</td></tr>
<tr><td class="hl">sich freuen auf + Akk.</td><td>期待</td><td class="hl">Ich freue mich auf den Termin.</td></tr>
<tr><td class="hl">sich erholen</td><td>恢复，休养</td><td class="hl">Ich muss mich erholen.</td></tr>
<tr><td class="hl">sich verabreden</td><td>约定见面</td><td class="hl">Wir verabreden uns für Samstag.</td></tr></table>
<p><b class="t">高危点：</b>sich freuen auf 里的 auf 本来是两格介词，但在这个固定短语里永远接 Akkusativ，不再由 wo/wohin 逻辑决定——固定动词短语会把格锁死。</p>
<p><b class="t">Passiv 入门（Vorgangspassiv 现在时）：</b>构成是 <b>werden 变位 + Partizip II</b>，werden 变位站第二位，分词踢到句尾：</p>
<table><tr><th>人称</th><th>werden</th></tr>
<tr><td class="hl">ich</td><td class="hl">werde</td></tr>
<tr><td class="hl">du</td><td class="hl">wirst</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">wird</td></tr>
<tr><td class="hl">wir</td><td class="hl">werden</td></tr>
<tr><td class="hl">ihr</td><td class="hl">werdet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">werden</td></tr></table>
<table><tr><th>Aktiv</th><th>Passiv</th></tr>
<tr><td class="hl">Die Stadt baut die Brücke.</td><td class="hl">Die Brücke wird gebaut.</td></tr></table>
<p>动作的执行者可以用 <mark>von + Dativ</mark> 补充，但新闻等文体常常直接省略——"新闻关心事情本身，不关心谁做的"。只教现在时被动，Präteritum/Perfekt/情态动词+被动等其他时态留给 u31 系统展开。</p>`
  },
];
