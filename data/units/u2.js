// 第 2 单元：超市购物
export default {
  id: 'u2', num: '2', color: 'yellow', shape: 'square',
  de: 'Im Supermarkt', zh: '超市购物',
  desc: '去 Konsum、Rewe 或 Lidl 买菜，学会问价、找货架、用现金还是刷卡结账——顺便掌握 der/die/das 和数字。',
  kann: [
    { de: 'Ich kann im Supermarkt nach einem Produkt fragen („Wo finde ich...?“).', zh: '我能在超市里问某样东西放在哪儿。' },
    { de: 'Ich kann Zahlen von 0 bis 100 verstehen und nennen.', zh: '我能听懂并说出0到100的数字。' },
    { de: 'Ich kann einen Preis verstehen und sagen, ob ich bar oder mit Karte zahle.', zh: '我能听懂价格，并说明自己付现金还是刷卡。' },
    { de: 'Ich kann für einfache Alltagswörter den richtigen Artikel (der/die/das) nennen.', zh: '我能为日常词汇说出正确的冠词（der/die/das）。' },
  ],
  lessons: [
    {
      id: 'u2l1', title: '食物与数字', de: 'Essen und Zahlen',
      intro: '莱比锡最常去的地方大概就是超市了。这一课学会常见食物的名字（附带 der/die/das，从第一天就用颜色记性别），再把 0-20 的数字读顺，找货架、问价格都不怕。',
      sections: [
        {
          type: 'vocab', title: '食物词汇', sub: '注意 der/die/das——颜色记忆法从这里开始用起',
          items: [
            { de: 'Apfel', art: 'der', pl: 'Äpfel', zh: '苹果', en: 'apple', ex: 'Ich kaufe drei Äpfel.', exZh: '我买三个苹果。' },
            { de: 'Banane', art: 'die', pl: 'Bananen', zh: '香蕉', en: 'banana', ex: 'Ich kaufe Bananen.', exZh: '我买香蕉。' },
            { de: 'Milch', art: 'die', zh: '牛奶', en: 'milk', ex: 'Wo finde ich die Milch?', exZh: '牛奶在哪儿？' },
            { de: 'Brot', art: 'das', pl: 'Brote', zh: '面包（大个的，整条）', en: 'bread', ex: 'Ich esse Brot.', exZh: '我吃面包。' },
            { de: 'Brötchen', art: 'das', pl: 'Brötchen', zh: '小面包，餐包', en: 'bread roll', note: '复数不变——这类中性名词很多都是这样', ex: 'Ich kaufe zwei Brötchen.', exZh: '我买两个小面包。' },
            { de: 'Ei', art: 'das', pl: 'Eier', zh: '鸡蛋', en: 'egg', ex: 'Ich esse ein Ei.', exZh: '我吃一个鸡蛋。' },
            { de: 'Käse', art: 'der', zh: '奶酪，芝士', en: 'cheese', ex: 'Ich brauche Käse.', exZh: '我需要奶酪。' },
            { de: 'Butter', art: 'die', zh: '黄油', en: 'butter', ex: 'Ich kaufe Butter.', exZh: '我买黄油。' },
            { de: 'Wasser', art: 'das', zh: '水', en: 'water', ex: 'Ich trinke Wasser.', exZh: '我喝水。' },
            { de: 'Reis', art: 'der', zh: '米，米饭', en: 'rice', ex: 'Ich esse Reis.', exZh: '我吃米饭。' },
            { de: 'Tomate', art: 'die', pl: 'Tomaten', zh: '西红柿', en: 'tomato', ex: 'Ich brauche Tomaten.', exZh: '我需要西红柿。' },
            { de: 'Kartoffel', art: 'die', pl: 'Kartoffeln', zh: '土豆', en: 'potato', ex: 'Ich kaufe Kartoffeln.', exZh: '我买土豆。' },
            { de: 'Obst', art: 'das', zh: '水果（统称，不可数）', en: 'fruit', ex: 'Ich esse viel Obst.', exZh: '我吃很多水果。' },
            { de: 'Gemüse', art: 'das', zh: '蔬菜（统称，不可数）', en: 'vegetable', ex: 'Ich esse viel Gemüse.', exZh: '我吃很多蔬菜。' },
          ]
        },
        {
          type: 'vocab', title: '超市动词', sub: '',
          items: [
            { de: 'kaufen', zh: '买', en: 'to buy', ex: 'Ich kaufe Obst und Gemüse.', exZh: '我买水果和蔬菜。' },
            { de: 'brauchen', zh: '需要', en: 'to need', ex: 'Ich brauche noch Milch.', exZh: '我还需要牛奶。' },
            { de: 'essen', zh: '吃', en: 'to eat', note: '变音动词：du isst, er/sie isst', ex: 'Was isst du?', exZh: '你在吃什么？' },
            { de: 'trinken', zh: '喝', en: 'to drink', ex: 'Ich trinke Kaffee.', exZh: '我喝咖啡。' },
            { de: 'Supermarkt', art: 'der', pl: 'Supermärkte', zh: '超市', en: 'supermarket', ex: 'Wo ist der Supermarkt?', exZh: '超市在哪儿？' },
          ]
        },
        {
          type: 'dialogue', title: '在 Konsum 找货架', scene: 'Wei 在 Konsum 超市里找不到想买的东西，向店员求助。',
          lines: [
            { sp: 'Wei', de: 'Entschuldigung, wo finde ich die Milch?', zh: '不好意思，请问牛奶在哪儿？' },
            { sp: 'Verkäufer', de: 'Die Milch ist im Gang drei, beim Käse.', zh: '牛奶在三号货架，奶酪旁边。' },
            { sp: 'Wei', de: 'Danke schön! Und haben Sie auch Tofu?', zh: '非常感谢！你们这儿有豆腐吗？' },
            { sp: 'Verkäufer', de: 'Ja, Tofu haben wir auch. Das ist beim Gemüse.', zh: '有的，豆腐也有。在蔬菜那边。' },
            { sp: 'Wei', de: 'Super, danke! Und was kostet der Reis dort?', zh: '太好了，谢谢！那边的米多少钱？' },
            { sp: 'Verkäufer', de: 'Moment... der Reis kostet zwei Euro fünfzig.', zh: '我看看……米是两欧五十分。' },
            { sp: 'Wei', de: 'Gut, ich nehme eine Packung. Vielen Dank!', zh: '好的，我拿一袋。非常感谢！' },
            { sp: 'Verkäufer', de: 'Gern geschehen! Schönen Tag noch!', zh: '不客气！祝你今天愉快！' },
          ]
        },
        {
          type: 'grammar', title: '名词的性：der / die / das', sub: '德语名词没有例外，必须跟单词一起背',
          html: `<p>德语名词分三种性：<b>阳性 der</b>、<b>阴性 die</b>、<b>中性 das</b>。这不是"男的女的"，纯粹是语法分类，必须和单词一起背。本站给三种性别配了固定颜色——<b>der 蓝色、die 红色、das 绿色</b>——全站的词汇卡片都按这个配色标注，看多了颜色就会变成条件反射，比死记硬背有效得多。</p>
<table><tr><th>性</th><th>冠词</th><th>例词</th></tr>
<tr><td class="hl">阳性（蓝）</td><td class="hl">der</td><td class="hl">der Apfel（苹果）</td></tr>
<tr><td class="hl">阴性（红）</td><td class="hl">die</td><td class="hl">die Banane（香蕉）</td></tr>
<tr><td class="hl">中性（绿）</td><td class="hl">das</td><td class="hl">das Brot（面包）</td></tr></table>
<p>常见复数形式规律（不绝对，但覆盖大部分情况）：</p>
<table><tr><th>类型</th><th>规律</th><th>例词</th></tr>
<tr><td class="hl">加 -e</td><td>不少阳性/中性名词</td><td class="hl">der Tag → die Tage</td></tr>
<tr><td class="hl">加 -en/-n</td><td>几乎所有阴性名词</td><td class="hl">die Banane → die Bananen</td></tr>
<tr><td class="hl">加 -er（常变音）</td><td>不少中性名词</td><td class="hl">das Ei → die Eier</td></tr>
<tr><td class="hl">加 -s</td><td>外来词</td><td class="hl">das Café → die Cafés</td></tr>
<tr><td class="hl">不变</td><td>-er/-en/-chen/-lein 结尾的名词</td><td class="hl">das Brötchen → die Brötchen</td></tr></table>
<p>提示：所有名词的<b>复数定冠词都是 die</b>，不管单数是什么性——这点帮你少记一件事。</p>`
        },
        {
          type: 'grammar', title: 'haben（有）动词变位', sub: '',
          html: `<table><tr><th>人称</th><th>haben</th><th>例句</th></tr>
<tr><td class="hl">ich</td><td class="hl">habe</td><td class="hl">Ich habe Hunger.</td></tr>
<tr><td class="hl">du</td><td class="hl">hast</td><td class="hl">Hast du Zeit?</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">hat</td><td class="hl">Der Supermarkt hat Obst.</td></tr>
<tr><td class="hl">wir</td><td class="hl">haben</td><td class="hl">Wir haben Milch.</td></tr>
<tr><td class="hl">ihr</td><td class="hl">habt</td><td class="hl">Habt ihr Tofu?</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">haben</td><td class="hl">Sie haben viele Angebote.</td></tr></table>
<p>和 sein 一样，haben 是不规则动词，只能整体背下来——但用得极其频繁，多用几次就记住了。</p>`
        },
        {
          type: 'grammar', title: '数字 0-20', sub: '超市买菜、报数量，先把这些数字读顺',
          html: `<table><tr><th>数字</th><th>德语</th></tr>
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
<p>注意几个不规则的：<b>sechs</b> 加 -zehn 时要去掉一个 s → <mark>sechzehn</mark>；<b>sieben</b> 加 -zehn 要去掉 en → <mark>siebzehn</mark>。13-19 都是"个位数 + zehn"的组合，规律很稳。</p>`
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Milch" 的冠词是？', options: ['die', 'der', 'das'], answer: 0, why: 'die Milch 是阴性名词，红色记忆。' },
        { type: 'mcq', q: '"das Brötchen" 的复数形式是？', options: ['die Brötchen（不变）', 'die Brötchens', 'die Brötchener'], answer: 0, why: '-chen 结尾的中性名词复数不变，只是冠词变成 die。' },
        { type: 'cloze', zhHint: '我需要三个苹果。', before: 'Ich brauche drei', after: '.', options: ['Äpfel', 'Apfel', 'Apfeln'], answer: 0, why: 'Apfel 的复数是 Äpfel——不加词尾，只把 a 变音成 ä。这类"只变音"的阳性名词还有 der Vogel → die Vögel。' },
        { type: 'order', zh: '牛奶在哪儿？', words: ['Wo', 'finde', 'ich', 'die', 'Milch'], why: 'W 疑问词 wo 提前，变位动词 finde 紧随其后。' },
        { type: 'match', pairs: [['der Apfel', '苹果'], ['die Kartoffel', '土豆'], ['das Ei', '鸡蛋'], ['der Käse', '奶酪']] },
        { type: 'listen', audio: 'Wo finde ich die Milch?', q: '这句话是什么意思？', options: ['牛奶在哪儿？', '这是牛奶吗？', '我需要牛奶。'], answer: 0, why: 'wo = 哪里，finde 是 finden（找到）的 ich 变位。' },
        { type: 'listen', audio: 'Haben Sie auch Tofu?', q: '这句话是什么意思？', options: ['你们有豆腐吗？', '豆腐多少钱？', '豆腐在哪儿？'], answer: 0, why: 'haben = 有，Sie 是敬称"您"，是非问句动词提前。' },
        { type: 'speak', de: 'Entschuldigung, wo finde ich Kartoffeln?', zh: '不好意思，请问土豆在哪儿？' },
      ],
      task: { title: '今天的生活任务', desc: '去 Konsum、Rewe 或 Lidl 时，找一样东西问店员 "Entschuldigung, wo finde ich ___?"，把空格换成你要买的食物单词，今天就用一次。' }
    },
    {
      id: 'u2l2', title: '在收银台', de: 'An der Kasse',
      intro: '买完东西要结账了。这一课学会数字21-100、价格怎么读，还有德国超市特有的 Pfand（押金瓶）制度——搞懂这个能省不少冤枉钱。',
      sections: [
        {
          type: 'vocab', title: '收银台词汇', sub: '',
          items: [
            { de: 'Kasse', art: 'die', pl: 'Kassen', zh: '收银台', en: 'checkout', ex: 'Die Kasse ist da vorne.', exZh: '收银台在前面。' },
            { de: 'bezahlen', zh: '付款', en: 'to pay', ex: 'Ich bezahle mit Karte.', exZh: '我刷卡付款。' },
            { de: 'bar', zh: '现金（地）', en: 'in cash', ex: 'Ich zahle bar.', exZh: '我付现金。', note: 'bar 是副词，"用现金"；名词形式是 das Bargeld' },
            { de: 'Karte', art: 'die', pl: 'Karten', zh: '卡（银行卡等）', en: 'card', ex: 'Ich zahle mit Karte.', exZh: '我刷卡付款。' },
            { de: 'Geld', art: 'das', zh: '钱', en: 'money', ex: 'Ich brauche Geld.', exZh: '我需要钱。' },
            { de: 'Euro', art: 'der', pl: 'Euro', zh: '欧元', en: 'euro', note: '复数不加 s：zehn Euro', ex: 'Das kostet zehn Euro.', exZh: '这个要十欧元。' },
            { de: 'Cent', art: 'der', pl: 'Cent', zh: '分（欧分）', en: 'cent', note: '复数同样不变', ex: 'Das kostet fünfzig Cent.', exZh: '这个要五十分。' },
            { de: 'Pfand', art: 'das', zh: '押金（瓶子/罐子回收押金）', en: 'deposit', ex: 'Die Flasche hat Pfand.', exZh: '这个瓶子有押金。' },
            { de: 'Flasche', art: 'die', pl: 'Flaschen', zh: '瓶子', en: 'bottle', ex: 'Die Flasche kostet zwei Euro.', exZh: '这个瓶子要两欧元。' },
            { de: 'Tüte', art: 'die', pl: 'Tüten', zh: '袋子', en: 'bag', ex: 'Ich brauche eine Tüte.', exZh: '我需要一个袋子。' },
            { de: 'Kassenzettel', art: 'der', pl: 'Kassenzettel', zh: '小票，收据', en: 'receipt', ex: 'Hier ist der Kassenzettel.', exZh: '这是您的小票。' },
            { de: 'kosten', zh: '花费，值……钱', en: 'to cost', ex: 'Was kostet das?', exZh: '这个多少钱？' },
            { de: 'teuer', zh: '贵的', en: 'expensive', ex: 'Das ist teuer.', exZh: '这个很贵。' },
            { de: 'billig', zh: '便宜的', en: 'cheap', ex: 'Das ist billig.', exZh: '这个很便宜。' },
            { de: 'Angebot', art: 'das', pl: 'Angebote', zh: '特价，优惠', en: 'special offer', ex: 'Das ist im Angebot.', exZh: '这个在打折。' },
          ]
        },
        {
          type: 'dialogue', title: '结账', scene: 'Wei 买完东西，在 Konsum 收银台结账。',
          lines: [
            { sp: 'Kassiererin', de: 'Guten Tag! Sammeln Sie Punkte?', zh: '您好！您攒积分吗？（问有没有会员卡）' },
            { sp: 'Wei', de: 'Nein, ich habe keine Punktekarte.', zh: '没有，我没有积分卡。' },
            { sp: 'Kassiererin', de: 'Kein Problem. Das macht zwölf Euro vierzig.', zh: '没关系。一共十二欧四十分。' },
            { sp: 'Kassiererin', de: 'Zahlen Sie bar oder mit Karte?', zh: '您付现金还是刷卡？' },
            { sp: 'Wei', de: 'Mit Karte, bitte.', zh: '刷卡，谢谢。' },
            { sp: 'Kassiererin', de: 'Brauchen Sie den Kassenzettel?', zh: '您需要小票吗？' },
            { sp: 'Wei', de: 'Nein, danke.', zh: '不用了，谢谢。' },
            { sp: 'Kassiererin', de: 'Schönen Tag noch!', zh: '祝您今天愉快！' },
            { sp: 'Wei', de: 'Danke, gleichfalls!', zh: '谢谢，您也是！' },
          ]
        },
        {
          type: 'grammar', title: '数字 21-100', sub: '重点：德语个位数在前，这是最容易读错的地方',
          html: `<p>21 以后，德语数字读法和英语相反：<b>先说个位，再说十位</b>，中间用 <mark>und</mark> 连接。<b>einundzwanzig</b> 字面拆开是 <b>ein</b>(1) + <b>und</b>(和) + <b>zwanzig</b>(20) = 21。</p>
<table><tr><th>整十</th><th>德语</th></tr>
<tr><td class="hl">20</td><td class="hl">zwanzig</td></tr>
<tr><td class="hl">30</td><td class="hl">dreißig</td></tr>
<tr><td class="hl">40</td><td class="hl">vierzig</td></tr>
<tr><td class="hl">50</td><td class="hl">fünfzig</td></tr>
<tr><td class="hl">60</td><td class="hl">sechzig</td></tr>
<tr><td class="hl">70</td><td class="hl">siebzig</td></tr>
<tr><td class="hl">80</td><td class="hl">achtzig</td></tr>
<tr><td class="hl">90</td><td class="hl">neunzig</td></tr>
<tr><td class="hl">100</td><td class="hl">hundert</td></tr></table>
<table><tr><th>数字</th><th>德语</th></tr>
<tr><td class="hl">21</td><td class="hl">einundzwanzig</td></tr>
<tr><td class="hl">22</td><td class="hl">zweiundzwanzig</td></tr>
<tr><td class="hl">35</td><td class="hl">fünfunddreißig</td></tr>
<tr><td class="hl">48</td><td class="hl">achtundvierzig</td></tr>
<tr><td class="hl">99</td><td class="hl">neunundneunzig</td></tr></table>
<p>结账时听到价格，先抓住<mark>最后说出的整十部分</mark>（大概金额），个位数听不清也不影响理解。</p>`
        },
        {
          type: 'grammar', title: '价格怎么读', sub: '德语小数点用逗号，欧分紧跟着 Euro 说',
          html: `<p>德语书写小数用<b>逗号</b>而不是句点：<b>12,40 €</b>。读的时候，整数部分是 <b class="de">Euro</b>，小数部分是零钱，两个数字直接连读，中间不用"und"：</p>
<table><tr><th>价格</th><th>读法</th></tr>
<tr><td class="hl">12,40 €</td><td class="hl">zwölf Euro vierzig</td></tr>
<tr><td class="hl">3,50 €</td><td class="hl">drei Euro fünfzig</td></tr>
<tr><td class="hl">0,99 €</td><td class="hl">neunundneunzig Cent</td></tr>
<tr><td class="hl">1,00 €</td><td class="hl">ein Euro</td></tr></table>
<p>整欧元数不加零头时，直接说"X Euro"就行，不用说"und null Cent"。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">Pfand（押金瓶）是怎么回事？</b>德国大部分塑料瓶和易拉罐都收 <mark>Pfand</mark>：塑料瓶通常 0,25 €，玻璃瓶大约 0,08–0,15 €，瓶身上有 <b>Pfand</b> 字样或圆圈符号的都能退。喝完拿去超市门口的 <b>Pfandautomat</b>（退瓶机）扫一下，机器吐出一张小票，去收银台就能抵钱或换现金——这笔钱本质是"押金"，不是税，一定要记得去退。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"einundzwanzig" 是哪个数字？', options: ['21', '12', '20'], answer: 0, why: '德语个位在前：ein(1) + und + zwanzig(20) = 21。' },
        { type: 'cloze', zhHint: '一共十二欧四十分。', before: 'Das macht zwölf', after: 'vierzig.', options: ['Euro', 'Cent', 'Karte'], answer: 0, why: '12,40 € 读作 zwölf Euro vierzig，整数部分用 Euro。' },
        { type: 'mcq', q: '12,40 € 在德语书写里，逗号代表什么？', options: ['小数点', '千位分隔符', '没有意义'], answer: 0, why: '德语用逗号表示小数点，句点才是千位分隔符，和英语正好相反。' },
        { type: 'order', zh: '您付现金还是刷卡？', words: ['Zahlen', 'Sie', 'bar', 'oder', 'mit', 'Karte'], why: '是非问句：变位动词 Zahlen 提到第一位，接着是主语 Sie。' },
        { type: 'match', pairs: [['bar', '现金'], ['die Karte', '卡'], ['das Pfand', '押金'], ['der Kassenzettel', '小票']] },
        { type: 'listen', audio: 'Zahlen Sie bar oder mit Karte?', q: '这句话在问什么？', options: ['您付现金还是刷卡？', '您需要袋子吗？', '您需要小票吗？'], answer: 0, why: 'bar = 现金，mit Karte = 刷卡，oder = 或者。' },
        { type: 'listen', audio: 'Das macht neunundzwanzig Euro fünfzig.', q: '总价是多少？', options: ['29,50 €', '19,50 €', '29,15 €'], answer: 0, why: 'neunundzwanzig = 29，Euro fünfzig = 50 分。' },
        { type: 'speak', de: 'Ich zahle mit Karte, bitte.', zh: '我刷卡付款，谢谢。' },
      ],
      task: { title: '今天的生活任务', desc: '下次结账时，听店员说价格，试着在心里换算成数字写下来（比如听到 "dreizehn Euro zwanzig" 写 13,20 €）。如果有塑料瓶，记得去 Pfandautomat 退押金。' }
    },
  ]
};
