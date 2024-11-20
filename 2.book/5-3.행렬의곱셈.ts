// https://school.programmers.co.kr/learn/courses/30/lessons/12949
// 권장 시간 복잡도 : O(N^3)

const 행렬의곱셈 = (arr1: number[][], arr2: number[][]) => {
  const arr1row = arr1.length;
  const arr1col = arr1[0].length;
  // const arr2row = arr2.length;
  const arr2col = arr2[0].length;

  const ans = Array.from({ length: arr1row }, () => Array(arr2col).fill(0));

  for (let i = 0; i < arr1row; i++) {
    for (let j = 0; j < arr2col; j++) {
      for (let r = 0; r < arr1col; r++) {
        ans[i][j] += arr1[i][r] * arr2[r][j];
      }
    }
  }
  return ans;
};

console.log(
  행렬의곱셈(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]

console.log(
  행렬의곱셈(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
