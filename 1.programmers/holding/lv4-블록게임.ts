//! Lv.4인 줄 모르고 덤볐다...

// https://school.programmers.co.kr/learn/courses/30/lessons/42894

// 3 종류의 블록을 회전, 총 12가지 모양의 블록
// N x N 크기의 보드 위에 블록들이 배치 - 테트리스를 생각하면 안 된다.

// 4 <= N <= 50
// 0 <= borad의 각 행 원소 <= 200

// 12 개의 모양 중, 5개의 모양만 가능. 즉, 나머지 7개의 블록은 원천적으로 제거될 수 없음
// -> 5개의 모양을 걸러내는 것이 우선인가?

// 5개의 유형만 걸러내고
// 나머지 7개의 유형이 5개의 유형 위에만 존재하지 않으면 된다.

//| 제거 가능한 블록 구조 5가지
//| [row, col] [row+1, col] [row+1, col+1] [row+1, col+2]

const blockGame = (board: number[][]): number => {
  //! 기존에 존재하는 블럭의 위치를 파악
  const existingBlocks: number[][] = [];
  board.forEach((row, i) =>
    row.forEach((col, j) => {
      if (col) existingBlocks.push([col, i, j]);
    }),
  );

  console.log(existingBlocks);
  existingBlocks.sort((a, b) => a[0] - b[0]);
  console.log(existingBlocks);

  //!

  return 0;
};

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0], // 4
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0], // 5
  [0, 0, 0, 0, 3, 0, 4, 0, 0, 0], // 6
  [0, 0, 0, 2, 3, 0, 0, 0, 5, 5], // 7
  [1, 2, 2, 2, 3, 3, 0, 0, 0, 5], // 8
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 5], // 9
];
console.log(blockGame(board)); // 2
