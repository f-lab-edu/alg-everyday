// https://school.programmers.co.kr/learn/courses/30/lessons/120826

import { join, pull } from 'lodash';

const 특정문자제거 = (str: string, char: string): string => {
  return join(pull([...str], char), '');
};

const [str1, char1] = ['abcdef', 'f'];
const [str2, char2] = ['BCBdbe', 'B'];

console.log(특정문자제거(str1, char1));
console.log(특정문자제거(str2, char2));
