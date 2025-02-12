const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
arr.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});
const visited = Array(N + 1).fill(0);

let answer = 1;
for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
        const queue = [i];
        let front = 0;
        visited[i] = 1;
        while (queue.length > front) {
            let v = queue[front++];
            for (let i of graph[v]) {
                if (visited[i] === 0) {
                    queue.push(i);
                    visited[i] = visited[v] * -1;
                } else if (visited[i] === visited[v]) {
                    answer = 0;
                    break;
                }
            }
        }
    }
}
console.log(answer);
