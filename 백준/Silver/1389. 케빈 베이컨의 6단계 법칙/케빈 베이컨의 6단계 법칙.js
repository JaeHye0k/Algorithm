const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
arr.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});
const distance = Array(N + 1).fill(0);
const answer = [];

function bfs(cur, depth) {
    const queue = [[cur, depth]];
    let front = 0;
    visited[cur] = true;
    while (queue.length > front) {
        const [v, d] = queue[front++];
        distance[v] = d;
        for (let i of graph[v]) {
            if (!visited[i]) {
                queue.push([i, d + 1]);
                visited[i] = true;
            }
        }
    }
    answer.push(distance.reduce((acc, e) => (acc += e)));
}

for (let i = 1; i <= N; i++) {
    visited.fill(false);
    distance[i] = bfs(i, 0);
}
console.log(answer.findIndex((e) => e === Math.min(...answer)) + 1);
