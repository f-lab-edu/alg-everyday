// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// 정상 코드
const 가장큰수 = (numbers: number[]): string => {
  const strNums = numbers.map((v) => v.toString());
  strNums.sort((a: string, b: string): number => {
    const t1 = parseInt(a + b, 10);
    const t2 = parseInt(b + a, 10);
    return t1 >= t2 ? -1 : 1;
  });
  return strNums[0] === '0' ? '0' : strNums.join('');
};

// 의도한 로직대로 작동되지 않는 코드
// keyword:
const 가장큰수2 = (numbers: number[]): string => {
  const strNums = numbers.map((v) => v.toString());
  strNums.sort((a: string, b: string): number => {
    const t1 = parseInt(a + b, 10);
    const t2 = parseInt(b + a, 10);
    return t1 >= t2 ? -1 : 1;
  });
  return parseInt(strNums.join(''), 10).toString(); // 논리적으로 흠 없는 것 같지만, 의도한대로 동작하지 않는 코드
};

const d22nums1 = [6, 10, 2];
const d22nums2 = [3, 30, 34, 5, 9];
const d22nums3 = [123, 1232];
const d22nums4 = [547, 54, 5];
const d22nums5 = [542, 54, 5];

console.log(가장큰수(d22nums1)); // "6210"
console.log(가장큰수(d22nums2)); // "9534330"
console.log(가장큰수(d22nums3)); // "1232123"
console.log(가장큰수(d22nums4)); // "554754"
console.log(가장큰수(d22nums5)); // "554542"
console.log(가장큰수([0, 0, 0])); // "0"
