// 12933

// eslint-disable-next-line unused-imports/no-unused-vars
function 정수내림차순으로배치하기(n: number) {
  return parseInt(
    [...String(n)]
      .map(Number)
      .sort((a, b) => b - a)
      .join(''),
    10,
  );
}
