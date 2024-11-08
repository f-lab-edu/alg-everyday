// https://school.programmers.co.kr/learn/courses/30/lessons/120908

import { includes } from 'lodash';

const 문자열안에문자열 = (str1: string, str2: string): number => {
  return includes(str1, str2) ? 1 : 2;
};

const [d22str1, d22char1] = ['ab6CDE443fgh22iJKlmn1o', '6CD'];
const [d22str2, d22char2] = ['ppprrrogrammers', 'pppp'];
const [d22str3, d22char3] = ['AbcAbcA', 'AAA'];

console.log(문자열안에문자열(d22str1, d22char1)); // 1
console.log(문자열안에문자열(d22str2, d22char2)); // 2
console.log(문자열안에문자열(d22str3, d22char3)); // 2
