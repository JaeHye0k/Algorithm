// 그동안 지나온 칸에 대한 정보 Map에 저장
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1, 1 + R);
const visited = Array.from({ length: R }, () => Array(C).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const map = new Map();
let answer = 0;

function dfs(y, x, count) {
    const alpha = board[y][x];
    answer = Math.max(answer, count);
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < C && ny < R && !visited[ny][nx] && !map.has(board[ny][nx])) {
            visited[ny][nx] = true;
            map.set(board[ny][nx], 1);
            dfs(ny, nx, count + 1);
            map.delete(board[ny][nx]);
            visited[ny][nx] = false;
        }
    }
}

map.set(board[0][0]);
dfs(0, 0, 1);
console.log(answer);
