// https://school.programmers.co.kr/learn/courses/30/lessons/42889

import { sum } from "lodash";

//! Tuple 타입을 이용함

const failureTuple = (N: number, stages: number[]): number[] => {
  //! 스테이지 별 도전 중인 유저의 수 배열
  const yetClearedUsersCounts = Array(N + 1).fill(0);
  stages.forEach((v) => {
    yetClearedUsersCounts[v - 1]++;
  });

  //! 스테이지 별 실패율 배열, index 값 매핑
  let UsersCountsOnStage = sum(yetClearedUsersCounts);
  const failRates = yetClearedUsersCounts.map((v, idx) => {
    const failRateValue: [number, number] = [v / UsersCountsOnStage, idx + 1]; //| 튜플 타입 선언
    UsersCountsOnStage -= v;
    return failRateValue;
  });

  //! 이 시점에서는 마지막 요소 불필요
  failRates.pop();

  //! 최종 정렬
  failRates.sort((rateTuple1, rateTuple2) => {
    if (rateTuple1[0] === rateTuple2[0]) return rateTuple1[1] - rateTuple2[1];
    else return rateTuple2[0] - rateTuple1[0];
  });

  //! 매핑
  return failRates.map((v) => v[1]);
};

const [d14_N1, d14_stages1] = [5, [2, 1, 2, 6, 2, 4, 3, 3]];
const [d14_N2, d14_stages2] = [4, [4, 4, 4, 4, 4]];

console.log(failureTuple(d14_N1, d14_stages1));
console.log(failureTuple(d14_N2, d14_stages2));
