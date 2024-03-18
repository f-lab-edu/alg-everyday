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

// 객체 사용
// -> 맵의 데이터 크기가 정적이고, 크지 않을 때
const 가위바위보2 = (rsp: string): string => {
  const rspObj: Record<string, string> = {
    2: '0',
    0: '5',
    5: '2',
  };
  return join(
    map(rsp, (v) => rspObj[v]),
    '',
  );
};

const d26rsp1 = '2';
const d26rsp2 = '205';

console.log(가위바위보(d26rsp1));
console.log(가위바위보(d26rsp2));

console.log(가위바위보2(d26rsp1));
console.log(가위바위보2(d26rsp2));
