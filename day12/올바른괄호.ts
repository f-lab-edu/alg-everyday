// https://school.programmers.co.kr/learn/courses/30/lessons/12909

import { sum } from "lodash";

const 올바른괄호 = (s: string): boolean => {
  if (s.startsWith(")")) return false;
  return !sum([...s].map((str) => (str === "(" ? 1 : -1)));
};

const alls1 = "()()";
const alls2 = "(())()";
const alls3 = ")()(";
const alls4 = "(()(";

console.log(올바른괄호(alls1)); // true
console.log(올바른괄호(alls2)); // true
console.log(올바른괄호(alls3)); // false
console.log(올바른괄호(alls4)); // false
