class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(node, dist) {
        this.heap.push({ node, dist });
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.heap[parentIndex].dist <= this.heap[index].dist) break;
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
            if (this.heap[left] && this.heap[left].dist < this.heap[smallest].dist) {
                smallest = left;
            }
            if (this.heap[right] && this.heap[right].dist < this.heap[smallest].dist) {
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

const [n, m] = [6, 11];
const start = 1;
const graph = Array.from({ length: n + 1 }, () => []);
const input = [
    [1, 2, 2],
    [1, 3, 5],
    [1, 4, 1],
    [2, 3, 3],
    [2, 4, 2],
    [3, 2, 3],
    [3, 6, 5],
    [4, 3, 3],
    [4, 5, 1],
    [5, 3, 1],
    [5, 6, 2],
];
input.forEach(([s, e, cost]) => graph[s].push([e, cost]));
const INF = Infinity;
const distance = Array(n + 1).fill(INF);

// 다익스트라 알고리즘 수행
dijkstra(start);

// 결과 출력
for (let i = 1; i <= n; i++) {
    if (distance[i] === INF) console.log('INFINITY');
    else console.log(distance[i]);
}

function dijkstra(start) {
    const pq = new PriorityQueue();
    pq.enqueue(start, 0); // 시작 노드, 거리
    distance[start] = 0; // 시작 노드의 최단거리 갱신
    while (!pq.isEmpty()) {
        // pq에서 반환하는 값과 변수명과 순서를 동일하게 구조 분해 할당 해주어야 올바른 값이 할당된다.
        let { node, dist } = pq.dequeue();
        // 해당 노드를 이미 처리한 적이 있다면 무시
        if (distance[node] < dist) continue;
        for (let [adj, cost] of graph[node]) {
            let totalCost = distance[node] + cost;
            if (distance[adj] > totalCost) {
                distance[adj] = totalCost;
                pq.enqueue(adj, totalCost);
            }
        }
    }
}
