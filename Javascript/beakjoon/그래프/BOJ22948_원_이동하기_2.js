const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const circles = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const [A, B] = input.at(-1).split(' ').map(Number);
circles.sort((a, b) => b[2] - a[2]);
circles.unshift([0, 0, Infinity]);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
dfsConnect(0);
// 트리 만들기
function dfsConnect(cur) {
    const [num1, x1, r1] = circles[cur];
    for (let i = cur + 1; i <= N; i++) {
        if (!visited[i]) {
            const [num2, x2, r2] = circles[i];
            const d = Math.abs(x1 - x2);
            // 포함 관계라면
            if (d < Math.abs(r1 - r2)) {
                visited[i] = true;
                graph[num1].push(num2);
                graph[num2].push(num1);
                dfsConnect(i);
            }
        }
    }
}
visited.fill(false);
let answerDepth = 0;
let answerPath = [];
dfs(A, 1, [A]);
function dfs(cur, depth, path) {
    if (graph[cur].includes(B)) {
        path.push(B);
        answerPath = JSON.parse(JSON.stringify(path));
        answerDepth = depth + 1;
        return;
    }
    for (let next of graph[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            path.push(next);
            dfs(next, depth + 1, path);
            visited[next] = false;
            path.pop();
        }
    }
}
console.log(answerDepth);
console.log(answerPath.join(' '));
