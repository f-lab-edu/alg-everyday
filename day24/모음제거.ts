// https://school.programmers.co.kr/learn/courses/30/lessons/120849

import { join, pullAll } from 'lodash';

const 모음제거 = (str: string): string => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return join(pullAll([...str], vowels), '');
};

const d24str1 = 'bus';
const d24str2 = 'nice to meet you';

console.log(모음제거(d24str1)); // "bs"
console.log(모음제거(d24str2)); // "nc t mt y"
