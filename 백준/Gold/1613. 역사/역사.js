const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const cases = input.slice(1, 1 + k).map((e) => e.split(' ').map(Number));
const s = +input[1 + k];
const query = input.slice(1 + k + 1, 1 + k + 1 + s).map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
let answer = '';

for (const [a, b] of cases) {
    graph[a][b] = -1; // a가 먼저오는 경우 -1
    graph[b][a] = 1; // b가 먼저오는 경우 1
}

for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            // i, j 사건에 대한 전후 관계가 직접 나와있지 않은 경우
            if (graph[i][j] === 0) {
                // i가 k보다 빠르고, k가 j보다 빠르면, i는 j보다 빠르다
                if (graph[i][k] === 1 && graph[k][j] === 1) graph[i][j] = 1;
                // i가 k보다 느리고, k가 j보다 느리면, i는 j보다 느리다
                else if (graph[i][k] === -1 && graph[k][j] === -1) graph[i][j] = -1;
            }
        }
    }
}

for (const [a, b] of query) {
    answer += graph[a][b] + '\n';
}

console.log(answer.trimEnd());
