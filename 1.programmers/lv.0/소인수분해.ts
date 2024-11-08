// https://school.programmers.co.kr/learn/courses/30/lessons/120852

// 소인수 : 자연수의 약수 중에서 소수

// ver 1. 최초 코드
// 시간 효율이 좋지 않음
// 5000000000인 경우 33s
const 소인수분해 = (n: number): number[] => {
  const ans = [];
  // 소인수 분해
  // 약수인가? -> 소수인가?
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) ans.push(i);
  }
  // 소수 판별 함수
  function isPrime(n: number): boolean {
    for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
    return true;
  }
  return ans;
};

// ver 2. 효율 개선 코드
// 소인수분해 동작 원리 적용
// 5000000000인 경우 0.16ms
const 소인수분해2 = (n: number): number[] => {
  const ans: number[] = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      ans.push(i);
    }
  }
  return [...new Set(ans)];
};

console.log(소인수분해(12)); // [2, 3]
console.log(소인수분해(17)); // [17]
console.log(소인수분해(420)); // [2, 3, 5, 7]

console.log(소인수분해2(12)); // [2, 3]
console.log(소인수분해2(17)); // [17]
console.log(소인수분해2(420)); // [2, 3, 5, 7]

console.time('1');
console.log(소인수분해(500000000));
console.timeEnd('1');

console.time('2');
console.log(소인수분해2(500000000));
console.timeEnd('2');
