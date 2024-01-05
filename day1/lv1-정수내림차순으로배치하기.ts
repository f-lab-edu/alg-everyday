// 12933

function solution(n: number) {
  return parseInt(
    [...String(n)]
      .map(Number)
      .sort((a, b) => b - a)
      .join(""),
    10,
  );
}
