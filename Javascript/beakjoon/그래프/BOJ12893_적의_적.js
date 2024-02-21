const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
arr.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});
// 방문하지 않은 노드 = 0, 방문한 노드 = 1, -1 (이분)
const visited = Array(N + 1).fill(0);

function bfs(cur) {
    // 방문하지 않은 노드라면
    if (visited[cur] === 0) {
        const queue = [cur];
        let front = 0;
        visited[cur] = 1;
        while (queue.length > front) {
            const v = queue[front++];
            for (let next of graph[v]) {
                if (visited[next] === 0) {
                    visited[next] = visited[v] * -1; // 적대 관계인 노드는 반대 부호
                    queue.push(next);
                } else if (visited[next] === visited[v]) return 0;
            }
        }
    }
}

let answer = 1;
for (let i = 1; i <= N; i++) {
    if (bfs(i) === 0) {
        answer = 0;
        break;
    }
}

console.log(answer);
