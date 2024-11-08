// https://school.programmers.co.kr/learn/courses/30/lessons/120903

import { intersection } from 'lodash';

const 배열의유사도 = (s1: string[], s2: string[]): number => {
  return intersection(s1, s2).length;
};

//! without lodash
// const intersectionArr = s1.filter(v=> s2.includes(v));

const [d22setOne1, d22setTwo1] = [
  ['a', 'b', 'c'],
  ['com', 'b', 'd', 'p', 'c'],
];
const [d22setOne2, d22setTwo2] = [
  ['n', 'omg'],
  ['m', 'dot'],
];

console.log(배열의유사도(d22setOne1, d22setTwo1)); // 2
console.log(배열의유사도(d22setOne2, d22setTwo2)); // 0
