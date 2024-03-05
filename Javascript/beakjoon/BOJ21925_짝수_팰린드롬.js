const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);
let answer = 0;
let check = false;

let squence = [];
for (let i = 0; i < N; i += 2) {
    squence.push(...arr.slice(i, i + 2));
    if (JSON.stringify(squence) === JSON.stringify(squence.slice().reverse())) {
        answer++;
        squence = [];
        check = true;
    } else check = false;
}

console.log(check ? answer : -1);
