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
const 소수찾기 = (n: number) => {
  let cnt = 0;
  for (let i = 2; i <= n; i++) {
    // 2 부터 n까지 모두 반복한다
    let isPrime = true; // 소수인지 먼저 true 설정해준 뒤
    for (let j = 2; j <= Math.sqrt(i); j++) {
      // 각 숫자를 검사한다
      if (i % j === 0) {
        // 만약 자기 자신이 아닌 수로 나눠진다면
        console.log(`소수가 아니다.i: ${i}, j: ${j}`);
        isPrime = false; // 소수가 아니다
      }
    }
    // 나눠지는 수가 없다면 true로
    if (isPrime === true) {
      cnt++; // 소수 카운트를 증가시킨다
    }
  }
  return cnt;
};

const day10n1 = 10;
const day10n2 = 5;

console.log(소수찾기(day10n1)); // 4
console.log(소수찾기(day10n2)); // 3
