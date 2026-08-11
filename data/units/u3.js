// 第 3 单元：面包店与咖啡馆
export default {
  id: 'u3', num: '3', color: 'green', shape: 'half',
  de: 'Beim Bäcker', zh: '面包店与咖啡馆',
  desc: '莱比锡街角总有一家面包店。学会点单万能句 "Ich hätte gern...", 从此买早餐不用比划手势。',
  kann: [
    { de: 'Ich kann beim Bäcker mit „Ich hätte gern...“ etwas bestellen.', zh: '我能在面包店用“Ich hätte gern...”点单。' },
    { de: 'Ich kann mit „Ich nehme...“ eine Bestellung direkter formulieren.', zh: '我能用“Ich nehme...”更直接地点单。' },
    { de: 'Ich kann auf „Zum Hier-Essen oder zum Mitnehmen?“ richtig antworten.', zh: '我能正确回答“堂食还是外带”这个问题。' },
    { de: 'Ich kann ein Getränk mit oder ohne Milch bestellen und bezahlen.', zh: '我能点一杯加奶或不加奶的饮品并付款。' },
  ],
  lessons: [
    {
      id: 'u3l1', title: '我想要一个小面包', de: 'Ich hätte gern...',
      intro: '德国人几乎每天都会去一次 Bäckerei 或 Café。这一课学会完整的点单流程，还有一个能用一辈子的万能句型 "Ich hätte gern..."——不用先弄懂语法术语，直接当固定短语背下来就能用。',
      sections: [
        {
          type: 'vocab', title: '面包与饮品', sub: '',
          items: [
            { de: 'Brötchen', art: 'das', pl: 'Brötchen', zh: '小面包，餐包', en: 'bread roll', ex: 'Zwei Brötchen, bitte.', exZh: '请给我两个小面包。' },
            { de: 'Croissant', art: 'das', pl: 'Croissants', zh: '牛角包', en: 'croissant', ex: 'Ich hätte gern ein Croissant.', exZh: '我想要一个牛角包。' },
            { de: 'Kuchen', art: 'der', pl: 'Kuchen', zh: '蛋糕', en: 'cake', ex: 'Ich nehme ein Stück Kuchen.', exZh: '我要一块蛋糕。' },
            { de: 'Stück', art: 'das', pl: 'Stücke', zh: '一块，一件', en: 'piece', ex: 'Ein Stück Kuchen, bitte.', exZh: '请给我一块蛋糕。' },
            { de: 'Kaffee', art: 'der', pl: 'Kaffees', zh: '咖啡', en: 'coffee', ex: 'Ich hätte gern einen Kaffee.', exZh: '我想要一杯咖啡。' },
            { de: 'Tee', art: 'der', pl: 'Tees', zh: '茶', en: 'tea', ex: 'Ich nehme einen Tee, bitte.', exZh: '我要一杯茶，谢谢。' },
            { de: 'Bäckerei', art: 'die', pl: 'Bäckereien', zh: '面包店', en: 'bakery', ex: 'Die Bäckerei ist hier.', exZh: '面包店就在这儿。' },
            { de: 'Café', art: 'das', pl: 'Cafés', zh: '咖啡馆', en: 'café', ex: 'Das Café ist schön.', exZh: '这家咖啡馆很不错。' },
          ]
        },
        {
          type: 'vocab', title: '点单常用语', sub: '',
          items: [
            { de: 'bestellen', zh: '点（餐），预订', en: 'to order', ex: 'Ich bestelle einen Kaffee.', exZh: '我点一杯咖啡。' },
            { de: 'nehmen', zh: '拿，要（点餐常用）', en: 'to take', note: '变音动词：du nimmst, er/sie nimmt', ex: 'Was nimmst du?', exZh: '你要什么？' },
            { de: 'zum Mitnehmen', zh: '带走（外带）', en: 'to go / takeaway', ex: 'Einen Kaffee zum Mitnehmen, bitte.', exZh: '一杯咖啡带走，谢谢。' },
            { de: 'zum Hier-Essen', zh: '在这里吃（堂食）', en: 'for here', ex: 'Zum Hier-Essen, bitte.', exZh: '在这里吃，谢谢。' },
            { de: 'lecker', zh: '好吃的', en: 'tasty', ex: 'Der Kuchen ist lecker.', exZh: '这蛋糕很好吃。' },
            { de: 'mit Milch', zh: '加牛奶', en: 'with milk', ex: 'Ein Kaffee mit Milch, bitte.', exZh: '请来一杯加奶咖啡。' },
            { de: 'ohne Zucker', zh: '不加糖', en: 'without sugar', ex: 'Ein Tee ohne Zucker, bitte.', exZh: '请来一杯不加糖的茶。' },
            { de: 'Was darf’s sein?', zh: '您要点什么？（店员招呼语）', en: 'What can I get you?', ex: 'Guten Tag! Was darf’s sein?', exZh: '您好！您要点什么？' },
            { de: 'Das wär’s', zh: '就这些了（顾客表示点完了）', en: 'That’s all', ex: 'Ein Kaffee, das wär’s.', exZh: '一杯咖啡，就这些了。' },
            { de: 'Noch etwas?', zh: '还要别的吗？', en: 'Anything else?', ex: 'Noch etwas? Nein, danke.', exZh: '还要别的吗？不用了，谢谢。' },
          ]
        },
        {
          type: 'dialogue', title: '点一份早餐', scene: 'Wei 早上去楼下的面包店买早餐。',
          lines: [
            { sp: 'Verkäuferin', de: 'Guten Morgen! Was darf’s sein?', zh: '早上好！您要点什么？' },
            { sp: 'Wei', de: 'Guten Morgen! Ich hätte gern zwei Brötchen und ein Croissant.', zh: '早上好！我想要两个小面包和一个牛角包。' },
            { sp: 'Verkäuferin', de: 'Gerne. Noch etwas?', zh: '好的。还要别的吗？' },
            { sp: 'Wei', de: 'Ja, einen Kaffee zum Mitnehmen, bitte.', zh: '要的，再来一杯咖啡外带，谢谢。' },
            { sp: 'Verkäuferin', de: 'Mit Milch?', zh: '加牛奶吗？' },
            { sp: 'Wei', de: 'Ja, mit Milch, ohne Zucker. Das wär’s.', zh: '要牛奶，不要糖。就这些了。' },
            { sp: 'Verkäuferin', de: 'Das macht vier Euro zwanzig, bitte.', zh: '一共四欧二十分，谢谢。' },
            { sp: 'Wei', de: 'Bitte schön.', zh: '给您。' },
            { sp: 'Verkäuferin', de: 'Danke! Schönen Tag noch!', zh: '谢谢！祝您愉快！' },
          ]
        },
        {
          type: 'grammar', title: '点单万能句：Ich hätte gern...', sub: '先学句型，不用先懂语法术语',
          html: `<p>德语名词在句子里当"宾语"（比如"我要一个面包"里的"面包"）时，冠词会变化——这叫<b>第四格（宾格）</b>。好消息是：变化只发生在<b>阳性</b>名词上，阴性和中性完全不变：</p>
<table><tr><th>性</th><th>第一格（原形）</th><th>第四格（宾语）</th></tr>
<tr><td class="hl">阳性</td><td class="hl">ein Kaffee</td><td class="hl">einen Kaffee</td></tr>
<tr><td class="hl">阴性</td><td class="hl">eine Tasse</td><td class="hl">eine Tasse（不变）</td></tr>
<tr><td class="hl">中性</td><td class="hl">ein Croissant</td><td class="hl">ein Croissant（不变）</td></tr></table>
<p>只要记住一句话：<mark>阳性的 ein 变成 einen，其余都不变</mark>。现在把这条规则装进一个万能句型里，点单时直接套用：</p>
<p class="de"><b>Ich hätte gern einen/eine/ein + 名词.</b>（我想要一个……）</p>
<p><b>hätte gern</b> 是德语里最礼貌、最常用的点单说法。不用理解语法上为什么是这个形式（这是虚拟式，以后再学），现在直接当一个固定短语背下来就行：</p>
<ul>
<li>Ich hätte gern <mark>einen</mark> Kaffee.（阳性 → einen）</li>
<li>Ich hätte gern <mark>eine</mark> Tasse Tee.（阴性 → eine，不变）</li>
<li>Ich hätte gern <mark>ein</mark> Croissant.（中性 → ein，不变）</li>
</ul>`
        },
        {
          type: 'grammar', title: '第二句型：Ich nehme...', sub: '更直接、更口语的说法',
          html: `<p>比 <b class="de">Ich hätte gern</b> 更简短随意的说法是 <b class="de">Ich nehme...</b>（我要……），意思几乎一样，年轻店员和熟客之间常用：</p>
<ul>
<li>Ich nehme <mark>ein</mark> Stück Kuchen.（我要一块蛋糕。）</li>
<li>Ich nehme <mark>einen</mark> Tee, bitte.（我要一杯茶，谢谢。）</li>
</ul>
<p>两个句型选一个记熟就够用：<b>Ich hätte gern</b> 更礼貌保险，<b>Ich nehme</b> 更快更口语。宾格变化规则（阳性 ein→einen）在两个句型里都适用。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">"外带还是堂食"店员几乎必问。</b>听到 <mark>zum Hier-Essen oder zum Mitnehmen?</mark> 时，直接回答 <b>zum Mitnehmen</b>（外带）或 <b>zum Hier-Essen</b>（堂食）就行——这两个短语在面包店、咖啡馆、快餐店天天用得上，值得单独记熟。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Ich hätte gern einen Kaffee." 里 einen 为什么不是 ein？', options: ['因为 Kaffee 是阳性名词，做宾语时 ein 变 einen', '因为 Kaffee 是复数', '没有规律，随便用'], answer: 0, why: '第四格里只有阳性的 ein 变成 einen，阴性/中性不变。' },
        { type: 'cloze', zhHint: '我想要一个牛角包。', before: 'Ich hätte gern', after: 'Croissant.', options: ['ein', 'einen', 'eine'], answer: 0, why: 'Croissant 是中性名词（das Croissant），第四格不变，仍是 ein。' },
        { type: 'mcq', q: '店员问 "Was darf’s sein?" 是什么意思？', options: ['您要点什么？', '多少钱？', '还要别的吗？'], answer: 0, why: '这是德国点单最常见的开场白，字面接近"能为您做点什么"。' },
        { type: 'order', zh: '我想要两个小面包。', words: ['Ich', 'hätte', 'gern', 'zwei', 'Brötchen'], why: 'Ich hätte gern + 数量 + 名词，德语点单万能句型。' },
        { type: 'match', pairs: [['die Bäckerei', '面包店'], ['der Kuchen', '蛋糕'], ['zum Mitnehmen', '外带'], ['ohne Zucker', '不加糖']] },
        { type: 'listen', audio: 'Ich hätte gern zwei Brötchen und ein Croissant.', q: '这句话是什么意思？', options: ['我想要两个小面包和一个牛角包。', '我想要一个小面包和两个牛角包。', '我想要三个牛角包。'], answer: 0, why: 'zwei Brötchen = 两个小面包，ein Croissant = 一个牛角包。' },
        { type: 'listen', audio: 'Mit Milch oder ohne?', q: '店员在问什么？', options: ['要加牛奶还是不加？', '要加糖还是不加？', '要外带还是堂食？'], answer: 0, why: 'mit Milch = 加牛奶，ohne = 不加。' },
        { type: 'speak', de: 'Ich hätte gern einen Kaffee zum Mitnehmen, bitte.', zh: '我想要一杯咖啡外带，谢谢。' },
      ],
      task: { title: '今天的生活任务', desc: '去楼下面包店时，用 "Ich hätte gern ___" 点一样东西，被问 "zum Hier-Essen oder zum Mitnehmen?" 时练习回答。今天就去试一次！' }
    },
  ]
};
