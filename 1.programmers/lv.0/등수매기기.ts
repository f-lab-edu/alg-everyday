// https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc&page=5

// 평균 점수가 같으면 같은 등수
// score는 중복된 원소를 갖지 않는다.

// ver 1. 최초 코드
const 등수매기기 = (score: [number, number][]): number[] => {
  // 평균 점수 계산
  const avgScore = score.map((v) => v.reduce((a, b) => a + b) / 2);
  const avgScoreClone = [...avgScore];
  // Map 객체 활용
  const scoreMap = new Map();
  let rank = 1;
  avgScoreClone.sort((a, b) => b - a);
  avgScoreClone.forEach((v) => {
    if (!scoreMap.has(v)) scoreMap.set(v, rank);
    rank++;
  });
  return avgScore.map((v) => scoreMap.get(v));
};

// ver 2. 개선 코드
const 등수매기기2 = (score: [number, number][]): number[] => {
  const avgScore = score.map((v) => (v[0] + v[1]) / 2);
  const sortedAvgScore = [...avgScore].sort((a, b) => b - a);
  return avgScore.map((v) => sortedAvgScore.indexOf(v) + 1);
};

console.log(
  등수매기기([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ]),
); // [1, 2, 4, 3]

console.log(
  등수매기기([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ]),
); // [4, 4, 6, 2, 2, 1, 7]

console.log(
  등수매기기2([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ]),
); // [1, 2, 4, 3]

console.log(
  등수매기기2([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ]),
); // [4, 4, 6, 2, 2, 1, 7]
