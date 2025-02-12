class Queue {
    constructor() {
        this.storage = {}; // 값을 저장할 객체
        this.front = 0; // 첫 번째 원소를 가리킬 포인터
        this.rear = 0; // 마지막 원소를 가리킬 포인터
    }
    size() {
        // rear가 가리키는 곳이 비어있을 때가 아무 데이터가 없는 경우다.
        if (this.storage[this.rear] === undefined) return 0;
        else return this.rear - this.front + 1;
    }
    enqueue(value) {
        // 큐가 비어있을 경우
        if (this.size() === 0) {
            // 0번 위치에 값을 넣어 놓는다.
            // 포인터는 데이터를 추출했을 때 큐가 비어있으면 그때 0으로 수정해줄 것이다.
            this.storage["0"] = value;
        } else {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }
    dequeue() {
        let temp = this.storage[this.front];
        delete this.storage[this.front];

        if (this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front += 1;
        }
        return temp;
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const n = +input[0];
    let queue = new Queue();
    for (let i = 1; i <= n; i++) {
        queue.enqueue(i);
    }
    let v = 0;
    while (queue.size() > 1) {
        queue.dequeue();
        if (queue.size() <= 1) break;
        v = queue.dequeue();
        queue.enqueue(v);
    }
    console.log(queue.dequeue());
    process.exit();
});
