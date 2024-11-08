// https://school.programmers.co.kr/learn/courses/30/lessons/120894

// 정규식 활용
// Map 객체

// ver 1.
const 영어가싫어요 = (numbers: string): number => {
  const strToNumMap = new Map();
  strToNumMap.set('one', 1);
  strToNumMap.set('two', 2);
  strToNumMap.set('three', 3);
  strToNumMap.set('four', 4);
  strToNumMap.set('five', 5);
  strToNumMap.set('six', 6);
  strToNumMap.set('seven', 7);
  strToNumMap.set('eight', 8);
  strToNumMap.set('nine', 9);
  strToNumMap.set('zero', 0);

  for (const [key, value] of strToNumMap) {
    numbers = numbers.replaceAll(key, value);
  }
  return parseInt(numbers, 10);
};

console.log(영어가싫어요('onetwothreefourfivesixseveneightnine')); // 123456789
console.log(영어가싫어요('onefourzerosixseven')); // 14067
