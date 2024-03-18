// https://school.programmers.co.kr/learn/courses/30/lessons/120836
import { isInteger } from 'lodash';

const 순서쌍의개수 = (n: number): number => {
  const nSqrt = Math.sqrt(n);
  let cnt = 0;
  for (let i = 1; i < nSqrt; i++) {
    if (n % i === 0) cnt += 2;
  }
  if (isInteger(nSqrt)) cnt++;
  return cnt;
};

const d24n1 = 20;
const d24n2 = 100;

console.log(순서쌍의개수(d24n1)); // 6
console.log(순서쌍의개수(d24n2)); // 9
