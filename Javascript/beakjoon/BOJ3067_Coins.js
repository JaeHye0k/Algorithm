const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let T = +input[0];
let inputIdx = 1;
let result = ``;
while (T--) {
    const N = +input[inputIdx++];
    const coins = input[inputIdx++].split(' ').map(Number);
    const target = +input[inputIdx++];
    let answer = 0;

    permutation(0, 0);
    function permutation(cur, sum) {
        for (let i = cur; i < N; i++) {
            if (sum > target) return;
            if (sum === target) {
                answer += 1;
                return;
            }
            permutation(i, sum + coins[i]);
        }
    }
    result += answer + '\n';
}
console.log(result.trimEnd());
