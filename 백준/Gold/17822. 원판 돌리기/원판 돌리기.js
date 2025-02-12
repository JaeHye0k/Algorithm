const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N, M, T] = input[0].split(' ').map(Number);
const circles = input.slice(1, 1 + N).map((e) => e.trim().split(' ').map(Number));
const rotates = input.slice(1 + N).map((e) => e.trim().split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (const [x, d, k] of rotates) {
    rotate(x, d, k);
    const isExist = checkAdj();
    if (!isExist) {
        avgPlusMinus();
    }
}

console.log(circles.reduce((acc, cur) => (acc += cur.reduce((acc, cur) => (acc += cur), 0)), 0));

function rotate(x, d, k) {
    // x의 배수인 원판만 회전
    for (let i = x - 1; i < N; i += x) {
        // const len = circles[i].length; // 원판에 숫자가 지워지면 길이가 불규칙적으로 변하니까
        // // slice가 음수도 처리하니 숫자가 지워져서 K가 len보다 커도 처리 가능
        if (!d) {
            // 시계방향
            const left = circles[i].slice(0, M - k);
            const right = circles[i].slice(M - k);
            circles[i] = [...right, ...left];
        } else {
            // 반시계 방향
            const left = circles[i].slice(0, k);
            const right = circles[i].slice(k);
            circles[i] = [...right, ...left];
        }
    }
}

function checkAdj() {
    const adj = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let k = 0; k < 4; k++) {
                let nx = j + dx[k];
                let ny = i + dy[k];
                if (nx >= M) nx = 0;
                if (nx < 0) nx = M - 1;
                if (ny >= 0 && ny < N) {
                    // 0이 아니면서 숫자가 같은 인접한 칸 지우기
                    if (circles[i][j] && circles[ny][nx]) {
                        if (circles[i][j] === circles[ny][nx]) {
                            adj.push([i, j]);
                            adj.push([ny, nx]);
                            isExist = true;
                        }
                    }
                }
            }
        }
    }
    // 인접한 수들을 한 번에 지워야됨.
    for (const [y, x] of adj) {
        circles[y][x] = 0;
    }

    return adj.length > 0;
}

function avgPlusMinus() {
    let sum = 0;
    let count = 0;
    const arr = []; // 0이 아닌 칸들
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (circles[i][j]) {
                sum += circles[i][j];
                count++;
                arr.push([i, j]);
            }
        }
    }
    if (arr.length) {
        const avg = sum / count;
        for (const [i, j] of arr) {
            if (circles[i][j] > avg) circles[i][j]--;
            else if (circles[i][j] < avg) circles[i][j]++;
        }
    }
}