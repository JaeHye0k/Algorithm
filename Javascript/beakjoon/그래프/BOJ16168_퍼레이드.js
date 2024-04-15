const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [v, e] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const degree = Array(v + 1).fill(0);
const parent = Array(v + 1).fill(-1);
arr.forEach(([s, e]) => {
    union(s, e);
    degree[s]++;
    degree[e]++;
});

// 오일러 회로이거나 오일러 경로인지 판별
// 차수가 홀수인 정점이 2개가 넘으면 오일러 회로, 오일러 경로가 될 수 없음
let odd = 0;
for (let i = 1; i <= v; i++) {
    if (degree[i] % 2 === 1) odd++;
}

let same = find(1);
for (let i = 2; i <= v; i++) {
    // 하나의 컴포넌트로 연결되어있지 않다면
    if (find(i) !== same) odd = 3;
}

if (odd === 2 || odd === 0) console.log('YES');
else console.log('NO');

function find(x) {
    if (parent[x] < 0) return x;
    return (parent[x] = find(parent[x]));
}

function union(a, b) {
    a = find(a);
    b = find(b);
    if (a === b) return;
    parent[b] = a;
}
