const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function solution(n, arr) {
    let dp = Array(n);
    dp[0] = arr[0];
    dp[1] = arr[0] + arr[1];
    dp[2] = Math.max(arr[0], arr[1]) + arr[2];

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i - 3] + arr[i - 1] + arr[i], dp[i - 2] + arr[i]);
    }
    return dp[n - 1];
}

let input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const n = Number(input[0]);
    const arr = input.slice(1).map(Number);
    console.log(solution(n, arr));
    process.exit();
});
