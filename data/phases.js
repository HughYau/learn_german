// 课程阶段总表：对齐 CURRICULUM.md 第 3 章的 Phase 划分（第 20-27 行总进度一览 + 各 Phase 小节）
// unitIds 必须恰好覆盖 u0-u33 全部 34 个已上线单元，不重不漏。
export const phases = [
  { num: 0, zh: '发音与生存', de: 'Start', level: 'A1.1 前半', unitIds: ['u0', 'u1', 'u2', 'u3', 'u4', 'u5', 'u6'] },
  { num: 1, zh: '日常安顿', de: 'Alltag einrichten', level: 'A1.1 完成', unitIds: ['u7', 'u8', 'u9', 'u10', 'u11'] },
  { num: 2, zh: '办事与社交', de: 'Ämter & Alltag', level: 'A1.2', unitIds: ['u12', 'u13', 'u14', 'u15', 'u16', 'u17', 'u18'] },
  { num: 3, zh: '出行与职场', de: 'Unterwegs & Beruf', level: 'A2.1', unitIds: ['u19', 'u20', 'u21', 'u22', 'u23'] },
  { num: 4, zh: '观点与文化', de: 'Meinung & Kultur', level: 'A2.2', unitIds: ['u24', 'u25', 'u26', 'u27'] },
  { num: 5, zh: '思辨与求职', de: 'Beruf & Diskussion', level: 'B1', unitIds: ['u28', 'u29', 'u30', 'u31', 'u32', 'u33'] },
];
