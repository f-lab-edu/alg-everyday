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

const 모스부호1js = (letter) => {
  // 코어 로직
  return letter
    .split(' ')
    .map((v) => morse[v])
    .join('');
};

console.log(모스부호1js('.... . .-.. .-.. ---')); // "hello"
console.log(모스부호1js('.--. -.-- - .... --- -.')); // "python"
