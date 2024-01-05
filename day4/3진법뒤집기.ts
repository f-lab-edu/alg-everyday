// 68935

function 진법뒤집기(n: number) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

const n = 45;
console.log(진법뒤집기(n));
