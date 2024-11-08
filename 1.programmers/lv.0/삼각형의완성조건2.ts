// https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc&page=4

// 가장 긴 변의 길이는 다른 두변의 길이의 합보다 작다

// ver 1. 최초 코드
const 삼각형의완성조건2a = (sides: number[]): number => {
  sides.sort((a, b) => a - b);
  const shortSide = sides[1] - sides[0] + 1;
  const longSide = sides[1] + sides[0] - 1;
  return longSide - shortSide + 1;
};

// ver 2. 최적화
const 삼각형의완성조건2b = (sides: number[]): number => {
  return Math.min(...sides) * 2 - 1;
};

console.log(삼각형의완성조건2a([1, 2])); // 1
console.log(삼각형의완성조건2a([3, 6])); // 5
console.log(삼각형의완성조건2a([11, 7])); // 13

console.log(삼각형의완성조건2b([1, 2])); // 1
console.log(삼각형의완성조건2b([3, 6])); // 5
console.log(삼각형의완성조건2b([11, 7])); // 13
