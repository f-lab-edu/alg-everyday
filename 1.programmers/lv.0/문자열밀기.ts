// https://school.programmers.co.kr/learn/courses/30/lessons/120921

// ver1. 문자열 길이가 100 -> 공간 효율을 고려하지 않고 push만 사용
// ver2. 공간 효율 고려하여 push, shift 조합 -> 시간 효율 떨어질 수도

// ver 1. 시간 효율 고려 o, 공간 효율 고려 x
//| 시간복잡도: O(n^2), 공간복잡도 : O(n)
const 문자열밀기 = (A: string, B: string): number => {
  let pushCnt = 0;
  const arrB = [...B];
  for (const str of B) {
    if (arrB.slice(pushCnt).join('') === A) return pushCnt;
    arrB.push(str);
    pushCnt++;
  }
  return -1;
};

// ver 3. 다른 사람 풀이
// 메모리 효율 무시 - 시간 효율 우선 시
//| 시간복잡도: O(n+m), 공간복잡도 : O(n)
const 문자열밀기2 = (A: string, B: string): number => (B + B).indexOf(A);
// ohellohell
// elppaelppa
// atatatat

console.log(문자열밀기('hello', 'ohell')); // 1
console.log(문자열밀기('apple', 'elppa')); // -1
console.log(문자열밀기('atat', 'tata')); // 1
console.log(문자열밀기('abc', 'abc')); // 0

console.log(문자열밀기2('hello', 'ohell')); // 1
console.log(문자열밀기2('apple', 'elppa')); // -1
console.log(문자열밀기2('atat', 'tata')); // 1
console.log(문자열밀기2('abc', 'abc')); // 0

//! 효율 테스트
