// https://school.programmers.co.kr/learn/courses/30/lessons/42840

import { sum } from "lodash";

const student1 = [1, 2, 3, 4, 5];
const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const 모의고사 = (answers: number[]): number[] => {
  const ansCnts = [student1, student2, student3].map((student) =>
    sum(
      answers.map((ans, ansNo) =>
        ans === student[ansNo % student.length] ? 1 : 0,
      ),
    ),
  );
  return ansCnts
    .map((v, i) => (v === Math.max(...ansCnts) ? i + 1 : 0))
    .filter((v) => v !== 0);
};

const d10answers1 = [1, 2, 3, 4, 5];
const d10answers2 = [1, 3, 2, 4, 2];

console.log(모의고사(d10answers1));
console.log(모의고사(d10answers2));
