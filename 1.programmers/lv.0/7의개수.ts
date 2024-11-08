// https://school.programmers.co.kr/learn/courses/30/lessons/120912

// join() 문제점
// 배열이 매우 크거나 구분자 문자열이 긴 경우,
// 생성될 수 있는 최종 문자열의 크기가 커지면 성능저하나
// 브라우저나 js 엔진의 최대 문자열의 길이 제한을 초과할 수도 있다.
//| 따라서, ver 2 의 코드를 지향한다.

// ver 1. 최초 코드
const 칠의개수 = (array: number[]): number => {
  return [...array.join('')].filter((v) => v === '7').length;
};

// ver 2. 개선 코드
// ver 1 코드보다는 시간 효율이 좋음을 확인할 수 있다.
// 또한, 메모리 측면에서도 안심할 수 있어서 아래와 같은 풀이가 권장될 것 같다.
const 칠의개수2 = (array: number[]): number => {
  let cnt = 0;
  array.forEach((v) => {
    cnt += [...v.toString()].filter((e) => e === '7').length;
  });
  return cnt;
};

// ver 3. 정규식 활용
const 칠의개수3 = (array: number[]): number => {
  return array.join('').match(/7+/g)?.join('').length ?? 0;
};

console.log(칠의개수([7, 77, 17])); // 4
console.log(칠의개수([10, 29])); // 0

console.log(칠의개수2([7, 77, 17])); // 4
console.log(칠의개수2([10, 29])); // 0

console.log(칠의개수3([7, 77, 17])); // 4
console.log(칠의개수3([10, 29])); // 0

// ====================================================
// const maxArray = Array.from({ length: 100000000 }, () => {
//   return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
// });

// console.time('1');
// console.log(칠의개수(maxArray));
// console.timeEnd('1');

// console.time('2');
// console.log(칠의개수2(maxArray));
// console.timeEnd('2');

// console.time('3');
// console.log(칠의개수3(maxArray));
// console.timeEnd('3');
