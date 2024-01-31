const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [n, m] = input.shift().split(" ").map(Number);
    const poke = input.splice(0, n);
    const numToStr = new Map();
    const strToNum = new Map();
    for (let i = 0; i < n; i++) {
        numToStr.set(i + 1, poke[i]);
        strToNum.set(poke[i], i + 1);
    }
    input.forEach((e) => {
        if (isNaN(e)) console.log(strToNum.get(e));
        else console.log(numToStr.get(+e));
    });
    process.exit();
});
