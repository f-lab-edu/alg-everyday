// https://school.programmers.co.kr/learn/courses/30/lessons/120904

// num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return

const 숫자찾기 = (num: number, k: number): number => {
  return [...num.toString()].findIndex((v) => v === k.toString()) + 1 || -1;
};

console.log(숫자찾기(29183, 1)); // 3
console.log(숫자찾기(232443, 4)); // 4
console.log(숫자찾기(123456, 7)); // -1
