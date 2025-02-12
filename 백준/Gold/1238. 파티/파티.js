const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, X] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + M).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const reverseGraph = Array.from({ length: N + 1 }, () => []);
const distance1 = Array(N + 1).fill(Infinity);
const distance2 = Array(N + 1).fill(Infinity);
let answer = 0;

arr.forEach(([s, e, t]) => {
    graph[s].push([e, t]);
    reverseGraph[e].push([s, t]);
});

class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(priority, node) {
        this.heap.push({ priority, node });
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
            const lcIdx = idx * 2 + 1;
            const rcIdx = idx * 2 + 2;
            let smaller = idx;
            if (this.heap[lcIdx] && this.heap[lcIdx].priority < this.heap[idx].priority) smaller = lcIdx;
            if (this.heap[rcIdx] && this.heap[rcIdx].priority < this.heap[idx].priority) smaller = rcIdx;
            if (smaller === idx) break;
            [this.heap[smaller], this.heap[idx]] = [this.heap[idx], this.heap[smaller]];
            idx = smaller;
        }
    }
    size() {
        return this.heap.length;
    }
}

function dijkstra(start, graph, distance) {
    const pq = new PriorityQueue();
    pq.enqueue(0, start);
    distance[start] = 0;

    while (pq.size() > 0) {
        const { priority, node } = pq.dequeue();
        if (distance[node] < priority) continue;
        for (const [next, time] of graph[node]) {
            const cost = distance[node] + time;
            if (distance[next] > cost) {
                distance[next] = cost;
                pq.enqueue(cost, next);
            }
        }
    }
}

dijkstra(X, graph, distance1);
dijkstra(X, reverseGraph, distance2);

for (let i = 1; i <= N; i++) {
    const dist = distance1[i] + distance2[i];
    answer = Math.max(answer, dist);
}
console.log(answer);
