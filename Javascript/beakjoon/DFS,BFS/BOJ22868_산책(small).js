const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const road = input.slice(1, M + 1).map((e) => e.split(' ').map(Number));
const [S, E] = input.at(-1).split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => new Array());
const visited = Array.from({ length: N + 1 }, () => [false, []]);
road.forEach(([s, e]) => {
    graph[s].push(e);
    graph[e].push(s);
});
graph.forEach((row) => {
    row.sort((a, b) => a - b);
});

function bfs(start, end) {
    const queue = [start];
    let front = 0;
    while (queue.length > front) {
        const v = queue[front++];
        if (v === end) break;
        graph[v].forEach((e) => {
            if (!visited[e][0]) {
                visited[e][0] = true;
                visited[e][1] = [...visited[v][1], e];
                queue.push(e);
            }
        });
    }
}

visited[S][0] = true;
visited[S][1] = [S];
bfs(S, E);

for (let i = 1; i <= N; i++) {
    if (!visited[E][1].includes(i)) {
        visited[i][0] = false;
        visited[i][1] = [];
    }
}

visited[S][0] = false;
visited[S][1] = [];
bfs(E, S);

console.log(visited[S][1].length - 1);
