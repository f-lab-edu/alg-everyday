// https://school.programmers.co.kr/learn/courses/30/lessons/12921

const 소수찾기 = (n: number): number => {
  // 에라토스테네스의 체
  // 배수를 지워나간다
  const totalArr = Array(n + 1).fill(true);
  totalArr[0] = false;
  totalArr[1] = false;
  for (let i = 2; i <= n; i++) {
    if (totalArr[i] === true) {
      for (let j = i + i; j <= n; j += i) {
        // i + i 의 의미는 자기 자신은 지우지 않는 것
        totalArr[j] = false;
      }
    }
  }

  console.log(totalArr);
  return totalArr.filter((v) => v).length;
};

const day10n1 = 10;
const day10n2 = 5;

console.log(소수찾기(day10n1)); // 4
console.log(소수찾기(day10n2)); // 3
