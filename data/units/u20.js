// 第 20 单元：工作场景深化
export default {
  id: 'u20', num: '20', color: 'green', shape: 'square',
  de: 'Im Büro', zh: '工作场景深化',
  desc: '职场闲聊不再只聊天气：开会、请假、跟同事解释理由，这个单元教你情态动词的过去式和德语第二个从句 dass，外加一封像样的请假邮件。',
  kann: [
    { de: 'Ich kann mit den Präteritumformen der Modalverben (musste, konnte, wollte ...) über die Vergangenheit erzählen.', zh: '我能用情态动词的过去式讲述过去发生的事。' },
    { de: 'Ich kann mit einem dass-Satz meine Meinung oder den Grund für etwas erklären.', zh: '我能用 dass 从句说明我的意见或理由。' },
    { de: 'Ich kann eine formelle Urlaubs- oder Krankmeldung per E-Mail schreiben.', zh: '我能写一封正式的请假邮件。' },
  ],
  lessons: [
    {
      id: 'u20l1', title: '开会与请假闲聊', de: 'Ich musste gestern arbeiten',
      intro: '"昨天没能来开会"、"上周不得不加班"——职场闲聊离不开讲过去的安排和理由。这一课学职场核心词汇，语法上学情态动词的过去式（Präteritum）：口语里说"过去能/必须/被允许/想要/应该"几乎都用这一套形式，而不是 Perfekt。',
      sections: [
        {
          type: 'vocab', title: '职场日常', sub: '',
          items: [
            { de: 'Besprechung', art: 'die', pl: 'Besprechungen', zh: '（工作）会议，讨论', en: 'meeting/discussion', ex: 'Ich konnte nicht zur Besprechung kommen.', exZh: '我没能去开会。' },
            { de: 'Meeting', art: 'das', pl: 'Meetings', zh: '会议', en: 'meeting', note: '和 die Besprechung 意思一样，办公室里更常直接说英语借词 Meeting', ex: 'Das Meeting beginnt um 10 Uhr.', exZh: '会议10点开始。' },
            { de: 'Kollege', art: 'der', pl: 'Kollegen', zh: '同事（男）', en: 'colleague (male)', note: '弱变化名词（n-Deklination）：除第一格外都要加 -n —— den Kollegen, dem Kollegen, des Kollegen；u1 已经用过这个词，这里第一次正式讲它的变格', ex: 'Ich frage meinen Kollegen.', exZh: '我问问我的同事。' },
            { de: 'Kollegin', art: 'die', pl: 'Kolleginnen', zh: '同事（女）', en: 'colleague (female)', ex: 'Meine Kollegin hilft mir.', exZh: '我的同事在帮我。' },
            { de: 'Aufgabe', art: 'die', pl: 'Aufgaben', zh: '任务', en: 'task', ex: 'Die Aufgabe ist schwierig.', exZh: '这项任务很难。' },
            { de: 'Projekt', art: 'das', pl: 'Projekte', zh: '项目', en: 'project', ex: 'Das Projekt hat eine Deadline.', exZh: '这个项目有截止日期。' },
          ]
        },
        {
          type: 'vocab', title: '休假与任务处理', sub: '',
          items: [
            { de: 'Urlaub', art: 'der', zh: '休假，年假', en: 'vacation', ex: 'Ich nehme nächste Woche Urlaub.', exZh: '我下周休假。' },
            { de: 'Urlaub nehmen', zh: '休假（动作）', en: 'to take time off', ex: 'Ich möchte im August Urlaub nehmen.', exZh: '我想在八月休假。' },
            { de: 'beantragen', zh: '申请（某事物）', en: 'to apply for', note: '复现 u14：einen Antrag stellen 的动词形式，这里是"申请休假"beantragen', ex: 'Ich muss den Urlaub noch beantragen.', exZh: '我还得申请休假。' },
            { de: 'erledigen', zh: '完成，处理（任务）', en: 'to take care of/complete', ex: 'Ich erledige die Aufgabe heute.', exZh: '我今天来完成这项任务。' },
            { de: 'Pause', art: 'die', pl: 'Pausen', zh: '休息，间歇', en: 'break', ex: 'Machst du jetzt Pause?', exZh: '你现在要休息一下吗？' },
            { de: 'E-Mail', art: 'die', pl: 'E-Mails', zh: '电子邮件', en: 'email', note: '复现 u15', ex: 'Ich schreibe eine E-Mail.', exZh: '我在写一封电子邮件。' },
          ]
        },
        {
          type: 'dialogue', title: '昨天的会议出了什么事', scene: 'Wei 昨天没能参加部门会议，Anna 跟他说了会议内容，两人聊起了任务分工和 Wei 今年的休假计划。',
          lines: [
            { sp: 'Anna', de: 'Wei, warum warst du gestern nicht in der Besprechung?', zh: 'Wei，你昨天怎么没来开会？' },
            { sp: 'Wei', de: 'Ich konnte leider nicht kommen, ich musste ein dringendes Problem im Projekt lösen.', zh: '我实在来不了，我得处理项目里一个紧急问题。' },
            { sp: 'Anna', de: 'Ach so! Und hast du die E-Mail von unserer Kollegin gelesen?', zh: '原来如此！那你看了我们同事发的邮件吗？' },
            { sp: 'Wei', de: 'Ja, ich habe sie gelesen. Sie fragt: Wer erledigt die Aufgabe bis Freitag?', zh: '看了。她问：谁能在周五之前完成这项任务？' },
            { sp: 'Anna', de: 'Das sollte eigentlich unser Kollege machen, aber er durfte letzte Woche nicht arbeiten – er war krank.', zh: '这本来应该是我们那位男同事来做的，但他上周不能上班——他生病了。' },
            { sp: 'Wei', de: 'Oh nein, das ist mir neu. Dann erledige ich die Aufgabe heute.', zh: '哦不，这个我倒是第一次听说。那我今天来完成这个任务。' },
            { sp: 'Anna', de: 'Super, danke! Übrigens, wann nimmst du dieses Jahr Urlaub?', zh: '太好了，谢谢！对了，你今年打算什么时候休假？' },
            { sp: 'Wei', de: 'Ich wollte im August Urlaub nehmen, aber ich muss ihn erst beantragen.', zh: '我本来想八月休假，但得先申请。' },
            { sp: 'Anna', de: 'Mach das bald, sonst ist der beliebte Zeitraum schon voll.', zh: '赶紧申请吧，不然那段热门时间就被订满了。' },
            { sp: 'Wei', de: 'Gute Idee. Machst du jetzt Pause? Ich brauche auch eine.', zh: '好主意。你现在要休息一下吗？我也需要休息。' },
            { sp: 'Anna', de: 'Ja klar, lass uns zusammen einen Kaffee trinken.', zh: '当然，我们一起去喝杯咖啡吧。' },
            { sp: 'Wei', de: 'Gerne, ich wollte schon den ganzen Morgen einen Kaffee!', zh: '好啊，我一上午都想喝杯咖啡了！' },
          ]
        },
        {
          type: 'grammar', title: '情态动词的过去式：Präteritum der Modalverben', sub: '口语讲过去几乎只用这一套形式，不用 Perfekt',
          html: `<p>u12 学过 <mark>war/hatte</mark> 是口语里讲过去几乎唯一会用到的 Präteritum 形式——情态动词是第二组这样的例外。<b class="de">können、müssen、dürfen、wollen、sollen</b> 讲过去时都用 Präteritum，而不是 Perfekt。以 <b>können</b> 为例，完整变位：</p>
<table><tr><th>人称</th><th>können 的 Präteritum</th></tr>
<tr><td class="hl">ich</td><td class="hl">konnte</td></tr>
<tr><td class="hl">du</td><td class="hl">konntest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">konnte</td></tr>
<tr><td class="hl">wir</td><td class="hl">konnten</td></tr>
<tr><td class="hl">ihr</td><td class="hl">konntet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">konnten</td></tr></table>
<p>和 war/hatte 一样的规律：<b>ich 和 er/sie/es 用同一个形式</b>。五个情态动词的 ich 形式（也就是 er/sie/es 形式）汇总：</p>
<table><tr><th>现在时</th><th>Präteritum（ich/er 形式）</th></tr>
<tr><td class="hl">kann</td><td class="hl">konnte</td></tr>
<tr><td class="hl">muss</td><td class="hl">musste</td></tr>
<tr><td class="hl">darf</td><td class="hl">durfte</td></tr>
<tr><td class="hl">will</td><td class="hl">wollte</td></tr>
<tr><td class="hl">soll</td><td class="hl">sollte</td></tr></table>
<p>其余人称按 du/wir/ihr/sie 规律加词尾（-st/-n/-t/-n），和 konnte 表格是同一套模式。</p>
<p><b class="t">小知识：</b>情态动词其实也有 Perfekt 形式，但要用"双动词原形"结构（<mark>ich habe nicht kommen können</mark>），说起来生硬拗口，德国人口语几乎不用——直接记 Präteritum 这一套就够了。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">德国职场的休假文化：</b>法定最低年假是每年20个工作日（按五天工作制算，实际很多公司给到25-30天）。申请 Urlaub 一般要提前跟主管商量，学校假期（Ferien）前后是热门时段，最好提前几周甚至几个月申请。办公室的 Kaffeeküche（茶水间）也是德国职场很重要的非正式社交场合，不少团队感情和小道消息都是在那里喝咖啡时建立的。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"我能"的过去式怎么说？', options: ['konnte', 'kann', 'gekonnt'], answer: 0, why: 'können 的 Präteritum 是 konnte（ich/er 同形），口语讲过去几乎只用这个形式。' },
        { type: 'mcq', q: '"Er ___ letzte Woche nicht arbeiten, weil er krank war." 应该填哪个？', options: ['durfte', 'darf', 'gedurft'], answer: 0, why: 'dürfen 的 Präteritum 是 durfte，这里描述过去"不被允许/不能"工作。' },
        { type: 'cloze', zhHint: '我本来想八月休假。', before: 'Ich', after: 'im August Urlaub nehmen.', options: ['wollte', 'will', 'gewollt'], answer: 0, why: 'wollen 的 Präteritum 是 wollte。' },
        { type: 'order', zh: '这本来应该是我们同事做的。', words: ['Das', 'sollte', 'eigentlich', 'unser', 'Kollege', 'machen'], why: 'sollte 是 sollen 的 Präteritum，主语 unser Kollege，动词原形 machen 留在句尾（情态动词的句框结构）。' },
        { type: 'match', pairs: [['können → konnte', '能 → 过去能'], ['müssen → musste', '必须 → 过去必须'], ['dürfen → durfte', '被允许 → 过去被允许'], ['wollen → wollte', '想要 → 过去想要']] },
        { type: 'listen', audio: 'Ich musste gestern länger arbeiten, weil das Projekt eine Deadline hatte.', q: '这句话是什么意思？', options: ['我昨天不得不工作更久，因为项目有截止日期。', '我昨天没有工作。', '我今天必须工作到很晚。'], answer: 0, why: 'musste=必须（过去），weil...hatte=因为……有（weil从句V-letzt）。' },
        { type: 'listen', audio: 'Der Kollege durfte letzte Woche nicht arbeiten, er war krank.', q: '这句话是什么意思？', options: ['这位同事上周不能上班，他生病了。', '这位同事上周休假了。', '这位同事被解雇了。'], answer: 0, why: 'durfte nicht=（过去）不被允许/不能，war krank=生病了。' },
        { type: 'speak', de: 'Ich konnte gestern nicht kommen, ich musste ein Problem lösen.', zh: '我昨天来不了，我得处理一个问题。' },
      ],
      task: { title: '今天的生活任务', desc: '用今天学的情态动词过去式（konnte/musste/durfte/wollte/sollte），跟同事或朋友说一说你上周经历的一件事，比如"我上周不得不……""我本来想……但是……"。' }
    },
    {
      id: 'u20l2', title: '写一封请假邮件', de: 'Ich möchte Urlaub beantragen',
      intro: '"我不吃肉，因为……"用的是 weil 从句；表达"我觉得……""我希望……"用的是德语第二个从句结构：dass。这一课学会用 dass 从句转述观点和内容，还会看一封完整的请假邮件范例，把 dass 从句真正用进正式写作里。',
      sections: [
        {
          type: 'vocab', title: '请假流程', sub: '',
          items: [
            { de: 'genehmigen', zh: '批准', en: 'to approve', ex: 'Der Chef genehmigt meinen Urlaub.', exZh: '老板批准了我的休假。' },
            { de: 'Genehmigung', art: 'die', pl: 'Genehmigungen', zh: '批准，许可', en: 'approval', ex: 'Ich hoffe, dass ich die Genehmigung bekomme.', exZh: '我希望能拿到批准。' },
            { de: 'Chef', art: 'der', pl: 'Chefs', zh: '上司（男）', en: 'boss', ex: 'Der Chef ist heute nicht da.', exZh: '老板今天不在。' },
            { de: 'Chefin', art: 'die', pl: 'Chefinnen', zh: '上司（女）', en: 'boss (female)', ex: 'Ich frage meine Chefin.', exZh: '我去问问我的女上司。' },
            { de: 'Abwesenheit', art: 'die', pl: 'Abwesenheiten', zh: '缺席，不在', en: 'absence', ex: 'Ich melde meine Abwesenheit.', exZh: '我报备我的缺席。' },
            { de: 'Grund', art: 'der', pl: 'Gründe', zh: '原因，理由', en: 'reason', note: '复现 u18', ex: 'Ich nenne den Grund für die Abwesenheit.', exZh: '我说明一下缺席的理由。' },
          ]
        },
        {
          type: 'vocab', title: '表达看法与邮件套语', sub: '',
          items: [
            { de: 'finden', zh: '认为，觉得', en: 'to think/find', ex: 'Ich finde, dass die Regel wichtig ist.', exZh: '我觉得这条规定很重要。' },
            { de: 'denken', zh: '认为，想', en: 'to think', ex: 'Ich denke, dass das eine gute Idee ist.', exZh: '我觉得这是个好主意。' },
            { de: 'glauben', zh: '相信，认为', en: 'to believe/think', ex: 'Ich glaube, dass er heute nicht kommt.', exZh: '我觉得他今天不会来了。' },
            { de: 'hoffen', zh: '希望', en: 'to hope', ex: 'Ich hoffe, dass alles gut klappt.', exZh: '我希望一切顺利。' },
            { de: 'Sehr geehrte(r)', zh: '尊敬的……（正式邮件开头）', en: 'Dear...', note: '复现 u15', ex: 'Sehr geehrte Frau Meyer,', exZh: '尊敬的迈尔女士，' },
            { de: 'Mit freundlichen Grüßen', zh: '此致敬礼（正式邮件结尾）', en: 'Best regards', note: '复现 u15', ex: 'Mit freundlichen Grüßen, Wei', exZh: '此致敬礼，Wei' },
          ]
        },
        {
          type: 'dialogue', title: '这封请假邮件该怎么写', scene: 'Wei 想申请休假，跟 Anna 商量该怎么给上级写邮件说明情况。',
          lines: [
            { sp: 'Wei', de: 'Anna, ich glaube, dass ich diese Woche Urlaub beantragen sollte.', zh: 'Anna，我觉得我这周应该申请一下休假。' },
            { sp: 'Anna', de: 'Gute Idee! Denkst du, dass der Chef das genehmigt?', zh: '好主意！你觉得老板会批准吗？' },
            { sp: 'Wei', de: 'Ich hoffe, dass es kein Problem ist. Ich habe ja noch viele Urlaubstage.', zh: '我希望没问题。我还有很多年假天数呢。' },
            { sp: 'Anna', de: 'Das stimmt. Ich finde, dass du das einfach per E-Mail schreiben solltest.', zh: '没错。我觉得你干脆写封邮件说明就行了。' },
            { sp: 'Wei', de: 'Guter Plan. Wie soll ich die E-Mail am besten formulieren?', zh: '好主意。我该怎么写这封邮件最好？' },
            { sp: 'Anna', de: 'Schreib einfach den Zeitraum und den Grund, und dass ich deine Aufgaben übernehmen kann.', zh: '直接写清楚时间段和理由，还有说我可以接手你的工作。' },
            { sp: 'Wei', de: 'Perfekt, das mache ich. Meinst du, dass eine Woche zu lang ist?', zh: '太好了，我就这么写。你觉得一周会不会太长？' },
            { sp: 'Anna', de: 'Nein, ich glaube, dass eine Woche völlig normal ist.', zh: '不会，我觉得一周完全正常。' },
            { sp: 'Wei', de: 'Gut, dann schreibe ich, dass ich vom 12. bis 16. August weg bin.', zh: '好，那我就写我8月12号到16号不在。' },
            { sp: 'Anna', de: 'Vergiss nicht, dass du das Formular auch noch ausfüllen musst.', zh: '别忘了你还得填一下表格。' },
            { sp: 'Wei', de: 'Stimmt, danke für die Erinnerung!', zh: '对，谢谢你的提醒！' },
            { sp: 'Anna', de: 'Kein Problem. Ich glaube, dass das alles gut klappt.', zh: '没事。我觉得这一切都会顺利的。' },
          ]
        },
        {
          type: 'grammar', title: 'dass 从句：V-letzt 语序的第二次登场', sub: '和 u18 的 weil 同一套规则，作用不同',
          html: `<p>u18 学过 <mark>weil</mark> 引导的从句要把变位动词踢到最后（V-letzt）。<b class="de">dass</b>（"……这件事"）用的是完全一样的语序规则，但作用不同：<b>weil 给理由，dass 转述内容/观点</b>，常跟在 <mark>finden、denken、glauben、hoffen</mark> 这类"看法动词"后面：</p>
<table><tr><th>看法动词</th><th>dass 从句</th></tr>
<tr><td class="hl">Ich finde,</td><td class="hl">dass die Regel wichtig ist.</td></tr>
<tr><td class="hl">Ich glaube,</td><td class="hl">dass er heute nicht kommt.</td></tr>
<tr><td class="hl">Ich hoffe,</td><td class="hl">dass alles gut klappt.</td></tr></table>
<p>对比 weil 和 dass 就能看出：两者从句部分的语序规则完全相同（变位动词放最后），区别只在于逗号前面接的是"理由"还是"看法/内容"：</p>
<table><tr><th>weil（理由）</th><th>dass（内容/看法）</th></tr>
<tr><td class="hl">..., weil ich krank bin.</td><td class="hl">Ich finde, dass ich krank bin.</td></tr></table>
<p>从句里有情态动词时，规则也和 weil 一样——情态动词踢到最后：<mark>Ich denke, dass du das Formular ausfüllen musst.</mark>（我觉得你得填一下这张表。）</p>`
        },
        {
          type: 'grammar', title: '请假邮件范例', sub: '把 dass 从句用进正式写作',
          html: `<p>把今天学的词汇和 dass 从句放进一封完整的请假邮件——结构延续 u15 学过的正式邮件格式：</p>
<p class="de">Betreff: Urlaubsantrag für den 12.–16. August</p>
<p class="de">Sehr geehrte Frau Meyer,<br>ich möchte hiermit Urlaub für den Zeitraum vom 12. bis 16. August beantragen. Ich hoffe, dass das für das Team keine Probleme verursacht. Meine Kollegin Anna hat mir gesagt, dass sie in dieser Zeit meine Aufgaben übernehmen kann.<br>Ich bitte Sie um eine kurze Rückmeldung.<br><br>Mit freundlichen Grüßen<br>Wei</p>
<p>拆解一下结构：<b>Betreff</b>（主题行，直接写清楚时间段）→ <b>Sehr geehrte/r + 姓氏</b>（u15 学过的正式称呼）→ 用情态动词说明请求（möchte...beantragen）→ 用 <mark>dass</mark> 从句补充说明理由和安排 → <b>Mit freundlichen Grüßen</b> 收尾（u15 学过）。这个结构可以直接套用到几乎任何正式请求邮件上。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">请假 vs 请病假：</b>请病假（krankschreiben，u10 学过）和请年假（Urlaub beantragen）是两回事——生病请假通常一个电话或短信通知即可，医生开的 Krankschreibung 事后补上；年假则一般需要提前通过邮件或公司系统申请并等待批准。称呼与结束语延续 u15 学过的正式邮件结构：Sehr geehrte(r) + 姓氏开头，Mit freundlichen Grüßen 结尾。'
        },
      ],
      exercises: [
        { type: 'mcq', q: 'dass 从句属于哪种语序？', options: ['V-letzt（动词放最后）', 'V2（动词第二位）', 'V1'], answer: 0, why: 'dass 和 weil 一样，引导的从句是 V-letzt 语序。' },
        { type: 'mcq', q: '"Ich finde, ___ die Regel wichtig ist." 应该填哪个？', options: ['dass', 'weil', 'wenn'], answer: 0, why: 'finden + dass从句 表达"我觉得……"，是转述观点/内容，不是给理由。' },
        { type: 'cloze', zhHint: '我希望这不会造成问题。', before: 'Ich hoffe, dass das keine Probleme', after: '.', options: ['verursacht', 'verursachen', 'verursachte'], answer: 0, why: '从句主语是 das（单数第三人称），动词变位 verursacht，且放在从句末尾。' },
        { type: 'order', zh: '我觉得这封邮件很重要。', words: ['Ich', 'finde,', 'dass', 'die', 'E-Mail', 'wichtig', 'ist'], why: 'dass从句V-letzt语序，变位动词 ist 放在从句最后。' },
        { type: 'match', pairs: [['finden', '认为，觉得'], ['glauben', '相信，认为'], ['hoffen', '希望'], ['die Genehmigung', '批准，许可']] },
        { type: 'listen', audio: 'Ich glaube, dass eine Woche völlig normal ist.', q: '这句话是什么意思？', options: ['我觉得一周完全正常。', '我觉得一周太长了。', '我不确定要请几天假。'], answer: 0, why: 'glauben + dass从句 = 我觉得……，völlig normal = 完全正常。' },
        { type: 'listen', audio: 'Vergiss nicht, dass du das Formular ausfüllen musst.', q: '这句话是什么意思？', options: ['别忘了你还得填一下表格。', '表格已经填好了。', '你不需要填表格。'], answer: 0, why: 'Vergiss nicht, dass...=别忘了……，dass从句里 musst 放在最后。' },
        { type: 'speak', de: 'Ich finde, dass du das einfach per E-Mail schreiben solltest.', zh: '我觉得你干脆写封邮件说明就行了。' },
      ],
      task: { title: '今天的生活任务', desc: '写一封真实或模拟的请假邮件（Sehr geehrte/r 开头，Mit freundlichen Grüßen 结尾），用上至少一个 dass 从句说明理由或安排，比如 "Ich hoffe, dass..."。' }
    },
  ]
};
