const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function solution(n, arr) {
    let dp = arr.map((e) => e);
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i], dp[i] + dp[i - 1], dp[i] + arr[i - 1]);
    }
    console.log(Math.max(...dp));
}

let input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const n = Number(input[0]);
    const arr = input[1].split(" ").map(Number);
    solution(n, arr);
    process.exit();
});
