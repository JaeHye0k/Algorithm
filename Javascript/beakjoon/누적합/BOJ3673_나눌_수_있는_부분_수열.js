const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let T = +input[0];
let idx = 1;
let answer = '';

while (T--) {
    let count = 0;
    const [d, n] = input[idx++].split(' ').map(Number);
    const arr = input[idx++].split(' ').map(Number);
    const sum = Array(n + 1).fill(0);
    const mod = new Map();

    arr.reduce((acc, cur, i) => {
        sum[i + 1] = acc + cur;
        const remainder = sum[i + 1] % d;
        if (remainder === 0) count++;
        if (mod.has(remainder)) {
            count += mod.get(remainder);
            mod.set(remainder, mod.get(remainder) + 1);
        } else {
            mod.set(remainder, 1);
        }
        return acc + cur;
    }, 0);

    answer += count + '\n';
}
console.log(answer.trimEnd());
