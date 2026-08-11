// 第 33 单元：B1 整合与冲刺
export default {
  id: 'u33', num: '33', color: 'red', shape: 'square',
  de: 'Fit für B1', zh: 'B1 整合与冲刺',
  desc: '全课程收官单元：关系代词补齐 Dativ/Genitiv 和介词+关系代词的最后一块拼图，用一张鸟瞰表回顾格系统/时态系统/从句系统/语气系统四条主线，最后写一篇 150 词议论短文，完成 Phase 5 结业任务。',
  kann: [
    { de: 'Ich kann Relativsätze im Dativ und Genitiv sowie mit Präposition bilden.', zh: '我能构造带第三格、第二格关系代词以及“介词+关系代词”的关系从句。' },
    { de: 'Ich kann die wichtigsten Grammatikthemen des Kurses (Kasus, Zeiten, Nebensätze, Modus) im Überblick benennen.', zh: '我能概览说出本课程学过的格、时态、从句和语气四大语法体系。' },
    { de: 'Ich kann einen etwa 150 Wörter langen argumentativen Text auf Deutsch schreiben.', zh: '我能写一篇约150词的德语议论短文。' },
    { de: 'Ich kann meinen Text vorlesen und mit einem Gesprächspartner darüber sprechen.', zh: '我能朗读自己的短文并与人讨论。' },
  ],
  lessons: [
    {
      id: 'u33l1', title: '糟糕但最终解决的一天', de: 'Ein chaotischer, aber gelöster Tag',
      intro: 'Wei 度过了忙碌又糟心的一天——房东回复不友好、办事处排队、包裹疑似丢失——最后还是顺利收尾。这一课给关系从句补上最后两块拼图：Dativ/Genitiv 关系代词和介词+关系代词，全书的格系统主线在这里正式收官。',
      sections: [
        {
          type: 'vocab', title: '整合与应对', sub: '',
          items: [
            { de: 'Herausforderung', art: 'die', pl: 'Herausforderungen', zh: '挑战', en: 'challenge', ex: 'Der Umzug war eine große Herausforderung.', exZh: '搬家是一次很大的挑战。' },
            { de: 'bewältigen', zh: '克服，应付（挑战/任务）', en: 'to manage/cope with', ex: 'Ich habe die Herausforderung gut bewältigt.', exZh: '我很好地克服了这个挑战。' },
            { de: 'Ablauf', art: 'der', pl: 'Abläufe', zh: '流程，过程', en: 'process/procedure', ex: 'Der Ablauf beim Bürgeramt war diesmal einfacher.', exZh: '这次在市民办事处的流程简单多了。' },
            { de: 'reibungslos', zh: '顺利的，没有摩擦的', en: 'smoothly', ex: 'Diesmal lief leider nicht alles reibungslos.', exZh: '这次可惜不是一切都很顺利。' },
            { de: 'sich zurechtfinden', zh: '摸清情况，适应（复现）', en: "to find one's way/manage", ex: 'Ich finde mich mittlerweile gut in Leipzig zurecht.', exZh: '我现在在莱比锡已经能应付自如了。', note: '复现词：u21/u22 学过反身动词体系，这是可分反身动词' },
          ]
        },
        {
          type: 'vocab', title: '自主与从容', sub: '',
          items: [
            { de: 'selbstständig', zh: '独立自主的', en: 'independent(ly)', ex: 'Ich kann die meisten Dinge inzwischen selbstständig erledigen.', exZh: '现在大部分事情我都能独立办完了。' },
            { de: 'souverän', zh: '从容自如的，游刃有余的', en: 'confident/assured', ex: 'Sie hat das Gespräch sehr souverän geführt.', exZh: '她把这场对话应对得非常从容。' },
            { de: 'Umgang (mit + Dat.)', art: 'der', zh: '应对，打交道（与……）', en: 'dealing with', ex: 'Der Umgang mit Behörden fällt mir jetzt viel leichter.', exZh: '现在跟官方机构打交道对我来说容易多了。' },
          ]
        },
        {
          type: 'dialogue', title: '糟糕但最终解决的一天', scene: 'Wei 度过了忙碌又糟心的一天——房东回复不友好、办事处排队、包裹疑似丢失——晚上和 Jonas 吐槽这一切，两人的对话里满是 Dativ/Genitiv 关系代词和介词+关系代词的用法。',
          lines: [
            { sp: 'Jonas', de: 'Wei, wie war dein Tag? Du siehst total erschöpft aus.', zh: 'Wei，你今天过得怎么样？看起来累坏了。' },
            { sp: 'Wei', de: 'Ehrlich gesagt, ein Albtraum! Da war zuerst der Vermieter, dessen Antwort total unfreundlich war.', zh: '说实话，简直是噩梦！先是房东，他的回复特别不友好。' },
            { sp: 'Jonas', de: 'Was hattest du ihn denn gefragt?', zh: '你问了他什么？' },
            { sp: 'Wei', de: 'Nur eine kurze Frage zur Heizung, aber die Antwort, die ich bekommen habe, war nur zwei Sätze lang.', zh: '就是一个关于暖气的小问题，可我收到的回复只有短短两句话。' },
            { sp: 'Jonas', de: 'Typisch. Und dann ging\'s weiter?', zh: '老套路。然后呢？' },
            { sp: 'Wei', de: 'Dann musste ich zum Bürgeramt, wo ich eine Stunde in der Schlange gewartet habe – und danach kam die nächste schlechte Nachricht.', zh: '然后我得去市民办事处，在那儿排了一个小时的队——接着又来了个坏消息。' },
            { sp: 'Jonas', de: 'Was denn noch?', zh: '又怎么了？' },
            { sp: 'Wei', de: 'Mein Paket, auf das ich seit einer Woche warte, ist angeblich verloren gegangen.', zh: '我等了一星期的包裹据说丢了。' },
            { sp: 'Jonas', de: 'Oh nein! Hast du beim Kurierdienst angerufen?', zh: '哦不！你给快递公司打电话了吗？' },
            { sp: 'Wei', de: 'Ja, die Mitarbeiterin, der ich das Problem erklärt habe, war zum Glück sehr hilfsbereit.', zh: '打了，我跟她解释问题的那位工作人员挺帮忙的，谢天谢地。' },
            { sp: 'Jonas', de: 'Und, hat sie das Paket gefunden?', zh: '那她找到包裹了吗？' },
            { sp: 'Wei', de: 'Ja! Die Wohnung, in der ich wohne, hatte einfach die falsche Hausnummer auf dem Etikett.', zh: '找到了！问题是我住的那栋楼，标签上的门牌号写错了。' },
            { sp: 'Jonas', de: 'Immerhin ein Happy End. Den Vermieter hätte ich aber auch direkter gefragt.', zh: '好歹有个好结局。不过房东那边，要是我可能会更直接地问。' },
            { sp: 'Wei', de: 'Da hast du recht. Morgen wird es bestimmt entspannter – Hauptsache, der Tag ist vorbei.', zh: '你说得对。明天肯定会轻松点——反正今天总算过去了。' },
          ]
        },
        {
          type: 'grammar', title: '关系代词全格表：Dativ 和 Genitiv 正式登场', sub: '只有三个形态和定冠词不一样',
          html: `<p>u27 学过 Nominativ/Akkusativ 关系代词，现在正式补上 Dativ 和 Genitiv，关系代词表终于集齐四个格：</p>
<table><tr><th>格</th><th>阳性</th><th>阴性</th><th>中性</th><th>复数</th></tr>
<tr><td>Nominativ</td><td class="hl">der</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr>
<tr><td>Akkusativ</td><td class="hl">den</td><td class="hl">die</td><td class="hl">das</td><td class="hl">die</td></tr>
<tr><td>Dativ</td><td class="hl">dem</td><td class="hl">der</td><td class="hl">dem</td><td class="hl">denen</td></tr>
<tr><td>Genitiv</td><td class="hl">dessen</td><td class="hl">deren</td><td class="hl">dessen</td><td class="hl">deren</td></tr></table>
<p>把这张表和定冠词表（der/die/das/den/dem/der/dem/des...）逐格对比，会发现<b>只有三个形态不一样</b>：Dativ 复数的 <mark>denen</mark>（定冠词是 den，这里多了 -en）、Genitiv 阳性/中性的 <mark>dessen</mark>、Genitiv 阴性/复数的 <mark>deren</mark>。其余格子和定冠词一模一样，不用重新背。</p>
<p><b class="t">Dativ 关系代词：</b>先看它在从句里是不是某个动词的 Dativ 宾语：</p>
<p class="de">Das ist der Nachbar, <mark>dem</mark> ich geholfen habe.（这是我曾经帮助过的邻居。）</p>
<p>helfen 支配 Dativ（helfen + Dativ 人），der Nachbar 是阳性，所以关系代词用 Dativ 阳性 <mark>dem</mark>。</p>
<p><b class="t">Genitiv 关系代词：</b>表示"先行词的……"，作用很像物主代词，后面的名词<b>不再加冠词</b>：</p>
<p class="de">Das ist der Nachbar, <mark>dessen</mark> Wohnung ich renoviert habe.（这是邻居，我曾经翻新过他的房子。）</p>
<p>dessen Wohnung = "这位邻居的房子"——阳性先行词 der Nachbar 用 dessen，绝不能说成 <span class="de">dessen die Wohnung</span>。同理，阴性/复数先行词用 <mark>deren</mark>：<span class="de">die Frau, deren Auto kaputt ist</span>（这位女士，她的车坏了）。</p>`
        },
        {
          type: 'grammar', title: '介词 + 关系代词：格由介词或动词决定', sub: '两种情况，判断方法不一样',
          html: `<p>如果先行词在从句里是介词的宾语，介词要紧挨着排在关系代词前面，两者中间不能插入别的词：</p>
<p class="de">die Wohnung, <mark>in der</mark> ich wohne（我住的那套房子）　der Termin, <mark>auf den</mark> ich mich vorbereitet habe（我准备了的这次预约）</p>
<p>格怎么定？分两种情况：</p>
<table><tr><th>情况</th><th>判断方法</th><th>例句</th></tr>
<tr><td>① 两格介词表位置</td><td>wo（在哪儿）→ Dativ；wohin（去哪儿）→ Akkusativ，复现 u16 的逻辑</td><td class="hl">die Wohnung, in der ich wohne（wohnen 是"住在哪儿"，wo+Dativ）</td></tr>
<tr><td>② 固定动词+介词搭配</td><td>格由动词本身锁死，和空间逻辑无关（复现 g22 的高危点 sich freuen auf+Akk）</td><td class="hl">der Termin, auf den ich mich vorbereitet habe（sich vorbereiten auf 固定接 Akkusativ）</td></tr></table>
<p>常见的固定动词+介词搭配（格已被锁死，直接背）：<mark>sich interessieren für + Akk.</mark>、<mark>sich freuen auf + Akk.</mark>、<mark>warten auf + Akk.</mark>、<mark>teilnehmen an + Dat.</mark>、<mark>denken an + Akk.</mark>——遇到这类动词时，先问"这个动词固定搭配哪个格"，而不是"这个介词是两格介词，我该用 wo 还是 wohin 的逻辑"。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">介词+关系代词永远紧挨着写在一起：</b>中间不能插入别的词——in der（不是 der in）。进阶知识：如果先行词是"事情"而不是"人或物"（比如指代前面整句话的内容），有时会用 wo(r)+介词代替（worüber、wofür），但这种用法只指物不指人，属于更进阶的写作技巧，这里先知道有这回事就够了，不必现在就练熟。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '关系代词表和定冠词表相比，一共有几个形态不一样？', options: ['三个：denen、dessen、deren', '一个都没有，完全一样', '所有格子都不一样'], answer: 0, why: '只有 Dativ 复数 denen、Genitiv 阳性/中性 dessen、Genitiv 阴性/复数 deren 这三个新形态和定冠词不同，其余格子照搬定冠词。' },
        { type: 'cloze', zhHint: '这是我曾经帮助过的邻居。（Dativ 阳性，helfen+Dativ）', before: 'Das ist der Nachbar,', after: 'ich geholfen habe.', options: ['dem', 'den', 'der'], answer: 0, why: 'helfen 支配 Dativ，先行词 der Nachbar 是阳性，Dativ 阳性关系代词是 dem。' },
        { type: 'cloze', zhHint: '这是邻居，我曾经翻新过他的房子。（Genitiv 阳性先行词）', before: 'Das ist der Nachbar,', after: 'Wohnung ich renoviert habe.', options: ['dessen', 'deren', 'dem'], answer: 0, why: 'Genitiv 阳性关系代词是 dessen，且后面的名词（Wohnung）不能再加冠词。' },
        { type: 'mcq', q: '"die Wohnung, in der ich wohne" 里为什么用 der 而不是 die？', options: ['wohnen 表示"在哪里"（wo），in 是两格介词，位置用 Dativ，阴性 Dativ 是 der', 'Wohnung 变成阳性名词了', '这是任意选择，两个都对'], answer: 0, why: 'in 是 Wechselpräposition，wohnen 表位置（wo 问句），按规则用 Dativ；Wohnung 是阴性，阴性 Dativ 关系代词是 der。' },
        { type: 'order', zh: '这是我曾经帮助过的邻居。', words: ['Das', 'ist', 'der', 'Nachbar', 'dem', 'ich', 'geholfen', 'habe'], why: '先行词 der Nachbar 紧跟关系代词 dem（Dativ 阳性），从句动词 habe 垫底。' },
        { type: 'match', pairs: [['die Herausforderung', '挑战'], ['bewältigen', '克服，应付'], ['reibungslos', '顺利的'], ['souverän', '从容自如的']] },
        { type: 'listen', audio: 'Mein Paket, auf das ich seit einer Woche warte, ist angeblich verloren gegangen.', q: '这句话是什么意思？', options: ['我等了一星期的包裹据说丢了', '我的包裹已经找到了', '我根本没有寄过包裹'], answer: 0, why: 'warten auf + Akk 是固定搭配，格由动词决定；angeblich verloren gegangen = 据说丢了。' },
        { type: 'speak', de: 'Der Termin, auf den ich mich vorbereitet habe, wurde leider verschoben.', zh: '我准备了的这次预约，可惜被推迟了。' },
      ],
      task: { title: '今天的生活任务', desc: '用 Dativ 和 Genitiv 关系代词（dem/der/denen/dessen/deren）写 3 句话，描述你生活中的人或物（邻居、同事、住的地方等），其中至少用一次"介词+关系代词"的结构。' }
    },
    {
      id: 'u33l2', title: '写完了！', de: 'Fertig geschrieben!',
      intro: '全课程最后一课：先用一张鸟瞰表回顾格系统、时态系统、从句系统、语气系统这四条贯穿全书的主线，再学 B1 议论短文的写作结构，最后完成整个 Phase 5 的结业任务——写一篇 150 词的议论短文读给 AI 陪练听。',
      sections: [
        {
          type: 'vocab', title: '回顾与总结', sub: '',
          items: [
            { de: 'zusammenfassend', zh: '总而言之，总结来说', en: 'in summary', ex: 'Zusammenfassend kann ich sagen, dass ich viel gelernt habe.', exZh: '总而言之，我可以说自己学到了很多。' },
            { de: 'insgesamt', zh: '总体上，总共', en: 'overall', ex: 'Insgesamt war das ein sehr guter Kurs.', exZh: '总体上这是一门很棒的课程。' },
            { de: 'Fortschritt', art: 'der', pl: 'Fortschritte', zh: '进步', en: 'progress', ex: 'Ich habe große Fortschritte gemacht.', exZh: '我取得了很大的进步。' },
            { de: 'Rückblick', art: 'der', pl: 'Rückblicke', zh: '回顾，回想', en: 'review/retrospective', ex: 'Im Rückblick war die erste Zeit am schwersten.', exZh: '回顾起来，最初那段时间是最难的。' },
            { de: 'Meilenstein', art: 'der', pl: 'Meilensteine', zh: '里程碑', en: 'milestone', ex: 'B1 ist ein wichtiger Meilenstein.', exZh: 'B1 是一个重要的里程碑。' },
          ]
        },
        {
          type: 'vocab', title: '日常与自信', sub: '',
          items: [
            { de: 'Sicherheit', art: 'die', zh: '把握感，自信（语言运用上的）', en: 'confidence/certainty', ex: 'Ich habe viel Sicherheit im Deutschen gewonnen.', exZh: '我在德语运用上获得了很强的把握感。' },
            { de: 'sich auskennen', zh: '熟悉，精通', en: "to know one's way around", ex: 'Ich kenne mich in der Grammatik inzwischen gut aus.', exZh: '我现在对语法已经很熟悉了。' },
            { de: 'Routine', art: 'die', pl: 'Routinen', zh: '常规，熟练度', en: 'routine', ex: 'Deutsch ist Teil meiner Routine geworden.', exZh: '德语已经成为我日常习惯的一部分。' },
            { de: 'Alltag', art: 'der', zh: '日常生活（复现）', en: 'everyday life', ex: 'Deutsch gehört jetzt fest zu meinem Alltag.', exZh: '德语现在已经牢牢融入我的日常生活了。' },
            { de: 'erledigen', zh: '办完，完成（复现）', en: 'to get done', ex: 'Ich kann viele Dinge inzwischen selbstständig erledigen.', exZh: '现在很多事情我都能独立办完了。' },
          ]
        },
        {
          type: 'dialogue', title: '写完了！', scene: 'Wei 写完了 150 词的议论短文，读给 Jonas 听并请他给意见——这也是整个课程的收官时刻，两人聊起从零开始学德语的这段旅程。',
          lines: [
            { sp: 'Jonas', de: 'Na, bist du fertig mit deinem Aufsatz für die Sprachpartner-Übung?', zh: '怎么样，给 AI 陪练准备的作文写完了吗？' },
            { sp: 'Wei', de: 'Ja, fast 150 Wörter, über Fahrradwege in Leipzig. Willst du ihn hören?', zh: '写完了，差不多150词，写的是莱比锡的自行车道。你想听听吗？' },
            { sp: 'Jonas', de: 'Klar, lies vor!', zh: '当然，读来听听！' },
            { sp: 'Wei', de: 'Diese Frage wird in Leipzig zurzeit viel diskutiert. Der Nachbar, dem ich neulich geholfen habe, sagte einmal: Ohne sichere Wege fahre ich einfach nicht.', zh: '（朗读）"这个问题目前在莱比锡讨论得很多……我最近帮过的那位邻居曾经说过：没有安全的道路我根本不骑车。"' },
            { sp: 'Jonas', de: 'Sehr schön! Du benutzt sogar einen Relativsatz im Dativ.', zh: '写得真不错！你甚至用上了 Dativ 关系从句。' },
            { sp: 'Wei', de: 'Und ein Passiv-Satz ist auch drin, hast du das gehört?', zh: '里面还有一个被动态句子，你听出来了吗？' },
            { sp: 'Jonas', de: 'Wird diskutiert – ja, klar gehört!', zh: '"wird diskutiert"——听到了，很清楚！' },
            { sp: 'Wei', de: 'Ehrlich, wenn ich an u0 zurückdenke, hätte ich nie gedacht, dass ich sowas mal schreiben könnte.', zh: '说实话，回想起 u0 的时候，我从没想过自己有一天能写出这样的东西。' },
            { sp: 'Jonas', de: 'Von der Aussprache bis zu Relativsätzen im Genitiv – das ist wirklich ein langer Weg.', zh: '从发音规则到 Genitiv 关系从句——这真的是一段很长的路。' },
            { sp: 'Wei', de: 'Und es fühlt sich gerade nach einem echten Meilenstein an.', zh: '现在真的有一种到达重要里程碑的感觉。' },
            { sp: 'Jonas', de: 'Verdient! Und jetzt? Weiterlernen für die B1-Prüfung?', zh: '你应得的！那接下来呢？继续为 B1 考试学习？' },
            { sp: 'Wei', de: 'Erstmal einfach weiter Deutsch im echten Leben benutzen. Die Prüfung kommt, wenn ich bereit bin.', zh: '先在真实生活里继续用德语。等我准备好了，考试自然会来。' },
          ]
        },
        {
          type: 'grammar', title: '全语法体系鸟瞰：四条主线', sub: '从 u0 到 u33，整个格局收进一张表',
          html: `<p>从 u0 到 u33，全书语法可以收进四条主线——冲刺阶段最后一次把它们放在一张表里看全局：</p>
<table><tr><th>主线</th><th>核心语法点（按单元顺序）</th></tr>
<tr><td class="hl">① 格系统</td><td>Nominativ（u1-u3）→ Akkusativ 不定/定冠词（u3, u11）→ Dativ 引入（u10）→ Wechselpräpositionen（u16）→ Dativ/Akkusativ 介词全套（u19, u21）→ Adjektivdeklination 三步（u24, u25, u27）→ Genitiv 入门（u29）→ 关系代词 Dativ/Genitiv（u33）</td></tr>
<tr><td class="hl">② 时态系统</td><td>Präsens（u1, u3）→ Perfekt（u12）→ Präteritum war/hatte（u12）→ Präteritum 情态动词（u20）→ Präteritum 系统化（u28）→ Passiv 入门 Präsens（u23）→ Passiv 各时态（u31）</td></tr>
<tr><td class="hl">③ 从句系统</td><td>weil（u18）→ dass（u20）→ wenn/als（u22）→ 间接疑问句（u25）→ Relativsätze Nom./Akk.（u27）→ Konnektoren deshalb/trotzdem/obwohl（u29）→ Indirekte Rede（u30）→ Relativsätze 深化（u33）</td></tr>
<tr><td class="hl">④ 语气系统</td><td>Imperativ（u10）→ Konjunktiv II 雏形 könnte/würde（u15）→ Konjunktiv II 系统化（u26）→ Konjunktiv II 过去式（u32）</td></tr></table>
<p>B1 和 A2 真正的分水岭，其实就藏在这四条线最后几站里：关系从句让描述更精确，被动态让叙述更客观，Konjunktiv II 让语气更得体——这正是 Goethe/telc B1 的 Schreiben 和 Sprechen 评分标准里反复强调的东西。</p>`
        },
        {
          type: 'grammar', title: 'B1 议论短文写作指导 + 范文', sub: '150 词的经典四段结构',
          html: `<p><b class="t">150 词议论短文的经典结构：</b></p>
<table><tr><th>部分</th><th>作用</th><th>常用句型</th></tr>
<tr><td>① 引入</td><td>点明话题，说明这是个有争议的问题</td><td class="hl">Diese Frage wird zurzeit viel diskutiert. / Immer mehr Menschen fragen sich, ob...</td></tr>
<tr><td>② 正方</td><td>列出支持的理由，最好带一个例子或数据</td><td class="hl">Einerseits.../Ein Vorteil ist, dass...</td></tr>
<tr><td>③ 反方</td><td>公平地承认反对意见，不要一边倒</td><td class="hl">Andererseits.../Kritiker sagen, dass...</td></tr>
<tr><td>④ 结论</td><td>给出自己的立场，呼应开头</td><td class="hl">Meiner Meinung nach.../Zusammenfassend...</td></tr></table>
<p><b class="t">范文（约 150 词，主题：Sollte Leipzig mehr Fahrradwege bauen?）：</b></p>
<p class="de">Diese Frage wird in Leipzig zurzeit viel diskutiert. Immer mehr Menschen fahren mit dem Fahrrad zur Arbeit, deshalb ist das Thema aktuell.<br>Einerseits gibt es gute Gründe für mehr Fahrradwege. Sie machen den Verkehr sicherer, besonders für Kinder und ältere Menschen, denen es oft schwerfällt, sich zwischen Autos zu orientieren. Außerdem wurde in einer Studie gezeigt, dass Städte mit guten Fahrradwegen weniger Luftverschmutzung haben.<br>Andererseits kritisieren manche Autofahrer, dass dadurch Parkplätze wegfallen – ein Problem besonders für Geschäfte, deren Kunden mit dem Auto kommen. Auch die Baukosten sind hoch.<br>Meiner Meinung nach überwiegen die Vorteile. Der Nachbar, dem ich neulich beim Reparieren seines Fahrrads geholfen habe, sagte einmal: "Ohne sichere Wege fahre ich einfach nicht." Deshalb sollte Leipzig das Projekt weiterführen, auch wenn es Zeit und Geld kostet.</p>
<p>这篇范文里藏着这门课的好几条主线：<mark>wird...diskutiert</mark>（被动态）、<mark>denen es schwerfällt</mark>（Dativ 关系代词，复数）、<mark>deren Kunden</mark>（Genitiv 关系代词，复数）、<mark>dem ich...geholfen habe</mark>（Dativ 关系代词，阳性）——这正是今天生活任务要练的写法。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">恭喜你，德语课程 u0-u33 全部完成！</b>从 u0 的发音规则、u1 的第一句 Ich heiße...，到今天的 Genitiv 关系代词和三时态被动，你已经走完了从零基础到 B1 门槛的完整旅程，词汇量、语法体系、听说读写四项技能都已成型。接下来第 6 章"考证衔接"是自然的下一步：想报名 Goethe-Zertifikat B1 或 telc Deutsch B1 时，先下载当年的官方样题（Modellsatz，具体以 goethe.de / telc.net 当年发布为准）自测，Lesen/Hören 稳定在六成以上正确率就是可以报名的信号。但更重要的是：语言是用出来的，不是攒出来的——继续用德语点单、和 Jonas 聊天、读 Nachrichtenleicht，B1 证书会是这个过程自然的副产品，而不是终点。Bis bald, und viel Erfolg!'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'B1 议论短文的经典结构是？', options: ['引入（表明主题）→正方论点→反方论点→结论', '只写正方论点，不用反方', '先结论，再说明理由都不需要'], answer: 0, why: 'B1 Schreiben 评分标准看重结构完整、正反兼顾，四段结构是最稳妥的写法。' },
        { type: 'cloze', zhHint: '总而言之，我取得了很大的进步。', before: '', after: 'kann ich sagen, dass ich große Fortschritte gemacht habe.', options: ['Zusammenfassend', 'Deshalb nicht', 'Obwohl'], answer: 0, why: 'zusammenfassend（总而言之）用于议论文结论段，引出总结句。' },
        { type: 'cloze', zhHint: '这个问题目前在莱比锡讨论得很多。（被动态）', before: 'Diese Frage', after: 'in Leipzig zurzeit viel diskutiert.', options: ['wird', 'wurde', 'ist...worden'], answer: 0, why: '现在时被动 wird+Partizip II，描述当下正在进行的讨论。' },
        { type: 'mcq', q: '关系从句、被动态、Konjunktiv II 这几个语法点分别主要属于哪条主线？', options: ['从句系统／时态系统／语气系统', '格系统／格系统／格系统', '都属于时态系统'], answer: 0, why: '关系从句结构本身归入从句系统一线（关系代词涉及格系统，但从句结构属于从句系统）；被动态是时态系统的一部分；Konjunktiv II 是语气系统的一部分。' },
        { type: 'order', zh: '我从没想过自己有一天能写出这样的东西。', words: ['Ich', 'hätte', 'nie', 'gedacht', 'dass', 'ich', 'sowas', 'mal', 'schreiben', 'könnte'], why: 'hätte...gedacht 是 Konjunktiv II 过去式（复习 u32），dass 从句里 könnte 垫底（V-letzt）。' },
        { type: 'match', pairs: [['zusammenfassend', '总而言之'], ['der Fortschritt', '进步'], ['der Meilenstein', '里程碑'], ['sich auskennen', '熟悉，精通']] },
        { type: 'listen', audio: 'Von der Aussprache bis zu Relativsätzen im Genitiv – das ist wirklich ein langer Weg.', q: '这句话是什么意思？', options: ['从发音规则到 Genitiv 关系从句，这真的是一段很长的路', '发音规则比关系从句更难学', '这个人还没有开始学习关系从句'], answer: 0, why: 'von...bis zu... = 从……到……，das ist ein langer Weg = 这是一段很长的路，指整个学习历程。' },
        { type: 'speak', de: 'Zusammenfassend habe ich in diesem Kurs sehr viel gelernt und fühle mich jetzt bereit für B1.', zh: '总而言之，我在这门课上学到了很多，现在感觉已经为 B1 做好了准备。' },
      ],
      task: { title: '今天的生活任务（Phase 5 结业任务）', desc: '写一篇约 150 词的 B1 风格议论短文，主题任选（可复现 u30 的观点话题），要求用上至少一个关系从句和一个被动态句子——写完后大声朗读给 AI 陪练听，这是全课程的结业任务。' }
    },
  ]
};
