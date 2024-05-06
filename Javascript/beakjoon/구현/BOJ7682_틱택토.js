// 실제 게임에서 나올 수 있는 상태인지 확인하라
// O는 X의 개수보다 절대 많아질 수 없다.
// X의 개수 - O의 개수는 1보다 커질 수 없다.
// X가 3개 연결되어 있을 경우 O의 개수는 X의 개수 - 1개여야 한다.
// O가 3개 연결되어 있을 경우 X의 개수와 O의 개수는 동일하다.
// 누구도 이기지 않았고, X의 개수 + O의 개수 < 9 일경우 게임은 끝나지 않았다.

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let answer = '';

function vertical(arr, ox) {
    for (let i = 0; i < 3; i++) {
        if (arr[i] === ox && arr[i] === arr[i + 3] && arr[i + 3] === arr[i + 6]) return true;
    }
    return false;
}
function horizontal(arr, ox) {
    for (let i = 0; i < 9; i += 3) {
        if (arr[i] === ox && arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) return true;
    }
    return false;
}
function diagonal(arr, ox) {
    if (arr[0] === ox && arr[0] === arr[4] && arr[4] === arr[8]) return true;
    if (arr[2] === ox && arr[2] === arr[4] && arr[4] === arr[6]) return true;
    return false;
}
function checkCount(x, o) {
    if (o > x) return false;
    if (x - o > 1) return false;
    return true;
}
function checkValid(countValid, xWin, oWin, xCount, oCount) {
    // 둘 다 이기는 경우는 없다. (둘 다 이길경우 X가 먼저 이기고 게임이 종료되기 때문)
    if (xWin && oWin) return false;
    // 개수가 가능하지 않은 경우
    if (!countValid) return false;
    // X가 3개 연결되어 있을 경우 O의 개수는 X의 개수 - 1개여야 한다.
    if (xWin && oCount !== xCount - 1) return false;
    if (oWin && oCount !== xCount) return false;
    if (!oWin && !xWin && oCount + xCount < 9) return false;

    return true;
}
for (let row of input) {
    if (row === 'end') break;

    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < 9; i++) {
        if (row[i] === 'X') xCount++;
        if (row[i] === 'O') oCount++;
    }
    const countValid = checkCount(xCount, oCount);
    const xWin = vertical(row, 'X') || horizontal(row, 'X') || diagonal(row, 'X');
    const oWin = vertical(row, 'O') || horizontal(row, 'O') || diagonal(row, 'O');
    const isValid = checkValid(countValid, xWin, oWin, xCount, oCount);

    if (isValid) answer += 'valid\n';
    else answer += 'invalid\n';
}

console.log(answer.trimEnd());
