// https://school.programmers.co.kr/learn/courses/30/lessons/120842

// num_list의 길이는 n의 배 수개
// 2 <= n < num_list

// ver 1. 반복문을 활용
// -> 시간효율이 ver2 보다 안 좋음
const 이차원으로만들기 = (num_list: number[], n: number): number[][] => {
  const matrix: number[][] = [];
  let tmp: number[] = [];
  num_list.forEach((v, i) => {
    if ((i + 1) % n === 0) {
      tmp.push(v);
      matrix.push(tmp);
      tmp = [];
    } else tmp.push(v);
  });
  return matrix;
};

// ver 2. 시간효율성 개선
// slice로 인해 코드가 명시적임
const 이차원으로만들기2 = (num_list: number[], n: number): number[][] => {
  const matrix: number[][] = [];
  for (let i = 0; i < num_list.length; i += n) {
    matrix.push(num_list.slice(i, i + n));
  }
  return matrix;
};

// ver 3. 다른 사람 풀이
// 코드가 의미를 잘 나타내면서 시간효율성이 좋다.
function 이차원으로만들기3(num_list: number[], n: number): number[][] {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}

console.log(이차원으로만들기([1, 2, 3, 4, 5, 6, 7, 8], 2));
// [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(이차원으로만들기([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
// [[100, 95, 2], [4, 5, 6], [18, 33, 948]]

console.log(이차원으로만들기2([1, 2, 3, 4, 5, 6, 7, 8], 2));
// [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(이차원으로만들기2([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
// [[100, 95, 2], [4, 5, 6], [18, 33, 948]]

console.log(이차원으로만들기3([1, 2, 3, 4, 5, 6, 7, 8], 2));
// [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(이차원으로만들기3([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
// [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
