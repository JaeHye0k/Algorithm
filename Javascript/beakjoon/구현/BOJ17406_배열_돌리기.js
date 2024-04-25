const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
const [N, M, K] = input[0];
const arr = input.slice(1, N + 1);
const copyArr = JSON.parse(JSON.stringify(arr));
const operation = input.slice(N + 1);
const visited = Array(K).fill(false);
let answer = Infinity;

// 순열을 통해 모든 회전에 대한 경우의 수 확인
function permutation(cur, depth, copyArr) {
    let copyArr2 = JSON.parse(JSON.stringify(copyArr));

    let [r, c, s] = operation[cur];
    let lt = [r - s - 1, c - s - 1]; // 왼쪽 위
    let rb = [r + s - 1, c + s - 1]; // 오른쪽 아래
    let rt = [lt[0], rb[1]]; // 오른쪽 위
    let lb = [rb[0], lt[1]]; // 왼쪽 아래

    // 회전 연산 수행
    while (true) {
        if (lt[0] > rb[0] || lt[1] > rb[1]) break;
        copyArr2 = rotate(lt, rb, rt, lb, copyArr2);
        lt[0]++;
        lt[1]++;
        rb[0]--;
        rb[1]--;
        rt = [lt[0], rb[1]];
        lb = [rb[0], lt[1]];
    }

    // 하나의 순열을 다 탐색했을 경우
    if (depth === K) answer = Math.min(answer, checkMin(copyArr2));

    for (let i = 0; i < K; i++) {
        if (!visited[i]) {
            visited[i] = true;
            permutation(i, depth + 1, copyArr2);
            visited[i] = false;
        }
    }
}

// 회전
function rotate(lt, rb, rt, lb, copyArr) {
    const copyArr2 = JSON.parse(JSON.stringify(copyArr));
    for (let i = lt[1] + 1; i <= rt[1]; i++) {
        copyArr2[lt[0]][i] = copyArr[lt[0]][i - 1];
    }
    for (let i = rt[0] + 1; i <= rb[0]; i++) {
        copyArr2[i][rt[1]] = copyArr[i - 1][rt[1]];
    }
    for (let i = rb[1] - 1; i >= lb[1]; i--) {
        copyArr2[rb[0]][i] = copyArr[rb[0]][i + 1];
    }
    for (let i = lb[0] - 1; i >= lt[0]; i--) {
        copyArr2[i][lb[1]] = copyArr[i + 1][lb[1]];
    }
    return copyArr2;
}

function checkMin(arr) {
    let min = Infinity;
    for (let row of arr) {
        min = Math.min(
            min,
            row.reduce((acc, cur) => (acc += cur))
        );
    }
    return min;
}

for (let i = 0; i < K; i++) {
    if (!visited[i]) {
        visited[i] = true;
        permutation(i, 1, copyArr);
        visited[i] = false;
    }
}

console.log(answer);

// 1. 모든 연산을 수행해보는 방법 (팩토리얼)
// 순열로 회전 연산 수행.
// 각 순열의 마지막 연산을 수행했을 때, 배열의 각 행의 합중 최솟값을 저장
// 최솟값끼리 비교
