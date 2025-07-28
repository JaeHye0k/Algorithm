class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    
    heapifyUp(i) {
        while(i > 0) {
            const pi = Math.floor((i - 1) / 2);
            if(this.heap[pi] < this.heap[i]) break;
            [this.heap[pi], this.heap[i]] = [this.heap[i], this.heap[pi]];
            i = pi;
        }
    }
    
    remove() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if(this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return min;
    }
    
    heapifyDown(i) {
        while(i < this.heap.length) {
            const lci = i * 2 + 1;
            const rci = i * 2 + 2;
            let smaller = i;
            if(this.heap[smaller] > this.heap[lci]) smaller = lci;
            if(this.heap[smaller] > this.heap[rci]) smaller = rci;
            if(smaller === i) return;
            [this.heap[smaller], this.heap[i]] = [this.heap[i], this.heap[smaller]];
            i = smaller;
        }
    }
    
    isEmpty() {
        return this.heap.length <= 0;
    }
}


function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap();
    scoville.forEach((e) => heap.insert(e));
    while(!heap.isEmpty()) {
        const min1 = heap.remove();
        if(min1 >= K) break;
        if(heap.isEmpty()) return -1;
        const min2 = heap.remove();
        heap.insert(min1 + min2 * 2);
        answer++;
    }
    return answer;
}

/*
    - 음식을 섞을 때마다 음식이 한 개 씩 줄어들음
    - 음식을 섞고 난 다음 모든 음식이 K 이상인지 확인해야됨 -> O(N), N = 10^6
    - 최솟값 두 개를 골라야 됨 -> O(N), N = 10^6
    
    1. 모든 음식의 스코필 지수가 K 이상인지 확인 -> 최솟값이 K이상이라면 모든 값이 K이상임
        1. 모두 K 이상이라면 종료, 섞은 횟수 리턴
    2. 최솟값1, 최솟값2 구하기
    3. 음식 섞기
    반복
*/