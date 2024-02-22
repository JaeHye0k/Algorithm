const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const P = +input.shift();
const arr = input.map((e) => e.split(' ').map(Number));
let answer = '';
arr.forEach(([T, ...line]) => {
    let count = 0;
    let idx = 0;
    for (let i = 1; i < 20; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (line[j] > line[i]) {
                idx = j;
                count += 1;
            }
        }
        [line[idx], line[i]] = [line[i], line[idx]];
    }
    answer += `${T} ${count}\n`;
});

console.log(answer.trimEnd());
