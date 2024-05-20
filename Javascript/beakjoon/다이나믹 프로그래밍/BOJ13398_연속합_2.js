const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const nums = input[1].split(' ').map(Number);
const dp = Array.from({ length: n }, () => Array(2));
// dp[i][0] = 숫자 한개를 빼지 않았을 때
// dp[i][1] = 숫자 한개를 뺐을 때
let answer = (dp[0][0] = dp[0][1] = nums[0]);

for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0] + nums[i], nums[i]);
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + nums[i]);
    answer = Math.max(dp[i][0], dp[i][1], answer);
}

console.log(answer);
