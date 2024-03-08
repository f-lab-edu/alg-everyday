// https://school.programmers.co.kr/learn/courses/30/lessons/120821

import { reverse } from 'lodash';

const 배열뒤집기 = (numList: number[]): number[] => reverse(numList);

const day19numList1 = [1, 2, 3, 4, 5];
const day19numList2 = [1, 1, 1, 1, 1, 2];
const day19numList3 = [1, 0, 1, 1, 1, 3, 5];

console.log(배열뒤집기(day19numList1));
console.log(배열뒤집기(day19numList2));
console.log(배열뒤집기(day19numList3));
