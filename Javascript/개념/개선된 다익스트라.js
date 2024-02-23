// Heap 구현
class Heap {
    // 1. 기본 골격
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
    getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
    getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);
    peek = () => this.heap[0]; // 루트 노드

    // 2. 삽입
    insert = (key, value) => {
        const node = { key, value }; // {key: "key", value: "value"}
        this.heap.push(node);
        this.heapifyUp(); // Min heap의 형태를 갖추도록 정렬한다.
    };

    heapifyUp = () => {
        let index = this.heap.length - 1;
        const lastInsertedNode = this.heap[index]; // 마지막에 삽입된 노드

        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            // 부모 노드의 key 값이 마지막에 삽입된 노드의 key 값보다 크다면 부모 노드를 아래로 내려준다.
            if (this.heap[parentIndex].key > lastInsertedNode.key) {
                this.heap[index] = this.heap[parentIndex];
                index = parentIndex;
            } else break;
        }
        // break로 반복문을 탈출했다면 (자리를 잡았다면)
        // 마지막으로 삽입된 노드를 최종 인덱스에 삽입해준다.
        this.heap[index] = lastInsertedNode;
    };

    // 3. 삭제
    remove = () => {
        const count = this.heap.length;
        const rootNode = this.heap[0];

        if (count === 0) return undefined;
        if (count === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop(); // 끝에 있는 노드를 부모로 만들고
            this.heapifyDown(); // 다시 min heap의 형태를 갖추도록 정렬 해준다.
        }
        return rootNode;
    };

    heapifyDown = () => {
        let index = 0;
        const count = this.heap.length;
        const rootNode = this.heap[0];

        // leftChild가 있다면 수행
        while (this.getLeftChildIndex(index) < count) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            // 왼쪽, 오른쪽 노드 중 더 작은 노드를 찾는다.
            // rightChildIndex < count : leftChild만 있는 트리일 경우 false
            const smallerChildIndex = rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key ? rightChildIndex : leftChildIndex;

            // 자식의 key 값이 루트 노드의 key 값보다 작다면 위로 끌어올린다.
            // key 값이 같은 경우도 포함하는 이유는 index = smallerChildIndex 를 수행해주기 위해서.
            if (this.heap[smallerChildIndex].key <= rootNode.key) {
                this.heap[index] = this.heap[smallerChildIndex];
                index = smallerChildIndex;
            } else break;
        }
        this.heap[index] = rootNode;
    };
}

// Priority Queue 구현
class PriorityQueue extends Heap {
    constructor() {
        super();
    }
    enqueue = (priority, value) => this.insert(priority, value);
    dequeue = () => this.remove();
    size = () => this.heap.length;
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, m, start, graph) {
    const INF = Infinity;
    const distance = Array(n + 1).fill(INF);

    function dijkstra(start) {
        const queue = new PriorityQueue();
        queue.enqueue(0, start); // 거리, 노드
        distance[start] = 0; // 시작 노드의 최단거리 갱신
        while (queue.size()) {
            let [dist, cur] = Object.values(queue.dequeue()); // let {key:dist, value:cur} = queue.dequeue();
            // 큐에서 뺀 최단거리 노드의 거리보다
            // 현재 distance 테이블에 저장되어 있는 거리값이 더 작다면 반복문으로 되돌아감
            if (distance[cur] < dist) continue;
            for (let [a, b] of graph[cur]) {
                let cost = distance[cur] + b;
                if (distance[a] > cost) {
                    distance[a] = cost;
                    queue.enqueue(cost, a);
                }
            }
        }
    }
    dijkstra(start);

    for (let i = 1; i <= n; i++) {
        if (distance[i] === INF) console.log('INFINITY');
        else console.log(distance[i]);
    }
}

let [n, m] = input[0].split(' ').map(Number);
let start = Number(input[1]);
let graph = Array.from(Array(n + 1), () => []);
input.splice(0, 2);
input.forEach((e) => {
    let [a, b, c] = e.split(' ').map(Number);
    graph[a].push([b, c]);
});

solution(n, m, start, graph);
