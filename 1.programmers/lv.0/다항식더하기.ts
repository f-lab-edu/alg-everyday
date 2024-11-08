// https://school.programmers.co.kr/learn/courses/30/lessons/120863

// ver 1. 최초 코드
const 다항식더하기 = (ploynomial: string): string => {
  const splitedStr = ploynomial.split(' + ');
  let xCnt = 0;
  let num = 0;
  splitedStr.forEach((str) => {
    if (str.at(-1) === 'x') {
      xCnt += parseInt(str.slice(0, str.length), 10) || 1; // NaN일 때 1 리턴
    } else num += parseInt(str, 10);
  });
  if (!xCnt) return num.toString();
  return num ? `${xCnt === 1 ? '' : xCnt}x + ${num}` : `${xCnt === 1 ? '' : xCnt}x`;
};

console.log(다항식더하기('3x + 7 + x')); // "4x + 7"
console.log(다항식더하기('x + x + x')); // "3x"
console.log(다항식더하기('10x + 20x')); // "30x"
console.log(다항식더하기('x + 1')); //  "x + 1"
console.log(다항식더하기('4 + 5 + 1')); //  "10"
