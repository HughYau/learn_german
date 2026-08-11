// 课程汇总模块：把所有单元拼在一起，提供查找/展平的工具函数
import u0 from './units/u0.js';
import u1 from './units/u1.js';
import u2 from './units/u2.js';
import u3 from './units/u3.js';
import u4 from './units/u4.js';
import u5 from './units/u5.js';
import u6 from './units/u6.js';
import u7 from './units/u7.js';
import u8 from './units/u8.js';
import u9 from './units/u9.js';
import u10 from './units/u10.js';
import u11 from './units/u11.js';
import u12 from './units/u12.js';
import u13 from './units/u13.js';
import u14 from './units/u14.js';
import u15 from './units/u15.js';
import u16 from './units/u16.js';
import u17 from './units/u17.js';
import u18 from './units/u18.js';
import u19 from './units/u19.js';
import u20 from './units/u20.js';
import u21 from './units/u21.js';
import u22 from './units/u22.js';
import u23 from './units/u23.js';
import u24 from './units/u24.js';
import u25 from './units/u25.js';
import u26 from './units/u26.js';
import u27 from './units/u27.js';
import u28 from './units/u28.js';
import u29 from './units/u29.js';
import u30 from './units/u30.js';
import u31 from './units/u31.js';
import u32 from './units/u32.js';
import u33 from './units/u33.js';

export const units = [u0, u1, u2, u3, u4, u5, u6, u7, u8, u9, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20, u21, u22, u23, u24, u25, u26, u27, u28, u29, u30, u31, u32, u33];

/** 展平所有课，每项 {unit, lesson} */
export function allLessons() {
  const out = [];
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      out.push({ unit, lesson });
    }
  }
  return out;
}

/** 按课程 id 查找，返回 {unit, lesson} 或 null */
export function findLesson(id) {
  for (const unit of units) {
    const lesson = unit.lessons.find(l => l.id === id);
    if (lesson) return { unit, lesson };
  }
  return null;
}

/** 按单元 id 查找 */
export function findUnit(id) {
  return units.find(u => u.id === id) || null;
}

/** 遍历所有课的 vocab section items，生成 SRS 卡片数组。
 *  同一个词以相同含义在后续课程里复现时（螺旋复习），只保留首次出现的那张卡，
 *  避免重复占用复习队列；同词不同义（如 passen 时间合适/衣服合身）则各保留一张。 */
export function allVocabCards() {
  const cards = [];
  const seen = new Set(); // key = de + '|' + zh
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      for (const section of lesson.sections) {
        if (section.type !== 'vocab') continue;
        for (const item of section.items) {
          const key = `${item.de}|${item.zh}`;
          if (seen.has(key)) continue;
          seen.add(key);
          cards.push({
            id: `${lesson.id}|${item.de}`,
            de: item.de,
            art: item.art,
            pl: item.pl,
            zh: item.zh,
            en: item.en,
            ex: item.ex,
            exZh: item.exZh,
            lessonId: lesson.id,
            unitId: unit.id,
            unitZh: unit.zh,
          });
        }
      }
    }
  }
  return cards;
}
