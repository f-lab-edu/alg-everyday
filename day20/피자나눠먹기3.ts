// https://school.programmers.co.kr/learn/courses/30/lessons/120816

import { ceil } from 'lodash';

const 피자나눠먹기3 = (slice: number, n: number): number => {
  return ceil(n / slice);
};

const [d20slice1, d20p1] = [7, 10];
const [d20slice2, d20p2] = [4, 12];

console.log(피자나눠먹기3(d20slice1, d20p1));
console.log(피자나눠먹기3(d20slice2, d20p2));
