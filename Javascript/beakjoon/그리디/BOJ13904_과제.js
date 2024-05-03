const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
// 점수를 기준으로 내림차순 정렬
arr.sort((a, b) => b[1] - a[1]);
const maxDay = arr.reduce((acc, cur) => Math.max(acc, cur[0]), 0);
const assignments = Array(maxDay + 1).fill(0);
let answer = 0;

for (let [d, w] of arr) {
    // 해당 일자에 과제가 비어있다면 과제 배정
    if (assignments[d] === 0) {
        assignments[d] = w;
        answer += w;
    } else {
        // 과제가 비어있지 않다면 하루씩 앞으로 이동하며 비어있는 날에 과제 배정
        for (let i = d - 1; i >= 1; i--) {
            if (assignments[i] === 0) {
                assignments[i] = w;
                answer += w;
                break;
            }
        }
    }
}

console.log(answer);
