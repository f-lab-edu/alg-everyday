// https://school.programmers.co.kr/learn/courses/30/lessons/68644

import { _ } from "../declare";

// const 두개뽑아서더하기 = (numbers: number[]): number[] => {
//   const arr: number[] = [];
//   for (const key of numbers.keys()) {
//     const exceptKeyNums = numbers.filter((_, i) => i !== key);
//     exceptKeyNums.forEach((v) => arr.push(numbers[key] + v));
//   }
//   return _.uniq(arr).sort((a: number, b: number) => a - b);
// };

const 두개뽑아서더하기 = (numbers: number[]): number[] => {
  const sums: number[][] = numbers.map((_, idx) =>
    numbers.filter((_, i) => i !== idx).map((v) => numbers[idx] + v),
  );
  return _.uniq(sums.flatMap((x) => x)).sort((a: number, b: number) => a - b);
};

const n1 = [2, 1, 3, 4, 1];
const n2 = [5, 0, 2, 7];

console.log(두개뽑아서더하기(n1)); // [2,3,4,5,6,7]
console.log(두개뽑아서더하기(n2)); // [2,5,7,9,12]
