const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let T = +input[0];
let inputIdx = 1;
let answer = ``;
while (T--) {
    const N = +input[inputIdx++];
    const coins = input[inputIdx++].split(' ').map(Number);
    const target = +input[inputIdx++];
    const dp = Array(target + 1).fill(0);
    for (let coin of coins) {
        if (coin > target) continue;
        dp[coin] += 1;
        for (let i = coin + 1; i <= target; i++) {
            dp[i] += dp[i - coin];
        }
    }
    answer += dp[target] + '\n';
}
console.log(answer.trimEnd());
