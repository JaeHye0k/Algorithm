const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M;
let arr = [];

rl.on('line', (line) => {
    if (!N && !M) [N, M] = line.split(' ').map(Number);
    else arr.push(line.split(' ').map(Number));
    if (arr.length === N) rl.close();
}).on('close', () => {
    solution(N, M, arr);
});

function solution(N, M, arr) {
    const cctv = []; // cctv의 좌표
    let count = 0; // 사각지대(0)의 개수
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] >= 1 && arr[i][j] <= 5) {
                cctv.push([i, j, arr[i][j]]); // y,x,cctv번호
            }
            if (arr[i][j] === 0) count++;
        }
    }

    const cctvCount = cctv.length; // cctv의 개수
    const rotated = Array(cctvCount).fill(0); // 각각의 cctv의 회전상태 (0 ~ 3)

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    combination(0, 0);
    console.log(count);

    // cctv의 회전 상태의 모든 경우의 수
    // cctv의 개수가 5개라고 가정했을 때 아래와 같이 진행됨
    // rotated = [0, 0, 0, 0, 0]
    // rotated = [0, 0, 0, 0, 1]
    // rotated = [0, 0, 0, 0, 2]
    // rotated = [0, 0, 0, 0, 3]
    // rotated = [0, 0, 0, 1, 0]
    // rotated = [0, 0, 0, 1, 1]
    function combination(cur) {
        if (cur === cctvCount) {
            // 현재 회전 정보를 이용해서 탐색 시작
            start();
            return;
        }
        for (let i = cur; i < cctvCount; i++) {
            for (let j = 0; j < 4; j++) {
                rotated[i] = j; // i번 cctv의 방향은 j
                combination(i + 1);
            }
        }
    }
    // 각각의 cctv의 방향에 맞게 #으로 채우기
    function start() {
        const cctvArr = cctv.map((e) => [...e]);
        const newArr = arr.map((e) => [...e]);

        for (let i = 0; i < cctvCount; i++) {
            const [y, x, num] = cctvArr[i];
            const d = rotated[i];
            if (num === 1) {
                dfs(y, x, dy[d], dx[d], newArr);
            } else if (num === 2) {
                dfs(y, x, dy[d], dx[d], newArr); // 0,1,2,3
                dfs(y, x, dy[(d + 2) % 4], dx[(d + 2) % 4], newArr); // 2,3,0,1
            } else if (num === 3) {
                dfs(y, x, dy[d], dx[d], newArr); // 0,1,2,3
                dfs(y, x, dy[(d + 3) % 4], dx[(d + 3) % 4], newArr); // 3,0,1,2
            } else if (num === 4) {
                dfs(y, x, dy[d], dx[d], newArr);
                dfs(y, x, dy[(d + 2) % 4], dx[(d + 2) % 4], newArr);
                dfs(y, x, dy[(d + 3) % 4], dx[(d + 3) % 4], newArr);
            } else {
                dfs(y, x, dy[d], dx[d], newArr);
                dfs(y, x, dy[(d + 1) % 4], dx[(d + 1) % 4], newArr);
                dfs(y, x, dy[(d + 2) % 4], dx[(d + 2) % 4], newArr);
                dfs(y, x, dy[(d + 3) % 4], dx[(d + 3) % 4], newArr);
            }
        }
        count = Math.min(count, getCount(newArr));
    }

    // 한 방향을 #으로 채우기
    function dfs(y, x, dy, dx, newArr) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny >= 0 && nx >= 0 && ny < N && nx < M && newArr[ny][nx] !== 6) {
            newArr[ny][nx] = '#';
            dfs(ny, nx, dy, dx, newArr);
        }
    }

    // 사각지대의 개수 카운트
    function getCount(arr) {
        let count = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (arr[i][j] === 0) count++;
            }
        }
        return count;
    }
}

// 1-0 우(0,1)
// 1-1 하(1,0)
// 1-2 좌(0,-1)
// 1-3 상(-1,0)

// 2-0,2 좌(0,-1), 우(0,1)
// 2-1,3 상(-1,0), 하(1,0)

// 3-0 우(0,1), 상(-1,0)
// 3-1 우(0,1), 하(1,0)
// 3-2 좌(0,-1), 하(1,0)
// 3-3 좌(0,-1), 상(-1,0)

// 4-0 좌(0,-1) 상(-1,0) 우(0,1)
// 4-1 상(-1,0) 우(0,1) 하(1,0)
// 4-2 우(0,1) 하(1,0) 좌(0,-1)
// 4-3 하(1,0) 좌(0,-1) 상(-1,0)

// 5-0,1,2,3 우(0,1) 하(1,0) 좌(0,-1) 상(-1,0)
