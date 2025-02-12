const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const arr = input.slice(2).map((e) => e.split(' ').map(Number));
const parent = Array(N + 1);
for (let i = 0; i <= N; i++) {
    parent[i] = i;
}
arr.sort((a, b) => a[2] - b[2]);

let answer = 0;
arr.forEach(([a, b, c]) => {
    if (union(parent, a, b)) answer += c;
});
console.log(answer);

function union(parent, a, b) {
    // 사이클이 발생하지 않는다면
    a = find(parent, a);
    b = find(parent, b);
    if (a !== b) {
        if (a < b) parent[b] = a;
        else parent[a] = b;
        return true;
    }
    return false;
}

function find(parent, x) {
    if (parent[x] !== x) parent[x] = find(parent, parent[x]);
    return parent[x];
}
