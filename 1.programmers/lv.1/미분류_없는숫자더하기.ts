// 86051
// eslint-disable-next-line unused-imports/no-unused-vars
function 없는숫자더하기(numbers: any[]) {
  let totalSumZeroToNine = (9 * (1 + 9)) / 2;
  numbers.forEach((v) => (totalSumZeroToNine -= v));
  return totalSumZeroToNine;
}
