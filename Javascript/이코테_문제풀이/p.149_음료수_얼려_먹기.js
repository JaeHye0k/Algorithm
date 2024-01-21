const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\r\n");
const [n, m] = input[0].split(" ").map(Number);
const graph = [];
input.slice(1).forEach((e) => {
  graph.push(e.split("").map(Number));
});
// graph의 각 노드의 값은 0과 1로 구성되어 있고 1은 방문할 수 없는 곳을 나타내기 때문에
// 따로 visited로 방문처리를 해주지 않아도 방문한 노드의 값을 1로 바꿔줌으로써 방문처리를 해줄 수 있다.
// const visited = Array.from(Array(n), () => Array(m).fill(false));
let count = 0;

function dfs(x, y) {
  // 범위를 벗어나면 종료
  if (x < 0 || x >= n || y < 0 || y >= m) return false;
  // 현재 노드를 아직 방문하지 않았다면
  if (graph[x][y] === 0) {
    // 현재 노드 방문처리
    graph[x][y] = 1;
    // 상,하,좌,우 노드 확인
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
    return true;
  }
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 현재 위치에서 dfs 실행
    if (dfs(i, j) === true) count++;
  }
}

console.log(count);
