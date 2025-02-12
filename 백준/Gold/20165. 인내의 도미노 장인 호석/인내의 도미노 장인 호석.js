// N * M
// 공 -> 수
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, R] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + N).map((e) => e.split(' ').map(Number));
const result = Array.from(Array(N), () => Array(M).fill('S'));
let count = 0;
let idx = 1 + N;
const direction = {
    E: 0,
    W: 1,
    S: 2,
    N: 3,
};
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(x, y, D) {
    const queue = [[x, y]];
    let front = 0;
    if (result[y][x] === 'S') {
        result[y][x] = 'F';
        count++;
    }
    const i = direction[D];
    while (queue.length > front) {
        const [x, y] = queue[front++];
        const height = arr[y][x];
        for (let j = 1; j < height; j++) {
            const nx = x + dx[i] * j;
            const ny = y + dy[i] * j;
            if (nx >= 0 && ny >= 0 && nx < M && ny < N && result[ny][nx] === 'S') {
                result[ny][nx] = 'F';
                count++;
                queue.push([nx, ny]);
            }
        }
    }
}

while (idx < input.length) {
    const attack = input[idx++].split(' ');
    const D = attack.pop().trimEnd();
    const [aX, aY] = attack.map((e) => +e - 1);
    const [bX, bY] = input[idx++].split(' ').map((e) => +e - 1);
    bfs(aY, aX, D);
    result[bX][bY] = 'S';
}

let answer = count + '\n';
for (let i = 0; i < N; i++) {
    answer += result[i].join(' ') + '\n';
}
console.log(answer.trimEnd());
