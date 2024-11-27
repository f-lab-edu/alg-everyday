// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 권장 시간 복잡도 : O(N^2)

const student1 = [1, 2, 3, 4, 5];
const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//! 이전 풀이 - O(N^2)
const 모의고사 = (answers: number[]) => {
  const ansCnts = [0, 0, 0];
  answers.forEach((v, i) => {
    if (v === student1[i % student1.length]) ansCnts[0]++;
    if (v === student2[i % student2.length]) ansCnts[1]++;
    if (v === student3[i % student3.length]) ansCnts[2]++;
  });
  return ansCnts.map((v, i) => (v === Math.max(...ansCnts) ? i + 1 : 0)).filter((v) => v !== 0);
};

//! 재풀이
// 이전 풀이와 동일하여 생략

console.log(모의고사([1, 2, 3, 4, 5]));
console.log(모의고사([1, 3, 2, 4, 2]));
