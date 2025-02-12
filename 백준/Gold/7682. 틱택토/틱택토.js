// 항상 x가 하나 더 많거나 같아야 한다. (아닐경우 invalid)
// 판이 꽉 찼고 x의 개수가 o+1개면 valid
// x가 승리조건으로 승리했고 o의 개수가 x-1개면 valid
// o가 승리조건으로 승리했고, x의 개수가 o개면 valid
// 이긴 경우가 2개 이상일 경우 invalid
// 아무도 못 이겼고, 판이 꽉 차지 않은 상태일 경우
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let idx = 0;
let answer = '';

function checkCount(x, o) {
    if (x === o || x - 1 === o) return true;
    return false;
}

function vertical(arr, ox) {
    for (let i = 0; i < 3; i++) {
        if (arr[i] === ox && arr[i] === arr[i + 3] && arr[i + 3] === arr[i + 6]) return true;
    }
    return false;
}

function horizontal(arr, ox) {
    for (let i = 0; i < 3; i++) {
        if (arr[i * 2 + i] === ox && arr[i * 2 + i] === arr[i * 2 + i + 1] && arr[i * 2 + i + 1] === arr[i * 2 + i + 2]) return true;
    }
    return false;
}

function diagonal(arr, ox) {
    if (arr[0] === ox && arr[0] === arr[4] && arr[4] === arr[8]) return true;
    if (arr[2] === ox && arr[2] === arr[4] && arr[4] === arr[6]) return true;
    return false;
}

function checkValid(countValid, xWin, oWin, x, o) {
    if (!countValid) return false;
    if (xWin && oWin) return false;
    if (xWin && x - 1 !== o) return false;
    if (oWin && x !== o) return false;
    if (!xWin && !oWin && x !== 5 && o !== 4) return false;
    return true;
}
while (input[idx] !== 'end') {
    const arr = input[idx++].trimEnd().split('');
    let [x, o] = [0, 0];
    for (let i = 0; i < 9; i++) {
        if (arr[i] === 'X') x++;
        if (arr[i] === 'O') o++;
    }

    const countValid = checkCount(x, o);
    const xWin = vertical(arr, 'X') || horizontal(arr, 'X') || diagonal(arr, 'X');
    const oWin = vertical(arr, 'O') || horizontal(arr, 'O') || diagonal(arr, 'O');
    const isValid = checkValid(countValid, xWin, oWin, x, o);

    if (isValid) answer += 'valid\n';
    else answer += 'invalid\n';
}

console.log(answer.trimEnd());
