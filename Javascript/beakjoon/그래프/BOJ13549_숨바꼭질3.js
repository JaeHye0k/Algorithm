class Deque {
    constructor() {
        this.deque = {};
        this.front = 0;
        this.rear = 0;
    }
    pushFront(element) {
        if (this.deque[this.front] === undefined) this.deque[this.front] = element;
        else {
            this.front--;
            this.deque[this.front] = element;
        }
    }
    popFront() {
        const temp = this.deque[this.front];
        delete this.deque[this.front];
        this.front++;
        if (this.front > this.rear) {
            this.front = this.rear = 0;
        }
        return temp;
    }
    pushBack(element) {
        if (this.deque[this.rear] === undefined) this.deque[this.rear] = element;
        else {
            this.rear++;
            this.deque[this.rear] = element;
        }
    }
    popBack() {
        const temp = this.deque[this.rear];
        delete this.deque[this.rear];
        this.rear--;
        if (this.front > this.rear) {
            this.front = this.rear = 0;
        }
        return temp;
    }
    size() {
        if (this.deque[this.front] === undefined) return 0;
        return this.rear - this.front + 1;
    }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const visited = Array(10 ** 5 + 1).fill(false);
const deque = new Deque();
deque.pushBack([N, 0]);
visited[N] = true;
let answer;

while (deque.size() > 0) {
    const [cur, sec] = deque.popFront();
    if (cur === K) {
        answer = sec;
        break;
    }
    for (const next of [cur - 1, cur + 1, cur * 2]) {
        if (!visited[next] && next >= 0 && next <= 100_000) {
            if (next === cur * 2) {
                deque.pushFront([next, sec]);
            } else {
                deque.pushBack([next, sec + 1]);
            }
            visited[next] = true;
        }
    }
}

console.log(answer);
