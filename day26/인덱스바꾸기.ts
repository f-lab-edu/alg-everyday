// https://school.programmers.co.kr/learn/courses/30/lessons/120895

import { join } from 'lodash';

const 인덱스바꾸기 = (str: string, n1: number, n2: number): string => {
  const strArr = [...str];
  [strArr[n1], strArr[n2]] = [strArr[n2], strArr[n1]];
  return join(strArr, '');
};

const [d29str1, d29nOne1, d29nTwo1] = ['hello', 1, 2];
const [d29str2, d29nOne2, d29nTwo2] = ['I love you', 3, 6];

console.log(인덱스바꾸기(d29str1, d29nOne1, d29nTwo1)); // "hlelo"
console.log(인덱스바꾸기(d29str2, d29nOne2, d29nTwo2)); // "I l veoyou"
