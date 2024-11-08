// https://school.programmers.co.kr/learn/courses/30/lessons/120888

import { uniq } from 'lodash';

// ver 1. vanilla
const 중복된문자제거 = (str: string): string => {
  const strSet = new Set([...str]);
  return Array.from(strSet).join('');
  // return [...strSet].join('');
};

// ver 2. lodash
const 중복된문자제거2 = (str: string): string => {
  return uniq([...str]).join('');
};

console.log(중복된문자제거('people')); // "peol"
console.log(중복된문자제거('We are the world')); // "We arthwold"

console.log(중복된문자제거2('people')); // "peol"
console.log(중복된문자제거2('We are the world')); // "We arthwold"
