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
    let count = Infinity; // 사각지대(0)의 개수
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] >= 1 && arr[i][j] <= 5) {
                cctv.push([i, j, arr[i][j]]); // y,x,cctv번호
            }
        }
    }
    const dx = {
        1: [[1], [0], [-1], [0]],
        2: [
            [1, -1],
            [0, 0],
        ],
        3: [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ],
        4: [
            [-1, 0, 1],
            [0, 1, 0],
            [1, 0, -1],
            [0, -1, 0],
        ],
        5: [[0, 1, 0, -1]],
    };

    const dy = {
        1: [[0], [1], [0], [-1]],
        2: [
            [0, 0],
            [1, -1],
        ],
        3: [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ],
        4: [
            [0, -1, 0],
            [-1, 0, 1],
            [0, 1, 0],
            [1, 0, -1],
        ],
        5: [[-1, 0, 1, 0]],
    };

    const cctvCount = cctv.length; // cctv의 개수
    checkOffice(0);
    console.log(count);

    function checkOffice(k) {
        if (k === cctvCount) {
            count = Math.min(count, getCount(arr));
            return;
        }

        const num = cctv[k][2]; // k번째 cctv의 번호
        for (let i = 0; i < dx[num].length; i++) {
            for (let j = 0; j < dx[num][i].length; j++) {
                let y = cctv[k][0];
                let x = cctv[k][1];

                while (true) {
                    y += dy[num][i][j];
                    x += dx[num][i][j];
                    if (y >= 0 && x >= 0 && y < N && x < M && arr[y][x] !== 6) {
                        if (arr[y][x] === 0) arr[y][x] = k + 7;
                    } else break;
                }
            }

            checkOffice(k + 1);

            for (let j = 0; j < dx[num][i].length; j++) {
                let y = cctv[k][0];
                let x = cctv[k][1];

                while (true) {
                    y += dy[num][i][j];
                    x += dx[num][i][j];
                    if (y >= 0 && x >= 0 && y < N && x < M && arr[y][x] !== 6) {
                        if (arr[y][x] === k + 7) arr[y][x] = 0;
                    } else break;
                }
            }
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
