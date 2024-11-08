// 12910
// eslint-disable-next-line unused-imports/no-unused-vars
function 나누어떨어지는숫자배열(arr: any[], divisor: number) {
  const ansArr = arr.filter((v) => v % divisor === 0);
  return ansArr.length ? ansArr.sort((a, b) => a - b) : [-1];
}
