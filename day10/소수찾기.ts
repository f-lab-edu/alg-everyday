// https://school.programmers.co.kr/learn/courses/30/lessons/12921

//! (1) 시간 효율성 fail, 공간 효율성 ok
// 시간복잡도: O(n√n)
// 공간복잡도: O(1)
const 소수찾기1 = (n: number) => {
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

//! (2) 시간 효율성 ok, 공간 효율성 fail
// 시간복잡도: O(n log(log n))
// 공간복잡도: O(n)
const 소수찾기2 = (n: number): number => {
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
  // 2부터 n까지 순회하면서 ---------------------- 여기서 시간 잡아먹는 중
  for (let i = 2; i <= n; i++) {
    // 임시 변수인 isPrime를 true로 선언
    let isPrime = true;
    // primses의 요소들을 순회하면서
    for (const j of primes) {
      // i가 j로 나눠 떨어지면, isPrime을 false로 한다
      if (i % j === 0) isPrime = false;
    }
    // i가 어떤 소수(primes의 모든 요소)로도 나누어 떨어지지 않으면,
    // i는 소수이므로 primes에 소수인 i를 요소로서 추가한다.
    if (isPrime === true) primes.push(i);
  }
  // n까지의 모든 소수의 수를 구한다.
  return primes.length;
};

//! (5) 두번째 순회에서 primes의 모든 요소 순회 방지
//! 를 통한 시간 효율성 개선
const 소수찾기5 = (n: number) => {
  const primes: number[] = [];

  for (let target = 2; target <= n; target++) {
    // some() 메서드로 primes의 모든 요소를 순회하는 것을 방지
    // true 조건이 만족하는 즉시 반환
    if (!primes.some((prime) => target % prime === 0)) primes.push(target);
  }
  return primes.length;
};

const day10n1 = 10;
const day10n2 = 5;

console.log(소수찾기1(day10n1)); // 4
console.log(소수찾기1(day10n2)); // 3

console.log(소수찾기2(day10n1)); // 4
console.log(소수찾기2(day10n2)); // 3

console.log(소수찾기3(day10n1)); // 4
console.log(소수찾기3(day10n2)); // 3

console.log("4th solution");
console.log(소수찾기4(day10n1)); // 4
console.log(소수찾기4(day10n2)); // 3

console.log("5th solution");
console.log(소수찾기5(day10n1)); // 4
console.log(소수찾기5(day10n2)); // 3
