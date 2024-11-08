// https://school.programmers.co.kr/learn/courses/30/lessons/120825

import { join, map, repeat } from 'lodash';

const 문자반복출력 = (str: string, n: number): any => {
  return join(
    map(str, (char) => repeat(char, n)),
    '',
  );
};

const myStr = 'hello';

console.log(문자반복출력(myStr, 3));
