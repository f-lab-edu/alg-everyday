// 82612

function solution(price, money, count) {
  let totalFee = (count * price * (1 + count)) / 2;
  return Math.max(0, totalFee - money);
}
