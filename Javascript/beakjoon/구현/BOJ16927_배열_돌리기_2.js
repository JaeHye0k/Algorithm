const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, R] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const answerArr = Array.from({ length: N }, () => Array(M).fill(0));
let [n, m] = [N, M];

function makeArr(lt, rb) {
    const row = [];
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
    if (row.length === 0) row.push(arr[lt[0]][lt[1]]);

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
    // 왼쪽 위 좌표
    const lt = [count, count];
    // 오른쪽 아래 좌표
    const rb = [N - 1 - count, M - 1 - count];
    // 외곽을 감싼 배열을 1차원 배열로 변환
    const row = makeArr(lt, rb);
    // 1차원 배열에 회전 적용시키기
    const newRow = getRowAfterRotate(row, row.length);
    // 1차원 배열을 2차원 배열로 만들기
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
