// 12935

function solution(arr) {
  if (arr.length === 1) return [-1];

  const smallestNum = [...arr].sort((a, b) => a - b)[0];
  const smallestIndex = arr.findIndex((v) => v === smallestNum);
  arr.splice(smallestIndex, 1);
  return arr;
}
