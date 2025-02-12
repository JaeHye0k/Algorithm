const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const cheese = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let count = 0;
let hours = 0;

while (true) {
    let cnt = countCheese();
    if (cnt === 0) break; // 치즈가 더이상 없을 경우 종료
    count = cnt;
    checkCheese();
    hours++;
}

console.log(hours + '\n' + count);

// 공기랑 닿는 부분 녹이기
function checkCheese() {
    // 빈칸 = 0, 치즈 = 1
    const visited = cheese.map((e) => [...e]);
    bfs(0, 0, visited);
}

// 치즈 개수 세기
function countCheese() {
    let cnt = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (cheese[i][j]) cnt++;
        }
    }
    return cnt;
}

function bfs(x, y, visited) {
    const queue = [[y, x]];
    visited[y][x] = true;
    let front = 0;
    while (queue.length > front) {
        const [y, x] = queue[front++];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
                if (cheese[ny][nx]) {
                    cheese[ny][nx] = 0;
                }
                if (!visited[ny][nx]) {
                    queue.push([ny, nx]);
                    visited[ny][nx] = true;
                }
            }
        }
    }
}
