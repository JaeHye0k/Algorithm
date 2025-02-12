const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const weights = input[1].split(' ').map(Number);
const M = +input[2];
const marbels = input[3].split(' ').map(Number);

let dp = [0]; // 현재 추 무게 자체도 더할 수 있게 0으로 초기화 -> 0+현재 무게 = 현재 무게
let answer = [];

// dp에 저장된 확인 가능한 무게에 대해 현재 추 무게를 더하거나 뺀 값을 추가
for (let weight of weights) {
    let tmp = [];
    for (let i of dp) {
        tmp.push(i + weight);
        tmp.push(Math.abs(i - weight));
    }

    dp = Array.from(new Set([...dp, ...tmp])); // 연산 줄이기 위해 중복 제거
}

for (let marbel of marbels) {
    if (dp.includes(marbel)) answer.push('Y');
    else answer.push('N');
}

console.log(...answer);
