// https://school.programmers.co.kr/learn/courses/30/lessons/120886

// 글자의 순서를 재구성해서 문자열을 만들 수 있나?

// ver 1. 문자열 정렬을 활용
// 시간 효율이 좋지 않음
const A에서B로만들기 = (before: string, after: string): number => {
  const sortingStr = (str: string): string => [...str].sort((a, b) => a.localeCompare(b)).join('');
  return sortingStr(before) === sortingStr(after) ? 1 : 0;
};

// ver 2. sort() 콜백 함수 없음
// 유니코드 코드 포인트를 기준으로 요소를 정렬한다.
const A에서B로만들기2 = (before: string, after: string): number => {
  const sortingStr = (str: string): string => [...str].sort().join('');
  return sortingStr(before) === sortingStr(after) ? 1 : 0;
};

console.log(A에서B로만들기('olleh', 'hello')); // 1
console.log(A에서B로만들기('allpe', 'apple')); // 0

console.log(A에서B로만들기2('olleh', 'hello')); // 1
console.log(A에서B로만들기2('allpe', 'apple')); // 0
