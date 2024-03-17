// https://school.programmers.co.kr/learn/courses/30/lessons/120892

import { filter, join } from 'lodash';

const 암호해독 = (cipher: string, code: number) => {
  return join(
    filter(cipher, (_, i) => (i + 1) % code === 0),
    '',
  );
};

const 암호해독2 = (cipher: string, code: number) => {
  let arr = '';
  for (let i = code - 1; i < cipher.length; i += code) arr += cipher[i];
  return arr;
};

const [d26cipher1, d26code1] = ['dfjardstddetckdaccccdegk', 4];
const [d26cipher2, d26code2] = ['pfqallllabwaoclk', 2];

console.log(암호해독(d26cipher1, d26code1));
console.log(암호해독(d26cipher2, d26code2));

console.log(암호해독2(d26cipher1, d26code1));
console.log(암호해독2(d26cipher2, d26code2));
