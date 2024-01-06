function 최대공약수와최소공배수(n: number, m: number) {
  const mul = n * m;
  while (n) {
    [m, n] = [n, m % n];
  }
  return [m, mul / m];
}
