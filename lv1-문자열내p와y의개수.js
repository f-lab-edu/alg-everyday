// 12916

function solution(s) {
  let pNum = 0;
  let yNum = 0;
  [...s].forEach((v, i) => {
    if (v === 'p' || v === 'P') pNum++;
    if (v === 'y' || v === 'Y') yNum++;
  });
  return pNum === yNum;
}
