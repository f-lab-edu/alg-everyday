// https://school.programmers.co.kr/learn/courses/30/lessons/120834

const 외계행성의나이 = (age: number): string => {
  const ageAlphabetObj: Record<string, string> = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
  };
  return [...age.toString()].map((v) => ageAlphabetObj[v]).join('');
};

const 외계행성의나이2 = (age: number): string => {
  const alphabet: string = 'abcdefghi';
  return [...age.toString()].map((v) => alphabet[parseInt(v, 10)]).join('');
};

console.log(외계행성의나이(23)); // "cd"
console.log(외계행성의나이(51)); // "fb"
console.log(외계행성의나이(100)); // "baa"

console.log(외계행성의나이2(23)); // "cd"
console.log(외계행성의나이2(51)); // "fb"
console.log(외계행성의나이2(100)); // "baa"
