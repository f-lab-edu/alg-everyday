// https://school.programmers.co.kr/learn/courses/30/lessons/120891

const solOf369 = (order: number): number => {
  const orderArr = [...order.toString()];
  return orderArr.filter((v) => {
    if (parseInt(v, 10) > 0) return parseInt(v, 10) % 3 === 0;
  }).length;
};

console.log(solOf369(3)); // 1
console.log(solOf369(29423)); // 2
console.log(solOf369(0)); // 2
