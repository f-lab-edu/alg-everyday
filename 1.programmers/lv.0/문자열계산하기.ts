// https://school.programmers.co.kr/learn/courses/30/lessons/120902

// ver 1. 최초 코드
// eval()은 안전하지 않음
const 문자열계산하기 = (str: string): number => {
  return eval(str);
};

// ver 2. 개선 코드
// 안정성 개선
const 문자열계산하기2 = (str: string): number => {
  const splitedStr = str.split(' ');
  let sum = parseInt(splitedStr[0], 10);
  for (let i = 1; i < splitedStr.length; i += 2) {
    const nextNum = parseInt(splitedStr[i + 1], 10);
    sum += splitedStr[i] === '+' ? nextNum : -nextNum;
  }
  return sum;
};

console.log(문자열계산하기('3 + 4')); // 7

console.log(문자열계산하기2('3 + 4')); // 7
