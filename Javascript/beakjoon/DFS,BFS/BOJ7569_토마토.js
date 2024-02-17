const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N, H] = input.shift().split(' ').map(Number);
const boxes = Array.from({ length: H }, () => []);
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
let answer = 0;
let unripedTomatos = 0;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        row = input.shift().split(' ').map(Number);
        boxes[i].push(row);
    }
}

const queue = [];
let front = 0;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (boxes[i][j][k] === 1) queue.push([i, j, k, 0]);
            if (boxes[i][j][k] === 0) unripedTomatos += 1;
        }
    }
}

while (queue.length > front) {
    const [z, y, x, days] = queue[front++];
    for (let i = 0; i < 6; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        const nz = z + dz[i];

        if (nx >= 0 && ny >= 0 && nz >= 0 && nx < M && ny < N && nz < H && boxes[nz][ny][nx] === 0) {
            boxes[nz][ny][nx] = 1;
            unripedTomatos -= 1;
            queue.push([nz, ny, nx, days + 1]);
        }
    }
    answer = days;
}

console.log(unripedTomatos ? -1 : answer);
