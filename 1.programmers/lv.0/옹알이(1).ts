// https://school.programmers.co.kr/learn/courses/30/lessons/120956

// "aya", "ye", "woo", "ma"
// 발음할 수 있는 단어의 개수는?

//! 1. 정규표현식
const 옹알이1a = (babbling: string[]): number => {
  const pronounceableWords = babbling
    .map((word) => word.replace(/(aya|ye|woo|ma)(?!.*\1)/g, ''))
    .filter((word) => word === '');
  return pronounceableWords.length;
};

//! 2
const 옹알이1b = (babbling: string[]): number => {
  const pronounceableSet = new Set(['aya', 'ye', 'woo', 'ma']);
  const pronounceableWords = babbling.filter((word) => {
    let tempWord = word;
    for (const pronounceable of pronounceableSet) {
      tempWord = tempWord.replace(pronounceable, ' ');
    }
    tempWord = tempWord.replaceAll(' ', '');
    return tempWord.length === 0;
  });
  return pronounceableWords.length;
};

console.log(옹알이1a(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
console.log(옹알이1a(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3
console.log(옹알이1a(['ayamaaya'])); // 0

console.log(옹알이1b(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
console.log(옹알이1b(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3
console.log(옹알이1b(['ayamaaya'])); // 0
