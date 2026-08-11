# 《Alltag · 德语生活》课程总体规划

> 本文档是网站内容扩充的唯一蓝图。设计对象：一位住在莱比锡的中国科研人员，中文母语、英语流利，德语从零起步。目标优先级明确为**日常生存 > 闲聊交友/听懂周围/读懂日常 > 职场学术寒暄 > 远期考证**，学习节奏灵活不固定，因此全文档不按"第几天"排课，只按"第几单元"和能力里程碑组织。

---

## 0. 如何使用本文件

这份文档不是写给最终用户看的说明书，而是写给**未来负责扩充课程内容的实施者**（可能是另一个会话、另一个人）的施工图纸。使用方式：

- 当用户说"加下一个单元"时，实施者直接翻到第 3 章对应 Phase 的单元规格，按规格里的场景、词汇域、语法切入方式、听说读写重点、任务设计去写 `data/units/uX.js`，格式对齐 `u1.js`／`u3.js` 的深度和结构（每课 intro + 2-3 个 vocab 区块 + 1 个 dialogue + 2 个 grammar 区块 + 1 个 tip + 8 道 exercises + 1 个 task）。
- 语法讲解顺序**必须**服从第 2 章"语法主线图"给出的引入顺序和前置依赖，不能因为某个语法点"看起来简单"就提前教——顺序背后有教学法理由，写在第 2 章里。
- 每实施完一个单元，回到第 3 章对应位置，把 `- [ ]` 改成 `- [x]`，并在 `data/course.js` 里补上新单元的 import。
- 新增的语法点如果值得单独收录进语法速查手册，追加到 `data/grammar.js`（当前 8 章，编号 g9 起延续）。

**当前状态**：Phase 0（u0-u6，共 7 个单元）已上线，覆盖 A1.1 前半段——发音、打招呼自我介绍、超市购物、面包店点单、职场寒暄、听力生存策略、读懂招牌标签。用户反馈"偏简单"，本规划从 Phase 1 起明确"上强度"：更长的对话、更密的语法点、更贴近真实办事/社交场景的任务。

### 总进度一览

| Phase | 单元范围 | 单元数 | 状态 |
|---|---|---|---|
| Phase 0 | u0 – u6 | 7 | 已上线 |
| Phase 1 | u7 – u11 | 5 | 已上线 |
| Phase 2 | u12 – u18 | 7 | 已上线 |
| Phase 3 | u19 – u23 | 5 | 已上线 |
| Phase 4 | u24 – u27 | 4 | 已上线 |
| Phase 5 | u28 – u33 | 6 | 已上线 |

---

## 1. 设计原则与总路线

### 1.1 五条教学法原则

**可理解输入 i+1（comprehensible input）**——每一课的新内容必须控制在"现有水平往上一小步"：新词量固定在 15-25 个（不超出短期记忆负荷），语法讲解永远从真实例句出发，让学习者先"读懂"再"总结规则"，而不是甩一张变位表让人硬背。对话文本里已学词汇占比要压到九成以上，新语法点/新词才有余力被注意到。这也是为什么第 3 章每个单元规格都写"教学切入方式"而不是直接给语法公式。

**任务型教学 TBLT（task-based language teaching）**——每一课末尾的"今天的生活任务"不是造句练习，而是要求学习者走出网站，在莱比锡的真实场景里完成一次真实交流：打一个电话、写一封邮件、在面包店点一次单。语言在这里是完成任务的工具，不是被考核的对象——这也是为什么任务设计强调"今天做一次"而非"反复操练"。

**间隔重复 SRS（spaced repetition system）**——站内词卡系统按记忆曲线安排复习，"到期数字清零"是全站唯一建议每天做的事。这条原则也决定了课程节奏设计：学习者可能连续多天不打开网站，SRS 队列会自动堆积、不会因断档丢失进度，所以单元与单元之间不设强制的时间间隔，允许"猛学一周、停两周"这种真实节奏。

**语法融入场景（grammar embedded in context）**——全站没有一节课是孤立的"语法课"。每个语法点必须依附一个具体的沟通需求登场：Dativ 不会以"这是德语第三格"的抽象面孔出现，而是伴随"哪里疼"（*Der Kopf tut mir weh*）这个真实需求第一次露面；两格介词不会以"介词表格"登场，而是伴随"问路"这个真实任务出现。语法区块的行文顺序永远是：给例句 → 学习者自己发现规律 → 给出规则总结表。

**螺旋式复现（spiral curriculum）**——语法点不会"学完就扔"。Akkusativ 在 u3 只露出不定冠词 *ein → einen* 这一个面（定冠词 *der → den* 目前只收录在语法手册 g6，尚未在任何单元正式教过），u9 情态动词句子里将以宾语身份复现，u11 的 *es gibt* + Akk. 再补上定冠词形态，u16 两格介词逼着学习者重新激活"这里该用第几格"的判断直觉。第 2 章的语法主线图专门辟出"螺旋复现点"一列，就是为了让每个语法点的复现轨迹从一开始就被设计出来，而不是碰运气。

### 1.2 总路线图

词汇量目标参照 Goethe 官方分级共识：A1 终点约 650 词、A2 终点约 1300 词、B1 终点约 2400 词（均为可理解词汇量的粗略估计，非精确考试大纲词数）。学时区间按"灵活但持续投入"估算，不代表打卡天数。

| Phase | CEFR 定位 | 单元数（累计） | 累计词汇量目标 | 达成后的真实能力 | 学时区间（灵活） |
|---|---|---|---|---|---|
| Phase 0（已上线） | A1.1 前半 | 7（7） | ~180 词 | 能打招呼自我介绍、在面包店/超市买东西、应付走廊闲聊、读懂招牌标签 | 已完成，约 20-30 小时 |
| Phase 1 | A1.1 完成 | 5（12） | ~350 词 | 能独立打电话约时间、介绍家人、说明日常计划和身体不适、描述自己住处 | 25-35 小时 |
| Phase 2 | A1.2（欧标 A1 完成） | 7（19） | ~650 词 | 能讲过去发生的事、独立走完一次 Bürgeramt 登记、写邮件问路、买衣服退换货、做客说明饮食偏好 | 45-60 小时 |
| Phase 3 | A2.1 | 5（24） | ~950 词 | 能坐火车独立出行处理延误、在职场请假协商、聊健康与保险、和朋友约会取消约会 | 40-55 小时 |
| Phase 4 | A2.2（欧标 A2 完成） | 4（28） | ~1300 词 | 能读懂简易新闻、表达观点和假设、用关系从句更精确描述人和事、参与本地文化生活对话 | 40-55 小时 |
| Phase 5 | B1（B1.1 → B1.2） | 6（34） | ~2400 词 | 能写求职信、撑住模拟面试；能处理旅行延误/行李丢失并投诉索赔；能就日常社会话题发表并转述观点；能读新闻、辨事实与观点；能用 Konjunktiv II 过去式复盘误会、委婉表达批评；能用关系从句和被动态写一篇 150 词议论短文，具备报考 B1 的语言基础 | 120-160 小时 |

---

## 2. 语法主线图

这是全文档最重要的一节。顺序参考主流 DaF 教材共识（Netzwerk、Menschen、Nicos Weg 的通行排序），并结合本站"生存优先、任务驱动"的定位做了取舍。几个关键排序决策先在这里讲清楚，后面的表格逐条落实：

**为什么 Perfekt 先于 Präteritum？** 口语德语讲过去的事几乎只用 Perfekt——"Was hast du am Wochenende gemacht?" 是德国人每周一必问的句子。Präteritum 除了 *war/hatte* 这两个高频到几乎取代了 Perfekt 说法（没人说 *ich bin gewesen*，都说 *ich war*）之外，其余动词的 Präteritum 主要活在书面语和新闻里。所以策略是：先教 Perfekt 让学习者能立刻开口讲故事，Präteritum 先只挑 *war/hatte* 单独记成两个例外高频词，其余动词的 Präteritum 留到 A2 靠阅读被动吸收，B1 才系统整理。

**为什么情态动词在 A1.2 早期就进？** *ich möchte/kann/muss* 这三个词覆盖了几乎所有真实请求、预约、拒绝的场景，是"生存优先"原则下最该早点拿到手的工具。更重要的是，情态动词句子里"变位动词第二位、实义动词原形踢到句尾"的**句框结构（Satzklammer）**是德语语序的核心训练——越早建立这个框架，后面无论是 Perfekt 的过去分词后置，还是从句的变位动词跑到句尾，学习者都有一个现成的心智模型可以类比，而不是每次都从零建立。

**为什么 Dativ 在 Akkusativ 巩固之后、两格介词之前？** 格系统的学习是认知负荷递增的过程。Akkusativ 只在阳性冠词上变化（*ein→einen*），负荷最低，适合第一个登场；Dativ 三个性别的冠词都变，负荷更高，必须等 Akkusativ 站稳了再引入，且第一次露面故意压缩到"人称代词 + 几个固定动词"（*mir geht's, tut mir weh*）这种最小可用单位，不摊开整张 Dativ 变格表。而两格介词（Wechselpräpositionen）要求学习者在同一个介词上瞬间判断"这次该用哪个格"，是格系统里认知难度最高的组合技——必须等 Akkusativ 和 Dativ 分别独立稳固之后才有意义，否则"该用哪个格"和"这个格具体怎么变"两个问题会混在一起，直接过载。

**为什么 Adjektivdeklination（形容词词尾变化）放 A2 后期并拆成三次教？** 形容词词尾变化的完整表格是"冠词类型 × 格 × 性/数"的组合，一次性甩出整张表毫无意义——学习者只会死记表格，学完就忘。拆成三次、每次只加一个变量：第一次配定冠词（定冠词已经承担了格和性的信息，形容词词尾反而最简单，多是 *-e/-en*）；第二次配不定冠词（形容词开始要部分承担性别信息）；第三次不配冠词（形容词词尾几乎照搬定冠词的词尾，但因为没有冠词打头阵，学习者容易慌）。三次分布在三个不同单元，且都放在 Nominativ/Akkusativ/Dativ 三个格都已经稳固的 A2 后期——格系统不稳，形容词词尾学了也是白学。

