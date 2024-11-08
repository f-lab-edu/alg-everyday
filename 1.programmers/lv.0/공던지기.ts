// https://school.programmers.co.kr/learn/courses/30/lessons/120843

// ver 1. 최초 코드
const 공던지기 = (nums: number[], k: number): number => {
  const idx = (2 * (k - 1)) % nums.length;
  return nums[idx];
};

// --k 로 접근할 수도 있다.

console.log(공던지기([1, 2, 3, 4], 2)); // 3
console.log(공던지기([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(공던지기([1, 2, 3], 3)); // 2
