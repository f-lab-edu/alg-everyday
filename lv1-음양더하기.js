// 76501

function solution(absolutes, signs) {
  return absolutes.reduce((acc, curVal, curIndex) => {
    if (signs[curIndex]) return acc + curVal;
    else return acc - curVal;
  }, 0);
}
