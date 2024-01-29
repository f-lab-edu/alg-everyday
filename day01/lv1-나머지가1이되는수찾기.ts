// 나머지가 1이 되는 수 찾기
// 87389
function 나머지가1이되는수찾기(n: number) {
  let leastNum = 1;
  while (n % leastNum !== 1) {
    leastNum++;
  }
  return leastNum;
}
