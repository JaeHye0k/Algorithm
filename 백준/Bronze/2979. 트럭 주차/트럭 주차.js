const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);
const truck = input.slice(1).map((e) => e.split(' ').map(Number));
let answer = 0;

for (let i = 1; i <= 100; i++) {
    let count = 0;
    truck.forEach(([start, end]) => {
        if (start <= i && i < end) count += 1;
    });
    if (count === 1) answer += A;
    else if (count === 2) answer += B * count;
    else if (count === 3) answer += C * count;
}
console.log(answer);
