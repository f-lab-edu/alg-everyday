// https://school.programmers.co.kr/learn/courses/30/lessons/42587

import { head, last, map, maxBy } from "lodash";

// 특정 프로세스가 몇 번째로 실행되는지 알아낸다

//| 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
//| 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
//| 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//| 3-1. 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

// priorities : 실행 대기 큐에 있는 프로세스의 중요도가 순서대로 담긴 배열
// 1 <= priority <= 9

// location : 몇 번째로 실행되는지 알고싶은 프로세스의 위치 (idx : location -1 )
// 0 <= loc <= priorities.length - 1
// 하나 남으면, 남은 하나 실행하면 된다.

const 프로세스 = (priorities: number[], location: number): number => {
  //! [priority, location] 튜플 구조 배열 선언
  const tuplesQueue = map(priorities, (priority, loc) => [priority, loc]);
  console.log("tuplesQueue", tuplesQueue);

  //! location의 tuple 요소
  const locTuple = tuplesQueue[location];
  console.log(locTuple);

  //! 실행 순서가 정렬될 큐 선언
  const orderedQueue: number[][] = [];

  //! 코어 로직
  // 반복문을 사용할 경우, 전체 순회의 필요성을 확인하자
  while (last(orderedQueue) !== locTuple) {
    const maxPriority = head(maxBy(tuplesQueue, 0));
    const elementToBoConfirmed = tuplesQueue.shift();
    (head(elementToBoConfirmed) === maxPriority
      ? orderedQueue
      : tuplesQueue
    ).push(elementToBoConfirmed!);
  }
  console.log("orderedQueue", orderedQueue);

  return orderedQueue.length;
};

const [d16priorities1, d16location1] = [[2, 1, 3, 2], 2];
const [d16priorities2, d16location2] = [[1, 1, 9, 1, 1, 1], 0];
const [d16priorities3, d16location3] = [[5, 4, 3, 2, 1], 4];
const [d16priorities4, d16location4] = [[1, 2, 3, 4, 5], 2];
const [d16priorities5, d16location5] = [[5, 4, 3, 2, 1], 0];

console.log(프로세스(d16priorities1, d16location1)); // 1
console.log(프로세스(d16priorities2, d16location2)); // 5
console.log(프로세스(d16priorities3, d16location3)); // 5
console.log(프로세스(d16priorities4, d16location4)); // 3
console.log(프로세스(d16priorities5, d16location5)); // 1
