// https://school.programmers.co.kr/learn/courses/30/lessons/120583

import { filter, isEqual, size } from 'lodash';

const 중복된숫자개수 = (array: number[], n: number) => {
  return size(filter(array, (v) => isEqual(v, n)));
};

const [d20array1, d20n1] = [[1, 1, 2, 3, 4, 5], 1];
const [d20array2, d20n2] = [[0, 2, 3, 4], 1];

console.log(중복된숫자개수(d20array1, d20n1));
console.log(중복된숫자개수(d20array2, d20n2));
