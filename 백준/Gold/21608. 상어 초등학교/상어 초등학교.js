// 만족도 = 인접한 칸에 앉은 좋아하는 학생의 수
// 0 = 0, 1 = 1, 10 = 2, 100 = 3, 1000 = 4

// 입력 순서가 정해져서 들어옴 -> 그떄그때 조건에만 맞게 수행해주면 됨
// N * N 크기의 배열을 N^2번 순회하며 아래 조건에 맞는 좌표를 기억해 놓는다.
// - 인접한 네 방향에 좋아하는 학생이 가장 많은 곳
// - 인접한 네 방향에 좋아하는 학생이 가장 많으면서, 인접한 네 방향에 빈 칸이 가장 많은 곳

// 1. 인접한 네 방향에 좋아하는 학생이 가장 많은 곳에 현재 학생을 배치한다.
// 2. 좌표가 여러개일 경우, 인접한 네 방향에 빈 칸이 가장 많은 곳에 현재 학생을 배치한다.
// 3. 좌표가 여러개일 경우, y축이 가장 작은 좌표에 배치한다.
// 4. 좌표가 여러개일 경우, x축이 가장 작은 좌표에 배치한다.

// 모든 배치가 끝났으면
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const classRoom = Array.from({ length: N }, () => Array(N));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bruteforce(favorite) {
    const pos = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            // 현재 자리가 비어있다면 인접한 방향 확인
            if (classRoom[i][j] === undefined) {
                const [favoriteCount, blankCount] = checkDirection(i, j, favorite);
                pos.push([favoriteCount, blankCount, i, j]);
            }
        }
    }

    pos.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        if (a[1] !== b[1]) return b[1] - a[1];
        if (a[2] !== b[2]) return a[2] - b[2];
        if (a[3] !== b[3]) return a[3] - b[3];
    });

    return pos[0];
}

function checkDirection(y, x, favorite) {
    let favoriteCount = 0;
    let blankCount = 0;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
            // 인접한 방향에 좋아하는 학생이 있다면
            if (favorite.some((e) => e === classRoom[ny][nx])) favoriteCount++;
            // 인접한 방향에 빈 칸이 있다면
            else if (classRoom[ny][nx] === undefined) blankCount++;
        }
    }
    return [favoriteCount, blankCount];
}

function checkSatisfiction(y, x) {
    let favoriteCount = 0;
    const row = arr.find((e) => e[0] === classRoom[y][x]);
    const favorite = row.slice(1);

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
            // 인접한 방향에 좋아하는 학생이 있다면
            if (favorite.some((e) => e === classRoom[ny][nx])) favoriteCount++;
        }
    }
    return Math.floor(10 ** (favoriteCount - 1));
}

for (let row of arr) {
    const studentNum = row[0];
    const favorite = row.slice(1);
    const [_, __, y, x] = bruteforce(favorite);
    classRoom[y][x] = studentNum;
}

let answer = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        answer += checkSatisfiction(i, j);
    }
}

console.log(answer);
