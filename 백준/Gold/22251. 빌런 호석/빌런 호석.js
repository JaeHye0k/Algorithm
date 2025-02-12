const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K, P, X] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const led = [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
];
const costs = Array.from({ length: 10 }, () => Array(10).fill(0));
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        let count = 0;
        for (let k = 0; k < 7; k++) {
            if (led[i][k] !== led[j][k]) {
                count++;
            }
        }
        costs[i][j] = count;
    }
}

let answer = 0;
for (let i = 1; i <= N; i++) {
    let cost = 0;
    let [a, b] = [X, i];
    for (let j = 0; j < K; j++) {
        cost += costs[a % 10][b % 10];
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
    }
    if (cost <= P && cost > 0) answer++;
}
console.log(answer);
