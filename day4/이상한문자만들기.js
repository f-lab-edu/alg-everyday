// 12930

function solution(s) {
  return s
    .split(' ')
    .map((v) => [...v].map((a, i) => (i % 2 === 0 ? a.toUpperCase() : a.toLowerCase())).join(''))
    .join(' ');
}
