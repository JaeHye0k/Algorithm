// 통과 (BFS)
class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    size() {
        // 큐가 비어있을 경우
        if (this.storage[this.rear] === undefined) return 0;
        return this.rear - this.front + 1;
    }
    dequeue() {
        let temp = this.storage[this.front];
        delete this.storage[this.front];

        if (this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front++;
        }
        return temp;
    }
    enqueue(value) {
        if (this.size() === 0) {
            this.storage["0"] = value;
        } else {
            this.rear++;
            this.storage[this.rear] = value;
        }
    }
}

// BFS
function solution(numbers, target) {
    let n = numbers.length;
    let queue = new Queue();
    queue.enqueue([0, 0]);
    let answer = 0;
    while (queue.size()) {
        let [v, depth] = queue.dequeue();
        if (depth < n) {
            queue.enqueue([v + numbers[depth], depth + 1]);
            queue.enqueue([v - numbers[depth], depth + 1]);
        }
        if (depth === n && v === target) answer++;
    }
    return answer;
}

// 통과 (DFS)
// function solution(numbers, target) {
//     let n = numbers.length;
//     let answer = 0;
//     function dfs(sum, depth) {
//         if (depth < n) {
//             dfs(sum + numbers[depth], depth + 1);
//             dfs(sum - numbers[depth], depth + 1);
//         } else {
//             if (sum === target) answer++;
//             return;
//         }
//     }
//     dfs(0, 0);
//     return answer;
// }
console.time();
let answer = solution(
    Array.from({ length: 20 }, () => 1),
    20
);
console.log(answer);
console.timeEnd();
