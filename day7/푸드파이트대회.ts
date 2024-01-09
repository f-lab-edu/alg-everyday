// https://school.programmers.co.kr/learn/courses/30/lessons/134240

const 푸드파이트대회 = (food: number[]) => {
  const usableFoodForHalf = food.map((v) => Math.floor(v / 2));
  console.log(usableFoodForHalf); // [0,3,0,1]
  console.log([...usableFoodForHalf.keys()]); // [0,1,2,3]
  const foodArr = [];

  for (const idx of usableFoodForHalf.keys()) {
    // 단순 if문
    if (usableFoodForHalf[idx])
      foodArr.push(String(idx).repeat(usableFoodForHalf[idx]));
  }
  return [...foodArr, 0, ...foodArr.reverse()].join("");
};

const food1 = [1, 3, 4, 6];
console.log(푸드파이트대회(food1)); // "1223330333221"
const food2 = [1, 7, 1, 2];
console.log(푸드파이트대회(food2)); // "111303111"

// 변경할 때 && 피하자, 리턴값을 활용할 때만 쓰자
// usableFoodForHalf.keys() 사용
