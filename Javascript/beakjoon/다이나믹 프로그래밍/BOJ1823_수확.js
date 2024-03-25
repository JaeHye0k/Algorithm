const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map(Number);
const dp = Array.from({ length: N }, () => Array(N).fill(0));

const getDP = (left, right, count) => {
    if (left > right) return 0;
    if (dp[left][right] !== 0) return dp[left][right];

    const leftSum = getDP(left + 1, right, count + 1) + arr[left] * count;
    const rightSum = getDP(left, right - 1, count + 1) + arr[right] * count;

    dp[left][right] = Math.max(leftSum, rightSum);
    return dp[left][right];
};

let answer = getDP(0, N - 1, 1);
console.log(answer);
