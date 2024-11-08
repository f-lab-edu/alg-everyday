// https://school.programmers.co.kr/learn/courses/30/lessons/42576

import { difference } from 'lodash';

//| 해시 알고리즘 : 키 - 값 데이터 구조를 활용

// runners : 마라톤에 참여한 선수들 이름
// cmpRunners : 완주한 선수들의 이름

// cmpRunners의 길이는 runners보다 1 작다
// 참가자 이름음 알파벳 소문자
// 동명이인이 있을 수 있다 (다수) -> 이 부분을 처리하는 것이 관건

// //! 1st ver. 실행 함수
const uncompletedRunner = (runners: string[], cmpRunners: string[]): string => {
  //! 동명이인이 없는 경우
  // lodash 연습용. 비즈니스 로직에서는 공간만 차지할 수도...?!
  // 하지만, 가독성은 제일 좋고 조건 하에 결과도 확실하다.
  const diff = difference(runners, cmpRunners);
  if (diff.length !== 0) return diff[0];

  //! 동명이인이 있는 경우
  //| {이름 -> 이름 수}로 매핑하는 함수
  const cntNameMapping = (map: Map<string, number>, names: string[]): void => {
    names.forEach(name => map.set(name, (map.get(name) ?? 0) + 1));
  };

  //! 코어 로직
  const runnersMap = new Map();
  const cmpRunnersMap = new Map();
  cntNameMapping(runnersMap, runners);
  cntNameMapping(cmpRunnersMap, cmpRunners);
  for (const runner of runners) {
    if (runnersMap.get(runner) !== cmpRunnersMap.get(runner)) return runner;
  }

  // 이 코드에 도달하기 전에 리턴값은 확실하게 존재한다.
  throw new Error('string 타입이 반환되지 않았습니다.');
};

//! 2nd ver. 실행 함수
const uncompletedRunner2 = (runners: string[], cmpRunners: string[]): string => {
  //! 동명이인이 없는 경우
  // lodash 연습용. 비즈니스 로직에서는 공간만 차지할 수도...?!
  // 하지만, 가독성은 제일 좋고 조건 하에 결과도 확실하다.
  const diff = difference(runners, cmpRunners);
  if (diff.length !== 0) return diff[0];

  //! 동명이인이 있는 경우
  //| {이름 -> 이름 수}로 매핑하는 함수
  const cntNameMapping = (map: Map<string, number>, name: string): void => {
    map.set(name, (map.get(name) ?? 0) + 1);
  };

  //! 코어 로직
  const runnersMap = new Map();
  const cmpRunnersMap = new Map();
  runners.forEach(name => cntNameMapping(runnersMap, name));
  cmpRunners.forEach(name => cntNameMapping(cmpRunnersMap, name));
  for (const runner of runners) {
    if (runnersMap.get(runner) !== cmpRunnersMap.get(runner)) return runner;
  }

  // 이 코드에 도달하기 전에 리턴값은 확실하게 존재한다.
  throw new Error('string 타입이 반환되지 않았습니다.');
};

const [runners1, cmpRunners1] = [
  ['leo', 'kiki', 'eden'],
  ['eden', 'kiki'],
];
const [runners2, cmpRunners2] = [
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola'],
];
const [runners3, cmpRunners3] = [
  ['mislav', 'stanko', 'mislav', 'ana'],
  ['stanko', 'ana', 'mislav'],
];
const [runners4, cmpRunners4] = [
  ['mislav', 'stanko', 'mislav', 'ana', 'jack', 'ana', 'ana'],
  ['stanko', 'ana', 'mislav', 'mislav', 'jack', 'ana'],
];

console.log(uncompletedRunner(runners1, cmpRunners1)); // 'leo'
console.log(uncompletedRunner(runners2, cmpRunners2)); // 'vinko'
console.log(uncompletedRunner(runners3, cmpRunners3)); // 'mislav'
console.log(uncompletedRunner(runners4, cmpRunners4)); // 'ana'
console.log('---');
console.log(uncompletedRunner2(runners1, cmpRunners1)); // 'leo'
console.log(uncompletedRunner2(runners2, cmpRunners2)); // 'vinko'
console.log(uncompletedRunner2(runners3, cmpRunners3)); // 'mislav'
console.log(uncompletedRunner2(runners4, cmpRunners4)); // 'ana'
