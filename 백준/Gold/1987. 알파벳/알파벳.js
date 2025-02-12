const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1, 1 + R).map((e) => e.split('').map((x) => x.charCodeAt() - 65));
const alphabet = Array(26).fill(0);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

function dfs(x, y, count) {
    if (count > answer) answer = count;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < R && ny < C && alphabet[board[nx][ny]] === 0) {
            alphabet[board[nx][ny]] = 1;
            dfs(nx, ny, count + 1);
            alphabet[board[nx][ny]] = 0;
        }
    }
}
alphabet[board[0][0]] = 1;
dfs(0, 0, 1);
console.log(answer);
