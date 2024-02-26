const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const circles = input.slice(1).map((e) => e.split(' ').map(Number));
circles.sort((a, b) => b[2] - a[2]);
circles.unshift([0, 0, Infinity]); // 좌표평면도 원으로 치니까
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
dfsConnect(0);
let answer = 0;
let start = 0;
visited.fill(false);
visited[0] = true;
dfsDepth(0, 0);
visited.fill(false);
dfsDepth(0, start);
console.log(answer);

// 부모-자식 연결
function dfsConnect(cur) {
    const [x1, y1, r1] = circles[cur];
    for (let i = cur + 1; i <= N; i++) {
        if (!visited[i]) {
            const [x2, y2, r2] = circles[i];
            const powX = Math.pow(x1 - x2, 2);
            const powY = Math.pow(y1 - y2, 2);
            const d = Math.sqrt(powX + powY);
            if (Math.abs(r1 - r2) > d) {
                graph[cur].push(i);
                graph[i].push(cur);
                visited[i] = true;
                dfsConnect(i);
            }
        }
    }
}

function dfsDepth(depth, cur) {
    if (depth > answer) {
        answer = depth;
        start = cur;
    }
    for (let next of graph[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            dfsDepth(depth + 1, next);
            visited[next] = false;
        }
    }
}
