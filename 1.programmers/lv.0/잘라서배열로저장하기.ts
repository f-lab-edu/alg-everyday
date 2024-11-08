// https://school.programmers.co.kr/learn/courses/30/lessons/120913

// ver 1. 최초 코드
const 잘라서배열로저장하기 = (str: string, n: number): string[] => {
  const ans = [];
  for (let i = 0; i <= str.length - 1; i += n) {
    ans.push(str.slice(i, i + n));
  }
  return ans;
};

// ver 2. 정규식 활용
const 잘라서배열로저장하기2 = (str: string, n: number): string[] => {
  return str.match(new RegExp(`.{1,${n}}`, 'g')) as string[];
};

console.log(잘라서배열로저장하기('abc1Addfggg4556b', 6));
// ["abc1Ad", "dfggg4", "556b"]
console.log(잘라서배열로저장하기('abcdef123', 3));
// ["abc", "def", "123"]

console.log(잘라서배열로저장하기2('abc1Addfggg4556b', 6));
// ["abc1Ad", "dfggg4", "556b"]
console.log(잘라서배열로저장하기2('abcdef123', 3));
// ["abc", "def", "123"]
