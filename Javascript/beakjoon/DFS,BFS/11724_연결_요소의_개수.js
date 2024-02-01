const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let graph = Array.from(Array(n + 1), () => new Array());
let visited = Array(n + 1).fill(false);
input.slice(1).forEach((e) => {
    let [u, v] = e.split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
});
let result = 0;

function dfs(graph, v, visited) {
    visited[v] = true;
    graph[v].forEach((e) => {
        if (!visited[e]) dfs(graph, e, visited);
    });
}

for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
        dfs(graph, i, visited);
        result++;
    }
}

console.log(result);
