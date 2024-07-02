const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((str) => str.trimEnd());
const N = +input[0];
const standard = input[1];
const compares = input.slice(2);
let answer = 0;

String.prototype.splice = function (start = 0, len = this.length) {
    return this.slice(0, start) + this.slice(start + len);
};

for (let i = 0; i < compares.length; i++) {
    let cmp = compares[i];
    let std = standard;
    // 길이 차이가 1보다 클 경우 비슷한 단어가 될 수 없음
    if (Math.abs(std.length - cmp.length) > 1) continue;
    if (std.length > cmp.length) {
        for (let j = 0; j < cmp.length; j++) {
            if (std.includes(cmp[j])) {
                const idx = std.indexOf(cmp[j]);
                std = std.splice(idx, 1);
            }
        }
        if (std.length === 1) answer++;
    } else {
        for (let j = 0; j < std.length; j++) {
            if (cmp.includes(std[j])) {
                const idx = cmp.indexOf(std[j]);
                cmp = cmp.splice(idx, 1);
            }
        }
        if (cmp.length <= 1) answer++;
    }
}

console.log(answer);
