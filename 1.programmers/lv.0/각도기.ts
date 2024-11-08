// https://school.programmers.co.kr/learn/courses/30/lessons/120829

// angle은 정수

const 각도기 = (angle: number): number => {
  return [0, 90, 91, 180].filter((v) => angle >= v).length;
};

console.log(각도기(70)); // 1
console.log(각도기(91)); // 3
console.log(각도기(180)); // 4
