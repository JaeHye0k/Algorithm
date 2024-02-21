const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const root = +input.slice(-1);
const graph = Array.from({ length: N + 1 }, () => []);
arr.forEach(([v, ...row]) => {
    row.splice(-1, 1);
    graph[v] = row.sort((a, b) => a - b);
});
const tree = Array.from({ length: N + 1 }, () => [0, 0]);

let order = 0;
function dfs(cur) {
    tree[cur][0] = ++order;
    for (let next of graph[cur]) {
        if (tree[next][0]) continue;
        dfs(next);
    }
    tree[cur][1] = ++order;
}

dfs(root);
let answer = '';
for (let i = 1; i <= N; i++) {
    answer += `${i} ${tree[i][0]} ${tree[i][1]}\n`;
}
console.log(answer.trimEnd());
