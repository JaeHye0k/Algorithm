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
const topFunc = [h, sh, h, h, sh, h, h, h, h, h];
const midFunc = [sh, sh, h, h, h, h, h, sh, h, h];
const bottomFunc = [h, sh, h, h, sh, h, h, sh, h, h];
const topVertical = [b, r, r, r, b, l, l, r, b, b];
const bottomVertical = [b, r, l, r, r, r, b, r, b, r];

const top = 0;
const bottom = 2 * s + 3 - 1;
const mid = (2 * s + 3) >> 1;

for (let i = top; i <= bottom; i++) {
    for (let j = 0; j < n.length; j++) {
        const num = +n[j];
        if (i === top) answer += topFunc[num]();
        else if (i === mid) answer += midFunc[num]();
        else if (i === bottom) answer += bottomFunc[num]();
        else if (i < mid) answer += topVertical[num]();
        else if (i > mid) answer += bottomVertical[num]();
        if (j === n.length - 1) answer += '\n';
        else answer += ' ';
    }
}

console.log(answer);