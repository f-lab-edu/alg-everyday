// 시저 암호 함수 1
function caesarCipher1(s: string, n: number) {
  const space_ASCII = 32;
  const A_ASCII = 65;
  const a_ASCII = 97;
  const azNum = 26;

  return [...s]
    .map((v) => {
      const ascNumSum = v.charCodeAt(0) + n;
      if (v.match(/[A-Z]/g)) return A_ASCII + ((ascNumSum - A_ASCII) % azNum);
      if (v.match(/[a-z]/g)) return a_ASCII + ((ascNumSum - a_ASCII) % azNum);
      return space_ASCII;
    })
    .map((v) => String.fromCharCode(v))
    .join("");
}

// 시저 암호 함수 2
function caesarCipher2(s: string, n: number) {
  const space_ASCII = 32;
  const A_ASCII = 65;
  const a_ASCII = 97;
  const azNum = 26;

  return [...s]
    .map((v) => {
      let basisNum: number;
      const ascNumSum = v.charCodeAt(0) + n;
      if (v.match(/[A-Z]/g)) basisNum = A_ASCII;
      else if (v.match(/[a-z]/g)) basisNum = a_ASCII;
      else return space_ASCII;

      return basisNum + ((ascNumSum - basisNum) % azNum);
    })
    .map((v) => String.fromCharCode(v))
    .join("");
}

const str = "a B z";
console.log(caesarCipher1(str, 4)); // e F d
console.log(caesarCipher2(str, 4)); // e F d
