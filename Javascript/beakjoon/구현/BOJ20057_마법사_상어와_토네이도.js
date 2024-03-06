const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const sandArr = input.slice(1).map((e) => e.split(' ').map(Number));
const now = [N >> 1, N >> 1]; // 현재 좌표 (x,y)
let answer = 0; // 격자 밖으로 나간 모래 양
const left = [
    [-2, 0, 0.02],
    [2, 0, 0.02],
    [-1, 0, 0.07],
    [1, 0, 0.07],
    [-1, -1, 0.1],
    [1, -1, 0.1],
    [-1, 1, 0.01],
    [1, 1, 0.01],
    [0, -2, 0.05],
    [0, -1, 0],
];
const right = left.map(([y, x, ratio]) => [y, -x, ratio]);
const up = left.map(([y, x, ratio]) => [x, y, ratio]);
const down = up.map(([y, x, ratio]) => [-y, x, ratio]);

for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
        move(i, 0, -1, left);
        move(i, 1, 0, down);
    } else {
        move(i, 0, 1, right);
        move(i, -1, 0, up);
    }
}

console.log(answer);

// 현재 방향으로 토네이도 수행
function move(cnt, y, x, direction) {
    for (let i = 0; i <= cnt; i++) {
        [now[0], now[1]] = [now[0] + y, now[1] + x];
        if (now[0] < 0 || now[1] < 0) break;

        let spreads = 0; // 흩날린 모래의 양
        for (let [dy, dx, ratio] of direction) {
            let [ny, nx] = [now[0] + dy, now[1] + dx];
            let sand = 0;
            if (ratio === 0) {
                // a 위치의 모래 양
                sand = sandArr[now[0]][now[1]] - spreads;
            } else {
                // 비율 위치의 모래 양
                sand = Math.floor(sandArr[now[0]][[now[1]]] * ratio);
            }
            // 퍼진 모래가 범위 안인 경우
            if (0 <= nx && nx < N && 0 <= ny && ny < N) sandArr[ny][nx] += sand;
            // 퍼진 모래가 범위 바깥으로 나갔을 경우
            else answer += sand;
            spreads += sand;
        }
    }
}
