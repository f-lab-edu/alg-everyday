import { subtract } from "lodash";

const 두수의차 = (n1: number, n2: number): number => subtract(n1, n2);

const [n1, n2] = [2, 3];
console.log(두수의차(n1, n2));
