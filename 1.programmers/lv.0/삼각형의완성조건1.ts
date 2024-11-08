// https://school.programmers.co.kr/learn/courses/30/lessons/120889

import { slice, sortBy, sum } from 'lodash';

const 삼각형의완성조건1 = (sides: number[]): number => {
  const sortedSides = sortBy(sides, (side) => -side);
  const longestSide = sortedSides[0];
  const shortSidesSum = sum(slice(sortedSides, 1));
  return longestSide < shortSidesSum ? 1 : 2;
};

const d23sides1 = [1, 2, 3];
const d23sides2 = [3, 6, 2];
const d23sides3 = [199, 72, 222];

console.log(삼각형의완성조건1(d23sides1)); // 2
console.log(삼각형의완성조건1(d23sides2)); // 2
console.log(삼각형의완성조건1(d23sides3)); // 1
