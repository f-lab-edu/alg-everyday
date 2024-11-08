// https://school.programmers.co.kr/learn/courses/30/lessons/120871

// 3이라는 숫자를 가지고 있는지 확인하기 위해서 본 문제에서는 정규식까지 갈 필요는 없다.

// ver 1. 100까지의 3x진법 수 만들어 놓기
// n이 1~100이라는 제한사항 덕분에 구현 가능
const 저주의숫자3a = (n: number): number => {
  const newNum = [];
  let number = 1;
  while (newNum.length <= 100) {
    if (!number.toString().includes('3') && number % 3 !== 0) newNum.push(number);
    number++;
  }
  return newNum[n - 1];
};

//! ver2. n 숫자까지만 순회하도록 개선하기
const 저주의숫자3b = (n: number): number => {
  let number = 1;
  let ans = 1;
  while (ans <= n) {
    if (!number.toString().includes('3') && number % 3 !== 0) ans++;
    number++;
  }
  return number - 1;
};

// ver 3. 다른 사람의 코드 1
// 메모리 측면에서 안전하지 않음
const 저주의숫자3c = (n: number): number => {
  return [...Array(n * 3)].map((_, i) => i + 1).filter((num) => num % 3 !== 0 && !num.toString().includes('3'))[n - 1];
};

//! ver 4. 다른사람의 코드 2
// 메모리 측면에서 안전함. ver 2와 유사한 로직이지만, 더 이해하기 좋음
const 저주의숫자3d = (n: number): number => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) n++;
    if (String(i).includes('3') && i % 3 !== 0) n++;
  }
  return n;
};

console.log(저주의숫자3a(15)); // 25
console.log(저주의숫자3a(40)); // 76

console.log(저주의숫자3b(15)); // 25
console.log(저주의숫자3b(40)); // 76

//| 실험소===========================================================================
console.time('My Sol');
console.log(저주의숫자3b(5000000));
console.timeEnd('My Sol');

console.time('other Sol 1');
console.log(저주의숫자3c(5000000));
console.timeEnd('other Sol 1');

console.time('other Sol 2');
console.log(저주의숫자3d(5000000));
console.timeEnd('other Sol 2');

// <--- JS stacktrace --->
// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
// ----- Native stack trace -----
//| ver 3 의 경우, n이 50,000,000 일 때 메모리 측면에서 에러가 난다.
//| 또한, n이 5,000,000 만 되어도 undefined 값이 나오는 문제가 있다.
