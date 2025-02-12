const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./LJH/input.txt";
let n = Number(fs.readFileSync(filePath).toString());
let dp = {
    1: 1,
    2: 1,
};
for (let i = 3; i <= n; i++) {
    // BigInt는 Number와 연산할 수 없기 때문에 같은 자료형으로 변환해준 뒤 연산한다.
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
// BigInt를 Number로 바꿔주면 정확성을 잃을 수도 있으니 String으로 변환해주어 출력한다.
console.log(String(dp[n]));
