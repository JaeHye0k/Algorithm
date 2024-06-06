const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
let [s, n] = require('fs').readFileSync(filePath).toString().trim().split(' ');
s = +s;
let answer = '';

function r() {
    return '|'.padStart(s + 2);
}

function l() {
    return '|'.padEnd(s + 2);
}
function b() {
    return '|' + ' '.repeat(s) + '|';
}
function h() {
    return ' ' + '-'.repeat(s) + ' ';
}
function sh() {
    return ' '.repeat(s + 2);
}
const topHorizontal = [h, sh, h, h, sh, h, h, h, h, h];
const midHorizontal = [sh, sh, h, h, h, h, h, sh, h, h];
const bottomHorizontal = [h, sh, h, h, sh, h, h, sh, h, h];
const topVertical = [b, r, r, r, b, l, l, r, b, b];
const bottomVertical = [b, r, l, r, r, r, b, r, b, r];

const top = 0;
const bottom = 2 * s + 3 - 1;
const mid = (2 * s + 3) >> 1;

for (let i = top; i <= bottom; i++) {
    for (let j = 0; j < n.length; j++) {
        const num = +n[j];
        if (i === top) answer += topHorizontal[num]();
        else if (i === mid) answer += midHorizontal[num]();
        else if (i === bottom) answer += bottomHorizontal[num]();
        else if (i < mid) answer += topVertical[num]();
        else if (i > mid) answer += bottomVertical[num]();
        if (j === n.length - 1) answer += '\n';
        else answer += ' ';
    }
}

console.log(answer);

// s+2 각 숫자의 가로 길이 (s가 홀수일 경우 홀수, s가 짝수일 경우 짝수)
// 2s+3 각 숫자의 세로 길이 (무조건 홀수)
// 숫자 사이에 공백 한 칸

// 1 s, r, s, r, s
// 2 h, r, h, l, h
// 3 h, r, h, r, h
// 4 s, b, h, r, s
// 5 h, l, h, r, h
// 6 h, l, h, b, h
// 7 h, r, s, r, s
// 8 h, b, h, b, h
// 9 h, b, h, r, h
// 0 h, b, s, b, h

// right = 공백 s+1칸 + '|'
// left = '|' + 공백 s+1칸
// both = '|' + 공백 s칸 + '|'
// horizon = 공백 + s칸 '-' + 공백
// space = 공백 s+2칸

// top = 0, bottom = 2s+3-1, mid = (2s+3) >> 1
// start = 0, end = (s.length * (s+2+1)) - 1
