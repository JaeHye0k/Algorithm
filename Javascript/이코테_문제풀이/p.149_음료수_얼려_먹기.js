const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\r\n");
const [n, m] = input[0].split(" ").map(Number);
const graph = [];
input.slice(1).forEach((e) => {
  graph.push(e.split("").map(Number));
});
const visited = Array.from(Array(n), () => Array(m).fill(false));
let count = 0;

function dfs(graph, v, visited) {
  let [i, j] = [...v];
  // 종료조건: 현재 위치가 칸막이(1)거나 방문한 적 있는 곳일 경우
  if (graph[i][j] || visited[i][j]) return;
  // 현재 위치가 구멍이 뚫린 부분(0)이면 방문 처리
  visited[i][j] = true;
  if (graph[i][j + 1] !== undefined) dfs(graph, [i, j + 1], visited);
  if (graph[i + 1][j] !== undefined) dfs(graph, [i + 1, j], visited);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 현재 위치가 0이고 아직 방문하지 않았다면 dfs실행
    if (graph[i][j] == 0 && !visited[i][j]) {
      count++;
      dfs(graph, [i, j], visited);
    }
  }
}

console.log(count);
