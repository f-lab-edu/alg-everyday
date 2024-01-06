// 12918

// function solution(s) {
//   if ([4, 6].includes(s.length)) {
//     return ![...s].every(isNaN);
//   }
//   return false;
// }

// declare.ts에서 선언한 _를 가져오지 못함..
const lo = require("lodash");

function 문자열다루기기본(s: string) {
  return (
    [4, 6].includes(s.length) &&
    [...s].every((v: string) => lo.isInteger(parseInt(v, 10)))
  );
}

const s1 = "a234";
const s2 = "1234";

console.log(문자열다루기기본(s1));
console.log(문자열다루기기본(s2));

// isNumber와 isInteger
const s = "a";
console.log(parseInt(s, 10)); // NaN
console.log(lo.isNumber(parseInt(s, 10))); // true
console.log(lo.isInteger(parseInt(s, 10))); // false
