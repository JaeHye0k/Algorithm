const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function solution(obj, strNum) {
    strNum.forEach((e) => {
        let result = Object.keys(obj).find((key) => obj[key] === e) || obj[e];
        console.log(result);
    });
}

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [n, m] = input.shift().split(" ").map(Number);
    const poke = input.filter((e, i) => i < n);
    const obj = {};
    poke.forEach((e, i) => {
        obj[i + 1] = e;
    });
    const strNum = input.filter((e, i) => i >= n);
    solution(obj, strNum);
    process.exit();
});
