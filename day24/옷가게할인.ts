// https://school.programmers.co.kr/learn/courses/30/lessons/120818
import { takeWhile } from 'lodash';

const 옷가게할인 = (price: number): number => {
  const priceCriteria = [100000, 300000, 500000];
  const discountPers = [0.95, 0.9, 0.8];
  const idx = takeWhile(priceCriteria, (criterion) => price >= criterion).length - 1;
  return price * discountPers[idx];
};

const d24price1 = 150000;
const d24price2 = 580000;

console.log(옷가게할인(d24price1)); // 142,500
console.log(옷가게할인(d24price2)); // 464,000
