// https://school.programmers.co.kr/learn/courses/30/lessons/120815

// 피자는 기본 6조각
// n명이 주문한 피자 남기지 않고, 모두 같은 양을 먹을 때

// 6과 n의 최소 공배수 / x = 정수

const 피자나눠먹기2 = (n: number): number => {
  // 최대 공약수
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  // 최소 공배수
  const lmc = (6 * n) / gcd(6, n);

  return lmc / 6;
};

console.log(피자나눠먹기2(6)); // 1
console.log(피자나눠먹기2(10)); // 5
console.log(피자나눠먹기2(4)); // 2
