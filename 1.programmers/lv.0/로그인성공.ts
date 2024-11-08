// https://school.programmers.co.kr/learn/courses/30/lessons/120883

// ver 1. 최초 코드
type Tuple = [string, string];
const 로그인성공 = (id_pw: Tuple, db: Tuple[]): string => {
  // 로그인 가능 경우 구하기
  const isLogin = db.some((v) => {
    if (JSON.stringify(v) === JSON.stringify(id_pw)) return true;
  });
  if (isLogin) return 'login';
  // 아이디 존재, pw 틀린 경우
  const isId = db.some((v) => {
    if (v[0] === id_pw[0]) return true;
  });
  if (isId) return 'wrong pw';
  // 아이디, pw 모두 존재하지 않는 경우
  return 'fail';
};

// ver 2. 개선 코드
// map 객체 활용
const 로그인성공2 = (id_pw: Tuple, db: Tuple[]): string => {
  const map = new Map(db);
  return map.has(id_pw[0]) ? (map.get(id_pw[0]) === id_pw[1] ? 'login' : 'worng pw') : 'fail';
};

//| 1
console.log(
  로그인성공(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ],
  ),
); // "login"

console.log(
  로그인성공(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ],
  ),
); // "wrong pw"

console.log(
  로그인성공(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ],
  ),
); // "fail"

//| 2
console.log(
  로그인성공2(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ],
  ),
); // "login"

console.log(
  로그인성공2(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ],
  ),
); // "wrong pw"

console.log(
  로그인성공2(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ],
  ),
); // "fail"
