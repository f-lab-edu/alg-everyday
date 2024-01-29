// https://school.programmers.co.kr/learn/courses/30/lessons/1845

import { _ } from "../declare";

const 폰켓몬 = (nums: number[]): number => {
  const availableNum = nums.length / 2;
  const uniqNum = _.uniq(nums).length;
  return availableNum < uniqNum ? availableNum : uniqNum;
};

// 항상 짝수 길이
const nums1 = [3, 1, 2, 3];
const nums2 = [3, 3, 3, 2, 2, 4];
const nums3 = [3, 3, 3, 2, 2, 2];
const nums4 = [1, 2, 1, 2, 1, 1];

console.log(폰켓몬(nums1)); // 2
console.log(폰켓몬(nums2)); // 3
console.log(폰켓몬(nums3)); // 2
console.log(폰켓몬(nums4)); // 2
