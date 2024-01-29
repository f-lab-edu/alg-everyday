// 70128

// function solution(a, b) {
//   let zippedArr = _.zip(a, b);
//   return zippedArr.map(([v1, v2]) => v1 * v2).reduce((acc, curVal) => acc + curVal, 0);
// }

const 내적 = (a: number[], b: number[]) => {
  return _.sum(_.zipWith(a, b, (v1: number, v2: number) => v1 * v2));
};

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];
console.log(내적(a, b));
