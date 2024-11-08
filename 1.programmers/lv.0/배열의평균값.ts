// https://school.programmers.co.kr/learn/courses/30/lessons/120817

import { mean } from 'lodash';

const 배열의평균값 = (numbers: number[]): number => mean(numbers);

const d19numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const d19numbers2 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

console.log(배열의평균값(d19numbers1));
console.log(배열의평균값(d19numbers2));
