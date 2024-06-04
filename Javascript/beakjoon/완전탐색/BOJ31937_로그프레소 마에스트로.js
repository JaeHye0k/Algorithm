const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const logs = input.slice(2).map((e) => e.split(' ').map(Number));
const visited = Array(N + 1).fill(false);
const infected = Array(N + 1).fill(false);
let answer = 0;
for (const pc of arr) {
    infected[pc] = true;
}

logs.sort((a, b) => a[0] - b[0]);

// i를 1~N까지 돌면서 가장 먼저 감염된 pc라고 가정하고, 로그의 시각 순서대로 파일 전송을 수행한다.
// 파일 전송을 모두 수행했을 때 감염된 pc와 입력으로 주어진 감염된 pc가 일치한다면 그때의 i가 정답
for (let i = 1; i <= N; i++) {
    visited[i] = true;
    for (const [t, a, b] of logs) {
        // a가 감염되었다면 b도 감염
        if (visited[a]) visited[b] = true;
    }
    let flag = true;
    for (let j = 1; j <= N; j++) {
        if (visited[j] !== infected[j]) {
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
