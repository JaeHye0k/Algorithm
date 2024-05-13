const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const superior = input[1].split(' ').map(Number);
const employee = input.slice(2, 2 + m).map((e) => e.split(' ').map(Number));
const score = Array(n + 1).fill(0);

for (const [i, w] of employee) {
    score[i] += w;
}

for (let i = 1; i < n; i++) {
    score[i + 1] += score[superior[i]];
}

score.shift();
console.log(score.join(' '));
