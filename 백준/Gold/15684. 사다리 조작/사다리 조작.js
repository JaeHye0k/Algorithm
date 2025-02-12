// 세로선 N, 가로선 M, 가로 점선 개수(높이) H
// 가로선이 연속하거나 접하면 안된다.
// i번 세로선의 결과가 i번이 나오도록 조작하기 위해 추가해야 하는 가로선의 개수의 최솟값 구하기
// 입력으로 주어지는 가로선이 서로 연속하는 경우는 없다.
// 정답이 3보다 큰 값이면 -1을 출력한다. 또, 불가능한 경우에도 -1을 출력한다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, H] = input[0].split(' ').map(Number);
if (M === 0) {
    console.log(0);
    process.exit(0);
}
const lines = input.slice(1, 1 + M).map((e) => e.split(' ').map((e) => +e - 1));
const ladder = Array.from(Array(H), () => Array(N).fill(0));
for (const [a, b] of lines) {
    ladder[a][b] = 1;
}

function isMatch() {
    for (let i = 0; i < N; i++) {
        let col = i;
        for (let j = 0; j < H; j++) {
            // 사다리 타고 이동
            if (ladder[j][col]) col++;
            else if (ladder[j][col - 1]) col--;
        }
        // 시작 지점과 도착 지점의 번호가 다르면
        if (col !== i) return false;
    }
    return true;
}

function dfs(maxDepth, cnt) {
    if (maxDepth === cnt) {
        // 시작 지점과 도착 지점의 번호가 모두 같을 경우
        if (isMatch()) {
            console.log(maxDepth);
            process.exit();
        }
        return;
    }
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < H; j++) {
            // 사다리가 이미 놓여져 있거나 놓을 수 없으면 스킵
            if (ladder[j][i] || ladder[j][i - 1] || ladder[j][i + 1]) continue;

            ladder[j][i] = 1;
            dfs(maxDepth, cnt + 1, i, j);
            ladder[j][i] = 0;

            while (j < H && !ladder[j][i - 1] && !ladder[j][i + 1]) j++;
        }
    }
}

for (let i = 0; i <= 3; i++) {
    dfs(i, 0);
}
console.log(-1);
