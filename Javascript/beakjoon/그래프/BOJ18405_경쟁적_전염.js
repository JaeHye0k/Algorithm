const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const test = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const [S, X, Y] = input.at(-1).split(' ').map(Number);

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];
let front = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (test[i][j] > 0) {
            queue.push([test[i][j], i, j, 1]);
            visited[i][j] = true;
        }
    }
}

// 낮은 번호부터 방문해야 하므로 처음에 큐에 삽입할 때 정렬해준다.
queue.sort((a, b) => a[0] - b[0]);

while (queue.length > front) {
    const [k, x, y, s] = queue[front++];
    if (s > S) break;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
            test[nx][ny] = k;
            queue.push([k, nx, ny, s + 1]);
            visited[nx][ny] = true;
        }
    }
}

console.log(test[X - 1][Y - 1]);
