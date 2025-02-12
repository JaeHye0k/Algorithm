const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const K = +input[1];
const map = input.slice(2, M + 2).map((e) => e.split(''));
const area = input.slice(M + 2).map((e) => e.split(' ').map(Number));
const arr = Array.from({ length: M + 1 }, () => Array.from({ length: N + 1 }, () => Array(3).fill(0)));
for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 'J') arr[i + 1][j + 1][0] = 1;
        else if (map[i][j] === 'O') arr[i + 1][j + 1][1] = 1;
        else if (map[i][j] === 'I') arr[i + 1][j + 1][2] = 1;
    }
}
const dp = Array.from({ length: M + 1 }, () => Array.from({ length: N + 1 }, () => Array(3).fill(0)));

for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= N; j++) {
        for (let k = 0; k < 3; k++) {
            dp[i][j][k] = dp[i][j - 1][k] + dp[i - 1][j][k] + arr[i][j][k] - dp[i - 1][j - 1][k];
        }
    }
}

let answer = '';
for (let [a, b, c, d] of area) {
    for (let k = 0; k < 3; k++) {
        answer += `${dp[c][d][k] - (dp[c][b - 1][k] + dp[a - 1][d][k] - dp[a - 1][b - 1][k])} `;
    }
    answer += `\n`;
}
console.log(answer.trimEnd());