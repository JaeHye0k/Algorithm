const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const arr = input.slice(2).map((e) => e.split(' ').map(Number));
arr.forEach(([s, e]) => {
    graph[s].push(e);
    graph[e].push(s);
});

let answer = 0;
const queue = [1];
visited[1] = true;
let front = 0;
while (queue.length > front) {
    const v = queue[front++];
    for (let next of graph[v]) {
        if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
            answer++;
        }
    }
}
console.log(answer);
