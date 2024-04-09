const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const chapters = input.slice(1).map((e) => e.split(' ').map(Number));
const dp = Array(T + 1).fill(0);

chapters.forEach(([k, s]) => {
    for (let i = T; i >= k; i--) {
        dp[i] = Math.max(dp[i], dp[i - k] + s);
    }
});
console.log(dp[T]);
