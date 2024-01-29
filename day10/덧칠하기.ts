// https://school.programmers.co.kr/learn/courses/30/lessons/161989

// 메모리 비효율
// const 덧칠하기 = (n: number, m: number, section: number[]): number => {
//   const wall = Array(n).fill(true);
//   section.forEach((v) => (wall[v] = false));
//   console.log(wall);
//   let cnt = 0;
//   for (let i = 0; i < wall.length; i++) {
//     if (wall[i] === false) {
//       wall.fill(true, i, i + m);
//       cnt++;
//     }
//   }
//   return cnt;
// };

const 덧칠하기 = (n: number, m: number, section: number[]): number => {
  // n : 벽의 길이
  // m : 롤러의 길이
  // section 요소 : 칠해야하는 벽
  // [0, 1, 1, 0, 0, 0, 1, 0, 0]
  // [2, 3, 6]
  let cnt = 0;
  let isPainted = 0;
  for (const wall of section) {
    if (isPainted < wall) {
      isPainted = wall + m - 1;
      cnt++;
    }
  }
  return cnt;
};

const [day10n11, day10m11, day10section1] = [8, 4, [2, 3, 6]];
const [day10n12, day10m12, day10section2] = [5, 4, [1, 3]];
const [day10n13, day10m13, day10section3] = [4, 1, [1, 2, 3, 4]];

console.log(덧칠하기(day10n11, day10m11, day10section1));
console.log(덧칠하기(day10n12, day10m12, day10section2));
console.log(덧칠하기(day10n13, day10m13, day10section3));
