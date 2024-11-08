// https://school.programmers.co.kr/learn/courses/30/lessons/120807

import { isEqual } from "lodash";

const 숫자비교 = (n1: number, n2: number): number => (isEqual(n1, n2) ? 1 : -1);

const [d15n1, d15m1] = [2, 3]; // -1
const [d15n2, d15m2] = [11, 11]; // 1
const [d15n3, d15m3] = [7, 99]; // -1

console.log(숫자비교(d15n1, d15m1)); // -1
console.log(숫자비교(d15n2, d15m2)); // 1
console.log(숫자비교(d15n3, d15m3)); // -1
