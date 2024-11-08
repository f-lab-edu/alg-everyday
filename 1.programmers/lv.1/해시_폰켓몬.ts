// https://school.programmers.co.kr/learn/courses/30/lessons/1845

import { uniq } from 'lodash';

// nums 길이는 항상 짝수
// 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 리턴

// Lodash
const 폰켓몬1 = (nums: number[]): number => {
  const maxItemCnt = nums.length / 2;
  // 중복 제거
  const uniqNums = uniq(nums);
  const uniqNumsLen = uniqNums.length;
  return maxItemCnt >= uniqNumsLen ? uniqNumsLen : maxItemCnt;
};

// Vanilla JS
const 폰켓몬2 = (nums: number[]): number => {
  const maxItemCnt = nums.length / 2;
  const set = new Set(nums);
  return maxItemCnt >= set.size ? set.size : maxItemCnt;
};

const d19nums1 = [3, 1, 2, 3];
const d19nums2 = [3, 3, 3, 2, 2, 4];
const d19nums3 = [3, 3, 3, 2, 2, 2];

console.log(폰켓몬1(d19nums1)); // 2
console.log(폰켓몬1(d19nums2)); // 3
console.log(폰켓몬1(d19nums3)); // 2

console.log(폰켓몬2(d19nums1)); // 2
console.log(폰켓몬2(d19nums2)); // 3
console.log(폰켓몬2(d19nums3)); // 2
