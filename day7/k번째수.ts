// https://school.programmers.co.kr/learn/courses/30/lessons/42748

const k번째수 = (arr: number[], cmds: number[][]) => {
  return cmds.map((cmd) => {
    const firstNumIdx = cmd[0] - 1;
    const lastNumIdx = cmd[1] - 1;
    const kIdx = cmd[2] - 1;
    return arr.slice(firstNumIdx, lastNumIdx + 1).sort((a, b) => a - b)[kIdx];
  });
};

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(k번째수(array, commands));
