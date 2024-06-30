const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, R] = input[0].split(' ').map(Number);
const domino = input.slice(1, 1 + N).map((e) => e.split(' ').map(Number));
const result = Array.from(Array(N), () => Array(M).fill('S'));
let answer = 0;
let idx = 1 + N;
const dir = {
    E: [1, 0],
    W: [-1, 0],
    S: [0, 1],
    N: [0, -1],
};

while (idx < input.length) {
    let [aY, aX, d] = input[idx++].trim().split(' ');
    let [bY, bX] = input[idx++]
        .trim()
        .split(' ')
        .map((e) => +e - 1);
    [aY, aX] = [+aY - 1, +aX - 1];

    bfs(aX, aY, d);
    result[bY][bX] = 'S';
}

console.log(answer);
console.log(result.map((e) => e.join(' ')).join('\n'));

function bfs(x, y, d) {
    const queue = [[x, y]];
    const [dx, dy] = dir[d];
    let front = 0;
    while (queue.length > front) {
        const [x, y] = queue[front++];
        const height = domino[y][x];
        for (let i = 0; i < height; i++) {
            const nx = x + dx * i;
            const ny = y + dy * i;
            if (nx >= 0 && ny >= 0 && nx < M && ny < N && result[ny][nx] === 'S') {
                queue.push([nx, ny]);
                result[ny][nx] = 'F';
                answer++;
            }
        }
    }
}
