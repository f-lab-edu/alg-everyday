// https://school.programmers.co.kr/learn/courses/30/lessons/120819

import { floor } from 'lodash';

const 아이스아메리카노 = (money: number): number[] => {
  const maxDrinks = floor(money / 5500);
  return [maxDrinks, money - maxDrinks * 5500];
};
