// https://school.programmers.co.kr/learn/courses/30/lessons/132267

import { _ } from "../declare";

const 콜라 = (a: number, b: number, n: number): number => {
  const totalCoke: number[] = [];

  while (n >= a) {
    totalCoke.push(Math.floor(n / a) * b);
    n = Math.floor(n / a) * b + (n % a);
  }
  return _.sum(totalCoke);
};

const [empty1, new1, n1] = [2, 1, 20];
const [empty2, new2, n2] = [3, 2, 20];

console.log(콜라(empty1, new1, n1)); // 19
console.log(콜라(empty2, new2, n2)); // 36
