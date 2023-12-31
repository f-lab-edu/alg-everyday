// 자릿수 더하기
// 12931

const solution = (n) => {
  return [...String(n)].reduce((acc, b) => acc + parseInt(b), 0);
};
