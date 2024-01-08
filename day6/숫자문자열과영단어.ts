// https://school.programmers.co.kr/learn/courses/30/lessons/81301

import { _ } from "../declare";
const numArr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const map = new Map();
map.set("zero", 0);
map.set("one", 1);
map.set("two", 2);
map.set("three", 3);
map.set("four", 4);
map.set("five", 5);
map.set("six", 6);
map.set("seven", 7);
map.set("eight", 8);
map.set("nine", 9);

const 숫자문자열과영단어 = (s: string) => {
  numArr.forEach((v) => {
    s = _.replace(s, v, map.get(v));
  });
  return s;
};

const s1 = "one4seveneight";
console.log(숫자문자열과영단어(s1));
