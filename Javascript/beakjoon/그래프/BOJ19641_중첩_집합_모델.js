const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
const root = +input.slice(-1);
const graph = Array.from({ length: N + 1 }, () => []);
const tree = Array.from({ length: N + 1 }, () => [0, 0]);
arr.forEach((row) => {
    const [v, ...edges] = row;
    edges.splice(-1, 1);
    graph[v] = edges.sort((a, b) => a - b);
});

dfs(root, 1);

let answer = '';
for (let i = 1; i <= N; i++) {
    answer += `${i} ${tree[i][0]} ${tree[i][1]}\n`;
}
console.log(answer.trimEnd());

function dfs(cur, order) {
    tree[cur][0] = order; // left
    for (let next of graph[cur]) {
        if (tree[next][0]) continue; // 방문한 적 있는 노드면 continue
        order = dfs(next, order + 1);
    }
    tree[cur][1] = order + 1; // right
    return order + 1;
}
