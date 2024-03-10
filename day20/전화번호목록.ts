// https://school.programmers.co.kr/learn/courses/30/lessons/42577

import { some, startsWith, without } from 'lodash';

// 한 번호가 다른 번호의 접두어인 경우가 있는지 확인
// 배열의 길이는 1,000,000이하
// 문자열의 길이는 20이하

// ver 1. 시간 초과
const 전화번호목록 = (phone_book: string[]): boolean => {
  for (const cmpNums of phone_book) {
    const otherNums = without(phone_book, cmpNums);
    const result = some(otherNums, (nums) => startsWith(nums, cmpNums));
    if (result) return false;
  }
  return true;
};

// ver 2. sort() - 효율성 충족
const 전화번호목록2 = (phone_book: string[]): boolean => {
  phone_book.sort((a, b) => a.localeCompare(b));
  return !phone_book.some((v, i) => {
    if (i === phone_book.length - 1) return false;
    return phone_book[i + 1].startsWith(v);
  });
};

const d20phone_book1 = ['119', '97674223', '1195524421'];
const d20phone_book2 = ['123', '456', '789'];
const d20phone_book3 = ['12', '123', '1235', '567', '88'];

console.log(전화번호목록(d20phone_book1));
console.log(전화번호목록(d20phone_book2));
console.log(전화번호목록(d20phone_book3));

console.log(전화번호목록2(d20phone_book1));
console.log(전화번호목록2(d20phone_book2));
console.log(전화번호목록2(d20phone_book3));
