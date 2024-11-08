// https://school.programmers.co.kr/learn/courses/30/lessons/120860

import { max, min, unzip } from 'lodash';

// ver 1. Lodash
// as 키워드와 ! 키워드를 사용하는 것을 지양할 수 있을까?
const 직사각형넓이구하기 = (dots: [number, number][]): number => {
  const [x, y] = unzip(dots) as [number[], number[]];
  const xLen = max(x)! - min(x)!;
  const yLen = max(y)! - min(y)!;
  return xLen * yLen;
};

// ver 2. Vanilla
const 직사각형넓이구하기2 = (dots: [number, number][]): number => {
  const xNums = [];
  const yNums = [];
  for (const [x, y] of dots) {
    xNums.push(x);
    yNums.push(y);
  }
  xNums.sort((a, b) => a - b);
  yNums.sort((a, b) => a - b);
  const xLen = xNums.at(-1)! - xNums.at(0)!;
  const yLen = yNums.at(-1)! - yNums.at(0)!;
  return xLen * yLen;
};

// ver 3. 효율 개선 코드
// ver1과 ver2를 획기적으로 개선할 수 있는 코드를 발견하지 못 함

console.log(
  직사각형넓이구하기([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ]),
); // 1

console.log(
  직사각형넓이구하기([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ]),
); // 4

console.log(
  직사각형넓이구하기2([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ]),
); // 1

console.log(
  직사각형넓이구하기2([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ]),
); // 4
