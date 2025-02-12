// 1. W * H 크기의 2차원 배열을 만들어서 각 행을 순회하며 물을 한 칸씩 채워 올라가는 방법
// 빈 칸을 만나면 블록이 있는 곳까지 dfs를 수행해서 만약 끝까지 갔는데 블록을 못 만났을 경우에는
// 그냥 해당 행 탐색을 종료.
// dfs수행도중 블록을 만나면 재귀를 종료하면서 물을 한 칸씩 채우기

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);
const map = Array.from({ length: H }, () => Array(W).fill(0));
let flag = false;
let answer = 0;
for (let i = 0; i < W; i++) {
    for (let j = 0; j < heights[i]; j++) {
        map[j][i] = 1;
    }
}

function dfs(y, x) {
    // 범위를 벗어났을 경우
    if (x >= W) return;
    // 블록을 만났을 경우
    if (map[y][x]) {
        flag = true;
        return;
    }
    dfs(y, x + 1);
    // 끝이 블록으로 막혀있을 경우
    if (flag) {
        answer++;
    }
}

for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        // 해당 위치에 블록이 있을 경우
        if (map[i][j]) {
            dfs(i, j + 1);
            flag = false;
        }
    }
}

console.log(answer);
