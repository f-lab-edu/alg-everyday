const _ = require('lodash');

function solution(num) {
  let arr = [];
  num.map((v1) => num.map((v2) => num.map((v3) => v1 + v2 + v3 === 0 && arr.push([v1, v2, v3].sort((a, b) => a - b)))));
  return _.uniqWith(arr, _.isEqual).length;
}

const num = [-2, 3, 0, 2, 5];

console.log(solution(num));
