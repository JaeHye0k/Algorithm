const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, m, start, graph) {
    const INF = Infinity;
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(INF);

    // 최단 거리 노드 선택
    function getMinIndex() {
        let minValue = INF;
        let index = 0;
        for (let i = 1; i <= n; i++) {
            if (minValue > distance[i] && !visited[i]) {
                minValue = distance[i];
                index = i;
            }
        }
        return index;
    }

    function dijkstra(start) {
        distance[start] = 0; // 시작 노드의 최단거리 갱신
        visited[start] = true;
        // 시작 노드와 인접한 노드의 최단거리 갱신
        for (let [a, b] of graph[start]) {
            distance[a] = b;
        }
        // 시작 노드에 대한 작업은 이미 수행해주었기 때문에 n-1회만 실행함
        for (let i = 0; i < n - 1; i++) {
            let cur = getMinIndex();
            visited[cur] = true;
            for (let [a, b] of graph[cur]) {
                let cost = distance[cur] + b;
                if (distance[a] > cost) distance[a] = cost;
            }
        }
    }
    dijkstra(start);

    for (let i = 1; i <= n; i++) {
        if (distance[i] === INF) console.log("INFINITY");
        else console.log(distance[i]);
    }
}

let [n, m] = input[0].split(" ").map(Number);
let start = Number(input[1]);
let graph = Array.from(Array(n + 1), () => []);
input.splice(0, 2);
input.forEach((e) => {
    let [a, b, c] = e.split(" ").map(Number);
    graph[a].push([b, c]);
});

solution(n, m, start, graph);
