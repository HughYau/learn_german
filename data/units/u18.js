// 第 18 单元：饮食文化与请客
export default {
  id: 'u18', num: '18', color: 'yellow', shape: 'circle',
  de: 'Zu Gast', zh: '饮食文化与请客',
  desc: '被同事请到家里吃饭，你要懂的不只是"谢谢"——从带手信、碰杯敬酒到说清楚自己不吃什么、为什么不吃，这个单元教你第一个真正的德语从句：weil。',
  kann: [
    { de: 'Ich kann bei einer Einladung ein Mitbringsel überreichen und höflich anstoßen.', zh: '我能在做客时递上手信并礼貌地碰杯敬酒。' },
    { de: 'Ich kann am Tisch etwas annehmen, ablehnen oder um Nachschlag bitten.', zh: '我能在餐桌上接受、婉拒食物，或要求再来一点。' },
    { de: 'Ich kann mit weil erklären, warum ich etwas (nicht) esse.', zh: '我能用 weil 从句解释我为什么吃或不吃某样东西。' },
  ],
  lessons: [
    {
      id: 'u18l1', title: '登门做客', de: 'Zu Besuch bei Anna',
      intro: '被邀请去朋友家吃饭，是德国社交生活里很重要的一环。这一课学会做客要用到的词汇——带什么手信、怎么敬酒、怎么说"我吃饱了"——顺便再认识一个"反过来"的动词 schmecken，和 u17 学的 gefallen、stehen 是同一个语感家族。',
      sections: [
        {
          type: 'vocab', title: '做客与礼物', sub: '',
          items: [
            { de: 'mitbringen', zh: '带来（礼物等）', en: 'to bring along', ex: 'Was soll ich mitbringen?', exZh: '我该带点什么来？' },
            { de: 'Gastgeber', art: 'der', pl: 'Gastgeber', zh: '男主人（招待客人的人）', en: 'host', ex: 'Der Gastgeber begrüßt die Gäste.', exZh: '主人问候客人们。' },
            { de: 'Gastgeberin', art: 'die', pl: 'Gastgeberinnen', zh: '女主人', en: 'hostess', ex: 'Anna ist die Gastgeberin.', exZh: 'Anna 是女主人。' },
            { de: 'Geschenk', art: 'das', pl: 'Geschenke', zh: '礼物', en: 'gift', ex: 'Das Geschenk ist für Anna.', exZh: '这是给 Anna 的礼物。' },
            { de: 'Blume', art: 'die', pl: 'Blumen', zh: '花', en: 'flower', ex: 'Ich bringe Blumen mit.', exZh: '我带了花来。' },
            { de: 'Wein', art: 'der', pl: 'Weine', zh: '葡萄酒', en: 'wine', ex: 'Der Wein schmeckt gut.', exZh: '这酒很好喝。' },
            { de: 'zu Gast sein', zh: '做客，当客人', en: 'to be a guest', ex: 'Wir sind heute bei Anna zu Gast.', exZh: '我们今天在 Anna 家做客。' },
          ]
        },
        {
          type: 'vocab', title: '餐桌用语与饮食偏好', sub: '',
          items: [
            { de: 'Prost!', zh: '干杯！', en: 'Cheers!', ex: 'Prost, Anna!', exZh: '干杯，Anna！' },
            { de: 'Guten Appetit!', zh: '祝你好胃口（开动吧）！', en: 'Enjoy your meal!', ex: 'Guten Appetit, alle zusammen!', exZh: '大家好胃口！' },
            { de: 'vegetarisch', zh: '素食的', en: 'vegetarian', ex: 'Das Essen ist vegetarisch.', exZh: '这道菜是素食的。' },
            { de: 'vegan', zh: '纯素的', en: 'vegan', ex: 'Der Kuchen ist vegan.', exZh: '这个蛋糕是纯素的。' },
            { de: 'Allergie', art: 'die', pl: 'Allergien', zh: '过敏', en: 'allergy', ex: 'Ich habe eine Allergie gegen Nüsse.', exZh: '我对坚果过敏。' },
            { de: 'schmecken', zh: '好吃，尝起来（+ Dativ）', en: 'to taste (good)', ex: 'Das schmeckt mir sehr gut.', exZh: '这个我觉得很好吃。', note: '和 u17 学的 gefallen 是同一种"反过来"的 Dativ 动词' },
            { de: 'satt', zh: '吃饱的', en: 'full (not hungry)', ex: 'Ich bin satt, danke.', exZh: '我吃饱了，谢谢。' },
            { de: 'probieren', zh: '尝，试吃', en: 'to try/taste', ex: 'Möchtest du das mal probieren?', exZh: '你想尝尝这个吗？' },
          ]
        },
        {
          type: 'dialogue', title: '登门做客', scene: 'Wei 第一次去 Anna 家做客，带了一瓶酒和一束花，两人在门口寒暄，然后入座开饭。',
          lines: [
            { sp: 'Anna', de: 'Hallo Wei, schön, dass du da bist! Komm rein!', zh: '你好 Wei，很高兴你能来！快进来！' },
            { sp: 'Wei', de: 'Hallo Anna! Ich habe dir etwas mitgebracht – Wein und Blumen.', zh: '你好 Anna！我给你带了点东西——葡萄酒和花。' },
            { sp: 'Anna', de: 'Wie lieb von dir, danke! Als Gastgeberin freue ich mich immer über Blumen.', zh: '你真贴心，谢谢！作为女主人，我总是很高兴收到花。' },
            { sp: 'Wei', de: 'Gern! Ich bin zum ersten Mal bei dir zu Gast, das ist aufregend.', zh: '不客气！我是第一次在你家做客，有点小激动。' },
            { sp: 'Anna', de: 'Dann fangen wir mal an. Möchtest du ein Glas Wein?', zh: '那我们开始吧。你想喝杯葡萄酒吗？' },
            { sp: 'Wei', de: 'Gerne, danke! Prost, Anna!', zh: '好呀，谢谢！干杯，Anna！' },
            { sp: 'Anna', de: 'Prost! So, das Essen ist fertig. Guten Appetit!', zh: '干杯！好了，饭做好了。祝你好胃口！' },
            { sp: 'Wei', de: 'Guten Appetit! Das riecht wirklich lecker.', zh: '你也是！这闻起来真香。' },
            { sp: 'Anna', de: 'Probier mal das Gemüse, das ist mein Lieblingsrezept.', zh: '尝尝这个蔬菜，这是我最喜欢的食谱做的。' },
            { sp: 'Wei', de: 'Mmh, das schmeckt wirklich gut! Ist es vegetarisch?', zh: '嗯，真好吃！这是素食的吗？' },
            { sp: 'Anna', de: 'Ja, komplett vegetarisch, sogar vegan. Ich koche oft ohne Fleisch.', zh: '是的，完全素食，甚至是纯素的。我经常做不带肉的菜。' },
            { sp: 'Wei', de: 'Perfekt für mich, ich bin schon ziemlich satt, aber es schmeckt zu gut zum Aufhören.', zh: '那对我来说太好了，我已经挺饱了，但太好吃了停不下来。' },
          ]
        },
        {
          type: 'grammar', title: 'schmecken + Dativ：第三个"反过来"的动词', sub: '味道好不好，是"东西"讨好"人"',
          html: `<p>u10 学过 <mark>tut mir weh</mark>，u17 学过 <mark>gefällt mir</mark> / <mark>steht mir gut</mark>——这些动词都有一个共同点：<b>东西/情况是主语，感受的人用 Dativ</b>，和中文"我觉得好吃"这种"人做主语"的语感正好相反。<b class="de">schmecken</b>（尝起来……）也是这个家族的一员：</p>
<table><tr><th>德语说法</th><th>字面直译</th><th>中文意思</th></tr>
<tr><td class="hl">Das schmeckt mir gut.</td><td>这对我尝起来好</td><td>我觉得这个好吃。</td></tr>
<tr><td class="hl">Schmeckt es dir?</td><td>这对你尝起来好吗</td><td>你觉得好吃吗？</td></tr>
<tr><td class="hl">Schmeckt es Ihnen?</td><td>这对您尝起来好吗</td><td>您觉得好吃吗？（正式）</td></tr></table>
<p>这四个动词一起构成一个规律：<b class="de">wehtun（疼）、gefallen（喜欢）、stehen（合适好看）、schmecken（好吃）</b>——句子结构都是"东西/情况 + 动词 + Dativ 的人"。遇到新动词时，先问自己"是东西在对人产生某种效果吗？"，符合就大概率要用这个反过来的结构。</p>`
        },
        {
          type: 'grammar', title: '在餐桌上：接受、婉拒、要求再来一点', sub: '几个常用句型，比单词更重要',
          html: `<p>做客时最常用的几个餐桌句型：</p>
<table><tr><th>场景</th><th>句型</th><th>例句</th></tr>
<tr><td class="hl">接受</td><td>Ja, gerne! / Sehr gern, danke!</td><td class="hl">Möchtest du noch etwas? – Ja, gerne!</td></tr>
<tr><td class="hl">礼貌婉拒</td><td>Nein danke, ich bin schon satt.</td><td class="hl">Noch etwas Wein? – Nein danke, ich bin satt.</td></tr>
<tr><td class="hl">说明不吃什么</td><td>Ich esse kein/keine + 食物</td><td class="hl">Ich esse kein Fleisch.</td></tr>
<tr><td class="hl">主动请求</td><td>Darf ich noch etwas ... haben?</td><td class="hl">Darf ich noch etwas Brot haben?</td></tr></table>
<p><mark>kein/keine</mark> 的用法是 u8 学过的规律——名词前能放 ein 的地方，否定就用 kein；<mark>Darf ich...?</mark> 用的是 u9 学过的情态动词 dürfen（可以，被允许）。这一课接下来会学怎么给"不吃某样东西"补上一个真正的理由——为什么。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">带花做客的小讲究：</b>德国人拜访时习惯带一小束花或一瓶酒，花有几个常被提起的讲究——花束最好提前在花店拆掉外包装纸再送出，双数朵数有时被认为不太吉利（单数更保险），红玫瑰一般只送给恋人，不适合送朋友或同事。拿不准就选中性的花束或一瓶红/白葡萄酒，问一句 <mark>Rotwein oder Weißwein?</mark> 也是很自然的开场话题。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Das schmeckt mir gut." 是什么意思？', options: ['我觉得这个好吃。', '这个闻起来很好。', '我不喜欢这个味道。'], answer: 0, why: 'schmecken + Dativ：东西是主语，mir 是感受的人。' },
        { type: 'mcq', q: '被邀请吃饭想说"我吃饱了"，应该说？', options: ['Ich bin satt.', 'Ich bin Gastgeber.', 'Ich probiere das.'], answer: 0, why: 'satt = 吃饱的，是餐桌上最常用的说法。' },
        { type: 'cloze', zhHint: '你想尝尝这个吗？', before: 'Möchtest du das mal', after: '?', options: ['probieren', 'schmecken', 'mitbringen'], answer: 0, why: 'probieren = 尝、试吃，主动去尝东西用这个词。' },
        { type: 'cloze', zhHint: '我经常做不带肉的菜。', before: 'Ich koche oft ohne', after: '.', options: ['Fleisch', 'Wein', 'Blumen'], answer: 0, why: 'ohne Fleisch = 不带肉，符合"素食"的语境。' },
        { type: 'order', zh: '我对坚果过敏。', words: ['Ich', 'habe', 'eine', 'Allergie', 'gegen', 'Nüsse'], why: 'Allergie 是阴性名词第四格，eine 不变；gegen 是"对……过敏"的固定搭配。' },
        { type: 'match', pairs: [['der Gastgeber', '男主人'], ['das Geschenk', '礼物'], ['vegetarisch', '素食的'], ['satt', '吃饱的']] },
        { type: 'listen', audio: 'Ich bin schon ziemlich satt, aber es schmeckt so gut.', q: '这句话是什么意思？', options: ['我已经很饱了，但太好吃了。', '我还没吃饱，一点也不好吃。', '我不喜欢这道菜的味道。'], answer: 0, why: 'satt = 饱了，schmeckt so gut = 太好吃了。' },
        { type: 'speak', de: 'Das schmeckt wirklich gut! Ist es vegetarisch?', zh: '这个真好吃！是素食的吗？' },
      ],
      task: { title: '今天的生活任务', desc: '用 mitbringen / Prost / schmecken 这几个词，写 2-3 句话描述一次（真实或想象的）做客经历。' }
    },
    {
      id: 'u18l2', title: '我不吃肉，因为……', de: 'Ich esse kein Fleisch, weil ...',
      intro: '"我不吃肉"容易说，"我不吃肉，因为……"才是完整的表达。这一课学德语第一个真正的从句结构——weil 从句，动词会从熟悉的第二位被踢到句子最后，这个"动词大搬家"的规律，以后学 dass、wenn 从句时还会原样复用。',
      sections: [
        {
          type: 'vocab', title: '食物与过敏', sub: '',
          items: [
            { de: 'Fleisch', art: 'das', zh: '肉', en: 'meat', ex: 'Ich esse kein Fleisch.', exZh: '我不吃肉。' },
            { de: 'allergisch (gegen)', zh: '过敏的（对……）', en: 'allergic (to)', ex: 'Ich bin allergisch gegen Nüsse.', exZh: '我对坚果过敏。' },
            { de: 'Nuss', art: 'die', pl: 'Nüsse', zh: '坚果，果仁', en: 'nut', ex: 'Die Nüsse schmecken gut.', exZh: '这些坚果很好吃。' },
            { de: 'Geschmack', art: 'der', pl: 'Geschmäcker', zh: '口味，味道', en: 'taste', ex: 'Der Geschmack gefällt mir nicht.', exZh: '我不喜欢这个味道。' },
          ]
        },
        {
          type: 'vocab', title: '说明理由', sub: '',
          items: [
            { de: 'weil', zh: '因为（连接词，动词要移到句尾）', en: 'because', ex: 'Ich bleibe zu Hause, weil ich krank bin.', exZh: '我待在家里，因为我生病了。' },
            { de: 'Grund', art: 'der', pl: 'Gründe', zh: '原因，理由', en: 'reason', ex: 'Der Grund ist einfach.', exZh: '理由很简单。' },
            { de: 'Umwelt', art: 'die', zh: '环境', en: 'environment', ex: 'Das ist gut für die Umwelt.', exZh: '这样对环境有好处。' },
            { de: 'Tier', art: 'das', pl: 'Tiere', zh: '动物', en: 'animal', ex: 'Ich mag Tiere.', exZh: '我喜欢动物。' },
          ]
        },
        {
          type: 'dialogue', title: '我不吃肉，因为……', scene: '晚饭进行中，Anna 问 Wei 要不要再来点肉，Wei 用 weil 从句解释自己的饮食习惯和理由。',
          lines: [
            { sp: 'Anna', de: 'Möchtest du noch etwas Fleisch? Es ist vom Bauernhof meiner Eltern.', zh: '你还想再来点肉吗？是我父母农场里养的。' },
            { sp: 'Wei', de: 'Nein danke, ich esse kein Fleisch, weil ich Vegetarier bin.', zh: '不用了，谢谢，我不吃肉，因为我是素食者。' },
            { sp: 'Anna', de: 'Oh, das wusste ich nicht! Seit wann isst du kein Fleisch mehr?', zh: '哦，我还不知道呢！你从什么时候开始不吃肉了？' },
            { sp: 'Wei', de: 'Schon seit ein paar Jahren, weil mir meine Gesundheit wichtig ist.', zh: '已经好几年了，因为我的健康对我很重要。' },
            { sp: 'Anna', de: 'Verstehe ich total. Und isst du auch keine Milchprodukte?', zh: '完全理解。那你也不吃奶制品吗？' },
            { sp: 'Wei', de: 'Doch, die esse ich schon, weil ich noch kein Veganer bin.', zh: '不，那个我还是吃的，因为我还不是纯素食者。' },
            { sp: 'Anna', de: 'Gut zu wissen. Bist du eigentlich allergisch gegen etwas?', zh: '知道了。那你对什么过敏吗？' },
            { sp: 'Wei', de: 'Ja, ich bin allergisch gegen Nüsse, weil das für mich gefährlich ist.', zh: '有，我对坚果过敏，因为那对我来说很危险。' },
            { sp: 'Anna', de: 'Danke, dass du mir das sagst! Dann gibt es heute zum Glück keine Nüsse.', zh: '谢谢你告诉我！那今天正好没有坚果，太好了。' },
            { sp: 'Wei', de: 'Perfekt. Ich muss übrigens bald los, weil ich morgen früh arbeiten muss.', zh: '太好了。对了，我得快走了，因为我明天一早要工作。' },
            { sp: 'Anna', de: 'Schade, aber ich verstehe. Ich freue mich total, dass du gekommen bist.', zh: '真可惜，不过我理解。我很高兴你能来。' },
            { sp: 'Wei', de: 'Ich mich auch! Bis bald, und danke für den schönen Abend.', zh: '我也是！回头见，谢谢你这个美好的夜晚。' },
          ]
        },
        {
          type: 'grammar', title: 'weil 从句：动词要跑到最后', sub: '第一个真正的从句结构，对比 g5 学过的 V2 语序',
          html: `<p>到现在为止，句子里的变位动词永远在第二位（V2，g5 学过的铁律）。<b class="de">weil</b>（因为）引导的从句第一次打破这条规律——从句里的<b>变位动词要移到从句最后</b>，这个语序叫 <b>V-letzt</b>（动词末位）：</p>
<table><tr><th>独立主句（V2）</th><th>weil 从句（V-letzt）</th></tr>
<tr><td class="hl">Ich bin Vegetarier.</td><td class="hl">..., weil ich Vegetarier <mark>bin</mark>.</td></tr>
<tr><td class="hl">Ich bin krank.</td><td class="hl">..., weil ich krank <mark>bin</mark>.</td></tr></table>
<p>逗号前面还是正常的主句，逗号后面 <mark>weil</mark> 一出现，动词就要乖乖排到从句的最后一个词。完整的句子通常是"主句在前，weil 从句在后"：<b class="de">Ich esse kein Fleisch, weil ich Vegetarier bin.</b>（我不吃肉，因为我是素食者。）</p>`
        },
        {
          type: 'grammar', title: '更长的 weil 从句：情态动词也要挪到最后', sub: '从句里有情态动词时的语序',
          html: `<p>如果从句本来就有情态动词（u9 学过的 Satzklammer），weil 从句里<b>情态动词单独踢到最后</b>，实义动词原形紧挨着排在它前面：</p>
<p class="de">Ich muss jetzt gehen, weil ich morgen früh <mark>arbeiten muss</mark>.（我现在得走了，因为我明天一早要工作。）</p>
<table><tr><th>主句语序回顾</th><th>weil 从句语序</th></tr>
<tr><td class="hl">Ich muss arbeiten.</td><td class="hl">..., weil ich arbeiten muss.</td></tr>
<tr><td class="hl">Ich kann nicht kommen.</td><td class="hl">..., weil ich nicht kommen kann.</td></tr></table>
<p>规律总结成一句话：<b>不管从句里有几个动词成分，变位的那一个（情态动词或 sein/haben）永远排在从句最后一个位置</b>，其他动词原形紧贴在它前面排队等着。</p>
<p>这套"动词踢到最后"的结构以后会在 dass 从句和 wenn 从句里原样复用，是德语从句最核心的一条规则，值得现在就练熟。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">德国做客文化三件事：</b>准时（Pünktlichkeit）很重要，德国人不流行"故意迟到"，如果会晚到 10-15 分钟，最好提前发消息说一声；带一份不用太贵重的小礼物（花、酒、巧克力都可以）几乎是标配；碰杯说 <mark>Prost!</mark> 时，德语区习俗是要看着对方的眼睛——民间说法是不看眼睛碰杯会带来倒霉运气，不用太当真，但记得眼神交流，会让主人觉得你很懂礼数。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'weil 从句属于德语的哪种语序？', options: ['V-letzt（动词放最后）', 'V2（动词第二位）', 'V1（动词最前面）'], answer: 0, why: 'weil 引导的从句里，变位动词要移到从句的最后一个位置。' },
        { type: 'cloze', zhHint: '我不吃肉，因为我是素食者。', before: 'Ich esse kein Fleisch, weil ich Vegetarier', after: '.', options: ['bin', 'bist', 'ist'], answer: 0, why: '主语是 ich，sein 变位是 bin，从句里动词要放到最后。' },
        { type: 'cloze', zhHint: '我现在得走了，因为我明天要工作。', before: 'Ich muss jetzt gehen, weil ich morgen arbeiten', after: '.', options: ['muss', 'arbeitet', 'kann'], answer: 0, why: '情态动词 muss 要放在从句最后，实义动词原形 arbeiten 紧挨在它前面。' },
        { type: 'mcq', q: '"..., weil ich krank bin." 这句从句的动词 bin 为什么放在最后？', options: ['weil 从句要求动词放在句尾（V-letzt）', '因为 bin 总是放最后', '这是个例外，没有规律'], answer: 0, why: '这是 weil 从句固定的 V-letzt 语序规则，不是巧合。' },
        { type: 'order', zh: '因为我对坚果过敏。', words: ['weil', 'ich', 'allergisch', 'gegen', 'Nüsse', 'bin'], why: '从句 V-letzt 语序，变位动词 bin 放在从句最后。' },
        { type: 'match', pairs: [['weil', '因为'], ['der Grund', '原因'], ['das Tier', '动物'], ['die Umwelt', '环境']] },
        { type: 'listen', audio: 'Ich bin allergisch gegen Nüsse, weil das für mich gefährlich ist.', q: '这句话是什么意思？', options: ['我对坚果过敏，因为那对我很危险。', '我喜欢吃坚果，因为很健康。', '我不知道自己对什么过敏。'], answer: 0, why: 'allergisch gegen = 对……过敏，weil das für mich gefährlich ist = 因为那对我很危险。' },
        { type: 'speak', de: 'Ich esse kein Fleisch, weil ich Vegetarier bin.', zh: '我不吃肉，因为我是素食者。' },
      ],
      task: { title: '今天的生活任务', desc: '用 weil 造 3 个关于自己饮食喜好的真实句子（"我喜欢/不喜欢___，因为___"），至少一句里用上情态动词，比如 "..., weil ich abends nicht viel essen möchte"。' }
    },
  ]
};
