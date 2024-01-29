// 자연수 뒤집어 배열로 만들기
// 12932

function 자연수뒤집어배열로만들기(n: number) {
  const arr: any[] = [];
  [...String(n)].forEach((v: string) => arr.unshift(parseInt(v, 20)));
  return arr;
}
