const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const circles = input.slice(1).map((e) => e.split(' ').map(Number));
circles.push([0, 0, Infinity]); // 좌표 평면
circles.sort((a, b) => b[2] - a[2]);
const tree = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
let answer = 0;
let start = 0;

dfsConnect(0); // 트리 형성

visited.fill(false);
visited[0] = true;
dfsDepth(0, 0); // 가장 깊은 노드 찾기

visited.fill(false);
dfsDepth(0, start); // 가장 깊은 노드에서 가장 먼 노드 찾기

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
            // 포함관계라면
            if (d < r1) {
                tree[cur].push(i);
                tree[i].push(cur);
                visited[i] = true;
                dfsConnect(i);
            }
        }
    }
}

function dfsDepth(depth, cur) {
    if (depth > answer) {
        answer = depth; // 가장 깊은 노드의 깊이
        start = cur; // 가장 깊은 노드의 번호
    }
    for (let next of tree[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            dfsDepth(depth + 1, next);
            visited[next] = false;
        }
    }
}
