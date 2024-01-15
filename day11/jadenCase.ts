// https://school.programmers.co.kr/learn/courses/30/lessons/12951

const jadenCase = (s: string): string => {
  const strArr = s.toLocaleLowerCase().split(" ");
  return strArr
    .map((str) => str.charAt(0).toLocaleUpperCase() + str.slice(1))
    .join(" ");
};

const jaden1 = "3people unFollowed me";
const jaden2 = "for the last week";

console.log(jadenCase(jaden1));
console.log(jadenCase(jaden2));
