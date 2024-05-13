const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const superior = input[1].split(' ').map(Number);
const employee = input.slice(2, 2 + m).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const compliment = Array(n + 1).fill(0);

class Queue {
    constructor() {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear] = value;
        this.rear++;
    }

    dequeue() {
        const temp = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;

        if (this.front === this.rear) {
            this.front = this.rear = 0;
        }

        return temp;
    }

    size() {
        return this.rear - this.front;
    }
}

function bfs(start) {
    const queue = new Queue();
    queue.enqueue(start);
    while (queue.size() > 0) {
        const i = queue.dequeue();
        for (const next of graph[i]) {
            compliment[next] += compliment[i];
            queue.enqueue(next);
        }
    }
}

for (let i = 1; i < n; i++) {
    graph[superior[i]].push(i + 1); // graph[i] = i의 직속 부하
}

for (const [i, w] of employee) {
    compliment[i] += w;
}

bfs(1);
compliment.shift();
console.log(compliment.join(' '));
