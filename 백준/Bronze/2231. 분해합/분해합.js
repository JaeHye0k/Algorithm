function solution(n) {
    let result = [];
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr = [...i.toString()].map(Number);
        let sum = i;
        for (let num of arr) {
            sum += num;
        }
        if (n === sum) result.push(i);
    }
    return result.length ? Math.min(...result) : 0;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const n = Number(input[0]);
    console.log(solution(n));
    process.exit();
});
