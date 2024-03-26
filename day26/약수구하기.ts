// https://school.programmers.co.kr/learn/courses/30/lessons/120897

const 약수구하기 = (n: number): number[] => {
  const ans1 = [];
  const ans2 = [];
  const nSqrt = Math.sqrt(n);

  for (let i = 1; i < nSqrt; i++) {
    if (n % i === 0) {
      ans1.push(i);
      ans2.unshift(n / i);
    }
  }
  if (Number.isInteger(nSqrt)) ans1.push(nSqrt);

  return [...ans1, ...ans2];
};

const d29n1 = 24;
const d29n2 = 29;

console.log(약수구하기(d29n1));
console.log(약수구하기(d29n2));
console.log(약수구하기(36));
