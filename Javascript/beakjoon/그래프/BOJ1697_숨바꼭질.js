// DP
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const dp = Array(10 ** 6).fill(Infinity);

// N이 더 클 경우 -1 연산만 수행해야 갈 수 있음
if (N >= K) {
    console.log(N - K);
    process.exit(0);
}
for (let i = 0; i < N; i++) {
    dp[i] = N - i;
}

dp[N] = 0;

for (let i = N + 1; i <= K; i++) {
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i >> 1], dp[i - 1]) + 1;
    } else {
        dp[i] = Math.min(dp[i - 1] + 1, dp[(i + 1) >> 1] + 2);
    }
}

console.log(dp[K]);

// BFS
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
// const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
// const visited = Array(10 ** 6).fill(false);
// let answer = 0;

// const queue = [[N, 0]];
// let front = 0;
// visited[N] = true;

// while (queue.length > front) {
//     const [cur, sec] = queue[front++];
//     if (cur > 100000) continue;
//     if (cur === K) {
//         answer = sec;
//         break;
//     }
//     for (let next of [cur - 1, cur + 1, cur * 2]) {
//         if (!visited[next] && 0 <= next && next <= 100000) {
//             visited[next] = true;
//             queue.push([next, sec + 1]);
//         }
//     }
// }
// console.log(answer);
