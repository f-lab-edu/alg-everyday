const sol1 = (arr: number[][]) => {
  arr.forEach((v) => v.sort((a, b) => a - b));
  return _.multiply(..._.zipWith(...arr, (...arr: number[]) => _.max(arr)));
};

// 작은 값들 중 큰 값
// 큰 값들 중 큰 값
const sol2 = (arr: number[][]) => {
  const getSmallValOfSize = arr.map(_.min);
  const getLagreValOfSize = arr.map(_.max);
  return _.max(getSmallValOfSize) * _.max(getLagreValOfSize);
};

// 실행
const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(sol1(sizes));
console.log(sol2(sizes));
