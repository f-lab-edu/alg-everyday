// 12918

// function solution(s) {
//   if ([4, 6].includes(s.length)) {
//     return ![...s].every(isNaN);
//   }
//   return false;
// }

function solution(s) {
  return [4, 6].includes(s.length) && [...s].some(isNaN);
}
