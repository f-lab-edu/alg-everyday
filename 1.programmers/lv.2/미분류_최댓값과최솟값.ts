// https://school.programmers.co.kr/learn/courses/30/lessons/12939

import { max, min } from 'lodash';

const 최댓값과최솟값 = (s: string): string => {
  const stringToNums = s.split(' ').map((v) => parseInt(v, 10));
  return `${min(stringToNums)} ${max(stringToNums)}`;
};

const day11s1 = '1 2 3 4';
const day11s2 = '-1 -2 -3 -4';
const day11s3 = '-1 -1';

console.log(최댓값과최솟값(day11s1)); // "1 4"
console.log(최댓값과최솟값(day11s2)); // "-4 -1"
console.log(최댓값과최솟값(day11s3)); // "-1 -1"