### 2.1 格系统总览（贯穿全课程的一条暗线）

德语的格系统不是一节课能教完的，而是贯穿 Phase 0 到 B1 的一条暗线，单独列出方便把握全局：

| 阶段 | 格系统里程碑 | 单元 |
|---|---|---|
| Phase 0 | Nominativ 隐性建立（主语位置） | u1-u3 |
| Phase 0 | Akkusativ 只学不定冠词阳性变化 ein→einen | u3 |
| Phase 1 | Dativ 引入：仅人称代词 mir/dir + 固定动词 | u10 |
| Phase 1 | 方位介词初步：in/auf/an 当固定搭配感知，不讲格规则 | u11 |
| Phase 2 | Wechselpräpositionen 两格介词全套，正式讲透 wo+Dativ / wohin+Akkusativ | u16 |
| Phase 3 | Dativ 介词全套（aus/bei/mit/nach/seit/von/zu）+ Akkusativ 介词全套（durch/für/gegen/ohne/um）+ 人称代词 Dativ/Akkusativ 完整体系 | u19, u21 |
| Phase 4 | Adjektivdeklination 三步教学（定冠词后→不定冠词后→无冠词） | u24, u25, u27 |
| Phase 5 | Genitiv 格入门（*wegen/während/trotz* + 名词二格） | u29 |
| Phase 5 | 关系代词 Dativ/Genitiv（含介词 + 关系代词） | u33 |

### 2.2 A1→B1 核心语法引入顺序表

| # | 语法点（德语 / 中文） | Phase | 单元 | 前置依赖 | 螺旋复现点 |
|---|---|---|---|---|---|
| 1 | Aussprache-Regeln／发音规则 | 0 | u0 | — | 贯穿全站朗读音频；u6 复合词拆解时重提重音规则 |
| 2 | Personalpronomen／人称代词 | 0 | u1 | — | u9 情态动词变位、u10 Dativ 人称代词、u21 Akkusativ 人称代词均在此基础上扩展 |
| 3 | Verb *sein*／sein 动词 | 0 | u1 | 人称代词 | u12 Präteritum（*war*）；u4 寒暄用语持续复现 |
| 4 | Verb *haben*／haben 动词 | 0 | u2 | 人称代词 | u12 Präteritum（*hatte*）；u3 "Ich hätte gern" 预先接触虚拟式雏形 |
| 5 | Präsens der regelmäßigen Verben（含变音动词）／规则动词现在时 | 0 | u1, u3 | 人称代词 | u9 情态动词、u13 可分动词均基于此框架扩展 |
| 6 | Wortstellung V2／W-Fragen／Ja-Nein-Fragen／语序三条铁律 | 0 | u1 | 规则动词现在时 | u9 情态动词 Satzklammer、u18 从句 V-letzt 均建立在与 V2 的对比之上 |
| 7 | Genus und Plural der Nomen／名词性数 | 0 | u2 | — | 每单元新词汇持续复现 |
| 8 | Zahlen 0-100／Preise／数字与价格 | 0 | u2 | — | u7 时间读数、u17 价格比较持续复现 |
| 9 | Nominativ／Akkusativ（不定冠词 ein→einen） | 0 | u3 | 名词性数 | 定冠词 der→den 已收录语法手册 g6、u11 *es gibt*+Akk. 时正式教；u9 情态动词句宾语位置复现；u16 两格介词的 Akk. 用法 |
| 10 | *du* oder *Sie*／敬称系统 | 0 | u1, u4 | 人称代词 | u10 命令式三种形式、u15 正式邮件称呼语持续复现 |
| 11 | Uhrzeit（正式/口语两套读法） | 1 | u7 | 数字 | u9 周末计划、u12 讲过去时的时间状语持续复现 |
| 12 | Temporale Präpositionen *um/am/im*／时间介词 | 1 | u7 | Uhrzeit | u19 深化 *seit/bis*；B1 深化 *vor/nach/während* |
| 13 | Possessivartikel（Nom.+Akk.）／物主代词 | 1 | u8 | Nominativ/Akkusativ | u11 "mein Zimmer"、u24 简历叙述持续复现 |
| 14 | Verneinung: *kein* vs. *nicht*／否定 | 1 | u8 | 名词性数 | u17 购物"不合适"、u22 婉拒邀请持续复现 |
| 15 | Modalverben + Satzklammer／情态动词与句框结构 | 1 | u9 | V2 语序 | u10 医嘱对话、u14 Amt 场景、u20 Präteritum 情态动词持续复现 |
| 16 | Imperativ（du/ihr/Sie）／命令式 | 1 | u10 | 规则动词现在时, du/Sie | u14 表格填写说明持续复现 |
| 17 | Dativ 引入：人称代词 *mir/dir* + 固定动词（*wehtun, gefallen*） | 1 | u10 | Nominativ/Akkusativ | u16 两格介词 Dativ 用法；u19 Dativ 人称代词全套；u21 Akkusativ 人称代词对照 |
| 18 | 方位介词初步（*in/auf/an* 表位置，固定搭配） | 1 | u11 | Dativ 引入 | u16 Wechselpräpositionen 在此基础上补全完整格规则 |
| 19 | *es gibt* + Akkusativ | 1 | u11 | Nominativ/Akkusativ | u23 讲经历时持续复现 |
| 20 | Perfekt（haben/sein + Partizip II） | 2 | u12 | haben/sein | u13 可分动词 Perfekt 形式；u24 简历时态混合运用；u27 讲述经历 |
| 21 | Präteritum *war/hatte* | 2 | u12 | sein/haben | u20 Präteritum 情态动词；B1 其余动词 Präteritum 阅读识别 |
| 22 | Trennbare Verben（现在时 + 第二 Satzklammer） | 2 | u13 | 情态动词 Satzklammer | u12 Perfekt 形式（ge- 插入前缀词干间）；日常作息类场景持续复现 |
| 23 | Amtsdeutsch 惯用句式／正式文书阅读策略 | 2 | u14 | Imperativ（Sie）, 情态动词 | u25 意见表达的正式书面语持续复现 |
| 24 | Konjunktiv II 礼貌式雏形（*könnte/würde* 固定短语） | 2 | u15 | 情态动词 | u26 系统化学习完整 Konjunktiv II |
| 25 | Wechselpräpositionen 两格介词全套（wo+Dat / wohin+Akk） | 2 | u16 | Dativ 引入, Nominativ/Akkusativ, 方位介词初步 | u19 Dativ 介词全套；u27 关系从句中方位描述持续复现 |
| 26 | Komparativ／Superlativ／比较级最高级 | 2 | u17 | 形容词基础用法 | u25 意见表达比较观点；u27 文化生活比较景点 |
| 27 | Nebensatz *weil*（V-letzt 语序） | 2 | u18 | V2 语序对比 | u20 *dass* 从句；u22 *wenn* 从句；u25 从句综合实战 |
| 28 | Dativ 介词全套（*aus/bei/mit/nach/seit/von/zu*）+ Akkusativ 介词全套（*durch/für/gegen/ohne/um*） | 3 | u19 | Dativ 引入, 两格介词 | B1 固定动词介词搭配（*sich interessieren für*）持续复现 |
| 29 | Personalpronomen im Dativ／Akkusativ（完整体系） | 3 | u19, u21 | Dativ 引入（mir/dir 已学） | u26 Konjunktiv II 句子中代词持续复现 |
| 30 | Präteritum der Modalverben（*konnte/musste/durfte/wollte/sollte*） | 3 | u20 | 情态动词, Präteritum（war/hatte） | u24 简历讲述过去安排持续复现 |
| 31 | Nebensatz *dass* | 3 | u20 | weil 从句 | u25 意见表达从句综合实战 |
| 32 | Reflexive Verben／反身动词 | 3 | u21, u22 | Akkusativ/Dativ 人称代词 | u26 Konjunktiv II 愿望句中持续复现（*ich würde mich freuen*） |
| 33 | Nebensatz *wenn*（条件/时间）+ *als* 与 *wenn* 的区分 | 3 | u22 | weil/dass 从句 | u26 虚拟条件句是 *wenn* 从句的进阶形式 |
| 34 | Passiv 入门（Vorgangspassiv 现在时） | 3 | u23 | Perfekt（Partizip II 已掌握） | B1 Präteritum 被动态、情态动词+被动态深化 |
| 35 | Adjektivdeklination Teil 1（定冠词后） | 4 | u24 | 三格系统已掌握 | u25 Teil 2、u27 Teil 3 螺旋推进 |
| 35a | Infinitiv mit zu／zu 不定式（含 um…zu 预告） | 4 | u24 | 情态动词句框（u9）, Perfekt（u12） | u25 观点句 *Es ist wichtig, ... zu ...* 复现；B1 um…zu/damit 对比 |
| 36 | Indirekte Fragesätze／间接疑问句（*ob/wie/wann/warum*） | 4 | u25 | W-Fragen, dass 从句 | B1 间接引语（indirekte Rede）在此基础上扩展 |
| 37 | Adjektivdeklination Teil 2（不定冠词后） | 4 | u25 | Teil 1 | u27 Teil 3 |
| 38 | Konjunktiv II 系统化（*würde*+Inf., *wäre, hätte, könnte*） | 4 | u26 | Konjunktiv II 雏形（u15）, Präteritum | B1 Konjunktiv II 过去式（*hätte...gemacht*）深化 |
| 39 | Relativsätze／关系从句（Nom./Akk.） | 4 | u27 | Nominativ/Akkusativ, V-letzt 语序 | B1 Dativ/Genitiv 关系代词、扩展关系从句深化 |
| 40 | Adjektivdeklination Teil 3（无冠词） | 4 | u27 | Teil 1, Teil 2 | B1 全面巩固，写作中高频复现 |
| 41 | Präteritum systematisch／常用强变化动词过去式系统化 | 5 | u28 | Präteritum *war/hatte*（u12）, Präteritum der Modalverben（u20）, Perfekt 强变化过去分词库（u12 起） | u31 新闻书面语 Präteritum Passiv 中巩固；u33 综合叙述任务持续复现 |
| 42 | Konnektoren／连接副词与从属连词对比（*deshalb, trotzdem* vs. *obwohl*） | 5 | u29 | *weil* 从句（u18）, *dass* 从句（u20）, *wenn* 从句（u22） | u30 观点讨论中持续复现；u32 委婉批评句型中复现 *trotzdem* |
| 43 | Genitiv 格入门（*wegen/während/trotz* + 名词二格） | 5 | u29 | 三格系统已掌握（Nom./Akk./Dat.），名词性数（u2） | u30 *laut* + Genitiv 转述句型；u33 Genitiv 关系代词（*dessen/deren*）在此基础上扩展 |
| 44 | Indirekte Rede 基础（*dass* 从句转述 + *laut* + Genitiv） | 5 | u30 | *dass* 从句（u20）, 间接疑问句（u25）, Genitiv 入门（u29） | u31 新闻转述句型（*Berichten zufolge…*）持续复现；日常转述他人观点场景持续复现 |
| 45 | Passiv 各时态（Präteritum Passiv、Perfekt Passiv、情态动词 + 被动） | 5 | u31 | Passiv 入门 Präsens（u23）, Präteritum（u12/u28）, Perfekt（u12）, 情态动词（u9） | u33 议论短文写作中持续复现，衔接 B1 Schreiben 评分标准 |
| 46 | Konjunktiv II 过去式（*hätte/wäre* + Partizip II） | 5 | u32 | Konjunktiv II 系统化现在式（u26）, Perfekt 过去分词库（u12 起） | u33 综合场景复盘持续复现；日常"早知道就…"表达持续复现 |
| 47 | Relativsätze 深化（Dativ/Genitiv 关系代词、介词 + 关系代词） | 5 | u33 | Relativsätze Nom./Akk.（u27）, Genitiv 入门（u29）, Dativ/Akkusativ 介词全套（u19/u21） | 全书语法体系收尾，B1 Schreiben/Sprechen 高频依赖此结构 |

