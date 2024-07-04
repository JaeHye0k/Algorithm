// r과 c는 1부터 시작
// 양분은 처음에 모든 칸에 5만큼 들어있다.
// 같은 칸에 여러 개의 나무가 심어져 있을 수도 있다.
// 사계절
// 봄 - 자신의 나이만큼 현재 칸의 양분을 먹고 나이가 1증가한다.
//      하나의 칸에 여러개의 나무가 있다면 나이가 어린 나무부터 양분을 먹는다
//      땅에 양분이 부족해 자신의 나이만큼 양분을 먹을 수 없다면 양분을 먹지 못하고 즉시 죽는다.
// 여름 -   봄에 죽은 나무가 양분으로 변한다.
//          죽은 나무의 나이를 2로 나눈 몫이 나무가 있던 칸에 양분으로 추가된다.
// 가을 -   나이가 5의 배수인 나무가 번식한다. 인접한 8개의 칸에 나이가 1인 나무가 생긴다.
//          땅을 벗어나는 칸에는 나무가 생기지 않는다.
// 겨울 -   로봇이 땅을 돌아다니며 땅에 양분을 추가한다.
//          각 칸에 추가되는 양분의 양은 A[r][c]이며 입력으로 주어진다.
// K년이 지난 후 살아있는 나무의 개수를 구하시오.

// dir을 1차원 배열로 바꿔주면 더 빨라짐
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);
const robot = input.slice(1, 1 + N).map((e) => e.trimEnd().split(' ').map(Number));
const treeXYZ = input.slice(1 + N).map((e) => e.trimEnd().split(' ').map(Number));
const ground = Array.from(Array(N), () => Array(N).fill(5));
let aliveTrees = [];
const deadTrees = [];
const fiveTimesTrees = [];
const dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
].flat();

for (let [x, y, z] of treeXYZ) {
    aliveTrees.push([x - 1, y - 1, z]);
}

function spring() {
    aliveTrees.sort((a, b) => a[2] - b[2]); // 나이 순으로 정렬
    const alive = [];
    for (let [y, x, age] of aliveTrees) {
        if (age <= ground[y][x]) {
            // 양분을 먹을 수 있다면
            ground[y][x] -= age;
            alive.push([y, x, age + 1]);
            if ((age + 1) % 5 === 0) fiveTimesTrees.push([y, x]);
        } else {
            // 양분을 먹을 수 없다면
            deadTrees.push([y, x, age]);
        }
    }
    // 살아있는 나무 갱신
    aliveTrees = alive;
}

function summer() {
    for (let [y, x, age] of deadTrees) {
        ground[y][x] += age >> 1;
    }
    deadTrees.length = 0; // 비워주기
}

function fall() {
    for (const [y, x] of fiveTimesTrees) {
        for (let i = 0; i < dir.length - 1; i += 2) {
            const [dy, dx] = [dir[i], dir[i + 1]];
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && nx >= 0 && ny < N && nx < N) {
                aliveTrees.push([ny, nx, 1]);
            }
        }
    }
    fiveTimesTrees.length = 0; // 비워주기
}

function winter() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            ground[i][j] += robot[i][j];
        }
    }
}

for (let i = 0; i < K; i++) {
    spring();
    summer();
    fall();
    winter();
}

console.log(aliveTrees.length);
