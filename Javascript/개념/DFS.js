const { stdout } = require("process");
const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];
const visited = Array(9).fill(false);

function dfs(graph, v, visited) {
  //현재 노드 방문 처리
  visited[v] = true;
  process.stdout.write(String(v) + " ");
  graph[v].forEach((e) => {
    // 방문하지 않았다면 방문하기
    if (!visited[e]) dfs(graph, e, visited);
  });
}

dfs(graph, 1, visited);
console.log();
