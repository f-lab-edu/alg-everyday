// https://school.programmers.co.kr/learn/courses/30/lessons/120862

import { multiply, slice, sortBy } from 'lodash';

// numbers의 길이는 2 이상이다.

//! Lodash 연습
const 최댓값만들기2 = (numbers: number[]): number => {
  const numsLen = numbers.length;
  // numbers의 길이가 2개일 경우
  if (numsLen === 2) return multiply(...(numbers as [number, number]));

  // numbers의 길이가 3개 이상일 경우
  const sortedNums = sortBy(numbers); // [ -5, -3, 1, 2, 4 ]

  // 음수 2개 이상 있으면, 끝값들을 교차확인해야 한다.
  // 아주 조금의 효율이라도 높이기 위해 sortedNums[1] < 0 조건을 걸었다.
  if (sortedNums[1] < 0) {
    const cmpNum1 = multiply(...(slice(sortedNums, 0, 2) as [number, number]));
    const cmpNum2 = multiply(...(slice(sortedNums, numsLen - 2, numsLen) as [number, number]));
    return Math.max(cmpNum1, cmpNum2);
  } else {
    const cmpNum3 = multiply(...(slice(sortedNums, numsLen - 2, numsLen) as [number, number]));
    return cmpNum3;
  }
};

//! 바닐라 JS 구현
function 최댓값만들기2_withoutLodash(numbers: number[]) {
  const numsLen = numbers.length;
  if (numsLen === 2) return numbers[0] * numbers[1];
  numbers.sort((a, b) => a - b);
  const cmp1 = numbers[0] * numbers[1];
  const cmp2 = numbers[numsLen - 2] * numbers[numsLen - 1];
  return Math.max(cmp1, cmp2);
}

//! Using [ at ]
function 최댓값만들기2_withoutLodash2(numbers: number[]) {
  const numsLen = numbers.length;
  if (numsLen === 2) return numbers.at(0)! * numbers.at(1)!;
  numbers.sort((a, b) => a - b);
  const cmp1 = numbers.at(0)! * numbers.at(1)!;
  const cmp2 = numbers.at(-1)! * numbers.at(-2)!;
  return Math.max(cmp1, cmp2);
}

const d28numbers1 = [1, 2, -3, 4, -5];
const d28numbers2 = [0, -31, 24, 10, 1, 9];
const d28numbers3 = [10, 20, 30, 5, 5, 20, 5];

console.log(최댓값만들기2(d28numbers1)); // 15
console.log(최댓값만들기2(d28numbers2)); // 240
console.log(최댓값만들기2(d28numbers3)); // 600

console.log(최댓값만들기2_withoutLodash(d28numbers1)); // 15
console.log(최댓값만들기2_withoutLodash(d28numbers2)); // 240
console.log(최댓값만들기2_withoutLodash(d28numbers3)); // 600

console.log(최댓값만들기2_withoutLodash2(d28numbers1)); // 15
console.log(최댓값만들기2_withoutLodash2(d28numbers2)); // 240
console.log(최댓값만들기2_withoutLodash2(d28numbers3)); // 600
