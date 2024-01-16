// https://school.programmers.co.kr/learn/courses/30/lessons/12941

import { _ } from "../declare";

const 최솟값만들기 = (a: number[], b: number[]): number => {
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);
  return _.sum(_.zipWith(a, b, (v1: number, v2: number) => v1 * v2));
  // return a.map((v, i) => v * b[i]).reduce((a, b) => a + b);
};

const [day11A1, day11B1] = [
  [1, 4, 2],
  [5, 4, 4],
];
const [day11A2, day11B2] = [
  [1, 2],
  [3, 4],
];

console.log(최솟값만들기(day11A1, day11B1));
console.log(최솟값만들기(day11A2, day11B2));
