// 第 0 单元：发音基石
export default {
  id: 'u0', num: '0', color: 'blue', shape: 'circle',
  de: 'Aussprache', zh: '发音基石',
  desc: '德语发音规则性极强——学会规则后，任何单词看到就能读。这是后面一切的地基。',
  kann: [
    { de: 'Ich kann deutsche Wörter nach den Ausspracheregeln (lange/kurze Vokale, ie/ei) laut vorlesen.', zh: '我能按发音规则（长短元音、ie/ei）朗读德语单词。' },
    { de: 'Ich kann ä, ö und ü korrekt aussprechen.', zh: '我能正确读出 ä、ö、ü。' },
    { de: 'Ich kann typische Stolperlaute wie w, v, z, sch, ch und st-/sp- richtig aussprechen.', zh: '我能正确读出 w、v、z、sch、ch、st-/sp- 这些容易读错的音。' },
    { de: 'Ich kann den Satz „Ich spreche ein bisschen Deutsch.“ verständlich sagen.', zh: '我能清楚地说出“我会说一点德语”。' },
  ],
  lessons: [
    {
      id: 'u0l1', title: '元音：德语的骨架', de: 'Vokale',
      intro: '好消息：德语不像英语，它的拼写和发音几乎一一对应。这一课掌握元音和几个固定组合，你就能读出 80% 的德语单词。每个词都点▶听一听，跟着读出声。',
      sections: [
        {
          type: 'grammar', title: '基础元音 a e i o u', sub: '和拼音很像，分长短音',
          html: `<p>德语元音有<mark>长音</mark>和<mark>短音</mark>之分。规则很简单：</p>
<ul>
<li>元音后面只跟<b>一个辅音</b>，或后面跟 <b>h</b> → 读<b>长音</b>：N<mark>a</mark>me、w<mark>oh</mark>nen、B<mark>ah</mark>n</li>
<li>元音后面跟<b>两个及以上辅音</b> → 读<b>短音</b>：k<mark>o</mark>mmen、b<mark>i</mark>tte、St<mark>a</mark>dt</li>
<li><b>ie</b> 永远读长音 [iː]，像拼音的"衣"拉长：L<mark>ie</mark>be、s<mark>ie</mark>ben、B<mark>ie</mark>r</li>
</ul>`
        },
        {
          type: 'vocab', title: '长短音对比', sub: '点▶仔细听区别，这是德国人分辨词义的关键',
          items: [
            { de: 'Miete', zh: '房租（长 i）', en: 'rent', ex: 'Die Miete ist hoch.', exZh: '房租很高。' },
            { de: 'Mitte', zh: '中间（短 i）', en: 'middle', ex: 'in der Mitte', exZh: '在中间' },
            { de: 'Ofen', zh: '烤箱（长 o）', en: 'oven', ex: 'Der Ofen ist heiß.', exZh: '烤箱很烫。' },
            { de: 'offen', zh: '开着的（短 o）', en: 'open', ex: 'Die Tür ist offen.', exZh: '门开着。' },
            { de: 'Staat', zh: '国家（长 a）', en: 'state/country', ex: 'Das ist ein Staat.', exZh: '这是一个国家。' },
            { de: 'Stadt', zh: '城市（短 a）', en: 'city', ex: 'Leipzig ist eine schöne Stadt.', exZh: '莱比锡是座美丽的城市。' },
          ]
        },
        {
          type: 'grammar', title: '变元音 ä ö ü', sub: '头上两个点，嘴型变一变',
          html: `<table><tr><th>字母</th><th>发音要领</th><th>例词</th></tr>
<tr><td class="hl">ä</td><td>类似"哎"，接近拼音 ê</td><td class="hl">Käse（奶酪）、spät（晚）</td></tr>
<tr><td class="hl">ö</td><td>先发"欸"，嘴唇拢圆保持不动</td><td class="hl">schön（美）、hören（听）</td></tr>
<tr><td class="hl">ü</td><td>就是拼音的 ü！"鱼"的音</td><td class="hl">fünf（5）、Tschüss（再见）</td></tr></table>
<p>中文母语者的隐藏优势：<mark>ü 对你毫无难度</mark>——这是很多英语母语者练几年都发不好的音。</p>`
        },
        {
          type: 'vocab', title: '双元音组合', sub: '四个固定组合，见到就这么读，永不例外',
          items: [
            { de: 'nein', zh: '不（ei 读"艾"）', en: 'no', ex: 'Nein, danke.', exZh: '不，谢谢。' },
            { de: 'Wein', zh: '葡萄酒（ei 读"艾"）', en: 'wine', ex: 'Ein Wein, bitte.', exZh: '请来一杯红酒。' },
            { de: 'sieben', zh: '7（ie 读长"衣"）', en: 'seven', ex: 'Sieben Tage die Woche.', exZh: '一周七天。' },
            { de: 'Haus', zh: '房子（au 读"奥"）', en: 'house', ex: 'Das ist ein Haus.', exZh: '这是一座房子。' },
            { de: 'kaufen', zh: '买（au 读"奥"）', en: 'to buy', ex: 'Brot kaufen.', exZh: '买面包。' },
            { de: 'neun', zh: '9（eu 读"欧伊"）', en: 'nine', ex: 'Neun, zehn, elf.', exZh: '九，十，十一。' },
            { de: 'Deutsch', zh: '德语（eu 读"欧伊"）', en: 'German', ex: 'Das ist Deutsch.', exZh: '这是德语。' },
          ]
        },
        {
          type: 'tip',
          html: '<b class="t">最容易混的一对：</b> <b>ei</b> 读"艾"（nein 奈因），<b>ie</b> 读长"衣"（Bier 逼尔）。记法：读<b>后面那个字母</b>的音——ei 读 i 的字母音"艾"，ie 读 e 的…算了，就记住 <b>Wein（葡萄酒）</b>和 <b>Wien（维也纳）</b>不是一个地方。'
        },
      ],
      exercises: [
        { type: 'listen', audio: 'Miete', q: '你听到的是哪个词？', options: ['Miete（房租，长音 i）', 'Mitte（中间，短音 i）'], answer: 0, why: 'Miete 的 ie 是拉长的"衣——"，Mitte 的 i 又短又急。' },
        { type: 'mcq', q: '字母组合 ie 发什么音？', options: ['永远是长音"衣"[iː]', '"艾"[ai]', '分开读 i-e'], answer: 0, why: 'ie 永远读长音 [iː]：sieben、Bier、Liebe。和 ei（读"艾"）正好相反。' },
        { type: 'mcq', q: 'Wein（葡萄酒）里的 ei 读作？', options: ['"艾" [ai]', '长音"衣"', '"欸-衣"分开读'], answer: 0, why: 'ei 永远读 [ai]："艾"。Wein 读作"vain"。' },
        { type: 'listen', audio: 'neun', q: '你听到的是哪个词？', options: ['neun（9，"诺伊恩"）', 'nein（不，"奈因"）'], answer: 0, why: 'eu 读"欧伊"，ei 读"艾"。neun ≈ 诺因，nein ≈ 奈因。' },
        { type: 'match', pairs: [['ei', '读"艾"（nein）'], ['ie', '长音"衣"（Bier）'], ['au', '读"奥"（Haus）'], ['eu', '读"欧伊"（neun）']] },
        { type: 'mcq', q: 'ü 的发音对中文母语者来说……', options: ['就是拼音 ü，"鱼"的音', '需要苦练多年', '和 u 一样'], answer: 0, why: '德语 ü = 拼音 ü。fünf 读"分夫"但嘴型是"鱼"。这是你的先天优势！' },
        { type: 'speak', de: 'Tschüss!', zh: '再见！（日常口语版）' },
      ],
      task: { title: '今天的生活任务', desc: '今天出门时，找 3 个你看到的德语单词（店招、路牌、包装），按今天学的规则读出声。读错没关系——规则意识比正确更重要。' }
    },
    {
      id: 'u0l2', title: '辅音：几个坑与几条铁律', de: 'Konsonanten',
      intro: '德语辅音大部分和英语一样，但有几个"长得像英语、读法完全不同"的坑。避开它们，你的发音立刻超过大多数初学者。',
      sections: [
        {
          type: 'grammar', title: '五大铁律', sub: '出场频率最高的规则',
          html: `<table><tr><th>规则</th><th>读法</th><th>例词</th></tr>
<tr><td class="hl">w</td><td>读英语的 v！</td><td class="hl">Wasser（水）、Wein</td></tr>
<tr><td class="hl">v</td><td>读 f</td><td class="hl">vier（4）、viel（多）</td></tr>
<tr><td class="hl">z</td><td>读"茨" [ts]</td><td class="hl">zehn（10）、zahlen（付钱）</td></tr>
<tr><td class="hl">s + 元音</td><td>读浊音 [z]，像蜜蜂嗡嗡</td><td class="hl">Sonne（太阳）、sieben</td></tr>
<tr><td class="hl">sch</td><td>读"什" [ʃ]</td><td class="hl">Schule（学校）、schön</td></tr></table>
<p>所以 <b>Wasser</b> 读"瓦瑟"不是"哇瑟"，<b>vier</b> 读"菲尔"不是"维尔"。</p>`
        },
        {
          type: 'grammar', title: '词首 st- / sp- 和两种 ch', sub: '德语腔的灵魂',
          html: `<ul>
<li>词首的 <b>st-</b> 读 <mark>scht-</mark>，<b>sp-</b> 读 <mark>schp-</mark>：<b>St</b>raße（什特拉瑟）、<b>sp</b>rechen（什普雷兴）</li>
<li><b>ch</b> 在 a/o/u 之后 → 喉咙里的<mark>硬音 [x]</mark>，像轻咳：Bu<b>ch</b>（书）、a<b>ch</b>t（8）、au<b>ch</b>（也）</li>
<li><b>ch</b> 在 e/i/ä/ö/ü 之后 → <mark>软音 [ç]</mark>，像"嘘"人时的"嘻"：i<b>ch</b>（我）、ni<b>ch</b>t（不）</li>
<li>词尾 <b>-ig</b> 也读软音 [ç]：zwanz<b>ig</b>（20）、bill<b>ig</b>（便宜）</li>
</ul>`
        },
        {
          type: 'grammar', title: '词尾清化 & 小 r', sub: '',
          html: `<ul>
<li>词尾的 <b>b/d/g</b> 变清音 <b>p/t/k</b>：Ta<b>g</b>（读"塔克"）、un<b>d</b>（读"温特"）、gel<b>b</b>（读"该尔普"）</li>
<li>词尾的 <b>-er</b> 读成轻轻的"啊"：Wass<b>er</b>（瓦萨）、Lehr<b>er</b>（雷拉）</li>
<li><b>r</b> 在元音前是小舌音（喉咙深处轻漱口的感觉）。发不出？先用喉音"喝"代替，完全不影响交流。</li>
<li><b>ß</b> 就是 ss，读清音 s：hei<b>ß</b>en（叫）、Stra<b>ß</b>e</li>
</ul>`
        },
        {
          type: 'vocab', title: '发音练习词', sub: '每个都点▶跟读两遍',
          items: [
            { de: 'Wasser', zh: '水', en: 'water', ex: 'Ein Wasser, bitte.', exZh: '请来一杯水。' },
            { de: 'vier', zh: '4（v 读 f）', en: 'four', ex: 'Vier Brötchen, bitte.', exZh: '请给我四个小面包。' },
            { de: 'zahlen', zh: '付钱（z 读"茨"）', en: 'to pay', ex: 'Zahlen, bitte!', exZh: '买单！' },
            { de: 'sprechen', zh: '说（sp 读 schp）', en: 'to speak', ex: 'Ich spreche Deutsch.', exZh: '我说德语。' },
            { de: 'ich', zh: '我（软 ch）', en: 'I', ex: 'Ich bin hier.', exZh: '我在这儿。' },
            { de: 'Buch', zh: '书（硬 ch）', en: 'book', ex: 'Das ist ein Buch.', exZh: '这是一本书。' },
            { de: 'zwanzig', zh: '20（-ig 读"伊嘻"）', en: 'twenty', ex: 'Ich bin zwanzig.', exZh: '我二十岁。' },
            { de: 'Straße', zh: '街道', en: 'street', ex: 'Die Straße ist laut.', exZh: '这条街很吵。' },
          ]
        },
        {
          type: 'tip',
          html: '<b class="t">别怕小舌音 r。</b>德国南部很多人也发得含糊，柏林人经常直接吞掉。发音里真正影响理解的是 <b>w/v、长短音、ei/ie</b>——把这几个练准，r 随缘即可。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'Wasser（水）的 W 发什么音？', options: ['英语的 v 音', '英语的 w 音', 'f 音'], answer: 0, why: '德语 w = 英语 v。Wasser 读"瓦瑟"，Wein 读"vain"。' },
        { type: 'mcq', q: 'vier（4）的 v 读什么？', options: ['f 音，读"菲尔"', 'v 音，读"维尔"', 'w 音'], answer: 0, why: '德语本土词里 v 读 f：vier、viel、Vater。' },
        { type: 'listen', audio: 'Buch', q: '这个词里的 ch 是哪种音？', options: ['硬音 [x]（因为在 u 后面）', '软音 [ç]'], answer: 0, why: 'ch 在 a/o/u 后读硬音（Buch、acht、auch），在 e/i 后读软音（ich、nicht）。' },
        { type: 'mcq', q: 'Straße 开头的 St 读作？', options: ['scht-（"什特"）', 'st-（和英语一样）', 's-t 分开'], answer: 0, why: '词首 st-/sp- 一律读 scht-/schp-。Straße = "什特拉瑟"。' },
        { type: 'mcq', q: 'Tag（白天）词尾的 g 读什么？', options: ['[k]，读"塔克"', '[g]，读"塔格"', '不发音'], answer: 0, why: '词尾 b/d/g 一律清化为 p/t/k。Guten Tag = "古腾塔克"。' },
        { type: 'match', pairs: [['z', '"茨" [ts]（zehn）'], ['sch', '"什" [ʃ]（Schule）'], ['s+元音', '浊音 [z]（Sonne）'], ['-ig 词尾', '"伊嘻" [ç]（zwanzig）']] },
        { type: 'speak', de: 'Ich spreche ein bisschen Deutsch.', zh: '我会说一点德语。（这句以后天天用得上）' },
      ],
      task: { title: '今天的生活任务', desc: '打开本课的跟读题，把 "Ich spreche ein bisschen Deutsch" 练到语音识别能听懂为止。这句话是你未来三个月的保命句。' }
    },
  ]
};
