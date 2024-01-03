const _ = require('lodash');

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

const sol1 = (arr) => {
  arr.forEach((v) => v.sort((a, b) => a - b));
  return _.multiply(..._.zipWith(...arr, (...arr) => _.max(arr)));
};

// 작은 값들 중 큰 값
// 큰 값들 중 큰 값
const sol2 = (arr) => {
  return _.max(arr.map(_.min)) * _.max(arr.map(_.max));
};

console.log(sol1(sizes));
console.log(sol2(sizes));
