// 12933

function solution(n) {
  return parseInt(
    [...String(n)]
      .map(Number)
      .sort((a, b) => b - a)
      .join('')
  );
}
