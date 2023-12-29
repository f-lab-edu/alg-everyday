// x만큼 간격이 있는 n개의 숫자
// 12954
function solution(x, n) {
  let ans = [];
  ans.push(x);
  while (n !== 1) {
    ans.push(ans[ans.length - 1] + x);
    n--;
  }
  return ans;
}
