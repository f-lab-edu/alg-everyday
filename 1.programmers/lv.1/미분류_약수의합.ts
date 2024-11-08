// 약수의 합
// 12928
// eslint-disable-next-line unused-imports/no-unused-vars
function 약수의합(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
