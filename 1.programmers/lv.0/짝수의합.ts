// https://school.programmers.co.kr/learn/courses/30/lessons/120829

import { floor } from 'lodash';

const 짝수의합 = (n: number): number => {
  const halfN = floor(n / 2);
  let sum = 0;
  for (let i = 1; i <= halfN; i++) sum += i * 2;

  return sum;
};

const n = 10;

console.log(짝수의합(n));
