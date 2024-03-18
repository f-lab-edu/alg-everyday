// https://school.programmers.co.kr/learn/courses/30/lessons/120897

const 약수구하기 = (n: number): number[] => {
  const ans = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) ans.push(i);
  }
  return ans;
};

const d29n1 = 24;
const d29n2 = 29;

console.log(약수구하기(d29n1));
console.log(약수구하기(d29n2));
