import { max, min, multiply, zipWith } from 'lodash';

const sol1 = (arr: [number, number][]) => {
  arr.forEach((v) => v.sort((a, b) => a - b));
  return multiply(...(zipWith(...arr, (...arr: [number, number]) => max(arr)) as [number, number]));
};

// 작은 값들 중 큰 값
// 큰 값들 중 큰 값
const sol2 = (arr: [number, number][]) => {
  const shortSides = arr.map(min);
  const longSides = arr.map(max);
  return max(shortSides)! * max(longSides)!;
};

// 실행
const sizes: [number, number][] = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(sol1(sizes));
console.log(sol2(sizes));
