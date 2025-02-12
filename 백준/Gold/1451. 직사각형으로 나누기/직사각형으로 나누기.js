const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const rect = input.slice(1).map((e) => e.split("").map(Number));
let result = 0;

function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

for (let i = 1; i < M; i++) {
    let left = rect.reduce((acc, row) => (acc += sum(row.slice(0, i))), 0);
    // ㅣㅣ 모양으로 나누기
    for (let j = i + 1; j < M; j++) {
        let middle = rect.reduce((acc, row) => (acc += sum(row.slice(i, j))), 0);
        let right = rect.reduce((acc, row) => (acc += sum(row.slice(j))), 0);
        result = Math.max(result, left * middle * right);
    }
    // ㅏ 모양으로 나누기
    for (let j = 1; j < N; j++) {
        let top = rect.slice(0, j).reduce((acc, row) => (acc += sum(row.slice(i))), 0);
        let bottom = rect.slice(j).reduce((acc, row) => (acc += sum(row.slice(i))), 0);
        result = Math.max(result, left * top * bottom);
    }
    let right = rect.reduce((acc, row) => (acc += sum(row.slice(i))), 0);
    // ㅓ 모양으로 나누기
    for (let j = 1; j < N; j++) {
        let top = rect.slice(0, j).reduce((acc, row) => (acc += sum(row.slice(0, i))), 0);
        let bottom = rect.slice(j).reduce((acc, row) => (acc += sum(row.slice(0, i))), 0);
        result = Math.max(result, right * top * bottom);
    }
}

for (let i = 1; i < N; i++) {
    let top = rect.slice(0, i).reduce((acc, row) => (acc += sum(row)), 0);
    // = 모양으로 나누기
    for (let j = i + 1; j < N; j++) {
        let middle = rect.slice(i, j).reduce((acc, row) => (acc += sum(row)), 0);
        let bottom = rect.slice(j).reduce((acc, row) => (acc += sum(row)), 0);
        result = Math.max(result, top * middle * bottom);
    }
    // ㅜ 모양으로 나누기
    for (let j = 1; j < M; j++) {
        let left = rect.slice(i).reduce((acc, row) => (acc += sum(row.slice(0, j))), 0);
        let right = rect.slice(i).reduce((acc, row) => (acc += sum(row.slice(j))), 0);
        result = Math.max(result, top * left * right);
    }
    // ㅗ 모양으로 나누기
    let bottom = rect.slice(i).reduce((acc, row) => (acc += sum(row)), 0);
    for (let j = 1; j < M; j++) {
        let left = rect.slice(0, i).reduce((acc, row) => (acc += sum(row.slice(0, j))), 0);
        let right = rect.slice(0, i).reduce((acc, row) => (acc += sum(row.slice(j))), 0);
        result = Math.max(result, bottom * left * right);
    }
}

console.log(result);