// https://school.programmers.co.kr/learn/courses/30/lessons/120924

// 등차수열 아니면 등비수열이여서 아래와 같은 코드 방식을 그냥 if-else 문으로 처리할 수도 있다.
const 다음에올숫자 = (common: number[]): number => {
  const isArithmeticSequence = (arr: number[]): boolean => {
    const num1 = arr[1] - arr[0];
    const num2 = arr[2] - arr[1];
    return num1 === num2;
  };
  const isGeometricSequence = (arr: number[]): boolean => {
    const num1 = arr[1] / arr[0];
    const num2 = arr[2] / arr[1];
    return num1 === num2;
  };
  if (isArithmeticSequence(common)) {
    return (common.at(-1) as number) + common[1] - common[0];
  }
  if (isGeometricSequence(common)) {
    return (common.at(-1) as number) * (common[1] / common[0]);
  }
  throw new Error('올바른 배열이 아닙니다.');
};

console.log(다음에올숫자([1, 2, 3, 4])); // 5
console.log(다음에올숫자([2, 4, 8])); // 16
