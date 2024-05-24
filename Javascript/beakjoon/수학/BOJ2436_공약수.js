const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [a, b] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
let min = Infinity;
let answer = '';

let x, y, n, m;
const right = b / a;

// x, y가 서로소인지 판별
function check(x, y) {
    let bigger = x > y ? x : y;
    for (let i = 2; i < bigger / 2; i++) {
        // x,y가 같은 수로 나누어떨어질 경우 서로소가 아님
        if (x % i === 0 && y % i === 0) return false;
    }
    return true;
}
for (let i = 1; i <= right / 2 + 1; i++) {
    y = i;
    x = right / y;
    // x가 소수일 때는 무시
    if (x - Math.floor(x) > 0) continue;
    if (x * y === right && check(x, y)) {
        n = a * x;
        m = a * y;
        if (n + m < min) {
            min = n + m;
            answer = m + ' ' + n;
        }
    }
}
console.log(answer);
