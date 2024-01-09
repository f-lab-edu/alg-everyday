// https://school.programmers.co.kr/learn/courses/30/lessons/142086

const 가장가까운같은글자 = (s: string) => {
  return [...s].map((char, idx) => {
    const stringBeforeIdx = s.slice(0, idx);
    // 현재 인덱스 값과 주어진 문자열에서 char의 첫 인덱스 값을 비교
    return idx === s.indexOf(char)
      ? -1 // char 값이 처음나와서 자신의 앞에 같은 글자가 없을 때
      : idx - stringBeforeIdx.lastIndexOf(char); // 자신보다 앞에 같은 글자가 있을 때
  });
};

// O(n)으로 줄이려면 index를 이진 탐색을 통해 색출해내야 한다
// -> 아니다, 이진 탐색으로 구현해도 O(n log n)이다
// 그럼 두 O(n)이 걸리는 함수를 떼어내야 한다

const s1 = "banana";
const s2 = "foobar";

console.log(가장가까운같은글자(s1));
console.log(가장가까운같은글자(s2));
