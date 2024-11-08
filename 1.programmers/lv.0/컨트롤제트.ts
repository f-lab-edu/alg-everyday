// https://school.programmers.co.kr/learn/courses/30/lessons/120853

// ver 1. 최초 코드
const 컨트롤제트 = (s: string): number => {
  // 컨트롤 제트 패턴 제거
  const noCtrlZ = s.replace(/-?\d+ Z/g, '');

  // 남은 수 더하기
  let ans = 0;
  noCtrlZ.split(' ').forEach((v) => (ans += parseInt(v, 10) || 0));
  return ans;
};

// ver 2. split() => match() 변경 코드
// match()를 활용하는 것이 의미상으로 좋다.
const 컨트롤제트2 = (s: string): number => {
  // 컨트롤 제트 패턴 제거
  const noCtrlZ = s.replace(/-?\d+ Z/g, '');

  // 남은 수 더하기
  let ans = 0;
  noCtrlZ.match(/-?\d+/g)?.forEach((v) => (ans += parseInt(v, 10)));
  return ans;
};

console.log(컨트롤제트('1 2 Z 3')); // 4
console.log(컨트롤제트('10 20 30 40')); // 100
console.log(컨트롤제트('10 Z 20 Z 1')); // 1
console.log(컨트롤제트('10 Z 20 Z')); // 0
console.log(컨트롤제트('-1 -2 -3 Z')); // -3

console.log(컨트롤제트2('1 2 Z 3')); // 4
console.log(컨트롤제트2('10 20 30 40')); // 100
console.log(컨트롤제트2('10 Z 20 Z 1')); // 1
console.log(컨트롤제트2('10 Z 20 Z')); // 0
console.log(컨트롤제트2('-1 -2 -3 Z')); // -3
