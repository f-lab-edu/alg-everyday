// https://school.programmers.co.kr/learn/courses/30/lessons/120830

import { floor } from 'lodash';

const 양꼬치 = (n: number, k: number): number => {
  const serviceCoke = floor(n / 10);
  return 12000 * n + 2000 * (k - serviceCoke);
};

const [yang1, coke1] = [10, 3];
const [yang2, coke2] = [64, 6];

console.log(양꼬치(yang1, coke1));
console.log(양꼬치(yang2, coke2));
