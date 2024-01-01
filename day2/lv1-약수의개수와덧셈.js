// 77884

function solution(left, right) {
  let ans = 0;
  for (let i = left; i <= right; i++) {
    let sqrtNum = Math.sqrt(i);
    ans += sqrtNum == Math.floor(sqrtNum) ? -i : i;
  }
  return ans;
}
