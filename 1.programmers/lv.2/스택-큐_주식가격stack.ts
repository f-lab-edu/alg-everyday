// https://school.programmers.co.kr/learn/courses/30/lessons/42584

import { first } from 'lodash';

// pirces : 초 단위로 기록된 주식가격이 담긴 배열
// 가격이 떨어지지 않은 기간은 몇 초인가?

// 1 <= price <= 10,000
// 2 <= prices.length <= 100,000

//! 1st 버전 - silce 미사용 : 효율성 테스트 통과
// const 주식가격 = (prices: number[]): number[] => {
//   const pricesLen = prices.length;

//   //! price 요소 별로 가격이 떨어지지 않은 기간을 구하는 함수
//   const nonDropSeconds = (selectedPrice: number, idx: number) => {
//     // i가 pricesLen-1인 경우 = prices 배열의 마지막 요소를 검사하는 경우
//     // 마지막 요소는 검사할 필요가 없다.
//     let sec = 0;
//     for (let i = idx; i < pricesLen - 1; i++) {
//       if (selectedPrice <= prices[i]) sec++;
//       else break;
//     }
//     return sec;
//   };
//   // 코어 로직
//   return prices.map((price, idx) => nonDropSeconds(price, idx));
// };

//! 2nd 버전 - slice 사용 : 효율성 테스트 실패
const 주식가격 = (prices: number[]): number[] => {
  return prices.map((_, idx) => {
    const slPrices = prices.slice(idx);
    let sec = 0;
    for (let i = 0; i < slPrices.length - 1; i++) {
      if (first(slPrices)! <= slPrices[i]) sec++;
      else break;
    }
    return sec;
  });
};

const prices1 = [1, 2, 3, 2, 3];
const prices2 = [1, 2, 3, 4, 5, 6, 1, 1, 2, 3, 1, 2, 3];
const prices3 = [1, 2, 3, 4, 1];
const prices4 = [5, 4, 3, 2, 5];
const prices5 = [1, 2, 3, 2, 3, 1];

console.log(주식가격(prices1)); // [4, 3, 1, 1, 0]
console.log(주식가격(prices2)); // [12, 5, 4, 3, 2, 1, 6, 5, 2, 1, 2, 1, 0]
console.log(주식가격(prices3)); // [4, 3, 2, 1, 0]
console.log(주식가격(prices4)); // [1, 1, 1, 1, 0]
console.log(주식가격(prices5)); // [5, 4, 1, 2, 1, 0]
