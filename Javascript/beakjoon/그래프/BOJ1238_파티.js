const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, X] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + M).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const reversedGraph = Array.from({ length: N + 1 }, () => []);
const distance = Array(N + 1).fill(Infinity);
const dists = Array(N + 1).fill(0);

for (const [s, e, t] of arr) {
    graph[s].push([e, t]);
    reversedGraph[e].push([s, t]);
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(node, priority) {
        this.heap.push({ node, priority });
        this.heepifyUp(this.heap.length - 1);
    }

    heepifyUp(idx) {
        while (idx > 0) {
            const parent = (idx - 1) >> 1;
            if (this.heap[parent].priority > this.heap[idx].priority) {
                [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            } else break;
            idx = parent;
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
            const lc = (idx << 1) + 1;
            const rc = (idx << 1) + 2;
            let smaller = idx;
            if (this.heap[lc] && this.heap[lc].priority > this.heap[smaller].priority) {
                smaller = lc;
            }
            if (this.heap[rc] && this.heap[rc].priority > this.heap[smaller].priority) {
                smaller = rc;
            }
            if (idx === smaller) break;
            [this.heap[idx], this.heap[smaller]] = [this.heap[smaller], this.heap[idx]];
            idx = smaller;
        }
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(start, graph) {
    const pq = new PriorityQueue();
    distance[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const { node, priority } = pq.dequeue();
        if (distance[node] < priority) continue;
        for (const [next, cost] of graph[node]) {
            // 최단거리 갱신
            if (distance[next] > distance[node] + cost) {
                distance[next] = distance[node] + cost;
                pq.enqueue(next, distance[next]);
            }
        }
    }

    for (let i = 1; i < distance.length; i++) {
        dists[i] += distance[i];
    }
}

dijkstra(X, graph);
distance.fill(Infinity);
dijkstra(X, reversedGraph);

console.log(Math.max(...dists));
