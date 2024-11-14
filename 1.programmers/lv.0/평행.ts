// https://school.programmers.co.kr/learn/courses/30/lessons/120875

// 주어진 네 개의 점 두 개씩 이었을 때,
// 두 직선이 평행이 되는 경우? -> 1

// 총 직선 : 6개 -> x
// 같은 기울기 직선 존재 여부
// 기울기 구하는 법 : (y2-y1)/(x2-x1)

// 한 점은 두 점을 이을 수 없음

//! 1. 실패
// const 평행 = (dots: [number, number][]): number => {
//   const slopes = new Set();

//   for (let i = 0; i < dots.length; i++) {
//     const [x1, y1] = dots[i];
//     for (let j = i; j < dots.length; j++) {
//       const [x2, y2] = dots[j];
//       const slope = (y2 - y1) / (x2 - x1);
//       if (Number.isNaN(slope)) continue;
//       slopes.add(slope);
//     }
//   }

//   if (slopes.size !== 6) return 1;
//   return 0;
// };

//! 2 성공
const 평행 = (dots: [number, number][]): number => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) continue;

      const idxOfRestDots = [0, 1, 2, 3].filter((idx) => idx !== i && idx !== j);
      const [x1, y1] = dots[i];
      const [x2, y2] = dots[j];
      const [x3, y3] = dots[idxOfRestDots[0]];
      const [x4, y4] = dots[idxOfRestDots[1]];
      const slope1 = (y2 - y1) / (x2 - x1);
      const slope2 = (y4 - y3) / (x4 - x3);

      if (slope1 === slope2) return 1;
    }
  }
  return 0;
};

console.log(
  평행([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1
console.log(
  평행([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); // 0

console.log(
  평행([
    [1, 2],
    [2, 1],
    [3, 4],
    [4, 5],
  ])
); // 0
