// 语法速查手册补充：Phase 2 后半（u16-u18）新增的 3 个语法主题
export const topicsP2b = [
  {
    id: 'g16', num: '', title: '两格介词', de: 'Wechselpräpositionen',
    html: `<p><b>an、auf、hinter、in、neben、über、unter、vor、zwischen</b> 这九个介词叫做 <b>Wechselpräpositionen（两格介词）</b>——同一个介词，根据问题不同，接的格也不同：<b class="t">wo?（在哪儿，位置）用 Dativ 第三格；wohin?（往哪儿，方向）用 Akkusativ 第四格。</b>判断方法：句子里有没有"移动、放置"的动作。<b>stehen、liegen、hängen、sein</b>（东西已经在那儿了）用 wo+Dativ；<b>stellen、legen、stecken、gehen</b>（动作正在发生，关心终点）用 wohin+Akkusativ。</p>
<table><tr><th>介词</th><th>wo? + Dativ（位置）</th><th>wohin? + Akkusativ（方向）</th></tr>
<tr><td class="hl">an</td><td class="hl">Das Bild hängt an der Wand.</td><td class="hl">Ich hänge das Bild an die Wand.</td></tr>
<tr><td class="hl">auf</td><td class="hl">Das Buch liegt auf dem Tisch.</td><td class="hl">Ich lege das Buch auf den Tisch.</td></tr>
<tr><td class="hl">hinter</td><td class="hl">Die Bank steht hinter der Kirche.</td><td class="hl">Wir gehen hinter die Kirche.</td></tr>
<tr><td class="hl">in</td><td class="hl">Der Schlüssel ist in der Tasche.</td><td class="hl">Ich stecke den Schlüssel in die Tasche.</td></tr>
<tr><td class="hl">neben</td><td class="hl">Die Flasche steht neben dem Teller.</td><td class="hl">Stell die Flasche neben den Teller.</td></tr>
<tr><td class="hl">über</td><td class="hl">Die Lampe hängt über dem Tisch.</td><td class="hl">Ich hänge die Lampe über den Tisch.</td></tr>
<tr><td class="hl">unter</td><td class="hl">Die Bank steht unter dem Baum.</td><td class="hl">Wir stellen den Tisch unter den Baum.</td></tr>
<tr><td class="hl">vor</td><td class="hl">Die Bank steht vor der Kirche.</td><td class="hl">Wir gehen vor die Kirche.</td></tr>
<tr><td class="hl">zwischen</td><td class="hl">Die Bank steht zwischen den Bäumen.</td><td class="hl">Stell die Bank zwischen die Bäume.</td></tr></table>
<p><b class="t">Dativ 定冠词全表：</b></p>
<table><tr><th>性/数</th><th>第一格 Nominativ</th><th>第三格 Dativ</th><th>例句</th></tr>
<tr><td class="hl">阳性 der</td><td class="hl">der Tisch</td><td class="hl">dem Tisch</td><td class="hl">auf dem Tisch</td></tr>
<tr><td class="hl">阴性 die</td><td class="hl">die Kirche</td><td class="hl">der Kirche</td><td class="hl">vor der Kirche</td></tr>
<tr><td class="hl">中性 das</td><td class="hl">das Fenster</td><td class="hl">dem Fenster</td><td class="hl">an dem Fenster</td></tr>
<tr><td class="hl">复数 die</td><td class="hl">die Bäume</td><td class="hl">den Bäumen</td><td class="hl">zwischen den Bäumen</td></tr></table>
<p><b class="t">复数 Dativ 加 -n：</b>die Kinder → <mark>den Kindern</mark>，die Bäume → <mark>den Bäumen</mark>——只要复数形式本来不是以 -n/-s 结尾，Dativ 复数都要补上这个 -n（<mark>mit den Kindern</mark> 是最常见的例子）。</p>
<p><b class="t">常见缩合：</b><mark>im</mark>（in dem，wo?）、<mark>am</mark>（an dem，wo?）、<mark>ins</mark>（in das，wohin?）、<mark>ans</mark>（an das，wohin?）——缩合形式本身就带着格的信息：im/am 是 Dativ，ins/ans 是 Akkusativ。</p>`
  },
  {
    id: 'g17', num: '', title: '比较级与最高级', de: 'Komparativ & Superlativ',
    html: `<p>说"这个比那个……"，形容词后面加 <b>-er</b>，比较对象前面加 <b class="de">als</b>：<b class="de">Die Jacke ist billiger als die andere.</b>（这件外套比另一件便宜。）说"这个是最……的"，用 <b class="de">am + 形容词-sten</b>：<b class="de">Diese Jacke ist am billigsten.</b></p>
<table><tr><th>原级</th><th>比较级 -er</th><th>最高级 am -sten</th></tr>
<tr><td class="hl">billig</td><td class="hl">billiger</td><td class="hl">am billigsten</td></tr>
<tr><td class="hl">teuer</td><td class="hl">teurer</td><td class="hl">am teuersten</td></tr>
<tr><td class="hl">bequem</td><td class="hl">bequemer</td><td class="hl">am bequemsten</td></tr></table>
<p><b class="t">变音：</b>不少单音节形容词比较级/最高级会加变音：</p>
<table><tr><th>原级</th><th>比较级</th><th>最高级</th></tr>
<tr><td class="hl">groß</td><td class="hl">größer</td><td class="hl">am größten</td></tr>
<tr><td class="hl">alt</td><td class="hl">älter</td><td class="hl">am ältesten</td></tr>
<tr><td class="hl">jung</td><td class="hl">jünger</td><td class="hl">am jüngsten</td></tr>
<tr><td class="hl">lang</td><td class="hl">länger</td><td class="hl">am längsten</td></tr></table>
<p>词干以 <b>-t/-d/-s/-z/-sch</b> 结尾的形容词，最高级要多加一个 <mark>e</mark> 方便发音：alt → am ältesten、kurz → am kürzesten。</p>
<p><b class="t">三个高频不规则词，必须单独背：</b></p>
<table><tr><th>原级</th><th>比较级</th><th>最高级</th></tr>
<tr><td class="hl">gut</td><td class="hl">besser</td><td class="hl">am besten</td></tr>
<tr><td class="hl">viel</td><td class="hl">mehr</td><td class="hl">am meisten</td></tr>
<tr><td class="hl">gern</td><td class="hl">lieber</td><td class="hl">am liebsten</td></tr></table>
<p><b class="t">als 还是 wie？</b>比较"不一样"用 <mark>als</mark>（teurer als）；比较"一样"用 <mark>wie</mark>，搭配 <mark>genauso...wie</mark> 或 <mark>so...wie</mark>：<b class="de">Die Hose ist genauso teuer wie die Jacke.</b>（这条裤子和这件外套一样贵。）</p>`
  },
  {
    id: 'g18', num: '', title: 'weil 从句', de: 'Nebensätze mit weil',
    html: `<p>到目前为止，句子里的变位动词永远在第二位（V2，g5 学过的铁律）。<b class="de">weil</b>（因为）引导的从句第一次打破这条规律——从句里的<b>变位动词要移到从句最后</b>，这个语序叫 <b>V-letzt（动词末位）</b>：</p>
<table><tr><th>独立主句（V2）</th><th>weil 从句（V-letzt）</th></tr>
<tr><td class="hl">Ich bin Vegetarier.</td><td class="hl">..., weil ich Vegetarier <mark>bin</mark>.</td></tr>
<tr><td class="hl">Ich bin krank.</td><td class="hl">..., weil ich krank <mark>bin</mark>.</td></tr></table>
<p>完整句子的结构通常是"主句在前，weil 从句在后，中间用逗号隔开"：<b class="de">Ich esse kein Fleisch, weil ich Vegetarier bin.</b>（我不吃肉，因为我是素食者。）</p>
<p><b class="t">从句里有情态动词时：</b>情态动词单独踢到从句最后，实义动词原形紧挨着排在它前面：</p>
<p class="de">Ich muss jetzt gehen, weil ich morgen früh <mark>arbeiten muss</mark>.（我现在得走了，因为我明天一早要工作。）</p>
<table><tr><th>主句语序</th><th>weil 从句语序</th></tr>
<tr><td class="hl">Ich muss arbeiten.</td><td class="hl">..., weil ich arbeiten muss.</td></tr>
<tr><td class="hl">Ich kann nicht kommen.</td><td class="hl">..., weil ich nicht kommen kann.</td></tr></table>
<p>规律总结成一句话：<b>不管从句里有几个动词成分，变位的那一个（情态动词或 sein/haben）永远排在从句最后一个位置</b>，其他动词原形紧贴在它前面排队等着。这套"动词踢到最后"的结构以后会在 dass 从句（u20）和 wenn 从句（u22）里原样复用，是德语从句最核心的一条规则。</p>`
  },
];