**Phase 5（B1）语法体系一览**：本 Phase 六个单元（u28-u33）依次系统化 Präteritum、Konnektoren 与 Genitiv 入门、Indirekte Rede、Passiv 各时态、Konjunktiv II 过去式、Relativsätze 深化，详细教学切入方式见第 3.5 节各单元规格。

---

## 3. 分阶段单元规划

### 3.1 Phase 1：A1.1 补完 + 上强度（u7 – u11）

- [x] u7　[x] u8　[x] u9　[x] u10　[x] u11

#### u7　时间日期与预约　*Termine und Uhrzeit*

- **场景**：和同事约喝咖啡的时间、打电话给理发店/诊所约时段、看懂并回应日历邀请
- **词汇域**：die Uhr（钟/表）、die Zeit（时间）、der Termin（预约，pl. Termine）、die Minute、die Stunde、der Kalender、die Woche、der Monat、das Jahr、früh、spät、pünktlich、heute/morgen/übermorgen/gestern、nächste Woche、Januar…Dezember（月份代表词）、passen（"合适/来得及"，*Passt dir Montag?*）、verschieben（改期）、absagen（取消约定）
- **语法点**：Uhrzeit 正式（14:30）与口语（*halb drei, Viertel nach zwei*）两套读法，从"约在几点"这个真实问题引入；时间介词 *um/am/im*（*um 8 Uhr, am Montag, im Mai*），先给例句对比再总结三个介词各管什么
- **听**：语音留言/电话里报出的时间和日期
- **说**：打电话提议、接受或改约一个具体时间
- **读**：日历邀请、预约确认短信
- **写**：填一次日历、写一条改约短信
- **对话场景构想**：Wei 打电话给理发店，前台报出几个可选时段，Wei 选一个并确认日期
- **生活任务**：真实给某人发消息提议一个见面时间，用上 *um/am*
- **预计课数**：2 课

#### u8　家庭与介绍他人　*Familie und Vorstellen*

- **场景**：给同事看家人照片、周末聚会互相介绍伴侣/孩子、说明自己的家庭状况
- **词汇域**：die Familie、die Eltern（pl.）、die Mutter／der Vater、das Kind（pl. Kinder）、der Bruder／die Schwester、der Sohn／die Tochter、der Mann／die Frau（也表"丈夫/妻子"）、der Partner／die Partnerin、der Freund／die Freundin（注意"男朋友/朋友"的歧义提示）、die Geschwister（pl.）、die Großeltern（pl.）、verheiratet、ledig
- **语法点**：Possessivartikel（*mein/dein/sein/ihr/unser/euer/Ihr*，先给 Nominativ 再给 Akkusativ 两格），从"这是我的哥哥"这类真实介绍句切入；Verneinung *kein*（名词否定，*Ich habe keine Geschwister*）与 *nicht*（其他否定）对比讲解
- **听**：同事互相介绍家人的对话
- **说**：用物主代词介绍 2-3 位家人；练习用 *kein* 说明"没有"
- **读**：社交媒体家庭照片的文字说明
- **写**：写一句话向语伴介绍自己的家人
- **对话场景构想**：周末聚餐，Anna 给 Wei 介绍丈夫和两个孩子，Wei 也拿出手机介绍家人
- **生活任务**：写 3 句话介绍自己的家人（单身/无子女的学习者练习 *kein* 的否定用法）
- **预计课数**：2 课

#### u9　情态动词与日常安排　*Modalverben im Alltag*

- **场景**：和同事约健身房、协商周末计划、婉拒邀请并说明理由
- **词汇域**：möchten、können、müssen、dürfen、wollen、sollen（六个情态动词一次性给出）、Sport machen、ins Fitnessstudio gehen、der Deutschkurs、leider、gerne、Lust haben (auf)、Zeit haben、frei sein、heute Abend、dieses Wochenende
- **语法点**：情态动词的不规则变位 + Satzklammer 句框结构（情态动词占第二位，实义动词原形踢到句尾），从"我想学德语"（*Ich möchte Deutsch lernen*）这种高频需求句直接给出框架，用"句子像个夹子，两端夹东西"的画面帮助记忆
- **听**：同事协商周末计划的对话，包含接受和婉拒
- **说**：用情态动词表达意愿/能力/义务（"这周末必须工作"、"你想一起去吗"）
- **读**：健身房/兴趣班的规则告示（含 *dürfen/müssen*）
- **写**：回复一条邀请消息，婉拒并说明理由
- **对话场景构想**：Anna 邀请 Wei 周六去公园野餐，Wei 因为要上德语课先婉拒，改约周日
- **生活任务**：用 *ich möchte/kann/muss* 各写一句本周真实计划，至少对一人说出其中一句
- **预计课数**：2 课

#### u10　身体与看病　*Beim Arzt*

- **场景**：感冒发烧去看 Hausarzt、药房买药、跟同事说明身体不适请假
- **词汇域**：der Kopf、der Bauch、der Hals、der Rücken、das Fieber、der Husten、der Schnupfen、die Schmerzen（pl.）、krank、gesund、die Apotheke、das Medikament、die Sprechstunde、das Rezept、krankschreiben、wehtun
- **语法点**：Imperativ 命令式（du/ihr/Sie 三种形式），从医生给出的建议例句（*Trinken Sie viel Wasser!*）直接总结规则；Dativ 引入——人称代词 *mir/dir* + 固定搭配 *Mir geht's nicht gut* / *Der Kopf tut mir weh*，作为整体短语先用起来，不展开完整 Dativ 格系统
- **听**：诊所前台叫号、医生问诊对话
- **说**：描述哪里不舒服、打电话请病假
- **读**：简化版药品说明书、请假条样式
- **写**：给同事/上级发一条请病假短信
- **对话场景构想**：Wei 感冒去看 Hausarzt，医生问 *Was fehlt Ihnen?* 并用命令式给建议（*Bleiben Sie zu Hause und trinken Sie viel Tee*）
- **生活任务**：练到能脱口而出"Mir geht's nicht gut" + 身体部位 + "tut mir weh"这套框架
- **预计课数**：2 课

#### u11　住房与家具　*Wohnung und Möbel*

- **场景**：找房看房、搬家、跟室友描述房间摆设、二手平台（Kleinanzeigen）交易家具
- **词汇域**：die Wohnung、das Zimmer、die Küche、das Bad、das Wohnzimmer、das Schlafzimmer、die Miete、die Möbel（pl.）、der Tisch、der Stuhl、das Bett、der Schrank、das Regal、die Lampe、groß/klein、hell/dunkel、ruhig、der Balkon
- **语法点**：方位介词初步（*in/auf/an* 表位置，当作"东西在哪儿"的固定搭配句型 *Der Tisch steht im Wohnzimmer*，只给感知不深挖 Dativ/Akkusativ 双重规则，完整版留给 u16 螺旋复现）+ *es gibt* + Akkusativ（*In der Wohnung gibt es einen Balkon*）
- **听**：看房时房东介绍户型
- **说**：用 *es gibt* 描述房间里有什么、东西大概放在哪里
- **读**：Kleinanzeigen 式的找房/卖家具广告
- **写**：写一段房间描述发给朋友，或贴到二手群里卖家具
- **对话场景构想**：Wei 在 Kleinanzeigen 上联系卖桌子的人，问情况并约时间上门看
- **生活任务**：用 *es gibt* + *in/auf/an* 的固定搭配描述自己房间，写 3-4 句话
- **预计课数**：2 课

---

### 3.2 Phase 2：A1.2（u12 – u18）

- [x] u12　[x] u13　[x] u14　[x] u15　[x] u16　[x] u17　[x] u18

#### u12　完成时与讲述过去　*Das Perfekt – Was hast du gemacht?*

