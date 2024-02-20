const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
arr.forEach(([a, b]) => {
    if (graph[a]) graph[a].push(b);
    else graph[a] = b;
    if (graph[b]) graph[b].push(a);
    else graph[b] = a;
});
// 방문하지 않은 노드 = 0, 방문한 노드 = 1, -1 (이분)
const visited = Array(N + 1).fill(0);
let answer = 1;

for (let i = 1; i <= N; i++) {
    // 방문하지 않은 노드라면
    if (visited[i] === 0) {
        const queue = [];
        let front = 0;
        queue.push(i);
        visited[i] = 1;
        while (queue.length > front) {
            const v = queue[front++];
            for (let j of graph[v]) {
                if (visited[j] === 0) {
                    visited[j] = visited[v] * -1; // 적대 관계인 노드는 반대 부호
                    queue.push(j);
                } else if (visited[j] === visited[v]) {
                    // 적대 관계인 노드의 부호가 일치할 경우
                    answer = 0;
                }
            }
        }
    }
}

console.log(answer);
