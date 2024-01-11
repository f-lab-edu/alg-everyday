// https://school.programmers.co.kr/learn/courses/30/lessons/159994
const 카드뭉치 = (
  cards1: string[],
  cards2: string[],
  goal: string[],
): string => {
  while (goal.length !== 0)
    if (cards1[0] === goal[0]) {
      cards1.shift();
      goal.shift();
    } else if (cards2[0] === goal[0]) {
      cards2.shift();
      goal.shift();
    } else return "No";
  return "Yes";
};

const [oneCards1, oneCards2, goal1] = [
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"],
];
const [twoCards1, twoCards2, goal2] = [
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"],
];

console.log(카드뭉치(oneCards1, oneCards2, goal1));
console.log(카드뭉치(twoCards1, twoCards2, goal2));

const arr = [1, 2, 3, 4];
arr.shift();
console.log(arr);
