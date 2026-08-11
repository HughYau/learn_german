// 第 24 单元：讲述经历与简历
export default {
  id: 'u24', num: '24', color: 'yellow', shape: 'half',
  de: 'Mein Werdegang', zh: '讲述经历与简历',
  desc: '从"我学的是什么专业"到"介绍一位新同事"，这个单元先把 Perfekt 和已学的 Präteritum 混着用熟练，再啃下全课程最容易出错的语法点——形容词词尾变化，从最简单的"定冠词后"开始。',
  kann: [
    { de: 'Ich kann meinen beruflichen Werdegang mit Perfekt und Präteritum zusammenhängend erzählen.', zh: '我能用完成时和过去式连贯讲述我的职业经历。' },
    { de: 'Ich kann mit vor und seit + Dativ sagen, wann etwas passiert ist bzw. wie lange etwas schon andauert.', zh: '我能用 vor 和 seit 说明某事发生在多久前，或已经持续了多久。' },
    { de: 'Ich kann mit „zu + Infinitiv“ ausdrücken, was ich vorhabe oder versuche und wofür ich keine Zeit habe.', zh: '我能用 zu 不定式表达我打算、尝试做的事或没时间做的事。' },
    { de: 'Ich kann nach einem bestimmten Artikel die Adjektivendung richtig anhängen (der neue Kollege).', zh: '我能在定冠词后正确使用形容词词尾（如 der neue Kollege）。' },
  ],
  lessons: [
    {
      id: 'u24l1', title: '我的职业道路', de: 'Mein Werdegang',
      intro: '语伴 Jonas 好奇 Wei 是怎么走到今天这份工作的——这一课学讲述完整经历要用到的核心词汇，还有过去时态混用的实战：大部分动词用 Perfekt，sein/haben/情态动词用已经学过的 Präteritum（war/hatte/musste...），两种时态在讲故事时天然穿插。这一课还会学一个新语法点——zu 不定式，帮你说清"打算/尝试/没时间做……"这类心里话。',
      sections: [
        {
          type: 'vocab', title: '简历核心词', sub: '',
          items: [
            { de: 'Lebenslauf', art: 'der', pl: 'Lebensläufe', zh: '简历', en: 'CV / résumé', ex: 'Ich habe meinen Lebenslauf aktualisiert.', exZh: '我更新了我的简历。' },
            { de: 'Ausbildung', art: 'die', pl: 'Ausbildungen', zh: '职业培训，教育经历', en: 'vocational training', ex: 'Sie hat eine Ausbildung als Krankenschwester gemacht.', exZh: '她接受了护士职业培训。', note: '泛指教育/培训经历，和大学阶段的 Studium 不是一回事' },
            { de: 'Studium', art: 'das', pl: 'Studien', zh: '大学学业，进修', en: '(university) studies', ex: 'Mein Studium hat vier Jahre gedauert.', exZh: '我的大学学业持续了四年。' },
            { de: 'Abschluss', art: 'der', pl: 'Abschlüsse', zh: '学位，毕业', en: 'degree / graduation', ex: 'Sie hat ihren Abschluss mit Auszeichnung gemacht.', exZh: '她以优异成绩毕业了。' },
            { de: 'abschließen', zh: '完成，结束（学业等）', en: 'to complete/finish', ex: 'Ich habe mein Studium letztes Jahr abgeschlossen.', exZh: '我去年完成了大学学业。', note: '可分动词 ab-schließen，Perfekt 是 abgeschlossen' },
          ]
        },
        {
          type: 'vocab', title: '经历与职位', sub: '',
          items: [
            { de: 'Erfahrung', art: 'die', pl: 'Erfahrungen', zh: '经验，经历', en: 'experience', ex: 'Ich habe viel Erfahrung im Labor.', exZh: '我在实验室有很多经验。' },
            { de: 'Stelle', art: 'die', pl: 'Stellen', zh: '职位，岗位', en: 'position/job', ex: 'Sie hat eine neue Stelle gefunden.', exZh: '她找到了一个新职位。' },
            { de: 'Werdegang', art: 'der', pl: 'Werdegänge', zh: '职业经历，履历', en: 'career path', ex: 'Erzählen Sie von Ihrem Werdegang.', exZh: '请讲讲您的职业经历。' },
            { de: 'Praktikum', art: 'das', pl: 'Praktika', zh: '实习', en: 'internship', ex: 'Ich habe ein Praktikum bei einer Firma gemacht.', exZh: '我在一家公司实习过。', note: '外来词，复数是 Praktika，不是 Praktikums' },
            { de: 'Kenntnisse', art: 'die', zh: '知识，技能（常用复数）', en: 'knowledge/skills', ex: 'Ich habe gute Kenntnisse in Biologie.', exZh: '我在生物学方面有扎实的知识。', note: '常用复数形式；Sprachkenntnisse = 语言能力' },
          ]
        },
        {
          type: 'dialogue', title: '我的职业道路', scene: 'Wei 和语伴 Jonas 聊起自己的职业经历——从上海读书、实习到来莱比锡工作的这条路。',
          lines: [
            { sp: 'Jonas', de: 'Erzähl mal, was hast du eigentlich studiert?', zh: '说说看，你到底学的是什么专业？' },
            { sp: 'Wei', de: 'Ich habe Biologie studiert, in Shanghai.', zh: '我在上海学的生物学。' },
            { sp: 'Jonas', de: 'Und wann hast du dein Studium abgeschlossen?', zh: '那你什么时候完成学业的？' },
            { sp: 'Wei', de: 'Ich habe meinen Abschluss vor fünf Jahren gemacht.', zh: '我五年前拿到了学位。' },
            { sp: 'Jonas', de: 'Hattest du auch ein Praktikum?', zh: '你也实习过吗？' },
            { sp: 'Wei', de: 'Ja, ich hatte ein Praktikum bei einem Pharmaunternehmen. Das war sehr interessant.', zh: '有，我在一家制药公司实习过。那很有意思。' },
            { sp: 'Jonas', de: 'Wie war deine erste Stelle nach dem Studium?', zh: '你毕业后的第一份工作怎么样？' },
            { sp: 'Wei', de: 'Meine erste Stelle war in einem Labor in Shanghai. Ich musste dort oft nachts arbeiten.', zh: '我的第一份工作是在上海的一个实验室。我经常得上夜班。' },
            { sp: 'Jonas', de: 'Und dann bist du nach Leipzig gekommen?', zh: '后来你就来莱比锡了？' },
            { sp: 'Wei', de: 'Genau, vor einem Jahr habe ich die Stelle am Institut bekommen. Meine Kenntnisse waren gefragt.', zh: '是的，一年前我拿到了研究所的这个职位。我的专业知识正好被需要。' },
            { sp: 'Jonas', de: 'Klingt nach einem spannenden Werdegang!', zh: '听起来是段精彩的职业经历！' },
            { sp: 'Wei', de: 'Danke! Es war nicht immer einfach, aber ich bin zufrieden.', zh: '谢谢！并不总是一帆风顺，但我很满意。' },
          ]
        },
        {
          type: 'grammar', title: '简历里的过去：Perfekt 和已学的 Präteritum 混着用', sub: '讲经历时两种过去时态天然并存',
          html: `<p>u12 学过口语过去时几乎只用 <b class="de">Perfekt</b>，只有 <mark>war</mark>/<mark>hatte</mark> 是例外；u20 又补上了情态动词的 Präteritum（<mark>musste/durfte/wollte/sollte</mark>）。讲一段完整经历时，这几种形式会自然穿插在一起：</p>
<table><tr><th>动词类型</th><th>用哪种过去时</th><th>例句（来自对话）</th></tr>
<tr><td>大多数动词</td><td class="hl">Perfekt（habe/bin + Partizip II）</td><td class="hl">Ich habe Biologie studiert.</td></tr>
<tr><td>sein</td><td class="hl">Präteritum war</td><td class="hl">Das war sehr interessant.</td></tr>
<tr><td>haben</td><td class="hl">Präteritum hatte</td><td class="hl">Ich hatte ein Praktikum.</td></tr>
<tr><td>情态动词</td><td class="hl">Präteritum musste/wollte...</td><td class="hl">Ich musste oft nachts arbeiten.</td></tr></table>
<p>判断技巧很简单：先问"这个动词是不是 sein、haben 或情态动词？"——是的话直接用 Präteritum（war/hatte/musste...），不是的话就用 Perfekt（habe/bin + 过去分词）。两种时态不冲突，同一段话里正常混用，德国人自己讲故事也是这样。</p>`
        },
        {
          type: 'grammar', title: '时间状语：vor 和 seit + Dativ', sub: '"几年前" vs "从…至今"',
          html: `<p>讲经历离不开时间状语。<b class="de">vor</b>（……前）和 <b class="de">seit</b>（自……以来，u15 已学过 <mark>seit gestern</mark>）都要接 <b>Dativ</b>：</p>
<table><tr><th>介词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">vor + Dativ</td><td>过去某个时间点，"……前"</td><td class="hl">vor fünf Jahren（五年前）/ vor einem Jahr（一年前）</td></tr>
<tr><td class="hl">seit + Dativ</td><td>从过去某点持续到现在</td><td class="hl">seit einem Jahr（从一年前起，一直到现在）</td></tr></table>
<p>注意：<mark>vor</mark> 也是 u16 学过的两格介词之一，但表示时间时<b>固定用 Dativ</b>，不再是"看动作判断格"的两格用法——这是它在时间语境里的专属身份，和空间用法分开记。<b class="de">fünf Jahre</b> 变成 <b class="de">vor fünf Jahren</b> 时，阳性/中性名词的复数 Dativ 别忘了加 -n（回顾 u16 g16）。</p>`
        },
        {
          type: 'grammar', title: 'Infinitiv mit zu', sub: 'zu + 动词原形，说清"打算/尝试/没时间做……"这类心里话',
          html: `<p>u9 学过情态动词的句框（<mark>Ich möchte Deutsch lernen.</mark>），但还有一大类动词/短语后面接"第二个动词"时，不能直接用情态动词那种光秃秃的原形，而要在这第二个动词前加上 <b class="de">zu</b>，整个"zu + 动词原形"作为一个整体踢到句尾——这就是 <b class="de">Infinitiv mit zu</b>（zu 不定式）。下面是最高频的触发词：</p>
<table><tr><th>触发词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">anfangen</td><td>开始</td><td class="hl">Ich habe angefangen, Deutsch zu lernen.</td></tr>
<tr><td class="hl">aufhören</td><td>停止</td><td class="hl">Ich habe aufgehört, jeden Tag Kaffee zu trinken.</td></tr>
<tr><td class="hl">versuchen</td><td>尝试</td><td class="hl">Ich versuche, jeden Tag ein bisschen Deutsch zu üben.</td></tr>
<tr><td class="hl">vergessen</td><td>忘记</td><td class="hl">Ich habe vergessen, Brot zu kaufen.</td></tr>
<tr><td class="hl">vorhaben</td><td>打算</td><td class="hl">Ich habe vor, im Sommer nach Shanghai zu fliegen.</td></tr>
<tr><td class="hl">Lust haben</td><td>有兴致</td><td class="hl">Jonas hat Lust, mit mir Deutsch zu üben.</td></tr>
<tr><td class="hl">Zeit haben</td><td>有时间</td><td class="hl">Ich habe keine Zeit, jeden Tag zu kochen.</td></tr>
<tr><td class="hl">Es ist wichtig/schwierig</td><td>重要的是／难的是……</td><td class="hl">Es ist wichtig, jeden Tag ein bisschen zu üben.</td></tr></table>
<p><b class="t">可分动词：zu 夹在前缀和词干中间。</b>可分动词变成 zu 不定式时，<mark>zu</mark> 不是排在整个动词前面，而是插进前缀和词干之间，写成一个词：</p>
<table><tr><th>可分动词</th><th>zu 不定式</th><th>例句</th></tr>
<tr><td class="hl">mitkommen</td><td class="hl">mitzukommen</td><td class="hl">Hast du Lust, heute Abend mitzukommen?</td></tr>
<tr><td class="hl">anrufen</td><td class="hl">anzurufen</td><td class="hl">Ich habe vergessen, Jonas anzurufen.</td></tr>
<tr><td class="hl">einkaufen</td><td class="hl">einzukaufen</td><td class="hl">Ich habe vor, heute Nachmittag einzukaufen.</td></tr></table>
<p><b class="t">最容易出错的对比——情态动词后不加 zu：</b>u9 学过的 möchte/kann/muss... 后面直接接动词原形，绝不能加 zu；上面这些新学的触发词则相反，必须加 zu。两句放在一起看最清楚：</p>
<table><tr><th>情态动词（不加 zu）</th><th>触发词 + zu 不定式</th></tr>
<tr><td class="hl">Ich muss arbeiten.（我必须工作。）</td><td class="hl">Ich versuche zu arbeiten.（我在尝试工作。）</td></tr>
<tr><td class="hl">Ich möchte Deutsch lernen.（我想学德语。）</td><td class="hl">Ich habe angefangen, Deutsch zu lernen.（我已经开始学德语了。）</td></tr></table>
<p>判断技巧：先问"这个词是不是情态动词（möchte/kann/muss/darf/will/soll）？"——是的话第二个动词直接用原形，不是的话（versuchen、vergessen、anfangen 等）就要加 zu。这正是中文母语者最容易混淆的地方，因为中文里"我尝试工作"和"我必须工作"结构完全一样，德语却要严格区分。</p>
<p><b class="t">逗号习惯：</b>zu 不定式短语只有 zu + 动词原形一个词时，逗号可加可不加（<mark>Ich versuche zu arbeiten.</mark>）；短语里还带宾语、状语等更多成分时，习惯上用逗号把它和主句隔开，读起来更清楚（<mark>Ich habe angefangen, Deutsch zu lernen.</mark>）。本课例句统一按"短语较长就加逗号"处理，跟着例句的逗号位置模仿即可。</p>
<p><b class="t">预告：um...zu（为了……）</b>zu 不定式还有一个近亲结构 <b class="de">um...zu</b>，表示"为了做某事"：<b class="de">Ich lerne Deutsch, um mit Jonas besser zu sprechen.</b>（我学德语，是为了能和 Jonas 更好地交流。）这里先混个脸熟，B1 会系统讲它和 damit 从句的区别。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">讲经历的万能开场句：</b><mark>Ich habe... studiert</mark>（我学的是……）、<mark>Meine erste Stelle war...</mark>（我的第一份工作是……）、<mark>Vor... Jahren habe ich...</mark>（……年前我……）——把这三个框架背熟，再往里面填自己的经历，一段简单的自我介绍就成型了。中文简历习惯罗列时间和头衔，德语口语介绍更看重"讲一个连贯的故事"，试着把经历串成一段有逻辑的叙述，而不是罗列条目。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"der Werdegang" 是什么意思？', options: ['职业经历，履历', '简历模板', '实习证明'], answer: 0, why: 'der Werdegang = 职业经历/履历，讲述"是怎么走到今天这份工作的"。' },
        { type: 'cloze', zhHint: '我五年前拿到了学位。', before: 'Ich habe meinen Abschluss vor fünf Jahren', after: '.', options: ['gemacht', 'gemachte', 'machte'], answer: 0, why: 'Perfekt：habe + Partizip II（gemacht），构成句框。' },
        { type: 'mcq', q: '"Ich hatte ein Praktikum bei einem Pharmaunternehmen." 用的是什么时态？', options: ['Präteritum（haben 的过去式）', 'Perfekt', 'Präsens'], answer: 0, why: 'hatte 是 haben 的 Präteritum，和 war 一样是口语里的高频例外，不用 Perfekt 说。' },
        { type: 'order', zh: '我在上海学的是生物学。', words: ['Ich', 'habe', 'Biologie', 'in', 'Shanghai', 'studiert'], why: 'Perfekt 句框：habe 站第二位，过去分词 studiert 踢到句尾。' },
        { type: 'match', pairs: [['der Lebenslauf', '简历'], ['die Erfahrung', '经验'], ['das Praktikum', '实习'], ['der Werdegang', '职业经历']] },
        { type: 'listen', audio: 'Ich habe meinen Abschluss vor fünf Jahren gemacht.', q: '这句话是什么意思？', options: ['我五年前拿到了学位。', '我五年后会毕业。', '我从来没有毕业。'], answer: 0, why: 'vor fünf Jahren = 五年前，habe...gemacht = Perfekt 完成时。' },
        { type: 'listen', audio: 'Meine erste Stelle war in einem Labor in Shanghai.', q: '这句话是什么意思？', options: ['我的第一份工作是在上海的一个实验室。', '我从来没在实验室工作过。', '我现在在上海工作。'], answer: 0, why: 'war = sein 的 Präteritum，meine erste Stelle = 我的第一份工作。' },
        { type: 'speak', de: 'Ich habe Biologie studiert und vor einem Jahr die Stelle am Institut bekommen.', zh: '我学的是生物学，一年前拿到了研究所的这个职位。' },
        { type: 'cloze', zhHint: '我尝试每天练习一点点德语。（versuchen 后接 zu 不定式，情态动词不用）', before: 'Ich versuche, jeden Tag ein bisschen Deutsch', after: '.', options: ['zu üben', 'üben', 'übe zu'], answer: 0, why: 'versuchen 后面的第二个动词要加 zu（zu üben）；情态动词（如 Ich muss üben.）后面才直接用原形，不加 zu——这是最容易混淆的一对结构。' },
        { type: 'order', zh: '我打算明年学德语。', words: ['Ich', 'habe', 'vor,', 'nächstes', 'Jahr', 'Deutsch', 'zu', 'lernen'], why: 'vorhaben 是可分动词，habe...vor 是句框；zu 不定式短语 nächstes Jahr Deutsch zu lernen 较长，前面习惯加逗号，zu 紧贴在动词原形 lernen 前。' },
      ],
      task: { title: '今天的生活任务', desc: '用德语写一段 5-6 句的自我经历简介，混用 Perfekt（habe/bin + 过去分词）和已经学过的 Präteritum（war/hatte/情态动词过去式），像 Wei 一样讲讲你的 Werdegang。' }
    },
    {
      id: 'u24l2', title: '介绍新同事', de: 'Der neue Kollege',
      intro: '研究所来了位新同事 Tom，Anna 向 Wei 介绍他和他负责的新项目——满耳朵都是"定冠词+形容词+名词"的组合。这一课系统学习 Adjektivdeklination 的第一步：定冠词后的形容词词尾，全课程最容易出错的语法点，从今天起要逐格记熟。',
      sections: [
        {
          type: 'vocab', title: '职场词汇', sub: '',
          items: [
            { de: 'Abteilung', art: 'die', pl: 'Abteilungen', zh: '部门', en: 'department', ex: 'Sie arbeitet in der Marketing-Abteilung.', exZh: '她在市场部工作。' },
            { de: 'Team', art: 'das', pl: 'Teams', zh: '团队', en: 'team', ex: 'Wir sind ein kleines Team.', exZh: '我们是个小团队。' },
            { de: 'zuständig (für)', zh: '负责……的', en: 'responsible (for)', ex: 'Wer ist für dieses Projekt zuständig?', exZh: '谁负责这个项目？' },
            { de: 'kennenlernen', zh: '认识，结识', en: 'to get to know', ex: 'Ich möchte den neuen Kollegen kennenlernen.', exZh: '我想认识一下这位新同事。', note: '可分动词 kennen-lernen' },
          ]
        },
        {
          type: 'vocab', title: '描述人的形容词', sub: '这些形容词一会儿要配上定冠词练习词尾',
          items: [
            { de: 'erfahren', zh: '有经验的', en: 'experienced', ex: 'Er ist ein erfahrener Ingenieur.', exZh: '他是一位有经验的工程师。' },
            { de: 'kompetent', zh: '能干的，胜任的', en: 'competent', ex: 'Die neue Kollegin ist sehr kompetent.', exZh: '这位新同事非常能干。' },
            { de: 'freundlich', zh: '友好的', en: 'friendly', ex: 'Alle Kollegen hier sind freundlich.', exZh: '这里的同事都很友好。' },
          ]
        },
        {
          type: 'dialogue', title: '介绍新同事', scene: 'Anna 向 Wei 介绍研究所新来的同事 Tom，两人聊到他负责的新项目——这段对话里到处都是"定冠词+形容词+名词"的组合。',
          lines: [
            { sp: 'Anna', de: 'Wei, kennst du schon den neuen Kollegen?', zh: 'Wei，你认识那位新同事了吗？' },
            { sp: 'Wei', de: 'Nein, noch nicht. Wie heißt er?', zh: '还没呢。他叫什么名字？' },
            { sp: 'Anna', de: 'Er heißt Tom. Der neue Kollege kommt aus Hamburg.', zh: '他叫 Tom。这位新同事来自汉堡。' },
            { sp: 'Wei', de: 'Und was macht er hier?', zh: '他在这儿做什么工作？' },
            { sp: 'Anna', de: 'Er arbeitet an dem neuen Projekt im Labor.', zh: '他在实验室负责那个新项目。' },
            { sp: 'Wei', de: 'Ah, das neue Projekt über erneuerbare Energien?', zh: '啊，就是关于可再生能源的那个新项目？' },
            { sp: 'Anna', de: 'Genau! Die neue Stelle war schwer zu besetzen, aber Tom passt super.', zh: '没错！这个新职位本来很难招到人，但 Tom 特别合适。' },
            { sp: 'Wei', de: 'Gibt es noch mehr neue Kollegen diesen Monat?', zh: '这个月还有其他新同事吗？' },
            { sp: 'Anna', de: 'Ja, ich habe mit den neuen Kollegen schon gesprochen – sie sind alle sehr nett.', zh: '有，我已经跟这些新同事聊过了——他们都很友善。' },
            { sp: 'Wei', de: 'Ich sollte den neuen Kollegen auch mal kennenlernen.', zh: '我也该认识一下这位新同事。' },
            { sp: 'Anna', de: 'Ja, stell dich dem neuen Kollegen doch morgen beim Meeting vor.', zh: '是啊，你明天开会时找这位新同事自我介绍一下吧。' },
            { sp: 'Wei', de: 'Gute Idee, das mache ich!', zh: '好主意，我这就去做！' },
          ]
        },
        {
          type: 'grammar', title: '定冠词后的形容词词尾：从例句找规律', sub: 'der/die/das/die + 形容词 + 名词',
          html: `<p>对话里反复出现同一个模式——定冠词后面夹一个形容词，形容词的词尾会跟着格和性变化：</p>
<table><tr><th>格</th><th>阳性 der</th><th>阴性 die</th><th>中性 das</th><th>复数 die</th></tr>
<tr><td>Nominativ</td><td class="hl">der neue Job</td><td class="hl">die neue Stelle</td><td class="hl">das neue Projekt</td><td class="hl">die neuen Kollegen</td></tr>
<tr><td>Akkusativ</td><td class="hl">den neuen Job</td><td class="hl">die neue Stelle</td><td class="hl">das neue Projekt</td><td class="hl">die neuen Kollegen</td></tr>
<tr><td>Dativ</td><td class="hl">dem neuen Job</td><td class="hl">der neuen Stelle</td><td class="hl">dem neuen Projekt</td><td class="hl">den neuen Kollegen</td></tr></table>
<p>只看词尾，规律更清楚：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nom</td><td class="hl">-e</td><td class="hl">-e</td><td class="hl">-e</td><td class="hl">-en</td></tr>
<tr><td>Akk</td><td class="hl">-en</td><td class="hl">-e</td><td class="hl">-e</td><td class="hl">-en</td></tr>
<tr><td>Dat</td><td class="hl">-en</td><td class="hl">-en</td><td class="hl">-en</td><td class="hl">-en</td></tr></table>`
        },
        {
          type: 'grammar', title: '口诀记忆：定冠词后只有 -e 和 -en', sub: '五个格子是 -e，其余全部 -en',
          html: `<p>定冠词后的形容词词尾全表只有两种词尾，分布很有规律：</p>
<p><b class="t">-e 出现在 5 个格子：</b>Nominativ 的三个性（der/die/das 后面都是 -e）+ Akkusativ 的阴性和中性。为什么 Akkusativ 阴性/中性也是 -e？因为阴性、中性名词从 Nominativ 到 Akkusativ，冠词本身根本没变（<mark>die → die</mark>、<mark>das → das</mark>），形容词自然也就跟着"偷懒"不变。</p>
<p><b class="t">-en 出现在其余 7 个格子：</b>Akkusativ 阳性（因为冠词从 der 变成了 den）+ 全部 Dativ（三个性）+ 全部复数（Nominativ/Akkusativ/Dativ 都是）。</p>
<p>记忆口诀：<b>"冠词变了，形容词才跟着变（-en）；冠词没变，形容词也不变（-e）。"</b> 只要能判断出定冠词本身在这个格里有没有变化，就能百分百猜对形容词词尾。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">练这个语法点最有效的方法：</b>造句时先把整个短语的定冠词形式想清楚（der/den/dem/die...），再决定形容词词尾——想清楚"冠词变没变"，而不是死记一张表格。日常多留意招牌、菜单、新闻标题里"定冠词+形容词+名词"的组合（比如 <mark>der neue Chef</mark>、<mark>die neuen Regeln</mark>），看得多了语感会慢慢建立起来。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '定冠词后的形容词词尾一共有几种？', options: ['两种：-e 和 -en', '四种：随性数格变化', '一种：永远是 -en'], answer: 0, why: '定冠词后的形容词只有 -e 和 -en 两种词尾，分布有规律可循。' },
        { type: 'cloze', zhHint: '这位新同事来自汉堡。（Nominativ 阳性）', before: 'Der', after: 'Kollege kommt aus Hamburg.', options: ['neue', 'neuen', 'neuer'], answer: 0, why: 'Nominativ 阳性定冠词后形容词词尾是 -e。' },
        { type: 'cloze', zhHint: '你认识那位新同事了吗？（Akkusativ 阳性）', before: 'Kennst du den', after: 'Kollegen?', options: ['neuen', 'neue', 'neuer'], answer: 0, why: 'Akkusativ 阳性：冠词从 der 变成 den，形容词词尾也跟着变成 -en。' },
        { type: 'mcq', q: '"die neue Stelle" 变成 Akkusativ 后会怎样？', options: ['die neue Stelle（完全不变）', 'die neuen Stelle', 'der neuen Stelle'], answer: 0, why: '阴性名词 Nominativ 和 Akkusativ 的冠词都不变（die→die），形容词词尾也不变，仍是 -e。' },
        { type: 'order', zh: '我该找这位新同事自我介绍一下。', words: ['Ich', 'sollte', 'den', 'neuen', 'Kollegen', 'kennenlernen'], why: '情态动词句框：sollte 站第二位，kennenlernen 原形踢到句尾；Akkusativ 阳性形容词词尾 -en。' },
        { type: 'match', pairs: [['die Abteilung', '部门'], ['das Team', '团队'], ['zuständig für', '负责……的'], ['kennenlernen', '认识，结识']] },
        { type: 'listen', audio: 'Ich habe mit den neuen Kollegen schon gesprochen.', q: '这句话是什么意思？', options: ['我已经和这些新同事聊过了。', '我还没见过任何新同事。', '新同事明天才到。'], answer: 0, why: 'mit den neuen Kollegen = 和这些新同事（Dativ 复数），schon gesprochen = 已经聊过了。' },
        { type: 'speak', de: 'Stell dich doch dem neuen Kollegen vor, er ist sehr freundlich.', zh: '去跟这位新同事自我介绍一下吧，他人很友好。' },
      ],
      task: { title: '今天的生活任务', desc: '用"定冠词+形容词+名词"的组合写 3 句话，介绍一位（真实或虚构的）新同事或新项目，注意逐格核对 der/die/das 和 -e/-en 的搭配，别写错。' }
    },
  ]
};
