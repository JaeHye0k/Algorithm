const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const visited = Array(10 ** 6).fill(false);
let answer = 0;

class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.storage[this.rear] === undefined) return 0;
        else return this.rear - this.front + 1;
    }
    enqueue(value) {
        if (this.size() === 0) {
            this.storage['0'] = value;
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
const queue = new Queue();
queue.enqueue([N, 0]);
visited[N] = true;

while (queue.size()) {
    const [cur, sec] = queue.dequeue();
    if (cur > 100000) continue;
    if (cur === K) {
        answer = sec;
        break;
    }
    for (let next of [cur - 1, cur + 1, cur * 2]) {
        if (!visited[next] && 0 <= next && next <= 100000) {
            visited[next] = true;
            queue.enqueue([next, sec + 1]);
        }
    }
}
console.log(answer);
