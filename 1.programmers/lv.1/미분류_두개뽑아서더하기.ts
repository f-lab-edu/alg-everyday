// https://school.programmers.co.kr/learn/courses/30/lessons/68644

import { uniq } from 'lodash';

// const 두개뽑아서더하기 = (numbers: number[]): number[] => {
//   const arr: number[] = [];
//   for (const key of numbers.keys()) {
//     const exceptKeyNums = numbers.filter((_, i) => i !== key);
//     exceptKeyNums.forEach((v) => arr.push(numbers[key] + v));
//   }
//   return _.uniq(arr).sort((a: number, b: number) => a - b);
// };

//! flatMap 도입
// const 두개뽑아서더하기 = (numbers: number[]): number[] => {
//   const sums: number[] = numbers.flatMap((_, idx) =>
//     numbers.filter((_, i) => i !== idx).map((v) => numbers[idx] + v),
//   );
//   return _.uniq(sums).sort((a: number, b: number) => a - b);
// };

//! 요청 사항: x+y = y+x 중복 제거
// const 두개뽑아서더하기 = (numbers: number[]): number[] => {
//   const sums: number[] = numbers.flatMap((_, idx) =>
//     numbers.filter((_, i) => idx < i).map((v) => numbers[idx] + v),
//   );
//   return _.uniq(sums).sort((a: number, b: number) => a - b);
// };

//! slice 메서드로 간소화하기
// filter를 쓸 때보다 더 코드의 의미를 파악하기 쉽다
const 두개뽑아서더하기 = (numbers: number[]): number[] => {
  const sums: number[] = numbers.flatMap((_, idx) => numbers.slice(0, idx).map((v) => numbers[idx] + v));
  return uniq(sums).sort((a, b) => a - b);
};

const n1 = [2, 1, 3, 4, 1];
const n2 = [5, 0, 2, 7];

console.log(두개뽑아서더하기(n1)); // [2,3,4,5,6,7]
console.log(두개뽑아서더하기(n2)); // [2,5,7,9,12]
