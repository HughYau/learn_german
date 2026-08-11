// 第 17 单元：购物进阶
export default {
  id: 'u17', num: '17', color: 'blue', shape: 'circle',
  de: 'Kleidung kaufen', zh: '购物进阶',
  desc: '试穿、比价、退换货——这个单元教你在德国买衣服要用到的全部实用句子，还有比较级和最高级：这件比那件好、这件最便宜。',
  kann: [
    { de: 'Ich kann im Geschäft nach Größe und Farbe fragen und etwas anprobieren.', zh: '我能在商店询问尺码颜色并试穿衣服。' },
    { de: 'Ich kann sagen, ob mir etwas gefällt oder gut steht.', zh: '我能表达一件衣服合不合我的喜好、好不好看。' },
    { de: 'Ich kann zwei Dinge mit dem Komparativ vergleichen und den Superlativ benutzen.', zh: '我能用比较级比较两样东西，并使用最高级。' },
  ],
  lessons: [
    {
      id: 'u17l1', title: '试衣间里', de: 'In der Umkleidekabine',
      intro: '买衣服绕不开试穿和尺码——这一课学会店里最常用的衣物词汇，还有德语里几个"反过来"的动词：不是"我喜欢这个"，而是"这个讨我喜欢"（gefallen）；不是"这件适合我"，而是"这件站在我身上好看"（stehen）。这种反过来的语感和 u10 学的 Dativ 是同一条脉络，用得越多越顺。',
      sections: [
        {
          type: 'vocab', title: '衣物', sub: '',
          items: [
            { de: 'Hose', art: 'die', pl: 'Hosen', zh: '裤子', en: 'pants/trousers', note: '一条裤子仍用单数 die Hose，德语没有像英语 pants 那样默认复数的用法', ex: 'Die Hose passt mir nicht.', exZh: '这条裤子不合身。' },
            { de: 'Hemd', art: 'das', pl: 'Hemden', zh: '衬衫', en: 'shirt', ex: 'Das Hemd ist weiß.', exZh: '这件衬衫是白色的。' },
            { de: 'Jacke', art: 'die', pl: 'Jacken', zh: '夹克，外套', en: 'jacket', ex: 'Die Jacke gefällt mir sehr.', exZh: '我很喜欢这件外套。' },
            { de: 'Pullover', art: 'der', pl: 'Pullover', zh: '毛衣，套头衫', en: 'pullover/sweater', ex: 'Der Pullover ist warm.', exZh: '这件毛衣很暖和。' },
            { de: 'Schuhe', art: 'die', zh: '鞋（通常用复数）', en: 'shoes', note: '单数是 der Schuh，日常说鞋子几乎总用复数 die Schuhe', ex: 'Die Schuhe stehen neben der Tür.', exZh: '鞋子放在门旁边。' },
            { de: 'Kleid', art: 'das', pl: 'Kleider', zh: '连衣裙', en: 'dress', ex: 'Das Kleid ist zu lang.', exZh: '这条连衣裙太长了。' },
            { de: 'Rock', art: 'der', pl: 'Röcke', zh: '（半身）裙子', en: 'skirt', ex: 'Der Rock ist kurz.', exZh: '这条裙子很短。' },
          ]
        },
        {
          type: 'vocab', title: '试穿与尺码', sub: '',
          items: [
            { de: 'Größe', art: 'die', pl: 'Größen', zh: '尺码，尺寸', en: 'size', ex: 'Welche Größe brauchen Sie?', exZh: '您需要什么尺码？' },
            { de: 'Farbe', art: 'die', pl: 'Farben', zh: '颜色', en: 'color', ex: 'Welche Farbe gefällt dir?', exZh: '你喜欢哪个颜色？' },
            { de: 'Umkleidekabine', art: 'die', pl: 'Umkleidekabinen', zh: '试衣间', en: 'fitting room', ex: 'Die Umkleidekabine ist frei.', exZh: '试衣间没人用。' },
            { de: 'anprobieren', zh: '试穿', en: 'to try on', ex: 'Kann ich das anprobieren?', exZh: '我可以试穿这个吗？' },
            { de: 'passen', zh: '合身（新义）', en: 'to fit', ex: 'Passt die Hose?', exZh: '这条裤子合身吗？', note: 'u7 学过 passen 表示"时间上合适"（Passt dir Montag?），这里是它的另一个常用义：衣服"合身"' },
            { de: 'stehen', zh: '适合（穿着好看，+ Dativ）', en: 'to suit (someone)', ex: 'Das Kleid steht dir gut.', exZh: '这条裙子很适合你（穿着好看）。', note: '和 u11 学的"位置动词 stehen"是同一个词的引申义，这里接 Dativ 人称代词（u10 学过的 mir/dir/Ihnen）' },
            { de: 'gefallen', zh: '讨人喜欢，中意（+ Dativ）', en: 'to please/like', ex: 'Die Farbe gefällt mir nicht so.', exZh: '这个颜色我不太喜欢（字面：这个颜色不太讨我喜欢）。', note: 'gefallen 的逻辑和中文"喜欢"相反：喜欢的人用 Dativ，被喜欢的东西是主语' },
          ]
        },
        {
          type: 'dialogue', title: '试衣间里', scene: 'Wei 在商场试穿裤子和衬衫，店员帮他找尺码和颜色，还告诉他穿起来好不好看。',
          lines: [
            { sp: 'Wei', de: 'Entschuldigung, kann ich diese Hose anprobieren?', zh: '打扰一下，我可以试穿这条裤子吗？' },
            { sp: 'Verkäuferin', de: 'Natürlich! Welche Größe brauchen Sie?', zh: '当然可以！您需要什么尺码？' },
            { sp: 'Wei', de: 'Ich glaube, Größe 32. Wo ist die Umkleidekabine?', zh: '我觉得是32码。试衣间在哪儿？' },
            { sp: 'Verkäuferin', de: 'Gleich hier links, direkt neben den Schuhen.', zh: '就在这边左手边，紧挨着鞋子那边。' },
            { sp: 'Wei', de: 'So, die Hose passt super! Aber die Farbe gefällt mir nicht so.', zh: '好了，裤子很合身！但颜色我不太喜欢。' },
            { sp: 'Verkäuferin', de: 'Wir haben sie auch in Schwarz. Möchten Sie die auch anprobieren?', zh: '我们也有黑色的。您想也试试那个吗？' },
            { sp: 'Wei', de: 'Ja, gerne. Und ich brauche auch noch ein Hemd dazu.', zh: '好，麻烦了。另外我还想要一件衬衫搭配。' },
            { sp: 'Verkäuferin', de: 'Wie wäre es mit diesem hier? Die Farbe passt gut zur Hose.', zh: '这件怎么样？颜色和裤子很搭。' },
            { sp: 'Wei', de: 'Oh, das steht mir wirklich gut!', zh: '哦，这件真的很适合我！' },
            { sp: 'Verkäuferin', de: 'Finde ich auch. Und wie sitzt die schwarze Hose?', zh: '我也这么觉得。那条黑色裤子穿起来怎么样？' },
            { sp: 'Wei', de: 'Perfekt, die passt viel besser als die andere.', zh: '非常好，这条比另一条合身多了。' },
            { sp: 'Verkäuferin', de: 'Super, dann nehmen Sie beide? Ich packe sie ein.', zh: '太好了，那您两件都要吗？我给您打包。' },
          ]
        },
        {
          type: 'grammar', title: 'gefallen / stehen + Dativ：反过来想的句子', sub: '复习 u10 的 Dativ 代词，用在一类特殊动词上',
          html: `<p>德语里有一类动词，句子结构和中文的直觉正好相反：<b>东西/情况是主语，感受的那个人用 Dativ</b>。<b class="de">gefallen</b>（讨人喜欢）和 <b class="de">stehen</b>（适合、好看）都属于这一类：</p>
<table><tr><th>德语说法</th><th>字面直译</th><th>中文意思</th></tr>
<tr><td class="hl">Die Farbe gefällt mir.</td><td>这个颜色讨我喜欢</td><td>我喜欢这个颜色。</td></tr>
<tr><td class="hl">Das Kleid steht dir gut.</td><td>这条裙子站在你身上好看</td><td>这条裙子很适合你。</td></tr>
<tr><td class="hl">Gefällt Ihnen die Jacke?</td><td>这件外套讨您喜欢吗</td><td>您喜欢这件外套吗？</td></tr></table>
<p>这里的 mir/dir/Ihnen 就是 u10 学过的 Dativ 人称代词——句子结构虽然反过来，用的代词表格和当时完全一样，不用重新背。</p>`
        },
        {
          type: 'grammar', title: '问尺码和颜色：welcher / welche / welches', sub: '疑问词跟着名词的性变化，和 der/die/das 一一对应',
          html: `<p>问"哪个/哪种"时，德语疑问词 <b class="de">welch-</b> 要跟着后面名词的性来变化，规律和定冠词 der/die/das 几乎一模一样：</p>
<table><tr><th>性</th><th>疑问词</th><th>例句</th></tr>
<tr><td class="hl">阳性 der</td><td class="hl">welcher</td><td class="hl">Welcher Pullover gefällt dir?</td></tr>
<tr><td class="hl">阴性 die</td><td class="hl">welche</td><td class="hl">Welche Größe brauchen Sie?</td></tr>
<tr><td class="hl">中性 das</td><td class="hl">welches</td><td class="hl">Welches Kleid probierst du an?</td></tr></table>
<p>阳性名词作宾语（第四格）时，welcher 也要像 g6 学过的 der→den 一样变成 <mark>welchen</mark>：<b class="de">Welchen Pullover möchtest du anprobieren?</b>——阴性、中性宾语不变，规律和定冠词第四格完全对应。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">德国服装尺码和中国不是一回事。</b>德国女装通常从 34 起（大致对应中国 S 码），男装常见用胸围数字或直接 S/M/L；鞋码用欧码，中国 42 码大约对应欧码 42-43，不同品牌还会有 ±1 的浮动。试穿前拿不准就直接问 <mark>Welche Größe haben Sie in ...?</mark> 或者说 <mark>Ich bin unsicher mit der Größe, kann ich es anprobieren?</mark>，让店员帮忙对照更保险。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Das Kleid steht dir gut." 是什么意思？', options: ['这条裙子很适合你（穿着好看）。', '这条裙子在你旁边。', '这条裙子太贵了。'], answer: 0, why: 'stehen + Dativ 表示"适合某人、穿着好看"。' },
        { type: 'mcq', q: 'gefallen 这个动词的句子逻辑是？', options: ['被喜欢的东西是主语，喜欢的人用 Dativ', '喜欢的人是主语，东西用 Dativ', '两者都用 Nominativ'], answer: 0, why: 'gefallen 和中文"喜欢"逻辑相反：Die Farbe gefällt mir = 这个颜色讨我喜欢。' },
        { type: 'cloze', zhHint: '您需要哪个尺码？', before: '', after: 'Größe brauchen Sie?', options: ['Welche', 'Welcher', 'Welches'], answer: 0, why: 'die Größe 是阴性名词，疑问词用 welche。' },
        { type: 'cloze', zhHint: '你想试穿哪件毛衣？', before: '', after: 'Pullover möchtest du anprobieren?', options: ['Welchen', 'Welcher', 'Welche'], answer: 0, why: 'der Pullover 是阳性名词，作第四格宾语时 welcher 变成 welchen。' },
        { type: 'order', zh: '我可以试穿这条裤子吗？', words: ['Kann', 'ich', 'diese', 'Hose', 'anprobieren'], why: '是非问句：情态动词 Kann 提前，anprobieren 作动词原形留在句尾。' },
        { type: 'match', pairs: [['die Größe', '尺码'], ['die Farbe', '颜色'], ['anprobieren', '试穿'], ['passen', '合身']] },
        { type: 'listen', audio: 'Die Hose passt super, aber die Farbe gefällt mir nicht.', q: '这句话是什么意思？', options: ['裤子很合身，但我不喜欢这个颜色。', '裤子不合身，颜色我很喜欢。', '裤子和颜色我都不喜欢。'], answer: 0, why: 'passt super = 很合身，gefällt mir nicht = 我不喜欢。' },
        { type: 'speak', de: 'Kann ich diese Jacke anprobieren? Welche Größe haben Sie?', zh: '我可以试穿这件外套吗？您有什么尺码？' },
      ],
      task: { title: '今天的生活任务', desc: '去（真实或想象地）试穿一件衣服，用上 anprobieren / passen / Das steht mir gut 这几个说法，写或说 3 句话描述结果。' }
    },
    {
      id: 'u17l2', title: '这件比那件好', de: 'Das ist besser als das',
      intro: '"这件比那件好"、"这个最便宜"——这一课学比较级和最高级，从退换货、比价这些购物场景里的真实需求切入。规则变化只要记住一个后缀，几个高频不规则词（gut/viel/gern）单独背下来就能应付大部分购物对话。',
      sections: [
        {
          type: 'vocab', title: '形容物品', sub: '',
          items: [
            { de: 'billig', zh: '便宜的', en: 'cheap', ex: 'Der Pullover ist billig.', exZh: '这件毛衣很便宜。' },
            { de: 'teuer', zh: '贵的', en: 'expensive', ex: 'Die Jacke ist teuer.', exZh: '这件外套很贵。' },
            { de: 'bequem', zh: '舒适的', en: 'comfortable', ex: 'Die Schuhe sind bequem.', exZh: '这双鞋很舒服。' },
            { de: 'eng', zh: '紧的，窄的', en: 'tight/narrow', ex: 'Die Hose ist eng.', exZh: '这条裤子很紧。' },
            { de: 'weit', zh: '肥大的，宽松的（新义）', en: 'loose/wide', note: 'u16 学过 weit 表示"远"，这里是它的另一个常用义：衣服"肥大、宽松"', ex: 'Der Pullover ist weit.', exZh: '这件毛衣很宽松。' },
          ]
        },
        {
          type: 'vocab', title: '退换货', sub: '',
          items: [
            { de: 'umtauschen', zh: '换货', en: 'to exchange', ex: 'Ich möchte die Hose umtauschen.', exZh: '我想把这条裤子换一下。' },
            { de: 'zurückgeben', zh: '退货，还回去', en: 'to give back/return', ex: 'Kann ich das zurückgeben?', exZh: '我可以退货吗？' },
            { de: 'Kassenbon', art: 'der', pl: 'Kassenbons', zh: '小票，收据', en: 'receipt', ex: 'Ich habe den Kassenbon verloren.', exZh: '我把收据弄丢了。' },
            { de: 'das Geld zurückbekommen', zh: '拿回退款', en: 'to get one’s money back', ex: 'Bekomme ich mein Geld zurück?', exZh: '我能拿回我的钱吗？' },
            { de: 'innerhalb von', zh: '在……以内（+ Dativ）', en: 'within', ex: 'Sie können es innerhalb von 14 Tagen umtauschen.', exZh: '您可以在14天以内换货。' },
          ]
        },
        {
          type: 'dialogue', title: '换货还是退货？', scene: 'Wei 想把之前买的外套换个尺码，还比较了店里另外两件外套的价格和舒适度。',
          lines: [
            { sp: 'Wei', de: 'Entschuldigung, ich möchte diese Jacke umtauschen. Sie ist leider zu eng.', zh: '打扰一下，我想把这件外套换一下。它太紧了。' },
            { sp: 'Verkäufer', de: 'Kein Problem. Haben Sie den Kassenbon dabei?', zh: '没问题。您带收据了吗？' },
            { sp: 'Wei', de: 'Ja, hier bitte. Haben Sie die Jacke auch in einer größeren Größe?', zh: '带了，给您。这件外套有更大的尺码吗？' },
            { sp: 'Verkäufer', de: 'Ja, wir haben sie auch in Größe 52. Die ist etwas weiter.', zh: '有，我们还有52码。那个稍微宽松一点。' },
            { sp: 'Wei', de: 'Gut, das probiere ich an. Und diese Jacke hier, ist die teurer als meine?', zh: '好，我试试。那这件呢，它比我这件贵吗？' },
            { sp: 'Verkäufer', de: 'Nein, die ist sogar billiger. Sie kostet 20 Euro weniger.', zh: '不，它反而更便宜。便宜20欧元。' },
            { sp: 'Wei', de: 'Interessant! Und welche ist die bequemste von den dreien?', zh: '有意思！这三件里哪件最舒服？' },
            { sp: 'Verkäufer', de: 'Meiner Meinung nach diese hier, sie ist am bequemsten und am billigsten.', zh: '依我看是这件，它最舒服，也最便宜。' },
            { sp: 'Wei', de: 'Dann nehme ich die. Bekomme ich die Differenz zurück?', zh: '那我要这件。差价能退给我吗？' },
            { sp: 'Verkäufer', de: 'Ja, natürlich. Ich gebe Ihnen das Geld innerhalb von ein paar Minuten zurück.', zh: '当然可以。我几分钟内就把钱退给您。' },
            { sp: 'Wei', de: 'Super, vielen Dank für die Hilfe!', zh: '太好了，非常感谢您的帮助！' },
            { sp: 'Verkäufer', de: 'Gern geschehen. Viel Spaß mit der neuen Jacke!', zh: '不客气。祝您喜欢这件新外套！' },
          ]
        },
        {
          type: 'grammar', title: '比较级 Komparativ：-er + als', sub: '从购物比价切入',
          html: `<p>说"这个比那个……"，德语规则很简单：形容词后面加 <b>-er</b>，比较的对象前面加 <b class="de">als</b>（比）：</p>
<p class="de">Die Jacke ist <mark>billiger</mark> <b>als</b> die andere.（这件外套比另一件便宜。）</p>
<table><tr><th>原级</th><th>比较级 -er</th><th>例句</th></tr>
<tr><td class="hl">billig</td><td class="hl">billiger</td><td class="hl">Das ist billiger als das.</td></tr>
<tr><td class="hl">teuer</td><td class="hl">teurer</td><td class="hl">Die Jacke ist teurer als die Hose.</td></tr>
<tr><td class="hl">bequem</td><td class="hl">bequemer</td><td class="hl">Die Schuhe sind bequemer als die anderen.</td></tr></table>
<p>不少单音节形容词在比较级里会<b>变音</b>（元音加两点）：</p>
<table><tr><th>原级</th><th>比较级</th></tr>
<tr><td class="hl">groß</td><td class="hl">größer</td></tr>
<tr><td class="hl">alt</td><td class="hl">älter</td></tr>
<tr><td class="hl">jung</td><td class="hl">jünger</td></tr>
<tr><td class="hl">lang</td><td class="hl">länger</td></tr></table>
<p><b class="t">als 还是 wie？</b>比较"不一样"用 <mark>als</mark>（Diese Jacke ist teurer <b>als</b> die andere.）；比较"一样"用 <mark>wie</mark>，搭配 <mark>genauso...wie</mark> 或 <mark>so...wie</mark>：<b class="de">Die Hose ist genauso teuer wie die Jacke.</b>（这条裤子和这件外套一样贵。）——两个词不能混用。</p>`
        },
        {
          type: 'grammar', title: '最高级 Superlativ：am -sten', sub: '三个高频不规则词单独背',
          html: `<p>最高级在句子里作表语（"这个是最……的"）时，固定用 <b class="de">am + 形容词-sten</b> 这个结构：</p>
<table><tr><th>原级</th><th>最高级</th><th>例句</th></tr>
<tr><td class="hl">billig</td><td class="hl">am billigsten</td><td class="hl">Diese Jacke ist am billigsten.</td></tr>
<tr><td class="hl">groß</td><td class="hl">am größten</td><td class="hl">Diese Wohnung ist am größten.</td></tr></table>
<p>词干以 <b>-t/-d/-s/-z/-sch</b> 等结尾的形容词，最高级要多加一个 <mark>e</mark> 方便发音：<b class="de">alt → am ältesten</b>、<b class="de">kurz → am kürzesten</b>。</p>
<p>三个词的比较级和最高级完全不规则，必须单独背，购物时使用频率却极高：</p>
<table><tr><th>原级</th><th>比较级</th><th>最高级</th></tr>
<tr><td class="hl">gut</td><td class="hl">besser</td><td class="hl">am besten</td></tr>
<tr><td class="hl">viel</td><td class="hl">mehr</td><td class="hl">am meisten</td></tr>
<tr><td class="hl">gern</td><td class="hl">lieber</td><td class="hl">am liebsten</td></tr></table>
<p><mark>gern/lieber/am liebsten</mark> 这一组格外常用，表达"喜欢/更喜欢/最喜欢做某事"：<b class="de">Ich trage gern Pullover, aber am liebsten trage ich Jacken.</b>（我喜欢穿毛衣，但我最喜欢穿外套。）</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">退换货的现实规则：</b>德国实体店没有法律规定必须"无理由退换"——能不能换、能不能退全看店家自己的政策（Kulanz，商家好意），所以带着 Kassenbon 礼貌地问总没错。网购完全不同：欧盟法律保证 14 天无理由退货权（Widerrufsrecht），从收到货物起 14 天内都可以退。区分这两种情况，能少走很多弯路。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"gut" 的比较级是？', options: ['besser', 'guter', 'gutär'], answer: 0, why: 'gut 是不规则形容词：gut - besser - am besten，必须单独背。' },
        { type: 'mcq', q: '"这件比那件贵"，比较的对象前面应该用哪个词？', options: ['als', 'wie', 'und'], answer: 0, why: '比较"不一样"用 als；比较"一样"才用 wie（genauso...wie）。' },
        { type: 'cloze', zhHint: '这条裤子比那件外套便宜。', before: 'Die Hose ist', after: 'als die Jacke.', options: ['billiger', 'billig', 'am billigsten'], answer: 0, why: '比较级用 -er + als，句尾比较对象前不用最高级。' },
        { type: 'cloze', zhHint: '这件是最贵的。', before: 'Diese Jacke ist', after: '.', options: ['am teuersten', 'teurer', 'teuer'], answer: 0, why: '表语位置的最高级固定用 am + -sten：am teuersten。' },
        { type: 'order', zh: '这双鞋比那双更舒服。', words: ['Die', 'Schuhe', 'sind', 'bequemer', 'als', 'die', 'anderen'], why: '比较级 bequemer 加 als 引出比较对象，语序和陈述句一致。' },
        { type: 'match', pairs: [['gut', '好 → 更好：besser'], ['viel', '多 → 更多：mehr'], ['gern', '喜欢 → 更喜欢：lieber'], ['groß', '大 → 更大：größer']] },
        { type: 'listen', audio: 'Diese Jacke ist am billigsten.', q: '这句话是什么意思？', options: ['这件外套是最便宜的。', '这件外套是最贵的。', '这件外套已经卖完了。'], answer: 0, why: 'am billigsten = 最便宜的，最高级结构。' },
        { type: 'speak', de: 'Diese Hose ist bequemer als die andere, aber die Jacke ist am teuersten.', zh: '这条裤子比那条舒服，但这件外套是最贵的。' },
      ],
      task: { title: '今天的生活任务', desc: '挑两件自己有的物品（或网购页面上两个商品），用比较级写 3 句真实的比较句，比如 "Mein Pullover ist wärmer als meine Jacke."。' }
    },
  ]
};
