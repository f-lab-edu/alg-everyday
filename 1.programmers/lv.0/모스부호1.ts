// https://school.programmers.co.kr/learn/courses/30/lessons/120838
const morse = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
};

//! js 코드도 확인하자.

// ver 1. 최초 코드
const 모스부호1a = (letter: string): string => {
  // Map 객체 선언
  const morseMap = new Map();
  for (const [key, value] of Object.entries(morse)) {
    morseMap.set(key, value);
  }
  // 코어 로직
  return letter
    .split(' ')
    .map((v) => morseMap.get(v))
    .join('');
};

// ver 2. Map 객체를 초기화하는 과정에서 불필요한 반복문 제거
const 모스부호1b = (letter: string): string => {
  // Map 객체 선언
  const morseMap = new Map(Object.entries(morse));

  // 코어 로직
  return letter
    .split(' ')
    .map((v) => morseMap.get(v) || '') //| 빈 문자열일 경우를 처리
    .join('');
};

console.log(모스부호1a('.... . .-.. .-.. ---')); // "hello"
console.log(모스부호1a('.--. -.-- - .... --- -.')); // "python"

console.log(모스부호1b('.... . .-.. .-.. ---')); // "hello"
console.log(모스부호1b('.--. -.-- - .... --- -.')); // "python"
