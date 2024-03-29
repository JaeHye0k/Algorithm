const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const selected = Array(9).fill(false);
const alphabet = input.slice(1);
// 중복 제거를 위한 Set
const alphaSet = new Set();
alphabet.forEach((word) => {
    for (let c of word) {
        alphaSet.add(c);
    }
});

const setArr = Array.from(alphaSet);
const obj = {};
setArr.forEach((c) => {
    obj[c] = null;
});

let answer = 0;
permutation(0);
console.log(answer);

function permutation(curIdx) {
    if (curIdx === setArr.length) {
        // 모든 알파벳에 숫자가 할당되었으면 계산
        answer = Math.max(answer, sum());
        return;
    }

    for (let i = 0; i <= 9; i++) {
        if (selected[i]) continue;
        let curAlphabet = setArr[curIdx];
        obj[curAlphabet] = i;
        selected[i] = true;
        permutation(curIdx + 1);
        selected[i] = false;
        obj[curAlphabet] = null;
    }
}

function sum() {
    const numArr = [];
    alphabet.forEach((word, i) => {
        for (let c of word) {
            if (numArr[i]) {
                numArr[i] += obj[c].toString();
            } else {
                numArr[i] = obj[c].toString();
            }
        }
    });
    const result = numArr.reduce((acc, cur) => (acc += Number(cur)), 0);
    return result;
}
