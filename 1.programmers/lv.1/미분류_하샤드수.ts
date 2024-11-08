// 12947

// eslint-disable-next-line unused-imports/no-unused-vars
function 하샤드수(x: number) {
  const sum = [...String(x)].reduce((acc, b) => acc + parseInt(b, 10), 0);
  return x % sum === 0;
}
