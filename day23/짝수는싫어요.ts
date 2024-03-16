// https://school.programmers.co.kr/learn/courses/30/lessons/120813

const 짝수는싫어요 = (n: number): number[] => {
  const oddNumbers = [];
  for (let i = 1; i <= n; i += 2) oddNumbers.push(i);
  return oddNumbers;
};

const d23n1 = 10;
const d23n2 = 15;

console.log(짝수는싫어요(d23n1)); // [1, 3, 5, 7, 9]
console.log(짝수는싫어요(d23n2)); // [1, 3, 5, 7, 9, 11, 13, 15]
