// 第 11 单元：住房与家具
export default {
  id: 'u11', num: '11', color: 'green', shape: 'square',
  de: 'Wohnen', zh: '住房与家具',
  desc: '找房子、搬家、在二手平台上淘家具——这个单元教你描述自己的住处，说清楚房间里有什么、东西大概放在哪儿。',
  kann: [
    { de: 'Ich kann mit „es gibt“ beschreiben, was es in einer Wohnung gibt.', zh: '我能用 es gibt 描述房间里有什么。' },
    { de: 'Ich kann mit stehen/liegen/hängen sagen, wo sich ein Möbelstück befindet.', zh: '我能用 stehen/liegen/hängen 说明家具的位置。' },
    { de: 'Ich kann am Telefon nach einem gebrauchten Möbelstück fragen und einen Abholtermin vereinbaren.', zh: '我能打电话询问二手家具情况并约定取货时间。' },
  ],
  lessons: [
    {
      id: 'u11l1', title: '这套房子有阳台', de: 'Es gibt einen Balkon',
      intro: '看房是德国生活里迟早要经历的一关。这一课学会房间和家具的词汇，还有一个非常实用的句型——es gibt（有）。这个句型有个规律：后面永远接第四格，正好是复习 u3、u8 都学过的 ein→einen。',
      sections: [
        {
          type: 'vocab', title: '房子与房间', sub: '',
          items: [
            { de: 'Wohnung', art: 'die', pl: 'Wohnungen', zh: '住房，公寓', en: 'apartment', ex: 'Die Wohnung hat drei Zimmer.', exZh: '这套房子有三个房间。' },
            { de: 'Zimmer', art: 'das', pl: 'Zimmer', zh: '房间', en: 'room', ex: 'Mein Zimmer ist hell und ruhig.', exZh: '我的房间明亮又安静。' },
            { de: 'Küche', art: 'die', pl: 'Küchen', zh: '厨房', en: 'kitchen', ex: 'Die Küche ist klein, aber schön.', exZh: '厨房小，但很漂亮。' },
            { de: 'Bad', art: 'das', pl: 'Bäder', zh: '浴室，卫生间', en: 'bathroom', ex: 'Wo ist das Bad?', exZh: '浴室在哪里？' },
            { de: 'Wohnzimmer', art: 'das', pl: 'Wohnzimmer', zh: '客厅', en: 'living room', ex: 'Das Wohnzimmer ist groß und hell.', exZh: '客厅又大又亮。' },
            { de: 'Schlafzimmer', art: 'das', pl: 'Schlafzimmer', zh: '卧室', en: 'bedroom', ex: 'Das Schlafzimmer ist ruhig.', exZh: '卧室很安静。' },
            { de: 'Balkon', art: 'der', pl: 'Balkone', zh: '阳台', en: 'balcony', ex: 'Die Wohnung hat einen Balkon.', exZh: '这套房子有一个阳台。' },
            { de: 'Miete', art: 'die', pl: 'Mieten', zh: '房租', en: 'rent', ex: 'Was kostet die Miete im Monat?', exZh: '每月房租多少钱？', note: '"kalt"只含房租，"warm"含水电暖气等杂费，找房时一定要问清楚' },
          ]
        },
        {
          type: 'vocab', title: '家具', sub: '',
          items: [
            { de: 'Möbel', art: 'die', zh: '家具（通常用复数）', en: 'furniture', ex: 'Gibt es schon Möbel?', exZh: '已经有家具了吗？' },
            { de: 'Tisch', art: 'der', pl: 'Tische', zh: '桌子', en: 'table', ex: 'Der Tisch steht in der Küche.', exZh: '桌子在厨房里。' },
            { de: 'Stuhl', art: 'der', pl: 'Stühle', zh: '椅子', en: 'chair', ex: 'Der Stuhl ist noch neu.', exZh: '这把椅子还是新的。' },
            { de: 'Bett', art: 'das', pl: 'Betten', zh: '床', en: 'bed', ex: 'Das Bett steht im Schlafzimmer.', exZh: '床在卧室里。' },
            { de: 'Schrank', art: 'der', pl: 'Schränke', zh: '柜子，衣柜', en: 'wardrobe/cupboard', ex: 'Der Schrank ist sehr groß.', exZh: '这个柜子很大。' },
            { de: 'Regal', art: 'das', pl: 'Regale', zh: '架子，书架', en: 'shelf', ex: 'Meine Bücher stehen im Regal.', exZh: '我的书放在书架上。' },
            { de: 'Lampe', art: 'die', pl: 'Lampen', zh: '灯', en: 'lamp', ex: 'Die Lampe steht auf dem Tisch.', exZh: '灯在桌子上。' },
            { de: 'Sofa', art: 'das', pl: 'Sofas', zh: '沙发', en: 'sofa', ex: 'Das Sofa steht im Wohnzimmer.', exZh: '沙发在客厅里。' },
          ]
        },
        {
          type: 'vocab', title: '描述住处', sub: '',
          items: [
            { de: 'groß', zh: '大的', en: 'big', ex: 'Das Zimmer ist sehr groß.', exZh: '这个房间很大。' },
            { de: 'klein', zh: '小的', en: 'small', ex: 'Die Küche ist ein bisschen klein.', exZh: '厨房有点小。' },
            { de: 'hell', zh: '明亮的', en: 'bright', ex: 'Schön hell hier!', exZh: '这儿真亮堂！' },
            { de: 'dunkel', zh: '暗的', en: 'dark', ex: 'Das Bad ist leider dunkel.', exZh: '浴室可惜有点暗。' },
            { de: 'ruhig', zh: '安静的', en: 'quiet', ex: 'Die Wohnung ist sehr ruhig.', exZh: '这套房子非常安静。' },
          ]
        },
        {
          type: 'dialogue', title: '看房', scene: 'Wei 去看一套出租房，房东太太带他参观各个房间。注意 es gibt 出现了多少次。',
          lines: [
            { sp: 'Vermieterin', de: 'So, hier ist die Wohnung. Kommen Sie rein!', zh: '好了，这就是这套房子。请进！' },
            { sp: 'Wei', de: 'Danke schön. Wie viele Zimmer hat die Wohnung?', zh: '谢谢。这套房子有几个房间？' },
            { sp: 'Vermieterin', de: 'Es gibt drei Zimmer: ein Wohnzimmer, ein Schlafzimmer und ein Büro.', zh: '有三个房间：一个客厅、一个卧室和一个书房。' },
            { sp: 'Wei', de: 'Schön hell hier! Gibt es auch einen Balkon?', zh: '这儿真亮堂！有阳台吗？' },
            { sp: 'Vermieterin', de: 'Ja, es gibt einen kleinen Balkon, direkt neben der Küche.', zh: '有，有一个小阳台，就在厨房旁边。' },
            { sp: 'Wei', de: 'Toll! Und wie ist die Küche? Gibt es schon Möbel?', zh: '太好了！那厨房怎么样？已经有家具了吗？' },
            { sp: 'Vermieterin', de: 'Ja, es gibt einen Tisch, ein paar Stühle und einen Schrank.', zh: '有，有一张桌子、几把椅子和一个柜子。' },
            { sp: 'Wei', de: 'Perfekt. Ist die Wohnung ruhig? Ich arbeite oft von zu Hause.', zh: '很好。这套房子安静吗？我经常在家办公。' },
            { sp: 'Vermieterin', de: 'Sehr ruhig, ja. Es gibt hier fast keinen Verkehr.', zh: '非常安静。这里几乎没什么车流声。' },
            { sp: 'Wei', de: 'Das klingt wirklich gut. Was kostet die Miete im Monat?', zh: '听起来真不错。每月房租多少钱？' },
            { sp: 'Vermieterin', de: 'Die Miete ist sechshundertfünfzig Euro warm.', zh: '房租是六百五十欧元，包含水电暖气。' },
            { sp: 'Wei', de: 'In Ordnung, ich überlege es mir. Vielen Dank für die Führung!', zh: '好的，我考虑一下。非常感谢您的带看！' },
          ]
        },
        {
          type: 'grammar', title: 'es gibt + 第四格', sub: '"有"这个句型，永远接第四格',
          html: `<p>先看对话里的例句：</p>
<p class="de">Es gibt <mark>einen</mark> Balkon. Es gibt <mark>einen</mark> Tisch. Es gibt drei Zimmer.</p>
<p><b class="de">es gibt</b>（有，存在）后面的名词永远是<b>第四格（Akkusativ）</b>，不管整句话看起来是什么结构。规律和 u3、u8 学过的完全一样：只有阳性名词的 ein 会变成 einen，阴性、中性都不变：</p>
<table><tr><th>性</th><th>es gibt +</th><th>例句</th></tr>
<tr><td class="hl">阳性</td><td class="hl">einen</td><td class="hl">Es gibt einen Tisch.</td></tr>
<tr><td class="hl">阴性</td><td class="hl">eine</td><td class="hl">Es gibt eine Küche.</td></tr>
<tr><td class="hl">中性</td><td class="hl">ein</td><td class="hl">Es gibt ein Bett.</td></tr>
<tr><td class="hl">复数</td><td class="hl">（不加冠词，或加数字）</td><td class="hl">Es gibt drei Zimmer.</td></tr></table>
<p>否定同样可以复习 u8 学过的 kein：<mark>Es gibt keinen Balkon.</mark>（没有阳台）——kein 的变位规律和 ein 一模一样。</p>`
        },
        {
          type: 'grammar', title: '另一种说法：haben 也接第四格', sub: '两种句型说的是同一件事',
          html: `<p>除了 es gibt，还可以直接用 <b class="de">haben</b> 说"这套房子有……"，意思几乎一样，同样接第四格：</p>
<table><tr><th>es gibt 句型</th><th>haben 句型</th></tr>
<tr><td class="hl">Es gibt einen Balkon in der Wohnung.</td><td class="hl">Die Wohnung hat einen Balkon.</td></tr>
<tr><td class="hl">Es gibt eine große Küche.</td><td class="hl">Die Wohnung hat eine große Küche.</td></tr></table>
<p>两种句型可以按语境自由选择：<b>es gibt</b> 更适合泛泛地介绍"这里有什么"，<b>haben</b> 更适合明确说"这套房子/这个房间具备什么"。不管选哪个，后面的名词都要用第四格。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">"warm" 和 "kalt" 的房租不是一回事。</b>德国租房广告上的价格通常分两种：<mark>Kaltmiete</mark>（冷租，只含房租本身）和 <mark>Warmmiete</mark>（暖租，含水、电、暖气等杂费 Nebenkosten）。两者能差100-200欧元，看房或者签合同前一定要问清楚："Ist das kalt oder warm?"，避免入住后账单差一大截的意外。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Es gibt ___ Balkon." （阳性名词）应该填哪个词？', options: ['einen', 'ein', 'eine'], answer: 0, why: 'Balkon 是阳性名词，es gibt 后面第四格要变成 einen。' },
        { type: 'cloze', zhHint: '这套房子里有一个厨房。', before: 'Es gibt', after: 'Küche in der Wohnung.', options: ['eine', 'einen', 'ein'], answer: 0, why: 'Küche 是阴性名词，第四格不变，仍是 eine。' },
        { type: 'mcq', q: '"Miete warm" 是什么意思？', options: ['房租含水电暖气等杂费', '房租只含房租本身', '房子暖气坏了'], answer: 0, why: 'Warmmiete = 暖租，包含 Nebenkosten（水电暖气等杂费）。' },
        { type: 'order', zh: '这套房子里有三个房间。', words: ['Es', 'gibt', 'drei', 'Zimmer', 'in', 'der', 'Wohnung'], why: 'es gibt 是固定句型主语，drei Zimmer 作第四格宾语，in der Wohnung 补充地点。' },
        { type: 'match', pairs: [['der Tisch', '桌子'], ['der Schrank', '柜子'], ['das Regal', '架子'], ['die Lampe', '灯']] },
        { type: 'listen', audio: 'Es gibt einen kleinen Balkon.', q: '这句话是什么意思？', options: ['有一个小阳台。', '没有阳台。', '有一个大阳台。'], answer: 0, why: 'einen kleinen Balkon = 一个小阳台（阳性第四格）。' },
        { type: 'listen', audio: 'Die Miete ist sechshundertfünfzig Euro warm.', q: '这句话是什么意思？', options: ['房租是650欧元，包含杂费。', '房租是650欧元，不含杂费。', '房租是560欧元。'], answer: 0, why: 'sechshundertfünfzig = 650，warm = 含杂费。' },
        { type: 'speak', de: 'Es gibt einen Tisch, einen Stuhl und ein Bett in meinem Zimmer.', zh: '我的房间里有一张桌子、一把椅子和一张床。' },
      ],
      task: { title: '今天的生活任务', desc: '用 es gibt 写 2-3 句话，描述你现在住的房间里有什么家具，比如 "In meinem Zimmer gibt es einen Schrank und ein Bett."。' }
    },
    {
      id: 'u11l2', title: '桌子在客厅里', de: 'Der Tisch steht im Wohnzimmer',
      intro: '知道房间里"有什么"之后，接下来要学会说清楚东西"在哪儿"。这一课先给你几个高频的位置短语当固定搭配用起来，还会走一遍德国人淘二手家具的日常场景——Kleinanzeigen。',
      sections: [
        {
          type: 'vocab', title: '位置动词', sub: '',
          items: [
            { de: 'stehen', zh: '站立，（家具）立着放', en: 'to stand', ex: 'Der Tisch steht im Wohnzimmer.', exZh: '桌子在客厅里。' },
            { de: 'liegen', zh: '躺，（物品）平放着', en: 'to lie', ex: 'Das Buch liegt auf dem Tisch.', exZh: '书在桌子上。' },
            { de: 'hängen', zh: '挂着', en: 'to hang', ex: 'Die Lampe hängt an der Decke.', exZh: '灯挂在天花板上。' },
            { de: 'Ecke', art: 'die', pl: 'Ecken', zh: '角落', en: 'corner', ex: 'Der Schrank steht in der Ecke.', exZh: '柜子在角落里。' },
            { de: 'Wand', art: 'die', pl: 'Wände', zh: '墙', en: 'wall', ex: 'Das Bild hängt an der Wand.', exZh: '画挂在墙上。' },
          ]
        },
        {
          type: 'vocab', title: 'Kleinanzeigen 二手交易', sub: '',
          items: [
            { de: 'Kleinanzeige', art: 'die', pl: 'Kleinanzeigen', zh: '分类广告（二手交易平台）', en: 'classified ad', ex: 'Es gibt viele Kleinanzeigen für Möbel.', exZh: '有很多卖家具的分类广告。' },
            { de: 'verkaufen', zh: '卖', en: 'to sell', ex: 'Ich verkaufe meinen Tisch.', exZh: '我要卖掉我的桌子。' },
            { de: 'kaufen', zh: '买', en: 'to buy', ex: 'Ich kaufe das Sofa für vierzig Euro.', exZh: '我花四十欧元买这张沙发。' },
            { de: 'gebraucht', zh: '二手的，用过的', en: 'used/secondhand', ex: 'Der Tisch ist gebraucht, aber gut.', exZh: '这张桌子是二手的，但很好。' },
            { de: 'neu', zh: '新的', en: 'new', ex: 'Ist das Regal neu oder gebraucht?', exZh: '这个架子是新的还是二手的？' },
            { de: 'Zustand', art: 'der', pl: 'Zustände', zh: '状况，状态', en: 'condition', ex: 'in gutem Zustand', exZh: '状况良好' },
            { de: 'günstig', zh: '划算的，便宜的', en: 'affordable', ex: 'Vierzig Euro? Das ist günstig!', exZh: '四十欧元？真划算！' },
            { de: 'abholen', zh: '取，取走', en: 'to pick up', ex: 'Kann ich den Tisch heute abholen?', exZh: '我今天能来取这张桌子吗？' },
            { de: 'Angebot', art: 'das', pl: 'Angebote', zh: '（出售）信息，报价', en: 'offer/listing', ex: 'Das Angebot ist wirklich günstig.', exZh: '这个报价真的很划算。' },
          ]
        },
        {
          type: 'dialogue', title: '二手平台淘桌子', scene: 'Wei 在 Kleinanzeigen 上看中一张二手桌子，打电话给卖家问情况、约取货时间。',
          lines: [
            { sp: 'Wei', de: 'Hallo, ich habe Ihre Anzeige gesehen. Ist der Tisch noch verfügbar?', zh: '您好，我看到您的广告了。这张桌子还在吗？' },
            { sp: 'Verkäuferin', de: 'Ja, der ist noch da! Er steht bei mir im Wohnzimmer.', zh: '在的，还在！它就放在我客厅里。' },
            { sp: 'Wei', de: 'Super. In welchem Zustand ist er? Ist er neu oder gebraucht?', zh: '太好了。它状况怎么样？是新的还是二手的？' },
            { sp: 'Verkäuferin', de: 'Er ist gebraucht, aber in einem sehr guten Zustand. Kaum Kratzer.', zh: '是二手的，但状况非常好。几乎没有划痕。' },
            { sp: 'Wei', de: 'Klingt gut. Und wie groß ist der Tisch ungefähr?', zh: '听起来不错。这张桌子大概多大？' },
            { sp: 'Verkäuferin', de: 'Er ist nicht so groß, passt gut in eine kleine Küche.', zh: '不算大，很适合放进小厨房。' },
            { sp: 'Wei', de: 'Perfekt, genau das suche ich. Was kostet er?', zh: '太好了，正是我要找的。多少钱？' },
            { sp: 'Verkäuferin', de: 'Vierzig Euro, das ist wirklich günstig für diesen Tisch.', zh: '四十欧元，这个价格对这张桌子来说真的很划算。' },
            { sp: 'Wei', de: 'Einverstanden! Kann ich ihn heute Nachmittag abholen?', zh: '好的！我今天下午能来取吗？' },
            { sp: 'Verkäuferin', de: 'Ja klar. Passt Ihnen 16 Uhr?', zh: '当然可以。您下午四点方便吗？' },
            { sp: 'Wei', de: '16 Uhr passt super. Wo genau wohnen Sie?', zh: '四点非常好。您具体住在哪儿？' },
            { sp: 'Verkäuferin', de: 'In der Karl-Liebknecht-Straße, direkt an der Ecke.', zh: '卡尔-李卜克内西大街，就在街角。' },
          ]
        },
        {
          type: 'grammar', title: 'in / auf / an：先当固定搭配用起来', sub: '为什么是 im，不是 in dem？',
          html: `<p>先看几个描述位置的真实例句：</p>
<p class="de">Der Tisch steht <mark>im</mark> Wohnzimmer. Das Buch liegt <mark>auf dem</mark> Tisch. Das Bild hängt <mark>an der</mark> Wand.</p>
<p>你可能已经注意到：<b class="de">im</b> 其实是 <b>in + dem</b> 缩合而成的——德语里介词和阳性/中性的 dem 经常会缩写在一起，类似的还有 <mark>am</mark> = an dem、<mark>ans</mark> = an das、<mark>aufs</mark> = auf das。</p>
<table><tr><th>短语</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">im Wohnzimmer</td><td>在客厅里</td><td class="hl">Der Tisch steht im Wohnzimmer.</td></tr>
<tr><td class="hl">in der Küche</td><td>在厨房里</td><td class="hl">Der Kühlschrank steht in der Küche.</td></tr>
<tr><td class="hl">auf dem Tisch</td><td>在桌子上</td><td class="hl">Die Lampe steht auf dem Tisch.</td></tr>
<tr><td class="hl">an der Wand</td><td>在墙上</td><td class="hl">Das Bild hängt an der Wand.</td></tr></table>
<p>为什么有时候是 <b>im</b>，有时候是 <b>in der</b>？这背后其实是一整套"格"的规则（Dativ）——阳性/中性名词用 dem（缩写 im/am），阴性名词用 der，规则取决于名词的性。这套完整规则会在后面的单元系统学习，<b>现在不需要弄懂"为什么"</b>，先把这几个最高频的短语当固定搭配背下来，能听懂、能说出来就够用了。</p>`
        },
        {
          type: 'grammar', title: 'stehen / liegen / hängen：三个动词怎么选', sub: '看物品的"姿态"来选动词',
          html: `<p>描述"东西在哪儿"时，德语不能只用一个"是"字打天下，而要按物品摆放的姿态选动词：</p>
<table><tr><th>动词</th><th>用于</th><th>例句</th></tr>
<tr><td class="hl">stehen</td><td>直立的物体（桌子、椅子、柜子、灯）</td><td class="hl">Der Schrank steht in der Ecke.</td></tr>
<tr><td class="hl">liegen</td><td>平放的物体（书、地毯、手机）</td><td class="hl">Das Handy liegt auf dem Bett.</td></tr>
<tr><td class="hl">hängen</td><td>悬挂的物体（画、吊灯、衣服）</td><td class="hl">Die Jacke hängt an der Tür.</td></tr></table>
<p>刚开始可能会选错动词，这很正常——多接触几个例句，"直立用 stehen、平放用 liegen、悬挂用 hängen"这种直觉会慢慢建立起来。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">在 Kleinanzeigen 上淘家具的几个实用提示：</b>价格后面常看到 <mark>VB</mark>（Verhandlungsbasis，可议价），觉得贵可以直接问 "Ist der Preis fest?"（价格能商量吗）；取货（Abholung）比邮寄（Versand）更常见，尤其是家具这类大件；见面取货时优先选人多、光线好的地方，现金支付（bar bezahlen）是德国最常见也最简单的方式。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Der Tisch steht ___ Wohnzimmer." 应该填哪个词？', options: ['im', 'in dem der', 'in'], answer: 0, why: 'im 是 in + dem 的缩合形式，用于阳性/中性名词前，Wohnzimmer 是中性名词。' },
        { type: 'cloze', zhHint: '画挂在墙上。', before: 'Das Bild hängt', after: 'der Wand.', options: ['an', 'in', 'auf'], answer: 0, why: '墙面用 an（贴附在垂直面上），die Wand 是阴性名词，an der Wand。' },
        { type: 'mcq', q: '描述"墙上挂着一幅画"，应该用哪个动词？', options: ['hängen', 'stehen', 'liegen'], answer: 0, why: '悬挂的物体用 hängen。' },
        { type: 'order', zh: '椅子在厨房里。', words: ['Der', 'Stuhl', 'steht', 'in', 'der', 'Küche'], why: 'Stuhl 是直立物体用 stehen，Küche 是阴性名词，in der Küche。' },
        { type: 'match', pairs: [['gebraucht', '二手的'], ['günstig', '划算的'], ['der Zustand', '状况'], ['abholen', '取走']] },
        { type: 'listen', audio: 'Er ist gebraucht, aber in gutem Zustand.', q: '这句话是什么意思？', options: ['它是二手的，但状况很好。', '它是全新的，状况一般。', '它已经坏了，不能用。'], answer: 0, why: 'gebraucht = 二手的，in gutem Zustand = 状况良好。' },
        { type: 'listen', audio: 'Kann ich ihn heute Nachmittag abholen?', q: '这句话在问什么？', options: ['我今天下午能来取吗？', '你今天下午在家吗？', '这个东西今天能送到吗？'], answer: 0, why: 'abholen = 取，heute Nachmittag = 今天下午。' },
        { type: 'speak', de: 'Der Tisch steht im Wohnzimmer, und die Lampe hängt an der Wand.', zh: '桌子在客厅里，灯挂在墙上。' },
      ],
      task: { title: '今天的生活任务', desc: '用 es gibt 和 in/auf/an 的固定搭配，写 3-4 句话描述自己的房间——有什么家具、大概放在哪儿，比如 "Es gibt ein Bett. Das Bett steht im Schlafzimmer."。' }
    },
  ]
};
