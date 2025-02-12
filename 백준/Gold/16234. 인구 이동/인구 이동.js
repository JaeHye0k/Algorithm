const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + N).map((e) => e.split(' ').map(Number));
const flags = Array.from(Array(N), () => Array(N).fill(0));
const per = Array(N * N + 1).fill(0);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let answer = 0;
let isDistributed = false;
let union = 1;
let population;
let nations;

function dfs(y, x) {
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N && flags[ny][nx] === 0) {
            const diff = Math.abs(arr[y][x] - arr[ny][nx]); // 옆 국가와 인구수 차이
            const distribute = diff >= L && diff <= R; // 인구수 차이가 L이상 R이하인가?
            if (distribute) {
                flags[ny][nx] = union;
                dfs(ny, nx);
                isDistributed = true;
                population += arr[ny][nx];
                nations++;
            }
        }
    }
}

while (true) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (flags[i][j] === 0) {
                population = arr[i][j];
                nations = 1;
                flags[i][j] = union;
                dfs(i, j);
                // 칸 당 인구수
                per[union] = Math.floor(population / nations);
                union++;
            }
        }
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            arr[i][j] = per[flags[i][j]];
        }
    }
    if (isDistributed) {
        answer++;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                flags[i][j] = 0;
                per[i * N + j] = 0;
            }
        }
        isDistributed = false;
        union = 1;
    } else break;
}

console.log(answer);
