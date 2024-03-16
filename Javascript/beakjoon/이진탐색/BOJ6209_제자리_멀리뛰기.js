const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [d, n, m] = input[0].split(' ').map(Number);
const stones = input.slice(1).map(Number);
stones.push(d);
stones.sort((a, b) => a - b);

let answer = 0;
let left = 0;
let right = d;
while (left <= right) {
    let mid = (left + right) >> 1;
    let preStone = 0;
    let cnt = 0;
    for (let stone of stones) {
        if (stone - preStone >= mid) {
            cnt++;
            preStone = stone;
        }
    }
    if (cnt >= n - m + 1) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);
