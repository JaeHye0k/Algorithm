const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
const [N, M, K] = input[0];
const arr = input.slice(1, N + 1);
const operation = input.slice(N + 1);
const visited = Array(K).fill(false);
let answer = Infinity;

// 순열을 통해 모든 회전에 대한 경우의 수 확인
function permutation(nums, idx) {
    if (idx === K) {
        solution(nums);
        return;
    }
    for (let i = 0; i < K; i++) {
        if (!visited[i]) {
            visited[i] = true;
            nums[idx] = i;
            permutation(nums, idx + 1);
            visited[i] = false;
        }
    }
}

function solution(nums) {
    const copyArr = JSON.parse(JSON.stringify(arr));
    for (let i = 0; i < K; i++) {
        const r = operation[nums[i]][0] - 1;
        const c = operation[nums[i]][1] - 1;
        const s = operation[nums[i]][2];
        rotate(copyArr, r, c, s);
    }
    answer = Math.min(answer, checkMin(copyArr));
}

// 회전
function rotate(arr, r, c, s) {
    if (s === 0) return;
    let x = c - s;
    let y = r - s;
    let temp = arr[y][x];

    while (true) {
        arr[y][x] = arr[++y][x];
        if (y === r + s) break;
    }
    while (true) {
        arr[y][x] = arr[y][++x];
        if (x === c + s) break;
    }
    while (true) {
        arr[y][x] = arr[--y][x];
        if (y === r - s) break;
    }
    while (true) {
        arr[y][x] = arr[y][--x];
        if (x === c - s) break;
    }
    arr[y][x + 1] = temp;
    rotate(arr, r, c, s - 1);
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

permutation([], 0);
console.log(answer);

// 1. 모든 연산을 수행해보는 방법 (팩토리얼)
// 순열로 회전 연산 수행.
// 각 순열의 마지막 연산을 수행했을 때, 배열의 각 행의 합중 최솟값을 저장
// 최솟값끼리 비교
