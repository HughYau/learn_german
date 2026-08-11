// 语法速查手册补充：Phase 5 前半（u28-u30）新增的 3 个语法主题
export const topicsP5a = [
  {
    id: 'g27', num: '', title: 'Präteritum 过去式', de: 'Das Präteritum',
    html: `<p>德语的过去时有两套系统：<b class="de">Perfekt</b>（u12 学过，haben/sein + Partizip II）和 <b class="de">Präteritum</b>（这一课系统化）。两套系统说的是同一件事，区别只在<b>使用场合</b>：</p>
<table><tr><th>场合</th><th>常用时态</th><th>例子</th></tr>
<tr><td>日常口语（聊天、讲故事）</td><td class="hl">Perfekt</td><td class="hl">Ich habe gestern gearbeitet.</td></tr>
<tr><td>书面语（求职信、简历、新闻、小说）</td><td class="hl">Präteritum</td><td class="hl">Ich arbeitete gestern.</td></tr>
<tr><td>sein / haben（无论口语书面）</td><td class="hl">几乎总是 Präteritum</td><td class="hl">Ich war müde. Ich hatte Zeit.</td></tr></table>
<p>u12 学过 <mark>war/hatte</mark>，u20 学过情态动词的 Präteritum（<mark>konnte/musste/durfte/wollte/sollte</mark>）——这些高频例外一直在用 Präteritum，现在把其余动词的构成规律补齐。</p>

<p><b class="t">规则动词（schwach）：词干 + te + 人称词尾</b></p>
<table><tr><th>人称</th><th>machen</th><th>arbeiten（词干以 -t 结尾，插入 -e-）</th></tr>
<tr><td class="hl">ich</td><td class="hl">machte</td><td class="hl">arbeitete</td></tr>
<tr><td class="hl">du</td><td class="hl">machtest</td><td class="hl">arbeitetest</td></tr>
<tr><td class="hl">er/sie/es</td><td class="hl">machte</td><td class="hl">arbeitete</td></tr>
<tr><td class="hl">wir</td><td class="hl">machten</td><td class="hl">arbeiteten</td></tr>
<tr><td class="hl">ihr</td><td class="hl">machtet</td><td class="hl">arbeitetet</td></tr>
<tr><td class="hl">sie/Sie</td><td class="hl">machten</td><td class="hl">arbeiteten</td></tr></table>

<p><b class="t">强变化动词高频 15 词表：先练"读到就认得出"</b></p>
<table><tr><th>原形</th><th>Präteritum（ich/er）</th><th>中文</th></tr>
<tr><td>sein</td><td class="hl">war</td><td>是（u12）</td></tr>
<tr><td>haben</td><td class="hl">hatte</td><td>有（u12）</td></tr>
<tr><td>werden</td><td class="hl">wurde</td><td>变成</td></tr>
<tr><td>kommen</td><td class="hl">kam</td><td>来</td></tr>
<tr><td>bekommen</td><td class="hl">bekam</td><td>得到</td></tr>
<tr><td>gehen</td><td class="hl">ging</td><td>去</td></tr>
<tr><td>fahren</td><td class="hl">fuhr</td><td>乘车/开车去</td></tr>
<tr><td>sehen</td><td class="hl">sah</td><td>看见</td></tr>
<tr><td>sprechen</td><td class="hl">sprach</td><td>说</td></tr>
<tr><td>finden</td><td class="hl">fand</td><td>找到，觉得</td></tr>
<tr><td>geben</td><td class="hl">gab</td><td>给</td></tr>
<tr><td>nehmen</td><td class="hl">nahm</td><td>拿</td></tr>
<tr><td>schreiben</td><td class="hl">schrieb</td><td>写</td></tr>
<tr><td>beginnen</td><td class="hl">begann</td><td>开始</td></tr>
<tr><td>bleiben</td><td class="hl">blieb</td><td>留下</td></tr></table>
<p>不要求这 15 个词全部主动会变位——先做到"看见就认得出中文意思"。其中 <mark>bekam、machte、arbeitete、begann、wurde</mark> 这五个和职业叙事关系最大（u28），要求能主动拼出来、用进句子里；<mark>war/hatte</mark>（u12）、<mark>konnte/musste</mark> 等情态动词形式（u20）本来就已经是主动词汇。</p>
<p><b class="t">口诀：</b>写日记、发消息、聊天用 Perfekt；写信、写简历、读新闻用 Präteritum；sein/haben 任何场合都优先用 war/hatte。</p>`
  },
  {
    id: 'g28', num: '', title: '连接词与语序', de: 'Konnektoren',
    html: `<p>德语里表达因果、转折关系的连接词，语序表现分三类，混着用是最容易出错的地方——这是 B1 阶段的高危语法点，务必分清楚：</p>
<table><tr><th>类型</th><th>成员</th><th>语序规则</th></tr>
<tr><td>①并列连词（不占位置）</td><td class="hl">und, aber, oder</td><td>相当于"第 0 位"，后面还是正常 V2 语序</td></tr>
<tr><td>②从属连词（引导从句，V-letzt）</td><td class="hl">weil（u18）, dass（u20）, wenn（u22）, <mark>obwohl</mark>（u29，新）</td><td>从句动词必须垫底；从句提前时主句倒装</td></tr>
<tr><td>③连接副词（占第一位触发倒装）</td><td class="hl"><mark>deshalb, trotzdem</mark>（u29，新）；<mark>einerseits/andererseits</mark>（u30，新）</td><td>占句子第一位时，变位动词紧跟其后、主语后置；挪到句中则不触发倒装</td></tr></table>

<p><b class="t">四组对比例句：</b></p>
<p class="de">1) Der Zug hat Verspätung, <mark>aber</mark> ich bleibe ruhig.（并列，两个独立分句各自 V2，aber 不占位）</p>
<p class="de">2) Ich bleibe ruhig, <mark>obwohl</mark> der Zug Verspätung hat.（从属连词，从句动词 hat 垫底）</p>
<p class="de">3) <mark>Obwohl</mark> der Zug Verspätung hat, bleibe ich ruhig.（从句提前占第一位，主句 bleibe-ich 倒装）</p>
<p class="de">4) Der Zug hat Verspätung. <mark>Trotzdem</mark> bleibe ich ruhig.（连接副词占第一位，bleibe-ich 倒装）</p>

<p><b class="t">高频错误——别把 obwohl 和 trotzdem 叠在一起用：</b></p>
<table><tr><th>❌ 错误（重复表达"尽管"）</th><th>✅ 正确</th></tr>
<tr><td>Obwohl es regnete, trotzdem ging er raus.</td><td class="hl">Obwohl es regnete, ging er raus.</td></tr>
<tr><td></td><td class="hl">Es regnete. Trotzdem ging er raus.</td></tr></table>
<p><mark>obwohl</mark> 已经把"尽管"的意思放进从句了，主句不需要再加 trotzdem 强调一遍。</p>

<p><b class="t">deshalb vs trotzdem：管好各自的逻辑关系</b>——<mark>deshalb</mark> 表示"因此/所以"（顺着因果推），<mark>trotzdem</mark> 表示"尽管如此"（打破预期的转折）：</p>
<p class="de">Der Zug hatte Verspätung, <mark>deshalb</mark> habe ich den Anschluss verpasst.（因为延误，所以错过了转乘。）</p>
<p class="de">Der Zug hatte Verspätung, <mark>trotzdem</mark> habe ich den Anschluss geschafft.（尽管延误，我还是赶上了转乘。）</p>

<p><b class="t">einerseits...andererseits（u30）：</b>和 deshalb/trotzdem 属于同一类连接副词，成对使用呈现一件事的两面：<span class="de"><mark>Einerseits</mark> spare ich Zeit, <mark>andererseits</mark> fehlt mir der Kontakt zu Kollegen.</span>——两半各自占自己那半句的第一位，各自触发自己那半句的倒装。</p>`
  },
  {
    id: 'g29', num: '', title: 'Genitiv 与转述', de: 'Genitiv & Indirekte Rede',
    html: `<p><b class="t">Genitiv 入门：德语的第四个格</b></p>
<p>Nominativ、Akkusativ、Dativ 已经全部学过，<b class="de">Genitiv（第二格／属格）</b>是最后一个。B1 阶段先只学最实用的一种用法：<mark>wegen</mark>（因为）、<mark>während</mark>（在……期间）、<mark>trotz</mark>（尽管）这三个介词后面，名词要变成 Genitiv 形式：</p>
<table><tr><th>性/数</th><th>定冠词 Genitiv</th><th>名词变化</th><th>例子</th></tr>
<tr><td>阳性</td><td class="hl">des</td><td class="hl">名词 + -(e)s</td><td class="hl">wegen des Zuges / des Anschlusses</td></tr>
<tr><td>中性</td><td class="hl">des</td><td class="hl">名词 + -(e)s</td><td class="hl">wegen des Wetters</td></tr>
<tr><td>阴性</td><td class="hl">der</td><td class="hl">不变</td><td class="hl">wegen der Störung</td></tr>
<tr><td>复数</td><td class="hl">der</td><td class="hl">不变</td><td class="hl">wegen der Verspätungen</td></tr></table>
<p>规律：<b>阳性和中性</b>加词尾——单音节或以 s/ß/z/x 结尾的词加 <mark>-es</mark>（Zug→Zuges，Anschluss→Anschlusses），其余大多数加 <mark>-s</mark> 即可（Wetter→Wetters）；<b>阴性和复数名词本身完全不变</b>，只有冠词从 die 变成 der。不定冠词同理：ein→ein<b>es</b>，eine→ein<b>er</b>（<span class="de">wegen <mark>einer</mark> technischen Störung</span>）。形容词跟在 Genitiv 名词前时，词尾统一是 <mark>-en</mark>（和 Dativ 一样）：<span class="de">wegen des verpassten Anschlusses</span>。</p>
<p>口语德语里 wegen 后面接 Dativ 的用法也很常见（<span class="de">wegen dem Regen</span>），但正式书面语（投诉信、申请信）请坚持用 Genitiv。</p>

<p><b class="t">Indirekte Rede 基础：转述别人说的话</b></p>
<p>两种最常用、门槛最低的转述方式：</p>
<table><tr><th>方式</th><th>例句</th></tr>
<tr><td class="hl">dass 从句（复现 u20）</td><td class="hl">Er sagt, dass der Klimawandel das wichtigste Thema ist.</td></tr>
<tr><td class="hl">laut + 名词（Genitiv 或 Dativ 均规范）</td><td class="hl">Laut der Studie / Laut dem Bericht steigen die Temperaturen.</td></tr></table>
<p><mark>laut</mark> 后接 Genitiv 或 Dativ<b>都是规范用法</b>——<mark>laut der Studie</mark> 和 <mark>laut dem Bericht</mark> 两种说法都对，不必纠结选哪个。转述用 dass 从句时，人称要跟着说话人的身份调整：<span class="de">Anna sagt: "Ich tue genug."</span> → <span class="de">Anna sagt, dass <mark>sie</mark> genug tut.</span></p>
<p><b class="t">先说到这里：</b>德语高阶书面语（尤其是新闻）还有一套专门用于转述的语法——Konjunktiv I（如 <mark>er sei</mark> 而不是 <mark>er ist</mark>），这里只需要知道它存在；日常口语和写作里，dass 从句和 laut 已经完全够用。</p>`
  },
];
