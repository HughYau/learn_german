// 第 10 单元：身体与看病
export default {
  id: 'u10', num: '10', color: 'yellow', shape: 'tri',
  de: 'Beim Arzt', zh: '身体与看病',
  desc: '感冒发烧要去看医生、去药店买药、还得跟老板请病假——这个单元教你说清楚哪里不舒服，还有德语命令式：医生的医嘱几乎全是这个句型。',
  kann: [
    { de: 'Ich kann beim Arzt beschreiben, was mir fehlt („Mir geht’s nicht gut“, „... tut mir weh“).', zh: '我能在看医生时说清楚自己哪里不舒服。' },
    { de: 'Ich kann in der Apotheke nach einem Medikament fragen.', zh: '我能在药店询问需要的药品。' },
    { de: 'Ich kann Imperativsätze in der Sie-Form verstehen, z. B. Anweisungen vom Arzt.', zh: '我能听懂医生用命令式给出的医嘱。' },
    { de: 'Ich kann eine kurze Krankmeldung schreiben.', zh: '我能写一条简短的请病假消息。' },
  ],
  lessons: [
    {
      id: 'u10l1', title: '我不太舒服', de: 'Mir geht’s nicht gut',
      intro: '生病是每个在异国生活的人迟早要面对的场景。这一课学会身体部位、常见症状，还有德语里说"哪里疼"最重要的固定框架——"Der Kopf tut mir weh"。这个框架背后其实是 Dativ（第三格）的第一次露面，但你现在不需要懂语法术语，把它当整句背下来就够用。',
      sections: [
        {
          type: 'vocab', title: '身体部位', sub: '',
          items: [
            { de: 'Kopf', art: 'der', pl: 'Köpfe', zh: '头', en: 'head', ex: 'Der Kopf tut mir seit gestern weh.', exZh: '我的头从昨天起就疼。' },
            { de: 'Bauch', art: 'der', pl: 'Bäuche', zh: '肚子', en: 'belly/stomach', ex: 'Tut dir der Bauch weh?', exZh: '你肚子疼吗？' },
            { de: 'Hals', art: 'der', pl: 'Hälse', zh: '喉咙，脖子', en: 'throat/neck', ex: 'Mein Hals tut auch weh.', exZh: '我的喉咙也疼。' },
            { de: 'Rücken', art: 'der', pl: 'Rücken', zh: '背', en: 'back', ex: 'Ich habe Rückenschmerzen.', exZh: '我背疼。' },
            { de: 'Arm', art: 'der', pl: 'Arme', zh: '胳膊', en: 'arm', ex: 'Der Arm tut mir weh.', exZh: '我胳膊疼。' },
            { de: 'Bein', art: 'das', pl: 'Beine', zh: '腿', en: 'leg', ex: 'Das Bein tut mir weh.', exZh: '我腿疼。' },
            { de: 'Ohr', art: 'das', pl: 'Ohren', zh: '耳朵', en: 'ear', ex: 'Die Ohren tun mir weh.', exZh: '我两只耳朵都疼。' },
          ]
        },
        {
          type: 'vocab', title: '症状与健康', sub: '',
          items: [
            { de: 'Fieber', art: 'das', zh: '发烧', en: 'fever', ex: 'Ich habe Fieber.', exZh: '我发烧了。' },
            { de: 'Husten', art: 'der', zh: '咳嗽', en: 'cough', ex: 'Ich habe Husten und Schnupfen.', exZh: '我又咳嗽又流鼻涕。' },
            { de: 'Schnupfen', art: 'der', zh: '流鼻涕，鼻塞', en: 'runny nose', ex: 'Haben Sie auch Schnupfen?', exZh: '您也流鼻涕吗？' },
            { de: 'Schmerz', art: 'der', pl: 'Schmerzen', zh: '疼痛', en: 'pain', ex: 'Ich habe Kopfschmerzen.', exZh: '我头疼。', note: '说"哪里疼"常用复数 Schmerzen：Ich habe Kopfschmerzen（我头疼）' },
            { de: 'krank', zh: '生病的', en: 'sick', ex: 'Ich bin krank und bleibe zu Hause.', exZh: '我生病了，待在家里。' },
            { de: 'gesund', zh: '健康的', en: 'healthy', ex: 'Ich bin wieder gesund.', exZh: '我病好了。' },
            { de: 'wehtun', zh: '疼，痛', en: 'to hurt', ex: 'Der Kopf tut mir weh.', exZh: '我头疼。' },
            { de: 'Sprechstunde', art: 'die', pl: 'Sprechstunden', zh: '（医生的）门诊时间', en: 'office hours', ex: 'Die Sprechstunde ist von neun bis zwölf.', exZh: '门诊时间是九点到十二点。' },
          ]
        },
        {
          type: 'vocab', title: '看医生', sub: '',
          items: [
            { de: 'Hausarzt', art: 'der', pl: 'Hausärzte', zh: '家庭医生（男）', en: 'family doctor (male)', ex: 'Mein Hausarzt ist sehr nett.', exZh: '我的家庭医生人很好。' },
            { de: 'Hausärztin', art: 'die', pl: 'Hausärztinnen', zh: '家庭医生（女）', en: 'family doctor (female)', ex: 'Meine Hausärztin ist heute nicht da.', exZh: '我的家庭医生今天不在。' },
            { de: 'Was fehlt Ihnen?', zh: '您哪里不舒服？（医生问诊常用句）', en: 'What’s wrong with you?', ex: 'Guten Tag, was fehlt Ihnen denn?', exZh: '您好，您哪里不舒服？' },
          ]
        },
        {
          type: 'dialogue', title: '在家庭医生诊所', scene: 'Wei 感冒好几天了，预约后去看家庭医生。注意医生问诊的固定句式。',
          lines: [
            { sp: 'Ärztin', de: 'Guten Tag, Herr Wei. Was fehlt Ihnen denn?', zh: '您好，Wei 先生。您哪里不舒服？' },
            { sp: 'Wei', de: 'Guten Tag. Mir geht’s nicht gut. Ich habe Husten und Schnupfen.', zh: '您好。我不太舒服。我又咳嗽又流鼻涕。' },
            { sp: 'Ärztin', de: 'Haben Sie auch Fieber?', zh: '您也发烧了吗？' },
            { sp: 'Wei', de: 'Ja, ich glaube schon. Und mein Hals tut auch weh.', zh: '是的，我想是的。我的喉咙也疼。' },
            { sp: 'Ärztin', de: 'Hmm, und der Kopf? Tut der Kopf auch weh?', zh: '嗯，那头呢？头也疼吗？' },
            { sp: 'Wei', de: 'Ja, der Kopf tut mir seit gestern weh.', zh: '疼，我的头从昨天起就一直疼。' },
            { sp: 'Ärztin', de: 'Das klingt nach einer normalen Erkältung. Haben Sie auch Rückenschmerzen?', zh: '这听起来像普通感冒。您背也疼吗？' },
            { sp: 'Wei', de: 'Nein, der Rücken ist okay. Nur Kopf und Hals tun weh.', zh: '不疼，背没事。只有头和喉咙疼。' },
            { sp: 'Ärztin', de: 'Gut, das ist nicht so schlimm. Sie brauchen vor allem Ruhe.', zh: '好，那不算严重。您最需要的是休息。' },
            { sp: 'Wei', de: 'Verstehe. Was soll ich sonst noch tun?', zh: '明白了。我还应该做些什么？' },
            { sp: 'Ärztin', de: 'Trinken Sie viel Tee und bleiben Sie ein paar Tage zu Hause.', zh: '多喝茶，在家待几天。' },
            { sp: 'Wei', de: 'Alles klar, vielen Dank, Frau Doktor!', zh: '明白了，非常感谢，医生！' },
          ]
        },
        {
          type: 'grammar', title: '"Mir geht’s nicht gut" 和 "... tut mir weh"', sub: '两个固定框架，先会用再懂原理',
          html: `<p>德语说自己不舒服，最常用两个固定框架，直接整句背下来就能用：</p>
<p class="de"><b>Mir geht’s (nicht) gut.</b>（我（不）舒服，字面："对我而言过得（不）好"）</p>
<p class="de"><b>[身体部位] tut mir weh.</b>（我的……疼，字面："……对我造成疼痛"）</p>
<table><tr><th>例句</th><th>意思</th></tr>
<tr><td class="hl">Der Kopf tut mir weh.</td><td>我头疼。</td></tr>
<tr><td class="hl">Der Bauch tut mir weh.</td><td>我肚子疼。</td></tr>
<tr><td class="hl">Der Hals tut mir weh.</td><td>我喉咙疼。</td></tr></table>
<p>注意动词单复数：身体部位是单数用 <mark>tut</mark>，是复数就要用 <mark>tun</mark>——比如 <b>Die Ohren tun mir weh.</b>（我两只耳朵都疼）。</p>
<p>这里的 <b class="de">mir</b>（对我）其实是 Dativ（第三格）人称代词，德语格系统里第三个格第一次露面。现在不用弄懂完整的 Dativ 变格表，先记住这三个最常用的形式就够：</p>
<table><tr><th>人称</th><th>Dativ 代词</th><th>例句</th></tr>
<tr><td class="hl">ich</td><td class="hl">mir</td><td class="hl">Der Kopf tut mir weh.</td></tr>
<tr><td class="hl">du</td><td class="hl">dir</td><td class="hl">Tut dir der Bauch weh?</td></tr>
<tr><td class="hl">Sie</td><td class="hl">Ihnen</td><td class="hl">Was fehlt Ihnen?</td></tr></table>
<p>完整的 Dativ 代词表（他/她/我们/你们的形式）留到后面的单元系统学习，现在只要能听懂、说出这三个就够用了。</p>`
        },
        {
          type: 'grammar', title: '描述症状的两种句型', sub: '"我有……" 还是 "……疼"？',
          html: `<p>描述症状还有第二种更简单的句型，直接用 <b class="de">haben</b>：</p>
<table><tr><th>句型</th><th>例句</th><th>什么时候用</th></tr>
<tr><td class="hl">Ich habe + 症状（不加冠词）</td><td class="hl">Ich habe Fieber. / Ich habe Husten.</td><td>描述"有"一种整体症状</td></tr>
<tr><td class="hl">身体部位 + tut/tun mir weh</td><td class="hl">Der Hals tut mir weh.</td><td>指出具体哪个部位疼</td></tr></table>
<p>两种句型经常一起用：先说 <mark>Ich habe Husten und Schnupfen</mark> 概括症状，再补一句 <mark>Der Hals tut mir weh</mark> 说清楚具体哪里难受——医生问诊时这两种表达方式都要能听懂、说出来。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">在德国生病了怎么办？</b>不是急症的话，先给自己的 Hausarzt（家庭医生）打电话预约（复习 u7 学的打电话预约句型）；如果是深夜或周末又拿不准严重程度，可以拨打 <mark>116117</mark>（全德统一的非急诊医疗热线，免费）；真正的紧急情况（生命危险）才拨打 <mark>112</mark>。诊所前台通常会先问 "Was fehlt Ihnen?" 或 "Was sind Ihre Beschwerden?"，把这一课学的框架用上就能应付。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Der Kopf ___ mir weh." 应该填哪个词？', options: ['tut', 'tun', 'tust'], answer: 0, why: 'Kopf 是单数，动词用单数形式 tut。' },
        { type: 'cloze', zhHint: '您哪里不舒服？（医生问诊）', before: 'Was', after: 'Ihnen?', options: ['fehlt', 'fehlst', 'fehle'], answer: 0, why: '主语是第三人称单数（隐含在固定问句里），动词用 fehlt。' },
        { type: 'mcq', q: '"Mir geht’s nicht gut." 是什么意思？', options: ['我不太舒服。', '我很好。', '我很累。'], answer: 0, why: 'geht’s nicht gut = 过得不好，即身体不舒服。' },
        { type: 'order', zh: '我又咳嗽又流鼻涕。', words: ['Ich', 'habe', 'Husten', 'und', 'Schnupfen'], why: '陈述句语序：主语 + habe（第二位）+ 宾语 Husten und Schnupfen（无冠词的症状名词）。' },
        { type: 'match', pairs: [['der Kopf', '头'], ['der Hals', '喉咙，脖子'], ['der Rücken', '背'], ['das Fieber', '发烧']] },
        { type: 'listen', audio: 'Der Bauch tut mir weh.', q: '这句话是什么意思？', options: ['我肚子疼。', '我头疼。', '我背疼。'], answer: 0, why: 'der Bauch = 肚子，tut mir weh = 疼。' },
        { type: 'listen', audio: 'Ich habe seit gestern Fieber.', q: '这句话是什么意思？', options: ['我从昨天起就发烧了。', '我明天会发烧。', '我从来没发过烧。'], answer: 0, why: 'seit gestern = 从昨天起，Fieber = 发烧。' },
        { type: 'speak', de: 'Mir geht’s nicht gut. Der Kopf tut mir weh.', zh: '我不太舒服。我头疼。' },
      ],
      task: { title: '今天的生活任务', desc: '练到能脱口而出 "Mir geht’s nicht gut" + 身体部位 + "tut mir weh" 这套框架——挑一个身体部位练三遍，比如 "Der Hals tut mir weh"。' }
    },
    {
      id: 'u10l2', title: '多喝水，好好休息', de: 'Trinken Sie viel Wasser!',
      intro: '医生的建议、药店的叮嘱，几乎全是命令式句子——"多喝水！好好休息！"这一课学德语命令式的三种形式（对 du、对 ihr、对 Sie），场景是去药店买药，还会学到怎么发一条像样的请病假短信。',
      sections: [
        {
          type: 'vocab', title: '在药店', sub: '',
          items: [
            { de: 'Apotheke', art: 'die', pl: 'Apotheken', zh: '药店', en: 'pharmacy', ex: 'Wo ist die nächste Apotheke?', exZh: '最近的药店在哪里？' },
            { de: 'Medikament', art: 'das', pl: 'Medikamente', zh: '药，药物', en: 'medication', ex: 'Das Medikament ist rezeptfrei.', exZh: '这种药不需要处方。' },
            { de: 'Rezept', art: 'das', pl: 'Rezepte', zh: '处方', en: 'prescription', ex: 'Brauche ich ein Rezept?', exZh: '我需要处方吗？' },
            { de: 'Tablette', art: 'die', pl: 'Tabletten', zh: '药片', en: 'tablet/pill', ex: 'Nehmen Sie die Tablette nach dem Essen!', exZh: '请饭后服用这片药！' },
            { de: 'Apotheker', art: 'der', pl: 'Apotheker', zh: '药剂师（男）', en: 'pharmacist (male)', ex: 'Der Apotheker ist sehr freundlich.', exZh: '药剂师很友善。' },
            { de: 'Apothekerin', art: 'die', pl: 'Apothekerinnen', zh: '药剂师（女）', en: 'pharmacist (female)', ex: 'Fragen Sie die Apothekerin!', exZh: '请去问药剂师！' },
            { de: 'einnehmen', zh: '服用（药物）', en: 'to take (medicine)', ex: 'Nehmen Sie die Tablette dreimal täglich ein.', exZh: '请每天服用三次这个药片。' },
          ]
        },
        {
          type: 'vocab', title: '请病假', sub: '',
          items: [
            { de: 'krankschreiben', zh: '开病假证明', en: 'to sign off sick', ex: 'Ich lasse mich krankschreiben.', exZh: '我要去开个病假证明。' },
            { de: 'Krankmeldung', art: 'die', pl: 'Krankmeldungen', zh: '病假条，请病假通知', en: 'sick note', ex: 'Die Krankmeldung ist für meinen Chef.', exZh: '病假条是给我老板的。' },
            { de: 'Erkältung', art: 'die', pl: 'Erkältungen', zh: '感冒', en: 'a cold', ex: 'Ich habe eine Erkältung.', exZh: '我感冒了。' },
            { de: 'Gute Besserung!', zh: '早日康复！', en: 'Get well soon!', ex: 'Gute Besserung, Wei!', exZh: '早日康复，Wei！' },
            { de: 'Chef', art: 'der', pl: 'Chefs', zh: '老板，上司（男）', en: 'boss (male)', ex: 'Ich muss meinen Chef anrufen.', exZh: '我得给我老板打电话。' },
            { de: 'Chefin', art: 'die', pl: 'Chefinnen', zh: '老板，上司（女）', en: 'boss (female)', ex: 'Meine Chefin hat heute keine Zeit.', exZh: '我老板今天没时间。' },
          ]
        },
        {
          type: 'vocab', title: '医嘱常用动词', sub: '',
          items: [
            { de: 'trinken', zh: '喝', en: 'to drink', ex: 'Trinken Sie viel Wasser!', exZh: '请多喝水！' },
            { de: 'bleiben', zh: '待着，留下', en: 'to stay', ex: 'Bleiben Sie ein paar Tage zu Hause!', exZh: '请在家待几天！' },
            { de: 'essen', zh: '吃', en: 'to eat', ex: 'Iss mehr Obst!', exZh: '多吃点水果！', note: '变音动词：du isst, er isst' },
            { de: 'schlafen', zh: '睡觉', en: 'to sleep', ex: 'Schlafen Sie viel!', exZh: '请多睡觉！', note: '变音动词：du schläfst, er schläft' },
          ]
        },
        {
          type: 'dialogue', title: '在药店', scene: 'Wei 去药店买感冒药——注意药剂师满嘴都是命令式。',
          lines: [
            { sp: 'Apothekerin', de: 'Guten Tag! Was kann ich für Sie tun?', zh: '您好！我能为您做点什么？' },
            { sp: 'Wei', de: 'Guten Tag, ich habe eine Erkältung. Haben Sie etwas gegen Husten und Fieber?', zh: '您好，我感冒了。有没有治咳嗽和发烧的药？' },
            { sp: 'Apothekerin', de: 'Ja, klar. Nehmen Sie diese Tabletten hier, dreimal täglich.', zh: '当然有。用这个药片，每天三次。' },
            { sp: 'Wei', de: 'Danke. Brauche ich dafür ein Rezept?', zh: '谢谢。这个需要处方吗？' },
            { sp: 'Apothekerin', de: 'Nein, die sind rezeptfrei. Trinken Sie außerdem viel Wasser und Tee.', zh: '不需要，这个不用处方。另外要多喝水和茶。' },
            { sp: 'Wei', de: 'Mache ich. Sonst noch etwas, was ich tun soll?', zh: '好的。还有别的我应该做的吗？' },
            { sp: 'Apothekerin', de: 'Ja – bleiben Sie ein paar Tage zu Hause und schlafen Sie viel.', zh: '有——在家待几天，多睡觉。' },
            { sp: 'Wei', de: 'Gute Idee. Wie oft soll ich die Tabletten einnehmen?', zh: '好主意。这个药片要多久服一次？' },
            { sp: 'Apothekerin', de: 'Nehmen Sie eine Tablette morgens, mittags und abends, immer nach dem Essen.', zh: '早中晚各服一片，都要饭后服用。' },
            { sp: 'Wei', de: 'Verstanden, vielen Dank für die Hilfe!', zh: '明白了，非常感谢您的帮助！' },
            { sp: 'Apothekerin', de: 'Gern geschehen. Gute Besserung!', zh: '不客气。祝您早日康复！' },
          ]
        },
        {
          type: 'grammar', title: 'Imperativ：命令式三形式', sub: '从药店的叮嘱句直接总结规则',
          html: `<p>药店和诊所里的建议几乎全是命令式句子。命令式对应三种称呼——du、ihr、Sie，各有各的形式：</p>
<table><tr><th>称呼</th><th>陈述式</th><th>命令式</th></tr>
<tr><td class="hl">du</td><td class="hl">du trinkst</td><td class="hl">Trink!</td></tr>
<tr><td class="hl">ihr</td><td class="hl">ihr trinkt</td><td class="hl">Trinkt!</td></tr>
<tr><td class="hl">Sie</td><td class="hl">Sie trinken</td><td class="hl">Trinken Sie!</td></tr></table>
<p>规则：<b>du 命令式</b> = 去掉 du 和词尾 -st，只留动词词干；<b>ihr 命令式</b> = 和 ihr 的现在时变位完全一样，只是不说 ihr；<b>Sie 命令式</b> = 动词提到第一位 + Sie，和现在时 Sie 变位的词完全一样，只是语序颠倒。</p>
<p>变音动词（a→ä 类）有个特别的地方：<b>du 命令式不带变音</b>，用回原始词干：</p>
<table><tr><th>动词</th><th>du 现在时</th><th>du 命令式</th></tr>
<tr><td class="hl">schlafen</td><td class="hl">du schläfst</td><td class="hl">Schlaf!（不是 Schläf!）</td></tr></table>`
        },
        {
          type: 'grammar', title: '特殊命令式 + 语序对比', sub: '几个常用的不规则形式，加上语序总结',
          html: `<p>另一类变音动词（e→i/ie 类）的命令式沿用变音后的词干，同样不加 -e；<b class="de">sein</b> 则完全不规则，直接背：</p>
<table><tr><th>动词</th><th>du 命令式</th><th>例句</th></tr>
<tr><td class="hl">nehmen（du nimmst）</td><td class="hl">Nimm!</td><td class="hl">Nimm eine Tablette!</td></tr>
<tr><td class="hl">essen（du isst）</td><td class="hl">Iss!</td><td class="hl">Iss mehr Obst!</td></tr>
<tr><td class="hl">sein（完全不规则）</td><td class="hl">Sei! / Seid! / Seien Sie!</td><td class="hl">Sei vorsichtig!</td></tr></table>
<p>命令式的语序规律很简单：<b>动词永远站在句子最前面</b>，du/ihr 命令式不说出主语，只有 Sie 命令式保留 Sie 这个"主语"跟在动词后面：</p>
<table><tr><th>陈述句</th><th>命令式</th></tr>
<tr><td>Sie trinken viel Wasser.</td><td class="hl">Trinken Sie viel Wasser!</td></tr>
<tr><td>Du bleibst zu Hause.</td><td class="hl">Bleib zu Hause!</td></tr>
<tr><td>Ihr schlaft viel.</td><td class="hl">Schlaft viel!</td></tr></table>`
        },
        {
          type: 'tip',
          html: '<b class="t">请病假短信怎么写？</b>一条得体的病假短信通常包含：打招呼 + 说明不舒服 + 说明打算怎么办 + 结束语，参考模板：<br><span class="de">"Guten Morgen Frau Müller, mir geht es heute leider nicht gut (Fieber und Husten). Ich muss zum Arzt und lasse mich krankschreiben. Ich melde mich, sobald es mir besser geht. Viele Grüße, Wei"</span><br>不需要在短信里详细描述症状，说清楚"不舒服 + 会去看医生/开证明 + 会保持联系"就足够礼貌得体了。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"trinken" 对 du 的命令式是？', options: ['Trink!', 'Trinkst!', 'Trinke du!'], answer: 0, why: 'du 命令式 = 去掉 du 和词尾 -st，只留词干 trink。' },
        { type: 'cloze', zhHint: '请多喝水！（对 Sie，礼貌）', before: '', after: 'Sie viel Wasser!', options: ['Trinken', 'Trink', 'Trinkt'], answer: 0, why: 'Sie 命令式 = 动词（与现在时 Sie 变位相同）+ Sie，放在句首。' },
        { type: 'mcq', q: '"Bleib zu Hause!" 是对谁说的？', options: ['du（一个熟人）', 'ihr（一群人）', 'Sie（正式称呼）'], answer: 0, why: 'Bleib（不带 -t，不带 Sie）是 du 命令式的形式。' },
        { type: 'order', zh: '请服用一片药片！（对 Sie）', words: ['Nehmen', 'Sie', 'eine', 'Tablette'], why: 'Sie 命令式：动词 Nehmen 在句首，Sie 紧跟其后。' },
        { type: 'match', pairs: [['die Apotheke', '药店'], ['das Rezept', '处方'], ['die Krankmeldung', '病假条'], ['Gute Besserung', '早日康复']] },
        { type: 'listen', audio: 'Schlafen Sie viel und trinken Sie Tee!', q: '这句话是什么意思？', options: ['请多睡觉，多喝茶！', '请不要睡觉，不要喝茶！', '请去药店买茶！'], answer: 0, why: 'Schlafen Sie / trinken Sie 都是 Sie 命令式，表示建议。' },
        { type: 'listen', audio: 'Ich bin heute krank und bleibe zu Hause.', q: '这句话是什么意思？', options: ['我今天生病了，要在家待着。', '我今天很健康，要出门。', '我明天要去看医生。'], answer: 0, why: 'krank = 生病的，bleibe zu Hause = 待在家里。' },
        { type: 'speak', de: 'Trinken Sie viel Wasser und bleiben Sie zu Hause!', zh: '请多喝水，在家好好待着！' },
      ],
      task: { title: '今天的生活任务', desc: '参考本课的短信模板，写一条真实或模拟的请病假短信，发给同事或上级（或者只是写下来练习）——记得用上"不舒服 + 打算怎么办"这个结构。' }
    },
  ]
};
