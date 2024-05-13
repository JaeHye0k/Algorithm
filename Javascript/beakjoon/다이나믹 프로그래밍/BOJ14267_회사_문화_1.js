const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const superior = [0].concat(input[1].split(' ').map(Number));
const employee = input.slice(2, 2 + m).map((e) => e.split(' ').map(Number));
const compliment = Array(n + 1).fill(0);

for (const [i, w] of employee) {
    compliment[i] += w;
}

for (let i = 2; i <= n; i++) {
    compliment[i] += compliment[superior[i]];
}

compliment.shift();
console.log(compliment.join(' '));
