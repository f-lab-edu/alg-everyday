// https://school.programmers.co.kr/learn/courses/30/lessons/120854

import { map } from 'lodash';

const 배열원소의길이 = (strlist: string[]): number[] => map(strlist, str => str.length);

const d19strlist1 = ['We', 'are', 'the', 'world!'];
const d19strlist2 = ['I', 'Love', 'Programmers.'];

console.log(배열원소의길이(d19strlist1));
console.log(배열원소의길이(d19strlist2));
