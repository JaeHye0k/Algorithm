const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1, 1 + R).map((e) => e.split('').map((e) => e.charCodeAt() - 65));
const visited = Array(26).fill(false);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

function dfs(y, x, count) {
    answer = Math.max(answer, count);
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < C && ny < R && !visited[board[ny][nx]]) {
            visited[board[ny][nx]] = true;
            dfs(ny, nx, count + 1);
            visited[board[ny][nx]] = false;
        }
    }
}

visited[board[0][0]] = true;
dfs(0, 0, 1);
console.log(answer);
