// 12912

function 두정수사이의합(a: number, b: number) {
  if (b < a) [a, b] = [b, a];
  // let ans = 0;
  // for(let i = a; i<=b; i++){
  //     ans += i;
  // }
  return (b * (1 + b)) / 2 - ((a - 1) * a) / 2;
}
