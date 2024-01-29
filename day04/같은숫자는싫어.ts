//12906

function 같은숫자는싫어(arr: number[]) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}
