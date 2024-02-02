// https://school.programmers.co.kr/learn/courses/30/lessons/12909

const 올바른괄호 = (s: string): boolean => {
  if (s.startsWith(")")) return false;
  let cnt = 0;
  let ans = true;
  [...s].forEach((str) => {
    cnt += str === "(" ? 1 : -1;
    if (cnt < 0) ans = false;
  });
  if (cnt > 0) ans = false;
  return ans;
};

const alls1 = "()()";
const alls2 = "(())()";
const alls3 = ")()(";
const alls4 = "(()(";

console.log(올바른괄호(alls1)); // true
console.log(올바른괄호(alls2)); // true
console.log(올바른괄호(alls3)); // false
console.log(올바른괄호(alls4)); // false
