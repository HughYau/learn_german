// 第 21 单元：健康与保险
export default {
  id: 'u21', num: '21', color: 'yellow', shape: 'square',
  de: 'Gesund bleiben', zh: '健康与保险',
  desc: '从医保体系到专科预约，这个单元带你搞懂德国看病的门道，还会教你第一批反身动词——描述"自己感觉怎么样"从此有了专门的语法工具。',
  kann: [
    { de: 'Ich kann mit reflexiven Verben (sich fühlen, sich erkälten, sich ausruhen) über mein Befinden sprechen.', zh: '我能用反身动词描述自己的身体感觉。' },
    { de: 'Ich kann telefonisch einen Facharzttermin vereinbaren und meine Beschwerden nennen.', zh: '我能打电话预约专科医生并说明症状。' },
    { de: 'Ich kann mit festen Präpositionen (sich freuen auf, sich kümmern um) sagen, worauf ich mich freue oder um wen ich mich kümmere.', zh: '我能用带固定介词的反身动词表达期待某事或照顾某人。' },
  ],
  lessons: [
    {
      id: 'u21l1', title: '预约看病与医保', de: 'Ich fühle mich nicht gut',
      intro: '德国看病离不开一张医保卡和一套"先看 Hausarzt 再转诊"的流程。这一课学会医保体系的基础词汇，语法上学第一批反身动词——sich fühlen（感觉）、sich erkälten（感冒）、sich ausruhen（休息），用到的反身代词正好和 u19 刚学的 Akkusativ 人称代词高度重合，只是第三人称/敬称统一变成一个词：sich。',
      sections: [
        {
          type: 'vocab', title: '医保体系', sub: '',
          items: [
            { de: 'Krankenversicherung', art: 'die', pl: 'Krankenversicherungen', zh: '医疗保险', en: 'health insurance', ex: 'In Deutschland braucht jeder eine Krankenversicherung.', exZh: '在德国每个人都需要医疗保险。' },
            { de: 'gesetzlich', zh: '法定的', en: 'statutory/public', ex: 'Ich bin gesetzlich versichert.', exZh: '我是法定医保。' },
            { de: 'privat', zh: '私人的', en: 'private', ex: 'Er ist privat versichert.', exZh: '他是私人医保。' },
            { de: 'Versichertenkarte', art: 'die', pl: 'Versichertenkarten', zh: '医保卡', en: 'health insurance card', ex: 'Haben Sie Ihre Versichertenkarte dabei?', exZh: '您带医保卡了吗？' },
            { de: 'Termin', art: 'der', pl: 'Termine', zh: '预约', en: 'appointment', note: '复现 u7', ex: 'Ich habe morgen einen Termin beim Arzt.', exZh: '我明天约了医生。' },
          ]
        },
        {
          type: 'vocab', title: '看病流程', sub: '',
          items: [
            { de: 'Überweisung', art: 'die', pl: 'Überweisungen', zh: '转诊单', en: 'referral', ex: 'Der Arzt schreibt mir eine Überweisung.', exZh: '医生给我开一张转诊单。' },
            { de: 'Facharzt', art: 'der', pl: 'Fachärzte', zh: '专科医生（男）', en: 'specialist doctor', ex: 'Ich brauche einen Termin beim Facharzt.', exZh: '我需要约一位专科医生。' },
            { de: 'Fachärztin', art: 'die', pl: 'Fachärztinnen', zh: '专科医生（女）', en: 'specialist doctor (female)', ex: 'Die Fachärztin untersucht mich nächste Woche.', exZh: '专科医生下周给我做检查。' },
            { de: 'Praxis', art: 'die', pl: 'Praxen', zh: '诊所', en: 'doctor’s practice', ex: 'Die Praxis öffnet um acht Uhr.', exZh: '诊所八点开门。' },
            { de: 'Wartezimmer', art: 'das', pl: 'Wartezimmer', zh: '候诊室', en: 'waiting room', ex: 'Ich warte im Wartezimmer.', exZh: '我在候诊室等着。' },
          ]
        },
        {
          type: 'dialogue', title: '在 Hausarzt 诊所前台', scene: 'Wei 感冒了，打电话到 Hausarzt 诊所，向前台说明症状，预约今天的号并了解转诊的事。',
          lines: [
            { sp: 'Wei', de: 'Guten Tag, ich fühle mich seit ein paar Tagen nicht gut. Ich glaube, ich habe mich erkältet.', zh: '您好，我这几天感觉不太好。我觉得我感冒了。' },
            { sp: 'Arzthelferin', de: 'Das tut mir leid. Haben Sie schon einen Termin bei uns?', zh: '真遗憾。您已经预约过我们这儿了吗？' },
            { sp: 'Wei', de: 'Nein, noch nicht. Ich bin gesetzlich versichert, reicht meine Versichertenkarte?', zh: '还没有。我是法定医保，我的医保卡够用吗？' },
            { sp: 'Arzthelferin', de: 'Ja, die Karte reicht völlig. Ruhen Sie sich erst mal zu Hause aus, wir haben heute noch einen Platz frei.', zh: '是的，卡就够了。您先在家好好休息一下，我们今天还有一个空位。' },
            { sp: 'Wei', de: 'Super, danke! Und ich glaube, ich brauche auch eine Überweisung zu einem Facharzt.', zh: '太好了，谢谢！我觉得我还需要一张转诊单去看专科医生。' },
            { sp: 'Arzthelferin', de: 'Verstehe. Fühlen Sie sich schon länger schlecht?', zh: '明白了。您已经不舒服很久了吗？' },
            { sp: 'Wei', de: 'Ja, mein Rücken tut schon seit Wochen weh. Ich möchte zu einem Facharzt für Orthopädie.', zh: '是的，我的背已经疼了好几周了。我想去看骨科专科医生。' },
            { sp: 'Arzthelferin', de: 'Verstehe. Der Arzt schreibt Ihnen dann heute eine Überweisung.', zh: '明白了。医生今天会给您开一张转诊单。' },
            { sp: 'Wei', de: 'Perfekt. Muss ich im Wartezimmer lange warten?', zh: '太好了。我要在候诊室等很久吗？' },
            { sp: 'Arzthelferin', de: 'Heute nicht so lange, es sind nicht viele Patienten da.', zh: '今天不会等太久，今天病人不多。' },
            { sp: 'Wei', de: 'Gut, dann ruhe ich mich jetzt kurz aus und komme um drei.', zh: '好，那我现在先休息一下，三点过来。' },
            { sp: 'Arzthelferin', de: 'In Ordnung, bis später. Gute Besserung!', zh: '好的，回头见。祝您早日康复！' },
          ]
        },
        {
          type: 'grammar', title: '反身动词第一批：sich fühlen / sich erkälten / sich ausruhen', sub: '反身代词 Akkusativ 表，和 u19 的人称代词几乎共用一套',
          html: `<p>有些动词的动作"反过来作用在自己身上"，德语要在动词后面加一个<b>反身代词</b>，这类动词叫<b>反身动词</b>。反身代词的形式和 u19 学的 Akkusativ 人称代词几乎一样，唯一的区别是：<b>第三人称（他/她/它/他们）和敬称 Sie 统一变成一个词——sich</b>：</p>
<table><tr><th>Nominativ</th><th>反身代词（Akkusativ）</th></tr>
<tr><td class="hl">ich</td><td class="hl">mich</td></tr>
<tr><td class="hl">du</td><td class="hl">dich</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">sich</td></tr>
<tr><td class="hl">wir</td><td class="hl">uns</td></tr>
<tr><td class="hl">ihr</td><td class="hl">euch</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">sich</td></tr></table>
<p>第三人称反而是最简单的——不管是他、她、他们还是敬称 Sie，反身代词永远是 <mark>sich</mark>，不用区分性别和数。用 <b class="de">sich fühlen</b>（感觉）举例：</p>
<table><tr><th>人称</th><th>sich fühlen</th></tr>
<tr><td class="hl">ich</td><td class="hl">fühle mich</td></tr>
<tr><td class="hl">du</td><td class="hl">fühlst dich</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">fühlt sich</td></tr>
<tr><td class="hl">wir</td><td class="hl">fühlen uns</td></tr>
<tr><td class="hl">ihr</td><td class="hl">fühlt euch</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">fühlen sich</td></tr></table>
<p><b class="de">sich erkälten</b>（感冒）用法一样：<mark>Ich habe mich erkältet.</mark>（我感冒了——注意 Perfekt 里反身代词紧跟在 haben 后面。）</p>`
        },
        {
          type: 'grammar', title: 'sich ausruhen：反身 + 可分动词的组合', sub: '两个已学规律叠在一起',
          html: `<p><b class="de">sich ausruhen</b>（休息）比较特别：它同时是<b>反身动词</b>又是<b>可分动词</b>（前缀 aus + 词干 ruhen，u13 学过的结构），两个规律要一起用：</p>
<table><tr><th>时态</th><th>例句</th></tr>
<tr><td class="hl">现在时</td><td class="hl">Ich ruhe mich aus.（前缀 aus 踢到句尾，反身代词紧跟在变位动词后面）</td></tr>
<tr><td class="hl">命令式（Sie）</td><td class="hl">Ruhen Sie sich aus!（u10 学过的 Sie 命令式，配上反身代词 sich）</td></tr>
<tr><td class="hl">Perfekt</td><td class="hl">Ich habe mich ausgeruht.（ge- 插进前缀和词干中间，反身代词紧跟 habe）</td></tr></table>
<p>记住顺序：<b>变位的部分（动词或 haben）永远排第二位，紧跟着反身代词，可分前缀或 Partizip II 才踢到句尾</b>——这和情态动词、可分动词、Perfekt 的句框结构是同一个原理，只是现在多了一个反身代词插在中间。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">德国看病的基本流程：</b>一般遵循 Hausarzt（家庭医生）优先的原则——小毛病先找 Hausarzt，需要更专业的检查才会开一张 Überweisung（转诊单）去看 Facharzt（专科医生）。专科医生的预约常常要等上几周甚至几个月，具体预约渠道和加急办法以你所在地区/保险公司官网为准。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"我感觉不舒服"用反身动词怎么说？', options: ['Ich fühle mich nicht gut.', 'Ich fühle dich nicht gut.', 'Ich fühlt mich nicht gut.'], answer: 0, why: 'sich fühlen：ich fühle mich，反身代词第一人称是 mich。' },
        { type: 'mcq', q: '"你感冒了吗？"用反身动词 sich erkälten，du 形式怎么变？', options: ['Hast du dich erkältet?', 'Hast du sich erkältet?', 'Hast du mich erkältet?'], answer: 0, why: 'du 对应的反身代词是 dich。' },
        { type: 'cloze', zhHint: '请您先在家休息一下。', before: 'Ruhen Sie', after: 'erst mal zu Hause aus.', options: ['sich', 'dich', 'mich'], answer: 0, why: 'Sie 对应的反身代词是 sich，ausruhen 是可分动词，前缀 aus 踢到句尾。' },
        { type: 'order', zh: '我已经感冒了。', words: ['Ich', 'habe', 'mich', 'erkältet'], why: '反身动词的 Perfekt：haben + 反身代词 + Partizip II，mich 紧跟在 habe 后面。' },
        { type: 'match', pairs: [['sich fühlen', '感觉'], ['sich erkälten', '感冒'], ['sich ausruhen', '休息'], ['die Überweisung', '转诊单']] },
        { type: 'listen', audio: 'Ich fühle mich seit ein paar Tagen nicht gut.', q: '这句话是什么意思？', options: ['我这几天感觉不太好。', '我今天感觉很好。', '我几天前生病了，现在好了。'], answer: 0, why: 'sich fühlen=感觉，seit ein paar Tagen=这几天以来。' },
        { type: 'listen', audio: 'Ruhen Sie sich erst mal zu Hause aus.', q: '这句话是什么意思？', options: ['您先在家休息一下。', '您需要马上去医院。', '您不能待在家里。'], answer: 0, why: 'sich ausruhen=休息，Sie 命令式配反身代词 sich。' },
        { type: 'speak', de: 'Ich glaube, ich habe mich erkältet.', zh: '我觉得我感冒了。' },
      ],
      task: { title: '今天的生活任务', desc: '用 sich fühlen / sich erkälten / sich ausruhen 这三个反身动词，写2-3句话描述你最近一次身体不舒服的经历（真实或虚构都可以）。' }
    },
    {
      id: 'u21l2', title: '专科预约与照顾彼此', de: 'Ich kümmere mich um dich',
      intro: '这一课继续深化看病场景，巩固 u19 学过的 Akkusativ 人称代词，再学两个日常超高频的反身动词：sich kümmern um（照顾/负责）和 sich freuen auf（期待）——它们都固定搭配一个介词，这个介词的格不再由 wo/wohin 决定，而是整个短语固定下来的。',
      sections: [
        {
          type: 'vocab', title: '问诊深化', sub: '',
          items: [
            { de: 'Sprechstunde', art: 'die', pl: 'Sprechstunden', zh: '门诊时间', en: 'office hours (doctor)', note: '复现 u10', ex: 'Die Sprechstunde beginnt um neun Uhr.', exZh: '门诊时间九点开始。' },
            { de: 'Symptom', art: 'das', pl: 'Symptome', zh: '症状', en: 'symptom', ex: 'Der Arzt fragt nach meinen Symptomen.', exZh: '医生询问我的症状。' },
            { de: 'untersuchen', zh: '检查（身体）', en: 'to examine', ex: 'Der Arzt untersucht mich.', exZh: '医生给我做检查。' },
            { de: 'Beschwerden', art: 'die', zh: '不适症状（常用复数）', en: 'complaints/symptoms', note: '和 u10 学的 die Schmerzen（疼痛）是近义词，Beschwerden 范围更广，不限于疼痛', ex: 'Ich habe seit Wochen Beschwerden.', exZh: '我已经好几周感到不适了。' },
          ]
        },
        {
          type: 'vocab', title: '反身动词短语', sub: '',
          items: [
            { de: 'sich kümmern um', zh: '照顾，负责（+ Akkusativ）', en: 'to take care of', ex: 'Ich kümmere mich um meine Kollegin.', exZh: '我来照顾我的同事。' },
            { de: 'sich freuen auf', zh: '期待（+ Akkusativ）', en: 'to look forward to', note: 'u18 已经用过 Ich freue mich，当时没细讲反身代词的道理，这里正式补上语法解释', ex: 'Ich freue mich auf das Wochenende.', exZh: '我很期待周末。' },
            { de: 'sich erholen', zh: '恢复，休养', en: 'to recover', ex: 'Ich muss mich jetzt erholen.', exZh: '我现在得好好恢复一下。' },
            { de: 'sich Sorgen machen um', zh: '担心（+ Akkusativ）', en: 'to worry about', ex: 'Mach dir keine Sorgen!', exZh: '别担心！' },
          ]
        },
        {
          type: 'dialogue', title: '照看彼此', scene: 'Anna 关心生病的 Wei，Wei 讲了自己去看专科医生的安排，两人聊起谁来照顾谁的事。',
          lines: [
            { sp: 'Anna', de: 'Wei, wie geht es dir? Du hast dich doch letzte Woche erkältet, oder?', zh: 'Wei，你还好吗？你上周不是感冒了吗？' },
            { sp: 'Wei', de: 'Ja, aber es geht mir schon besser. Ich habe gestern einen Facharzt angerufen und einen Termin bekommen.', zh: '是的，不过我已经好多了。我昨天给专科医生打了电话，约到了时间。' },
            { sp: 'Anna', de: 'Das ist gut! Was hast du dem Arzt über deine Beschwerden erzählt?', zh: '那太好了！你跟医生说了什么症状？' },
            { sp: 'Wei', de: 'Ich habe gesagt, dass mein Rücken seit Wochen wehtut und ich mich oft müde fühle.', zh: '我说我的背疼了好几周，而且我经常感觉很累。' },
            { sp: 'Anna', de: 'Verstehe. Untersucht der Arzt dich dann gründlich?', zh: '明白了。那医生会给你做全面检查吗？' },
            { sp: 'Wei', de: 'Ja, er will mich nächste Woche untersuchen und alle Symptome kontrollieren.', zh: '会的，他打算下周给我做检查，看看所有症状。' },
            { sp: 'Anna', de: 'Ich freue mich schon auf die Nachricht, dass es dir bald besser geht.', zh: '我已经开始期待听到你好转的消息了。' },
            { sp: 'Wei', de: 'Danke, das bedeutet mir viel. Kannst du dich vielleicht kurz um meine Pflanzen kümmern?', zh: '谢谢，这对我来说意义很大。你能不能帮我照看一下我的植物？' },
            { sp: 'Anna', de: 'Klar, kein Problem! Ich kümmere mich gern um deine Pflanzen. Ruh dich einfach aus!', zh: '当然，没问题！我很乐意帮你照看你的植物。你就好好休息吧！' },
            { sp: 'Wei', de: 'Super, vielen Dank! Ich muss mich jetzt wirklich erholen.', zh: '太好了，非常感谢！我现在真的得好好恢复一下。' },
            { sp: 'Anna', de: 'Mach das. Ruf mich einfach an, ich helfe dir gern.', zh: '好好休息吧。有事就给我打电话，我很乐意帮你。' },
            { sp: 'Wei', de: 'Das mache ich. Danke, dass du dich so gut um mich kümmerst!', zh: '我会的。谢谢你这么照顾我！' },
          ]
        },
        {
          type: 'grammar', title: '人称代词 Akkusativ 巩固', sub: '呼应 u19 的完整三格表',
          html: `<p>u19 第一次完整摆出人称代词的三格表，这里用看病场景再巩固一遍 Akkusativ 那一列——凡是及物动词的直接宾语，都要用这一套：</p>
<table><tr><th>句子</th><th>Akkusativ 代词</th></tr>
<tr><td class="hl">Der Arzt untersucht mich.</td><td class="hl">mich（我）</td></tr>
<tr><td class="hl">Der Arzt untersucht dich.</td><td class="hl">dich（你）</td></tr>
<tr><td class="hl">Der Arzt untersucht ihn/sie.</td><td class="hl">ihn/sie（他/她）</td></tr>
<tr><td class="hl">Ruf mich an, wenn du Zeit hast.</td><td class="hl">mich（我，anrufen 的宾语）</td></tr></table>
<p>对比反身代词就能看出区别：<b>反身代词</b>（sich 那一套）用在"动作作用在自己身上"的时候，<b>普通 Akkusativ 代词</b>用在"动作作用在别人身上"的时候——<mark>Ich fühle mich krank.</mark>（我感觉自己生病了，反身）对 <mark>Der Arzt untersucht mich.</mark>（医生检查我，普通宾语）。</p>`
        },
        {
          type: 'grammar', title: '反身动词 + 固定介词：sich freuen auf / sich kümmern um', sub: '高危点：这里的介词格不再看 wo/wohin',
          html: `<p>不少反身动词习惯搭配一个固定介词，构成一个整体短语，格也随之固定下来——不再按 u16 的 wo/wohin 逻辑判断：</p>
<table><tr><th>短语</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">sich freuen auf + Akkusativ</td><td>期待</td><td class="hl">Ich freue mich auf den Termin.</td></tr>
<tr><td class="hl">sich kümmern um + Akkusativ</td><td>照顾，负责</td><td class="hl">Sie kümmert sich um die Patientin.</td></tr>
<tr><td class="hl">sich Sorgen machen um + Akkusativ</td><td>担心</td><td class="hl">Ich mache mir Sorgen um dich.</td></tr></table>
<p><b class="t">高危点：</b><mark>auf</mark> 本来是 u16 学过的两格介词，正常情况下要看 wo 还是 wohin 才能决定格。但在 <b class="de">sich freuen auf</b> 这个固定搭配里，<b>无论语境永远接 Akkusativ</b>——这是固定动词短语的例外，格已经被这个短语本身锁死，不再由位置/方向逻辑决定。<mark>um</mark> 则本来就在 u19 学的"永远 Akkusativ"介词组里，和 sich kümmern um 天然一致，没有冲突。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">法定医保公司名字：</b>德国的法定医保（gesetzliche Krankenversicherung）常见的几家公司名字：TK（Techniker Krankenkasse）、AOK、Barmer、DAK 等，选哪一家更多是保费和附加服务的区别，基础报销范围差别不大。私人医保（private Krankenversicherung）通常需要先自己垫付再申请报销，规则更复杂，具体以你的保险合同为准。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"医生检查我。"用哪个人称代词？', options: ['Der Arzt untersucht mich.', 'Der Arzt untersucht ich.', 'Der Arzt untersucht mir.'], answer: 0, why: 'untersuchen 是及物动词接 Akkusativ，"我"用 mich。' },
        { type: 'mcq', q: '"sich freuen auf" 后面接哪个格？', options: ['Akkusativ（固定搭配）', 'Dativ', 'Nominativ'], answer: 0, why: 'auf 本来是两格介词，但在 sich freuen auf 这个固定搭配里永远接 Akkusativ，不再看 wo/wohin。' },
        { type: 'cloze', zhHint: '我很乐意照顾你的植物。', before: 'Ich kümmere mich gern', after: 'deine Pflanzen.', options: ['um', 'für', 'auf'], answer: 0, why: 'sich kümmern um + Akkusativ 是固定搭配，意思是"照顾/负责"。' },
        { type: 'order', zh: '我已经开始期待这个预约了。', words: ['Ich', 'freue', 'mich', 'schon', 'auf', 'den', 'Termin'], why: 'sich freuen auf + Akkusativ，den Termin 是阳性 Akkusativ。' },
        { type: 'match', pairs: [['sich kümmern um', '照顾/负责'], ['sich freuen auf', '期待'], ['sich erholen', '恢复，休养'], ['die Beschwerden', '不适症状']] },
        { type: 'listen', audio: 'Kannst du dich vielleicht kurz um meine Pflanzen kümmern?', q: '这句话是什么意思？', options: ['你能不能帮我照看一下我的植物？', '你能不能陪我去买植物？', '你的植物需要浇水吗？'], answer: 0, why: 'sich kümmern um=照顾，负责。' },
        { type: 'listen', audio: 'Ich muss mich jetzt wirklich erholen.', q: '这句话是什么意思？', options: ['我现在真的得好好恢复一下。', '我现在必须马上出门。', '我已经完全恢复了。'], answer: 0, why: 'sich erholen=恢复，休养。' },
        { type: 'speak', de: 'Danke, dass du dich so gut um mich kümmerst!', zh: '谢谢你这么照顾我！' },
      ],
      task: { title: '今天的生活任务', desc: '模拟打电话预约一次专科医生，用反身动词（sich fühlen / sich kümmern um / sich freuen auf 等）和人称代词 Akkusativ 描述一下自己的情况，说给自己或朋友听。' }
    },
  ]
};
