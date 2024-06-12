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
    const cctv = [];
    let count = 0; // 사각지대의 개수
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] >= 1 && arr[i][j] <= 5) {
                cctv.push([i, j, arr[i][j]]); // y,x,cctv번호,0 초기 방향
            }
            if (arr[i][j] === 0) count++;
        }
    }

    const cctvCount = cctv.length; // cctv의 개수
    const cctvDir = Array(cctvCount).fill(0); // 각각의 cctv의 방향

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    combination(0, 0);
    console.log(count);

    function combination(cur) {
        if (cur === cctvCount) {
            // 현재 cctvDir을 이용해서 탐색 시작
            bfs();
            return;
        }
        for (let i = cur; i < cctvCount; i++) {
            for (let j = 0; j < 4; j++) {
                cctvDir[i] = j; // i번 cctv의 방향은 j
                combination(i + 1);
            }
        }
    }
    // 각각의 cctv에서
    function bfs() {
        const cctvArr = cctv.map((e) => [...e]);
        const newArr = arr.map((e) => [...e]);

        for (let i = 0; i < cctvCount; i++) {
            const [y, x, num] = cctvArr[i];
            const d = cctvDir[i];
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

    function dfs(y, x, dy, dx, newArr) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny >= 0 && nx >= 0 && ny < N && nx < M && newArr[ny][nx] !== 6) {
            newArr[ny][nx] = '#';
            dfs(ny, nx, dy, dx, newArr);
        }
    }

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

// 0 0 0 0 0
// 0 0 0 0 1
// 0 0 0 0 2
// 0 0 0 0 3
// 0 0 0 1 0
// 0 0 0 1 1
// 벽 통과 x, cctv 통과 o,
// 90도 회전 가능
// 방향을 전달하면 해당 방향으로 끝까지 가는 함수 (범위를 벗어나거나 arr[y][x] === 6일 경우 탐색 종료)
//
