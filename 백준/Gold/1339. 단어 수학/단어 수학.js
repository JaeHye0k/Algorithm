const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const words = input.slice(1);
const obj = {};
for (let word of words) {
    let len = word.length - 1; // 자릿수
    for (let c of word) {
        // 자릿수 만큼 10제곱
        if (obj[c]) obj[c] += 10 ** len;
        else obj[c] = 10 ** len;
        len -= 1;
    }
}

// 내림차순 정렬된 value 가져오기
const sorted = Object.values(obj).sort((a, b) => b - a);
let answer = 0;
let num = 9;
for (let value of sorted) {
    answer += value * num;
    num--;
}
console.log(answer);
