const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, A, B, K] = input[0].split(' ').map(Number);
const obstacles = input.slice(1, 1 + K).map((e) => e.split(' ').map(Number));
const start = input[1 + K].split(' ').map((e) => Number(e) - 1);
const end = input[2 + K].split(' ').map((e) => Number(e) - 1);
const map = Array.from({ length: N }, () => Array(M).fill(0));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
// 장애물 설정
for (let [y, x] of obstacles) {
    map[y - 1][x - 1] = 1;
}
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

class Queue {
    constructor() {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const temp = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;

        if (this.rear === this.front) {
            this.rear = this.front = 0;
        }

        return temp;
    }
    size() {
        return this.rear - this.front;
    }
}

function bfs() {
    const queue = new Queue();
    queue.enqueue([...start, 0]);

    while (queue.size() > 0) {
        let [y, x, move] = queue.dequeue();
        // 목적지에 도달했다면
        if (y === end[0] && x === end[1]) return move;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (!outOfRange(ny, nx) && !visited[ny][nx] && availiable(ny, nx, i)) {
                visited[ny][nx] = true;
                queue.enqueue([ny, nx, move + 1]);
            }
        }
    }
    return -1;
}

function availiable(y, x, d) {
    // 상
    if (d === 0) {
        for (let i = 0; i < B; i++) {
            if (map[y][x + i]) return false;
        }
    }
    // 하
    else if (d === 1) {
        for (let i = 0; i < B; i++) {
            if (map[y + A - 1][x + i]) return false;
        }
    }
    // 좌
    else if (d === 2) {
        for (let i = 0; i < A; i++) {
            if (map[y + i][x]) return false;
        }
    }
    // 우
    else {
        for (let i = 0; i < A; i++) {
            if (map[y + i][x + B - 1]) return false;
        }
    }
    return true;
}

function outOfRange(y, x) {
    return y < 0 || x < 0 || y + A > N || x + B > M;
}

let answer = bfs();
console.log(answer);

// 최단 거리 찾기
// N * M 크기의 지도, A * B 크기의 유닛, K개의 장애물
// 장애물은 1로 표시

// start에서 시작
// (y,x)에서 상,하,좌,우 확인.
// 상 => for(let i=0; i<B; i++) (y-1, x+i) 모두 이동할 수 있을 때만 이동
// 하 => for(let i=0; i<B; i++) (y+A, x+i)
// 좌 => for(let i=0; i<A; i++) (y+i, x-1)
// 우 => for(let i=0; i<A; i++) (y+i, x+B)
