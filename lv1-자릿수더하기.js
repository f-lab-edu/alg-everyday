// 자릿수 더하기
// 12931

const solution = (n) => {
  return [...String(n)].reduce((a, b) => parseInt(a) + parseInt(b), 0);
};
