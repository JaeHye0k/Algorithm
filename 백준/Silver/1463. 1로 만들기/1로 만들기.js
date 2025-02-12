const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./LJH/input.txt";
let n = Number(fs.readFileSync(filePath).toString());
let dp = Array(10 ** 6 + 1).fill(0);
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= n; i++) {
    var temp = [];
    if (i % 2 === 0) temp.push(dp[i / 2]);
    if (i % 3 === 0) temp.push(dp[i / 3]);
    temp.push(dp[i - 1]);
    dp[i] = Math.min(...temp) + 1;
}
console.log(dp[n]);
