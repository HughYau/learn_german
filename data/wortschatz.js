// 词汇包汇总层：把各等级的词汇包拼在一起，供 UI 和 SRS 使用
import { packsA2 } from './wortschatz-a2.js';
import { packsB1 } from './wortschatz-b1.js';

export const wortschatzPacks = [...packsA2, ...packsB1];

/** 把一个词汇包的 items 映射成与 allVocabCards() 同构的卡片对象 */
export function packCards(pack) {
  return pack.items.map(item => ({
    id: `wp|${pack.id}|${item.de}`,
    de: item.de,
    art: item.art,
    pl: item.pl,
    zh: item.zh,
    en: item.en,
    ex: item.ex,
    exZh: item.exZh,
    packId: pack.id,
    packTitle: pack.title,
  }));
}
