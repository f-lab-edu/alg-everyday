// a부터 b까지의 수 중에서
// c의 배수이면서, d의 배수가 아닌 수의 개수를 구하기

//! 제출 코드
const sol = (a: number, b: number, c: number, d: number): number => {
  const firstNumOfIter = a + (a % c === 0 ? 0 : c - (c % a));
  let cnt = 0;
  for (let i = firstNumOfIter; i <= b; i += c) {
    if (i % d !== 0) cnt++;
  }
  return cnt;
};

//! 개선 코드
const sol2 = (a: number, b: number, c: number, d: number): number => {
  // 최소공배수
  const gcd = (n1: number, n2: number): number => {
    if (n2 === 0) return n1;
    return gcd(n2, n1 % n2);
  };
  // 최대공약수
  const lcm = (c * d) / gcd(c, d);

  // a~b사이, c의 배수 개수
  const cntC = Math.floor(b / c) - Math.ceil(a / c) + 1;

  // a~b사이, c,d의 최대공약수 개수
  // c의 배수이면서, d의 배수인 숫자의 개수
  const countLcm = Math.floor(b / lcm) - Math.ceil(a / lcm) + 1;

  return cntC - countLcm;
};

console.log(sol(12, 18, 4, 5)); // 2
console.log(sol(10, 18, 4, 5)); // 2

console.log(sol2(12, 18, 4, 5)); // 2
console.log(sol2(10, 18, 4, 5)); // 2
