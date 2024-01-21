const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\r\n");
const t = Number(input.shift());
function test() {
    const [m, n, k] = [...input.shift().split(" ").map(Number)];
    const graph = Array.from(Array(n), () => Array(m).fill(0));
    input
        .splice(0, k)
        .map((e) => e.split(" ").map(Number))
        .forEach(([x, y]) => {
            graph[y][x] = 1;
        });

    function dfs(x, y) {
        // 범위를 벗어날 경우
        if (x < 0 || y < 0 || x >= n || y >= m) return;
        // 방문한 적 있는 노드이거나 경우 배추가 없는 위치일 경우
        if (graph[x][y] === 0) return;
        // 방문 처리
        graph[x][y] = 0;
        dfs(x - 1, y);
        dfs(x + 1, y);
        dfs(x, y - 1);
        dfs(x, y + 1);
    }

    function solution() {
        let result = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // 배추가 있는 곳일 경우
                if (graph[i][j] === 1) {
                    result++;
                    dfs(i, j);
                }
            }
        }
        return result;
    }

    console.log(solution());
}

for (let i = 0; i < t; i++) {
    test();
}
