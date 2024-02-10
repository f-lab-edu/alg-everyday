// https://school.programmers.co.kr/learn/courses/30/lessons/120804

import { multiply } from "lodash";

const 두수의곱 = (n: number, m: number): number => multiply(n, m);
const [day15muln1, day15mulm1] = [3, 4];
const [day15muln2, day15mulm2] = [27, 19];

console.log(두수의곱(day15muln1, day15mulm1)); // 12
console.log(두수의곱(day15muln2, day15mulm2)); // 513
