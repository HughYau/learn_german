// 第 25 单元：意见表达
export default {
  id: 'u25', num: '25', color: 'blue', shape: 'square',
  de: 'Meine Meinung', zh: '意见表达',
  desc: '"你怎么看？"——这个单元教你像德国人一样说出自己的立场：观点词汇、weil/dass 从句实战、间接疑问句，还有形容词词尾变化的第二步：不定冠词后。',
  kann: [
    { de: 'Ich kann meine Meinung zu einem Thema mit weil und dass begründen.', zh: '我能用 weil 和 dass 从句说明我对某个话题的观点和理由。' },
    { de: 'Ich kann eine indirekte Frage (ob/W-Wort) in einen Satz einbauen.', zh: '我能把一个间接疑问句（ob 或疑问词引导）嵌入到句子里。' },
    { de: 'Ich kann nach einem unbestimmten Artikel die Adjektivendung richtig anhängen (ein neuer Kollege).', zh: '我能在不定冠词后正确使用形容词词尾（如 ein neuer Kollege）。' },
  ],
  lessons: [
    {
      id: 'u25l1', title: '在家办公还是去办公室', de: 'Homeoffice oder Büro?',
      intro: 'Anna 和 Wei 在办公室聊起"在家办公到底好不好"——这一课学怎么说出自己的观点、给出理由（weil/dass 从句综合实战），还学会把一个问题"塞"进句子里的间接疑问句：Ich weiß nicht, ob... / Sie fragt, wann...',
      sections: [
        {
          type: 'vocab', title: '表达观点', sub: '',
          items: [
            { de: 'Meinung', art: 'die', pl: 'Meinungen', zh: '意见，看法', en: 'opinion', ex: 'Das ist nur meine Meinung.', exZh: '这只是我的看法。' },
            { de: 'meiner Meinung nach', zh: '依我看，我认为', en: 'in my opinion', ex: 'Meiner Meinung nach ist das eine gute Idee.', exZh: '依我看，这是个好主意。' },
            { de: 'finden', zh: '认为，觉得（表达观点）', en: 'to think/find (an opinion)', ex: 'Ich finde, dass er recht hat.', exZh: '我觉得他说得对。', note: '和 u11 学的"finden=找到"是同一个词，靠上下文区分意思' },
            { de: 'glauben', zh: '相信，认为', en: 'to believe/think', ex: 'Ich glaube, dass es morgen regnet.', exZh: '我觉得明天会下雨。' },
          ]
        },
        {
          type: 'vocab', title: '优缺点与论证', sub: '',
          items: [
            { de: 'Vorteil', art: 'der', pl: 'Vorteile', zh: '优点，好处', en: 'advantage', ex: 'Homeoffice hat viele Vorteile.', exZh: '居家办公有很多优点。' },
            { de: 'Nachteil', art: 'der', pl: 'Nachteile', zh: '缺点，坏处', en: 'disadvantage', ex: 'Der größte Nachteil ist die Isolation.', exZh: '最大的缺点是孤立感。' },
            { de: 'Argument', art: 'das', pl: 'Argumente', zh: '论据，理由', en: 'argument', ex: 'Das ist ein starkes Argument.', exZh: '这是个有力的论据。' },
          ]
        },
        {
          type: 'vocab', title: '赞成与反对', sub: '',
          items: [
            { de: 'zustimmen', zh: '同意（某人）', en: 'to agree (with sb.)', ex: 'Ich stimme dir zu.', exZh: '我同意你的看法。', note: '可分动词，+ Dativ 的人，呼应 u19/u21 的 Dativ 人称代词' },
            { de: 'dafür sein / dagegen sein', zh: '赞成/反对', en: 'to be for / against (it)', ex: 'Ich bin dafür, aber sie ist dagegen.', exZh: '我赞成，但她反对。' },
            { de: 'überzeugen', zh: '说服，使信服', en: 'to convince', ex: 'Das Argument überzeugt mich nicht.', exZh: '这个论据没能说服我。' },
          ]
        },
        {
          type: 'dialogue', title: '在家办公还是去办公室', scene: '办公室里，Anna 和 Wei 讨论"在家办公还是来办公室更好"，两人各有各的理由，还聊到该怎么跟老板提。',
          lines: [
            { sp: 'Anna', de: 'Wei, was hältst du eigentlich von Homeoffice?', zh: 'Wei，你对居家办公到底怎么看？' },
            { sp: 'Wei', de: 'Meiner Meinung nach ist Homeoffice super, weil ich zu Hause konzentrierter arbeite.', zh: '依我看，居家办公特别好，因为我在家更能专注工作。' },
            { sp: 'Anna', de: 'Wirklich? Ich finde, dass das Büro auch viele Vorteile hat.', zh: '真的吗？我倒觉得办公室也有很多优点。' },
            { sp: 'Wei', de: 'Zum Beispiel?', zh: '比如呢？' },
            { sp: 'Anna', de: 'Zum Beispiel den direkten Kontakt mit Kollegen. Das ist ein großer Vorteil.', zh: '比如和同事的直接接触。这是个很大的优点。' },
            { sp: 'Wei', de: 'Stimmt, das ist ein Argument, das mich überzeugt. Aber der Nachteil vom Büro ist der lange Arbeitsweg.', zh: '说得对，这个论据说服了我。不过办公室的缺点是通勤时间长。' },
            { sp: 'Anna', de: 'Da stimme ich dir zu. Ich weiß nicht, ob wir uns je einig werden.', zh: '这点我同意你。我不知道我们能不能达成一致。' },
            { sp: 'Wei', de: 'Vielleicht ist ein Kompromiss am besten – zwei Tage Büro, drei Tage Homeoffice.', zh: '也许折中方案最好——两天办公室，三天居家办公。' },
            { sp: 'Anna', de: 'Das klingt gut. Ich frage mich nur, ob der Chef damit einverstanden ist.', zh: '听起来不错。我就是不知道老板是否同意。' },
            { sp: 'Wei', de: 'Frag ihn doch einfach, wann er Zeit für ein Gespräch hat.', zh: '那你直接问问他什么时候有空谈谈吧。' },
            { sp: 'Anna', de: 'Gute Idee, das mache ich morgen.', zh: '好主意，我明天就去问。' },
            { sp: 'Wei', de: 'Ich bin gespannt, was er dazu sagt!', zh: '我很好奇他会怎么说！' },
          ]
        },
        {
          type: 'grammar', title: 'weil/dass 从句：从"给理由"到"说观点"', sub: '综合实战，V-letzt 规则完全一样',
          html: `<p>u18 学过 <b class="de">weil</b>（因为），u20 学过 <b class="de">dass</b>（表示"……这件事"）——两个从句结构长得不一样，但语序规则完全相同：<b>变位动词都要踢到从句最后（V-letzt）</b>。表达观点时最常见的组合是"finden/glauben/denken + dass"：</p>
<table><tr><th>用途</th><th>例句</th></tr>
<tr><td>给理由（weil）</td><td class="hl">Homeoffice ist super, weil ich konzentrierter arbeite.</td></tr>
<tr><td>说观点（finden, dass）</td><td class="hl">Ich finde, dass das Büro auch Vorteile hat.</td></tr>
<tr><td>说观点（glauben, dass）</td><td class="hl">Ich glaube, dass wir einen Kompromiss brauchen.</td></tr></table>
<p>提醒一下常见结构：<mark>Ich finde/glaube/denke, dass...</mark> 是表达个人观点最万能的开头，逗号后面立刻是 dass 从句，动词照旧垫底。</p>`
        },
        {
          type: 'grammar', title: '间接疑问句：把问题"塞"进句子里', sub: 'ob（是非）和 W-词两类，动词都到最后',
          html: `<p>想说"我不知道……是不是……"或者"她问……什么时候……"，需要把一个完整的问句"塞"进另一个句子里，这就是<b class="de">间接疑问句</b>。规则分两种情况：</p>
<table><tr><th>类型</th><th>直接问句</th><th>间接问句</th></tr>
<tr><td class="hl">是非问句（无疑问词）</td><td>Ist der Chef einverstanden?</td><td class="hl">Ich weiß nicht, <mark>ob</mark> der Chef einverstanden ist.</td></tr>
<tr><td class="hl">是非问句</td><td>Werden wir uns einig?</td><td class="hl">Ich weiß nicht, <mark>ob</mark> wir uns einig werden.</td></tr>
<tr><td class="hl">W-疑问句（wann）</td><td>Wann hat er Zeit?</td><td class="hl">Frag ihn, <mark>wann</mark> er Zeit hat.</td></tr>
<tr><td class="hl">W-疑问句（was）</td><td>Was sagt er dazu?</td><td class="hl">Ich bin gespannt, <mark>was</mark> er dazu sagt.</td></tr></table>
<p>规律：<b>能用"是/不是"回答的问句（没有疑问词）用 ob 引导</b>；<b>本来就带疑问词的问句（wann/wo/warum/wie/was...）直接用同一个疑问词当连接词</b>，不需要额外加什么。两种情况共同复现 weil/dass 学过的 V-letzt——原来问句里提到句首/第二位的动词，塞进间接问句后统统要挪到从句最后。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">吵不起来的德语辩论技巧：</b>德国职场文化鼓励直接表达不同意见，但有一套缓冲礼貌语——先说 <mark>Das verstehe ich, aber...</mark>（这我理解，但是……）或 <mark>Einerseits..., andererseits...</mark>（一方面……另一方面……）承认对方观点合理，再说出自己的看法，比直接说"Nein, das stimmt nicht"（不，这不对）更容易让讨论保持友好。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"meiner Meinung nach" 是什么意思？', options: ['依我看，我认为', '我完全不同意', '顺便一提'], answer: 0, why: 'meiner Meinung nach = 依我看/我认为，用来引出自己的观点。' },
        { type: 'cloze', zhHint: '我觉得他说得对。', before: 'Ich finde,', after: 'er recht hat.', options: ['dass', 'ob', 'weil'], answer: 0, why: '"Ich finde, dass..." 用 dass 从句表达"我认为……"。' },
        { type: 'cloze', zhHint: '我不知道我们是否能达成一致。', before: 'Ich weiß nicht,', after: 'wir uns einig werden.', options: ['ob', 'dass', 'wann'], answer: 0, why: '没有疑问词的间接问句（能用是/不是回答）用 ob 引导。' },
        { type: 'mcq', q: '"zustimmen" 这个动词后面应该接哪个格？', options: ['Dativ（同意某人）', 'Akkusativ', 'Genitiv'], answer: 0, why: 'zustimmen + Dativ，比如 "Ich stimme dir zu."' },
        { type: 'order', zh: '那你直接问问他什么时候有空。', words: ['Frag', 'ihn', 'doch', 'wann', 'er', 'Zeit', 'hat'], why: 'wann 引导的间接疑问句，动词 hat 要放到从句最后。' },
        { type: 'match', pairs: [['der Vorteil', '优点'], ['der Nachteil', '缺点'], ['das Argument', '论据'], ['überzeugen', '说服']] },
        { type: 'listen', audio: 'Ich frage mich, ob der Chef damit einverstanden ist.', q: '这句话是什么意思？', options: ['我不知道老板是否同意这件事。', '老板已经同意了。', '老板从不参与讨论。'], answer: 0, why: 'ob der Chef einverstanden ist = 老板是否同意（间接疑问句）。' },
        { type: 'speak', de: 'Meiner Meinung nach hat Homeoffice viele Vorteile, aber ich weiß nicht, ob mein Chef zustimmt.', zh: '依我看居家办公有很多优点，但我不知道我的老板是否同意。' },
      ],
      task: { title: '今天的生活任务', desc: '就一个身边话题（比如"周末该不该加班"）写一段 5 句左右的观点小短文，至少用一次 weil、一次 dass、一次 ob 引导的间接疑问句。' }
    },
    {
      id: 'u25l2', title: '我们需要一位新同事', de: 'Wir brauchen einen neuen Kollegen',
      intro: 'Jonas 有个好主意——他觉得团队该招一位新同事，两人讨论起这个提议。这一课学 Adjektivdeklination 第二步：不定冠词后的形容词词尾，和 u24 的定冠词版本一对比，规律其实很好理解。',
      sections: [
        {
          type: 'vocab', title: '想法与方案', sub: '',
          items: [
            { de: 'Idee', art: 'die', pl: 'Ideen', zh: '主意，想法', en: 'idea', ex: 'Das ist eine gute Idee.', exZh: '这是个好主意。' },
            { de: 'Lösung', art: 'die', pl: 'Lösungen', zh: '解决方案，办法', en: 'solution', ex: 'Wir brauchen eine schnelle Lösung.', exZh: '我们需要一个快速的解决方案。' },
            { de: 'Kompromiss', art: 'der', pl: 'Kompromisse', zh: '折中方案，妥协', en: 'compromise', ex: 'Das ist ein guter Kompromiss.', exZh: '这是个不错的折中方案。' },
          ]
        },
        {
          type: 'vocab', title: '形容词：不定冠词词尾练习', sub: '',
          items: [
            { de: 'wichtig', zh: '重要的', en: 'important', ex: 'Das ist ein wichtiges Thema.', exZh: '这是个重要的话题。' },
            { de: 'interessant', zh: '有趣的，有意思的', en: 'interesting', ex: 'Er hat ein interessantes Projekt.', exZh: '他有个有趣的项目。' },
            { de: 'Thema', art: 'das', pl: 'Themen', zh: '话题，主题', en: 'topic', ex: 'Das ist ein wichtiges Thema für uns alle.', exZh: '这对我们所有人都是个重要话题。' },
          ]
        },
        {
          type: 'dialogue', title: '我们需要一位新同事', scene: 'Jonas 有个好主意——他觉得团队需要招一位新同事，他和 Wei 讨论这个提议，顺带聊到该找什么样的人。',
          lines: [
            { sp: 'Jonas', de: 'Wei, ich habe eine gute Idee für unser Team.', zh: 'Wei，我对我们团队有个好主意。' },
            { sp: 'Wei', de: 'Erzähl mal! Ich bin gespannt.', zh: '说说看！我很好奇。' },
            { sp: 'Jonas', de: 'Wir brauchen einen neuen Kollegen für das Marketing-Team.', zh: '我们市场部需要招一位新同事。' },
            { sp: 'Wei', de: 'Das ist wirklich ein wichtiges Thema. Wen schlägst du vor?', zh: '这确实是个重要的话题。你有什么人选吗？' },
            { sp: 'Jonas', de: 'Ich kenne einen erfahrenen Kollegen aus meinem alten Job.', zh: '我认识一位以前工作时的资深同事。' },
            { sp: 'Wei', de: 'Klingt gut! Ein neuer Kollege bringt bestimmt frischen Wind ins Team.', zh: '听起来不错！一位新同事肯定能给团队带来新气象。' },
            { sp: 'Jonas', de: 'Genau! Hast du mit einer guten Freundin schon darüber gesprochen?', zh: '没错！你有没有跟哪位好朋友聊过这事？' },
            { sp: 'Wei', de: 'Ja, sie meint auch, das wäre eine gute Lösung.', zh: '聊过，她也觉得这是个好办法。' },
            { sp: 'Jonas', de: 'Und was sagt der Chef zu einem neuen Kollegen im Team?', zh: '那老板对团队招一位新同事怎么看？' },
            { sp: 'Wei', de: 'Ich habe noch nicht mit ihm gesprochen, aber ich schreibe ihm eine kurze E-Mail.', zh: '我还没跟他说，不过我会给他写封短邮件。' },
            { sp: 'Jonas', de: 'Gute Idee! Das ist wirklich ein interessantes Projekt für uns alle.', zh: '好主意！这对我们所有人来说都是个有意思的项目。' },
            { sp: 'Wei', de: 'Stimmt, mit einem neuen Kollegen wird die Arbeit leichter.', zh: '没错，有了新同事，工作会轻松一些。' },
          ]
        },
        {
          type: 'grammar', title: '不定冠词后的形容词词尾', sub: 'ein/eine/ein + 形容词 + 名词',
          html: `<p>对话里的形容词短语全用不定冠词开头，词尾和 u24 学的定冠词版本不完全一样：</p>
<table><tr><th>格</th><th>阳性 ein</th><th>阴性 eine</th><th>中性 ein</th><th>复数 keine</th></tr>
<tr><td>Nominativ</td><td class="hl">ein neuer Kollege</td><td class="hl">eine gute Idee</td><td class="hl">ein wichtiges Thema</td><td class="hl">keine neuen Kollegen</td></tr>
<tr><td>Akkusativ</td><td class="hl">einen neuen Kollegen</td><td class="hl">eine gute Idee</td><td class="hl">ein wichtiges Thema</td><td class="hl">keine neuen Kollegen</td></tr>
<tr><td>Dativ</td><td class="hl">einem neuen Kollegen</td><td class="hl">einer guten Idee</td><td class="hl">einem wichtigen Thema</td><td class="hl">keinen neuen Kollegen</td></tr></table>
<p>只看词尾：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nom</td><td class="hl">-er</td><td class="hl">-e</td><td class="hl">-es</td><td class="hl">-en</td></tr>
<tr><td>Akk</td><td class="hl">-en</td><td class="hl">-e</td><td class="hl">-es</td><td class="hl">-en</td></tr>
<tr><td>Dat</td><td class="hl">-en</td><td class="hl">-en</td><td class="hl">-en</td><td class="hl">-en</td></tr></table>
<p>（复数没有 ein，只能用 kein/mein 等同类词打头，规律和它们完全一样。）</p>`
        },
        {
          type: 'grammar', title: '和定冠词版本的区别：不标性别，形容词来标', sub: '为什么阳性/中性的 Nominativ 不一样',
          html: `<p>对比 u24 学的定冠词表，唯一的差别集中在 <b>Nominativ 阳性（-er 而不是 -e）</b> 和 <b>Nominativ/Akkusativ 中性（-es 而不是 -e）</b> 这两处。原因很直接：</p>
<p><b class="de">der/die/das</b> 一看就知道名词的性别；但 <b class="de">ein</b> 本身不标性别——<mark>ein Mann</mark> 和 <mark>ein Auto</mark> 用的是同一个词 ein，光看冠词猜不出后面是阳性还是中性。这时候<b>形容词就要替冠词把性别标出来</b>：阳性 Nominativ 用 <mark>-er</mark>（模仿 der 的 r），中性用 <mark>-es</mark>（模仿 das 的 s）。阴性 <mark>eine</mark> 和 die 一样已经带着 e，形容词就不用额外操心，照常用 -e。</p>
<p>除了这两个格子，<b>其余部分（Akkusativ 阳性、全部 Dativ、全部复数）和定冠词版本完全一样，都是 -en</b>——这部分不用重新记，直接沿用 u24 学过的规律就行。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">一句话记住 Teil 1 和 Teil 2 的区别：</b>"冠词标好了性别，形容词就偷懒用 -e；冠词没标性别（ein），形容词就得自己扛起来（-er/-es）。" 这条逻辑在 u27 学无冠词时还会再用一次，现在先把这两步的对比印在脑子里。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '不定冠词 ein 后面阳性名词 Nominativ 的形容词词尾是？', options: ['-er', '-e', '-en'], answer: 0, why: 'ein 没有标出阳性，形容词要用 -er 替它标（模仿 der 的 r）。' },
        { type: 'cloze', zhHint: '我们市场部需要招一位新同事。（Akkusativ 阳性）', before: 'Wir brauchen einen', after: 'Kollegen.', options: ['neuen', 'neuer', 'neue'], answer: 0, why: 'Akkusativ 阳性：einen 后形容词词尾是 -en，和定冠词版本一致。' },
        { type: 'cloze', zhHint: '这确实是个重要的话题。（Nominativ 中性）', before: 'Das ist wirklich ein', after: 'Thema.', options: ['wichtiges', 'wichtige', 'wichtiger'], answer: 0, why: '不定冠词 ein 后中性 Nominativ 形容词词尾是 -es，替 ein 标出中性。' },
        { type: 'mcq', q: '"eine gute Idee" 在 Dativ 格会变成？', options: ['einer guten Idee', 'einem guten Idee', 'eine guten Idee'], answer: 0, why: '阴性 Dativ 冠词 eine→einer，形容词词尾统一变成 -en。' },
        { type: 'order', zh: '有了新同事，工作会轻松一些。', words: ['Mit', 'einem', 'neuen', 'Kollegen', 'wird', 'die', 'Arbeit', 'leichter'], why: 'mit + Dativ，阳性 Dativ 形容词词尾是 -en；变位动词 wird 站主句第二位。' },
        { type: 'match', pairs: [['die Idee', '主意，想法'], ['die Lösung', '解决方案'], ['der Kompromiss', '折中方案'], ['das Thema', '话题']] },
        { type: 'listen', audio: 'Ein neuer Kollege bringt bestimmt frischen Wind ins Team.', q: '这句话是什么意思？', options: ['一位新同事肯定能给团队带来新气象。', '团队不需要任何新同事。', '新同事让团队的工作变难了。'], answer: 0, why: 'ein neuer Kollege = 一位新同事（Nominativ 阳性 -er），frischen Wind bringen = 带来新气象。' },
        { type: 'speak', de: 'Ich kenne einen erfahrenen Kollegen, das wäre eine gute Lösung für unser Team.', zh: '我认识一位有经验的同事，这对我们团队会是个好办法。' },
      ],
      task: { title: '今天的生活任务', desc: '用"不定冠词+形容词+名词"的组合写 3 句话，描述一个（真实或虚构的）新想法、新同事或新项目，注意阳性 Nominativ 用 -er、中性用 -es 这条特殊规则。' }
    },
  ]
};
