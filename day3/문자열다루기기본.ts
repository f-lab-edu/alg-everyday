// 12918

// function solution(s) {
//   if ([4, 6].includes(s.length)) {
//     return ![...s].every(isNaN);
//   }
//   return false;
// }

function 문자열다루기기본(s: string) {
  return [4, 6].includes(s.length) && [...s].some((v: any) => isNaN(v));
}
