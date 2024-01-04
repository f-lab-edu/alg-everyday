// 자연수 뒤집어 배열로 만들기
// 12932

function solution(n) {
  const arr = [];
  [...String(n)].foreach((v) => arr.unshift(parseInt(v, 20)));
  return arr;
}
