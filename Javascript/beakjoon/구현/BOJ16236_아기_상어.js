const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const map = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const shark = {
    size: 2, // 초기 상어의 크기
    eat: 0, // 먹은 물고기 수
};

// 상어의 시작 위치 찾기
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 9) {
            shark.pos = [i, j];
            map[i][j] = 0;
        }
    }
}

let answer = 0;

while (true) {
    const [y, x] = shark.pos;
    const count = bfs(y, x, 0);
    if (count === 0) break;
}
console.log(answer);

function bfs(y, x, time) {
    const visited = Array.from(Array(N), () => Array(N).fill(0));
    const queue = [[y, x, time]];
    visited[y][x] = 1;
    let front = 0;
    const fish = [];
    while (queue.length > front) {
        const [y, x, time] = queue[front++];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[ny][nx]) {
                // 먹을 수 있는 물고기
                if (map[ny][nx] && shark.size > map[ny][nx]) fish.push([ny, nx, time + 1]);
                // 상어의 사이즈보다 작거나 같을 경우 방문
                if (shark.size >= map[ny][nx]) {
                    queue.push([ny, nx, time + 1]);
                }
                visited[ny][nx] = 1;
            }
        }
    }
    if (fish.length) {
        fish.sort((a, b) => {
            if (a[2] !== b[2]) return a[2] - b[2]; // time
            else if (a[0] !== b[0]) return a[0] - b[0]; // y
            else return a[1] - b[1]; // x
        });

        eat(...fish[0]);
    }
    return fish.length;
}

function eat(y, x, time) {
    map[y][x] = 0;
    shark.eat += 1;
    // 크기 증가
    if (shark.eat === shark.size) {
        shark.size += 1;
        shark.eat = 0;
    }
    shark.pos = [y, x];
    answer += time; // 이동 횟수
}
