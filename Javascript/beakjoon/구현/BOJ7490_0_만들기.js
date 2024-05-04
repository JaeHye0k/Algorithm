const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input[0];
const Ns = input.slice(1).map(Number);
const arr1 = [];
const arr2 = [];
let answer = '';

function bruteforce(sum, sign, num, n, str, N) {
    if (n === N) {
        sum += sign * num;
        if (sum === 0) arr1.push(str);
        return;
    }
    const next = n + 1;
    bruteforce(sum, sign, num * 10 + next, next, str + ' ' + next, N);
    bruteforce(sum + sign * num, 1, next, next, str + '+' + next, N);
    bruteforce(sum + sign * num, -1, next, next, str + '-' + next, N);
}

for (let N of Ns) {
    bruteforce(0, 1, 1, 1, '1', N);
    arr2.push([...arr1]);
    arr1.length = 0;
}

arr2.forEach((row) => {
    row.sort();
    answer += row.join('\n');
    answer += '\n\n';
});

console.log(answer.trimEnd());
