// https://school.programmers.co.kr/learn/courses/30/lessons/70129

const 이진변환반복하기 = (s: string): [number, number] => {
  let conversionCnt = 0;
  let zeroCnt = 0;

  while (s !== '1') {
    const removedArr = [...s].filter((n) => n === '1');
    const removedArrLen = removedArr.length;

    zeroCnt += s.length - removedArrLen;
    conversionCnt++;

    s = removedArrLen.toString(2);
  }

  return [conversionCnt, zeroCnt];
};

console.log(이진변환반복하기('110010101001')); // [3,8]
console.log(이진변환반복하기('01110')); // [3,3]
console.log(이진변환반복하기('1111111')); // [4,1]
