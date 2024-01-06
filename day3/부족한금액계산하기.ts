// 82612

function 부족한금액계산하기(price: number, money: number, count: number) {
  const totalFee = (count * price * (1 + count)) / 2;
  return Math.max(0, totalFee - money);
}
