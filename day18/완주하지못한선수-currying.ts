// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 1. cntNameMapping의 정의를 수정하여
// runners.forEach(cntNameMapping(runnersMap)); 처럼 표현하기
// 관련 개념: 커링(curring)
const uncompletedRunnerCurrying = (runners: string[], cmpRunners: string[]): string => {
  // 같은 이름이 있다면 숫자를 증가해서 부여하는 함수
  const cntNameMapping =
    (map: Map<string, number>) =>
    (name: string): void => {
      map.set(name, (map.get(name) ?? 0) + 1);
    };

  // core
  const runnersMap = new Map();
  const cmpRunnersMap = new Map();
  runners.forEach(cntNameMapping(runnersMap));
  cmpRunners.forEach(cntNameMapping(cmpRunnersMap));
  for (const runner of runners) {
    if (runnersMap.get(runner) !== cmpRunnersMap.get(runner)) return runner;
  }
  throw new Error('string 타입이 반환되지 않았습니다.');
};

const [runnersCurrying1, cmpRunnersCurrying1] = [
  ['leo', 'kiki', 'eden'],
  ['eden', 'kiki'],
];
const [runnersCurrying2, cmpRunnersCurrying2] = [
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola'],
];
const [runnersCurrying3, cmpRunnersCurrying3] = [
  ['mislav', 'stanko', 'mislav', 'ana'],
  ['stanko', 'ana', 'mislav'],
];
const [runnersCurrying4, cmpRunnersCurrying4] = [
  ['mislav', 'stanko', 'mislav', 'ana', 'jack', 'ana', 'ana'],
  ['stanko', 'ana', 'mislav', 'mislav', 'jack', 'ana'],
];

console.log(uncompletedRunnerCurrying(runnersCurrying1, cmpRunnersCurrying1)); // 'leo'
console.log(uncompletedRunnerCurrying(runnersCurrying2, cmpRunnersCurrying2)); // 'vinko'
console.log(uncompletedRunnerCurrying(runnersCurrying3, cmpRunnersCurrying3)); // 'mislav'
console.log(uncompletedRunnerCurrying(runnersCurrying4, cmpRunnersCurrying4)); // 'ana'
