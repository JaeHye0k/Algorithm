const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
let answer = 0;

let n = N;
function countOne(num) {
    let count = 0;
    while (num > 0) {
        if (num % 2 === 1) {
            count++;
        }
        num = num >> 1;
    }
    return count;
}

while (countOne(n) > K) {
    n++; // 상점에서 물병 한 개 추가
    answer++;
}
console.log(answer);
