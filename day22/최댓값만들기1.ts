// https://school.programmers.co.kr/learn/courses/30/lessons/120847

import { multiply, sortBy } from 'lodash';

const 최댓값만들기1 = (nums: number[]): number => {
  const sortedNums = sortBy(nums, (val) => -val);
  const mulNum = multiply(sortedNums[0], sortedNums[1]);
  return mulNum;
};

const d20ns1 = [1, 2, 3, 4, 5];
const d20ns2 = [0, 31, 24, 10, 1, 9];

console.log(최댓값만들기1(d20ns1));
console.log(최댓값만들기1(d20ns2));