- **场景**：周一被问"周末做了什么"、跟同事汇报昨天开的会/做的实验
- **词汇域**：gemacht、gewesen、gehabt、gegangen、gefahren、gesehen、gekauft、getroffen（8 个最高频动词的 Partizip II，先当"新单词"整体记）、gestern、letzte Woche、letztes Wochenende、schon、noch nicht
- **语法点**：Perfekt 构成（haben/sein + Partizip II，规则动词 *ge-...-t*、不规则动词强变化表）+ haben/sein 选择规律（移动或状态改变用 sein，其余用 haben）+ Präteritum 只学 *war/hatte* 这两个口语高频例外；从"周末做了什么"这个每周一必答的真实问题切入
- **听**：同事间"周末过得怎么样"的闲聊
- **说**：用 Perfekt 讲述昨天/上周末做的三件事
- **读**：朋友社交媒体上用过去时写的动态
- **写**：写一段"我的周末"日记式短文
- **对话场景构想**：周一早上 Anna 问 Wei 周末做了什么，Wei 讲了去公园、买东西、见朋友三件事，全用 Perfekt
- **生活任务**：每天睡前用 Perfekt 说/写一句"我今天做了什么"，练到 *war/hatte/gemacht/gegangen* 脱口而出
- **预计课数**：2 课

#### u13　可分动词与日常作息　*Trennbare Verben und der Tagesablauf*

- **场景**：描述一天作息、和同事比较几点起床/下班、安排购物清单
- **词汇域**：aufstehen、anfangen、aufhören、einkaufen、anrufen、fernsehen、aufräumen、mitkommen、abholen、zurückkommen、aufwachen、der Tagesablauf
- **语法点**：可分动词现在时（前缀踢到句尾，构成第二个 Satzklammer——螺旋复现 u9 情态动词的句框结构）+ 可分动词的 Perfekt 形式（*ge-* 插在前缀和词干之间：*aufgestanden, eingekauft*，螺旋复现 u12 的 Perfekt）；从"每天几点起床/出门"的真实作息表切入，先把前缀动词当整体词汇背
- **听**：同事描述典型一天的语音
- **说**：描述自己从起床到睡觉的一天
- **读**：简单的日程表/时间轴文字
- **写**：写自己的 Tagesablauf 短文，用上至少 5 个可分动词
- **对话场景构想**：Wei 和新认识的语伴互相比较作息，谁起得早、谁几点下班
- **生活任务**：写一段"我典型的一天"（现在时+可分动词），再改写成"我昨天的一天"（Perfekt），体会两种时态切换
- **预计课数**：2 课

#### u14　Amt 办事全流程　*Beim Bürgeramt*

- **场景**：Anmeldung 登记住址、办理各种申请表格、看懂官方来信
- **词汇域**：die Anmeldung、das Bürgeramt、der Aufenthaltstitel、das Formular、ausfüllen、die Unterschrift、unterschreiben、der Antrag、beantragen、die Bescheinigung、der Ausweis、die Adresse、der Wohnsitz、die Frist、gültig、der Nachweis
- **语法点**：正式文书阅读策略——识别 Amtsdeutsch 惯用句式（*hiermit, bitte beachten Sie, spätestens bis*）+ Modalverben 在正式语境中的高频复现（*Sie müssen das Formular ausfüllen*）+ Imperativ 的 Sie 形式在表格说明中螺旋回归（u10）；以一张真实（简化）的 Anmeldung 表格为教具，边填边学
- **听**：办事窗口叫号、工作人员简短说明
- **说**：在窗口说明来意、提供个人信息
- **读**：官方来信/表格填写说明，重点是抓关键信息而非逐字翻译
- **写**：填写一张模拟表格
- **对话场景构想**：Wei 第一次去 Bürgeramt 办 Anmeldung，工作人员简短说明需要哪些材料，Wei 确认并递交
- **生活任务**：如果手头有真实德国官方信件/表格，用今天学的策略读出关键信息（截止日期、要做什么）；没有的话用课上模拟表格练一遍完整流程
- **预计课数**：2 课（信息密度高，可视情况拆为两课分别处理"填表"和"读信"）

#### u15　电话与邮件　*Telefonieren und E-Mails schreiben*

- **场景**：打电话咨询/预约、写正式或半正式邮件（给房东、诊所、同事）
- **词汇域**：der Anrufbeantworter、der Betreff、der Anhang、Sehr geehrte(r)…、Mit freundlichen Grüßen、Liebe(r)…、Viele Grüße、mitteilen、der Rückruf、erreichen、zurückrufen、dringend
- **语法点**：Konjunktiv II 礼貌式雏形——*könnte/würde* 当作整体礼貌短语引入（*Könnten Sie mir helfen? Ich würde gern…*），先当固定句型用不展开虚拟式变位理论（完整体系留给 u26）+ 正式邮件的信件结构，和已学的 du/Sie 称呼规则对应
- **听**：语音信箱留言、电话客服的标准开场白
- **说**：打电话说明来意、请求转接或回电
- **读**：一封简短商务/生活类邮件
- **写**：写一封请求类邮件（如向房东报修）
- **对话场景构想**：Wei 打电话给房东报告暖气坏了，转到语音信箱留言，随后写一封邮件说明情况
- **生活任务**：写一封真实或模拟的邮件（*Sehr geehrte/r* 开头，*Mit freundlichen Grüßen* 结尾），主题任选
- **预计课数**：2 课

#### u16　问路与城市　*Der Weg durch die Stadt*

- **场景**：问路、坐电车换乘、用地图 App 给朋友描述路线
- **词汇域**：links、rechts、geradeaus、an der Ampel、die Kreuzung、die Haltestelle、die Linie、umsteigen、die Richtung、neben、zwischen、hinter、vor、über、unter、gegenüber von、in der Nähe von
- **语法点**：Wechselpräpositionen 两格介词全套（*in/an/auf/unter/vor/hinter/neben/zwischen/über*：位置用 Dativ 答 *wo*，方向用 Akkusativ 答 *wohin*）——螺旋复现 u11 的方位介词初步，这里正式补全"为什么有时候用 den/dem"的完整格系统解释；用真实地图路线做"东西在哪"(wo+Dativ) 和"往哪走"(wohin+Akkusativ) 的对比练习，让格的功能可视化
- **听**：路人指路的语音
- **说**：向别人问路、给别人指路
- **读**：地图应用截图式的路线说明
- **写**：写一段简短路线说明给朋友（从火车站怎么走到你家）
- **对话场景构想**：Wei 向路人问从 Hauptbahnhof 到 Augustusplatz 怎么走，路人用左右转、地标指路
- **生活任务**：给朋友写一段从最近的电车站到你家的路线说明，用上至少 3 个两格介词
- **预计课数**：2 课

#### u17　购物进阶　*Kleidung, Umtausch und Vergleiche*

- **场景**：买衣服试穿、退换货、比较两件商品
- **词汇域**：die Kleidung、die Hose、die Jacke、die Schuhe（pl.）、die Größe、anprobieren、umtauschen、zurückgeben、der Kassenbon、die Farbe、billig/teuer
- **语法点**：Komparativ 与 Superlativ（规则变化 *-er/-sten* + 高频不规则 *gut-besser-am besten, groß-größer-am größten*），从"这件比那件好/贵/大"的真实购物比较场景切入，先给不规则形式当固定搭配背，规则变化让学习者自己总结公式
- **听**：店员介绍两款商品的对比
- **说**：表达"这个比那个更好/更便宜"、要求换货
- **读**：退换货政策、价签对比
- **写**：写一条网购评价，比较收到的商品和描述
- **对话场景构想**：Wei 去商场买外套试穿，觉得偏大想换尺码，还问了另一款颜色是否更便宜
- **生活任务**：挑两件自己有的物品（或网购页面上两个商品），用比较级写 3 句真实的比较句
- **预计课数**：2 课

#### u18　饮食文化与请客　*Zu Gast bei Freunden*

- **场景**：被邀请吃饭做客、带手信、餐桌礼仪、表达饮食偏好和理由
- **词汇域**：einladen、zu Gast sein、mitbringen、der Gastgeber／die Gastgeberin、Prost!、Guten Appetit!、vegetarisch、vegan、die Allergie、mögen、schmecken、satt、der Nachschlag
- **语法点**：*weil* 从句引入（V-letzt 语序：连接词 *weil* 把变位动词踢到句尾——第一个真正的从句结构，为后续 *dass/wenn* 打基础），从"为什么喜欢/不喜欢某道菜"这种天然需要给理由的场景切入，先给 3-5 个完整例句让学习者感知"动词跑到最后"，再总结规则
- **听**：主人介绍菜品、客人表达喜好的对话
- **说**：礼貌说明饮食禁忌/过敏，表达喜欢某道菜并说明原因
- **读**：聚餐邀请消息、菜谱简介
- **写**：回复一条聚餐邀请，说明是否能到场及饮食注意事项
- **对话场景构想**：Wei 被同事邀请去家里吃晚饭，主人问要不要再来一点，Wei 用 *weil* 从句解释自己不吃某种食物的原因
- **生活任务**：用 *weil* 造 3 个关于自己饮食喜好的真实句子（"我喜欢/不喜欢___，因为___"）
- **预计课数**：2 课

---

### 3.3 Phase 3：A2.1（u19 – u23）

- [x] u19　[x] u20　[x] u21　[x] u22　[x] u23

#### u19　旅行与交通　*Bahnfahren und Reisen*

- **场景**：DB 官网/App 买票、处理延误和换乘、和同行的人商量行程
- **词汇域**：die Fahrkarte、die Verspätung、der Anschluss、umsteigen（复现）、die Reservierung、pünktlich（复现）、der Bahnsteig、abfahren、ankommen
- **语法**：Dativ 介词全套（*aus/bei/mit/nach/seit/von/zu*）+ Akkusativ 介词全套（*durch/für/gegen/ohne/um*，购票场景自然出现"für zwei Personen"、"ohne Umsteigen"）+ 人称代词 Dativ/Akkusativ 完整体系 + 时间介词 *seit/bis* 深化
- **任务**：用德语在 DB App 或官网查一趟真实路线并读懂票面信息，能用一句话跟同伴说明换乘安排

#### u20　工作场景深化　*Meetings, Urlaub und Small Talk*

- **场景**：会议中简单发言、请假申请、和同事的闲聊升级（不只是天气）
- **词汇域**：die Besprechung、der Urlaub、Urlaub beantragen、die Frist（复现）、der Kollege／die Kollegin、die Deadline、erledigen
- **语法**：Präteritum der Modalverben（*konnte/musste/durfte/wollte/sollte*）+ *dass* 从句（*Ich finde, dass…／Ich denke, dass…*）
- **任务**：写一封请假邮件，说明原因（用 Präteritum 情态动词或 *dass* 从句）

