// https://school.programmers.co.kr/learn/courses/30/lessons/120818
import { floor } from 'lodash';

const 옷가게할인 = (price: number): number => {
  if (price >= 500000) return floor(price * 0.8);
  if (price >= 300000) return floor(price * 0.9);
  if (price >= 100000) return floor(price * 0.95);
  else return price;
};

const d24price1 = 150000;
const d24price2 = 580000;

console.log(옷가게할인(d24price1)); // 142,500
console.log(옷가게할인(d24price2)); // 464,000
