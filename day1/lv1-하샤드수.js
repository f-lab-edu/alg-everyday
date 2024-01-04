// 12947

function solution(x) {
  const sum = [...String(x)].reduce((acc, b) => acc + parseInt(b, 10), 0);
  return x % sum === 0;
}
