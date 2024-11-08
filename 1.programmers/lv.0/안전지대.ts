// https://school.programmers.co.kr/learn/courses/30/lessons/120866

// board는 n*n 배열
// 지뢰에 인접한 위, 아래, 좌, 우, 대각선 칸은 모두 위험지역(fatalZone)

const 안전지대 = (board: number[][]): number => {
  const nLen = board.length;

  const bombLoc: number[][] = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === 1) bombLoc.push([rowIndex, colIndex]);
    });
  });

  const fatalZone = new Set();
  const addStringToSet = (n: number, m: number): void => {
    if (n < 0 || m < 0 || n >= nLen || m >= nLen) return; // 예외 처리
    fatalZone.add(`${n}, ${m}`);
  };

  bombLoc.forEach(([row, col]: number[]) => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        addStringToSet(row + i, col + j);
      }
    }
  });

  return nLen * nLen - fatalZone.size;
};

console.log(
  안전지대([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16

console.log(
  안전지대([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
); // 13

console.log(
  안전지대([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); // 0
