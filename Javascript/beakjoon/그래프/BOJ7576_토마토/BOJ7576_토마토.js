const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const box = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

const queue = [];
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 1) queue.push(i, j);
        if (box[i][j] === 0) count++; // 안익은 토마토의 개수
    }
}

bfs(queue);
console.log(count ? -1 : answer);

function bfs(queue) {
    for (let front = 0, day = 0; front < queue.length; day++) {
        for (let { length } = queue; front < length; ) {
            const y = queue[front++];
            const x = queue[front++];

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (nx >= 0 && ny >= 0 && nx < M && ny < N && box[ny][nx] === 0) {
                    queue.push(ny, nx);
                    box[ny][nx] = 1;
                    count--;
                }
            }
        }
        answer = day;
    }
}
