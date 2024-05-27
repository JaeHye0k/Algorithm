const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, t] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const edges = input.slice(1, 1 + M).map((e) => e.split(' ').map(Number));
const visited = Array(N + 1).fill(false);
for (const [A, B, C] of edges) {
    graph[A].push([B, C]);
    graph[B].push([A, C]);
}

// i번 노드를 탐색할 때, i번 노드와 연결된 다른 노드들을 우선순위 큐에 저장
// bfs실행
// 정복한 곳에서 인접한 노드로 이동
class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(node, priority) {
        this.heap.push({ node, priority });
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyUp(idx) {
        while (idx > 0) {
            const pIdx = (idx - 1) >> 1;
            if (this.heap[pIdx].priority > this.heap[idx].priority) {
                [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]];
            } else break;
            idx = pIdx;
        }
    }
    dequeue() {
        const min = this.heap[0];
        const temp = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = temp;
            this.heapifyDown(0);
        }
        return min;
    }
    heapifyDown(idx) {
        while (idx < this.heap.length - 1) {
            const lcIdx = idx << (1 + 1);
            const rcIdx = idx << (1 + 2);
            let smaller = idx;
            if (this.heap[lcIdx] && this.heap[lcIdx].priority < this.heap[smaller].priority) smaller = lcIdx;
            if (this.heap[rcIdx] && this.heap[rcIdx].priority < this.heap[smaller].priority) smaller = rcIdx;
            if (idx === smaller) break;
            [this.heap[idx], this.heap[smaller]] = [this.heap[smaller], this.heap[idx]];
            idx = smaller;
        }
    }
    size() {
        return this.heap.length;
    }
}

let answer = 0;
function bfs() {
    const pq = new PriorityQueue();
    pq.enqueue(1, 0);
    let count = 0;

    while (pq.size() > 0) {
        const { node, priority } = pq.dequeue();
        if (!visited[node]) {
            if (node !== 1) {
                answer += priority + count++ * t;
            }
            visited[node] = true;
            for (const [n, p] of graph[node]) {
                // 이미 정복한 도시는 큐에 삽입하지 않는다.
                if (!visited[n]) {
                    pq.enqueue(n, p);
                }
            }
        }
    }
}

bfs();
console.log(answer);
