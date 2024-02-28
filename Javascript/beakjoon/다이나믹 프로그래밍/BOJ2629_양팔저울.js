const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const weights = input[1].split(' ').map(Number);
weights.unshift(0);
const M = +input[2];
const marbles = input[3].split(' ').map(Number);

const dp = [];
// 모든 추의 합
const max = weights.reduce((acc, cur) => (acc += cur), 0);
// 구슬이 0인 경우, 추의 개수가 0개인 경우를 고려하여 가로, 세로 1칸씩 더 늘려줌
for (let i = 0; i <= N; i++) {
    dp.push(Array.from({ length: max + 1 }, () => 'N'));
}
// i = 추, j = 구슬
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= max; j++) {
        // 추를 안올려도 무게가 일치하는 경우
        if (dp[i - 1][j] === 'Y') dp[i][j] = 'Y';
        // 추의 무게와 구슬의 무게가 딱 일치하는 경우
        else if (weights[i] === j) dp[i][j] = 'Y';
        // 추를 구슬쪽 저울에 올려놓았을 때 무게가 일치하는 경우
        else if (dp[i - 1][Math.abs(weights[i] - j)] === 'Y') dp[i][j] = 'Y';
        else if (dp[i - 1][weights[i] + j] === 'Y') dp[i][j] = 'Y';
    }
}
const answer = [];
for (let marble of marbles) {
    if (marble > max) answer.push('N');
    else answer.push(dp[N][marble]);
}
console.log(...answer);
