const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let T = +input[0];
let idx = 1;
const result = [];
let answer = '';
function recursive(start, n, str, sum, num, sign) {
    if (start === n) {
        sum += num * sign;
        if (sum === 0) result.push(str);
        return;
    }
    const next = start + 1;
    recursive(next, n, str + '+' + next, sum + num * sign, next, 1);
    recursive(next, n, str + '-' + next, sum + num * sign, next, -1);
    recursive(next, n, str + ' ' + next, sum, num * 10 + next, sign);
}

while (T--) {
    const N = +input[idx++];
    recursive(1, N, '1', 0, 1, 1);
    result.sort();
    answer += result.join('\n');
    answer += '\n\n';
    result.length = 0;
}
console.log(answer.trimEnd());
