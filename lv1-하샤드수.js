// 12947

function solution(x) {
  let sum = [...String(x)].reduce((a, b) => parseInt(a) + parseInt(b), 0);
  return x % sum === 0 ? true : false;
}
