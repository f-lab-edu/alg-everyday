// 12910

function solution(arr, divisor) {
  let ansArr = [];
  arr.forEach((v, i) => {
    if (v % divisor === 0) ansArr.push(v);
  });
  return ansArr.length == 0 ? [-1] : ansArr.sort((a, b) => a - b);
}
