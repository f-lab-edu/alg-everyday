// https://school.programmers.co.kr/learn/courses/30/lessons/17686

// 파일명은 100 글자 이내
// HEAD : 최소 한 글자
// NUMBER : 최소 한 글자, 최대 다섯 글자
// TAIL
/*
const 파일명정렬forProgrammers = (files: string[]): string[] => {
  const lodashLikeWords = (str: string): string[] => {
    // takewhile쓰면 좋을 듯

    const arr = [...str].map((string, i) => {
      return Number.isNaN(parseInt(string, 10)) && string;
    });
    const arrIndex = arr.indexOf(false);
    const firstIndexValue = arr.slice(0, arrIndex).join("");
    const number = arr.slice(arrIndex, arrIndex + 5);
    const arrLastIndex = [...str].slice(
      arrIndex,
      arrIndex + number.lastIndexOf(false) + 1,
    );
    const secondIndexValue = arrLastIndex.join("");
    return [firstIndexValue, secondIndexValue];
  };

  //! 연산이 필요한 부분만 짜른다
  const indexHeadNumber = files.map(
    (file) => lodashLikeWords(file.toLocaleLowerCase()).slice(0, 2),
    // take(lodashWords(file.toLocaleLowerCase()), 2),
  );
  // console.log(indexHeadNumber);

  //! 정렬 전 idx를 부여하여 매핑한다
  const map = new Map();
  indexHeadNumber.forEach((word, idx) => map.set(word, idx));
  // console.log(map);

  //! indexHeadNumber에서 HEAD 정렬
  indexHeadNumber.sort((file1, file2) => file1[0].localeCompare(file2[0]));
  let cnt = 0;
  const arr: string[][][] = [];
  for (const file of indexHeadNumber) {
    if (arr.length === 0) {
      arr[cnt] = [];
      arr[cnt].push(file);
    } else {
      if (arr[cnt][0][0] === file[0]) {
        arr[cnt].push(file);
      } else {
        cnt += 1;
        arr[cnt] = [];
        arr[cnt].push(file);
      }
    }
  }
  arr.map((inArr) =>
    inArr.sort(
      (file1, file2) => parseInt(file1[1], 10) - parseInt(file2[1], 10),
    ),
  );
  const flatArr = arr.flat();
  return flatArr.map((fileKey) => files[map.get(fileKey)]);
};

const forPfiles1 = [
  "i mg12.png",
  "i mg10.png",
  "i mg02.png",
  "i mg1.png",
  "I MG01.GIF",
  "i mg2.JPG",
];
const forPfiles2 = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];

console.log(파일명정렬forProgrammers(forPfiles1));
console.log(파일명정렬forProgrammers(forPfiles2));
*/