#### u21　健康与保险体系　*Krankenversicherung und Facharzttermine*

- **场景**：深化 u10，理解德国医保体系基础、预约专科医生、和保险公司简单沟通
- **词汇域**：die Krankenversicherung、gesetzlich／privat、die Überweisung、der Facharzt／die Fachärztin、die Praxis、die Karte（Versichertenkarte）
- **语法**：反身动词（*sich fühlen, sich erkälten, sich krankmelden*）+ 人称代词 Akkusativ 完整体系（与 u10 已学的 Dativ 人称代词对照）
- **任务**：模拟打电话预约专科医生，用反身动词描述自己的症状

#### u22　朋友与约会　*Verabredungen unter Freunden*

- **场景**：约朋友、取消约会、表达感受和期待
- **词汇域**：sich verabreden、absagen（复现）、Lust haben（复现）、enttäuscht、gespannt、sich freuen auf
- **语法**：*wenn* 从句（条件/时间）+ *als* 与 *wenn* 的区分（一次性过去 vs. 反复/现在将来）+ 反身动词深化（*sich treffen mit, sich freuen auf*）
- **任务**：用"如果…我就…"（*wenn*从句）给朋友提两个可选的见面方案

#### u23　媒体与新闻入门　*Nachrichten verstehen*

- **场景**：看懂新闻标题、听 Nachrichtenleicht 式的简化新闻、和同事聊时事的开场白
- **词汇域**：die Nachricht、die Schlagzeile、berichten、die Meldung、laut（"根据…"）
- **语法**：Passiv 入门（Vorgangspassiv 现在时：*wird* + Partizip II），从新闻标题和公共告示中识别被动态
- **任务**：找一条 Nachrichtenleicht 的新闻标题，标出里面的被动态结构

---

### 3.4 Phase 4：A2.2（u24 – u27）

- [x] u24　[x] u25　[x] u26　[x] u27

#### u24　讲述经历与简历　*Lebenslauf und Erfahrungen erzählen*

- **场景**：求职场景的自我介绍、写一份简单的 Lebenslauf、讲述过往经历
- **词汇域**：der Lebenslauf、die Erfahrung、die Ausbildung、abschließen、der Werdegang
- **语法**：Adjektivdeklination Teil 1（定冠词后：*die neue Stelle*）+ Perfekt/Präteritum 混合运用巩固（简历叙述天然需要过去时态自如切换）+ Infinitiv mit zu（zu 不定式：*Ich habe angefangen, Deutsch zu lernen*，含 um…zu 预告）
- **任务**：用德语写一段 5-6 句的自我经历简介，混用 Perfekt 和已学的 Präteritum

#### u25　意见表达　*Meine Meinung dazu*

- **场景**：就一个日常话题说明自己的观点、小范围辩论、回应"你怎么看"
- **词汇域**：meiner Meinung nach、finden（"认为"）、zustimmen、der Vorteil／der Nachteil
- **语法**：*weil/dass* 从句综合实战 + 间接疑问句（*ob/wie/wann/warum*）+ Adjektivdeklination Teil 2（不定冠词后：*ein wichtiges Thema*）
- **任务**：就一个身边话题（比如"周末该不该加班"）写一段 5 句左右的观点小短文

#### u26　假设与愿望　*Wenn ich Zeit hätte…*

- **场景**：表达假设、委婉建议、"如果...我会..."的愿望句
- **词汇域**：der Wunsch、eigentlich、stattdessen
- **语法**：Konjunktiv II 系统化（*würde*+Infinitiv 万能式、*wäre、hätte、könnte*，虚拟条件句和愿望句）
- **任务**：用 Konjunktiv II 写 3 个关于自己生活的假设句（"如果我有更多时间，我会…"）

#### u27　莱比锡文化生活　*Kultur in Leipzig*

- **场景**：聊 Leipziger Buchmesse、Gewandhaus 音乐会、Auerbachs Keller 等本地文化生活
- **词汇域**：die Buchmesse、das Konzert、die Ausstellung、empfehlen、der Eintritt
- **语法**：关系从句 Relativsätze（Nom./Akk. 关系代词 *der/die/das*）+ Adjektivdeklination Teil 3（无冠词：*mit gutem Kaffee*）
- **任务**：用关系从句向朋友推荐一个莱比锡的文化活动（"这是我上周去的书展，那里有…"）

---

### 3.5 Phase 5：B1（u28 – u33）

- [x] u28　[x] u29　[x] u30　[x] u31　[x] u32　[x] u33

**能力目标**：能听懂日常语速的广播和对话大意；能读懂报纸评论性文章并抓住作者观点；能就工作/学习话题做几分钟的连贯陈述；能写一篇结构完整的议论短文；能应对绝大多数没有预演过的生活场景（投诉、协商、解释误会）。六个单元把这个能力目标拆解为 B1.1 → B1.2 的渐进台阶：从"讲清自己的职业经历"起步，经过"处理突发状况""表达和转述观点""读懂媒体""化解跨文化误会"，最终在 u33 用一次综合性的"糟糕但最终解决的一天"串联全部场景收尾。

#### u28　求职与职业叙事　*Bewerbung und Berufsweg*

- **场景**：写求职信（Bewerbungsschreiben）、在 u24 简历基础上补充细节、模拟视频面试（Vorstellungsgespräch）问答
- **词汇域**：die Bewerbung（求职申请）、das Bewerbungsschreiben（求职信）、die Stellenanzeige（招聘广告）、die Qualifikation（资质）、die Fähigkeit（能力）、die Stärke／die Schwäche（优点/缺点）、der Arbeitgeber／die Arbeitgeberin（雇主）、die Berufserfahrung（工作经验）、sich bewerben um（申请，反身动词）、einstellen（雇佣）、kündigen（辞职/解雇）、befristet／unbefristet（有/无固定期限的）、das Gehalt（薪水）、die Gehaltsvorstellung（期望薪资）、der Vorstellungstermin（面试时间）、überzeugen（说服）、die Motivation（动机）、verantwortlich sein für（负责…）、die Referenz（推荐人/证明）
- **语法点**：Präteritum 系统化——在 u12（*war/hatte*）和 u20（情态动词过去式）已学的基础上，系统补全常用强变化动词的过去式（*kam, ging, sah, sprach, fand, gab, nahm, schrieb, begann, blieb, wurde* 等）。教学策略是"阅读为主+叙事运用"：先通过大量出现 Präteritum 的求职信/公司简介范文建立识别能力（不要求全部动词都能主动变位），再挑出与职业叙事强相关的高频词（*bekam, machte, arbeitete, begann, wurde*）做主动造句练习。同时讲解正式文体特征：书面语偏好被动式和名词化表达而非"ich"开头的连续短句，为 u31 系统学 Passiv 各时态先打个照面
- **听**：模拟面试录音，含考官提问和应聘者回答
- **说**：模拟一段 2-3 分钟的自我推荐/面试问答
- **读**：一封结构完整的 Bewerbungsschreiben 范文
- **写**：写一段求职信开头段（自我优势 + 求职动机）
- **对话场景构想**：Wei 参加一次模拟视频面试，HR 问 *"Erzählen Sie von Ihrem Werdegang"*，Wei 用 Präteritum 连贯讲述职业经历
- **生活任务**：如果正在/未来会求职，用今天学的框架写一段真实的自我推荐；否则把 u24 已写的经历简介里的动词改写成 Präteritum 书面语版本
- **预计课数**：2 课

#### u29　旅行与突发状况　*Unterwegs, wenn's schiefgeht*

- **场景**：火车延误索赔（Fahrgastrechte/Erstattung）、行李丢失申报、写正式投诉信（Beschwerdebrief）
- **词汇域**：die Verspätung（延误，复现）、die Entschädigung（赔偿）、der Fahrgast（乘客）、das Gepäck（行李）、verloren gehen（丢失）、die Fundsachen（失物招领，pl.）、die Beschwerde（投诉）、sich beschweren（投诉，反身动词）、der Ersatz（替代/赔偿物）、erstatten（赔付）、der Schaden（损失）、beantragen（申请，复现）、der Ausfall（取消/故障）、der Grund（原因）、wegen（因为，介词）、trotzdem（尽管如此）、obwohl（虽然，连词）、deshalb（所以）、die Ursache（起因）、rechtzeitig（及时的）
- **语法点**：①Konnektoren 第一批（*deshalb/trotzdem/obwohl*）——从投诉信/解释延误原因的真实语境切入，讲清三者的语序差异：*obwohl* 是从属连词（Nebensatz，V-letzt 语序，螺旋复现 u18 *weil* 从句的结构）；*trotzdem* 和 *deshalb* 是连接副词（Konnektoradverb），占据句首时会触发 V2 倒装（动词紧跟其后、主语后置）——这是学习者第一次遇到"连接词不引导从句、却仍会改变语序"的情况，需要和 *weil/dass* 的 V-letzt 反复对比，避免混淆。②Genitiv 入门——从 *wegen/während/trotz* 这三个高频二格介词切入（与语法点①的 *trotzdem/obwohl* 词根呼应，便于联想记忆），只教"介词+名词二格"的构成（阳性/中性词尾 *-(e)s*，阴性/复数不变、配合 *der/den*），不展开完整属格体系，目标是"读懂并仿写正式投诉信里的 *wegen einer technischen Störung*"这类短语
- **听**：车站广播延误通知、客服电话解释赔偿流程
- **说**：向工作人员口头说明行李丢失情况并要求解决
- **读**：一封完整的 Fahrgastrechte 投诉/索赔信范文
- **写**：写一封投诉信，说明延误情况并索赔
- **对话场景构想**：Wei 的火车因技术故障（*wegen einer technischen Störung*）大幅延误，错过转乘，Wei 到服务台说明情况并了解索赔流程，随后写一封正式投诉信
- **生活任务**：如果有过真实的延误/行李经历，写一封投诉/说明邮件；没有的话虚构一次并按格式练习，要求用上至少一个 Genitiv 介词和一对 Konnektoren
- **预计课数**：2 课

#### u30　观点与讨论　*Meinungen und Debatten*

