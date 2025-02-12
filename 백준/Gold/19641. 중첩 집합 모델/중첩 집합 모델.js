const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const root = input.at(-1);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const tree = Array.from({ length: N + 1 }, () => Array(2));
let answer = '';
let num = 1;

arr.forEach((row) => {
    const start = row[0];
    for (let i = 1; i < row.length - 1; i++) {
        graph[start].push(row[i]);
    }
    graph[start].sort((a, b) => a - b);
});

visited[root] = true;
dfs(root);

function dfs(v) {
    tree[v][0] = num++;
    for (let next of graph[v]) {
        if (!visited[next]) {
            visited[next] = true;
            dfs(next);
        }
    }
    tree[v][1] = num++;
}

for (let i = 1; i <= N; i++) {
    answer += `${i} ${tree[i][0]} ${tree[i][1]}\n`;
}

console.log(answer.trimEnd());
