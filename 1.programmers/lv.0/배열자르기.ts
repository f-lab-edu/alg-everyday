// https://school.programmers.co.kr/learn/courses/30/lessons/120833

import { slice } from 'lodash';

const 배열자르기 = (numbers: number[], num1: number, num2: number): number[] => {
  return slice(numbers, num1, num2 + 1);
};

const [d20numbers1, d20num11, d20num21] = [[1, 2, 3, 4, 5], 1, 3];
const [d20numbers2, d20num12, d20num22] = [[1, 3, 5], 1, 2];

console.log(배열자르기(d20numbers1, d20num11, d20num21));
console.log(배열자르기(d20numbers2, d20num12, d20num22));
