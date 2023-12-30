// 70128

function solution(a, b) {
  let ans = 0;
  a.forEach((v, i) => (ans += v * b[i]));
  return ans;
}
