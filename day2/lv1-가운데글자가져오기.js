// 12903

function solution(s) {
  let len = s.length;
  let halfLen = Math.ceil(len / 2 - 1);
  return s.slice(halfLen, halfLen + (len % 2 ? 1 : 2));
}
