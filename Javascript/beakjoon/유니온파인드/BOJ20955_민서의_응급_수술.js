const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + M).map((e) => e.split(' ').map(Number));
const parent = Array.from({ length: N + 1 }, (_, i) => i);
let cut = 0;

function unionFind() {
    for (let i = 0; i < M; i++) {
        const a = find(arr[i][0]);
        const b = find(arr[i][1]);
        // 연결할 경우 사이클이 발생한다면
        if (a === b) cut++; // 연결 끊기 연산
        else union(a, b);
    }
}

function union(a, b) {
    a = find(a);
    b = find(b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
}

unionFind();
const set = new Set(parent);
console.log(cut + set.size - 2);
