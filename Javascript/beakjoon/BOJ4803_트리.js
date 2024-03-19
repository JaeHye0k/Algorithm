const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let t = 1;
let inputIdx = 1;
let answer = '';

while (N + M > 0) {
    const graph = Array.from({ length: N + 1 }, () => []);
    const visited = Array(N + 1).fill(false);
    const arr = input.slice(inputIdx, inputIdx + M).map((e) => e.split(' ').map(Number));

    arr.forEach(([s, e]) => {
        graph[s].push(e);
        graph[e].push(s);
    });

    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            if (!dfs(i, i)) count++;
        }
    }

    answer += count > 1 ? `Case ${t++}: A forest of ${count} trees.\n` : count === 1 ? `Case ${t++}: There is one tree.\n` : `Case ${t++}: No trees.\n`;

    inputIdx += M;
    [N, M] = input[inputIdx++].split(' ').map(Number);

    function dfs(cur, parent) {
        visited[cur] = true;
        for (let next of graph[cur]) {
            if (!visited[next]) {
                // 사이클이 발생했으면 더 이상 탐색하지 않고 종료
                if (dfs(next, cur)) return true;
            }
            // 방문한 적 있고, 직전 노드가 아니라면 사이클 발생
            else if (parent !== next) return true;
        }
        return false;
    }
}

console.log(answer.trimEnd());
