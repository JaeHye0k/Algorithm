class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(node, distance) {
        this.heap.push({ node, distance });
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyUp(idx) {
        while (idx > 0) {
            let parent = (idx - 1) >> 1;
            if (this.heap[parent].distance < this.heap[idx].distance) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
    dequeue() {
        let min = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 1) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return min;
    }
    heapifyDown(idx) {
        while (idx < this.heap.length) {
            let left = (idx << 1) + 1;
            let right = (idx << 1) + 2;
            let smallest = idx;
            if (this.heap[left] && this.heap[left].distance < this.heap[smallest].distance) {
                smallest = left;
            }
            if (this.heap[right] && this.heap[right].distance < this.heap[smallest].distance) {
                smallest = right;
            }
            if (smallest === idx) break;
            [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
            idx = smallest;
        }
    }
    isEampty() {
        return this.heap.length === 0;
    }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const ladder = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
const snake = input.slice(N + 1).map((e) => e.split(' ').map(Number));
const visited = Array(101).fill(false);
const graph = Array(101).fill(0);

for (let [x, y] of ladder) {
    graph[x] = y;
}
for (let [u, v] of snake) {
    graph[u] = v;
}

let answer = bfs(1, 0);
console.log(answer);

function bfs(start, count) {
    const queue = new PriorityQueue();
    queue.enqueue(start, count);
    visited[start] = true;
    while (!queue.isEampty()) {
        const { node, distance } = queue.dequeue();
        for (let i = 1; i <= 6; i++) {
            let next = node + i;
            if (next === 100) return distance + 1;
            else if (next < 100) {
                // 사다리 혹은 뱀일 경우 해당 위치로 이동 (카운트는 증가하지 않음)
                while (graph[next] !== 0) {
                    next = graph[next];
                }
                if (!visited[next]) {
                    queue.enqueue(next, distance + 1);
                    visited[next] = true;
                }
            }
        }
    }
}
