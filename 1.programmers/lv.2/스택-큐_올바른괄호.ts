// https://school.programmers.co.kr/learn/courses/30/lessons/12909

//! (1) map, some으로 이어지는 것이 간결하지 않음
// const 올바른괄호 = (s: string): boolean => {
//   if (s.startsWith(")")) return false;
//   let cnt = 0;
//   const ans = ![...s]
//     .map((str) => (cnt += str === "(" ? 1 : -1))
//     .some((v) => v < 0);
//   return cnt > 0 ? false : ans;
// };

//! (2) 단순 반복문
const 올바른괄호 = (s: string): boolean => {
  if (s.startsWith(')')) return false;
  let cnt = 0;
  for (const char of s) {
    cnt += char === '(' ? 1 : -1;
    if (cnt < 0) return false;
  }
  return !cnt;
};

const alls1 = '()()';
const alls2 = '(())()';
const alls3 = ')()(';
const alls4 = '(()(';
const alls5 = '(()))))(((((';

console.log(올바른괄호(alls1)); // true
console.log(올바른괄호(alls2)); // true
console.log(올바른괄호(alls3)); // false
console.log(올바른괄호(alls4)); // false
console.log(올바른괄호(alls5)); // false
