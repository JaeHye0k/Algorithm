const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let T = +input[0];
let idx = 1;
let answer = '';

while (T--) {
    const n = +input[idx++];
    const cloth = input.slice(idx, idx + n).map((e) => e.trim().split(' '));
    idx += n;
    const obj = {};
    for (let i = 0; i < n; i++) {
        const type = cloth[i][1];
        if (obj[type]) obj[type] += 1;
        else obj[type] = 1;
    }

    const values = Object.values(obj);
    let count = values.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    answer += count + '\n';
}
console.log(answer.trimEnd());
