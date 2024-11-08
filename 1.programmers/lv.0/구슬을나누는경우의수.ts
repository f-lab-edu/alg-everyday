// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// 팩토리얼 함수 구현 문제
// 재귀 호출

const 구슬을나누는경우의수 = (balls: number, share: number): number => {
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
};

function factorial(n: number): number {
  // if (n === 0) return 1;
  // return n * factorial(n - 1);
  return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(구슬을나누는경우의수(3, 2)); // 3
console.log(구슬을나누는경우의수(5, 3)); // 10

console.log(factorial(30));
