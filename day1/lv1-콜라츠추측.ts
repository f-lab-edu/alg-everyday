// 12943

function 콜라추측(num: number) {
  let count = 0;
  while (num !== 1) {
    if (count === 500) return -1;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }
  return count;
}
