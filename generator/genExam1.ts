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

//| 결론
// "함수1"과 "함수3"의 시간 효율은 비슷하다. 다만, "함수3"은 각 값의 호출 시점을 조절할 수 있다.
// "함수2"는 시간 효율도 떨어지며, RangeError를 발생시키기도 한다.

//! 1. 반복문
function* permutation1(length: number) {
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
console.time('1의 실행 시간');
const gen = permutation1(11);
for (const value of gen) {
  // console.log(value);
}
console.timeEnd('1의 실행 시간');
// ------------------------------------------------------------------------------------------------

//! 2. 재귀 호출 ver1
// function permutation2(length: number, n?: number): Generator
function* permutation2(length: number, n = 0): Generator {
  const map = new Map();
  map.set('0', 'a');
  map.set('1', 'b');
  yield [...n.toString(2).padStart(length, '0')].map((v) => map.get(v)).join('');
  if (n === 2 ** length - 1) return;
  yield* permutation2(length, n + 1);
}

console.log(`\n2. 재귀 호출을 활용한 제너레이터 ver1`);
console.time('2의 실행 시간');
const gen2 = permutation2(15);
try {
  for (const value of gen2) {
    console.log(value);
  }
} catch (error: unknown) {
  if (error instanceof Error) console.log(error.message);
  else console.log('알 수 없는 에러 발생');
}
console.timeEnd('2의 실행 시간');
// Q. 호출 스택의 한계를 감지하는 방법은? try-catch문
// ------------------------------------------------------------------------------------------------

//! 3. 재귀 호출 ver2
//| length만 인수로 받는 제너레이터 함수
// 명목상 제너레이터 함수 (...?)
function* permutation3(length: number): Generator {
  yield* permGen(length, ''); // - (0)

  //| 코어 로직을 실행하는 진짜 제너레이터 함수
  function* permGen(length: number, str: string): Generator {
    if (str.length === length) {
      yield str;
      return;
    }
    yield* permGen(length, str + 'a'); // - (1)
    yield* permGen(length, str + 'b'); // - (2)
  }
}

console.log(`\n3. 재귀 호출을 활용한 제너레이터 ver2`);
console.time('3의 실행 시간');
const gen3 = permutation3(11);
for (const value of gen3) {
  // console.log(value);
}
console.timeEnd('3의 실행 시간');

//! 4. 모범 답안
function* permutation4(length: number): Generator {
  if (length === 0) return yield '';

  for (const i of permutation4(length - 1)) {
    yield 'a' + i;
  }
  for (const i of permutation4(length - 1)) {
    yield 'b' + i;
  }
  // for(const i of permutation4(length - 1)) {
  //   yield 'a' + i;
  //   yield 'b' + i;
  // }
  // 출력 순서가 이쁘지 않기 때문에 따로따로 for문을 순회한다.
}

//! 2안
// 배열의 크기로 메모리 효율이 떨어진다.
function permutation5(length: number): string[] {
  // 제너레이터 map
  function* map() {
    // 상세 코드는 이전 과제에...
  }

  if (length === 0) return [''];
  return permutation5(length - 1)
    .map((x) => 'a' + x)
    .concat(permutation5(length - 1).map((x) => 'b' + x));
}
