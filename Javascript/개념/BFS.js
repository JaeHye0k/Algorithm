const { stdout } = require("process");
const queue = [];
const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];
const visited = Array(9).fill(false);

function bfs(graph, start, visited) {
  // 시작 노드를 큐에 삽입하고 방문처리
  queue.push(start);
  visited[start] = true;
  // 큐가 빌 때까지
  while (queue.length !== 0) {
    // 첫 번째 노드 추출
    v = queue.shift();
    process.stdout.write(String(v) + " ");
    // 추출한 노드와 인접한 노드 중 방문하지 않은 노드를 전부 큐에 삽입하고 방문처리
    graph[v].forEach((e) => {
      if (!visited[e]) {
        queue.push(e);
        visited[e] = true;
      }
    });
  }
}

bfs(graph, 1, visited);
console.log();
