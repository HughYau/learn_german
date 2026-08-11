// 语法速查手册 Phase 2a 补充：完成时、可分动词、礼貌请求与正式邮件
export const topicsP2a = [
  {
    id: 'g13', num: '', title: '完成时 Perfekt', de: 'Das Perfekt',
    html: `<p>口语德语讲过去的事几乎只用 Perfekt。结构是又一个 Satzklammer：<b>haben/sein 变位后站在位置2</b>，<b>过去分词（Partizip II）不变位，踢到句尾</b>：</p>
<table><tr><th>位置1</th><th>位置2（haben/sein）</th><th>中间</th><th>句尾（Partizip II）</th></tr>
<tr><td class="hl">Ich</td><td class="hl">habe</td><td class="hl">für den Deutschkurs</td><td class="hl">gelernt.</td></tr>
<tr><td class="hl">Ich</td><td class="hl">bin</td><td class="hl">nach Dresden</td><td class="hl">gefahren.</td></tr></table>
<p><b class="t">Partizip II 的构成：</b>规则动词是 ge- + 词干 + -t（词干以 -t/-d 结尾时插入 -e，写作 -et）；不规则（强变化）动词是 ge- + 变化后的词干 + -en，没有固定公式，只能整体背。可分动词的 ge- 插进前缀和词干中间（einkaufen → eingekauft），-ieren 结尾的动词不加 ge-（passieren → passiert）。20 个最常用的过去分词：</p>
<table><tr><th>原形</th><th>Partizip II</th><th>助动词</th></tr>
<tr><td>machen</td><td class="hl">gemacht</td><td>haben</td></tr>
<tr><td>kaufen</td><td class="hl">gekauft</td><td>haben</td></tr>
<tr><td>lernen</td><td class="hl">gelernt</td><td>haben</td></tr>
<tr><td>arbeiten</td><td class="hl">gearbeitet</td><td>haben</td></tr>
<tr><td>sehen</td><td class="hl">gesehen</td><td>haben</td></tr>
<tr><td>treffen</td><td class="hl">getroffen</td><td>haben</td></tr>
<tr><td>essen</td><td class="hl">gegessen</td><td>haben</td></tr>
<tr><td>trinken</td><td class="hl">getrunken</td><td>haben</td></tr>
<tr><td>einkaufen</td><td class="hl">eingekauft</td><td>haben</td></tr>
<tr><td>anrufen</td><td class="hl">angerufen</td><td>haben</td></tr>
<tr><td>aufräumen</td><td class="hl">aufgeräumt</td><td>haben</td></tr>
<tr><td>fernsehen</td><td class="hl">ferngesehen</td><td>haben</td></tr>
<tr><td>abholen</td><td class="hl">abgeholt</td><td>haben</td></tr>
<tr><td>ausfüllen</td><td class="hl">ausgefüllt</td><td>haben</td></tr>
<tr><td>gehen</td><td class="hl">gegangen</td><td>sein</td></tr>
<tr><td>fahren</td><td class="hl">gefahren</td><td>sein</td></tr>
<tr><td>kommen</td><td class="hl">gekommen</td><td>sein</td></tr>
<tr><td>aufstehen</td><td class="hl">aufgestanden</td><td>sein</td></tr>
<tr><td>bleiben</td><td class="hl">geblieben</td><td>sein（例外：状态保持）</td></tr>
<tr><td>passieren</td><td class="hl">passiert</td><td>sein（例外：发生）</td></tr></table>
<p><b class="t">haben 还是 sein？</b>大多数动词用 haben；表示"从A移动到B"的位移动词（gehen/fahren/kommen）用 sein；两个特殊例外同样用 sein——<b class="de">bleiben</b>（不移动，但表示"状态保持"）和 <b class="de">passieren</b>（发生）。判断技巧：拿不准时先问"这个动词是不是在说从一个地方/状态换到另一个地方/状态？"，大部分时候能猜对。</p>
<p><b class="t">Präteritum 的两个例外：</b>严格来说 sein/haben 也有 Perfekt 形式（ich bin gewesen, ich habe gehabt），但口语里几乎没人这么说，德国人几乎永远直接用 Präteritum：<mark>ich war</mark>（sein 的过去式）、<mark>ich hatte</mark>（haben 的过去式）。除了这两个词，其余动词的 Präteritum 主要活在书面语和新闻里，留到以后系统学习。</p>
<table><tr><th>人称</th><th>war</th><th>hatte</th></tr>
<tr><td class="hl">ich</td><td class="hl">war</td><td class="hl">hatte</td></tr>
<tr><td class="hl">du</td><td class="hl">warst</td><td class="hl">hattest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">war</td><td class="hl">hatte</td></tr>
<tr><td class="hl">wir</td><td class="hl">waren</td><td class="hl">hatten</td></tr>
<tr><td class="hl">ihr</td><td class="hl">wart</td><td class="hl">hattet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">waren</td><td class="hl">hatten</td></tr></table>`
  },
  {
    id: 'g14', num: '', title: '可分动词', de: 'Trennbare Verben',
    html: `<p>可分动词（Trennbare Verben）由"前缀 + 基础动词"组成，比如 <b class="de">aufstehen</b> = auf + stehen。词典里通常用竖线标出：<mark>auf|stehen</mark>、<mark>an|fangen</mark>。常见可分前缀：auf-、an-、ein-、mit-、ab-、fern-、zurück- 等。</p>
<p><b class="t">现在时：前缀踢到句尾。</b>基础动词按人称正常变位、站在位置2，前缀被踢到句子最后——这是继情态动词句框之后的第二种 Satzklammer，前缀不影响变位规则，只影响位置：</p>
<table><tr><th>可分动词</th><th>基础动词</th><th>ich</th><th>du</th><th>er/sie/es</th></tr>
<tr><td class="hl">aufstehen</td><td>stehen（规则）</td><td class="hl">stehe auf</td><td class="hl">stehst auf</td><td class="hl">steht auf</td></tr>
<tr><td class="hl">anfangen</td><td>fangen（变音 a→ä）</td><td class="hl">fange an</td><td class="hl">fängst an</td><td class="hl">fängt an</td></tr>
<tr><td class="hl">fernsehen</td><td>sehen（变音 e→ie）</td><td class="hl">sehe fern</td><td class="hl">siehst fern</td><td class="hl">sieht fern</td></tr></table>
<p><b class="t">Perfekt：ge- 插进前缀和词干中间。</b>不是加在整个词的最前面：</p>
<table><tr><th>可分动词</th><th>基础动词的 Partizip II</th><th>可分动词的 Partizip II</th></tr>
<tr><td>einkaufen</td><td>kaufen → gekauft</td><td class="hl">ein + ge + kauft = eingekauft</td></tr>
<tr><td>anrufen</td><td>rufen → gerufen</td><td class="hl">an + ge + rufen = angerufen</td></tr>
<tr><td class="hl">fernsehen</td><td>sehen → gesehen</td><td class="hl">fern + ge + sehen = ferngesehen（不是 gefernsehen）</td></tr>
<tr><td class="hl">aufstehen</td><td>stehen → gestanden</td><td class="hl">auf + ge + standen = aufgestanden（用 sein！）</td></tr></table>
<p><b class="t">三种形态对照：可分动词到底分不分？</b>同一个可分动词，在三种句子结构里长得完全不一样：</p>
<table><tr><th>句子结构</th><th>例句</th><th>前缀怎么样</th></tr>
<tr><td class="hl">现在时（独立变位）</td><td class="hl">Ich stehe früh auf.</td><td>分开，前缀单独踢到句尾</td></tr>
<tr><td class="hl">情态动词句</td><td class="hl">Ich muss früh aufstehen.</td><td><b>不分开</b>，整个动词原形完整地待在句尾</td></tr>
<tr><td class="hl">Perfekt</td><td class="hl">Ich bin früh aufgestanden.</td><td>ge- 插进前缀和词干中间</td></tr></table>
<p>只要动词还没变位（原形状态——跟在情态动词后面，或者本身就是不定式），前缀和词干就永远粘在一起；一旦动词变位站到位置2，前缀就要被踢到句尾。</p>`
  },
  {
    id: 'g15', num: '', title: '礼貌请求与正式邮件', de: 'Höfliche Bitten & E-Mails',
    html: `<p><b class="t">礼貌阶梯：</b>德语里想让请求听起来更委婉客气，有一套固定的"升级版"说法——把 können/wollen/haben 换成对应的 Konjunktiv II 形式，语气立刻从直接变客气。现在不需要弄懂虚拟式变位的完整原理（留到 u26 系统学习），先把这几个现成句型整体背下来：</p>
<table><tr><th>阶梯</th><th>说法</th><th>语气</th></tr>
<tr><td>直接</td><td class="hl">Können Sie mir helfen?</td><td>普通请求，熟人间也常用</td></tr>
<tr><td class="hl">更礼貌</td><td class="hl">Könnten Sie mir helfen?</td><td>正式场合/请陌生人帮忙首选</td></tr>
<tr><td class="hl">更礼貌</td><td class="hl">Würden Sie mir helfen?</td><td>同样委婉，强调"愿不愿意"</td></tr>
<tr><td class="hl">表达意愿</td><td class="hl">Ich würde gern einen Termin vereinbaren.</td><td>比 "Ich will..." 委婉得多</td></tr>
<tr><td class="hl">表达意愿</td><td class="hl">Ich hätte gern einen Kaffee.</td><td>u3 已学过，点餐/要东西时的礼貌说法</td></tr></table>
<p><b class="t">正式邮件结构模板：</b>德语邮件按关系亲疏分两套完全不同的称呼语和结束语，不能混用：</p>
<table><tr><th></th><th>正式（陌生人/官方/房东）</th><th>非正式（朋友/同事）</th></tr>
<tr><td>主题</td><td colspan="2" class="hl">Betreff: 简短说明这封邮件是关于什么的</td></tr>
<tr><td>称呼语（对女士）</td><td class="hl">Sehr geehrte Frau [姓],</td><td class="hl">Liebe [名],</td></tr>
<tr><td>称呼语（对男士）</td><td class="hl">Sehr geehrter Herr [姓],</td><td class="hl">Lieber [名],</td></tr>
<tr><td>正文</td><td colspan="2">说明来意，可以用 Ich möchte Ihnen mitteilen: ... 或 Könnten Sie...? 开头</td></tr>
<tr><td>结束语</td><td class="hl">Mit freundlichen Grüßen</td><td class="hl">Viele Grüße</td></tr></table>
<p><b>高危点：geehrte 还是 geehrter？</b>只看收信人的性别——对<b>女士</b>用 <mark>geehrte</mark>（不加额外词尾），对<b>男士</b>用 <mark>geehrter</mark>（加 -er）。非正式称呼 Liebe/Lieber 是同一条规律：对女性 Liebe，对男性 Lieber（加 -r）。这条规律只看收信人性别，和写信人是谁无关，写反了是很明显的低级错误。</p>`
  },
];
