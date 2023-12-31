// 70128

const _ = require('lodash');

function solution(a, b) {
  let ans = 0;
  let zippedArr = _.zip(a, b);
  zippedArr.forEach(([v1, v2]) => (ans += v1 * v2));
  return ans;
}

let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
console.log(solution(a, b));
