function solution(num: number[]) {
  const arr: number[][] = [];
  num.map((v1) =>
    num.map((v2) =>
      num.map(
        (v3) =>
          v1 + v2 + v3 === 0 && arr.push([v1, v2, v3].sort((a, b) => a - b)),
      ),
    ),
  );
  return _.uniqWith(arr, _.isEqual).length;
}

const num = [-2, 3, 0, 2, 5];

console.log(solution(num));

// map에서 외부변수를 변경하는 일을 피합시다. 이유에 대해선 다음 멘토링때 얘기해봅시다.
// return값을 사용하지 않는 map은 의심스러워 보입니다.
