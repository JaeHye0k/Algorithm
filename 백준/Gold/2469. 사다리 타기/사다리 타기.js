const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const k = +input[0];
const n = +input[1];
const result = input[2].trimEnd().split('');
const ladder = input.slice(3).map((e) => e.trimEnd().split(''));
let questionIdx;
for (let i = 0; i < n; i++) {
    if (ladder[i][0] === '?') {
        questionIdx = i;
        break;
    }
}

const start = Array.from(Array(k), (_, i) => String.fromCodePoint(65 + i));
const end = result;

for (let i = 0; i < questionIdx; i++) {
    for (let j = 0; j < k - 1; j++) {
        if (ladder[i][j] === '-') {
            [start[j], start[j + 1]] = [start[j + 1], start[j]];
        }
    }
}

for (let i = n - 1; i > questionIdx; i--) {
    for (let j = 0; j < k - 1; j++) {
        if (ladder[i][j] === '-') {
            [end[j], end[j + 1]] = [end[j + 1], end[j]];
        }
    }
}

let answer = '';
for (let i = 0; i < k - 1; i++) {
    if (start[i] === end[i]) answer += '*';
    else if (start[i] === end[i + 1] && start[i + 1] === end[i]) {
        answer += '-';
        [start[i], start[i + 1]] = [start[i + 1], start[i]];
    } else {
        answer = 'x'.repeat(k - 1);
        break;
    }
}

console.log(answer);
