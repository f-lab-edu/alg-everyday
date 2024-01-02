// 12950

// function solution(arr1, arr2) {
//   return arr1.map((v1, i1) => v1.map((v2, i2) => v2 + arr2[i1][i2]));
// }

// function solution(arr1, arr2) {
//   let zippedArr = _.zipWith(arr1, arr2);
//   return zippedArr.map(([v1, v2]) => v1.map((v, i) => v + v2[i]));
// }

const _ = require('lodash');

function solution(arr1, arr2) {
  let zippedArr = _.zipWith(arr1, arr2);
  return zippedArr.map(([v1, v2]) => _.zipWith(v1, v2, (a, b) => a + b));
}

let a1 = [
  [1, 2],
  [2, 3],
];
let a2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(a1, a2));
