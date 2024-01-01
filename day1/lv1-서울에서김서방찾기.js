// 12919

function solution(seoul) {
  let index = -1;
  seoul.forEach((v, i) => {
    if (v === "Kim") index = i;
  });
  return `김서방은 ${index}에 있다`;
}
