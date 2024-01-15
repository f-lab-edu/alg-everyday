// https://school.programmers.co.kr/learn/courses/30/lessons/176963

import { _ } from "../declare";

// 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수
const 추억점수 = (
  name: string[],
  yearing: number[],
  photo: string[][],
): number[] => {
  const scoreMap = new Map();
  name.forEach((v, i) => scoreMap.set(v, yearing[i]));
  return photo.map((album) =>
    _.sum(album.map((name) => scoreMap.get(name) || 0)),
  );
};

const [name1, yearing1, photo1] = [
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ],
];
const [name2, yearing2, photo2] = [
  ["kali", "mari", "don"],
  [11, 1, 55],
  [
    ["kali", "mari", "don"],
    ["pony", "tom", "teddy"],
    ["con", "mona", "don"],
  ],
];

console.log(추억점수(name1, yearing1, photo1)); // [19, 15, 6]
console.log(추억점수(name2, yearing2, photo2)); // [67, 0, 55]
