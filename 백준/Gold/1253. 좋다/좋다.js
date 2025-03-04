const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
let answer = 0;

for (let i = 0; i < N; i++) {
    answer += binarySearch(i);
}
console.log(answer);

function binarySearch(target) {
    let left = 0;
    let right = N - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === arr[target]) {
            if (left === target) left++;
            else if (right === target) right--;
            else return 1;
        } else if (sum > arr[target]) right--;
        else left++;
    }
    return 0;
}
