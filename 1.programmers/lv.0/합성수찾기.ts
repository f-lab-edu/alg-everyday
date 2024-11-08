// https://school.programmers.co.kr/learn/courses/30/lessons/120846

const 합성수찾기 = (n: number): number => {
  let ans = 0;
  for (let i = 1; i <= n; i++) if (isCompositeNum(i)) ans++;
  return ans;
};

// 합성수인지 아닌지 판별하는 함수
function isCompositeNum(num: number): boolean {
  for (let i = 1, cnt = 0; i * i <= num; i++) {
    if (num % i === 0) cnt++;
    if (cnt >= 2) return true; // cnt >= 2 이면, 약수는 3개 이상이다.
  }
  return false;
}

console.log(합성수찾기(10)); // 5
console.log(합성수찾기(15)); // 8
