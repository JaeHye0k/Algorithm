const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
let max = 0;
let acc = 0;

let left = (right = 0);
while (right < arr.length) {
    if (left === right) acc += arr[left];
    else acc += arr[right];
    if (acc < 0) {
        left = right + 1;
        acc = 0;
    }
    max = Math.max(acc, max);
    right++;
}
console.log(max === 0 ? Math.max(...arr) : max);
