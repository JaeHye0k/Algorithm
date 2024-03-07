const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input[0];
let inputIdx = 1;

for (let i = 0; i < T; i++) {
    const [r, c] = input[inputIdx++].split(' ').map(Number);
    const edges = [];
    // 수평(행) 간선 연결
    for (let i = 0; i < r; i++) {
        const row = input[inputIdx++].split(' ').map(Number);
        for (let j = 0; j < c - 1; j++) {
            edges.push([row[j], i * c + j, i * c + j + 1]); // [cost, a, b]
        }
    }
    // 수직(열) 간선 연결
    for (let i = 0; i < r - 1; i++) {
        const row = input[inputIdx++].split(' ').map(Number);
        for (let j = 0; j < c; j++) {
            edges.push([row[j], i * c + j, (i + 1) * c + j]); // [cost, a, b]
        }
    }
    edges.sort((a, b) => a[0] - b[0]);
    const parents = Array(r * c).fill(0);
    for (let i = 0; i < r * c; i++) {
        parents[i] = i;
    }
    let answer = 0;
    for (let [cost, a, b] of edges) {
        // 사이클을 생성하지 않는다면
        if (find(parents, a) !== find(parents, b)) {
            union(parents, a, b);
            answer += cost;
        }
    }
    console.log(answer);
}

// 루트 노드 찾기
function find(parents, x) {
    if (parents[x] !== x) parents[x] = find(parents, parents[x]);
    return parents[x];
}

function union(parents, a, b) {
    a = find(parents, a);
    b = find(parents, b);
    if (a < b) parents[b] = a;
    else parents[a] = b;
}