- **场景**：环保/教育/工作生活平衡等日常社会话题的观点表达与回应、小组讨论后向他人转述观点
- **词汇域**：die Umwelt（环境）、der Klimawandel（气候变化）、die Bildung（教育）、die Work-Life-Balance（工作生活平衡）、der Standpunkt（立场）、behaupten（声称）、der Ansicht sein（持…观点）、zustimmen（同意，复现）、widersprechen（反驳）、einerseits…andererseits（一方面…另一方面）、der Vorschlag（建议）、vorschlagen（提议）、die Debatte（辩论）、diskutieren（讨论）、die Studie（研究）、laut（据…，介词）、angeblich（据说的）、der Kompromiss（妥协）、überzeugend（有说服力的）
- **语法点**：①Indirekte Rede 间接引语基础——从"转述别人在讨论中说了什么"这个真实需求切入（*Er sagt, dass der Klimawandel das wichtigste Thema ist* / *Laut der Studie steigen die Temperaturen*），只教门槛最低、最常用的两种转述方式：复用已学的 *dass* 从句（u20）把语义从"我认为"扩展到"转述他人所说"，以及 *laut* + 名词（规范上二格三格皆可、现代口语三格更常见——实施时按"laut der Studie / laut dem Bericht 都对"处理，与 u29 刚学的 Genitiv 入门自然衔接）；德语高阶书面语才用的 Konjunktiv I 转述式（如 *er sei*）只在语法手册中备注存在，不作为本单元教学内容。②间接疑问句复现深化——在讨论语境中把 u25 已学的 *ob/wie/wann/warum* 从简单疑问句扩展到嵌入更长的讨论性从句（*Sie fragt, ob wir das Problem lösen können*），巩固 V-letzt 语序在复杂句中的稳定性
- **听**：一段小组讨论环保话题的录音，含"他说…"式转述
- **说**：就一个话题表达个人观点，并转述小组里另一人的看法
- **读**：一篇简短的正反观点对比文章
- **写**：写一段 5-6 句的小短文，表达自己观点并用 *dass/laut* 转述至少一个他人观点
- **对话场景构想**：Wei 参加一次关于"在家办公 vs. 去办公室"的小组讨论，会后向同事转述另一位同事的观点（*Sie hat gesagt, dass sie lieber im Büro arbeitet, weil…*）
- **生活任务**：挑一个身边正在讨论的话题（环保/教育/工作），写 3 句自己的观点 + 1 句转述他人观点
- **预计课数**：2 课

#### u31　媒体与新闻　*Nachrichten verstehen und hinterfragen*

- **场景**：读真实简化新闻（复现 u23 的 Nachrichtenleicht）、区分事实与观点、讨论新闻可信度
- **词汇域**：die Quelle（消息来源）、die Tatsache（事实）、die Behauptung（声称/断言）、objektiv／subjektiv（客观的/主观的）、der Bericht（报道，复现）、veröffentlichen（发布）、der Artikel（文章）、der Kommentar（评论）、die Redaktion（编辑部）、überprüfen（核实）、glaubwürdig（可信的）、die Falschmeldung（假消息）、vermuten（推测）、bestätigen（证实）、mittlerweile（如今/与此同时）、der Anteil（比例）、steigen／sinken（上升/下降）、die Auswirkung（影响）
- **语法点**：Passiv 各时态——在 u23 已学 Vorgangspassiv 现在时（*wird*+PII）的基础上，正式补全时态谱系：Präteritum Passiv（*wurde*+PII，新闻报道的标准过去时态，*Das Gesetz wurde letzte Woche verabschiedet*）、Perfekt Passiv（*ist*+PII+*worden*，口语/访谈转述里更常见，注意特殊过去分词 *worden* 而非 *geworden*）、情态动词+被动（*muss/kann/soll*+PII+*werden*，新闻评论常见结构，*Das Problem muss gelöst werden*）。从新闻文章里天然大量出现的被动句切入，用"谁做了不重要，事情本身才是新闻焦点"这个语用逻辑解释被动为何是新闻文体首选
- **听**：一段简化新闻广播片段，标出被动态时态
- **说**：用被动态转述一则新闻要点（"这项法律上周被通过了"）
- **读**：2-3 篇 Nachrichtenleicht 风格短文，练习圈出事实句 vs. 观点句
- **写**：把一句主动语态的新闻句子改写成三种被动时态（现在/过去/完成）
- **对话场景构想**：Wei 和朋友讨论一则新闻，朋友说的是自己的看法（*Ich glaube...*），新闻本身用被动态陈述事实（*Es wurde berichtet, dass...*），练习区分两种语言信号
- **生活任务**：找一条真实的 Nachrichtenleicht 新闻，标出里面所有的被动态句子并判断时态
- **预计课数**：2 课

#### u32　跨文化与误会　*Missverständnisse klären*

- **场景**：文化差异情境（直接/间接沟通风格、时间观念差异等）、道歉与澄清、复盘"当时要是……就好了"
- **词汇域**：das Missverständnis（误会）、missverstehen（误解）、die Kultur（文化）、der Unterschied（区别）、sich entschuldigen（道歉，复现）、die Entschuldigung（道歉，名词）、klären（澄清）、der Eindruck（印象）、beabsichtigen（意图是）、eigentlich（其实，复现）、direkt／indirekt（直接的/间接的）、die Höflichkeit（礼貌）、taktvoll（有分寸的）、verletzen（伤害到）、die Absicht（意图）、im Nachhinein（事后回想）、bedauern（遗憾/后悔）、rückblickend（回顾地）、der Ratschlag（建议）
- **语法点**：①Konjunktiv II 过去式（*hätte/wäre*+Partizip II）——从"复盘一次误会，事后设想'当时要是…就好了'"这个真实认知场景切入（*Ich hätte das anders sagen sollen* / *Wenn ich das gewusst hätte, wäre ich vorsichtiger gewesen*），明确建立在 u26 已学 Konjunktiv II 现在式（*würde/wäre/hätte/könnte*）之上——过去式虚拟语气的构成规律是"*hätte/wäre* + 过去分词"，学习者已经掌握 Perfekt 的过去分词库存（u12 起），此处只需把"新框架"和"旧词汇"重新组合，降低认知负荷；*hätte/wäre* 的选择规律与 Perfekt 中 haben/sein 的选择规律完全一致（螺旋复现 u12）。②höfliche Kritik（委婉批评/反馈的语用策略）——不是新语法结构，而是把 Konjunktiv II 过去式、间接问句（u25）、情态动词（u9）整合成一套语用工具包，教学习者用 *"Vielleicht hätte man..."* *"Ich hätte mir gewünscht, dass..."* 等模板委婉表达不满或建议
- **听**：一段跨文化误会复盘对话（如迟到被误解为不礼貌）
- **说**：用 Konjunktiv II 过去式复盘一次真实或虚构的误会，说明"当时应该怎么做"
- **读**：一篇关于德中沟通文化差异的短文、一封委婉澄清误会的邮件范文
- **写**：写一段"如果当时…就好了"的反思短文（4-5 句）
- **对话场景构想**：Wei 因为一次直接的邮件措辞被德国同事误解为"不礼貌"，两人后来当面澄清，Wei 用 Konjunktiv II 过去式反思并道歉（*Ich hätte das freundlicher formulieren können*），同事也用委婉方式指出问题
- **生活任务**：回想一次真实的跨文化沟通小摩擦（或想象一次），用 Konjunktiv II 过去式写 3 句反思句
- **预计课数**：2 课

#### u33　B1 整合与冲刺　*Fit für B1*

- **场景**：综合复习场景——"一天走完找房+办事+投诉+闲聊"的大关卡，串联全书学过的场景类型，作为 Phase 5 结业任务
- **词汇域**：zusammenfassend（总而言之）、insgesamt（总体上）、der Fortschritt（进步）、die Herausforderung（挑战）、bewältigen（克服/应付）、der Ablauf（流程）、reibungslos（顺利的）、der Rückblick（回顾）、sich zurechtfinden（摸清情况/适应，反身动词，复现 u21/u22）、selbstständig（独立自主的）、der Meilenstein（里程碑）、die Sicherheit（把握/自信，此处指语言运用上的把握感）、souverän（从容自如的）、der Umgang mit（与…打交道/应对）、sich auskennen（熟悉/精通，反身动词）、die Routine（常规/熟练度）、der Alltag（日常生活，复现）、erledigen（办完，复现）
- **语法点**：①Relativsätze 深化——Dativ 关系代词（*dem/der/denen*，"这是我曾经帮助过的邻居" *Das ist der Nachbar, dem ich geholfen habe*）、Genitiv 关系代词（*dessen/deren*，"这是邻居，他的房子…" *Das ist der Nachbar, dessen Wohnung ich renoviert habe*）、介词+关系代词（*die Wohnung, in der ich wohne* / *der Termin, auf den ich mich vorbereitet habe*）；建立在 u27 已学 Nom./Akk. 关系代词和 u29 刚学的 Genitiv 入门基础上，是全书最后一块格系统拼图——用一张"关系代词全格变格表"（仿照定冠词表格）收尾，对比阳性/阴性/中性/复数在四个格上的关系代词形态。②全语法体系鸟瞰——不是新语法点，而是把第 2 章语法主线图的四十余条重新以"格系统／时态系统／从句系统／语气系统"四条主线串联复习，帮助学习者在冲刺阶段建立"整个德语语法长什么样"的全局图像，衔接第 6 章考证内容（B1 考试的 Schreiben/Sprechen 高频依赖关系从句让表达更精确、被动态让叙述更客观、Konjunktiv II 让语气更得体——这些正是 B1 和 A2 的分水岭）
- **听**：一段综合场景连续对话（找房中介电话 + 办事窗口 + 投诉电话 + 朋友闲聊，四段串联）
- **说**：用关系从句、被动态、Konjunktiv II 中至少两种工具，完整讲述一次"不顺利但最终解决"的真实经历
- **读**：一篇 B1 样题风格的议论文，标出文中出现的从句类型
- **写**：写一篇约 150 词的议论短文（呼应第 8 章 Phase 5 自评清单），主题任选（可复现 u30 的观点话题），要求用上至少一个关系从句和一个被动态句子
- **对话场景构想**：模拟"糟糕的一天"——Wei 上午联系房东，用 Genitiv 关系代词描述房东"*dessen Antwort sehr unfreundlich war*"，中午去办事窗口，下午打电话投诉快递丢失，晚上和朋友吐槽这一天，朋友说 *"Das hätte ich auch anders gemacht"*
- **生活任务**：写一篇 150 词的 B1 风格议论短文并大声朗读给 AI 陪练听，作为 Phase 5 结业的正式产出
- **预计课数**：2 课

