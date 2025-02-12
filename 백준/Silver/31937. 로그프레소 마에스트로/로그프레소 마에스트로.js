const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);
const infected = input[1].split(' ').map(Number);
const logs = input.slice(2).map((e) => e.split(' ').map(Number));
const visited = Array(N + 1).fill(false);
const origin = Array(N + 1).fill(false);
let answer = 0;
for (const pc of infected) {
    origin[pc] = true;
}

logs.sort((a, b) => a[0] - b[0]);

for (let i = 1; i <= N; i++) {
    visited[i] = true;
    for (const [t, a, b] of logs) {
        // a가 감염되었다면 b도 감염
        if (visited[a]) visited[b] = true;
    }
    let flag = true;
    for (let j = 1; j <= N; j++) {
        if (visited[j] !== origin[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        answer = i;
        break;
    } else visited.fill(false);
}

console.log(answer);