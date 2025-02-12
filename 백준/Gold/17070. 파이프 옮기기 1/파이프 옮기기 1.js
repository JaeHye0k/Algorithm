const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const d1 = Array.from({ length: N }, () => Array(N).fill(0)); // 가로
const d2 = Array.from({ length: N }, () => Array(N).fill(0)); // 세로
const d3 = Array.from({ length: N }, () => Array(N).fill(0)); // 대각선
const map = input.slice(1).map((e) => e.split(' ').map(Number));

function isValid(y, x) {
    return y >= 0 && x >= 0 && y < N && x < N && !map[y][x];
}

d1[0][1] = 1;
for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
        // 대각선으로 갈 수 있다면
        if (isValid(i, j + 1) && isValid(i + 1, j) && isValid(i + 1, j + 1)) {
            d3[i + 1][j + 1] += d1[i][j] + d2[i][j] + d3[i][j];
        }
        // 가로로 갈 수 있다면
        if (isValid(i, j + 1)) {
            d1[i][j + 1] += d1[i][j] + d3[i][j];
        }
        // 세로로 갈 수 있다면
        if (isValid(i + 1, j)) {
            d2[i + 1][j] += d2[i][j] + d3[i][j];
        }
    }
}

const answer = d1[N - 1][N - 1] + d2[N - 1][N - 1] + d3[N - 1][N - 1];
console.log(answer);
