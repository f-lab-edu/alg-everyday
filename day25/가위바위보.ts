// https://school.programmers.co.kr/learn/courses/30/lessons/120839

import { join, map } from 'lodash';

const 가위바위보 = (rsp: string): string => {
  const rspMap = new Map();
  rspMap.set('2', '0');
  rspMap.set('0', '5');
  rspMap.set('5', '2');
  return join(
    map(rsp, (v) => rspMap.get(v)),
    '',
  );
};

const d26rsp1 = '2';
const d26rsp2 = '205';

console.log(가위바위보(d26rsp1));
console.log(가위바위보(d26rsp2));
