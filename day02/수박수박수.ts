// 12922

function 수박수박수(n: number) {
  const evenStr = "수박";
  const oddStr = "수";
  let ans = "";
  for (let i = 2; i <= n; i += 2) {
    ans += evenStr;
  }
  if (n % 2 !== 0) ans += oddStr;
  return ans;
}
