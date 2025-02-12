const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const ladder = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
const snake = input.slice(N + 1).map((e) => e.split(' ').map(Number));
const graph = Array(101).fill(0);
const visited = Array(101).fill(false);
ladder.forEach(([x, y]) => {
    graph[x] = y;
});
snake.forEach(([u, v]) => {
    graph[u] = v;
});

let answer = bfs(1, 0);
console.log(answer);
function bfs(start, count) {
    const queue = [[start, count]];
    let front = 0;
    visited[start] = true;
    while (queue.length > front) {
        const [cur, cnt] = queue[front++];
        if (cur === 100) return cnt;
        for (let i = 1; i <= 6; i++) {
            let next = cur + i;
            if (graph[next] !== 0) {
                next = graph[next];
            }
            if (!visited[next]) {
                queue.push([next, cnt + 1]);
                visited[next] = true;
            }
        }
    }
}
