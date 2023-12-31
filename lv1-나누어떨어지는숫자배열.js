// 12910

function solution(arr, divisor) {
  let ansArr = arr.filter((v) => v % divisor == 0);
  return ansArr.length ? ansArr.sort((a, b) => a - b) : [-1];
}
