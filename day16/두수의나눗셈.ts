import { divide, floor } from "lodash";

const 두수의나눗셈 = (num1: number, num2: number) =>
  floor(divide(num1, num2) * 1000);

const [d16n1, d16m1] = [3, 2];
const [d16n2, d16m2] = [7, 3];
const [d16n3, d16m3] = [1, 16];

console.log(두수의나눗셈(d16n1, d16m1));
console.log(두수의나눗셈(d16n2, d16m2));
console.log(두수의나눗셈(d16n3, d16m3));
