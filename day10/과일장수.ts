// https://school.programmers.co.kr/learn/courses/30/lessons/135808

import { _ } from "../declare";

const 과일장수 = (k: number, m: number, score: number[]): number[] => {
  score.sort((a, b) => a - b); // 원본 배열 변경 - toSorted 사용 불가
  const arr = [];
  for (let i = score.length - m; i >= 0; i -= m) {
    arr.push(score[i] * m);
  }
  return _.sum(arr);
};

const [d10k1, d10m1, d10score1] = [3, 4, [1, 2, 3, 1, 2, 3, 1]];
const [d10k2, d10m2, d10score2] = [4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]];

console.log(과일장수(d10k1, d10m1, d10score1));
console.log(과일장수(d10k2, d10m2, d10score2));
