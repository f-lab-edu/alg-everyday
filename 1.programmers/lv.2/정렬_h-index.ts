// https://school.programmers.co.kr/learn/courses/30/lessons/42747

// h-index는 과학자의 생산성과 영향력을 나타내는 지표

// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고
// 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

// ver 1. for문 - 20ms 안쪽으로 시간 효율이 나쁘지는 않다. 정렬x
const h_index = (citations: number[]): number => {
  const maxCitationCnt = Math.max(...citations);
  let ans = -1;
  for (let h = 0; h <= maxCitationCnt; h++) {
    // h번 이상 인용된 논문
    const citationsCnt = citations.filter((v) => v >= h).length;
    if (citationsCnt >= h) ans = h;
    else break;
  }
  return ans;
};

// ver 2. 정렬 활용 - 1ms 이하로, ver 1 보다 시간 효율이 굉장히 좋다.
const h_index2 = (citations: number[]): number => {
  // 일단 내림차순 정렬을 하고 본다.
  citations.sort((a, b) => b - a);

  // cnt + 1 : cnt 번째의 논문의 개수
  // citations[cnt] : cnt번째 논문의 인용 횟수
  // 현재 인덱스에 해당하는 논문이 인용된 횟수가 현재 인덱스 + 1 이상이어야 한다
  let cnt = 0;
  while (cnt + 1 <= citations[cnt]) cnt++;
  return cnt;
};

const d23citations1 = [3, 0, 6, 1, 5];
const d23citations2 = [6, 5, 5, 5, 3, 2, 1, 0];

console.log(h_index(d23citations1)); // 3
console.log(h_index(d23citations2)); // 4

console.log(h_index2([6, 5, 5, 5, 3, 2, 1, 0])); // 4
