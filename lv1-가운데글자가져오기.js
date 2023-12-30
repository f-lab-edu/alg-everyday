// 12903

function solution(s) {
  let len = s.length;
  return len % 2 == 0 ? s.charAt(len / 2 - 1) + s.charAt(len / 2) : s.charAt(Math.ceil(len / 2) - 1);
}
