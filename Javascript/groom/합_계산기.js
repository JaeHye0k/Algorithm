const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout,
});

let T = null;
let inputCount = 0;
let arr = [];

rl.on('line', (line) => {
    if (!T) T = +line;
    else {
        arr.push(line.split(' '));
        inputCount++;
    }
    if (inputCount === T) rl.close();
}).on('close', () => {
    solution(arr);
    process.exit();
});

function solution(arr) {
    let answer = 0;
    for (let [a, op, b] of arr) {
        a = +a;
        b = +b;
        if (op === '+') answer += a + b;
        else if (op === '-') answer += a - b;
        else if (op === '*') answer += a * b;
        else if (op === '/') answer += Math.floor(a / b);
    }
    console.log(answer);
}
