// https://school.programmers.co.kr/learn/courses/30/lessons/17686

import { takeWhile, trimStart } from 'lodash';

// 파일명은 100 글자 이내
// HEAD : 최소 한 글자
// NUMBER : 최소 한 글자, 최대 다섯 글자
// TAIL : 꼬리가 길기 때문에, 메모리 효율을 고려할 부분

//! lodash를 곁들인 파일명정렬
//| lodash의 words함수는 " "공백도 분리시켜버린다.
//| Number(" ")은 0으로 반환한다. 공백을 0으로 반환
//| parseInt(" ")는 NaN으로 반환한다. 공백을 NaN으로 반환 -> 문제 의도와 맞다
const 파일명정렬lodash = (files: string[]): string[] => {
  // words를 사용하는 것이 조건을 충족하지 않아 더 어렵다.
  const customWords = (str: string): string[] => {
    const lowerStr = str.toLocaleLowerCase(); // 대소문자 구분 안 한다는 조건 충족
    //! HEAD 추출
    const lowerStrOfHEAD = takeWhile([...lowerStr], (char) => isNaN(parseInt(char, 10))).join('');
    //! NUMBER 추출
    const strOfNUMBER = takeWhile([...trimStart(lowerStr, lowerStrOfHEAD)], (char) => !isNaN(parseInt(char, 10))).join(
      '',
    );
    return [lowerStrOfHEAD, strOfNUMBER];
  };
  //! 매핑 위한 fileMap 선언, 정렬 가공할 filesWithCustomWords 배열 선언
  const fileMap = new Map();
  const filesWithCustomWords = files.map((file, idx) => {
    const customWordsFile = customWords(file); // 중요 - 같은 메모리 주소를 바라보게 함
    fileMap.set(customWordsFile, idx);
    return customWordsFile;
  });
  //! HEAD와 NUMBER 정렬 - lodash version
  // const sortByHEADByNUMBER = sortBy(
  //   orderBy(filesWithCustomWords, (file) => parseInt(file[1], 10)),
  //   (file) => file[0],
  // );
  //! HEAD와 NUMBER 정렬 - vanilla version
  filesWithCustomWords.sort((file1, file2) => {
    if (file1[0] === file2[0]) {
      return parseInt(file1[1], 10) - parseInt(file2[1], 10);
    }
    return file1[0] < file2[0] ? -1 : 1;
  });
  //! 정렬된 배열 맵핑
  const filesMapToArr = filesWithCustomWords.map((file) => files[fileMap.get(file)]);
  return filesMapToArr;
  // console.log("fileOrderingMap: ", fileOrderingMap);
  // console.log("filesWithCustomWords:", filesWithCustomWords);
  // console.log("sortByHEADByNUMBER: ", sortByHEADByNUMBER);
  // console.log("filesMapToArr: ", filesMapToArr);
  // console.log(filesWithCustomWords[0] === sortByHEADByNUMBER[0]);
};

const lodashFiles1 = ['i mg12.png', 'i mg10.png', 'i mg02.png', 'i mg1.png', 'I MG01.GIF', 'i mg2.JPG'];
const lodashFiles2 = [
  'F-05 Freedom Fighter',
  'B-50 Superfortress',
  'B-00059 Superfortress',
  'B-005 Superfortress',
  'B-53 Superfortress',
  'A-10 Thunderbolt II',
  'F-014 Tomcat',
  'B-20 Superfortress',
  'B-3 Superfortress',
];

console.log(파일명정렬lodash(lodashFiles1));
console.log(파일명정렬lodash(lodashFiles2));
