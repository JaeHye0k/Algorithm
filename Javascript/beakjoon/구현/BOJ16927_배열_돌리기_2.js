// 일일히 회전시킨다면 최대 10^9번 회전시켜야 하기 떄문에 시간 초과
// [y][x] 위치에서 R번 회전시켰을 때의 위치를 구한 뒤, 그 위치에 [y][x]에 있는 값 넣기

// 배열 외곽의 길이 = (N-1)*2 + (M-1)*2
// (N-1)*2 + (M-1)*2 = 0 일 경우, 길이 = 1
// 안쪽으로 들어가면 N -= 2, M -= 2
// i += R % (N-1)*2 + (M-1)*2

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, R] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const answerArr = Array.from({ length: N }, () => Array(M).fill(0));
let [n, m] = [N, M];

function makeArr(len, lt, rb) {
    const row = [];
    if (len === 1) row.push(arr[lt[0]][lt[1]]);
    // 하
    for (let i = lt[0]; i < rb[0]; i++) {
        row.push(arr[i][lt[1]]);
    }
    // 우
    for (let i = lt[1]; i < rb[1]; i++) {
        row.push(arr[rb[0]][i]);
    }
    // 상
    for (let i = rb[0]; i > lt[0]; i--) {
        row.push(arr[i][rb[1]]);
    }
    // 좌
    for (let i = rb[1]; i > lt[1]; i--) {
        row.push(arr[lt[0]][i]);
    }
    return row;
}

function getRowAfterRotate(row, len) {
    const newRow = Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        if ((R % len) + i >= len) {
            newRow[(R % len) + i - len] = row[i];
        } else {
            newRow[(R % len) + i] = row[i];
        }
    }
    return newRow;
}

function getArrAfterRotate(row, lt, rb) {
    let count = 0;
    // 하
    for (let i = lt[0]; i < rb[0]; i++) {
        answerArr[i][lt[1]] = row[count++];
    }
    // 우
    for (let i = lt[1]; i < rb[1]; i++) {
        answerArr[rb[0]][i] = row[count++];
    }
    // 상
    for (let i = rb[0]; i > lt[0]; i--) {
        answerArr[i][rb[1]] = row[count++];
    }
    // 좌
    for (let i = rb[1]; i > lt[1]; i--) {
        answerArr[lt[0]][i] = row[count++];
    }
}

let count = 0;
while (n > 0 && m > 0) {
    let len = (n - 1) * 2 + (m - 1) * 2;
    if (len === 0) len = 1;
    const lt = [count, count];
    const rb = [N - 1 - count, M - 1 - count];
    const row = makeArr(len, lt, rb);
    const newRow = getRowAfterRotate(row, len);
    getArrAfterRotate(newRow, lt, rb);
    n -= 2;
    m -= 2;
    count++;
}

let answer = '';
for (let i = 0; i < answerArr.length; i++) {
    answer += answerArr[i].join(' ') + '\n';
}
console.log(answer.trimEnd());
