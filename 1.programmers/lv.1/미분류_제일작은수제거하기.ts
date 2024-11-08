// 12935

// eslint-disable-next-line unused-imports/no-unused-vars
function 제일작은수제거하기(arr: any[]) {
  if (arr.length === 1) return [-1];

  const smallestNum = [...arr].sort((a, b) => a - b)[0];
  const smallestIndex = arr.findIndex((v) => v === smallestNum);
  arr.splice(smallestIndex, 1);
  return arr;
}