**和考证的衔接**：Phase 5 结束时的语言水平对应 Goethe-Zertifikat B1 / telc Deutsch B1 的应试基础，具体考试信号和准备方式见第 6 章。

---

## 4. 词汇体系规划

### 4.1 主题域覆盖状态

以下主题域参照 Goethe 官方 Wortliste／Profile Deutsch 通行的主题分类整理（具体条目请以 goethe.de 当前发布的 Wortliste PDF 为准，此处为规划用的实用归类）：

| 主题域（德语） | 中文 | 现有覆盖 | 计划补齐 |
|---|---|---|---|
| Persönliche Angaben | 个人信息 | u1（姓名/来源/居住地） | — |
| Familie und soziale Kontakte | 家庭与社交关系 | 未覆盖 | Phase 1（u8） |
| Wohnen | 住房 | 未覆盖 | Phase 1（u11），深化于 Phase 2（u16） |
| Einkaufen | 购物 | u2（食品）、u3（点单） | Phase 2（u17 衣物/退换货） |
| Essen und Trinken | 饮食 | u2, u3 | Phase 2（u18 饮食文化） |
| Körper und Gesundheit | 身体健康 | 未覆盖 | Phase 1（u10），深化于 Phase 3（u21） |
| Zeit und Datum | 时间日期 | u2（数字）局部 | Phase 1（u7） |
| Wetter | 天气 | u4（局部） | — |
| Öffentliche Dienstleistungen / Ämter | 公共服务/官方事务 | 未覆盖 | Phase 2（u14） |
| Post, Telefon, Kommunikation | 邮政电话通讯 | 未覆盖 | Phase 2（u15） |
| Verkehr und Reisen | 交通旅行 | u5（听力场景，非词汇域） | Phase 2（u16 问路）、Phase 3（u19 火车出行） |
| Arbeit und Beruf | 工作职业 | u1（局部） | 深化于 Phase 3（u20）、Phase 4（u24） |
| Freizeit und Kultur | 休闲文化 | u4（局部） | Phase 1（u9 日常安排）、Phase 4（u27 莱比锡文化） |
| Kleidung | 衣物 | 未覆盖 | Phase 2（u17） |
| Medien | 媒体 | 未覆盖 | Phase 3（u23） |
| Meinung und Gefühle | 观点与情感 | 未覆盖 | Phase 4（u25） |

### 4.2 SRS 使用策略

- **每日新卡上限**：建议 15-20 张，与每课新词量（15-25 个）匹配，避免新卡堆积导致复习队列失控。
- **到期优先原则**：打开"词汇卡片"页时，到期复习卡永远排在新卡之前——这是唯一应该严格执行的顺序，保证已学词汇不因为学新单元而被遗忘。
- **断档后的处理**：长时间未打开网站导致到期卡片大量堆积时，不需要一次清空，允许分几天逐步消化，避免因为"任务太重"产生放弃冲动。

### 4.3 德英同源词加速策略

用户英语流利，这是德语学习的天然加速器：德语和英语同属西日耳曼语支，大量核心词汇形近甚至同形——*Hand/hand、Buch/book、Haus/house、Mutter/mother、Vater/father、Bruder/brother、Garten/garden、Wasser/water、trinken/drink、singen/sing、kommen/come、gut/good、alt/old、Freund/friend*。遇到生词时，鼓励学习者先猜"这个词像不像某个英语词"，往往能猜对大意，再用发音规则确认读法。进阶技巧：德语经历过"第二次日耳曼语音变"（格林定律相关的音变规律），导致一批词呈现有规律的辅音对应（比如英语 *p* 常对应德语 *pf/f*：*apple→Apfel*，*sleep→schlafen*），有兴趣深挖规律的学习者可以自行了解，但不必作为强制学习内容——直觉猜词已经够用。

---

## 5. 四技能培养线

### 5.1 听力

从"能听清单词"到"能听懂大意"再到"能跟上语速"的路径：Phase 0-1 阶段依赖站内朗读音频（▶ 正常速 + 🐢 慢速）和 u5 教的听力生存策略；进入 Phase 2 后建议开始接触真实语料——先从**莱比锡本地电车/公交报站**（LVB，语速慢、词汇高度重复，是免费的沉浸式起点）起步；Phase 2-3 阶段转向 **DW（德国之声）的 Nicos Weg**（免费分级德语学习节目，配套 A1-B1 全套内容）；Phase 3-4 阶段加入 **Nachrichtenleicht**（Deutschlandfunk 出品的免费简化德语新闻，专为 B1 以下学习者设计）；Phase 4 及以后可以看 **Easy German**（YouTube 免费频道，街头采访+双语字幕，语速接近真实但有字幕辅助）。

### 5.2 口语

从"跟读"到"模拟对话"再到"真人交流"：Phase 0-2 阶段以站内跟读评分（Web Speech API）为主，把每课的 dialogue 和 speak 类练习读到评分满意；Phase 2-3 阶段引入网站的 AI 陪练功能做情景对话练习，把课上学的场景（打电话、问路、看病）拿去和 AI 演练几轮；Phase 3 起建议开始找**真人 Tandem 伙伴**——莱比锡大学（Universität Leipzig）设有面向学生和访问学者的语伴项目，具体报名方式以校方官网/Sprachenzentrum 最新信息为准；也可以用 **HelloTalk** 这类免费语言交换 App 随时练习。真人交流是站内练习无法替代的最后一公里，越早开始越好，哪怕水平还不够也可以从简单话题开始。

### 5.3 阅读

从"认招牌"到"读懂信件"再到"读新闻"：Phase 0 阶段是路上的**招牌、标签、菜单**（u6 已覆盖拆解技巧）；Phase 2 阶段升级到**真实信件、账单、官方表格**（u14 专门训练这个）；Phase 3-4 阶段可以尝试 **Nachrichtenleicht** 的简化新闻文章（和听力资源同源，读写同步练习效率更高）；Phase 4 后期可以挑战 Easy German 网站配套的文字稿或简单的德语博客。

### 5.4 写作

从"填表格"到"发短信"再到"写正式邮件"：Phase 1-2 阶段的写作任务集中在**填写表格类信息**（日历、Kleinanzeigen 广告、请假条）；Phase 2 中段开始练习**短信/即时消息式的口语化写作**（回复邀请、改约时间）；u15 起正式引入**格式化邮件写作**（称呼语、敬语、结束语的固定结构）；Phase 3-4 阶段过渡到**短文写作**（讲述经历、表达观点），为 B1 阶段的议论文写作打基础。

---

## 6. 考证衔接

### 6.1 Goethe 与 telc 简要对比

| | Goethe-Zertifikat | telc Deutsch |
|---|---|---|
| 主办方 | Goethe-Institut（德国文化机构，全球性） | telc GmbH（德国成人教育协会 DVV 下属机构） |
| 认可度 | 国际通用度最高，尤其欧洲/学术圈 | 德国本土认可度高，移民局/雇主广泛接受 |
| 考点分布 | 依托 Goethe-Institut 直属分院和授权合作考点；**莱比锡是否有 Goethe-Institut 直属分院请以官网 goethe.de 为准**，实践中常通过当地语言学校/大学的授权合作点报名 | 依托各地 Volkshochschule（市民大学）、语言学校，覆盖城市更密；**莱比锡本地具体考点（如 Volkshochschule Leipzig）请以 telc.net 官网查询为准** |
| 其他衔接渠道 | — | 莱比锡大学（Universität Leipzig）等高校的语言中心可能提供 DSH 等大学入学德语测试，与 Goethe/telc 体系并行，具体以校方 Sprachenzentrum / Studienkolleg Sachsen 官网为准 |
| 证书结构 | 按 CEFR 分级独立发证（A1/A2/B1…各自独立考试） | 同样按 CEFR 分级独立发证，部分级别有"Deutsch-Test für Zuwanderer"等移民相关变体 |

### 6.2 A1/A2/B1 考试题型概览

两大机构的考试结构高度相似，均为模块化设计（Lesen／Hören／Schreiben／Sprechen 四模块）。以下为大致框架，**具体题量、计时、评分细则请以报考当年官网发布的最新 Modellsatz（样题）为准**：

| 级别 | Lesen 阅读 | Hören 听力 | Schreiben 写作 | Sprechen 口语 |
|---|---|---|---|---|
| A1 | 读懂简单文本、广告、告示，多为选择/匹配题 | 听懂简短对话、广播通知、语音留言 | 填写一张表格 + 写一张简短便条（约 30-40 词） | 自我介绍 + 提问回答 + 请求与回应的角色扮演，通常两人配对考试 |
| A2 | 读懂日常文本（广告、说明、简单文章） | 听懂日常对话、公共通知、简短报道 | 写一封私人信件/邮件，针对给定要点作答 | 谈论熟悉话题 + 与搭档共同完成一项任务（如约时间） |
| B1 | 读懂稍长文章、观点性文本，多个部分组成 | 听懂日常/半正式对话、广播片段、公开讲话 | 写一篇表达观点的短文 + 一封正式或非正式信件 | 就个人经历/观点做连贯陈述 + 与考官/搭档讨论、共同计划任务 |

### 6.3 什么信号说明"可以报名了"

- 第 8 章对应 Phase 的里程碑自评清单，大部分条目能不假思索地打勾；
- 在无字幕情况下能听懂对应级别的真实语料（A1 阶段是店员/同事的日常对话，B1 阶段是广播新闻）七成以上内容；
- 下载对应级别的官方样题（Modellsatz，在 goethe.de 或 telc.net 可免费获取）自测，Lesen/Hören 部分能稳定达到 60% 以上正确率；
- Schreiben 部分能在规定时间内完成对应词数要求，不需要查词典。

