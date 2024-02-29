const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const weights = input[1].split(' ').map(Number);
const M = +input[2];
const marbles = input[3].split(' ').map(Number);

// 모든 추의 합
const maxWeight = weights.reduce((acc, cur) => (acc += cur), 0);
const dp = [Array(maxWeight + 1).fill('N')];
dp[0][weights[0]] = 'Y';

// i = 추, j = 구슬
for (let i = 1; i < N; i++) {
    // 이전 단계 dp 테이블 복사
    dp.push(JSON.parse(JSON.stringify(dp[i - 1])));
    // 현재 추의 무게에 해당하는 곳 'Y'로 변경
    dp[i][weights[i]] = 'Y';
    for (let j = 1; j <= maxWeight; j++) {
        if (dp[i - 1][j] === 'Y') {
            dp[i][j + weights[i]] = 'Y';
            dp[i][Math.abs(j - weights[i])] = 'Y';
        }
    }
}

const answer = [];
for (let marble of marbles) {
    if (marble > maxWeight) answer.push('N');
    else answer.push(dp[N - 1][marble]);
}
console.log(...answer);
