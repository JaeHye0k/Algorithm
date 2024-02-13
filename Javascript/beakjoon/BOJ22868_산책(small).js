const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const [S, E] = input[M + 1].split(" ").map(Number);
const line = input.splice(1, M).map((e) => e.split(" ").map(Number));
const graph = [[]];
const visited = Array.from({ length: N + 1 }, () => false);
let answer = 0;

line.forEach(([s, e]) => {
    if (graph[s] === undefined) graph[s] = [e];
    else graph[s].push(e);
    if (graph[e] === undefined) graph[e] = [s];
    else graph[e].push(s);
});
graph.forEach((e, i) => {
    graph[i].sort((a, b) => a - b);
});
class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.storage[this.rear] === undefined) return 0;
        else return this.rear - this.front + 1;
    }
    enqueue(value) {
        if (this.size() === 0) {
            this.storage["0"] = value;
        } else {
            this.rear++;
            this.storage[this.rear] = value;
        }
    }
    dequeue() {
        const temp = this.storage[this.front];
        delete this.storage[this.front];

        if (this.rear === this.front) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front++;
        }
        return temp;
    }
}

let queue = new Queue();
queue.enqueue([S, [S]]);
visited[S] = true;
let newPath = [];

while (queue.size()) {
    let [v, path] = queue.dequeue();
    if (v === E) break;
    graph[v].forEach((e) => {
        if (!visited[e]) {
            visited[e] = true;
            newPath = [...path];
            newPath.push(e);
            queue.enqueue([e, newPath]);
        }
    });
}
// 왔던 경로만 제외하고 방문 해제하기
visited.fill(false);
newPath.forEach((e) => {
    visited[e] = true;
});
// 시작노드로 가야하니 시작 노드도 방문 해제
visited[S] = false;

queue = new Queue();
queue.enqueue([E, newPath]);
while (queue.size()) {
    let [v, path] = queue.dequeue();
    if (v === S) break;
    graph[v].forEach((e) => {
        if (!visited[e]) {
            visited[e] = true;
            newPath = [...path];
            newPath.push(e);
            queue.enqueue([e, newPath]);
        }
    });
}
console.log(newPath.length - 1);
