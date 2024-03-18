// https://school.programmers.co.kr/learn/courses/30/lessons/120818
import { findLast, takeWhile } from 'lodash';

const 옷가게할인 = (price: number): number => {
  const priceCriteria = [100000, 300000, 500000];
  const discountPers = [0.95, 0.9, 0.8];
  const idx = takeWhile(priceCriteria, (criterion) => price >= criterion).length - 1;
  return price * discountPers[idx];
};

// 튜플 구조, find 함수 적용
// 기존에 배열을 두 개 선언하면 실수로 인한 버그 발생이 생길 수 있다.
// findLast를 통해 최종 할인율을 골라낸다.
const 옷가게할인2 = (price: number): number => {
  const tuples: [number, number][] = [
    [100000, 0.95],
    [300000, 0.9],
    [500000, 0.85],
  ];
  const exacTuple: [number, number] = findLast(tuples, (tuple) => price >= tuple[0]) ?? [0, 1];
  return price * exacTuple[1];
};

const d24price1 = 150000;
const d24price2 = 580000;

console.log(옷가게할인(d24price1)); // 142,500
console.log(옷가게할인(d24price2)); // 464,000

console.log(옷가게할인2(150000)); // 142,500
console.log(옷가게할인2(580000)); // 464,000
console.log(옷가게할인2(8000)); // 8,000
