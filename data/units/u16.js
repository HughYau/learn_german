// 第 16 单元：问路与城市
export default {
  id: 'u16', num: '16', color: 'red', shape: 'square',
  de: 'Wo ist ...?', zh: '问路与城市',
  desc: '从火车总站问路到市中心地标，这个单元教你问路、指路，还会正式讲透德语最烧脑的语法组合技——两格介词，从此"东西在哪儿"和"往哪儿放"再也不会搞混。',
  kann: [
    { de: 'Ich kann nach dem Weg fragen und einfache Wegbeschreibungen verstehen.', zh: '我能问路，也能听懂简单的指路说明。' },
    { de: 'Ich kann Wechselpräpositionen richtig verwenden: Dativ für „wo“, Akkusativ für „wohin“.', zh: '我能正确使用两格介词：问“在哪儿”用第三格，问“往哪儿”用第四格。' },
    { de: 'Ich kann sagen, wo etwas liegt/steht und wohin ich es lege/stelle.', zh: '我能说清楚东西在哪儿，以及我把它放到哪儿。' },
  ],
  lessons: [
    {
      id: 'u16l1', title: '在市中心问路', de: 'Wie komme ich zur Nikolaikirche?',
      intro: '问路是每个新城市生活者迟早要开口的场景。这一课先学会指路必备的方向词和地标词汇，用真实的莱比锡地标练一次完整的问路对话——语法上先复习 u10 学过的命令式，把"指路句型"用起来，两格介词的完整规则留到下一课正式揭晓。',
      sections: [
        {
          type: 'vocab', title: '方向与路况', sub: '',
          items: [
            { de: 'links', zh: '向左，左边', en: 'left', ex: 'Gehen Sie links.', exZh: '您向左走。' },
            { de: 'rechts', zh: '向右，右边', en: 'right', ex: 'Gehen Sie rechts.', exZh: '您向右走。' },
            { de: 'geradeaus', zh: '直走', en: 'straight ahead', ex: 'Gehen Sie geradeaus.', exZh: '您一直往前走。' },
            { de: 'Ampel', art: 'die', pl: 'Ampeln', zh: '红绿灯', en: 'traffic light', ex: 'Die Ampel ist noch rot.', exZh: '红绿灯还是红色的。' },
            { de: 'Kreuzung', art: 'die', pl: 'Kreuzungen', zh: '十字路口', en: 'intersection', ex: 'Die Kreuzung ist sehr groß.', exZh: '这个十字路口很大。' },
            { de: 'Brücke', art: 'die', pl: 'Brücken', zh: '桥', en: 'bridge', ex: 'Wir gehen über die Brücke.', exZh: '我们走过那座桥。' },
            { de: 'Straße', art: 'die', pl: 'Straßen', zh: '街道', en: 'street', ex: 'Die Straße ist heute leer.', exZh: '今天这条街很空。' },
            { de: 'Richtung', art: 'die', pl: 'Richtungen', zh: '方向', en: 'direction', ex: 'Die Richtung ist falsch.', exZh: '方向错了。' },
          ]
        },
        {
          type: 'vocab', title: '地标与位置关系', sub: '',
          items: [
            { de: 'Platz', art: 'der', pl: 'Plätze', zh: '广场', en: 'square/plaza', ex: 'Der Platz liegt neben der Kirche.', exZh: '这个广场在教堂旁边。' },
            { de: 'Kirche', art: 'die', pl: 'Kirchen', zh: '教堂', en: 'church', ex: 'Die Kirche ist sehr alt.', exZh: '这座教堂很古老。' },
            { de: 'Rathaus', art: 'das', pl: 'Rathäuser', zh: '市政厅', en: 'town hall', ex: 'Das Rathaus steht am Markt.', exZh: '市政厅坐落在市场广场旁。' },
            { de: 'gegenüber von', zh: '在……对面', en: 'opposite of', ex: 'Der Platz liegt gegenüber vom Bahnhof.', exZh: '广场就在火车站对面。' },
            { de: 'in der Nähe von', zh: '在……附近', en: 'near', ex: 'Die Kirche ist in der Nähe vom Markt.', exZh: '教堂就在市场附近。' },
            { de: 'weit', zh: '远的', en: 'far', ex: 'Ist das weit von hier?', exZh: '这离这儿远吗？' },
            { de: 'nah', zh: '近的', en: 'near/close', ex: 'Das ist ganz nah.', exZh: '那很近。' },
          ]
        },
        {
          type: 'dialogue', title: '从火车总站到奥古斯都广场', scene: 'Wei 刚下火车，向路人打听从 Hauptbahnhof 到 Augustusplatz 怎么走，顺便问起了市场广场的方向。',
          lines: [
            { sp: 'Wei', de: 'Entschuldigung, wie komme ich am besten zum Augustusplatz?', zh: '不好意思，请问去奥古斯都广场怎么走最方便？' },
            { sp: 'Passant', de: 'Kein Problem! Gehen Sie hier geradeaus bis zur Ampel.', zh: '没问题！您沿着这条路一直走到红绿灯。' },
            { sp: 'Wei', de: 'Geradeaus, verstanden. Und dann?', zh: '一直走，明白了。然后呢？' },
            { sp: 'Passant', de: 'An der Ampel gehen Sie rechts, dann kommen Sie an der Nikolaikirche vorbei.', zh: '到红绿灯右转，然后您会经过尼古拉教堂。' },
            { sp: 'Wei', de: 'Ah, die Kirche mit dem berühmten Turm? Die kenne ich schon.', zh: '啊，就是那个有著名塔楼的教堂？我知道那个。' },
            { sp: 'Passant', de: 'Genau die. Von dort ist der Augustusplatz nicht mehr weit, nur fünf Minuten.', zh: '就是它。从那儿到奥古斯都广场就不远了，只要五分钟。' },
            { sp: 'Wei', de: 'Perfekt. Und wo ist der Marktplatz? Ist das in der gleichen Richtung?', zh: '太好了。那市场广场在哪儿？是同一个方向吗？' },
            { sp: 'Passant', de: 'Nein, der Marktplatz liegt in der anderen Richtung, links von der Kreuzung.', zh: '不是，市场广场在另一个方向，在十字路口的左边。' },
            { sp: 'Wei', de: 'Verstehe. Ist der Augustusplatz weit von hier?', zh: '明白了。奥古斯都广场离这儿远吗？' },
            { sp: 'Passant', de: 'Nein, gar nicht. Er ist ganz in der Nähe – da steht auch das Gewandhaus, direkt am Platz.', zh: '不远，完全不远。就在附近——格万特豪斯音乐厅就在广场上。' },
            { sp: 'Wei', de: 'Vielen Dank für die Erklärung!', zh: '非常感谢您的讲解！' },
            { sp: 'Passant', de: 'Gern geschehen. Viel Spaß in Leipzig!', zh: '不客气。祝您在莱比锡玩得开心！' },
          ]
        },
        {
          type: 'grammar', title: '指路句型：Imperativ + 方向词', sub: '复习 u10 学过的命令式，这次专门用来指路',
          html: `<p>指路最常用的结构就是 u10 学过的命令式（Imperativ）配上方向词。对陌生人问路，用 Sie 命令式最稳妥：</p>
<p class="de">Gehen Sie geradeaus bis zur Ampel. Dann gehen Sie rechts.</p>
<table><tr><th>方向词</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">geradeaus</td><td>直走</td><td class="hl">Gehen Sie geradeaus.</td></tr>
<tr><td class="hl">links</td><td>向左</td><td class="hl">Gehen Sie links.</td></tr>
<tr><td class="hl">rechts</td><td>向右</td><td class="hl">Gehen Sie rechts.</td></tr></table>
<p>熟人之间用 du 命令式一样自然：<mark>Geh geradeaus, dann links.</mark>——命令式的构成规则回顾 u10：du 形式去掉 du 和词尾 -st，Sie 形式把动词提到句首再跟上 Sie。</p>
<p>指路时还会用到一个固定短语 <b class="de">bis zu + 地点</b>（"一直到……"），后面的地点是 zu + dem/der 缩合而成：<mark>zum</mark>（= zu dem，阳性/中性）、<mark>zur</mark>（= zu der，阴性）：</p>
<table><tr><th>短语</th><th>缩合</th><th>例句</th></tr>
<tr><td class="hl">zum Bahnhof</td><td>zu dem</td><td class="hl">bis zum Bahnhof</td></tr>
<tr><td class="hl">zur Ampel</td><td>zu der</td><td class="hl">bis zur Ampel</td></tr>
<tr><td class="hl">zur Kirche</td><td>zu der</td><td class="hl">bis zur Kirche</td></tr></table>
<p>和 u11 学过 im/am 一样，先把 zum/zur 当固定搭配用起来，完整的两格介词系统这一单元的第二课就会正式讲透。</p>`
        },
        {
          type: 'grammar', title: '位置关系：weit / nah / in der Nähe von / gegenüber von', sub: '描述远近和相对位置的固定短语',
          html: `<p>描述"远近"和"相对位置"，德语常用这几个固定短语：</p>
<table><tr><th>短语</th><th>意思</th><th>例句</th></tr>
<tr><td class="hl">weit von</td><td>离……远</td><td class="hl">Der Bahnhof ist weit von hier.</td></tr>
<tr><td class="hl">nah / ganz in der Nähe</td><td>近的/就在附近</td><td class="hl">Der Platz ist ganz in der Nähe.</td></tr>
<tr><td class="hl">in der Nähe von</td><td>在……附近</td><td class="hl">Die Kirche liegt in der Nähe vom Markt.</td></tr>
<tr><td class="hl">gegenüber von</td><td>在……对面</td><td class="hl">Der Augustusplatz liegt gegenüber vom Gewandhaus.</td></tr></table>
<p>注意 <mark>von</mark> 后面同样常常缩合成 <b>vom</b>（= von dem）——这也是提前预告下一课要系统讲的"介词 + 定冠词缩合"现象，先能听懂、能照着用就够了。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">莱比锡老城不难认路。</b>市中心被一条环路 Ring 圈起来，Markt、Augustusplatz、Nikolaikirche、Thomaskirche 这些地标基本都在环内，步行可达，比很多德国大城市好找路。问路时用 <mark>Entschuldigung, wie komme ich zu ...?</mark> 开头永远不会出错；如果对方语速太快，别不好意思，直接用 u5 学过的 <mark>Können Sie das bitte wiederholen?</mark> 请他再说一遍。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '想礼貌地对陌生人说"一直走"，应该说？', options: ['Gehen Sie geradeaus.', 'Geh geradeaus.', 'Gehst du geradeaus.'], answer: 0, why: 'Sie 命令式：动词提前 + Sie，对陌生人问路最稳妥。' },
        { type: 'cloze', zhHint: '一直走到教堂。', before: 'Gehen Sie geradeaus bis', after: 'Kirche.', options: ['zur', 'zum', 'zu der der'], answer: 0, why: 'Kirche 是阴性名词，zu + der 缩合成 zur。' },
        { type: 'mcq', q: '"gegenüber von" 是什么意思？', options: ['在……对面', '在……旁边', '在……里面'], answer: 0, why: 'gegenüber von = 在……对面，描述相对位置的固定短语。' },
        { type: 'order', zh: '到红绿灯那儿，您向右转。', words: ['An', 'der', 'Ampel', 'gehen', 'Sie', 'rechts'], why: '地点状语 An der Ampel 提前，动词 gehen 仍占第二位，Sie 紧跟其后，rechts 收尾。' },
        { type: 'match', pairs: [['links', '向左'], ['rechts', '向右'], ['die Kreuzung', '十字路口'], ['weit', '远的']] },
        { type: 'listen', audio: 'Gehen Sie geradeaus bis zur Ampel.', q: '这句话是什么意思？', options: ['一直走到红绿灯。', '在红绿灯右转。', '红绿灯在您旁边。'], answer: 0, why: 'geradeaus = 直走，bis zur Ampel = 一直到红绿灯。' },
        { type: 'listen', audio: 'Der Augustusplatz ist ganz in der Nähe.', q: '这句话是什么意思？', options: ['奥古斯都广场就在附近。', '奥古斯都广场很远。', '奥古斯都广场已经关门了。'], answer: 0, why: 'ganz in der Nähe = 就在附近。' },
        { type: 'speak', de: 'Entschuldigung, wie komme ich zum Augustusplatz?', zh: '不好意思，请问去奥古斯都广场怎么走？' },
      ],
      task: { title: '今天的生活任务', desc: '用今天学的指路句型，向路人或朋友问一次从你现在所在地到附近某个地标怎么走，或者写 3 句真实的路线说明。' }
    },
    {
      id: 'u16l2', title: '东西在哪儿，往哪儿放', de: 'Wo ist es, wohin kommt es?',
      intro: 'u11 学过 im Wohnzimmer、auf dem Tisch 这些固定搭配，当时说好"完整规则以后再讲"——现在就是那个"以后"。这一课把 in/an/auf/unter/über/vor/hinter/neben/zwischen 这九个两格介词一次性讲透：东西"已经在哪儿"用第三格，"正在被放到哪儿"用第四格，规律看似烧脑，其实只要抓住 wo? 和 wohin? 这两个问题就能全部理清。',
      sections: [
        {
          type: 'vocab', title: '放置动词', sub: '',
          items: [
            { de: 'legen', zh: '放，放下（平放）', en: 'to lay/put down', ex: 'Ich lege das Buch auf den Tisch.', exZh: '我把书放在桌子上。' },
            { de: 'stellen', zh: '放，放下（立放）', en: 'to put/stand something', ex: 'Ich stelle die Flasche neben den Stuhl.', exZh: '我把瓶子放在椅子旁边。' },
            { de: 'stecken', zh: '插进，塞进', en: 'to put into', ex: 'Ich stecke den Schlüssel in die Tasche.', exZh: '我把钥匙放进包里。' },
            { de: 'Schlüssel', art: 'der', pl: 'Schlüssel', zh: '钥匙', en: 'key', ex: 'Mein Schlüssel liegt auf dem Tisch.', exZh: '我的钥匙放在桌子上。' },
            { de: 'Flasche', art: 'die', pl: 'Flaschen', zh: '瓶子', en: 'bottle', ex: 'Die Flasche steht auf dem Tisch.', exZh: '瓶子放在桌子上。' },
          ]
        },
        {
          type: 'vocab', title: '位置与物件', sub: '',
          items: [
            { de: 'Tasche', art: 'die', pl: 'Taschen', zh: '包，口袋', en: 'bag/pocket', ex: 'Ich stecke das Handy in die Tasche.', exZh: '我把手机放进包里。' },
            { de: 'Tür', art: 'die', pl: 'Türen', zh: '门', en: 'door', ex: 'Die Tür ist zu.', exZh: '门关着。' },
            { de: 'Fenster', art: 'das', pl: 'Fenster', zh: '窗户', en: 'window', ex: 'Das Fenster ist offen.', exZh: '窗户开着。' },
            { de: 'Bank', art: 'die', pl: 'Bänke', zh: '长椅', en: 'bench', note: '和"银行"die Bank 同形但复数不同：长椅的复数是 Bänke，银行的复数是 Banken，靠上下文和复数形式区分', ex: 'Wir sitzen auf der Bank.', exZh: '我们坐在长椅上。' },
            { de: 'Baum', art: 'der', pl: 'Bäume', zh: '树', en: 'tree', ex: 'Der Baum steht vor der Kirche.', exZh: '这棵树在教堂前面。' },
          ]
        },
        {
          type: 'dialogue', title: '长椅上还是长椅下？', scene: 'Wei 和 Anna 约在尼古拉教堂旁的一张长椅见面野餐，两人一边摆放东西一边对比"东西在哪儿"和"往哪儿放"的说法。',
          lines: [
            { sp: 'Anna', de: 'Wei, wo bist du? Ich sitze schon auf der Bank unter dem Baum.', zh: 'Wei，你在哪儿？我已经坐在树下的长椅上了。' },
            { sp: 'Wei', de: 'Ich bin fast da! Ist die Bank vor der Nikolaikirche oder hinter der Kirche?', zh: '我快到了！长椅是在尼古拉教堂前面还是后面？' },
            { sp: 'Anna', de: 'Vor der Kirche, direkt neben dem Eingang. Du kannst mich schon sehen.', zh: '在教堂前面，就在入口旁边。你应该已经能看到我了。' },
            { sp: 'Wei', de: 'Ah, ich sehe dich! Wohin soll ich die Tasche stellen?', zh: '啊，我看到你了！我该把包放在哪儿？' },
            { sp: 'Anna', de: 'Stell sie einfach neben die Bank, dann haben wir mehr Platz.', zh: '就放在长椅旁边吧，这样我们空间更大。' },
            { sp: 'Wei', de: 'Gut. Und die Flasche? Soll ich sie auf den Tisch stellen?', zh: '好。那瓶子呢？我该把它放在桌子上吗？' },
            { sp: 'Anna', de: 'Ja, stell die Flasche auf den Tisch, dann steht sie sicher.', zh: '是的，把瓶子放在桌子上，这样它就放稳了。' },
            { sp: 'Wei', de: 'Wo ist eigentlich mein Schlüssel? Ich stecke ihn immer in die Tasche.', zh: '我的钥匙到底在哪儿？我一直是把它放进包里的。' },
            { sp: 'Anna', de: 'Schau mal, er liegt schon auf der Bank, direkt neben dir.', zh: '你看，它已经在长椅上了，就在你旁边。' },
            { sp: 'Wei', de: 'Oh, stimmt! Gut, dann stecke ich ihn jetzt zurück in die Tasche.', zh: '哦，真的！好，那我现在把它放回包里。' },
            { sp: 'Anna', de: 'Perfekt. Jetzt ist alles da, wo es sein soll.', zh: '太好了。现在一切都在该在的地方了。' },
            { sp: 'Wei', de: 'Genau. Lass uns endlich essen!', zh: '没错。我们终于可以吃东西了！' },
          ]
        },
        {
          type: 'grammar', title: '两格介词全套：wo? 用第三格，wohin? 用第四格', sub: 'u11 埋下的伏笔，这里正式拆开',
          html: `<p>u11 学过 <mark>im Wohnzimmer</mark>、<mark>auf dem Tisch</mark> 这些固定搭配，当时没解释为什么。现在揭晓答案：<b>an、auf、hinter、in、neben、über、unter、vor、zwischen</b> 这九个介词叫做 <b>Wechselpräpositionen（两格介词）</b>——同一个介词，根据问题不同，接的格也不同：</p>
<table><tr><th>问题</th><th>意思</th><th>格</th><th>典型例句</th></tr>
<tr><td class="hl">wo?</td><td>在哪儿（位置，没有移动）</td><td class="hl">Dativ 第三格</td><td class="hl">Der Tisch steht im Wohnzimmer.</td></tr>
<tr><td class="hl">wohin?</td><td>往哪儿（方向，有移动）</td><td class="hl">Akkusativ 第四格</td><td class="hl">Ich stelle den Tisch ins Wohnzimmer.</td></tr></table>
<p>判断方法很直接：句子里有没有"移动、放置"的动作。<b>stehen、liegen、hängen、sein</b>（东西已经在那儿了）用 wo+Dativ；<b>stellen、legen、stecken、gehen</b>（动作正在发生，关心的是终点）用 wohin+Akkusativ。九个介词全部适用这条规律：</p>
<table><tr><th>介词</th><th>wo? + Dativ（位置）</th><th>wohin? + Akkusativ（方向）</th></tr>
<tr><td class="hl">an</td><td class="hl">Das Bild hängt an der Wand.</td><td class="hl">Ich hänge das Bild an die Wand.</td></tr>
<tr><td class="hl">auf</td><td class="hl">Das Buch liegt auf dem Tisch.</td><td class="hl">Ich lege das Buch auf den Tisch.</td></tr>
<tr><td class="hl">hinter</td><td class="hl">Die Bank steht hinter der Kirche.</td><td class="hl">Wir gehen hinter die Kirche.</td></tr>
<tr><td class="hl">in</td><td class="hl">Der Schlüssel ist in der Tasche.</td><td class="hl">Ich stecke den Schlüssel in die Tasche.</td></tr>
<tr><td class="hl">neben</td><td class="hl">Die Flasche steht neben dem Teller.</td><td class="hl">Stell die Flasche neben den Teller.</td></tr>
<tr><td class="hl">über</td><td class="hl">Die Lampe hängt über dem Tisch.</td><td class="hl">Ich hänge die Lampe über den Tisch.</td></tr>
<tr><td class="hl">unter</td><td class="hl">Die Bank steht unter dem Baum.</td><td class="hl">Wir stellen den Tisch unter den Baum.</td></tr>
<tr><td class="hl">vor</td><td class="hl">Die Bank steht vor der Kirche.</td><td class="hl">Wir gehen vor die Kirche.</td></tr>
<tr><td class="hl">zwischen</td><td class="hl">Die Bank steht zwischen den Bäumen.</td><td class="hl">Stell die Bank zwischen die Bäume.</td></tr></table>
<p><b class="t">这条规律绝对不能反：位置用 wo/Dativ，方向用 wohin/Akkusativ。</b>记混的话，"我把书放在桌子上"和"书已经在桌子上"这两句意思完全不同的话会被说反。</p>`
        },
        {
          type: 'grammar', title: 'Dativ 定冠词全表 + 常见缩合', sub: '第一次把三个性别的 Dativ 定冠词摆在一起',
          html: `<p>u10 只学了人称代词 mir/dir/Ihnen，现在正式给出名词前 Dativ 定冠词的完整变化表——这是全站第一次摆出这张表：</p>
<table><tr><th>性/数</th><th>第一格 Nominativ</th><th>第三格 Dativ</th><th>例句</th></tr>
<tr><td class="hl">阳性 der</td><td class="hl">der Tisch</td><td class="hl">dem Tisch</td><td class="hl">auf dem Tisch</td></tr>
<tr><td class="hl">阴性 die</td><td class="hl">die Kirche</td><td class="hl">der Kirche</td><td class="hl">vor der Kirche</td></tr>
<tr><td class="hl">中性 das</td><td class="hl">das Fenster</td><td class="hl">dem Fenster</td><td class="hl">an dem Fenster</td></tr>
<tr><td class="hl">复数 die</td><td class="hl">die Bäume</td><td class="hl">den Bäumen</td><td class="hl">zwischen den Bäumen</td></tr></table>
<p><b class="t">复数名词在 Dativ 格里要加 -n：</b>die Kinder → <mark>den Kindern</mark>，die Bäume → <mark>den Bäumen</mark>——只要名词复数形式本来不是以 -n 或 -s 结尾，Dativ 复数都要补上这个 -n（<mark>mit den Kindern</mark> 就是这个规律最常见的例子）。</p>
<p>阳性/中性的 <b>dem</b>、阴性的 <b>der</b> 后面跟着 an/in 时，口语里几乎永远缩合：</p>
<table><tr><th>缩合</th><th>拆开</th><th>例句</th></tr>
<tr><td class="hl">im</td><td>in dem</td><td class="hl">Der Tisch steht im Wohnzimmer.</td></tr>
<tr><td class="hl">am</td><td>an dem</td><td class="hl">Die Bank steht am Fenster.</td></tr>
<tr><td class="hl">ins</td><td>in das</td><td class="hl">Ich stelle den Tisch ins Wohnzimmer.</td></tr>
<tr><td class="hl">ans</td><td>an das</td><td class="hl">Ich hänge das Bild ans Fenster.</td></tr></table>
<p>注意 <b>im/am</b> 是 Dativ 缩合（wo?），<b>ins/ans</b> 是 Akkusativ 缩合（wohin?）——缩合形式本身就带着格的信息，能帮你反过来判断这句话到底在说"在哪儿"还是"往哪儿"。</p>`
        },
        {
          type: 'tip',
          html: '<b class="t">自查小窍门：</b>写句子前先问自己一句——"这句话是在描述东西已经在哪儿，还是在描述把东西挪到哪儿？"能换成"位置动词"（stehen/liegen/hängen/sein）的答案用 wo+Dativ；能换成"移动动词"（stellen/legen/stecken/gehen）的答案用 wohin+Akkusativ。记不住具体缩合形式时，<mark>im/am/ins/ans</mark> 这四个最高频的先记牢，其余现用现查语法手册 g16。'
        },
      ],
      exercises: [
        { type: 'mcq', q: '"Der Tisch steht ___ Wohnzimmer." 应该填哪个？', options: ['im', 'ins', 'in'], answer: 0, why: '桌子已经在那儿了，是位置（wo?），用 Dativ 缩合 im（= in dem）。' },
        { type: 'mcq', q: '"Ich stelle den Tisch ___ Wohnzimmer." 应该填哪个？', options: ['ins', 'im', 'in'], answer: 0, why: '这是一个"搬放"的动作，问的是往哪儿（wohin?），用 Akkusativ 缩合 ins（= in das）。' },
        { type: 'cloze', zhHint: '书在桌子上（已经放好了）。', before: 'Das Buch liegt auf', after: 'Tisch.', options: ['dem', 'den', 'der'], answer: 0, why: 'liegen 是位置动词（wo?），der Tisch 是阳性，Dativ 是 dem。' },
        { type: 'cloze', zhHint: '我把书放到桌子上。', before: 'Ich lege das Buch auf', after: 'Tisch.', options: ['den', 'dem', 'der'], answer: 0, why: 'legen 是放置动作（wohin?），der Tisch 是阳性，Akkusativ 是 den。' },
        { type: 'order', zh: '钥匙在包里。', words: ['Der', 'Schlüssel', 'ist', 'in', 'der', 'Tasche'], why: 'sein 表位置（wo?），die Tasche 是阴性，Dativ 是 der。' },
        { type: 'match', pairs: [['wo?', '在哪儿（Dativ）'], ['wohin?', '往哪儿（Akkusativ）'], ['im', 'in dem'], ['ins', 'in das']] },
        { type: 'listen', audio: 'Die Bank steht zwischen den Bäumen.', q: '这句话是什么意思？', options: ['长椅在两棵树之间。', '把长椅搬到两棵树之间。', '树在长椅旁边。'], answer: 0, why: 'stehen 是位置动词，zwischen den Bäumen 是 Dativ 复数（加 -n）。' },
        { type: 'speak', de: 'Ich stelle die Flasche auf den Tisch, dann steht sie da.', zh: '我把瓶子放在桌子上，这样它就在那儿了。' },
      ],
      task: { title: '今天的生活任务', desc: '用两格介词写 3-4 句话，对比同一个地方"东西在哪儿"和"把东西放哪儿"，比如 "Der Schlüssel liegt auf dem Tisch." / "Ich lege den Schlüssel auf den Tisch."。' }
    },
  ]
};
