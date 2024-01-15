// https://school.programmers.co.kr/learn/courses/30/lessons/136798
import { _ } from "../declare";
// 시간 초과
// const 기사단원의무기 = (
//   number: number,
//   limit: number,
//   power: number,
// ): number => {
//   const divisorNums = Array(number)
//     .fill(0)
//     .map((_, i) => {
//       const arr = [];
//       for (let j = 0; j <= i + 1; j++) {
//         if ((i + 1) % j === 0) arr.push(1);
//       }
//       return arr.length > limit ? power : arr.length;
//     });

//   return _.sum(divisorNums);
// };

// // 효율성 개선 - const만 쓰기 버전
// const 기사단원의무기 = (
//   number: number,
//   limit: number,
//   power: number,
// ): number => {
//   const divisorNums = Array(number)
//     .fill(0)
//     .map((_, i) => {
//       const number = i + 1;
//       const arr = []; // let을 안 쓰면
//       for (let j = 0; j <= Math.sqrt(number); j++) {
//         if (number % j === 0) {
//           arr.push(1, 1);
//           if (j === Math.sqrt(number)) arr.pop();
//         }
//       }
//       return arr.length > limit ? power : arr.length;
//     });

//   return _.sum(divisorNums);
// };

// 효율성 개선 - let 쓰기
const 기사단원의무기 = (
  number: number,
  limit: number,
  power: number,
): number => {
  const divisorNums = _.range(0, number, 0).map(
    (_: number, i: number): number => {
      const number = i + 1;
      const sqrtNumber = Math.sqrt(number);
      let cnt: number = 0;
      for (let j = 0; j <= sqrtNumber; j++) {
        if (number % j === 0) cnt += 2;
      }
      if (Math.floor(sqrtNumber) === sqrtNumber) cnt -= 1;
      return Math.min(cnt, limit) === cnt ? power : cnt;
      // (1) return cnt > limit ? power : cnt;
      // (2) return _.min([ cnt, limit]) === cnt ? power : cnt;
    },
  );
  return _.sum(divisorNums);
};

const [day10number1, day10limit1, day10power1] = [5, 3, 2];
const [day10number2, day10limit2, day10power2] = [10, 3, 2];

console.log(기사단원의무기(day10number1, day10limit1, day10power1));
console.log(기사단원의무기(day10number2, day10limit2, day10power2));
