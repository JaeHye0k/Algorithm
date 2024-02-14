const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [A, B, C] = input[0].split(" ").map(Number);
const time = input.slice(1).map((e) => e.split(" ").map(Number));
let answer = 0;
time.sort((a, b) => a[0] - b[0]);
time.forEach();
//14분
