// x+y+z = k, x+y = k-z
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const union = input.slice(1).map(Number);
union.sort((a, b) => a - b);
const sum = [];

function binarySearch(left, right, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (sum[mid] === target) return true;
        else if (target < sum[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return false;
}

for (let x = 0; x < N; x++) {
    for (let y = x; y < N; y++) {
        // 중복을 최소화 하기 위해 y=x부터 시작
        sum.push(union[x] + union[y]);
    }
}

sum.sort((a, b) => a - b);

for (let k = N - 1; k >= 0; k--) {
    for (let z = k; z >= 0; z--) {
        const target = union[k] - union[z];
        const exist = binarySearch(0, sum.length - 1, target);
        if (exist) {
            console.log(union[k]);
            process.exit();
        }
    }
}
