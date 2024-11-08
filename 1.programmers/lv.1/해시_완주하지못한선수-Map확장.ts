// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 2. Map 확장
const uncompletedRunnerMap = (runners: string[], cmpRunners: string[]): string => {
  const runnersMap = new ExtendedMap();
  const cmpRunnersMap = new ExtendedMap();
  runners.forEach(runnersMap.increase);
  cmpRunners.forEach(cmpRunnersMap.increase);
  for (const runner of runners) {
    if (runnersMap.get(runner) !== cmpRunnersMap.get(runner)) return runner;
  }
  throw new Error('string 타입이 반환되지 않았습니다.');
};

// ExtendedMap 클래스 정의
class ExtendedMap extends Map {
  // callbackfn: (value: string, index: number, array: string[]) => void
  increase = (name: string): void => {
    this.set(name, (this.get(name) ?? 0) + 1);
  };
}

const [runnersMap1, cmpRunnersMap1] = [
  ['leo', 'kiki', 'eden'],
  ['eden', 'kiki'],
];
const [runnersMap2, cmpRunnersMap2] = [
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola'],
];
const [runnersMap3, cmpRunnersMap3] = [
  ['mislav', 'stanko', 'mislav', 'ana'],
  ['stanko', 'ana', 'mislav'],
];
const [runnersMap4, cmpRunnersMap4] = [
  ['mislav', 'stanko', 'mislav', 'ana', 'jack', 'ana', 'ana'],
  ['stanko', 'ana', 'mislav', 'mislav', 'jack', 'ana'],
];

console.log(uncompletedRunnerMap(runnersMap1, cmpRunnersMap1)); // 'leo'
console.log(uncompletedRunnerMap(runnersMap2, cmpRunnersMap2)); // 'vinko'
console.log(uncompletedRunnerMap(runnersMap3, cmpRunnersMap3)); // 'mislav'
console.log(uncompletedRunnerMap(runnersMap4, cmpRunnersMap4)); // 'ana'
