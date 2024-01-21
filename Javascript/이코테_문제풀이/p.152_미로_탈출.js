const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\r\n");
const [n, m] = input[0].split(" ").map(Number);
const graph = [];
input.slice(1).forEach((e) => {
    graph.push(e.split("").map(Number));
});
const queue = [];

const move = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
];

function bfs(x, y) {
    queue.push([x, y]);
    while (queue.length > 0) {
        [x, y] = [...queue.shift()];
        // 상,하,좌,우 위치 확인
        for (let d of move) {
            let nx = x + d[0];
            let ny = y + d[1];
            // 범위를 벗어날 경우 무시
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            // 괴물이 있는 부분일 경우 무시
            if (graph[nx][ny] === 0) continue;
            // 방문한 적 없는 노드일 경우 최단 거리 기록
            if (graph[nx][ny] === 1) {
                graph[nx][ny] = graph[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    // 위 과정이 수행되고 나면 graph[n-1][m-1]에 최단 거리가 기록됨
    return graph[n - 1][m - 1];
}

console.log(bfs(0, 0));

// 5 6
// 101010
// 111111
// 000001
// 111111
// 111111
