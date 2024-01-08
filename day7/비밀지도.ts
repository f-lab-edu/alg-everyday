// https://school.programmers.co.kr/learn/courses/30/lessons/17681
import { _ } from "../declare";
const 비밀지도 = (n: number, arr1: number[], arr2: number[]) => {
  // 이진수로 변환하는 함수
  const binaryArr = (arr: number[]) =>
    arr.map((v) => "0".repeat(n - v.toString(2).length) + v.toString(2));
  const binaryArr1 = binaryArr(arr1); // [ '01001', '10100', '11100', '10010', '01011' ]
  const binaryArr2 = binaryArr(arr2); // [ '11110', '00001', '10101', '10001', '11100' ]

  return _.zipWith(binaryArr1, binaryArr2, (v1: string, v2: string) =>
    _.zipWith([...v1], [...v2], (val1: string, val2: string) =>
      parseInt(val1, 10) + parseInt(val2, 10) === 0 ? " " : "#",
    ).join(""),
  );
};

const n1 = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
console.log(비밀지도(n1, arr1, arr2));
