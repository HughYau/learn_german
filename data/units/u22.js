// 第 22 单元：朋友与约会
export default {
  id: 'u22', num: '22', color: 'red', shape: 'circle',
  de: 'Unter Freunden', zh: '朋友与约会',
  desc: '约朋友、取消约会、安慰对方——这个单元教你 wenn 从句表达条件和反复发生的事，还会讲清中文母语者最容易搞混的一对词：als 和 wenn。',
  kann: [
    { de: 'Ich kann mit einem wenn-Satz ein Treffen vorschlagen oder eine Bedingung nennen.', zh: '我能用 wenn 从句提议见面或说明条件。' },
    { de: 'Ich kann als und wenn bei einmaligen bzw. wiederholten Ereignissen in der Vergangenheit richtig verwenden.', zh: '我能正确区分 als（一次性过去事件）和 wenn（反复发生的事）。' },
    { de: 'Ich kann eine Verabredung absagen und dabei Verständnis oder Trost zeigen.', zh: '我能取消一次约会，并在其中表达安慰或理解。' },
  ],
  lessons: [
    {
      id: 'u22l1', title: '约朋友看电影', de: 'Wenn du Lust hast...',
      intro: '"如果你有空，我们就……"——这句话德语用第三个从句结构：wenn。这一课学约朋友、提议活动的词汇，语法上学 wenn 从句表示条件和反复发生的事，语序规则和 u18 的 weil、u20 的 dass 是同一套 V-letzt。',
      sections: [
        {
          type: 'vocab', title: '约会与场所', sub: '',
          items: [
            { de: 'sich verabreden', zh: '约定见面', en: 'to arrange to meet', ex: 'Wir verabreden uns für Samstag.', exZh: '我们约好周六见面。' },
            { de: 'Verabredung', art: 'die', pl: 'Verabredungen', zh: '约会，约定', en: 'appointment/date (social)', ex: 'Ich habe heute eine Verabredung mit Anna.', exZh: '我今天和 Anna 有个约会。' },
            { de: 'Kino', art: 'das', pl: 'Kinos', zh: '电影院', en: 'cinema', ex: 'Wir gehen am Samstag ins Kino.', exZh: '我们周六去看电影。' },
            { de: 'Konzert', art: 'das', pl: 'Konzerte', zh: '音乐会', en: 'concert', ex: 'Das Konzert beginnt um acht Uhr.', exZh: '音乐会八点开始。' },
            { de: 'Vorschlag', art: 'der', pl: 'Vorschläge', zh: '建议', en: 'suggestion', ex: 'Dein Vorschlag gefällt mir.', exZh: '我喜欢你的建议。' },
            { de: 'vorschlagen', zh: '提议', en: 'to suggest', ex: 'Ich schlage einen Kinoabend vor.', exZh: '我提议一起看场电影。', note: '可分动词（呼应 u13）：vor 踢到句尾' },
          ]
        },
        {
          type: 'vocab', title: '情感词汇', sub: '',
          items: [
            { de: 'enttäuscht', zh: '失望的', en: 'disappointed', ex: 'Ich bin ein bisschen enttäuscht.', exZh: '我有点失望。' },
            { de: 'gespannt', zh: '期待的，紧张期待的', en: 'excited/curious', ex: 'Ich bin gespannt auf den Film.', exZh: '我很期待这部电影。' },
            { de: 'sich freuen auf', zh: '期待（+ Akkusativ）', en: 'to look forward to', note: '复现 u21', ex: 'Ich freue mich auf das Konzert.', exZh: '我很期待这场音乐会。' },
            { de: 'absagen', zh: '取消（约定）', en: 'to cancel', note: '复现 u7', ex: 'Ich muss den Termin leider absagen.', exZh: '我很遗憾不得不取消这个约。' },
            { de: 'verschieben', zh: '改期，推迟', en: 'to reschedule', note: '复现 u7', ex: 'Können wir die Verabredung verschieben?', exZh: '我们能把约会改期吗？' },
          ]
        },
        {
          type: 'dialogue', title: '一起去看电影吧', scene: 'Anna 提议周末和 Wei 一起看电影，两人商量具体的时间和见面方式。',
          lines: [
            { sp: 'Anna', de: 'Wei, willst du dich am Wochenende mit mir treffen? Ich habe eine Idee.', zh: 'Wei，你周末想不想和我见一面？我有个想法。' },
            { sp: 'Wei', de: 'Klar, gerne! Was schlägst du vor?', zh: '当然，好呀！你有什么提议？' },
            { sp: 'Anna', de: 'Ich schlage vor, dass wir am Samstag ins Kino gehen. Es gibt einen neuen Film.', zh: '我建议我们周六去看电影。有一部新片上映。' },
            { sp: 'Wei', de: 'Das klingt gut! Wenn ich am Samstag frei habe, komme ich gern mit.', zh: '听起来不错！如果我周六有空，我很乐意一起去。' },
            { sp: 'Anna', de: 'Perfekt. Und wenn das Wetter schön ist, gehen wir danach noch spazieren.', zh: '太好了。而且如果天气好，我们看完还可以去散散步。' },
            { sp: 'Wei', de: 'Gute Idee! Ich bin schon richtig gespannt auf den Film.', zh: '好主意！我已经很期待这部电影了。' },
            { sp: 'Anna', de: 'Ich freue mich auch schon sehr auf den Filmabend.', zh: '我也很期待这个电影之夜。' },
            { sp: 'Wei', de: 'Sollen wir uns direkt vor dem Kino treffen?', zh: '我们要不要直接在电影院门口见面？' },
            { sp: 'Anna', de: 'Wenn du Zeit hast, treffen wir uns vorher noch zum Kaffee.', zh: '如果你有时间，我们可以提前先喝杯咖啡。' },
            { sp: 'Wei', de: 'Sehr gern! Wenn ich früher fertig bin, schreibe ich dir eine Nachricht.', zh: '非常乐意！如果我提前忙完了，我会给你发消息。' },
            { sp: 'Anna', de: 'Gut, dann sehen wir uns am Samstag.', zh: '好，那我们周六见。' },
            { sp: 'Wei', de: 'Ich freue mich schon sehr! Bis dann!', zh: '我已经很期待了！回头见！' },
          ]
        },
        {
          type: 'grammar', title: 'wenn 从句：条件与反复发生的事', sub: '第三个 V-letzt 从句，主句可加 dann',
          html: `<p><b class="de">wenn</b>（如果/每当……）是继 u18 的 weil、u20 的 dass 之后第三个用 V-letzt 语序的连接词——从句里变位动词照样踢到最后：</p>
<table><tr><th>wenn 从句（V-letzt）</th><th>主句（V2）</th></tr>
<tr><td class="hl">Wenn ich Zeit habe,</td><td class="hl">treffe ich mich mit Freunden.</td></tr>
<tr><td class="hl">Wenn es regnet,</td><td class="hl">gehen wir ins Kino.</td></tr>
<tr><td class="hl">Wenn du Lust hast,</td><td class="hl">schlage ich einen Kinoabend vor.</td></tr></table>
<p>wenn 从句在句首时，后面的主句也可以插一个 <b class="de">dann</b>（那么）：<mark>Wenn ich Zeit habe, dann treffe ich mich mit Freunden.</mark> dann 是可选的，加不加意思一样，V2 规则不变——因为整个 wenn 从句算占了主句的"第一位"，dann 只是主句自己再往前加的一个词，动词还是紧跟在它后面。</p>
<p><b class="t">wenn 的两种意思：</b>德语的 wenn 既能表示"如果"（条件），也能表示"每当/只要"（反复发生的事），中文这两个意思常常都翻成"当……的时候"——具体是哪个意思，靠上下文判断。</p>`
        },
        {
          type: 'grammar', title: '提议活动：vorschlagen + dass', sub: '可分动词与 dass 从句的组合运用',
          html: `<p>提议一个活动，最自然的说法是 <b class="de">vorschlagen</b>（u13 学过的可分动词结构）配上 u20 学过的 <mark>dass</mark> 从句，把提议的具体内容说清楚：</p>
<p class="de">Ich schlage vor, dass wir am Samstag ins Kino gehen.（我建议我们周六去看电影。）</p>
<p>拆开看：<b>schlage vor</b>（vorschlagen 现在时，前缀 vor 踢到句尾）+ 逗号 + <b>dass 从句</b>（V-letzt，变位动词 gehen 放最后）。这是一个把前面几课语法点组合起来使用的好例子——越往后学，句子会越自然地把多个语法点叠在一起用。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">德国朋友之间的约会文化：</b>德国朋友约见面，通常习惯提前一两天甚至更早通过消息定好具体时间和地点，纯粹"路过就来找你"的即兴社交不算主流。提议一个活动时，<mark>Ich schlage vor...</mark> 或者更随意的 <mark>Hast du Lust auf...?</mark>（你想不想……？）都是很自然的开场。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'wenn 从句属于哪种语序？', options: ['V-letzt（动词放最后）', 'V2', 'V1'], answer: 0, why: 'wenn 和 weil、dass 一样，引导的从句是 V-letzt 语序。' },
        { type: 'mcq', q: '"如果我有空，我就来。"怎么组织语序？', options: ['Wenn ich Zeit habe, komme ich.', 'Wenn ich habe Zeit, ich komme.', 'Ich komme, wenn habe ich Zeit.'], answer: 0, why: 'wenn 从句 V-letzt（habe 放最后），主句紧跟着动词第二位（komme 紧跟逗号）。' },
        { type: 'cloze', zhHint: '如果天气好，我们就去散步。', before: 'Wenn das Wetter schön', after: ', gehen wir spazieren.', options: ['ist', 'ist es', 'sein'], answer: 0, why: 'wenn 从句 V-letzt，ist 放在从句最后。' },
        { type: 'order', zh: '我建议我们周六去看电影。', words: ['Ich', 'schlage', 'vor,', 'dass', 'wir', 'am', 'Samstag', 'ins', 'Kino', 'gehen'], why: 'vorschlagen 可分动词，前缀 vor 紧跟 schlage；dass 从句 V-letzt，gehen 放最后。' },
        { type: 'match', pairs: [['sich verabreden', '约定见面'], ['der Vorschlag', '建议'], ['vorschlagen', '提议'], ['gespannt', '期待/紧张期待的']] },
        { type: 'listen', audio: 'Wenn ich am Samstag frei habe, komme ich gern mit.', q: '这句话是什么意思？', options: ['如果我周六有空，我很乐意一起去。', '我周六没有空。', '我们周六一起去看电影了。'], answer: 0, why: 'wenn=如果，frei haben=有空，komme...mit=可分动词 mitkommen 现在时。' },
        { type: 'listen', audio: 'Ich bin schon richtig gespannt auf den Film.', q: '这句话是什么意思？', options: ['我已经很期待这部电影了。', '我不想看这部电影。', '这部电影已经看过了。'], answer: 0, why: 'gespannt auf=期待，很想知道结果。' },
        { type: 'speak', de: 'Wenn du Zeit hast, treffen wir uns vorher noch zum Kaffee.', zh: '如果你有时间，我们可以提前先喝杯咖啡。' },
      ],
      task: { title: '今天的生活任务', desc: '用 wenn 从句给朋友提两个可选的见面方案，比如 "Wenn du Samstag Zeit hast, gehen wir ins Kino. Wenn du Sonntag Zeit hast, treffen wir uns zum Kaffee."。' }
    },
    {
      id: 'u22l2', title: '取消约会与安慰', de: 'Schade, dass es nicht klappt',
      intro: '计划总有变化——这一课学会取消约会、安慰对方的说法，语法上讲清中文母语者最容易搞混的一对词：als 和 wenn。两个词中文都能翻成"当……的时候"，但用法完全不同：als 只能用在"过去只发生过一次"的事，wenn 才能表示反复发生的事或者现在/将来的条件。',
      sections: [
        {
          type: 'vocab', title: '取消与遗憾', sub: '',
          items: [
            { de: 'Schade!', zh: '太遗憾了，可惜！', en: 'What a pity!', ex: 'Schade, dass du nicht kommen kannst!', exZh: '真可惜你来不了！' },
            { de: 'enttäuscht', zh: '失望的', en: 'disappointed', note: '复现 u22l1', ex: 'Anna war nur kurz enttäuscht.', exZh: 'Anna 只是短暂地失望了一下。' },
            { de: 'trösten', zh: '安慰', en: 'to comfort/console', ex: 'Anna ist traurig, aber ich tröste sie.', exZh: 'Anna 很难过，但我安慰了她。' },
          ]
        },
        {
          type: 'vocab', title: '改约与安慰句型', sub: '',
          items: [
            { de: 'ein anderes Mal', zh: '改天，下次', en: 'another time', note: '复现 u9 的 "Vielleicht ein anderes Mal?"', ex: 'Vielleicht klappt es ein anderes Mal.', exZh: '或许下次能成。' },
            { de: 'nicht schlimm', zh: '没关系', en: 'no big deal', ex: 'Das ist doch nicht schlimm.', exZh: '这没什么关系。' },
            { de: 'nachholen', zh: '补上，补做', en: 'to make up for', ex: 'Wir holen den Filmabend nach.', exZh: '我们把这次电影之夜补上。', note: '可分动词' },
          ]
        },
        {
          type: 'dialogue', title: '取消了这次约会', scene: 'Wei 因为表姐 Lin 突然来访，不得不取消和 Anna 周六看电影的约定，两人聊起过去的一次回忆，并约好改天再看。',
          lines: [
            { sp: 'Wei', de: 'Anna, es tut mir leid, aber ich muss unsere Verabredung für Samstag leider absagen.', zh: 'Anna，很抱歉，但我周六的约不得不取消了。' },
            { sp: 'Anna', de: 'Oh nein, wirklich? Ich habe mich so auf den Film gefreut!', zh: '哦不，真的吗？我一直很期待看这部电影呢！' },
            { sp: 'Wei', de: 'Ich weiß, es tut mir wirklich leid. Meine Kusine Lin kommt überraschend zu Besuch.', zh: '我知道，真的很抱歉。我表姐 Lin 突然要来看我。' },
            { sp: 'Anna', de: 'Ach so, das verstehe ich natürlich. Schade, aber Familie geht vor.', zh: '哦这样啊，我当然理解。是有点可惜，不过家人更重要。' },
            { sp: 'Wei', de: 'Weißt du noch, als wir uns zum ersten Mal getroffen haben? Da hast du auch spontan einen Plan geändert.', zh: '你还记得我们第一次见面的时候吗？那时候你也是临时改变了计划呢。' },
            { sp: 'Anna', de: 'Stimmt, das war lustig! Als ich dich damals kennengelernt habe, war ich auch ziemlich chaotisch.', zh: '没错，那次挺有意思的！当时我认识你的时候，我也挺乱七八糟的。' },
            { sp: 'Wei', de: 'Genau. Wenn Lin wieder abreist, können wir den Film sofort nachholen.', zh: '就是说！等 Lin 一走，我们马上就可以补看这部电影。' },
            { sp: 'Anna', de: 'Gute Idee! Wenn du nächste Woche Zeit hast, gehen wir einfach dann ins Kino.', zh: '好主意！如果你下周有空，那我们那时候去看电影就好。' },
            { sp: 'Wei', de: 'Perfekt, das mache ich. Danke, dass du nicht sauer bist.', zh: '太好了，就这么定了。谢谢你没生气。' },
            { sp: 'Anna', de: 'Natürlich nicht! Ich war nur kurz enttäuscht, aber jetzt freue ich mich schon auf nächste Woche.', zh: '当然不会啦！我只是短暂地失望了一下，现在已经开始期待下周了。' },
            { sp: 'Wei', de: 'Du bist die beste Freundin! Ich bringe Lin nächstes Mal auch mal mit.', zh: '你真是最好的朋友！下次我也带 Lin 一起来。' },
            { sp: 'Anna', de: 'Das klingt super. Bis dann, und grüß Lin von mir!', zh: '太好了。回头见，替我向 Lin 问好！' },
          ]
        },
        {
          type: 'grammar', title: 'als 与 wenn 的区分', sub: '中文母语者最容易搞混的一对词',
          html: `<p><b class="de">als</b> 和 <b class="de">wenn</b> 中文都能翻成"当……的时候"，这也是中文母语者最容易搞混的一对德语连接词。区分方法只看一件事——<b>这件事在过去只发生过一次，还是反复发生/现在将来会发生？</b></p>
<table><tr><th>情况</th><th>连接词</th><th>例句</th></tr>
<tr><td class="hl">过去，只发生一次</td><td class="hl">als</td><td class="hl">Als ich dich zum ersten Mal getroffen habe, war ich sehr nervös.</td></tr>
<tr><td class="hl">过去，反复发生</td><td class="hl">wenn</td><td class="hl">Wenn ich als Kind krank war, hat meine Mutter mir Tee gemacht.</td></tr>
<tr><td class="hl">现在/将来，条件或反复</td><td class="hl">wenn</td><td class="hl">Wenn ich Zeit habe, treffe ich mich mit Freunden.</td></tr></table>
<p><b class="t">记忆窍门：</b>als 本身只能用一次——因为它形容的事也只发生过一次；wenn 可以反复用——因为它形容的事本身也可以反复发生。只要问自己"这件事只发生过一次吗？"，答案是"是"就用 als，其他所有情况（反复、条件、现在、将来）都用 wenn。</p>`
        },
        {
          type: 'grammar', title: 'als/wenn 从句连用', sub: '综合运用：和 weil 一起出现在同一句话里',
          html: `<p>从句可以连用——一句话里同时出现 als 从句和 weil 从句，各自照自己的 V-letzt 规则排列，互不影响：</p>
<p class="de">Als du die Verabredung abgesagt hast, war ich enttäuscht, weil ich mich so auf den Abend gefreut hatte.</p>
<p>（你取消约会的时候，我很失望，因为我那么期待这个晚上。）拆开看：<b>als 从句</b>（abgesagt hast 放最后）+ <b>主句</b>（war ich enttäuscht，V2）+ <b>weil 从句</b>（gefreut hatte 放最后）——三段各自独立守规矩，读起来虽然长，但结构其实是三个已经学过的模块拼在一起。越往后学，句子会越自然地这样"叠加"多个从句。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">别紧张，这是常见错点：</b>als 和 wenn 是中文母语者最容易搞混的一对词，因为中文"当……的时候"两种情况都能用，英语的 when 也是一样一词两用。就算一时说错，德国人从上下文也基本能听懂你的意思，不用因为这个点太紧张——多做几次练习，语感自然会跟上来。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '描述"过去只发生过一次的事"用哪个词？', options: ['als', 'wenn', 'ob'], answer: 0, why: 'als 专门描述过去一次性发生的事。' },
        { type: 'mcq', q: '描述"过去反复发生的事"或"现在/将来的条件"用哪个词？', options: ['wenn', 'als', 'dass'], answer: 0, why: 'wenn 既能表示反复发生（任何时态），也能表示现在/将来的条件。' },
        { type: 'cloze', zhHint: '当我第一次遇见你的时候，我很紧张。', before: '', after: 'ich dich zum ersten Mal getroffen habe, war ich nervös.', options: ['Als', 'Wenn', 'Ob'], answer: 0, why: '描述过去一次性事件（第一次遇见），用 als。' },
        { type: 'order', zh: '我一直很期待看这部电影。', words: ['Ich', 'habe', 'mich', 'so', 'auf', 'den', 'Film', 'gefreut'], why: '反身动词的 Perfekt：habe + mich + … + gefreut，sich freuen auf + Akkusativ。' },
        { type: 'match', pairs: [['als', '（过去）当……的时候，一次性'], ['wenn', '如果/每当……'], ['enttäuscht', '失望的'], ['Schade!', '太遗憾了！']] },
        { type: 'listen', audio: 'Als ich dich zum ersten Mal kennengelernt habe, war ich auch ziemlich chaotisch.', q: '这句话是什么意思？', options: ['我第一次认识你的时候，我也挺乱七八糟的。', '我经常很乱。', '我从来没见过你。'], answer: 0, why: 'als=过去一次性事件（第一次认识），kennengelernt=kennenlernen 的 Partizip II。' },
        { type: 'listen', audio: 'Wenn du nächste Woche Zeit hast, gehen wir einfach dann ins Kino.', q: '这句话是什么意思？', options: ['如果你下周有空，那我们那时候去看电影就好。', '你下周没有空。', '我们已经看过电影了。'], answer: 0, why: 'wenn=如果，表示将来的条件。' },
        { type: 'speak', de: 'Ich war nur kurz enttäuscht, aber jetzt freue ich mich schon auf nächste Woche.', zh: '我只是短暂地失望了一下，现在已经开始期待下周了。' },
      ],
      task: { title: '今天的生活任务', desc: '用 als 写一句你人生中某个"只发生过一次"的真实回忆（比如第一次到德国、第一次见到某个朋友），再用 wenn 写一句你"经常/每当"会做的事，体会两者的区别。' }
    },
  ]
};
