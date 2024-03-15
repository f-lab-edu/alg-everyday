// https://school.programmers.co.kr/learn/courses/30/lessons/120910

import { multiply } from 'lodash';

const 세균증식 = (n: number, t: number): number => {
  let cnts = n;
  while (t > 0) {
    cnts = multiply(cnts, 2);
    t--;
  }
  return cnts;
};

const [sgn1, sgt1] = [2, 10];
const [sgn2, sgt2] = [7, 15];

console.log(세균증식(sgn1, sgt1)); // 2048
console.log(세균증식(sgn2, sgt2)); // 229,376
