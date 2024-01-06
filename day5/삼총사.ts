import { _ } from "../declare";

function 삼총사(num: number[]) {
  const arr: number[][] = [];
  num.forEach((v1) =>
    num.forEach((v2) =>
      num.forEach((v3) => {
        if (v1 + v2 + v3 === 0)
          return arr.push([v1, v2, v3].sort((a, b) => a - b));
      }),
    ),
  );
  return _.uniqWith(arr, _.isEqual).length;
}

const num = [-2, 3, 0, 2, 5];

console.log(삼총사(num));
