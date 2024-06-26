const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const map = input.slice(1).map((e) => e.split(' ').map(Number));
let state = 'horizontal';
let answer = 0;

function bruteforce(state, y, x) {
    // 범위를 벗어날 경우
    if (y > N - 1 || x > N - 1) return;
    // (N,N)에 도달했을 경우
    if (y === N - 1 && x === N - 1) {
        answer++;
        return;
    }
    // 가로
    if (state === 'horizontal') {
        if (map[y][x + 1] === 0) bruteforce(state, y, x + 1);
        if (map[y + 1] !== undefined && map[y + 1][x + 1] === 0 && map[y][x + 1] === 0 && map[y + 1][x] === 0) bruteforce('diagonal', y + 1, x + 1);
    }
    // 세로
    else if (state === 'vertical') {
        if (map[y + 1] !== undefined && map[y + 1][x] === 0) bruteforce(state, y + 1, x);
        if (map[y + 1] !== undefined && map[y + 1][x + 1] === 0 && map[y][x + 1] === 0 && map[y + 1][x] === 0) bruteforce('diagonal', y + 1, x + 1);
    }
    // 대각선
    else {
        if (map[y][x + 1] === 0) bruteforce('horizontal', y, x + 1);
        if (map[y + 1] !== undefined && map[y + 1][x] === 0) bruteforce('vertical', y + 1, x);
        if (map[y + 1] !== undefined && map[y + 1][x + 1] === 0 && map[y][x + 1] === 0 && map[y + 1][x] === 0) bruteforce(state, y + 1, x + 1);
    }
}

bruteforce(state, 0, 1);
console.log(answer);
