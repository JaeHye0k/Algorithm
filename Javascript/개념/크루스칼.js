// 노드의 개수, 간선의 개수
const [v, e] = [7, 9];
// 모든 간선을 담는 배열 [cost,a,b]
const edges = [
    [29, 1, 2],
    [75, 1, 5],
    [35, 2, 3],
    [34, 2, 6],
    [7, 3, 4],
    [23, 4, 6],
    [13, 4, 7],
    [53, 5, 6],
    [25, 6, 7],
];
// 간선의 비용을 기준으로 오름차순 정렬
edges.sort((a, b) => a[0] - b[0]);
// 부모 노드 테이블 초기화
const parent = Array(v + 1).fill(0);
// 부모 테이블에서, 부모를 자기 자신으로 초기화
for (let i = 1; i <= v; i++) {
    parent[i] = i;
}

let result = 0;

for (let [cost, a, b] of edges) {
    // 사이클이 발생하지 않는 경우
    if (findParent(parent, a) !== findParent(parent, b)) {
        unionParent(parent, a, b);
        result += cost;
    }
}

console.log(result);

function findParent(parent, x) {
    // 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀 호출
    if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
    return parent[x];
}

function unionParent(parent, a, b) {
    a = findParent(parent, a);
    b = findParent(parent, b);
    // 더 작은 번호를 부모 노드로
    if (a < b) parent[b] = a;
    else parent[a] = b;
}
