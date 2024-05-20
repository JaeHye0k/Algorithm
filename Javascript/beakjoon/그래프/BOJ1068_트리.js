const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const parent = input[1].split(' ').map(Number);
const cut = +input[2];
let count = 0;

function dfs(num) {
    parent[num] = -2;
    for (let i = 0; i < N; i++) {
        if (num === parent[i]) {
            dfs(i);
        }
    }
}

dfs(cut);
for (let i = 0; i < N; i++) {
    if (parent[i] !== -2 && !parent.includes(i)) count++;
}
console.log(count);
