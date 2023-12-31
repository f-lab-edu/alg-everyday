// 76501

function solution(absolutes, signs) {
  return absolutes.reduce((acc, curVal, curIndex) => acc + (signs[curIndex] ? curVal : -curVal), 0);
}
