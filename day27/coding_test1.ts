// a부터 b까지의 수 중에서
// c의 배수이면서, d의 배수가 아닌 수의 개수를 구하기

const sol = (a: number, b: number, c: number, d: number): number => {
  const firstNumOfIter = a + (a % c === 0 ? 0 : c - (c % a));

  let cnt = 0;
  for (let i = firstNumOfIter; i <= b; i += c) {
    if (i % d !== 0) cnt++;
  }

  return cnt;
};

console.log(sol(12, 18, 4, 5)); // 2
console.log(sol(10, 18, 4, 5)); // 2
