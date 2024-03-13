// https://school.programmers.co.kr/learn/courses/30/lessons/120841

const 점의위치구하기 = (dot: number[]): number => {
  const [x, y] = dot;
  if (x > 0) return y > 0 ? 1 : 4;
  else return y > 0 ? 2 : 3;
};

const dot1 = [2, 4];
const dot2 = [-7, 9];

console.log(점의위치구하기(dot1));
console.log(점의위치구하기(dot2));
