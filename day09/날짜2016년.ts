// https://school.programmers.co.kr/learn/courses/30/lessons/12901
// 윤년임

import { _ } from "../declare";

// O(n)
const whatDay = (month: number, day: number): string => {
  const daysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayString = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const days = _.sum(daysPerMonth.slice(0, month - 1)) + day;
  return dayString[((days % 7) + 6) % 7];
  // return dayString[days % 7 ? (days % 7) - 1 : 6];
};

// O(k);
// const whatDay = (month: number, day: number): string => {
//   return (new Date("2016-" + month + "-" + day) + "")
//     .split(" ")[0]
//     .toUpperCase();
// };

const [day9month1, day9day1] = [5, 24];
const [day9month2, day9day2] = [9, 1];
const [day9month3, day9day3] = [1, 6];
const [day9month4, day9day4] = [3, 3];

console.log(whatDay(day9month1, day9day1)); // "TUE"
console.log(whatDay(day9month2, day9day2)); // "THU"
console.log(whatDay(day9month3, day9day3)); // "WED"
console.log(whatDay(day9month4, day9day4)); // "THU"
