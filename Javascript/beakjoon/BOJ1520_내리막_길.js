class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.queue[this.rear] === undefined) return 0;
        else return this.rear - this.front + 1;
    }
    enqueue(value) {
        if (this.size()) this.rear++;
        this.queue[this.rear] = value;
    }
    dequeue() {
        let temp = this.queue[this.front];
        delete this.queue[this.front];
        if (this.rear === this.front) {
            this.front = 0;
            this.rear = 0;
        } else this.front++;
        return temp;
    }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;
bfs(0, 0);
console.log(answer);

function bfs(x, y) {
    const queue = new Queue();
    queue.enqueue([x, y]);
    while (queue.size()) {
        const [x, y] = queue.dequeue();
        if (x === N - 1 && y === M - 1) answer++;
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < N && ny < M && arr[ny][nx] < arr[y][x]) {
                queue.enqueue([nx, ny]);
            }
        }
    }
}
