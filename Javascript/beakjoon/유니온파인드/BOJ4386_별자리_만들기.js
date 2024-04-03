const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const parent = Array(n);
const tree = [];
let answer = 0;

// 두 점 사이의 거리 구하기
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const powX = Math.pow(arr[i][0] - arr[j][0], 2);
        const powY = Math.pow(arr[i][1] - arr[j][1], 2);
        const dist = Math.sqrt(powX + powY);
        tree.push([i, j, dist]);
    }
}

// 거리 순으로 정렬
tree.sort((a, b) => a[2] - b[2]);

// 각 노드의 부모 노드 초기화
for (let i = 0; i < n; i++) {
    parent[i] = i;
}

tree.forEach(([a, b, dist]) => {
    if (find(a) !== find(b)) {
        union(a, b);
        answer += dist;
    }
});

console.log(answer.toFixed(2));

function union(a, b) {
    a = find(a);
    b = find(b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

function find(x) {
    if (parent[x] !== x) x = find(parent[x]);
    return x;
}
