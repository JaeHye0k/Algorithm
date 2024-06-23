// 넴모가 2x2 사각형을 이루지 않는 모든 배치의 가짓수 구하기
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, M] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const arr = Array.from(Array(N), () => Array(M).fill(0));
let answer = 0;

function dfs(x, y) {
    if (y === N) {
        for (let i = 0; i < N - 1; i++) {
            for (let j = 0; j < M - 1; j++) {
                // 2 x 2 넴모가 있을 경우
                if (arr[i][j] && arr[i][j + 1] && arr[i + 1][j] && arr[i + 1][j + 1]) return;
            }
        }

        answer++;
        return;
    }

    const ny = x % M === M - 1 ? y + 1 : y;
    const nx = x % M === M - 1 ? 0 : x + 1;

    arr[y][x] = 1;
    dfs(nx, ny);

    arr[y][x] = 0;
    dfs(nx, ny);
}

dfs(0, 0);

console.log(answer);
