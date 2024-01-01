// 자연수 뒤집어 배열로 만들기
// 12932

function solution(n) {
  let arr = [];
  [...String(n)].foreach((v, i) => arr.unshift(parseInt(v)));
  return arr;
}
