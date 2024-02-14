const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [A, B, C] = input[0].split(" ").map(Number);
const time = input.slice(1).map((e) => e.split(" ").map(Number));

let answer = 0;
let overlap;

for (let i = 1; i <= 100; i++) {
    overlap = 0;
    if (time[0][0] <= i && i < time[0][1]) overlap++;
    if (time[1][0] <= i && i < time[1][1]) overlap++;
    if (time[2][0] <= i && i < time[2][1]) overlap++;

    if (overlap === 0) continue;
    answer += overlap === 1 ? A : overlap === 2 ? B * overlap : C * overlap;
}
console.log(answer);
