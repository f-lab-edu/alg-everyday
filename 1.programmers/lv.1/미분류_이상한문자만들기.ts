// 12930

function 이상한문자만들기(s: string) {
  return s
    .split(' ')
    .map((v) => [...v].map((a, i) => (i % 2 === 0 ? a.toUpperCase() : a.toLowerCase())).join(''))
    .join(' ');
}
