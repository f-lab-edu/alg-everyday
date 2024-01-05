// 77884

function 약수의개수와덧셈(left: number, right: number) {
  let ans = 0;
  for (let i = left; i <= right; i++) {
    const sqrtNum = Math.sqrt(i);
    ans += sqrtNum === Math.floor(sqrtNum) ? -i : i;
  }
  return ans;
}
