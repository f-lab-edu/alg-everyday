// https://school.programmers.co.kr/learn/courses/30/lessons/42578

import { multiply } from 'lodash';

// 종류별로 그룹화

// ver 1. Lodash
const 의상 = (clothes: string[][]): number => {
  // 해시 매핑 - 종류별 개수 파악
  class MyMap extends Map {
    increase = (item: string[]): void => {
      this.set(item[1], (this.get(item[1]) ?? 0) + 1);
    };
  }
  const itemCntMap = new MyMap();
  clothes.forEach(itemCntMap.increase);

  // 종류별 개수의 배열
  const mapValues = Array.from(itemCntMap.values());

  // 착용하지 않는 경우의 수를 포함
  const mapValuesWithOne = mapValues.map((v) => v + 1);

  // 착용의 경우의 수 - 1(아무것도 착용하지 않는 경우의 수)
  return mapValuesWithOne.reduce(multiply) - 1;
};

const d21clothes1 = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];
const d21clothes2 = [
  ['crow_mask', 'face'],
  ['blue_sunglasses', 'face'],
  ['smoky_makeup', 'face'],
];
const d21clothes3 = [
  ['crow_mask', 'face'],
  ['blue_sunglasses', 'face'],
  ['smoky_makeup', 'face'],
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

console.log(의상(d21clothes1));
console.log(의상(d21clothes2));
console.log(의상(d21clothes3));
