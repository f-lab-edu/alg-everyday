// https://school.programmers.co.kr/learn/courses/30/lessons/12921

//   // 에라토스테네스의 체
//   // 배수를 지워나간다
// const 소수찾기 = (n: number): number => {
//   const totalArr = Array(n + 1).fill(true);
//   totalArr[0] = false;
//   totalArr[1] = false;
//   for (let i = 2; i <= n; i++) {
//     if (totalArr[i] === true) {
//       for (let j = i + i; j <= n; j += i) {
//         // i + i 의 의미는 자기 자신은 지우지 않는 것
//         totalArr[j] = false;
//       }
//     }
//   }
//   return totalArr.filter((v) => v).length;
// };

// 시간 초과
// const 소수찾기 = (n: number) => {
//   let cnt = 0;
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         console.log(`소수가 아니다.i: ${i}, j: ${j}`);
//         isPrime = false;
//       }
//     }
//     if (isPrime === true) {
//       cnt++;
//     }
//   }
//   return cnt;
// };

//에라토스테네스의 체
// 메모리 효율 버전
const 소수찾기 = (n: number) => {
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

const day10n1 = 10;
const day10n2 = 5;

console.log(소수찾기(day10n1)); // 4
console.log(소수찾기(day10n2)); // 3
