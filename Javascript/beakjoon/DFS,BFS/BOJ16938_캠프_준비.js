const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, L, R, X] = input[0].split(' ').map(Number);
const problems = input[1].split(' ').map(Number);

let answer = 0;
function dfs(stack, cur) {
    const sum = stack.reduce((acc, cur) => acc + cur, 0);
    // 난이도의 합이 R보다 클 경우
    if (sum > R) return;
    // 난이도 조건을 충족할 경우
    if (L <= sum && Math.max(...stack) - Math.min(...stack) >= X) answer += 1;
    for (let i = cur + 1; i < N; i++) {
        dfs([...stack, problems[i]], i);
    }
}

for (let i = 0; i < N; i++) {
    dfs([problems[i]], i);
}

console.log(answer);
