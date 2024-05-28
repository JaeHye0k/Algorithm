const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

let dp = arr.map((e) => e);
for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i], dp[i] + dp[i - 1]);
}
console.log(Math.max(...dp));
