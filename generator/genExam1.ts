// 길이 n의 "a" "b"의 조합을 모두 yield하는 제네레이터를 만들기
// n = 3
// "aaa"
// "aab"
// "aba"
// "abb"
// "baa"
// "bab"
// "bba"
// "bbb"
// 키워드: 재귀 호출

// 1. 반복문
function* perm(length: number) {
  const map = new Map();
  map.set('0', 'a');
  map.set('1', 'b');
  let n = 0;
  while (n < 2 ** length) {
    yield [...n.toString(2).padStart(length, '0')].map((v) => map.get(v)).join('');
    n++;
  }
}

console.log(`1. 반복문을 활용한 제너레이터`);
const gen = perm(3);
for (const value of gen) {
  console.log(value);
}

// 2. 재귀 호출
// function perm2(length: number, n?: number): Generator
function* perm2(length: number, n = 0): Generator {
  const map = new Map();
  map.set('0', 'a');
  map.set('1', 'b');
  yield [...n.toString(2).padStart(length, '0')].map((v) => map.get(v)).join('');
  if (n === 2 ** length - 1) return;
  yield* perm2(length, n + 1);
}

console.log(`\n2. 재귀 호출을 활용한 제너레이터`);
const gen2 = perm2(3);
for (const value of gen2) {
  console.log(value);
}
