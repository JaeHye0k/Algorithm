const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [M, N, H] = input[0].split(" ").map(Number);
const boxes = Array.from({ length: H }, () => Array.from({ length: N }, () => Array(M).fill(0)));
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
let answer = 0;

let idx = 1;
for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        boxes[i][j] = input[idx++].split(" ").map(Number);
    }
}

let unripeTomatos = 0;

const queue = [];
for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (boxes[i][j][k] === 0) unripeTomatos += 1;
            if (boxes[i][j][k] === 1) queue.push([i, j, k, 0]);
        }
    }
}

let front = 0;
while (queue.length > front) {
    let [z, y, x, days] = queue[front];
    front += 1;
    for (let i = 0; i < 6; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        let nz = z + dz[i];

        if (nx >= 0 && ny >= 0 && nz >= 0 && nx < M && ny < N && nz < H && boxes[nz][ny][nx] === 0) {
            boxes[nz][ny][nx] = 1;
            queue.push([nz, ny, nx, days + 1]);
            unripeTomatos -= 1;
        }
    }
    answer = days;
}

console.log(unripeTomatos > 0 ? -1 : answer);
