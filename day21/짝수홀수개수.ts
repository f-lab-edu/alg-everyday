// https://school.programmers.co.kr/learn/courses/30/lessons/120824

import { forEach } from 'lodash';

const 짝수홀수개수 = (numList: number[]): number[] => {
  let evenCnt = 0;
  let oddCnt = 0;
  forEach(numList, (n) => {
    if (n % 2 === 0) evenCnt++;
    else oddCnt++;
  });
  return [evenCnt, oddCnt];
};

const nl1 = [1, 2, 3, 4, 5];
const nl2 = [1, 3, 5, 7];

console.log(짝수홀수개수(nl1));
console.log(짝수홀수개수(nl2));
