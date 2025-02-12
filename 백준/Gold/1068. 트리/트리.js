const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const parent = input[1].split(' ').map(Number);
const cut = +input[2];

function dfs(node) {
    parent[node] = -2;
    for (let i = 0; i < N; i++) {
        if (parent[i] === node) dfs(i);
    }
}

dfs(cut);
let leaf = 0;
for (let i = 0; i < N; i++) {
    if (parent[i] !== -2 && !parent.includes(i)) leaf++;
}

console.log(leaf);
