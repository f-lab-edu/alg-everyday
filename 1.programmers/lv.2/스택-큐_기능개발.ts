// https://school.programmers.co.kr/learn/courses/30/lessons/42586

import { zip } from 'lodash';

// 각 기능은 진도가 100% 일 때, 서비스 반영 가능
// 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있다.
// 뒤에 있는 기능은 앞에 있는 기능이 배포될 떄 함께 배포된다.

// progresses : 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 배열 ( 1<= p < 100 )
// speeds : 각 작업의 개발 속도가 적힌 정수 배열 ( 1 <= s <= 100)

// return : 배포마다 배포되는 기능 수 배열

// 배포는 하루에 한 번, 하루의 끝에

const 기능개발 = (prgs: number[], speeds: number[]): number[] => {
  //! prgs와 speeds의 요소를 Tuple 구조로 가지는 배열 생성 - 전처리 가공
  const prgSpeedTuples = zip(prgs, speeds);
  console.log(prgSpeedTuples);

  //! 각 progress마다 배포까지 거리는 기간
  const requiringDays = prgSpeedTuples.map(([prg, speed]) => {
    const leftPrg = 100 - prg!; // Non-null Assertion Operator
    const requiringDay = Math.ceil(leftPrg / speed!); // Non-null Assertion Operator
    return requiringDay;
  });
  console.log('requiringDays:', requiringDays);

  //! 배포가 가능한 날 배포되는 기능의 개수 배열
  const deploysPerDay = [];
  for (let idx = 1, dayCnt = 1, maxDelayedDay = requiringDays[0]; idx <= requiringDays.length; idx++) {
    if (maxDelayedDay >= requiringDays[idx]) dayCnt += 1;
    else {
      deploysPerDay.push(dayCnt);
      maxDelayedDay = requiringDays[idx] || -1;
      dayCnt = 1;
    }
  }
  return deploysPerDay;
};

const [progresses1, speeds1] = [
  [93, 30, 55],
  [1, 30, 5],
];
const [progresses2, speeds2] = [
  [95, 90, 99, 99, 80, 99],
  [1, 1, 1, 1, 1, 1],
];
const [progresses3, speeds3] = [
  [95, 95, 95, 95],
  [5, 4, 3, 1],
];

console.log('기능개발1: ', 기능개발(progresses1, speeds1)); // [2, 1]
console.log('기능개발2: ', 기능개발(progresses2, speeds2)); // [1, 3, 2]
console.log('기능개발3: ', 기능개발(progresses3, speeds3)); // [1, 2, 1]
