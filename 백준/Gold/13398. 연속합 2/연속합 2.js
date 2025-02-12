const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
const dp = Array.from({ length: 2 }, () => Array(n));

// dp[0] = 숫자 한개를 빼지 않았을 때
// dp[1] = 숫자 한개를 뺐을 때
dp[0][0] = dp[1][0] = arr[0];

let max = arr[0];
for (let i = 1; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 1] + arr[i], arr[i]);
    dp[1][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + arr[i]);
    max = Math.max(max, dp[0][i], dp[1][i]);
}

console.log(max);