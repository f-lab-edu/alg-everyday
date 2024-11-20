// https://school.programmers.co.kr/learn/courses/30/lessons/68644

import { uniq } from 'lodash';

//! 이전 풀이
const 두개뽑아서더하기a = (numbers: number[]): number[] => {
  const sums: number[] = numbers.flatMap((_, idx) => numbers.slice(0, idx).map((v) => numbers[idx] + v));
  return uniq(sums).sort((a, b) => a - b);
};

//! 재풀이
const 두개뽑아서더하기b = (numbers: number[]): number[] => {
  const sums = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     sums.push(numbers[i] + numbers[j]);
  //   }
  // }
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      sums.push(numbers[i] + numbers[j]);
    }
  }
  const uniqSums = [...new Set(sums)];
  const sortedUniqSum = uniqSums.sort((n, m) => n - m);
  return sortedUniqSum;
};

console.log(두개뽑아서더하기b([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(두개뽑아서더하기b([5, 0, 2, 7])); // [2,5,7,9,12]
