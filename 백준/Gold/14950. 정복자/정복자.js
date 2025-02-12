const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, t] = input[0].split(' ').map(Number);
const edges = input.slice(1, 1 + M).map((e) => e.split(' ').map(Number));

const parent = [];
for (let i = 1; i <= N; i++) {
    parent[i] = i;
}
// 간선의 비용 기준으로 오름차순 정렬
edges.sort((a, b) => a[2] - b[2]);

function union(a, b) {
    if (a < b) parent[b] = a;
    else parent[a] = b;
}
function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
}

let count = 0;
let answer = 0;
for (let [a, b, c] of edges) {
    a = find(a);
    b = find(b);
    if (a !== b) {
        union(a, b);
        answer += c + t * count++;
    }
}

console.log(answer);
