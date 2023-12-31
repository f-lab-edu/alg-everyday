// x만큼 간격이 있는 n개의 숫자
// 12954

function solution(x, n) {
  let ans = [];
  let num = 0;

  while (n !== 0) {
    num += x;
    ans.push(num);
    n--;
  }
  return ans;
}
