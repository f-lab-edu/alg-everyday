// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

// 등차수열 합 공식 : n(a+l)/2

const 연속된수의합 = (num: number, total: number): number[] => {
  const incrementSum = ((num - 1) * num) / 2;
  const firstValue = (total - incrementSum) / num;

  return Array.from({ length: num }, (_, i) => firstValue + i);
};

console.log(연속된수의합(3, 12)); // [3, 4, 5]
console.log(연속된수의합(5, 15)); // [1, 2, 3, 4, 5]
console.log(연속된수의합(4, 14)); // [2, 3, 4, 5]
console.log(연속된수의합(5, 5)); // [-1, 0, 1, 2, 3]
console.log(연속된수의합(4, 6)); // [0, 1, 2, 3]
console.log(연속된수의합(1, 12)); // [12]
