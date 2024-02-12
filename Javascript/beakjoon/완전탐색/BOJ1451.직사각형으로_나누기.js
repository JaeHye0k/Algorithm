const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const rect = input.slice(1).map((e) => e.split(""));
// 1. 전체를 겹치지 않는 직사각형 3개로 어떻게 나눌 것인가
// 1-1. 직사각형을 어떻게 판별할 것인가
