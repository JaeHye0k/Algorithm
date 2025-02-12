const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const map = input.slice(1).map((e) => e.trim().split(' '));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const queue = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 'T') queue.push([i, j]);
    }
}
let count = 0;
let front = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
while (queue.length > front) {
    const [y, x] = queue[front++];
    for (let i = 0; i < 4; i++) {
        dfs(x, y, i);
    }
}
console.log(count > 3 ? 'NO' : 'YES');

function dfs(x, y, d) {
    const nx = x + dx[d];
    const ny = y + dy[d];
    // 다음 칸이 범위를 벗어나면 리턴
    if (nx < 0 || ny < 0 || nx >= N || ny >= N) return;
    // 다음 칸이 장애물이거나 선생님일 경우 경우 리턴
    if (map[ny][nx] === 'O' || map[ny][nx] === 'T') return;
    // 다음 칸이 빈 칸일 경우 다음 칸 탐색
    else if (map[ny][nx] === 'X') dfs(nx, ny, d);
    // 다음 칸이 학생일 경우
    else if (map[ny][nx] === 'S') {
        // 현재 칸이 빈 칸이라면 장애물 설치하고 리턴
        if (map[y][x] === 'X') {
            map[y][x] = 'O';
            count++;
            return;
        } else {
            // 장애물을 설치할 수 없는 경우 종료
            console.log('NO');
            process.exit();
        }
    }
}