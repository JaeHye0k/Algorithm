// 자바스크립트에선 queue 자료구조를 지원하는 내장 모듈이 없기 때문에 보통은 배열을 사용한다.
// 하지만 연결 리스트를 이용한 queue 방식과 달리 배열 자료구조에서 첫 번째 원소를 제거하면 O(N)의 시간이 걸린다.
// 그 이유는 첫 번째 원소를 제거하면 나머지 원소들을 한칸씩 앞으로 당겨와야 하기 때문이다.
// 따라서 시간 제한이 타이트할 경우 queue 자료구조를 직접 구현해야 한다.

class Queue {
  // 큐 초기화
  constructor() {
    this.storage = {}; // 값을 저장할 객체
    this.front = 0; // 첫 번째 원소를 가리킬 포인터
    this.rear = 0; // 마지막 원소를 가리킬 포인터
  }
  size() {
    // 원소가 비어있는 경우
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }
  push(value) {
    // 큐에 아무 원소도 없는 경우
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  popleft() {
    let temp;
    // front와 rear가 같은 경우, 즉 데이터가 1개 들어있을 경우.
    // 하지만, 큐를 초기화한 상태에서도 front와 rear은 동일하다.
    // 따라서 아래의 조건식에 만족하지만 데이터는 비어있는 상태이기 때문에 예외 처리를 해주어야 한다.
    // 그러나 자바스크립트에선 선언 단계에서 데이터가 undefined로 초기화되기 때문에 에러가 발생하지 않는다.
    // 원래는 호환성 높은 코드를 작성하기 위해 이 부분을 예외처리 해주어야 한다.
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
    }
    return temp;
  }
}

const queue = new Queue();
queue.push(5);
console.log(queue.size()); // 1
console.log(queue.popleft()); // 5
