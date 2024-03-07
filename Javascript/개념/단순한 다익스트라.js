const [n, m] = [6, 11];
const start = 1;
const graph = Array.from({ length: n + 1 }, () => []);
const input = [
    [1, 2, 2],
    [1, 3, 5],
    [1, 4, 1],
    [2, 3, 3],
    [2, 4, 2],
    [3, 2, 3],
    [3, 6, 5],
    [4, 3, 3],
    [4, 5, 1],
    [5, 3, 1],
    [5, 6, 2],
];
input.forEach(([a, b, c]) => graph[a].push([b, c]));
const INF = Infinity;
const visited = Array(n + 1).fill(false);
const distance = Array(n + 1).fill(INF);

// 다익스트라 알고리즘 수행
dijkstra(start);

// 최단거리 테이블 출력
for (let i = 1; i <= n; i++) {
    if (distance[i] === INF) console.log('INFINITY');
    else console.log(distance[i]);
}

// 최단 거리 노드 선택
function getMinIndex() {
    let minValue = INF;
    let index = 0;
    for (let i = 1; i <= n; i++) {
        if (minValue > distance[i] && !visited[i]) {
            minValue = distance[i];
            index = i;
        }
    }
    return index;
}

function dijkstra(start) {
    distance[start] = 0; // 시작 노드의 최단거리 갱신
    visited[start] = true;
    // 시작 노드와 인접한 노드의 최단거리 갱신
    for (let [adj, cost] of graph[start]) {
        distance[adj] = cost;
    }
    // 시작 노드에 대한 작업은 이미 수행해주었기 때문에 n-1회만 실행함
    for (let i = 0; i < n - 1; i++) {
        let cur = getMinIndex();
        visited[cur] = true;
        for (let [adj, cost] of graph[cur]) {
            let totalCost = distance[cur] + cost;
            if (distance[adj] > totalCost) distance[adj] = totalCost;
        }
    }
}
