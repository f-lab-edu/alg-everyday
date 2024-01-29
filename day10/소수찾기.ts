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
  // 2부터 n까지 순회하면서 ---------------------- 여기서 시간 잡아먹는 중 -> 아님 ㅇㅇ (3)에서도 한번은 돌아야함
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
//! +) primes 배열이 target의 제곱근 수까지만 유지되면 된다.
const 소수찾기5 = (num: number) => {
  const primes: number[] = [];
  const numSqrt = Math.sqrt(num);
  let primesToNumSqrt: number[] = [];

  for (let target = 2; target <= num; target++) {
    // 기존 primes.some()은 모든 prime에 대해서 검사를 진행했다.
    // primesToNumSqrt를 도입해서 num의 제곱근까지의 소수만을 저장했다.
    // 즉, primesToNumSqrt.some()은 num의 제곱근까지만의 소수를 검사하기 때문에 시간 효율성이 극도로 좋아진다.

    // primes[primes.length - 1] <= numSqrt를 통해 불필요한 filter 메서드 동작을 제한했다.
    // 이 조건 연산은 시간적으로 영향이 거의 없다 (이 연산을 쓰는 것이 이득이다.)
    // if (primes[primes.length - 1] <= numSqrt) {
    //! primes[primes.length - 1] 보다 target-1 이 효율이 더 좋다..
    if (target - 1 <= numSqrt) {
      primesToNumSqrt = primes.filter((prime) => prime <= numSqrt);
    }

    // some() 메서드로 primesToNumSqrt 모든 요소를 순회하는 것을 방지
    // true 조건이 만족하는 즉시 반환
    if (!primesToNumSqrt.some((prime) => target % prime === 0))
      primes.push(target);
  }
  return primes.length;
};

const day10n1 = 2081;
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
