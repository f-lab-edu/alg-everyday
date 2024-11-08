// https://school.programmers.co.kr/learn/courses/30/lessons/120822

import { join, reverse } from 'lodash';

const 문자열뒤집기 = (str: string): string => join(reverse([...str]), '');

const d19str = 'jaron';

console.log(문자열뒤집기(d19str));
