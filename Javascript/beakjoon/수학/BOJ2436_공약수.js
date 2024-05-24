const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [a, b] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
let min = Infinity;
let answer = '';

let x;
let y;

function check(x, y) {
    let bigger = x > y ? x : y;
    for (let i = 2; i < bigger / 2; i++) {
        // x와 y가 같은 수로 나누어 떨어지면 최소공배수를 구하기 위해 사용할 수 없음
        if (x % i === 0 && y % i === 0) return false;
    }
    return true;
}
for (let i = 1; i <= b / a / 2 + 1; i++) {
    y = i;
    x = b / a / y;
    // x가 소수일 때는 무시
    if (x - Math.floor(x) > 0) continue;
    if (x * y === b / a && check(x, y)) {
        if (a * x + a * y < min) {
            min = a * x + a * y;
            answer = a * y + ' ' + a * x;
        }
    }
}
console.log(answer);
