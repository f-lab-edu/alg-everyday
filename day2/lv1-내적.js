// 70128

const _ = require('lodash');

// function solution(a, b) {
//   let zippedArr = _.zip(a, b);
//   return zippedArr.map(([v1, v2]) => v1 * v2).reduce((acc, curVal) => acc + curVal, 0);
// }

const solution = (a, b) => {
  return _.sum(_.zipWith(a, b, (v1, v2) => v1 * v2));
};

let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
console.log(solution(a, b));
