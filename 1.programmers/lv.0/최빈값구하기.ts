import { forEach, indexOf, lastIndexOf, max } from 'lodash';

const 최빈값구하기 = (array: number[]): number => {
  const maxNumber = max(array);
  const counts = Array(maxNumber! + 1).fill(0);
  forEach(array, (v) => counts[v]++);
  // counts 배열에 빈도수를 저장한다.

  const maxCnts = max(counts);
  const maxCntsIndex = indexOf(counts, maxCnts);
  return maxCntsIndex === lastIndexOf(counts, maxCnts) ? maxCntsIndex : -1;
};

const array1 = [1, 2, 3, 3, 3, 4];
const array2 = [1, 1, 2, 2];
const array3 = [1];
const array4 = [1, 1, 1, 1, 1, 1];

console.log(최빈값구하기(array1));
console.log(최빈값구하기(array2));
console.log(최빈값구하기(array3));
console.log(최빈값구하기(array4));
