// 시저 암호 함수 1
// function caesarCipher1(s: string, n: number) {
//   const space_ASCII = 32;
//   const A_ASCII = 65;
//   const a_ASCII = 97;
//   const azNum = 26;

//   return [...s]
//     .map((v) => {
//       const ascNumSum = v.charCodeAt(0) + n;
//       if (v.match(/[A-Z]/g)) return A_ASCII + ((ascNumSum - A_ASCII) % azNum);
//       if (v.match(/[a-z]/g)) return a_ASCII + ((ascNumSum - a_ASCII) % azNum);
//       return space_ASCII;
//     })
//     .map((v) => String.fromCharCode(v))
//     .join("");
// }

// 시저 암호 함수 2
function caesarCipher2(s: string, n: number) {
  const space_ASCII = 32;
  const A_ASCII = 65;
  const a_ASCII = 97;
  const azNum = 26;
  const isUpper = (s: string) => s.match(/[A-Z]/g);

  return [...s]
    .map((v) => {
      // 공백일 때 바로 리턴하기
      if (v.charCodeAt(0) === space_ASCII) return space_ASCII;

      // 공백이 아닐 때의 로직
      const ascNumSum = v.charCodeAt(0) + n;
      const basisNum = isUpper(v) ? A_ASCII : a_ASCII;
      return basisNum + ((ascNumSum - basisNum) % azNum);
    })
    .map((v) => String.fromCharCode(v))
    .join("");
}

const str = "a B z";
console.log(caesarCipher2(str, 4)); // e F d
