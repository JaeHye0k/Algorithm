const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
let answer = '';
for (let i = 0; i < input.length - 1; i++) {
    answer += solution(input[i]);
}

// dp[w][h] += dp[w][h+1] + dp[w+1][h-1]
function solution(n) {
    const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    dp[n][0] = 1;
    for (let w = n; w >= 0; w--) {
        for (let h = n; h >= 0; h--) {
            if (h < n) dp[w][h] += dp[w][h + 1];
            if (w < n && h > 0) dp[w][h] += dp[w + 1][h - 1];
        }
    }
    return dp[0][0] + '\n';
}

console.log(answer.trimEnd());
