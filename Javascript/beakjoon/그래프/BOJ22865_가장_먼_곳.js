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
    getSize = () => this.heap.length;
    getLCIdx = (pIdx) => pIdx * 2 + 1;
    getRCIdx = (pIdx) => pIdx * 2 + 2;
    getPIdx = (cIdx) => Math.floor((cIdx - 1) / 2);

    enqueue(key, value) {
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
    dequeue() {
        const rootNode = this.heap[0];
        const count = this.heap.length;

        if (count === 0) return undefined;
        if (count === 1) this.heap = [];
        else this.heapifyDown();
        return rootNode;
    }
    heapifyDown() {
        this.heap[0] = this.heap.pop();
        const rootNode = this.heap[0];
        const count = this.heap.length;
        let idx = 0;

        while (this.getLCIdx(idx) < count) {
            const lcIdx = this.getLCIdx(idx);
            const rcIdx = this.getRCIdx(idx);
            const smallerCIdx = rcIdx < count && this.heap[rcIdx].key < this.heap[lcIdx].key ? rcIdx : lcIdx;
            if (this.heap[smallerCIdx] < this.heap[idx]) {
                this.heap[idx] = this.heap[smallerCIdx];
                idx = smallerCIdx;
            } else break;
        }
        this.heap[idx] = rootNode;
    }
}

function dijkstra(start, distance) {
    distance[start] = 0;
    const pq = new PriorityQueue();
    pq.enqueue(0, start);
    while (pq.getSize()) {
        const [dist, cur] = Object.values(pq.dequeue());
        if (dist > distance[cur]) continue;
        for (let [v, c] of graph[cur]) {
            const cost = dist + c;
            if (cost < distance[v]) {
                distance[v] = cost;
                pq.enqueue(cost, v);
            }
        }
    }
}

const INF = Infinity;
const totalDist = Array(N + 1).fill(INF);
for (let point of [A, B, C]) {
    const distance = Array(N + 1).fill(INF);
    dijkstra(point, distance);
    for (let i = 1; i <= N; i++) {
        totalDist[i] = Math.min(totalDist[i], distance[i]);
    }
}
totalDist.shift();
const maxDist = Math.max(...totalDist);
const answer = totalDist.findIndex((d) => d === maxDist);
console.log(answer + 1);
