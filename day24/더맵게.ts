// https://school.programmers.co.kr/learn/courses/30/lessons/42626

// 모든 음식의 스코빌 지수를 K이상으로 만들고 싶다.
// 스코빌 지수가 낮은 두 개의 음식을 아래와 같이 섞는다.

//| 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

// 스코빌 지수가 K이상이 될 때까지 반복해서 섞는다.
// 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수 구하기

// !ver 1. 정렬 - 정확성 테스트>>>통과 / 효율성 테스트>>>실패
const 더맵게 = (scoville: number[], k: number): number => {
  // 스코빌 지수가 낮은 두개의 음식을 섞은 음식의 스코빌지수
  const scovilleOfMixedFood = (food1: number, food2: number): number => food1 + food2 * 2;

  // 오름차순 정렬
  scoville.sort((a, b) => a - b);
  let cnt = 0;
  while (scoville[0] < k) {
    // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
    if (scoville.length === 1) return -1;

    const mixedFood = scovilleOfMixedFood(scoville[0], scoville[1]);
    scoville.splice(0, 2);
    scoville.unshift(mixedFood);
    scoville.sort((a, b) => a - b);
    cnt++;
  }
  return cnt;
};

//! ver 2. 힙
// 최소 힙 구현이 필요
const 더맵게2 = (scoville: number[], k: number) => {
  // 최소힙 선언
  const minHeap = new MinHeap();

  //최소힙에 데이터 입력
  scoville.forEach((v) => minHeap.insert(v));

  let cnt = 0;
  while (minHeap.getMinValue() < k) {
    // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
    if (minHeap.heap.length === 2) return -1;

    const nonSpicy1 = minHeap.remove();
    const nonSpicy2 = minHeap.remove();
    const newFoodScoville = nonSpicy1 + nonSpicy2 * 2;

    // 최소힙에 섞은 음식의 스코빌 지수를 입력
    minHeap.insert(newFoodScoville);
    cnt++;
  }
  return cnt;
};

// 최소힙 구현
class MinHeap {
  heap: [null, ...number[]];
  constructor() {
    this.heap = [null];
    // 힙은 1번 인덱스부터 시작
    // 1번 인덱스부터 시작하는 것이 더 직관적인 코드로 보인다.
  }

  insert(number: number): void {
    // 요소 삽입
    this.heap.push(number);

    // |트리 재구성
    let curIdx: number = this.heap.length - 1;
    let parentIdx: number = Math.floor(curIdx / 2);

    // 부모 노드가 현재 노드보다 크면 위치를 교환
    while (parentIdx !== 0 && this.heap[parentIdx]! > this.heap[curIdx]!) {
      // destructuring
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      curIdx = parentIdx;
      parentIdx = Math.floor(curIdx / 2);
    }
  }

  remove(): number {
    // 최소힙의 값이 하나 남았을 경우
    if (this.heap.length === 2) {
      return this.heap.pop()!;
    }

    // 먼저 최소값을 저장하고,
    const minValue = this.heap[1];
    // 최소값 자리에 마지막 노드의 값을 할당
    this.heap[1] = this.heap.pop()!;

    // |트리 재구성
    // cur: 현재 노드
    // left: 현재 노드 기준보다 바로 아래의 작은 값의 노드
    // right: 현재 노드 기준보다 바로 위의 큰 값의 노드

    let curIdx: number = 1;
    let leftChildIdx: number = 2 * curIdx;
    let rightChildIdx: number = 2 * curIdx + 1;

    while (this.heap[curIdx]! > this.heap[leftChildIdx]! || (this.heap[rightChildIdx] && this.heap[curIdx]! > this.heap[rightChildIdx]!)) {
      if (!this.heap[rightChildIdx] || this.heap[leftChildIdx]! < this.heap[rightChildIdx]!) {
        // 오른쪽 자식 노드가 없거나 - (1)
        // 오른쪽 자식 노드보다 왼쪽 자식 노드가 더 작으면 - (2)
        // 현재 노드와 왼쪽 자식 노드의 위치를 교환
        [this.heap[curIdx], this.heap[leftChildIdx]] = [this.heap[leftChildIdx], this.heap[curIdx]];
        curIdx = leftChildIdx;
      } else {
        // 왼쪽 자식 노드가 없거나 - (1)
        // 왼쪽 자식 노드보다 오른쪽 자식 노드가 더 작으면 - (2)
        // 현재 노드와 오른쪽 자식 노드의 위치를 교환
        [this.heap[curIdx], this.heap[rightChildIdx]] = [this.heap[rightChildIdx], this.heap[curIdx]];
        curIdx = rightChildIdx;
      }
      leftChildIdx = 2 * curIdx;
      rightChildIdx = 2 * curIdx + 1;
    }
    return minValue;
  }

  // 최소값 반환
  getMinValue(): number {
    return this.heap[1];
  }
}

const [d23scoville1, d23k1] = [[1, 2, 3, 9, 10, 12], 7];

console.log(더맵게(d23scoville1, d23k1)); // 2
console.log(더맵게2([1, 2, 3, 9, 10, 12], 7)); // 2
