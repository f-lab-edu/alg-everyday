// https://school.programmers.co.kr/learn/courses/30/lessons/120880

// 정수 n을 기준으로 n과 가까운 수부터 정렬할거임
// 더 큰수를 앞에 오도록 배치

// sort() 콜백함수 설계 문제

// ver 1. 최초 코드 / sort 콜백함수 설계
const 특이한정렬 = (numlist: number[], n: number): number[] => {
  numlist.sort((a, b) => {
    if (Math.abs(n - a) === Math.abs(n - b)) return b - a;
    else return Math.abs(n - a) - Math.abs(n - b);
  });
  return numlist;
};

// ver 2. 리펙토링 버전
const 특이한정렬2 = (numlist: number[], n: number): number[] => {
  numlist.sort((a, b) => {
    return Math.abs(n - a) === Math.abs(n - b) ? b - a : Math.abs(n - a) - Math.abs(n - b);
  });
  return numlist;
};

// ver 3. 리펙토링 버전2
const 특이한정렬3 = (numlist: number[], n: number): number[] => {
  numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);
  return numlist;
};

console.log(특이한정렬([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
console.log(특이한정렬([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]
console.log(특이한정렬2([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
console.log(특이한정렬2([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]

console.log(특이한정렬3([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
console.log(특이한정렬3([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]
