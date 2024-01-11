// https://school.programmers.co.kr/learn/courses/30/lessons/138477

const 명예의전당1 = (k: number, score: number[]): number[] => {
  return score.map((_, i) => {
    const ranking: number[] = score.slice(0, i + 1).sort((a, b) => b - a);
    return ranking.length > k ? ranking[k - 1] : ranking[ranking.length - 1];
  });
};
const [k1, score1] = [3, [10, 100, 20, 150, 1, 100, 200]];
const [k2, score2] = [4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]];

console.log(명예의전당1(k1, score1)); // [10, 10, 10, 20, 20, 100, 100]
console.log(명예의전당1(k2, score2)); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
