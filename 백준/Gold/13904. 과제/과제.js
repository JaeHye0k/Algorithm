const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const maxDay = arr.reduce((acc, cur) => (cur[0] > acc ? cur[0] : acc), 0);
const date = Array(maxDay + 1).fill(0);
let answer = 0;

arr.sort((a, b) => b[1] - a[1]);

for (let [d, w] of arr) {
    if (date[d] === 0) {
        date[d] = w;
        answer += w;
    } else {
        for (let i = d; i >= 1; i--) {
            if (date[i] === 0) {
                date[i] = w;
                answer += w;
                break;
            }
        }
    }
}

console.log(answer);