### 6.4 考前网站需要增加的专项模块

真正进入备考阶段后，日常学习类的课程内容已经不够——需要针对考试的"题型模拟"能力，这也是第 7 章"远期"功能规划里"考试全真模拟"模块要解决的问题：仿照官方 Modellsatz 的结构，提供限时的 Lesen/Hören 分项练习、Schreiben 范文对照批改、Sprechen 的角色扮演题库，并给出与真实评分标准接近的预估分数。

---

## 7. 网站功能演进路线

功能开发要跟着内容扩张的实际痛点走，而不是为了炫技。按优先级分三批：

### 7.1 近期（配合 Phase 1-2 内容上线）

**动词变位训练器（Konjugationstrainer）**——解决"情态动词、可分动词、Perfekt 强变化动词记不住变位"的问题。形态：输入动词给出人称，即时判分，错题自动回炉进 SRS 队列，和现有词卡系统共用同一套记忆曲线引擎。

**听写模块（Diktat）**——解决"听得懂但反应不过来怎么拼"的问题，尤其针对长难词、变音字母、词尾清化这些德语拼写的坑。形态：播放一句话（含慢速版本），学习者打字听写，逐词高亮对比正误。

**词卡反向模式（中→德）**——解决现有词卡只练"看德语认中文"识别记忆、缺乏主动产出（active recall）的问题。形态：在现有 SRS 卡片上加一个模式开关，改为给中文提示，学习者拼出或说出德语。

### 7.2 中期（配合 Phase 3 内容上线）

**阅读文库 + 分级文章（Lesestufen-Bibliothek）**——解决"课文之外没有分级可理解输入"的问题。形态：按 CEFR 分级收录或改写短文（日常话题、简易新闻、小故事），配生词点击查询和理解题，作为站内课程和站外真实阅读（Nachrichtenleicht 等）之间的过渡桥梁。

**AI 写作批改（Schreibkorrektur）**——解决"写的句子对不对、地道不地道没人告诉我"的问题。复用已有的 AI 陪练接口，形态：粘贴一段德语作文，AI 给出分级批注（语法错误 vs. 更地道的表达建议）并给出大致水平判断。

**错题本（Fehlerheft）**——解决"练习题做错了但没有系统性复盘"的问题。形态：自动收集所有练习中的错题，按语法点聚合归类，定期弹出"回炉复习"提醒，和第 2 章的语法主线图直接挂钩（比如把某个语法点的所有历史错题一次性拉出来看）。

### 7.3 远期（配合 Phase 4-5 及备考需求）

**考试全真模拟（Prüfungssimulator）**——解决"不知道真实考试是什么节奏、有没有把握通过"的问题。形态：仿照 Goethe/telc 官方样题结构，限时完成四模块（Lesen/Hören/Schreiben/Sprechen）全真演练，给出预估分数，详见第 6.4 节。

**学习统计面板（Lernstatistik-Dashboard）**——解决"学了这么久到底进步在哪里、该往哪个方向发力看不见"的问题。形态：词汇量增长曲线、各语法点掌握度雷达图（对应第 2 章的语法主线图）、学习时长热力图，帮助不规律学习节奏的用户看清自己的真实进度而非被"打卡天数"误导。

**语音对话模式（Sprachdialog-Modus）**——解决"课文对话背熟了但真人临场反应跟不上"的问题。形态：AI 用语音实时扮演场景角色（医生、店员、办事窗口工作人员）进行自由问答对话，而非固定台词，训练真实交流中的即时反应能力。

### 7.4 教材对标补强（2026-07-17）

对照歌德学院 B1 教材的标配内容做了一轮补强，三项已上线：

- **Redemittel 功能语块**——`#/phrases` 短语页新增 8 个类目（表达观点、同意与反对、提议与建议、礼貌请求、电话用语、邮件与书信、陈述与展开、抱怨与投诉），覆盖歌德 B1 Sprechen/Schreiben 考试最依赖的功能性套话，与已有的 8 个 A1 生存短语类目共用同一个搜索框。
- **发音进阶**——语法手册新增长短元音辨义对、词重音规律、ch/r/-ig/schwa 发音细节、语调与句重音，补上 g1 发音速查表之后一直缺失的中高级发音内容。
- **学习策略（Lernstrategien）**——语法手册新增名词性别记忆法（后缀定性别、类别倾向、本站颜色系统）、复数五大模式与复合词/词族猜词策略，把此前分散在各单元里的记忆技巧系统整理成两章独立可查的内容。

**词汇策略说明**：本站当前约 740 张词卡（含少量跨单元复现，去重后约 706 个不同词形），走的是"高频优先"路线——覆盖 A1-B1 日常场景最核心的词汇，而非穷举歌德 B1 官方 Wortliste 约 2400 词的完整词表。这个差额（约 1700 词）不计划靠新增单元硬堆，而是通过第 7.2 节规划中的"阅读文库 + 分级文章"和现有 AI 陪练两条路径，让学习者在可理解输入中自然习得长尾词汇——这也是主流二语习得研究对"核心高频词精学 + 大量输入泛化"路线的共识。阅读文库上线前，这部分仍是规划中的缺口，不是已完成项。

---

## 8. 里程碑自评清单

每个 Phase 结束时，用这份清单自查——打不了勾的条目，说明对应能力还没有真正内化，建议回炉复习对应单元，而不是硬着头皮往下一个 Phase 冲。

### Phase 0 结束（已上线内容自查）

- [ ] 我能在遇到新同事/新邻居时主动打招呼并做十几秒的自我介绍
- [ ] 我能听懂并回应"你好吗"式的寒暄，一来一回至少两轮
- [ ] 我能在面包店/咖啡馆用 *Ich hätte gern* 点单，并说清楚外带还是堂食
- [ ] 我能在超市认出常见食品并说出/听懂大致价格
- [ ] 我能看到任何生词就读出大致发音，即使不知道意思
- [ ] 我能看懂常见的招牌标识（入口/出口/营业中/打烊/免费）
- [ ] 我能在没听清楚时用 *Ich verstehe nicht* / *Können Sie das wiederholen?* 等求助句应对

### Phase 1 结束（A1.1 完成）

- [ ] 我能在电话里或当面和别人约一个具体的时间和日期见面
- [ ] 我能说出并听懂"几点""哪天"相关的表达（*um/am/im*）
- [ ] 我能用几句话介绍自己的家庭成员，包括用 *kein* 说明"没有"
- [ ] 我能表达自己"想做/能做/必须做"某件事，也听得懂别人的类似表达
- [ ] 我能在药房或医生那里说明自己哪里不舒服（*tut mir weh*）
- [ ] 我能听懂医生用命令式给出的简单建议（多喝水、好好休息）
- [ ] 我能用几句话描述自己的房间里有什么、大致布局
- [ ] 我能看懂 Kleinanzeigen 式的简单房屋家具信息

### Phase 2 结束（A1.2，欧标 A1 完成）

- [ ] 我能用完成时（Perfekt）讲述昨天/上周末做过的三件事
- [ ] 我能描述自己典型一天的作息，从起床到睡觉
- [ ] 我能独立走完一次 Bürgeramt 的基础登记流程（前提是材料齐全）
- [ ] 我能看懂一封简单的官方信件，抓住关键的截止日期和要求
- [ ] 我能打电话说明简单来意，或在语音信箱里留言
- [ ] 我能写一封基本得体的正式邮件（称呼语+正文+结束语）
- [ ] 我能在城市里问路，也听得懂对方的指路（左右转、地标）
- [ ] 我能买衣服时说明尺码问题并要求换货
- [ ] 我能在朋友家做客时说明自己的饮食偏好和简单理由（*weil* 从句）

### Phase 3 结束（A2.1）

- [ ] 我能独立在 DB 官网/App 上买票，处理小的延误、换乘问题
- [ ] 我能在工作场合请假并说明简单理由
- [ ] 我能听懂同事关于过去计划的闲聊（Präteritum 情态动词）
- [ ] 我能说明自己保险相关的基础情况，预约专科医生
- [ ] 我能用反身动词描述自己的感受和感冒等身体状况
- [ ] 我能和朋友约定或取消一次见面，并说明条件（"如果…我就…"）
- [ ] 我能用几句话讲述自己的工作/学习经历梗概

### Phase 4 结束（A2.2，欧标 A2 完成）

- [ ] 我能读懂 Nachrichtenleicht 式的简易新闻并抓住大意
- [ ] 我能识别常见的被动态句式（如"这里禁止吸烟"类告示）
- [ ] 我能就一个日常话题说明自己的观点并给出理由
- [ ] 我能用 Konjunktiv II 表达假设和委婉的愿望（"如果我有时间，我会…"）
- [ ] 我能用关系从句更精确地描述人或物（"这是我上周认识的同事"）
- [ ] 我能间接转述别人的问题（"我不知道他几点来"）
- [ ] 我能和德国朋友聊莱比锡本地的文化生活（书展、音乐会等）
- [ ] 我做官方 A2 样题（Modellsatz）Lesen/Hören 部分能达到六成以上正确率

### Phase 5 结束（B1）

- [ ] 我能读懂招聘广告并写一段求职信开头段，撑住 3-5 分钟的模拟面试问答（Präteritum 叙事、正式文体）
- [ ] 我能在旅行延误、行李丢失等突发状况下用德语投诉索赔，写一封包含 *wegen/trotzdem/obwohl* 的正式邮件
- [ ] 我能就一个日常社会话题（环保/教育/工作生活平衡等）表达自己的观点，并用 *dass/laut* 转述他人的看法
- [ ] 我能读懂新闻文章、识别其中的被动态、区分作者陈述的事实与观点
- [ ] 我能用 Konjunktiv II 过去式复盘一次误会或失误（"当时要是…就好了"），并用委婉方式表达批评或反馈
- [ ] 我能用 Dativ/Genitiv 关系代词精确描述人和事物，并写一篇约 150 词、包含关系从句和被动态的议论短文
- [ ] 我有把握报名并通过 Goethe-Zertifikat B1 或 telc Deutsch B1 考试
