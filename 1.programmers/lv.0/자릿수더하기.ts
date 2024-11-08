// https://school.programmers.co.kr/learn/courses/30/lessons/120906

import { map, parseInt, sum, toString } from 'lodash';

const 자릿수더하기 = (n: number): number => {
  return sum(map([...toString(n)], parseInt)); // lodash의 parseInt
};

const d25n1 = 1234;
const d25n2 = 930211;

console.log(자릿수더하기(d25n1)); // 10
console.log(자릿수더하기(d25n2)); // 16
