const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function solution(n, arr) {
    let dp = JSON.parse(JSON.stringify(arr));
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], arr[i] + dp[j]);
        }
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
