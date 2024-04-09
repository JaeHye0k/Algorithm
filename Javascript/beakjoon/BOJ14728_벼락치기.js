const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const chapters = input.slice(1).map((e) => e.split(' ').map(Number));
chapters.unshift([null, null]);
const dp = Array.from({ length: N + 1 }, () => Array(T + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 0; j < chapters[i][0]; j++) {
        dp[i][j] = dp[i - 1][j];
    }
    for (let j = chapters[i][0]; j <= T; j++) {
        dp[i][j] = dp[i - 1][j - chapters[i][0]] + chapters[i][1];
    }
}

let answer = 0;
for (let i = 1; i <= N; i++) {
    answer = Math.max(answer, dp[i][T]);
}
console.log(answer);

// i = 0 ~ N-1
// j = k[i] ~ T
// dp[i][j] = dp[j-k[i]] + s[i]
// k = chapters[i][0]
// s = chapters[i][1]
