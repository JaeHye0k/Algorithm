// 넴모가 2x2 사각형을 이루지 않는 모든 배치의 가짓수 구하기
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, M] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const arr = Array(N * M).fill(0);
let answer = 0;

function dfs(cur) {
    if (cur === N * M) {
        for (let i = 0; i < N * M; i++) {
            // 오른쪽 끝일 경우
            if (i % M === M - 1) continue;
            // 마지막 줄일 경우
            if (i === (N - 1) * M) break;
            // 2 x 2 넴모가 있을 경우
            if (arr[i] && arr[i + 1] && arr[i + M] && arr[i + M + 1]) return;
        }

        answer++;
        return;
    }

    arr[cur] = 1;
    dfs(cur + 1);

    arr[cur] = 0;
    dfs(cur + 1);
}

dfs(0);

console.log(answer);
