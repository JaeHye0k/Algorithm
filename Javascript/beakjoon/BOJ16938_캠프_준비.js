const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, L, R, X] = input[0].split(" ").map(Number);
const problems = input[1].split(" ").map(Number);
const visited = Array(N).fill(false);

let answer = 0;
function dfs(difficulty, stack, cur) {
    // 난이도의 합이 R보다 클 경우 리턴
    if (difficulty > R) return;
    // 난이도의 조건을 충족할 경우
    if (L <= difficulty && Math.max(...stack) - Math.min(...stack) >= X) answer += 1;
    // 난이도의 합이 L보다 작을 경우
    for (let i = cur + 1; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            stack.push(problems[i]);
            dfs(difficulty + problems[i], stack, i);
            visited[i] = false;
            stack.pop();
        }
    }
}

for (let i = 0; i < N; i++) {
    let stack = [];
    if (!visited[i]) {
        visited[i] = true;
        stack.push(problems[i]);
        dfs(problems[i], stack, i);
    }
}

console.log(answer);
