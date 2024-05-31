const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + N).map((e) => e.split(' ').map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(y, x) {
    const queue = [[y, x]];
    visited[y][x] = true;
    let front = 0;
    let population = arr[y][x];
    let nations = 1;
    while (queue.length > front) {
        const [y, x] = queue[front++];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[ny][nx]) {
                const diff = Math.abs(arr[y][x] - arr[ny][nx]); // 옆 국가와 인구수 차이
                const distribute = diff >= L && diff <= R; // 인구수 차이가 L이상 R이하인가?
                if (distribute) {
                    queue.push([ny, nx]);
                    visited[ny][nx] = true;
                    isDistributed = true;
                    population += arr[ny][nx];
                    nations++;
                }
            }
        }
    }
    // 칸 당 인구수
    const per = Math.floor(population / nations);
    // 인구 분배
    for (const [y, x] of queue) {
        arr[y][x] = per;
    }
}

let answer = 0;
let isDistributed = false;
while (true) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) bfs(i, j);
        }
    }
    if (isDistributed) {
        answer++;
        visited.forEach((row) => row.fill(0));
        isDistributed = false;
    } else break;
}

console.log(answer);
