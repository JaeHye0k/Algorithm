const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input[0];
const arr = input.slice(1).map(Number);
let answer = [];
const dp = {
    1: 1,
    2: 2,
    3: 4,
};

for (let n of arr) {
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }
    answer.push(dp[n]);
}

console.log(answer.join('\n'));
