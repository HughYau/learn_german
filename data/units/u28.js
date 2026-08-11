// 第 28 单元：求职与职业叙事
export default {
  id: 'u28', num: '28', color: 'blue', shape: 'circle',
  de: 'Bewerbung und Berufsweg', zh: '求职与职业叙事',
  desc: 'Phase 5 开篇单元：把求职信和模拟面试变成练习场——系统学会书面语的过去式（Präteritum），还有正式文体"藏起动作发出者"的两个信号（名词化、被动倾向）。',
  kann: [
    { de: 'Ich kann in einem Bewerbungsschreiben mit Präteritum über meinen Werdegang erzählen.', zh: '我能在求职信里用书面语过去式讲述自己的经历。' },
    { de: 'Ich kann in einem simulierten Vorstellungsgespräch von meinem beruflichen Werdegang erzählen.', zh: '我能在模拟面试中讲述自己的职业经历。' },
    { de: 'Ich kann Nominalisierung und Passivkonstruktionen in formellen Texten erkennen.', zh: '我能识别正式文本里的名词化和被动结构。' },
  ],
  lessons: [
    {
      id: 'u28l1', title: '写一封求职信', de: 'Das Bewerbungsschreiben',
      intro: 'Wei 发现一则很适合自己的招聘广告，想写一封求职信申请。这一课学求职相关词汇，还有 Präteritum（过去式）的系统化——书面语讲过去的事几乎只用这套时态，读求职信、简历、公司简介都用得上。',
      sections: [
        {
          type: 'vocab', title: '求职核心词汇', sub: '',
          items: [
            { de: 'Bewerbung', art: 'die', pl: 'Bewerbungen', zh: '求职申请', en: 'job application', ex: 'Ich schreibe gerade meine Bewerbung.', exZh: '我正在写我的求职申请。' },
            { de: 'Bewerbungsschreiben', art: 'das', pl: 'Bewerbungsschreiben', zh: '求职信', en: 'cover letter', ex: 'Das Bewerbungsschreiben sollte nicht länger als eine Seite sein.', exZh: '求职信不应该超过一页。', note: '复数不变' },
            { de: 'Stellenanzeige', art: 'die', pl: 'Stellenanzeigen', zh: '招聘广告', en: 'job posting', ex: 'Ich habe eine interessante Stellenanzeige gefunden.', exZh: '我找到了一则有意思的招聘广告。' },
            { de: 'Arbeitgeber / die Arbeitgeberin', art: 'der', pl: 'Arbeitgeber/Arbeitgeberinnen', zh: '雇主', en: 'employer', ex: 'Mein zukünftiger Arbeitgeber legt Wert auf Teamarbeit.', exZh: '我未来的雇主很看重团队合作。' },
            { de: 'sich bewerben um', zh: '申请（某职位）', en: 'to apply for', ex: 'Ich bewerbe mich um die Stelle als Laborleiterin.', exZh: '我在申请实验室主管这个职位。', note: '反身动词：sich bewerben um + Akkusativ' },
            { de: 'Berufserfahrung', art: 'die', zh: '工作经验', en: 'professional experience', ex: 'Sie bringt fünf Jahre Berufserfahrung mit.', exZh: '她带来了五年的工作经验。', note: '通常不用复数' },
          ]
        },
        {
          type: 'vocab', title: '资质与条件', sub: '',
          items: [
            { de: 'Qualifikation', art: 'die', pl: 'Qualifikationen', zh: '资质，资历', en: 'qualification', ex: 'Sie hat die passenden Qualifikationen für die Stelle.', exZh: '她具备这个职位所需的资质。' },
            { de: 'Fähigkeit', art: 'die', pl: 'Fähigkeiten', zh: '能力', en: 'skill, ability', ex: 'Teamarbeit ist eine wichtige Fähigkeit.', exZh: '团队合作是一项重要能力。' },
            { de: 'Stärke', art: 'die', pl: 'Stärken', zh: '优点，强项', en: 'strength', ex: 'Meine größte Stärke ist meine Sorgfalt.', exZh: '我最大的优点是细致认真。' },
            { de: 'Schwäche', art: 'die', pl: 'Schwächen', zh: '缺点，弱项', en: 'weakness', ex: 'Und Ihre Schwäche? Ich bin manchmal zu ungeduldig.', exZh: '那您的缺点呢？我有时候太没耐心了。' },
            { de: 'Gehalt', art: 'das', pl: 'Gehälter', zh: '薪水', en: 'salary', ex: 'Das Gehalt hängt von der Berufserfahrung ab.', exZh: '薪水取决于工作经验。' },
          ]
        },
        {
          type: 'dialogue', title: '我要不要申请这份工作？', scene: 'Wei 发现一则很适合自己的招聘广告，和 Anna 讨论要不要申请，顺便聊起求职信该怎么写。',
          lines: [
            { sp: 'Wei', de: 'Anna, schau mal, ich habe hier eine Stellenanzeige gefunden – Laborleiterin am Max-Planck-Institut.', zh: 'Anna，你看，我找到一个招聘广告——马普所的实验室主管职位。' },
            { sp: 'Anna', de: 'Oh, das klingt spannend! Passt die Stelle zu deiner Qualifikation?', zh: '哦，听起来很有意思！这个职位跟你的资质匹配吗？' },
            { sp: 'Wei', de: 'Ich glaube schon. Sie suchen Berufserfahrung im Projektmanagement, und die habe ich ja.', zh: '我觉得挺匹配的。他们要求有项目管理的工作经验，这个我正好有。' },
            { sp: 'Anna', de: 'Und was ist mit deinen Stärken? Was würdest du im Bewerbungsschreiben nennen?', zh: '那你的优点呢？你会在求职信里写什么？' },
            { sp: 'Wei', de: 'Ich bin sehr sorgfältig und arbeite gern im Team. Meine Schwäche ist wahrscheinlich, dass ich manchmal zu perfektionistisch bin.', zh: '我很细致认真，也喜欢团队合作。我的缺点大概是有时候太追求完美了。' },
            { sp: 'Anna', de: 'Das ist eigentlich keine schlechte Antwort. Willst du dich wirklich bewerben?', zh: '这其实是个不错的回答。你真的想申请吗？' },
            { sp: 'Wei', de: 'Ja, ich glaube, ich sollte es versuchen. Der Arbeitgeber klingt außerdem sehr modern.', zh: '是的，我觉得应该试一试。而且这个雇主听起来也很现代化。' },
            { sp: 'Anna', de: 'Dann schreib doch heute Abend noch das Bewerbungsschreiben.', zh: '那你今晚就把求职信写了吧。' },
            { sp: 'Wei', de: 'Gute Idee. Ich fange am besten mit dem Werdegang an – wo ich anfing und wie ich hierhergekommen bin.', zh: '好主意。我最好从职业道路讲起——我是从哪里开始的，又是怎么走到这一步的。' },
            { sp: 'Anna', de: 'Genau, und schreib ruhig im Präteritum, das klingt professioneller als im Perfekt.', zh: '没错，你就大胆用 Präteritum 写，这听起来比 Perfekt 更专业。' },
            { sp: 'Wei', de: 'Stimmt, das habe ich in Lebensläufen schon oft gesehen: "Ich begann...", "Ich arbeitete...".', zh: '对，我在简历里经常看到这种写法："我开始了……"、"我工作了……"。' },
            { sp: 'Anna', de: 'Viel Erfolg! Ich bin gespannt, ob du zum Vorstellungsgespräch eingeladen wirst.', zh: '祝你好运！我很好奇你会不会被邀请去面试。' },
          ]
        },
        {
          type: 'grammar', title: '书面语的过去式：Präteritum 系统化', sub: '口语说 Perfekt，书面读 Präteritum',
          html: `<p>u12 学过 <mark>war/hatte</mark>，u20 学过情态动词的 Präteritum（<mark>konnte/musste</mark>...）——现在把这套系统补完整。口语德语讲故事几乎只用 Perfekt（<span class="de">ich habe gemacht</span>），但书面语——求职信、简历、新闻、小说——几乎只用 Präteritum（<span class="de">ich machte</span>）。这一课的目标不是"背会所有动词的 Präteritum"，而是先练成"读到就认得出"，再挑几个求职场景最常用的词学会主动使用。</p>
<p><b class="t">规则动词（schwach）：词干 + te + 人称词尾</b></p>
<table><tr><th>人称</th><th>machen</th><th>arbeiten（词干以 -t 结尾，插入 -e-）</th></tr>
<tr><td class="hl">ich</td><td class="hl">machte</td><td class="hl">arbeitete</td></tr>
<tr><td class="hl">du</td><td class="hl">machtest</td><td class="hl">arbeitetest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">machte</td><td class="hl">arbeitete</td></tr>
<tr><td class="hl">wir</td><td class="hl">machten</td><td class="hl">arbeiteten</td></tr></table>
<p><b class="t">强变化动词（stark）：词干元音变化，先练"读懂"</b></p>
<table><tr><th>原形</th><th>Präteritum（ich/er）</th><th>中文</th></tr>
<tr><td>kommen</td><td class="hl">kam</td><td>来</td></tr>
<tr><td>bekommen</td><td class="hl">bekam</td><td>得到</td></tr>
<tr><td>gehen</td><td class="hl">ging</td><td>去</td></tr>
<tr><td>sehen</td><td class="hl">sah</td><td>看见</td></tr>
<tr><td>sprechen</td><td class="hl">sprach</td><td>说</td></tr>
<tr><td>finden</td><td class="hl">fand</td><td>找到，觉得</td></tr>
<tr><td>geben</td><td class="hl">gab</td><td>给</td></tr>
<tr><td>nehmen</td><td class="hl">nahm</td><td>拿</td></tr>
<tr><td>schreiben</td><td class="hl">schrieb</td><td>写</td></tr>
<tr><td>beginnen</td><td class="hl">begann</td><td>开始</td></tr>
<tr><td>bleiben</td><td class="hl">blieb</td><td>留下</td></tr>
<tr><td>werden</td><td class="hl">wurde</td><td>变成</td></tr></table>
<p>这 12 个词先做到"看见就认得出中文意思"就够了。其中 <mark>bekam、machte、arbeitete、begann、wurde</mark> 这五个和职业叙事关系最大，这一课要求能主动拼出来、用进句子里。</p>`
        },
        {
          type: 'grammar', title: '求职信范文：一段 Präteritum 叙事', sub: '正式书面语里过去式怎么用',
          html: `<p class="de">Sehr geehrte Damen und Herren,<br>mit großem Interesse habe ich Ihre Stellenanzeige für die Position als Laborleiterin gelesen. Nach meinem Studienabschluss <mark>begann</mark> ich meine Karriere als wissenschaftliche Mitarbeiterin an der Universität Leipzig. Dort <mark>arbeitete</mark> ich drei Jahre lang in einem internationalen Forschungsteam. Im Jahr 2023 <mark>bekam</mark> ich die Möglichkeit, an einem größeren Institut zu forschen, und wechselte dorthin. Während dieser Zeit <mark>machte</mark> ich wichtige Erfahrungen im Projektmanagement und sprach regelmäßig auf internationalen Konferenzen. Nach zwei Jahren <mark>wurde</mark> ich schließlich Teamleiterin und war für vier Kolleginnen und Kollegen verantwortlich. Meine Kollegen schätzten meine Sorgfalt und meine Fähigkeit, auch unter Zeitdruck ruhig zu bleiben. Aus diesem Grund bewerbe ich mich nun bei Ihnen: Ich bin überzeugt, dass meine Qualifikationen gut zu der ausgeschriebenen Stelle passen. Über die Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen.<br>Mit freundlichen Grüßen<br>Wei Zhang</p>
<p>大意：怀着极大兴趣读到这则招聘广告……本科毕业后<b>开始</b>在莱比锡大学做科研助理，<b>工作</b>了三年，后来<b>得到</b>机会去更大的研究所，在那里<b>积累</b>了项目管理经验，两年后<b>成为</b>了组长……读这类范文时不用每个动词都查清楚变位规则，能靠上下文猜出大意（"我……开始了……""我……工作了……"）就是这一课的达标线。文中标记的五个词（begann/arbeitete/bekam/machte/wurde）就是这一课要求主动会用的。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">求职信小贴士：</b>不知道收信人姓名时用 <mark>Sehr geehrte Damen und Herren</mark>（对应 u15 学过的 Sehr geehrte/r + 姓名，这是不知道具体是谁时的万能开头）；正文一般不超过一页，讲清楚"为什么申请""我有什么资质""期待被邀请面试"三件事就够了。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '德国人日常口语讲过去的事，通常用哪种时态？', options: ['Perfekt（ich habe gemacht）', 'Präteritum（ich machte）', 'Präsens（ich mache）'], answer: 0, why: '口语德语讲故事几乎只用 Perfekt；Präteritum 主要活在书面语（求职信、简历、新闻）里。' },
        { type: 'cloze', zhHint: '大学毕业后，我开始了我的科研助理职业生涯。（Präteritum, beginnen, ich）', before: 'Nach meinem Studienabschluss', after: 'ich meine Karriere als wissenschaftliche Mitarbeiterin.', options: ['begann', 'beginne', 'habe begonnen'], answer: 0, why: '书面叙事用 Präteritum，beginnen 的 Präteritum（ich/er）是 begann。' },
        { type: 'cloze', zhHint: '我在一个国际科研团队里工作了三年。（Präteritum, arbeiten, ich）', before: 'Dort', after: 'ich drei Jahre lang in einem internationalen Team.', options: ['arbeitete', 'arbeitet', 'arbeitede'], answer: 0, why: 'arbeiten 词干以 -t 结尾，Präteritum 要插入 -e-：arbeitete，不是 arbeitde。' },
        { type: 'mcq', q: 'bekam 是哪个动词的 Präteritum？', options: ['bekommen（得到）', 'kommen（来）', 'beginnen（开始）'], answer: 0, why: 'bekommen 是 kommen 加前缀构成的动词，变位方式跟着 kommen 走：kam → bekam。' },
        { type: 'order', zh: '两年后我最终成为了团队负责人。', words: ['Nach', 'zwei', 'Jahren', 'wurde', 'ich', 'schließlich', 'Teamleiterin'], why: 'Nach zwei Jahren 占第一位，变位动词 wurde 紧跟第二位（倒装），主语 ich 挪到动词后面。' },
        { type: 'match', pairs: [['die Bewerbung', '求职申请'], ['die Stellenanzeige', '招聘广告'], ['sich bewerben um', '申请（某职位）'], ['die Qualifikation', '资质，资历']] },
        { type: 'listen', audio: 'Ich habe hier eine Stellenanzeige gefunden – Laborleiterin am Max-Planck-Institut.', q: '这句话是什么意思？', options: ['我这儿找到一个招聘广告——马普所的实验室主管职位。', '我已经被马普所录用了。', '我正在马普所工作。'], answer: 0, why: 'eine Stellenanzeige gefunden = 找到一则招聘广告，后面是同位语说明具体职位。' },
        { type: 'speak', de: 'Ich bewerbe mich um die Stelle, weil meine Qualifikationen gut passen.', zh: '我申请这个职位，因为我的资质很匹配。' },
      ],
      task: { title: '今天的生活任务', desc: '如果正在/未来会求职，用今天学的框架写一段真实的求职信开头段；否则把 u24 写过的经历简介挑 2-3 句改写成 Präteritum 书面语版本，用上 begann/arbeitete/bekam/wurde 中至少两个。' }
    },
    {
      id: 'u28l2', title: '模拟面试', de: 'Das Vorstellungsgespräch',
      intro: 'Wei 收到了面试邀请！面试官问："Erzählen Sie von Ihrem Werdegang."（请讲讲您的职业经历。）这一课学面试问答的核心句型，还有第一次感知正式文体"更冷静"的两个信号——名词化和被动倾向，只需要认得出，完整的被动态系统留到 u31。',
      sections: [
        {
          type: 'vocab', title: '面试与雇佣关系', sub: '',
          items: [
            { de: 'Vorstellungstermin', art: 'der', pl: 'Vorstellungstermine', zh: '面试预约时间', en: 'interview appointment', ex: 'Der Vorstellungstermin ist am Donnerstag um zehn Uhr.', exZh: '面试预约在周四十点。' },
            { de: 'einstellen', zh: '雇佣，录用', en: 'to hire', ex: 'Die Firma hat letztes Jahr zehn neue Leute eingestellt.', exZh: '这家公司去年录用了十个新人。', note: '可分动词，Perfekt: eingestellt' },
            { de: 'kündigen', zh: '辞职；解雇（某人）', en: 'to quit; to terminate', ex: 'Sie hat ihre alte Stelle gekündigt.', exZh: '她辞去了原来的工作。', note: '自己辞职：kündigen；解雇某人：jemandem kündigen（+Dativ）' },
            { de: 'befristet', zh: '有固定期限的', en: 'fixed-term', ex: 'Der Vertrag ist zunächst auf ein Jahr befristet.', exZh: '合同最初签一年，有期限。' },
            { de: 'unbefristet', zh: '无固定期限的', en: 'permanent (contract)', ex: 'Nach der Probezeit wird die Stelle unbefristet.', exZh: '试用期之后这个职位就变成无固定期限的了。' },
          ]
        },
        {
          type: 'vocab', title: '说服与沟通', sub: '',
          items: [
            { de: 'überzeugen', zh: '说服，让……信服', en: 'to convince', ex: 'Ich möchte den Arbeitgeber von meinen Fähigkeiten überzeugen.', exZh: '我想让雇主相信我的能力。' },
            { de: 'Motivation', art: 'die', zh: '动机，积极性', en: 'motivation', ex: 'Bitte erklären Sie kurz Ihre Motivation.', exZh: '请简要说明您的求职动机。' },
            { de: 'verantwortlich sein für', zh: '对……负责', en: 'to be responsible for', ex: 'In meiner letzten Stelle war ich für das Team verantwortlich.', exZh: '在我上一份工作里我负责这个团队。' },
            { de: 'Referenz', art: 'die', pl: 'Referenzen', zh: '推荐人，证明', en: 'reference', ex: 'Ich kann Ihnen gerne eine Referenz nennen.', exZh: '我很乐意给您提供一个推荐人。' },
            { de: 'Gehaltsvorstellung', art: 'die', pl: 'Gehaltsvorstellungen', zh: '期望薪资', en: 'salary expectation', ex: 'Bitte nennen Sie Ihre Gehaltsvorstellung.', exZh: '请说明您的期望薪资。' },
          ]
        },
        {
          type: 'dialogue', title: '模拟面试', scene: 'Wei 参加视频面试，面试官问起职业经历，Wei 用 Präteritum 连贯讲述。',
          lines: [
            { sp: 'Personalerin', de: 'Guten Tag, Frau Zhang. Schön, dass Sie Zeit gefunden haben.', zh: '您好，Zhang 女士。很高兴您抽出时间来。' },
            { sp: 'Wei', de: 'Guten Tag, ich freue mich sehr über die Einladung.', zh: '您好，非常感谢邀请我来面试。' },
            { sp: 'Personalerin', de: 'Erzählen Sie doch bitte kurz von Ihrem Werdegang.', zh: '请您简单讲讲您的职业经历。' },
            { sp: 'Wei', de: 'Gerne. Nach meinem Studienabschluss begann ich als wissenschaftliche Mitarbeiterin an der Universität Leipzig.', zh: '好的。本科毕业后，我在莱比锡大学开始做科研助理。' },
            { sp: 'Personalerin', de: 'Und wie ging es danach weiter?', zh: '之后的发展是怎样的？' },
            { sp: 'Wei', de: 'Dort arbeitete ich drei Jahre in einem internationalen Team und übernahm nach und nach mehr Verantwortung.', zh: '我在那里的一个国际团队工作了三年，逐渐承担了更多责任。' },
            { sp: 'Personalerin', de: 'Welche Aufgaben waren das genau?', zh: '具体是哪些任务呢？' },
            { sp: 'Wei', de: 'Ich war unter anderem für ein Projekt zur Proteinanalyse verantwortlich und sprach auf zwei internationalen Konferenzen darüber.', zh: '我曾负责一个蛋白质分析项目，并在两次国际会议上做过报告。' },
            { sp: 'Personalerin', de: 'Beeindruckend. Was würden Sie als Ihre größte Stärke bezeichnen?', zh: '令人印象深刻。您认为自己最大的优点是什么？' },
            { sp: 'Wei', de: 'Ich denke, meine Sorgfalt und meine Fähigkeit, auch bei Zeitdruck ruhig zu bleiben.', zh: '我想是我的细致认真，还有即使在时间压力下也能保持冷静的能力。' },
            { sp: 'Personalerin', de: 'Und wo sehen Sie noch Entwicklungsbedarf?', zh: '那您觉得自己还有哪些需要提升的地方？' },
            { sp: 'Wei', de: 'Ich könnte sicher noch selbstbewusster präsentieren, aber daran arbeite ich aktiv.', zh: '我做报告时其实可以更自信一些，不过我正在积极改进这一点。' },
            { sp: 'Personalerin', de: 'Das ist eine ehrliche Antwort. Haben Sie noch Fragen an uns?', zh: '这是个很诚实的回答。您还有什么想问我们的吗？' },
            { sp: 'Wei', de: 'Ja, wie sieht die Gehaltsvorstellung für diese Position ungefähr aus? Und wäre die Stelle unbefristet?', zh: '有的，这个职位大概的薪资范围是怎样的？还有这个职位是无固定期限的吗？' },
          ]
        },
        {
          type: 'grammar', title: '面试问答的核心句框', sub: '五个高频动词的完整人称变位',
          html: `<p>"Erzählen Sie von Ihrem Werdegang" 是德国面试里最常见的开场问题，回答时会反复用到上一课的五个高频 Präteritum 动词。这里把它们的完整人称变位放在一起：</p>
<table><tr><th>人称</th><th>machen</th><th>arbeiten</th><th>beginnen</th><th>bekommen</th><th>werden</th></tr>
<tr><td class="hl">ich</td><td class="hl">machte</td><td class="hl">arbeitete</td><td class="hl">begann</td><td class="hl">bekam</td><td class="hl">wurde</td></tr>
<tr><td class="hl">du</td><td class="hl">machtest</td><td class="hl">arbeitetest</td><td class="hl">begannst</td><td class="hl">bekamst</td><td class="hl">wurdest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">machte</td><td class="hl">arbeitete</td><td class="hl">begann</td><td class="hl">bekam</td><td class="hl">wurde</td></tr>
<tr><td class="hl">wir</td><td class="hl">machten</td><td class="hl">arbeiteten</td><td class="hl">begannen</td><td class="hl">bekamen</td><td class="hl">wurden</td></tr></table>
<p>面试里回答时 Perfekt 和 Präteritum 混用很自然：<span class="de">Ich habe drei Jahre <mark>gearbeitet</mark> und <mark>begann</mark> danach ein neues Projekt.</span>——不必每句都刻意改成 Präteritum，能自然地混着说反而更像真实场景。</p>`
        },
        {
          type: 'grammar', title: '正式文体的两个信号：名词化与被动倾向', sub: '只需要认得出，不用会写',
          html: `<p>读求职信、公司简介或新闻这类正式书面语时，会发现德语更喜欢把动词"打包"成名词，或者干脆隐藏"谁做的"，只说"发生了什么"。这一课只要求<b>认出</b>这两种现象，完整的被动态系统留到 u31 系统学习。</p>
<p><b class="t">名词化（Nominalisierung）：动词变成名词</b></p>
<table><tr><th>口语说法（动词）</th><th>书面说法（名词化）</th></tr>
<tr><td class="hl">Ich habe das Projekt geleitet.</td><td class="hl">Ich war für die <mark>Leitung</mark> des Projekts verantwortlich.</td></tr>
<tr><td class="hl">Wir haben die Ergebnisse präsentiert.</td><td class="hl">Es folgte die <mark>Präsentation</mark> der Ergebnisse.</td></tr></table>
<p><b class="t">被动倾向（Passiv-Tendenz）：谁做的不重要，事情本身才是重点</b></p>
<table><tr><th>口语说法（主动态）</th><th>书面说法（被动态，先只认读）</th></tr>
<tr><td class="hl">Man hat mich zur Teamleiterin ernannt.</td><td class="hl">Ich <mark>wurde</mark> zur Teamleiterin <mark>ernannt</mark>.</td></tr></table>
<p>看到这类句子时不用慌——先找主语和那个"藏起来的动作"是谁做的，往往能猜出大意。这套被动态的完整变位规则，u31 会系统教。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">面试小贴士：</b>德国面试常见问题："Erzählen Sie von Ihrem Werdegang" "Was sind Ihre Stärken/Schwächen?" "Warum möchten Sie bei uns arbeiten?" "Haben Sie noch Fragen an uns?"——最后这个问题几乎每次都会被问到，提前准备 1-2 个关于职位或团队的问题（比如 Gehaltsvorstellung、是否 unbefristet）会显得更认真、更有备而来。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '面试官问 "Erzählen Sie von Ihrem Werdegang" 是什么意思？', options: ['请讲讲您的职业经历', '请说明您的期望薪资', '请解释您为什么离职'], answer: 0, why: 'der Werdegang = 职业发展道路，erzählen von = 讲述……' },
        { type: 'cloze', zhHint: '毕业后我开始在莱比锡大学做科研助理。（Präteritum, beginnen, ich）', before: 'Nach dem Studium', after: 'ich als wissenschaftliche Mitarbeiterin an der Uni Leipzig.', options: ['begann', 'beginne', 'habe beginnen'], answer: 0, why: '书面叙事用 Präteritum begann；"habe beginnen" 是错误形式（Perfekt 正确应为 habe begonnen）。' },
        { type: 'cloze', zhHint: '我在那里的一个国际团队工作了三年。（Präteritum, arbeiten, ich）', before: 'Dort', after: 'ich drei Jahre in einem internationalen Team.', options: ['arbeitete', 'arbeite', 'arbeitet'], answer: 0, why: 'Präteritum ich 形式是 arbeitete，arbeite/arbeitet 都是现在时形式。' },
        { type: 'mcq', q: '"Ich wurde zur Teamleiterin ernannt." 用的是什么结构？为什么这里没有说是谁任命的？', options: ['被动态：书面语常隐去"谁做的"，只强调结果', '这是主动态，ich 是动作发出者', '这是虚拟式，表示假设'], answer: 0, why: 'wurde...ernannt 是 Präteritum 被动态，"谁任命的"被省略，焦点落在"发生了什么"上。' },
        { type: 'order', zh: '我想说服雇主相信我的能力。', words: ['Ich', 'möchte', 'den', 'Arbeitgeber', 'von', 'meinen', 'Fähigkeiten', 'überzeugen'], why: 'möchte 情态动词占第二位（复现 u9 句框），überzeugen 原形踢到句尾，von+Dativ 复现 u19。' },
        { type: 'match', pairs: [['der Vorstellungstermin', '面试预约时间'], ['einstellen', '雇佣，录用'], ['kündigen', '辞职；解雇'], ['die Referenz', '推荐人，证明']] },
        { type: 'listen', audio: 'Ich war unter anderem für ein Projekt zur Proteinanalyse verantwortlich und sprach auf zwei internationalen Konferenzen darüber.', q: '这句话是什么意思？', options: ['我曾负责一个蛋白质分析项目，并在两次国际会议上做过报告。', '我从没参加过任何会议。', '这个项目还没有开始。'], answer: 0, why: 'war...verantwortlich = 曾负责，sprach auf...Konferenzen = 在会议上做报告（都是 Präteritum）。' },
        { type: 'speak', de: 'Ich denke, meine größte Stärke ist meine Sorgfalt, und ich arbeite gern im Team.', zh: '我认为我最大的优点是细致认真，而且我喜欢团队合作。' },
      ],
      task: { title: '今天的生活任务', desc: '对着 AI 陪练或自己录音回答 "Erzählen Sie von Ihrem Werdegang"，用 2-3 句话讲清楚职业经历，至少用上 begann/arbeitete/wurde 中的一个 Präteritum 动词；如果正在准备真实面试，把这几句话套进自己的真实经历里练习。' }
    },
  ]
};
