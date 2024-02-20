const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const [S, E] = input[M + 1].split(' ').map(Number);
const roads = input.splice(1, M).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => new Array());
roads.forEach(([s, e]) => {
    graph[s].push(e);
    graph[e].push(s);
});

// visited[n][0] : n번 정점의 방문 여부
// visited[n][1] : n번 정점까지의 경로
const visited = Array.from({ length: N + 1 }, () => [false, []]);

// 작은 수부터 방문해주기 위해 오름차순으로 정렬
graph.forEach((_, i) => {
    graph[i].sort((a, b) => a - b);
});

function bfs(start, end) {
    const queue = [start];
    let front = 0;
    while (queue.length > front) {
        const v = queue[front++];
        if (v === end) break;
        graph[v].forEach((e) => {
            if (!visited[e][0]) {
                visited[e][0] = true;
                visited[e][1] = [...visited[v][1], e];
                queue.push(e);
            }
        });
    }
}

visited[S][0] = true;
visited[S][1] = [S];
bfs(S, E);

// E까지 온 경로에 포함되지 않았다면 방문 해제해주고 경로 초기화
for (let i = 1; i <= N; i++) {
    if (!visited[E][1].includes(i)) {
        visited[i][0] = false;
        visited[i][1] = [];
    }
}

visited[S][0] = false; // 시작노드로 가야하니 시작 노드도 방문 해제
visited[S][1] = [];
bfs(E, S);

console.log(visited[S][1].length - 1);
