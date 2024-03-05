// 수열의 길이가 짝수이고, 수열을 뒤집어도 뒤집기 전 수열과 동일한 것
// 짝수 팰린드롬을 최대한 많이 만들도록 나누었을 때 짝수 팰린드롬의 개수
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);
let answer = 0;

let squence = [];
for (let i = 0; i < N; i += 2) {
    squence.push(...arr.slice(i, i + 2));
    if (JSON.stringify(squence) === JSON.stringify(squence.slice().reverse())) {
        answer++;
        squence = [];
    }
}

console.log(answer ? answer : -1);

// 반례
// 12
// 1 1 2 5 6 7 7 6 5 5 5 2
// 정답: -1
// 코드가 내놓는 답: 1
