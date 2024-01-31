const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function solution(poke, strNum) {
    strNum.forEach((e) => {
        if (!isNaN(e)) {
            console.log(poke.at(Number(e) - 1));
        } else {
            console.log(poke.indexOf(e) + 1);
        }
    });
}

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [n, m] = input.shift().split(" ").map(Number);
    const poke = input.filter((e, i) => i < n);
    const strNum = input.filter((e, i) => i >= n);
    solution(poke, strNum);
    process.exit();
});
