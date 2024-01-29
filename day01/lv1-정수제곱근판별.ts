// 12934

function 정수제곱근판별(n: number) {
  // 약수가 홀수이면 어떤 양의 정수 x의 제곱이다.
  // 약수의 개수 파악 -> 시간 초과

  for (let i = 1; i <= n / 2 + 1; i++) {
    if (i * i === n) return (i + 1) * (i + 1);
  }
  return -1;
}
