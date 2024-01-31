const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function solution(n, arr) {
    let dp = Array.from(Array(n), () => Array(2).fill(1));
    // 앞에서부터 증가하는 부분 수열의 길이를 구한다.
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            // dp[i][0] 에는 arr[i]에 대한 가장 긴 증가하는 부분 수열의 길이가 저장됨
            if (arr[i] > arr[j]) dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
        }
    }
    // 뒤에서부터 감소하는 부분 수열의 길이를 구한다.
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            // dp[i][1] 에는 arr[i]에 대한 가장 긴 감소하는 부분 수열의 길이가 저장됨
            if (arr[i] > arr[j]) dp[i][1] = Math.max(dp[i][1], dp[j][1] + 1);
        }
    }
    let result = dp.reduce((acc, [a, b]) => {
        return Math.max(acc, a + b);
    }, dp[0][0] + dp[0][1]);
    console.log(result - 1);
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
