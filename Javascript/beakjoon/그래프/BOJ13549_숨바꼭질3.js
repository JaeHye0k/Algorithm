const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const distance = Array(10 ** 5 + 1).fill(Infinity);

class PriorityQueue {
    constructor(time, cur) {
        this.heap = [{ time, cur }];
    }
    enqueue(time, cur) {
        this.heap.push({ time, cur });
        this.heapifyUp(this.heap.length - 1);
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
    heapifyUp(idx) {
        while (idx > 0) {
            let pIdx = (idx - 1) >> 1;
            if (this.heap[idx].time < this.heap[pIdx].time) {
                [this.heap[idx], this.heap[pIdx]] = [this.heap[pIdx], this.heap[idx]];
            } else break;
            idx = pIdx;
        }
    }
    heapifyDown(idx) {
        while (idx < this.heap.length - 1) {
            let lcIdx = (idx << 1) + 1;
            let rcIdx = (idx << 1) + 2;
            let smaller = idx;
            if (this.heap[lcIdx] && this.heap[lcIdx].time < this.heap[smaller].time) smaller = lcIdx;
            if (this.heap[rcIdx] && this.heap[rcIdx].time < this.heap[smaller].time) smaller = rcIdx;
            if (smaller === idx) break;
            [this.heap[smaller], this.heap[idx]] = [this.heap[idx], this.heap[smaller]];
            idx = smaller;
        }
    }
    size() {
        return this.heap.length;
    }
}

const pq = new PriorityQueue(0, N);
distance[N] = 0;

while (pq.size() > 0) {
    const { time, cur } = pq.dequeue();
    for (const next of [cur - 1, cur + 1, cur * 2]) {
        let cost;
        if (next === cur * 2) cost = 0;
        else cost = 1;
        if (distance[next] > distance[cur] + cost) {
            distance[next] = distance[cur] + cost;
            pq.enqueue(time + cost, next);
        }
    }
}

console.log(distance[K]);
