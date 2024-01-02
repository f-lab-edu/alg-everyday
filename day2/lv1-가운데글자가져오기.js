// 12903

function solution(s) {
  let len = s.length;
  let halfLen = Math.floor((len - 1) / 2);
  return s.slice(halfLen, halfLen + (len % 2 ? 1 : 2));
}
