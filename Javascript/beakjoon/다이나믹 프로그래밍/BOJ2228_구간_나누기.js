const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = [0].concat(input.slice(1).map(Number));
const dp1 = Array.from({ length: N + 1 }, () => [0].concat(Array(M).fill(-Infinity)));
const dp2 = Array.from({ length: N + 1 }, () => [0].concat(Array(M).fill(-Infinity)));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= Math.min(M, Math.ceil(i / 2)); j++) {
        dp1[i][j] = Math.max(dp1[i - 1][j], dp2[i - 1][j]);
        dp2[i][j] = Math.max(dp1[i - 1][j - 1], dp2[i - 1][j]) + arr[i];
    }
}
console.log(Math.max(dp1[N][M], dp2[N][M]));
