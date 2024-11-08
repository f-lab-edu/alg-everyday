// https://school.programmers.co.kr/learn/courses/30/lessons/17680

// 캐시 크기를 얼마로 해야 적절할까
// 캐시 크기에 따른 실행시간 측정 프로그램
// 0 <= cacheSize <= 30
// cities는 최대 100,000개
// 도시이름은 공백,숫자,특수문자 없음. 대소문자구분 안함. 최대 20자.

// 캐시 교체 알고리즘은 LRU(Least Recently Used)

// cache hit일 경우, 실행 시간은 1
// -> cache에 해당 도시가 이미 적재되어 있어, 바로 불러올 수 있는 경우

// cache miss일 경우, 실행 시간은 5
// -> cache에 해당 도시가 적재되어 있지 않아, 새로 불로와야 하는 경우

const cache = (cacheSize: number, cities: string[]): number => {
  //! cache가 0일 때
  if (!cacheSize) return 5 * cities.length;

  //! cache 스택 자료 구조
  let runTime = 0;
  const cacheArr: string[] = [];

  //! cacheHit 함수
  const cacheHit = (idx: number, str: string) => {
    cacheArr.splice(idx, 1);
    cacheArr.push(str);
    runTime += 1;
  };
  //! cacheMiss 함수
  const cacheMiss = (str: string) => {
    cacheArr.push(str);
    runTime += 5;
  };
  //! handleCache 함수 - 활용하지 못함
  // const handleCache = (idx: number, str: string): void => {
  //   if (idx >= 0) cacheHit(idx, str);
  //   else cacheMiss(str);
  // };

  //! 메인 코드
  for (const city of cities) {
    const lowerCity = city.toLocaleLowerCase();
    const cityIdxAtCacheArr = cacheArr.indexOf(lowerCity);
    // cacheArr에 빈 공간이 있을 때
    if (cacheArr.length < cacheSize) {
      if (cityIdxAtCacheArr >= 0) cacheHit(cityIdxAtCacheArr, lowerCity);
      else cacheMiss(lowerCity);
    } else {
      // cacheArr에 빈 공간이 없을 때
      if (cityIdxAtCacheArr >= 0) cacheHit(cityIdxAtCacheArr, lowerCity);
      else {
        cacheArr.shift();
        cacheMiss(lowerCity);
      }
    }
  }
  return runTime;
};

const [cacheSize1, cities1] = [
  3,
  ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'],
];

const [cacheSize2, cities2] = [3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']];
const [cacheSize3, cities3] = [
  2,
  ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'],
];
const [cacheSize4, cities4] = [
  5,
  ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'],
];
const [cacheSize5, cities5] = [2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']];
const [cacheSize6, cities6] = [0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']];
const [cacheSize7, cities7] = [3, ['Jeju', 'Jeju', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']];

console.log(cache(cacheSize1, cities1)); // 50
console.log(cache(cacheSize2, cities2)); // 21
console.log(cache(cacheSize3, cities3)); // 60
console.log(cache(cacheSize4, cities4)); // 52
console.log(cache(cacheSize5, cities5)); // 16
console.log(cache(cacheSize6, cities6)); // 25
console.log(cache(cacheSize7, cities7)); // 27
