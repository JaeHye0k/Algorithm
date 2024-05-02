// 오르막: 0, 내리막: 1
// 최선: 내리막 우선, 최악: 오르막 우선
// 최악일 때 피로도 - 최선일 때 피로도 구하기
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1).map((e) => e.split(' ').map(Number));

function kruskal(edges) {
    let incline = 0;
    for (let [a, b, cost] of edges) {
        if (find(a) !== find(b)) {
            union(a, b);
            // 오르막 개수
            if (cost === 0) incline++;
        }
    }
    return incline ** 2;
}

function union(a, b) {
    a = find(a);
    b = find(b);
    if (a < b) parents[b] = a;
    else parents[a] = b;
}

function find(x) {
    if (parents[x] !== x) parents[x] = find(parents[x]);
    return parents[x];
}

// 최적의 경로 구하기
edges.sort((a, b) => {
    if (b[0] === 0) return 0;
    else return b[2] - a[2];
});
let parents = Array.from({ length: N + 1 }, (_, i) => i);
const best = kruskal(edges);

// 최악의 경로 구하기 (내림차순 정렬)
edges.sort((a, b) => {
    if (b[0] === 0) return 0;
    else return a[2] - b[2];
});
parents = Array.from({ length: N + 1 }, (_, i) => i);
const worst = kruskal(edges);

console.log(worst - best);
