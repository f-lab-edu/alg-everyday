// https://school.programmers.co.kr/learn/courses/30/lessons/120844

const 배열회전시키기 = (numbers: number[], direction: string): number[] => {
  if (direction === 'right') numbers.unshift(numbers.pop() as number);
  else numbers.push(numbers.shift() as number);
  return numbers;
};

const [d29numbers1, direction1] = [[1, 2, 3], 'right'];
const [d29numbers2, direction2] = [[4, 455, 6, 4, -1, 45, 6], 'left'];

console.log(배열회전시키기(d29numbers1, direction1)); // [3, 1, 2]
console.log(배열회전시키기(d29numbers2, direction2)); // [455, 6, 4, -1, 45, 6, 4]
