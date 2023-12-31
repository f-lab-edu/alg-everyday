// 12950

function solution(arr1, arr2) {
  return arr1.map((v1, i1) => {
    return v1.map((v2, i2) => {
      return v2 + arr2[i1][i2];
    });
  });
}
