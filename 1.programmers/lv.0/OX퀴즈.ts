// https://school.programmers.co.kr/learn/courses/30/lessons/120907

// ver 1. eval 사용
const OX퀴즈 = (quiz: string[]): string[] => {
  return quiz.map((v) => {
    const str = v.split(' = ');
    return eval(str[0]) === parseInt(str[1], 10) ? 'O' : 'X';
  });
};

// ver 2. 타입 안정성 개선 코드
const OX퀴즈2 = (quiz: string[]): string[] => {
  const computeString = (str: string): number => {
    const tmp = str.split(' ');
    return tmp[1] === '+' ? parseInt(tmp[0], 10) + parseInt(tmp[2], 10) : parseInt(tmp[0], 10) - parseInt(tmp[2], 10);
  };
  return quiz.map((v) => {
    const str = v.split(' = ');
    computeString(str[0]);
    return computeString(str[0]) === parseInt(str[1], 10) ? 'O' : 'X';
  });
};

console.log(OX퀴즈(['3 - 4 = -3', '5 + 6 = 11'])); // ["X", "O"]
console.log(OX퀴즈(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])); // ["O", "O", "X", "O"]

console.log(OX퀴즈2(['3 - 4 = -3', '5 + 6 = 11'])); // ["X", "O"]
console.log(OX퀴즈2(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])); // ["O", "O", "X", "O"]
