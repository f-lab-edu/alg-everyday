// https://school.programmers.co.kr/learn/courses/30/lessons/42584

import { takeWhile } from 'lodash';

// pirces : 초 단위로 기록된 주식가격이 담긴 배열
// 가격이 떨어지지 않은 기간은 몇 초인가?

// 1 <= price <= 10,000
// 2 <= prices.length <= 100,000

const 주식가격 = (prices: number[]): number[] => {
  //! price 요소 별로 가격이 떨어지지 않은 기간을 구하는 함수
  const noDropSeconds = (selectedPrice: number, idx: number) => {
    //! takeWhile 함수의 시작 부분 설정을 위한 배열
    //| const trimmedPrices = prices.slice(idx);
    //| const twPrices = takeWhile(trimmedPrices, (price: number) => selectedPrice <= price);
    const trimmedPrices = prices.slice(idx);
    const twPrices = takeWhile(trimmedPrices, (price: number) => selectedPrice <= price);
    const twPricesLen = twPrices.length;
    // 해당 price가 끝까지 가격이 떨어지지 않는다면 배열 끝까지 순회한다.
    // console.log('\nidx', idx);
    // console.log('trimmedPrices', trimmedPrices);
    // console.log('twPrices', twPrices);
    return trimmedPrices.length === twPricesLen ? twPricesLen - 1 : twPricesLen;
  };

  //! 코어 로직
  return prices.map((price, idx) => noDropSeconds(price, idx));
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
