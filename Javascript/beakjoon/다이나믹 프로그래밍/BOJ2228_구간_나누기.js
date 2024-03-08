const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);
const dp1 = Array.from({ length: N + 1 }, () => {
    const row = new Array(M + 1).fill(-Infinity);
    row[0] = 0;
    return row;
});
const dp2 = Array.from({ length: N + 1 }, () => {
    const row = new Array(M + 1).fill(-Infinity);
    row[0] = 0;
    return row;
});

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        dp1[i][j] = Math.max(dp1[i - 1][j], dp2[i - 1][j]);
        dp2[i][j] = Math.max(dp1[i - 1][j - 1], dp2[i - 1][j]) + arr[i - 1];
    }
}
console.log(Math.max(dp1[N][M], dp2[N][M]));
