// 76501

function 음양더하기(absolutes: any[], signs: any[]) {
  return absolutes.reduce(
    (acc, curVal, curIndex) => acc + (signs[curIndex] ? curVal : -curVal),
    0,
  );
}
