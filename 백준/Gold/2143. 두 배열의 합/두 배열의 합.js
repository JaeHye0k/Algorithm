const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input[0];
const n = +input[1];
const arrA = input[2].split(' ').map(Number);
const m = +input[3];
const arrB = input[4].split(' ').map(Number);

const obj = {};
let answer = 0;

for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
        sum += arrA[j];
        if (obj[sum]) obj[sum] += 1;
        else obj[sum] = 1;
    }
}

for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = i; j < m; j++) {
        sum += arrB[j];
        if (obj[T - sum]) answer += obj[T - sum];
    }
}
console.log(answer);
