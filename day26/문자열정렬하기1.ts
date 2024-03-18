// https://school.programmers.co.kr/learn/courses/30/lessons/120850

import { map, parseInt, sortBy, without } from 'lodash';

const 문자열정렬하기1 = (str: string): number[] => {
  const parseIntStr = map(str, parseInt);
  const onlyNums = without(parseIntStr, NaN);
  const sortedOnlyNums = sortBy(onlyNums);
  return sortedOnlyNums;
};

const d28str1 = 'hi12392';
const d28str2 = 'p2o4i8gj2';
const d28str3 = 'abcde0';

console.log(문자열정렬하기1(d28str1)); // [1, 2, 2, 3, 9]
console.log(문자열정렬하기1(d28str2)); // [2, 2, 4, 8]
console.log(문자열정렬하기1(d28str3)); // [0]
