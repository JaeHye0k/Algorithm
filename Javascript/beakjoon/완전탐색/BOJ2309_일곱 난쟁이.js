const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const { stdout } = require("process");

let total = input.reduce((acc, cur) => (acc += cur));
let index = [];

for (let i = 0; i < 9; i++) {
    let temp = total - input[i];
    for (let j = 0; j < 9; j++) {
        if (j !== i && temp - input[j] === 100) {
            index.push(i);
            index.push(j);
            break;
        }
    }
}

index = index.splice(0, 2); // 가능한 정답이 여러 가지인 경우 고려
let answer = input.filter((e, i) => !index.includes(i));
answer.sort((a, b) => a - b);
for (let dwarf of answer) {
    process.stdout.write(dwarf + "\n");
}
