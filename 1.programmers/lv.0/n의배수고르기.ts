// https://school.programmers.co.kr/learn/courses/30/lessons/120905

import { filter } from 'lodash';

const n의배수고르기 = (n: number, nList: number[]): number[] => {
  return filter(nList, (num) => num % n === 0);
};

const [d26n1, d26nList1] = [3, [4, 5, 6, 7, 8, 9, 10, 11, 12]];
const [d26n2, d26nList2] = [5, [1, 9, 3, 10, 13, 5]];
const [d26n3, d26nList3] = [12, [2, 100, 120, 600, 12, 12]];

console.log(n의배수고르기(d26n1, d26nList1));
console.log(n의배수고르기(d26n2, d26nList2));
console.log(n의배수고르기(d26n3, d26nList3));
