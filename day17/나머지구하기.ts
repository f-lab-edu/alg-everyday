import { floor, nth, sortBy } from 'lodash';

const array = [1, 2, 7, 10, 11];
const 중앙값구하기 = nth(sortBy(array), floor(array.length / 2));

console.log(중앙값구하기);
