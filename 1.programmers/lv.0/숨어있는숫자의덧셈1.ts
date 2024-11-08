// https://school.programmers.co.kr/learn/courses/30/lessons/120851

import { map, parseInt, sum } from 'lodash';

const 숨어있는숫자의덧셈1 = (str: string): number => {
  return sum(map([...str], (char) => parseInt(char, 10) || 0)); // NaN -> 0
};

const d25str1 = 'aAb1B2cC34oOp';
const d25str2 = '1a2b3c4d123';

console.log(숨어있는숫자의덧셈1(d25str1)); // 10
console.log(숨어있는숫자의덧셈1(d25str2)); // 16
