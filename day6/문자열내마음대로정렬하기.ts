import { _ } from "../declare";
const 문자열내마음대로정렬하기 = (s: string[], n: number) => {
  return _.sortBy(s, (v: string) => v.slice(n));
};

const str1 = ["sun", "bed", "car"];
const n1 = 1;
const str2 = ["abce", "abcd", "cdx"];
const n2 = 2;

console.log(문자열내마음대로정렬하기(str1, n1));
console.log(문자열내마음대로정렬하기(str2, n2));
