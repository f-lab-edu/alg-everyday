// 100,000 x 100,000 의 크기를 가지는 좌석

import { isEqual, uniqWith } from 'lodash';

// seat: 원하는 좌석이 행렬로 담긴 배열
// 좌석이 이미 판매되었을 경우, 집으로 돌아간다.
// 좌석이 남아있을 경우, 구매한다.

// 판매된 좌석의 수를 구한다.
// seat의 크기는 100,000 이하

// 좌석은
// 가로 1~100,000
// 세로 1~100,000
type Tuple = [number, number];

//! 제출 코드
const seat = (seat: Tuple[]): number => {
  // 6자리 문자열로 변환
  const numToStrWith6Pads = (num: number) => num.toString().padStart(6, '0');

  // 행렬 배열을 12자리 시리얼 넘버로 표현
  const serializingMatrix = ([row, col]: Tuple) => numToStrWith6Pads(row) + numToStrWith6Pads(col);

  //  serializedSeat: seat 배열 요소를 시리얼 넘버화한 배열
  const serializedSeat = seat.map(serializingMatrix);

  // Set 객체로 중복 제거
  const seatSet = new Set(serializedSeat);

  return seatSet.size;
};

//! 개선 코드
const seat2 = (seat: Tuple[]): number => {
  //  serializedSeat: seat 배열 요소를 `${row},${col}로 문자열화 시킨다.
  const serializedSeat = seat.map(([row, col]) => `${row},${col}`);

  // Set 객체로 중복 제거
  const seatSet = new Set(serializedSeat);
  return seatSet.size;
};

//! 개선 코드 - lodash
const seat3 = (seat: Tuple[]): number => {
  return uniqWith(seat, isEqual).length;
};

const day27seat1: Tuple[] = [
  [1, 1],
  [2, 1],
  [3, 1],
];

const day27seat2: Tuple[] = [
  [1, 1],
  [2, 1],
  [1, 2],
  [2, 2],
  [2, 1],
  [1, 1],
];

console.log(seat(day27seat1));
console.log(seat(day27seat2));

console.log(seat2(day27seat1));
console.log(seat2(day27seat2));

console.log(seat3(day27seat1));
console.log(seat3(day27seat2));
