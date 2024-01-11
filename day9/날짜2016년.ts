// https://school.programmers.co.kr/learn/courses/30/lessons/12901
// 윤년임

// O(n)
// const whatDay = (month: number, day: number): string => {
//   const daysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   const dayString = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
//   const days = _.sum(daysPerMonth.slice(0, month - 1)) + day;
//   return dayString[days % 7 ? (days % 7) - 1 : 6];
// };

// O(k)
const whatDay = (month: number, day: number): string => {
  return (new Date("2016-" + month + "-" + day) + "")
    .split(" ")[0]
    .toUpperCase();
};

// const [month, day] = [5, 24];
const [month, day] = [9, 1];

console.log(whatDay(month, day)); // "TUE"
