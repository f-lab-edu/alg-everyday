// https://school.programmers.co.kr/learn/courses/30/lessons/136798

import { min, range, sum } from "lodash";

//! 시간 초과
// const 기사단원의무기 = (
//   number: number,
//   limit: number,
//   power: number,
// ): number => {
//   const divisorNums = Array(number)
//     .fill(0)
//     .map((_, i) => {
//       let cnt = 0;
//       for (let j = 0; j <= i + 1; j++) {
//         if ((i + 1) % j === 0) cnt++;
//       }
//       return Math.min(cnt, limit) === cnt ? cnt : power;
//     });
//   return _.sum(divisorNums);
// };

//! 효율성 개선
//todo: 2 더하고 1 빼는 과정을 1만 더하는 과정으로 간소화하기
const 기사단원의무기 = (
  number: number,
  limit: number,
  power: number,
): number => {
  const divisorNums = range(1, number + 1).map(
    (attackPoint: number): number => {
      const APSqrt = Math.sqrt(attackPoint);
      let cnt: number = 0;
      for (let j = 0; j <= APSqrt; j++) {
        if (attackPoint % j === 0) cnt += 2;
      }
      if (Math.floor(APSqrt) === APSqrt) cnt -= 1;
      return min([cnt, limit]) === cnt ? cnt : power;
      // (1) return cnt > limit ? power : cnt;
      // (2) return _.min([cnt, limit]) === cnt ? cnt : power;
    },
  );
  return sum(divisorNums);
};

const [day10number1, day10limit1, day10power1] = [5, 3, 2];
const [day10number2, day10limit2, day10power2] = [10, 3, 2];

console.log(기사단원의무기(day10number1, day10limit1, day10power1));
console.log(기사단원의무기(day10number2, day10limit2, day10power2));
