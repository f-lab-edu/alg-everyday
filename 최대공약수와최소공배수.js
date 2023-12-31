function solution(n, m) {
  let mul = n * m;
  while (n) {
    [m, n] = [n, m % n];
  }
  return [m, mul / m];
}
