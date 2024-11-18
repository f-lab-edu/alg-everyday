// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// n 다음 큰 숫자는 n보다 큰 자연수
// n 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다

// n 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수

//! 1. replaceAll
// 메모리 사용량이 상대적으로 적음
// [ ...n.toString(2)].filter((v) => v === '1').length; -> 메모리 사용량이 상대적으로 큼
// 효율성 테스트 통과
const 다음큰숫자 = (n: number): number => {
  const numOfOnes = (num: number) => num.toString(2).replaceAll('0', '').length;

  const targetCnt = numOfOnes(n);
  let nextNum = n + 1;
  while (numOfOnes(nextNum) !== targetCnt) {
    nextNum++;
  }
  return nextNum;
};

console.log(다음큰숫자(78)); // 83
console.log(다음큰숫자(15)); // 23
