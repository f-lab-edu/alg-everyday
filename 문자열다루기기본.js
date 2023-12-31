// 12918

function solution(s) {
  if ([4, 6].includes(s.length)) {
    return [...s].every((v) => !isNaN(v));
  }
  return false;
}
