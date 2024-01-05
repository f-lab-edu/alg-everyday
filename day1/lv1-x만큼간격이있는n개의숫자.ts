// x만큼 간격이 있는 n개의 숫자
// 12954

function x만큼간격이있는n개의숫자(x: number, n: number) {
  const ans = [];
  let num = 0;

  while (n !== 0) {
    num += x;
    ans.push(num);
    n--;
  }
  return ans;
}
