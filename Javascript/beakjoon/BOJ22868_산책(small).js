const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const [S, E] = input[M + 1].split(" ").map(Number);
const lines = input.splice(1, M).map((e) => e.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => new Array());
// visited[n][0] : n번 정점의 방문 여부
// visited[n][1] : n번 정점까지의 경로
const visited = Array.from({ length: N + 1 }, () => [false, []]);

// 그래프 형태로 만들기
lines.forEach(([s, e]) => {
    graph[s].push(e);
    graph[e].push(s);
});

// 작은 수부터 방문해주기 위해 오름차순으로 정렬
graph.forEach((_, i) => {
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

function bfs(start, end) {
    let queue = new Queue();
    queue.enqueue(start);
    while (queue.size()) {
        let v = queue.dequeue();
        if (v === end) break;
        graph[v].forEach((e) => {
            if (!visited[e][0]) {
                visited[e][0] = true;
                visited[e][1] = [...visited[v][1], e];
                queue.enqueue(e);
            }
        });
    }
}

visited[S][0] = true;
visited[S][1] = [S];
bfs(S, E);

// E까지 온 경로에 포함되지 않았다면 방문 해제해주고 경로 초기화
for (let i = 1; i <= N; i++) {
    if (!visited[E][1].includes(i)) {
        visited[i][0] = false;
        visited[i][1] = [];
    }
}

visited[S][0] = false; // 시작노드로 가야하니 시작 노드도 방문 해제
visited[S][1] = [];
bfs(E, S);

console.log(visited[S][1].length - 1);
