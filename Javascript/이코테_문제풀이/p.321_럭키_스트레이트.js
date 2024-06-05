const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

const mid = N.length >> 1;
const left = N.slice(0, mid);
const right = N.slice(mid);

let leftSum = 0;
let rightSum = 0;
for (let i = 0; i < mid; i++) {
    leftSum += Number(left[i]);
    rightSum += Number(right[i]);
}

console.log(leftSum === rightSum ? 'LUCKY' : 'READY');
