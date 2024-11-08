// https://school.programmers.co.kr/learn/courses/30/lessons/120845

import { floor, reduce } from 'lodash';

const 주사위의개수 = (box: number[], n: number): number => {
  return reduce(box, (acc, cur) => acc * floor(cur / n), 1);
};

const [d28box1, d28n1] = [[1, 1, 1], 1];
const [d28box2, d28n2] = [[10, 8, 6], 3];

console.log(주사위의개수(d28box1, d28n1)); // 1
console.log(주사위의개수(d28box2, d28n2)); // 12
