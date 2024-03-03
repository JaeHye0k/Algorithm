const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const [A, B, C] = input[1].split(' ').map(Number);
const M = +input[2];
const road = input.slice(3).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
road.forEach(([s, e, v]) => {
    graph[s].push([e, v]);
    graph[e].push([s, v]);
});

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(node, priority) {
        this.heap.push({ node, priority });
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    dequeue() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return min;
    }

    heapifyDown(index) {
        while (index < this.heap.length) {
            const left = (index << 1) + 1;
            const right = (index << 1) + 2;
            let smallest = index;
            if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(start) {
    const distance = Array(N + 1).fill(INF);
    distance[start] = 0;
    const pq = new PriorityQueue();
    pq.enqueue(start, 0);
    while (!pq.isEmpty()) {
        const { node, priority } = pq.dequeue();
        if (priority > distance[node]) continue;
        for (let [v, d] of graph[node]) {
            const cost = priority + d;
            if (cost < distance[v]) {
                distance[v] = cost;
                pq.enqueue(v, cost);
            }
        }
    }
    return distance;
}

const INF = Infinity;

const distA = dijkstra(A);
const distB = dijkstra(B);
const distC = dijkstra(C);

let furthest = 0;
let answer = 0;

for (let i = 1; i <= N; i++) {
    const minDist = Math.min(distA[i], distB[i], distC[i]);
    if (furthest < minDist) {
        furthest = minDist;
        answer = i;
    }
}

console.log(answer);
