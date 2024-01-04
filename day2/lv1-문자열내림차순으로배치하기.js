// 12917

function solution(s) {
  return [...s]
    .sort((a, b) => a - b)
    .reverse()
    .join('');
}
