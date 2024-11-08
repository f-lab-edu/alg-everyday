// 자릿수 더하기
// 12931

// eslint-disable-next-line unused-imports/no-unused-vars
const 자릿수더하기 = (n: number) => {
  return [...String(n)].reduce((acc, b) => acc + parseInt(b, 10), 0);
};
