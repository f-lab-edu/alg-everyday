// https://school.programmers.co.kr/learn/courses/30/lessons/134240

const 푸드파이트대회 = (food: number[]) => {
  const usableFoodForHalf = food.map((v) => Math.floor(v / 2));
  const foodArr = [];

  for (const foodIdx in usableFoodForHalf) {
    const foodCnt = usableFoodForHalf[foodIdx];
    foodCnt && foodArr.push(foodIdx.repeat(foodCnt));
  }

  return foodArr.join("") + "0" + foodArr.reverse().join("");
};

const food1 = [1, 3, 4, 6];
const food2 = [1, 7, 1, 2];

console.log(푸드파이트대회(food1)); // "1223330333221"
console.log(푸드파이트대회(food2)); // "111303111"
