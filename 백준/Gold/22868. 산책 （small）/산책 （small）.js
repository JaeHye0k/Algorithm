// S에서 E로 가는 최단 경로와 E에서 S로 가는 최단 경로
// 왔던 경로는 다시 못 방문함

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const [S, E] = input.at(-1).split(' ').map(Number);
const arr = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const visited = Array(N + 1).fill(false);
const graph = Array.from({ length: N + 1 }, () => []);
arr.forEach(([s, e]) => {
    graph[s].push(e);
    graph[e].push(s);
});
graph.forEach((v) => v.sort((a, b) => a - b));

let goingPath = bfs(S, E, [S]);
visited.fill(false);
goingPath.forEach((i) => (visited[i] = true));
visited[S] = false;
let comingPath = bfs(E, S, goingPath);
console.log(comingPath.length - 1);

function bfs(start, end, path) {
    const queue = [[start, path]];
    let front = 0;
    visited[start] = true;
    while (queue.length > front) {
        const [cur, path] = queue[front++];
        if (cur === end) return path;
        for (let next of graph[cur]) {
            if (!visited[next]) {
                queue.push([next, [...path, next]]);
                visited[next] = true;
            }
        }
    }
}
