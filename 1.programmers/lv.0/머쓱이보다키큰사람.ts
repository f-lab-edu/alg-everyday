// https://school.programmers.co.kr/learn/courses/30/lessons/120585

import { filter } from 'lodash';

const 머쓱이보다키큰사람 = (array: number[], height: number): number => filter(array, val => val > height).length;

const [day19array1, day19height1] = [[149, 180, 192, 170], 167];
const [day19array2, day19height2] = [[180, 120, 140], 190];

console.log(머쓱이보다키큰사람(day19array1, day19height1));
console.log(머쓱이보다키큰사람(day19array2, day19height2));
