// https://school.programmers.co.kr/learn/courses/30/lessons/12921

//! (1) 시간 효율성 ok, 공간 효율성 fail
// 시간복잡도: O(n log(log n))
// 공간복잡도: O(n)
const 소수찾기1 = (n: number): number => {
  const totalArr = Array(n + 1).fill(true);
  totalArr[0] = false;
  totalArr[1] = false;
  for (let i = 2; i <= n; i++) {
    if (totalArr[i] === true) {
      for (let j = i + i; j <= n; j += i) {
        totalArr[j] = false;
      }
    }
  }
  return totalArr.filter((v) => v).length;
};

//! (2) 시간 효율성 fail, 공간 효율성 ok
// 시간복잡도: O(n√n)
// 공간복잡도: O(1)
const 소수찾기2 = (n: number) => {
  let cnt = 0;
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      cnt++;
    }
  }
  return cnt;
};

//! (3) 시간 효율성 ok, 공간 효율성 fail
// 시간복잡도: O(n log(log n))
// 공간복잡도: O(1)
const 소수찾기3 = (n: number) => {
  const primeNumsOnly: boolean[] = [];
  let cnt = 0;
  for (let i = 2; i <= n; i++) {
    if (primeNumsOnly[i] !== false) {
      cnt++;
      for (let j = i * i; j <= n; j += i) {
        primeNumsOnly[j] = false;
      }
    }
  }
  return cnt;
};

//! (4) primes : number[]라고 해서 그전까지 발견된 소수들을 저장해봅시다.
// 시간복잡도: O(n√n)
// 공간복잡도: O(n)
const 소수찾기4 = (n: number) => {
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime === true) primes.push(i);
  }
  return primes.length;
};

//! (5) break 활용
// 시간복잡도: O(n√n)
// 공간복잡도: O(1)
const 소수찾기5 = (n: number) => {
  let nonPrimeCnt = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        nonPrimeCnt++;
        break;
      }
    }
  }
  return n - nonPrimeCnt - 1;
};

const day10n1 = 10;
const day10n2 = 5;

console.log(소수찾기1(day10n1)); // 4
console.log(소수찾기1(day10n2)); // 3

console.log(소수찾기2(day10n1)); // 4
console.log(소수찾기2(day10n2)); // 3

console.log(소수찾기3(day10n1)); // 4
console.log(소수찾기3(day10n2)); // 3

console.log(소수찾기4(day10n1)); // 4
console.log(소수찾기4(day10n2)); // 3

console.log(소수찾기5(day10n1)); // 4
console.log(소수찾기5(day10n2)); // 3
