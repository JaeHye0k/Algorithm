const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
let answer = 0;
dfs(0, 0);
console.log(answer);

function dfs(x, y) {
    if (x === N - 1 && y === M - 1) {
        answer++;
        return;
    }
    if (x - 1 >= 0 && arr[y][x - 1] < arr[y][x]) dfs(x - 1, y);
    if (x + 1 < N && arr[y][x + 1] < arr[y][x]) dfs(x + 1, y);
    if (y - 1 >= 0 && arr[y - 1][x] < arr[y][x]) dfs(x, y - 1);
    if (y + 1 < M && arr[y + 1][x] < arr[y][x]) dfs(x, y + 1);
}
