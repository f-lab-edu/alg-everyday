// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const 소수만들기 = (nums: number[]): number => {
  const sumOf3Nums = [];
  const numsLen = nums.length;
  for (let i = 0; i < numsLen; i++) {
    for (let j = i + 1; j < numsLen; j++) {
      for (let k = j + 1; k < numsLen; k++) {
        const num = nums[i] + nums[j] + nums[k];
        sumOf3Nums.push(num);
      }
    }
  }
  const primeNums = sumOf3Nums.filter((v: number) => {
    for (let i = 2; i <= Math.sqrt(v); i++) {
      if (v % i === 0) return false;
    }
    return true;
  });
  return primeNums.length;
};

const nums1 = [1, 2, 3, 4];
const nums2 = [1, 2, 7, 6, 4];

console.log(소수만들기(nums1)); // 1
console.log(소수만들기(nums2)); // 4
