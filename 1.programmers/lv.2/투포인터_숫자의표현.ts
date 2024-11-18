// https://school.programmers.co.kr/learn/courses/30/lessons/12924

//! 1. 브루트포스 방식
// 아주 단순하게 모든 가능성을 하나하나 다 해보는 방법
const 숫자의표현 = (n: number): number => {
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    let j = i;
    let sum = 0;
    while (sum < n) {
      sum += j;
      if (sum === n) ans++;
      j++;
    }
  }

  return ans;
};

//! 2. 투 포인터
const 숫자의표현2 = (n: number): number => {
  let ans = 0;
  let start = 1,
    end = 1,
    sum = 1;

  while (start <= n) {
    if (sum === n) {
      ans++;
      sum -= start;
      start++;
    } else if (sum < n) {
      end++;
      sum += end;
    } else {
      sum -= start;
      start++;
    }
  }

  return ans;
};

//! 2. 투 포인터 - 중복 제거
const 숫자의표현3 = (n: number): number => {
  let ans = 0;
  let start = 1,
    end = 1,
    sum = 1;

  while (start <= n) {
    if (sum >= n) {
      if (sum === n) ans++;
      sum -= start;
      start++;
    } else {
      end++;
      sum += end;
    }
  }

  return ans;
};

console.log(숫자의표현(15)); // 4
console.log(숫자의표현2(15)); // 4
console.log(숫자의표현3(15)); // 4

console.time('브루트포스');
console.log(숫자의표현(500000000)); // 10, 4.916ms
console.timeEnd('브루트포스');

console.time('투포인터');
console.log(숫자의표현2(500000000)); // 10, 1.269ms
console.timeEnd('투포인터');
