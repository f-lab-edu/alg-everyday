// https://school.programmers.co.kr/learn/courses/30/lessons/120909

import { isInteger } from 'lodash';

const 제곱수판별하기 = (n: number): number => {
  return isInteger(Math.sqrt(n)) ? 1 : 2;
  // Number.isInteger(Math.sqrt(n)) ? 1 : 2;
};

const d25sqrt1 = 144;
const d25sqrt2 = 976;

console.log(제곱수판별하기(d25sqrt1)); // 1
console.log(제곱수판별하기(d25sqrt2)); // 2
