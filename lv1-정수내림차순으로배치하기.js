// 12933

function solution(n) {
  return parseInt(
    [...String(n)]
      .map((v) => parseInt(v))
      .sort((a, b) => b - a)
      .join("")
  );
}
