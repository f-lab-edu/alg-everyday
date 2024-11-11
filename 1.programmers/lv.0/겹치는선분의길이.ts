// https://school.programmers.co.kr/learn/courses/30/lessons/120876

// 겹치는 것을 어떻게 표현할까?
// O(n)

type Line = [number, number];

const 겹치는선분의길이 = (lines: Line[]): number => {
  const flatLines = lines.flat();
  const minNum = Math.min(...flatLines);
  const maxNum = Math.max(...flatLines);

  const overlapCnts = Array(maxNum - minNum).fill(0);

  lines.forEach((line) => {
    for (let i = line[0] - minNum; i < line[1] - minNum; i++) overlapCnts[i]++;
  });

  return overlapCnts.filter((cnt) => cnt >= 2).length;
};

const lines1: Line[] = [
  [0, 1],
  [2, 5],
  [3, 9],
];

const lines2: Line[] = [
  [-1, 1],
  [1, 3],
  [3, 9],
];
const lines3: Line[] = [
  [0, 5],
  [3, 9],
  [1, 10],
];

const lines4: Line[] = [
  [-1, 0],
  [-1, 2],
  [99, 100],
];

const lines5: Line[] = [
  [1, 12],
  [3, 6],
  [2, 4],
];

console.log(겹치는선분의길이(lines1)); // 2
console.log(겹치는선분의길이(lines2)); // 0
console.log(겹치는선분의길이(lines3)); // 8
console.log(겹치는선분의길이(lines4)); // 1
console.log(겹치는선분의길이(lines5)); // 4
