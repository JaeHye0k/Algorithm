const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);

let result = 0;
nums.sort((a, b) => a - b);

for (let i = 0; i < N - 1; i++) {
    let j = i + 1;
    for (let k = N - 1; k >= 0; k--) {
        if (j === k) break;
        if (nums[i] + nums[j] > nums[k]) {
            result = Math.max(result, k - i + 1);
            break;
        }
    }
}

if (result === 0) {
    result = N >= 2 ? 2 : N;
}

console.log(result);
