// 12916
// eslint-disable-next-line unused-imports/no-unused-vars
function 문자열내p와y의개수(s: string) {
  let pNum = 0;
  let yNum = 0;
  [...s].forEach((v) => {
    if (v === 'p' || v === 'P') pNum++;
    if (v === 'y' || v === 'Y') yNum++;
  });
  return pNum === yNum;
}
