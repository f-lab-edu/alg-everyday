// https://school.programmers.co.kr/learn/courses/30/lessons/120878

const 유한소수판별하기 = (a: number, b: number) => {
  const gcd = (n1: number, n2: number): number => {
    return n1 % n2 === 0 ? n2 : gcd(n2, n1 % n2);
  };
  // 기약 분수의 분모
  let dividedNum = b / gcd(a, b);
  while (dividedNum % 2 === 0) dividedNum /= 2;
  while (dividedNum % 5 === 0) dividedNum /= 5;
  return dividedNum === 1 ? 1 : 2;
};

console.log(유한소수판별하기(7, 20)); // 1
console.log(유한소수판별하기(11, 22)); // 1
console.log(유한소수판별하기(12, 21)); // 2
