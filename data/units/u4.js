// 第 4 单元：日常寒暄
export default {
  id: 'u4', num: '4', color: 'blue', shape: 'tri',
  de: 'Smalltalk', zh: '日常寒暄',
  desc: '走廊里偶遇同事，电梯里两个人大眼瞪小眼——德国职场 smalltalk 的安全话题永远是天气和周末。',
  kann: [
    { de: 'Ich kann auf „Wie geht’s?“ mit verschiedenen Abstufungen antworten.', zh: '我能用不同程度的说法回答“最近怎么样”。' },
    { de: 'Ich kann nach dem Wochenende fragen und kurz davon erzählen.', zh: '我能询问周末计划，也能简单谈谈自己的周末。' },
    { de: 'Ich kann mich mit „Schönen Feierabend!“ von Kollegen verabschieden.', zh: '我能用“Schönen Feierabend!”和同事道别。' },
    { de: 'Ich kann dir und Ihnen je nach Gesprächspartner richtig verwenden.', zh: '我能根据对话对象正确使用 dir 或 Ihnen。' },
  ],
  lessons: [
    {
      id: 'u4l1', title: '最近怎么样？', de: 'Wie geht’s?',
      intro: '"Wie geht’s?" 是德语里出现频率最高的寒暄句，但怎么回答、怎么接话很有讲究。这一课学会标准应答阶梯，还有德国职场 smalltalk 最安全的三个话题：天气、周末、下班。',
      sections: [
        {
          type: 'vocab', title: '寒暄应答', sub: '',
          items: [
            { de: 'Wie geht’s?', zh: '你好吗？最近怎么样？（对 du）', en: 'How are you?', ex: 'Hallo! Wie geht’s?', exZh: '你好！最近怎么样？' },
            { de: 'Wie geht es Ihnen?', zh: '您好吗？（对 Sie，正式）', en: 'How are you? (formal)', ex: 'Guten Tag, Frau Schmidt! Wie geht es Ihnen?', exZh: '您好，施密特女士！您好吗？' },
            { de: 'Gut, danke', zh: '挺好的，谢谢', en: 'Good, thanks', ex: 'Gut, danke! Und dir?', exZh: '挺好的，谢谢！你呢？' },
            { de: 'Sehr gut', zh: '非常好', en: 'Very good', ex: 'Sehr gut, danke!', exZh: '非常好，谢谢！' },
            { de: 'Es geht', zh: '还行，一般般', en: 'So-so', ex: 'Es geht, und dir?', exZh: '还行吧，你呢？' },
            { de: 'Nicht so gut', zh: '不太好', en: 'Not so good', ex: 'Nicht so gut heute.', exZh: '今天不太好。' },
            { de: 'Und dir?', zh: '你呢？（对 du）', en: 'And you?', ex: 'Gut, und dir?', exZh: '挺好，你呢？' },
            { de: 'Und Ihnen?', zh: '您呢？（对 Sie）', en: 'And you? (formal)', ex: 'Gut, danke. Und Ihnen?', exZh: '挺好，谢谢。您呢？' },
          ]
        },
        {
          type: 'vocab', title: '天气与时间词', sub: '',
          items: [
            { de: 'Wetter', art: 'das', zh: '天气', en: 'weather', ex: 'Wie ist das Wetter heute?', exZh: '今天天气怎么样？' },
            { de: 'schön', zh: '美好的（也形容天气好）', en: 'nice/beautiful', ex: 'Das Wetter ist schön.', exZh: '天气很好。' },
            { de: 'schlecht', zh: '糟糕的', en: 'bad', ex: 'Das Wetter ist schlecht.', exZh: '天气很糟糕。' },
            { de: 'kalt', zh: '冷的', en: 'cold', ex: 'Es ist kalt heute.', exZh: '今天很冷。' },
            { de: 'warm', zh: '暖和的', en: 'warm', ex: 'Es ist warm heute.', exZh: '今天很暖和。' },
            { de: 'sonnig', zh: '晴朗的，阳光明媚的', en: 'sunny', ex: 'Heute ist es sonnig.', exZh: '今天阳光明媚。' },
            { de: 'Es regnet', zh: '在下雨', en: 'It’s raining', ex: 'Es regnet heute.', exZh: '今天在下雨。' },
            { de: 'heute', zh: '今天', en: 'today', ex: 'Ich arbeite heute.', exZh: '我今天要工作。' },
            { de: 'morgen', zh: '明天', en: 'tomorrow', ex: 'Bis morgen!', exZh: '明天见！' },
            { de: 'Wochenende', art: 'das', pl: 'Wochenenden', zh: '周末', en: 'weekend', ex: 'Was machst du am Wochenende?', exZh: '你周末打算做什么？' },
            { de: 'Feierabend', art: 'der', zh: '下班后的时间，收工', en: 'time off work', note: '德国职场文化关键词，见下方提示', ex: 'Schönen Feierabend!', exZh: '祝你愉快下班！' },
            { de: 'müde', zh: '累的，困的', en: 'tired', ex: 'Ich bin ein bisschen müde.', exZh: '我有点累。' },
            { de: 'Bis Montag!', zh: '周一见！', en: 'See you Monday!', ex: 'Tschüss, bis Montag!', exZh: '再见，周一见！' },
            { de: 'Schönes Wochenende!', zh: '周末愉快！', en: 'Have a nice weekend!', ex: 'Schönes Wochenende, Anna!', exZh: '周末愉快，Anna！' },
          ]
        },
        {
          type: 'dialogue', title: '走廊里的偶遇', scene: '周五下午，Wei 在研究所走廊里偶遇 Anna。',
          lines: [
            { sp: 'Anna', de: 'Hallo Wei! Wie geht’s?', zh: '你好 Wei！最近怎么样？' },
            { sp: 'Wei', de: 'Ganz gut, danke! Und dir?', zh: '挺好的，谢谢！你呢？' },
            { sp: 'Anna', de: 'Es geht. Ich bin ein bisschen müde.', zh: '还行吧。我有点累。' },
            { sp: 'Anna', de: 'Schönes Wetter heute, oder?', zh: '今天天气不错，对吧？' },
            { sp: 'Wei', de: 'Ja, sehr sonnig! Endlich warm.', zh: '是啊，很晴朗！终于暖和了。' },
            { sp: 'Anna', de: 'Was machst du am Wochenende?', zh: '你周末打算做什么？' },
            { sp: 'Wei', de: 'Vielleicht Fahrrad fahren, wenn das Wetter so bleibt.', zh: '如果天气一直这样，可能去骑自行车。' },
            { sp: 'Anna', de: 'Klingt schön! Schönes Wochenende, Wei!', zh: '听起来不错！周末愉快，Wei！' },
            { sp: 'Wei', de: 'Danke, dir auch! Bis Montag!', zh: '谢谢，你也是！周一见！' },
          ]
        },
        {
          type: 'grammar', title: 'Wie geht’s 的回答阶梯', sub: '从最好到最差，五个档位',
          html: `<table><tr><th>回答</th><th>程度</th></tr>
<tr><td class="hl">Super! / Ausgezeichnet!</td><td>好极了</td></tr>
<tr><td class="hl">Sehr gut, danke.</td><td>非常好</td></tr>
<tr><td class="hl">Gut, danke.</td><td>挺好（最常见、最安全的回答）</td></tr>
<tr><td class="hl">Es geht.</td><td>还行，一般般</td></tr>
<tr><td class="hl">Nicht so gut.</td><td>不太好</td></tr></table>
<p>德国日常寒暄里，<b>Gut, danke, und dir/Ihnen?</b> 几乎是标准答案——真实情绪很少会在走廊里详细展开，回一句"挺好，你呢"然后把问题抛回去，就是最自然的社交礼仪。</p>`
        },
        {
          type: 'grammar', title: 'dir（你）与 Ihnen（您）对应关系', sub: '和 du/Sie 是同一套逻辑',
          html: `<table><tr><th>称呼</th><th>"你呢/您呢"</th><th>场合</th></tr>
<tr><td class="hl">du</td><td class="hl">Und dir?</td><td>朋友、同龄同事</td></tr>
<tr><td class="hl">Sie</td><td class="hl">Und Ihnen?</td><td>教授、长辈、陌生人、正式场合</td></tr></table>
<p>规律很简单：先看对方用什么称呼你——du 还是 Sie，把问题原样抛回去时也用同一套（dir 对应 du，Ihnen 对应 Sie）。混用是最常见的初学者错误之一。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">德国职场 smalltalk 三大安全牌：</b>天气、周末计划、假期。下班时说一句 <mark>Schönen Feierabend!</mark>（祝你愉快下班）是标准礼貌用语，几乎每个同事离开办公室前都会说。<b>薪水、宗教、政治</b>是公认的敏感话题，初次接触的同事之间最好避开——哪怕关系已经不错，也很少主动聊这些。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '同事随口问 Wie geht’s? 最安全、最常见的回答是？', options: ['Gut, danke, und dir?', '详细说出今天遇到的所有烦恼', '沉默不回答'], answer: 0, why: '德国日常寒暄回一句"挺好，你呢"是标准礼仪，把问题抛回去。' },
        { type: 'cloze', zhHint: '您好吗？（对教授，正式）', before: 'Wie geht es', after: '?', options: ['Ihnen', 'dir', 'du'], answer: 0, why: '对 Sie 用 Ihnen 提问，dir 只对应 du。' },
        { type: 'mcq', q: '"Es geht." 大概是什么程度？', options: ['一般般，还行', '非常好', '很糟糕'], answer: 0, why: 'Es geht 在"好"和"不好"之间，是中性、留有余地的回答。' },
        { type: 'order', zh: '今天天气不错，对吧？', words: ['Schönes', 'Wetter', 'heute', 'oder'], why: '德语口语里常在句尾加 oder 表示"对吧/是不是"，寻求认同。' },
        { type: 'match', pairs: [['der Feierabend', '下班时间'], ['das Wochenende', '周末'], ['müde', '累的'], ['sonnig', '晴朗的']] },
        { type: 'listen', audio: 'Was machst du am Wochenende?', q: '这句话是什么意思？', options: ['你周末打算做什么？', '你今天做了什么？', '你累不累？'], answer: 0, why: 'was = 什么，am Wochenende = 在周末，问的是周末计划。' },
        { type: 'listen', audio: 'Schönen Feierabend!', q: '这句话是什么意思？', options: ['祝你愉快下班！', '祝你周末愉快！', '明天见！'], answer: 0, why: 'Feierabend 专指"下班后的时光"，这是同事间下班时的标准道别语。' },
        { type: 'speak', de: 'Gut, danke. Und dir?', zh: '挺好的，谢谢。你呢？' },
      ],
      task: { title: '今天的生活任务', desc: '今天下班离开时，对一位同事说一句 "Schönen Feierabend!"；如果有人问你 Wie geht’s，练习用 "Gut, danke, und dir?" 回应并把话题抛回去。' }
    },
  ]
};
