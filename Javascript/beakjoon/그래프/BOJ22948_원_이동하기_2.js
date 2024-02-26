const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const circles = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const [A, B] = input.at(-1).split(' ').map(Number);
class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    getSize = () => this.heap.length;
    getLCIdx = (pIdx) => pIdx * 2 + 1;
    getRCIdx = (pIdx) => pIdx * 2 + 2;
    getPIdx = (cIdx) => Math.floor((cIdx - 1) / 2);

    insert(key, value) {
        const node = { key, value };
        this.heap.push(node);
        this.heapifyUp();
    }
    heapifyUp() {
        let idx = this.heap.length - 1;
        const lastInsertedNode = this.heap[idx];

        while (idx > 0) {
            const pIdx = this.getPIdx(idx);
            if (this.heap[pIdx].key > this.heap[idx].key) {
                this.heap[idx] = this.heap[pIdx];
                idx = pIdx;
            } else break;
        }
        this.heap[idx] = lastInsertedNode;
    }
    remove() {
        const len = this.heap.length;
        const rootNode = this.heap[0];

        if (len === 0) return undefined;
        if (len === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }
        return rootNode;
    }
    heapifyDown() {
        let idx = 0;
        const len = this.heap.length;
        const rootNode = this.heap[0];

        while (this.getLCIdx(idx) < len) {
            const lcIdx = this.getLCIdx(idx);
            const rcIdx = this.getRCIdx(idx);
            const smallerIdx = rcIdx < len && this.heap[rcIdx].key < this.heap[lcIdx].key ? rcIdx : lcIdx;

            if (this.heap[smallerIdx].key < this.heap[idx].key) {
                this.heap[idx] = this.heap[smallerIdx];
                idx = smallerIdx;
            } else break;
        }
        this.heap[idx] = rootNode;
    }
}

function dfs(depth, cur) {
    if (cur === B) {
        console.log(depth);
        console.log(...path);
        return;
    }
    for (let next of graph[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            path.push(next);
            dfs(depth + 1, next);
            path.pop();
            visited[next] = false;
        }
    }
}
const pq = new PriorityQueue();
circles.sort((a, b) => b[2] - a[2]);
// 괄호쌍 판별
for (let [num, x, r] of circles) {
    pq.insert(x - r, num);
    pq.insert(x + r, -num);
}

const graph = Array.from({ length: N + 1 }, () => []);
const stack = [0]; // 좌표 평면의 원점 x축
while (pq.getSize()) {
    const [x, num] = Object.values(pq.remove());
    if (num <= 0) stack.pop();
    else {
        graph[num].push(stack.at(-1));
        graph[stack.at(-1)].push(num);
        stack.push(num);
    }
}

const visited = Array(N + 1).fill(false);
visited[A] = true;
const path = [A];
dfs(1, A);
