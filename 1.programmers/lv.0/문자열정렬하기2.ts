// https://school.programmers.co.kr/learn/courses/30/lessons/120911

const 문자열정렬하기2 = (str: string): string => {
  const lowerStr = str.toLowerCase();
  return [...lowerStr].sort((a, b) => a.localeCompare(b)).join('');
};

console.log(문자열정렬하기2('Bcad')); // "abcd"
console.log(문자열정렬하기2('heLLo')); // "ehllo"
console.log(문자열정렬하기2('Python')); // "hnopty"
