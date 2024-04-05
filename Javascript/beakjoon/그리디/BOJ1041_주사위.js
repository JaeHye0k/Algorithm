const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const dice = input[1].split(' ').map(Number);
const across = [5, 4, 3, 2, 1, 0];

let min1 = Math.min(...dice);
let min2 = Infinity;
let min3 = Infinity;

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        if (j === across[i]) continue; // 두 면이 맞은 편이라면 스킵
        min2 = Math.min(min2, dice[i] + dice[j]);
    }
}

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        if (j === across[i]) continue;
        for (let k = j + 1; k < 6; k++) {
            if (k === across[i] || k === across[j]) continue; // 세 면 중 하나라도 맞은 편이라면 스킵
            min3 = Math.min(min3, dice[i] + dice[j] + dice[k]);
        }
    }
}

let sum1 = ((N - 2) * (N - 1) * 4 + (N - 2) ** 2) * min1;
let sum2 = ((N - 1) * 4 + (N - 2) * 4) * min2;
let sum3 = min3 * 4;

// 주사위가 하나인 케이스 고려
console.log(N === 1 ? dice.reduce((acc, cur) => (acc += cur), 0) - Math.max(...dice) : sum1 + sum2 + sum3);
