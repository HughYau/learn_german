// 第 5 单元：听懂周围
export default {
  id: 'u5', num: '5', color: 'red', shape: 'square',
  de: 'Hör mal!', zh: '听懂周围',
  desc: '电车报站、店员突然一句快语速——这个单元不追求听懂每个字，教你听力生存策略。',
  kann: [
    { de: 'Ich kann Durchsagen in Bus und Bahn die wichtigsten Infos (Station, Umsteigen, Verspätung) entnehmen.', zh: '我能从车厢广播中听出关键信息（站名、换乘、晚点）。' },
    { de: 'Ich kann höflich nachfragen, wenn ich etwas nicht verstanden habe („Wie bitte?“).', zh: '我能在没听懂时礼貌地请对方重复一遍。' },
    { de: 'Ich kann bei schnellen Fragen von Verkäufern die Kernaussage erfassen, auch ohne jedes Wort zu verstehen.', zh: '我能在没听懂每个字的情况下，抓住店员提问的大意。' },
  ],
  lessons: [
    {
      id: 'u5l1', title: '车站广播与店员提问', de: 'Durchsagen verstehen',
      intro: '真实生活里的德语永远比课本快、比课本含糊。这一课不追求字字听懂，而是给你一套"听力生存策略"：抓关键词、认地名数字、听不懂就问。莱比锡的 LVB 电车，就是你每天的免费听力课。',
      sections: [
        {
          type: 'vocab', title: '救命短语', sub: '听不懂时，这几句比硬猜有用得多',
          items: [
            { de: 'Wie bitte?', zh: '您说什么？（没听清，请对方重复）', en: 'Sorry, what?', ex: 'Wie bitte? Ich verstehe nicht.', exZh: '您说什么？我没听懂。' },
            { de: 'Können Sie das bitte wiederholen?', zh: '您能再说一遍吗？', en: 'Could you repeat that, please?', ex: 'Entschuldigung, können Sie das bitte wiederholen?', exZh: '不好意思，您能再说一遍吗？' },
            { de: 'Langsamer, bitte', zh: '请说慢一点', en: 'Slower, please', ex: 'Wie bitte? Langsamer, bitte.', exZh: '您说什么？请说慢一点。' },
            { de: 'Ich verstehe nicht', zh: '我没听懂，我不明白', en: 'I don’t understand', ex: 'Entschuldigung, ich verstehe nicht.', exZh: '不好意思，我没听懂。' },
            { de: 'Ich spreche nur ein bisschen Deutsch', zh: '我只会说一点点德语', en: 'I only speak a little German', ex: 'Entschuldigung, ich spreche nur ein bisschen Deutsch.', exZh: '不好意思，我只会说一点点德语。' },
            { de: 'Sprechen Sie Englisch?', zh: '您会说英语吗？', en: 'Do you speak English?', ex: 'Entschuldigung, sprechen Sie Englisch?', exZh: '不好意思，您会说英语吗？' },
            { de: 'Kein Problem', zh: '没问题', en: 'No problem', ex: 'Kein Problem, danke!', exZh: '没问题，谢谢！' },
            { de: 'Moment, bitte', zh: '请稍等', en: 'One moment, please', ex: 'Einen Moment, bitte!', exZh: '请稍等一下！' },
          ]
        },
        {
          type: 'vocab', title: '交通与广播词', sub: '',
          items: [
            { de: 'Haltestelle', art: 'die', pl: 'Haltestellen', zh: '（公交/电车）站', en: 'stop', ex: 'Die Haltestelle ist da vorne.', exZh: '车站就在前面。' },
            { de: 'Hauptbahnhof', art: 'der', pl: 'Hauptbahnhöfe', zh: '中央火车站', en: 'main station', ex: 'Das ist der Hauptbahnhof.', exZh: '这就是中央火车站。' },
            { de: 'Straßenbahn', art: 'die', pl: 'Straßenbahnen', zh: '有轨电车', en: 'tram', ex: 'Die Straßenbahn kommt.', exZh: '电车来了。' },
            { de: 'Bus', art: 'der', pl: 'Busse', zh: '公交车', en: 'bus', ex: 'Der Bus hat Verspätung.', exZh: '这趟公交车晚点了。' },
            { de: 'Linie', art: 'die', pl: 'Linien', zh: '线路', en: 'line', ex: 'Ich nehme die Linie drei.', exZh: '我坐3路。' },
            { de: 'umsteigen', zh: '换乘', en: 'to change/transfer', ex: 'Hier müssen Sie umsteigen.', exZh: '您需要在这里换乘。' },
            { de: 'Verspätung', art: 'die', pl: 'Verspätungen', zh: '晚点，延误', en: 'delay', ex: 'Der Bus hat zehn Minuten Verspätung.', exZh: '这趟车晚点十分钟。' },
            { de: 'fällt aus', zh: '（班次）取消', en: 'is cancelled', note: '原形是 ausfallen，广播里常用这个变位形式', ex: 'Der Bus fällt aus.', exZh: '这趟车取消了。' },
            { de: 'Nächste Haltestelle: ...', zh: '下一站是……', en: 'Next stop: ...', ex: 'Nächste Haltestelle: Hauptbahnhof.', exZh: '下一站：中央火车站。' },
            { de: 'Zurückbleiben, bitte!', zh: '请退后！（车门关闭前的提示）', en: 'Stand back, please!', ex: 'Türen schließen. Zurückbleiben, bitte!', exZh: '车门关闭，请退后！' },
          ]
        },
        {
          type: 'grammar', title: '听力生存策略', sub: '不需要听懂每个字，也能应付日常场景',
          html: `<ul>
<li><b>抓关键词，不求全懂：</b>车站广播、店员提问语速快、句子长，但真正有用的信息往往只是<mark>数字、地名、线路号</mark>。抓住这几个词，句子结构听不懂也没关系。</li>
<li><b>数字和地名优先：</b>听广播时先竖起耳朵等站名和线路号出现，其余的"下一站是""开往……方向"都是固定套话，听多了会自动识别。</li>
<li><b>听不懂就问，没人会介意：</b>一句 <mark>Wie bitte?</mark> 或 <mark>Können Sie das bitte wiederholen?</mark> 永远好过硬猜——德国人对外国人说德语这件事本身就很友善，愿意放慢速度重复的人比你想的多。</li>
<li><b>LVB 报站格式固定：</b>莱比锡电车公司 LVB 的报站几乎每次都是同一个模板，见下方提示。摸清格式后，你的通勤时间就是免费的听力课。</li>
</ul>`
        },
        {
          type: 'tip',
          html: '<b class="t">LVB 电车报站的固定公式：</b>«<mark>Nächste Haltestelle: X.</mark> Umsteigen zu den Linien Y.»——先报下一站名 X，再报可换乘的线路号 Y。格式永远不变，只有 X 和 Y 在变。每天上下班坐几站电车，反复听同一个模板，几周后自然就能条件反射听懂站名。'
        },
      ],
      exercises: [
        { type: 'listen', audio: 'Nächste Haltestelle: Hauptbahnhof. Umsteigen zu den Linien eins und vier.', q: '这段广播在说什么？', options: ['下一站是中央火车站，可换乘1路和4路', '列车晚点了', '这一站要收费'], answer: 0, why: '固定公式 Nächste Haltestelle + 换乘线路，是 LVB 报站的标准模板。' },
        { type: 'listen', audio: 'Zurückbleiben, bitte!', q: '听到这句话，你应该做什么？', options: ['退后，车门要关了', '往前走，车要进站了', '这是在叫你的名字'], answer: 0, why: 'Zurückbleiben, bitte! 是车门关闭前提醒乘客离车门远一点的标准提示。' },
        { type: 'listen', audio: 'Die Linie drei hat zehn Minuten Verspätung.', q: '这句话是什么意思？', options: ['3路线晚点10分钟', '3路线取消了', '3路线提前10分钟到'], answer: 0, why: 'Verspätung = 晚点，前面的数字 + Minuten 是晚点时长。' },
        { type: 'listen', audio: 'Haben Sie eine Payback-Karte?', q: '店员在问什么？', options: ['您有会员积分卡吗？', '您要付现金吗？', '您需要袋子吗？'], answer: 0, why: 'Payback 是德国常见的连锁积分卡系统，店员结账时常问。' },
        { type: 'mcq', q: '广播说得太快听不懂时，最好的做法是？', options: ['先抓数字和地名，其余靠猜', '假装听懂，随便下车', '立刻紧张放弃'], answer: 0, why: '听力生存策略：不求全懂，抓关键信息词。' },
        { type: 'cloze', zhHint: '您能再说一遍吗？', before: 'Können Sie das bitte', after: '?', options: ['wiederholen', 'sprechen', 'verstehen'], answer: 0, why: 'wiederholen = 重复，是这句请求重复的关键动词。' },
        { type: 'match', pairs: [['die Haltestelle', '车站'], ['umsteigen', '换乘'], ['die Verspätung', '晚点'], ['Wie bitte?', '您说什么？']] },
        { type: 'speak', de: 'Entschuldigung, können Sie das bitte wiederholen? Ich spreche nur ein bisschen Deutsch.', zh: '不好意思，您能再说一遍吗？我只会说一点点德语。' },
      ],
      task: { title: '今天的生活任务', desc: '坐一次 LVB 电车，专心听一次报站广播，试着抓住站名和换乘线路号。如果店员或路人说得太快，勇敢说一句 "Wie bitte?"——今天至少用一次。' }
    },
  ]
};
