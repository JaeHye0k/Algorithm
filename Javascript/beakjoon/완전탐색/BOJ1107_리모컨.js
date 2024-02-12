const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = [...input].map(Number);
const brokens = input[2] ? input[2].split(" ") : [];
let answer = Math.abs(N - 100);

for (let i = 0; i <= N * 2 + 100; i++) {
    let numString = i.toString();
    let isValid = true;
    for (let j = 0; j < numString.length; j++) {
        if (brokens.includes(numString[j])) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        answer = Math.min(answer, Math.abs(N - i) + numString.length);
    }
}

console.log(answer);
