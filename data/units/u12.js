// 第 12 单元：完成时与讲述过去
export default {
  id: 'u12', num: '12', color: 'red', shape: 'circle',
  de: 'Was hast du gemacht?', zh: '完成时与讲述过去',
  desc: '周一早上同事问你周末做了什么——这个单元教你德语口语里讲过去发生的事几乎唯一的方式：完成时 Perfekt，还有两个高频到取代了 Perfekt 的例外：war 和 hatte。',
  kann: [
    { de: 'Ich kann im Perfekt erzählen, was ich am Wochenende gemacht habe.', zh: '我能用完成时讲述我周末做了什么。' },
    { de: 'Ich kann bei Perfekt-Sätzen richtig zwischen haben und sein als Hilfsverb wählen.', zh: '我能在完成时中正确选择助动词 haben 或 sein。' },
    { de: 'Ich kann erzählen, wohin ich gefahren bin und was ich dort gesehen habe.', zh: '我能讲述我去了哪里、看到了什么。' },
  ],
  lessons: [
    {
      id: 'u12l1', title: '我周末做了很多事', de: 'Ich habe viel gemacht',
      intro: '"你周末做了什么？"是德国人每周一必问的问题。这一课学 8 个最高频的过去分词（Partizip II），先当"新单词"整体记下来，再学 Perfekt 的构成规则：haben + Partizip II，又是一个像 u9 情态动词那样的句框结构。',
      sections: [
        {
          type: 'vocab', title: '规则动词的过去分词', sub: 'ge- + 词干 + -t',
          items: [
            { de: 'gemacht', zh: '做过，做了（做的过去分词）', en: 'done/made', ex: 'Ich habe am Wochenende viel gemacht.', exZh: '我周末做了很多事。', note: '原形 machen，规则变化：ge-mach-t' },
            { de: 'gekauft', zh: '买过，买了', en: 'bought', ex: 'Ich habe neue Schuhe gekauft.', exZh: '我买了新鞋。', note: '原形 kaufen，规则变化：ge-kauf-t' },
            { de: 'gelernt', zh: '学过，学了', en: 'learned/studied', ex: 'Ich habe für den Deutschkurs gelernt.', exZh: '我为德语课学习了。', note: '原形 lernen，规则变化：ge-lern-t' },
            { de: 'gearbeitet', zh: '工作过，工作了', en: 'worked', ex: 'Ich habe am Sonntag ein bisschen gearbeitet.', exZh: '我周日工作了一点。', note: '原形 arbeiten，词干以 -t 结尾，规则变化要插入 -e：ge-arbeit-et' },
          ]
        },
        {
          type: 'vocab', title: '不规则动词的过去分词', sub: '没有固定公式，整体背下来',
          items: [
            { de: 'gesehen', zh: '看过，看见了', en: 'seen', ex: 'Ich habe dort einen schönen Markt gesehen.', exZh: '我在那儿看到了一个漂亮的市场。', note: '原形 sehen，不规则（强变化）：ge-seh-en' },
            { de: 'getroffen', zh: '见过，遇见了', en: 'met', ex: 'Ich habe meine Cousine Lin getroffen.', exZh: '我见了我表姐 Lin。', note: '原形 treffen，不规则：ge-troff-en' },
            { de: 'gegessen', zh: '吃过，吃了', en: 'eaten', ex: 'Wir haben zusammen zu Mittag gegessen.', exZh: '我们一起吃了午饭。', note: '原形 essen，不规则：ge-gess-en' },
            { de: 'getrunken', zh: '喝过，喝了', en: 'drunk', ex: 'Danach haben wir Kaffee getrunken.', exZh: '之后我们喝了咖啡。', note: '原形 trinken，不规则：ge-trunk-en' },
          ]
        },
        {
          type: 'vocab', title: '过去时间状语', sub: '',
          items: [
            { de: 'gestern', zh: '昨天', en: 'yesterday', ex: 'Gestern habe ich viel gearbeitet.', exZh: '昨天我工作了很多。' },
            { de: 'schon', zh: '已经', en: 'already', ex: 'Ich habe das schon gemacht.', exZh: '我已经做过了。' },
            { de: 'noch nicht', zh: '还没', en: 'not yet', ex: 'Ich habe noch nicht gegessen.', exZh: '我还没吃饭。' },
          ]
        },
        {
          type: 'dialogue', title: '周一早上的闲聊', scene: '周一早上，Anna 照例问 Wei 周末做了什么——这个问题几乎每周都会出现，Wei 的回答全用 Perfekt。',
          lines: [
            { sp: 'Anna', de: 'Guten Morgen, Wei! Was hast du am Wochenende gemacht?', zh: '早上好，Wei！你周末做了什么？' },
            { sp: 'Wei', de: 'Guten Morgen! Ich habe am Wochenende viel gemacht.', zh: '早上好！我周末做了很多事。' },
            { sp: 'Anna', de: 'Erzähl mal! Was denn zum Beispiel?', zh: '说说看！比如做了什么？' },
            { sp: 'Wei', de: 'Am Samstag habe ich für den Deutschkurs gelernt.', zh: '周六我为德语课学习了。' },
            { sp: 'Anna', de: 'Nur gelernt? Das klingt anstrengend.', zh: '只是学习吗？听起来挺累的。' },
            { sp: 'Wei', de: 'Nein, nicht nur. Mittags habe ich meine Cousine Lin getroffen.', zh: '不只是这样。中午我见了我表姐 Lin。' },
            { sp: 'Anna', de: 'Ach, deine Cousine aus China? Was habt ihr zusammen gemacht?', zh: '啊，你从中国来的表姐？你们一起做了什么？' },
            { sp: 'Wei', de: 'Wir haben zusammen zu Mittag gegessen und danach Kaffee getrunken.', zh: '我们一起吃了午饭，之后喝了咖啡。' },
            { sp: 'Anna', de: 'Klingt gemütlich. Und Sonntag?', zh: '听起来很惬意。那周日呢？' },
            { sp: 'Wei', de: 'Am Sonntag habe ich ein bisschen gearbeitet, und am Nachmittag habe ich neue Schuhe gekauft.', zh: '周日我工作了一点，下午买了双新鞋。' },
            { sp: 'Anna', de: 'Ach, wo denn? Ich brauche auch neue Schuhe.', zh: '哦，在哪儿买的？我也需要新鞋。' },
            { sp: 'Wei', de: 'In der Stadt, in einem kleinen Laden. Ich habe dort auch einen schönen Markt gesehen.', zh: '在市里，一家小店。我还在那儿看到了一个漂亮的市场。' },
          ]
        },
        {
          type: 'grammar', title: 'Perfekt 的构成：又一个 Satzklammer', sub: 'haben 站第二位，Partizip II 踢到句尾',
          html: `<p>还记得 u9 情态动词的"夹子"结构吗？Perfekt 是同一个原理：<b>haben 变位后站在位置2</b>，<b>真正表示动作的过去分词（Partizip II）永远不变位，被踢到句子最后</b>：</p>
<table><tr><th>位置1</th><th>位置2（haben，变位）</th><th>中间</th><th>句尾（Partizip II）</th></tr>
<tr><td class="hl">Ich</td><td class="hl">habe</td><td class="hl">für den Deutschkurs</td><td class="hl">gelernt.</td></tr>
<tr><td class="hl">Wir</td><td class="hl">haben</td><td class="hl">zusammen</td><td class="hl">gegessen.</td></tr></table>
<p>规则动词的 Partizip II 有固定公式：<b>ge- + 词干 + -t</b>（词干以 -t/-d 结尾时插入 -e，写成 -et，方便发音，比如 arbeiten → gearbeitet）：</p>
<table><tr><th>原形</th><th>Partizip II</th></tr>
<tr><td>machen</td><td class="hl">gemacht</td></tr>
<tr><td>kaufen</td><td class="hl">gekauft</td></tr>
<tr><td>lernen</td><td class="hl">gelernt</td></tr>
<tr><td>arbeiten</td><td class="hl">gearbeitet</td></tr></table>
<p>不规则（强变化）动词的 Partizip II 没有统一公式，<b>只能整体背</b>：形式是 ge- + 变化后的词干 + -en：</p>
<table><tr><th>原形</th><th>Partizip II</th></tr>
<tr><td>sehen</td><td class="hl">gesehen</td></tr>
<tr><td>treffen</td><td class="hl">getroffen</td></tr>
<tr><td>essen</td><td class="hl">gegessen</td></tr>
<tr><td>trinken</td><td class="hl">getrunken</td></tr></table>`
        },
        {
          type: 'grammar', title: 'haben 变位：跟着主语变，Partizip II 永远不变', sub: '复习 g3 的 haben 变位表',
          html: `<p>句子里唯一会变位的部分是 <b class="de">haben</b>，Partizip II 不管主语是谁都保持同一个形式：</p>
<table><tr><th>人称</th><th>haben</th><th>+ Partizip II</th></tr>
<tr><td class="hl">ich</td><td class="hl">habe</td><td class="hl">gegessen</td></tr>
<tr><td class="hl">du</td><td class="hl">hast</td><td class="hl">gegessen</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">hat</td><td class="hl">gegessen</td></tr>
<tr><td class="hl">wir</td><td class="hl">haben</td><td class="hl">gegessen</td></tr>
<tr><td class="hl">ihr</td><td class="hl">habt</td><td class="hl">gegessen</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">haben</td><td class="hl">gegessen</td></tr></table>
<p>提问时和情态动词的问句一样：Ja/Nein 问句把 haben 整个挪到第一位，Partizip II 依然留在句尾——<mark>Hast</mark> du am Wochenende etwas <mark>gemacht</mark>? W-Frage 也是同样的规律：<mark>Was hast</mark> du am Wochenende <mark>gemacht</mark>?</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">"Was hast du am Wochenende gemacht?"</b> 是德国职场周一早上的固定开场白，几乎和"你好"一样自动化。把这一课的 8 个分词和这句问句练熟，就能立刻接住这个每周都会遇到的话题——先用这 8 个高频动词练熟句框，之后遇到新动词，套进同一个"ge-...-t / ge-...-en"框架去猜，大概率能猜对。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"machen" 的过去分词是？', options: ['gemacht', 'gemachen', 'gemachte'], answer: 0, why: '规则动词：ge- + 词干 + -t，machen → gemacht。' },
        { type: 'cloze', zhHint: '我周末学了很多。', before: 'Ich', after: 'am Wochenende viel gelernt.', options: ['habe', 'hast', 'hat'], answer: 0, why: '主语是 ich，haben 的 ich 形式是 habe。' },
        { type: 'mcq', q: '在 Perfekt 结构里，Partizip II 应该放在句子的哪个位置？', options: ['句尾', '第二位', '句首'], answer: 0, why: 'haben 占第二位，Partizip II 被踢到句尾，和情态动词的 Satzklammer 是同一个原理。' },
        { type: 'order', zh: '我见了我表姐。', words: ['Ich', 'habe', 'meine', 'Cousine', 'getroffen'], why: 'habe 站第二位，getroffen（treffen 的 Partizip II）留在句尾。' },
        { type: 'match', pairs: [['gemacht', '做过'], ['gekauft', '买过'], ['gesehen', '看过'], ['getrunken', '喝过']] },
        { type: 'listen', audio: 'Ich habe für den Deutschkurs gelernt.', q: '这句话是什么意思？', options: ['我为德语课学习了。', '我明天要上德语课。', '我不想上德语课。'], answer: 0, why: 'habe...gelernt = 学习了（过去），für den Deutschkurs = 为了德语课。' },
        { type: 'listen', audio: 'Wir haben zusammen zu Mittag gegessen.', q: '这句话是什么意思？', options: ['我们一起吃了午饭。', '我们打算一起吃午饭。', '我们没有一起吃饭。'], answer: 0, why: 'haben...gegessen = 吃了（过去），zu Mittag essen = 吃午饭。' },
        { type: 'speak', de: 'Was hast du am Wochenende gemacht? Ich habe viel gelernt und meine Cousine getroffen.', zh: '你周末做了什么？我学了很多，还见了我表姐。' },
      ],
      task: { title: '今天的生活任务', desc: '每天睡前用 Perfekt 说或写一句"我今天做了什么"，把 gemacht/gekauft/gelernt/gearbeitet/gesehen/getroffen/gegessen/getrunken 这 8 个分词轮流练一遍，练到脱口而出。' }
    },
    {
      id: 'u12l2', title: '我去德累斯顿了', de: 'Ich bin nach Dresden gefahren',
      intro: '不是所有动词的 Perfekt 都用 haben——表示"从一个地方移动到另一个地方"的动词要用 sein 当助动词。这一课学 5 个 sein 类过去分词，还有 haben/sein 的选择规律，以及唯一值得单独记的两个 Präteritum 例外：war 和 hatte。',
      sections: [
        {
          type: 'vocab', title: '位移与状态变化的过去分词（用 sein）', sub: '',
          items: [
            { de: 'gegangen', zh: '走过去了，去了（走着）', en: 'gone (on foot)', ex: 'Wir sind viel zu Fuß gegangen.', exZh: '我们走了很多路。', note: '原形 gehen，不规则，助动词用 sein' },
            { de: 'gefahren', zh: '开车/坐车去了', en: 'driven/gone (by vehicle)', ex: 'Ich bin nach Dresden gefahren.', exZh: '我坐车去了德累斯顿。', note: '原形 fahren，不规则，助动词用 sein' },
            { de: 'gekommen', zh: '来了', en: 'come', ex: 'Wir sind erst spät abends gekommen.', exZh: '我们直到深夜才到。', note: '原形 kommen，不规则，助动词用 sein' },
            { de: 'geblieben', zh: '待着，留下了', en: 'stayed', ex: 'Ich bin dann zu Hause geblieben.', exZh: '之后我就一直待在家里。', note: '原形 bleiben，例外：不表示移动，但因为是"状态保持"，也用 sein' },
            { de: 'passiert', zh: '发生了', en: 'happened', ex: 'Ist sonst noch etwas passiert?', exZh: '还发生什么别的事了吗？', note: '原形 passieren，-ieren 结尾的动词过去分词不加 ge-，助动词用 sein' },
          ]
        },
        {
          type: 'vocab', title: 'war 和 hatte：唯一常用的 Präteritum', sub: '',
          items: [
            { de: 'war', zh: '（当时）是，在', en: 'was', ex: 'Der Zug war sehr bequem.', exZh: '火车很舒适。', note: 'sein 的 Präteritum，口语里几乎没人说 "ich bin gewesen"，都直接说 "ich war"' },
            { de: 'hatte', zh: '（当时）有', en: 'had', ex: 'Wir hatten leider keine Zeit.', exZh: '我们可惜没有时间。', note: 'haben 的 Präteritum，同样比 Perfekt 更常用' },
          ]
        },
        {
          type: 'vocab', title: '讲故事常用的时间词', sub: '',
          items: [
            { de: 'letzte Woche', zh: '上周', en: 'last week', ex: 'Letzte Woche war ich krank.', exZh: '上周我生病了。' },
            { de: 'letztes Wochenende', zh: '上周末', en: 'last weekend', ex: 'Letztes Wochenende bin ich nach Dresden gefahren.', exZh: '上周末我去了德累斯顿。' },
            { de: 'letztes Jahr', zh: '去年', en: 'last year', ex: 'Letztes Jahr war ich in China.', exZh: '去年我在中国。' },
          ]
        },
        {
          type: 'dialogue', title: '德累斯顿一日游', scene: '周一，Anna 好奇 Wei 上周末去了哪儿——这次的回答里，sein 类动词大显身手。',
          lines: [
            { sp: 'Anna', de: 'Wei, warst du letztes Wochenende in Leipzig?', zh: 'Wei，你上周末在莱比锡吗？' },
            { sp: 'Wei', de: 'Nein, ich war nicht hier. Ich bin mit meiner Cousine Lin nach Dresden gefahren.', zh: '不在，我不在这儿。我和我表姐 Lin 去德累斯顿了。' },
            { sp: 'Anna', de: 'Oh schön! Seid ihr mit dem Auto gefahren?', zh: '哦真好！你们是开车去的吗？' },
            { sp: 'Wei', de: 'Nein, wir sind mit dem Zug gefahren. Der Zug war sehr bequem.', zh: '不是，我们是坐火车去的。火车很舒适。' },
            { sp: 'Anna', de: 'Und was habt ihr dort gemacht?', zh: '那你们在那儿做了什么？' },
            { sp: 'Wei', de: 'Wir sind viel zu Fuß gegangen und haben die Altstadt gesehen.', zh: '我们走了很多路，看了老城区。' },
            { sp: 'Anna', de: 'Wart ihr auch im Museum?', zh: '你们也去博物馆了吗？' },
            { sp: 'Wei', de: 'Ja, wir sind ins Museum gegangen, aber es war leider sehr voll.', zh: '去了，我们去了博物馆，但可惜人非常多。' },
            { sp: 'Anna', de: 'Ist sonst noch etwas passiert?', zh: '还发生什么别的事了吗？' },
            { sp: 'Wei', de: 'Nichts Schlimmes – wir hatten nur keine Zeit für alles.', zh: '没什么大事——我们只是没时间把所有东西都逛完。' },
            { sp: 'Anna', de: 'Und wann seid ihr nach Hause gekommen?', zh: '那你们什么时候回的家？' },
            { sp: 'Wei', de: 'Wir sind erst spät abends gekommen. Ich bin dann zu Hause geblieben, ich war total müde.', zh: '我们很晚才到家。之后我就一直待在家里，我当时累坏了。' },
          ]
        },
        {
          type: 'grammar', title: 'haben 还是 sein？选择规律', sub: '大多数动词用 haben，这几类特殊情况用 sein',
          html: `<p>l1 学的 8 个动词全都用 haben——这其实是大多数德语动词的常态。只有符合下面这几类的动词才用 <b class="de">sein</b>：</p>
<table><tr><th>类别</th><th>动词</th><th>Partizip II</th></tr>
<tr><td class="hl">位移（从A到B）</td><td>gehen</td><td class="hl">gegangen</td></tr>
<tr><td class="hl">位移（从A到B）</td><td>fahren</td><td class="hl">gefahren</td></tr>
<tr><td class="hl">位移（从A到B）</td><td>kommen</td><td class="hl">gekommen</td></tr>
<tr><td class="hl">例外：状态保持</td><td>bleiben</td><td class="hl">geblieben</td></tr>
<tr><td class="hl">例外：发生</td><td>passieren</td><td class="hl">passiert</td></tr></table>
<p><b>bleiben 是最容易出错的一个</b>：它明明不表示"移动"，反而是"留在原地不动"，但德语语法把它归为"状态保持"，同样用 sein——把它当成固定例外单独记住，不要按"移动才用 sein"的直觉去套。后面 u13 学的 aufstehen（起床）也属于位移/状态变化这一类，同样用 sein。</p>
<p>判断技巧：拿不准时先问自己——"这个动词是不是在说'从一个地方/状态换到另一个地方/状态'？"大部分时候能猜对；猜不出来的动词，跟着例句整体记就好。</p>`
        },
        {
          type: 'grammar', title: 'sein 的完整变位 + war/hatte 例外', sub: '和 haben 一样，sein 也要跟着主语变位',
          html: `<p>sein 类 Perfekt 的变位表和 l1 的 haben 表结构完全一样，只是把 haben 换成 sein：</p>
<table><tr><th>人称</th><th>sein</th><th>+ Partizip II</th></tr>
<tr><td class="hl">ich</td><td class="hl">bin</td><td class="hl">gefahren</td></tr>
<tr><td class="hl">du</td><td class="hl">bist</td><td class="hl">gefahren</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">ist</td><td class="hl">gefahren</td></tr>
<tr><td class="hl">wir</td><td class="hl">sind</td><td class="hl">gefahren</td></tr>
<tr><td class="hl">ihr</td><td class="hl">seid</td><td class="hl">gefahren</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">sind</td><td class="hl">gefahren</td></tr></table>
<p><b class="t">war 和 hatte：口语里唯二常用的 Präteritum。</b>严格来说 sein/haben 也有自己的 Perfekt 形式（ich bin gewesen, ich habe gehabt），但口语里几乎没人这么说——德国人几乎永远直接用 Präteritum：<mark>ich war</mark>、<mark>ich hatte</mark>。这两个词值得单独整体背下来：</p>
<table><tr><th>人称</th><th>war</th><th>hatte</th></tr>
<tr><td class="hl">ich</td><td class="hl">war</td><td class="hl">hatte</td></tr>
<tr><td class="hl">du</td><td class="hl">warst</td><td class="hl">hattest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">war</td><td class="hl">hatte</td></tr>
<tr><td class="hl">wir</td><td class="hl">waren</td><td class="hl">hatten</td></tr>
<tr><td class="hl">ihr</td><td class="hl">wart</td><td class="hl">hattet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">waren</td><td class="hl">hatten</td></tr></table>
<p>除了这两个词，其余动词的 Präteritum（书面语/新闻里常见）留到以后的单元系统学习，现在讲过去的事，除了 war/hatte 之外一律用 Perfekt。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">练口语时最容易忘的不是分词，而是选错助动词。</b>一个实用小窍门：把这个单元学到的 5 个 sein 动词（gegangen/gefahren/gekommen/geblieben/passiert）贴在心里当一个小圈子——凡是这个圈子里的词，前面用 sein；圈子外的动词，先默认用 haben，大概率不会错。war 和 hatte 则完全独立于这套规则，直接当两个高频单词背，不用套用任何公式。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"fahren" 的 Perfekt 助动词是？', options: ['sein', 'haben', '都可以'], answer: 0, why: 'fahren 是位移动词（从A到B），Perfekt 用 sein。' },
        { type: 'cloze', zhHint: '我坐车去了德累斯顿。', before: 'Ich', after: 'nach Dresden gefahren.', options: ['bin', 'habe', 'bist'], answer: 0, why: '主语是 ich，fahren 用 sein，ich 对应的形式是 bin。' },
        { type: 'mcq', q: '哪个动词虽然不表示"移动"，但 Perfekt 依然用 sein？', options: ['bleiben', 'kaufen', 'essen'], answer: 0, why: 'bleiben（待着，留下）表示"状态保持"的例外，同样用 sein，需要单独记住。' },
        { type: 'order', zh: '我们去了博物馆。', words: ['Wir', 'sind', 'ins', 'Museum', 'gegangen'], why: 'sind 站第二位，gegangen（gehen 的 Partizip II）留在句尾。' },
        { type: 'match', pairs: [['gegangen', '走过去了'], ['gefahren', '开车/坐车去了'], ['geblieben', '待着，留下了'], ['passiert', '发生了']] },
        { type: 'listen', audio: 'Ich war letztes Wochenende in Dresden.', q: '这句话是什么意思？', options: ['我上周末在德累斯顿。', '我下周末要去德累斯顿。', '我从没去过德累斯顿。'], answer: 0, why: 'war = sein 的 Präteritum，letztes Wochenende = 上周末。' },
        { type: 'listen', audio: 'Wir hatten leider keine Zeit.', q: '这句话是什么意思？', options: ['我们可惜没有时间。', '我们有很多时间。', '我们明天没有时间。'], answer: 0, why: 'hatten = haben 的 Präteritum，keine Zeit = 没有时间。' },
        { type: 'speak', de: 'Ich bin nach Dresden gefahren und habe die Altstadt gesehen.', zh: '我去了德累斯顿，看了老城区。' },
      ],
      task: { title: '今天的生活任务', desc: '用 Perfekt 讲一件"你去了哪儿/发生了什么"的真实小事，注意选对助动词：位移用 sein，其余大多数用 haben；如果要说"当时是/当时有"，直接用 war/hatte，不用 Perfekt。' }
    },
  ]
};
