// 86051

function solution(numbers) {
  let totalSumZeroToNine = (9 * (1 + 9)) / 2;
  numbers.forEach((v) => (totalSumZeroToNine -= v));
  return totalSumZeroToNine;
}
