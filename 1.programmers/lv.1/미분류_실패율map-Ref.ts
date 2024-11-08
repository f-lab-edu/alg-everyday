// https://school.programmers.co.kr/learn/courses/30/lessons/42889

import { sum } from 'lodash';

/**
 * 신규 사용자 급감
 * 동적으로 게임 시간을 늘려서 난이도를 조절
 * 실패율을 구하는 부분 구현
 * - 스테이지에 도달했으나 아직 클리어하지 못한 수(실행을 했다)/ 스테이지에 도달한 수(도달만 했다)
 *
 * N: 전체 스테이지 개수
 * stages: 사용자가 멈춰있는 스테이지 번호가 담긴 배열
 *
 * 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 리턴해라
 *
 * 1 <= N <= 500
 * 1 <= stages.length <= 200,000
 * 1 <= stage <= N + 1 - 현재 도전 중인 스테이지. 즉, N까지는 클리어함
 *
 * 스테이지에 도달한 유저 없으면 실패율은 0
 */

const failure = (N: number, stages: number[]): number[] => {
  //! 스테이지 별 도전 중인 유저의 수 배열
  const yetClearedUsersCounts = Array(N + 1).fill(0);
  stages.forEach((v) => {
    yetClearedUsersCounts[v - 1]++;
  });

  //! 스테이지 별 실패율 배열, index 값 매핑
  const failRateMap = new Map();
  let UsersCountsOnStage = sum(yetClearedUsersCounts);
  const failRates = yetClearedUsersCounts.map((v, idx) => {
    const failRateValue = [v / UsersCountsOnStage]; //| []로 감싸줌으로써 고유의 메모리 값을 가진다.
    failRateMap.set(failRateValue, idx + 1);
    UsersCountsOnStage -= v;
    return failRateValue;
  });

  //! 이 시점에서는 마지막 요소 불필요
  failRates.pop();

  //! 최종 정렬
  failRates.sort((rate1, rate2) => rate2[0] - rate1[0]);

  //! 매핑
  return failRates.map((v) => failRateMap.get(v));
};

const [d14_N1, d14_stages1] = [5, [2, 1, 2, 6, 2, 4, 3, 3]];
const [d14_N2, d14_stages2] = [4, [4, 4, 4, 4, 4]];

console.log(failure(d14_N1, d14_stages1));
console.log(failure(d14_N2, d14_stages2));
