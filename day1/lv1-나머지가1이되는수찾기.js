// 나머지가 1이 되는 수 찾기
// 87389
function solution(n) {
  let leastNum = 1;
  while (n % leastNum !== 1) {
    leastNum++;
  }
  return leastNum;
}

solution(1, 1);
