const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\r\n");
const [n, m] = input[0].split(" ").map(Number);
const graph = [];
input.slice(1).forEach((e) => {
    graph.push(e.split().map(Number));
});
const queue = [];

function bfs(x, y) {
    queue.push([x, y]);
    graph[x][y] = 0;
    while (queue.length > 0) {
        let v = queue.shift();
        let x,
            y = [...v];
        // 범위를 초과할 경우
        if (x < 0 || x >= n || y < 0 || y >= m) continue;

        queue.push([x + 1, y]);
    }
}

let result = 1;
bfs(0, 0);
