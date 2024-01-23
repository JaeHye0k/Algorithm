const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\n");
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
        if (x < 0 || y < 0 || x >= n || y >= m) return false;
        // 방문한 적 있는 노드이거나 경우 배추가 없는 위치일 경우
        if (graph[x][y] === 1) {
            // 방문 처리
            graph[x][y] = 0;
            dfs(x - 1, y);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x, y + 1);
            return true;
        }
        return false;
    }

    function solution() {
        let result = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (dfs(i, j) === true) {
                    result++;
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

// 2
// 10 8 17
// 0 0
// 1 0
// 1 1
// 4 2
// 4 3
// 4 5
// 2 4
// 3 4
// 7 4
// 8 4
// 9 4
// 7 5
// 8 5
// 9 5
// 7 6
// 8 6
// 9 6
// 10 10 1
// 5 5
