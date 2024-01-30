// https://school.programmers.co.kr/learn/courses/30/lessons/12909

const 올바른괄호 = (s: string): boolean => {
  // 스택 구조 활용

  // 변수 할당이 일어나기 전에 판별 가능한 코드
  if (s.charAt(0) === ")") return false;
  let stack = 0;
  // [...s].forEach((str)=>{

  // } )
  stack = stack + ")".charCodeAt(0);
  console.log(stack);
  return true;
};

const alls1 = "()()";
const alls2 = "(())()";
const alls3 = ")()(";
const alls4 = "(()(";

console.log(올바른괄호(alls1)); // true
console.log(올바른괄호(alls2)); // true
console.log(올바른괄호(alls3)); // false
console.log(올바른괄호(alls4)); // false
