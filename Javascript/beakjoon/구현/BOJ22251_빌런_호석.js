// N = 최대 층
// K = 자릿 수
// P = 반전시키려는 LED의 최대 개수
// X = 현재 층
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K, P, X] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const led = [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
];

const graph = Array.from({ length: 10 }, () => []);
let count;
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        count = 0;
        for (let k = 0; k < 7; k++) {
            if (led[i][k] !== led[j][k]) {
                count++;
            }
        }
        graph[i][j] = count;
    }
}

// i로 target을 만들 수 있는지 확인
function checkMakable(target, cur) {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
        count += graph[target[i]][cur[i]];
    }
    // 반전 시킬 수 있는 최대 개수보다 많이 반전시켰다면
    if (count > P || count === 0) return false;
    return true;
}

// 자릿수 맞춰서 리턴해주는 함수
function getDigit(curFloor) {
    curFloor = String(curFloor).split('');
    const len = curFloor.length;
    const arr = Array(K - len).fill(0);
    // 자릿수 맞추기
    for (let i = 0; i < len; i++) {
        arr.push(+curFloor[i]);
    }
    return arr;
}

const currentFloor = getDigit(X);
let answer = 0;
for (let i = 1; i <= N; i++) {
    if (checkMakable(currentFloor, getDigit(i))) {
        answer++;
    }
}
console.log(answer);
