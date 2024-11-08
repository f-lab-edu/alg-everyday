// 12919
// eslint-disable-next-line unused-imports/no-unused-vars
function 서울에서김서방찾기(seoul: any[]) {
  let index = -1;
  seoul.forEach((v, i) => {
    if (v === 'Kim') index = i;
  });
  return `김서방은 ${index}에 있다`;
}
