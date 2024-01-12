// https://school.programmers.co.kr/learn/courses/30/lessons/12921

const 소수찾기 = (n: number): number => {
  const primeArr = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime === true) primeArr.push(i);
  }
  return primeArr.length;
};

const day10n1 = 10;
const day10n2 = 5;

console.log(소수찾기(day10n1)); // 4
console.log(소수찾기(day10n2)); // 3
