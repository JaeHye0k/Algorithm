const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));

const left = [
    [0.02, -2, 0],
    [0.02, 2, 0],
    [0.07, 1, 0],
    [0.07, -1, 0],
    [0.1, -1, -1],
    [0.1, 1, -1],
    [0.01, -1, 1],
    [0.01, 1, 1],
    [0.05, 0, -2],
    [0, 0, -1],
];
const right = left.map(([r, y, x]) => [r, y, -x]);
const up = left.map(([r, y, x]) => [r, x, y]);
const down = up.map(([r, y, x]) => [r, -y, x]);

let now = [N >> 1, N >> 1];
let answer = 0;

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        cycle(i, 0, 1, right);
        cycle(i, -1, 0, up);
    } else {
        cycle(i, 0, -1, left);
        cycle(i, 1, 0, down);
    }
}

console.log(answer);

function cycle(cnt, y, x, direction) {
    for (let i = 0; i < cnt; i++) {
        now[0] += y;
        now[1] += x;
        let spreads = 0;
        if (now[0] < 0 || now[1] < 0) return;
        for (let [ratio, y, x] of direction) {
            let ny = now[0] + y;
            let nx = now[1] + x;
            let sand = 0;
            if (ratio === 0) {
                sand = arr[now[0]][now[1]] - spreads;
            } else {
                sand = Math.floor(arr[now[0]][now[1]] * ratio);
            }
            if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
                answer += sand;
            } else {
                arr[ny][nx] += sand;
            }
            spreads += sand;
        }
    }
}
