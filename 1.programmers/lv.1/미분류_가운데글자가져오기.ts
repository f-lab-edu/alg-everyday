// 12903

// function solution(s) {
//   let len = s.length;
//   let halfLen = Math.floor((len - 1) / 2);
//   return s.slice(halfLen, halfLen + (len % 2 ? 1 : 2));
// }

// function solution(s) {
//   let len = s.length;
//   let halfLen = Math.floor(len / 2 - 1);
//   return len % 2 ? s[halfLen] : s[halfLen - 1] + s[halfLen];
// }

// function solution(s) {
//   const len = s.length;
//   const mid = Math.floor(len / 2) - (len % 2 ? 1 : 0);
//   return s.slice(mid, mid + 1 + (len % 2) ? 1 : 0);
// }

function 가운데글자가져오기(s: string) {
  const len = s.length;
  const isEven = len % 2 === 0;
  const midIndex = Math.floor(len / 2) - (isEven ? 1 : 0);
  console.log(midIndex);
  return s.slice(midIndex, midIndex + (isEven ? 2 : 1));
}

const str = 'abcde';
console.log(가운데글자가져오기(str));
