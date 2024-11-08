// 12917

import { sortBy } from 'lodash';

function 문자열내림차순으로배치하기(s: string) {
  return sortBy([...s])
    .reverse()
    .join('');
}
