const lodashWords = (str) => str.split(/(?<=\D)(?=\d)|_|(?<=\d)(?=\D)|\s/);

console.log(lodashWords("F-5 Freedom Fighter"));
console.log(lodashWords("img1.png"));

const str = " ";
console.log(parseInt(str, 10));
