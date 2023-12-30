// 12922

function solution(n) {
  let evenStr = "수박";
  let oddStr = "수";
  let ans = "";
  for (let i = 2; i <= n; i += 2) {
    ans += evenStr;
  }
  if (n % 2 != 0) ans += oddStr;
  return ans;
}
