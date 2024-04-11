const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);
const sum = {};
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i === j) continue;
        sum[arr[i] + arr[j]] = true;
    }
}

let answer = 0;
for (let i = 0; i < N; i++) {
    if (sum[arr[i]]) answer++;
}
console.log(answer);

// 반례
// 2
// 0 2
// correct = 0
// wrong = 1
