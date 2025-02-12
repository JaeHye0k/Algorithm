const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const inputArr = input.slice(1).map(Number);

class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyUp(idx) {
        while (idx > 0) {
            let pIdx = (idx - 1) >> 1;
            if (this.heap[pIdx] <= this.heap[idx]) break;
            [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]];
            idx = pIdx;
        }
    }
    remove() {
        let min = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return min;
    }
    heapifyDown(idx) {
        while (idx < this.heap.length) {
            let smallest = idx;
            let lcIdx = (idx << 1) + 1;
            let rcIdx = (idx << 1) + 2;
            if (this.heap[lcIdx] && this.heap[lcIdx] < this.heap[smallest]) {
                smallest = lcIdx;
            }
            if (this.heap[rcIdx] && this.heap[rcIdx] < this.heap[smallest]) {
                smallest = rcIdx;
            }
            if (smallest === idx) break;
            [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
            idx = smallest;
        }
    }
}

const answer = [];
const heap = new MinHeap();
for (let x of inputArr) {
    if (x === 0) {
        const value = heap.remove();
        answer.push(value ? value : 0);
    } else heap.insert(x);
}
console.log(answer.join('\n'));
