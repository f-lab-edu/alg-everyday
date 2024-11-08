// https://school.programmers.co.kr/learn/courses/30/lessons/120898

const 편지 = (msg: string): number => {
  return msg.length * 2;
};

const msg1 = 'happy birthday!';
const msg2 = 'I love you~';

console.log(편지(msg1));
console.log(편지(msg2));
