const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const [E, S, M] = input.split(" ").map(Number);

let year = 1;
while (true) {
    if ((E - year) % 15 === 0 && (S - year) % 28 === 0 && (M - year) % 19 === 0) break;
    year++;
}

console.log(year);
