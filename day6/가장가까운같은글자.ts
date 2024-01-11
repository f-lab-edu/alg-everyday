// https://school.programmers.co.kr/learn/courses/30/lessons/142086

// -> O(n)이 걸리는 부분을 O(k)로 고치자 -> Map 구조 활용

const 가장가까운같은글자 = (s: string): number[] => {
  const charMap = new Map();
  return [...s].map((char, idx) => {
    const distance = charMap.has(char) ? idx - charMap.get(char) : -1;
    charMap.set(char, idx);
    return distance;
  });
};

// O(n^2) 시간복잡도
//   return [...s].map((char, idx) => {
//     const stringBeforeIdx = s.slice(0, idx);
//     // 현재 인덱스 값과 주어진 문자열에서 char의 첫 인덱스 값을 비교
//     return idx === s.indexOf(char)
//       ? -1 // char 값이 처음나와서 자신의 앞에 같은 글자가 없을 때
//       : idx - stringBeforeIdx.lastIndexOf(char); // 자신보다 앞에 같은 글자가 있을 때
//   });
// };

const s1 = "banana";
const s2 = "foobar";

console.log(가장가까운같은글자(s1)); // [ -1, -1, -1, 2, 2, 2 ]
console.log(가장가까운같은글자(s2)); // [ -1, -1, 1, -1, -1, -1 ]
