const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, C] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
let answer = '';

let numMap = new Map(); // 숫자의 빈도 저장
for (let num of nums) {
    if (numMap.has(num)) numMap.set(num, numMap.get(num) + 1);
    else numMap.set(num, 1);
}

const numArr = [...numMap];
numArr.sort((a, b) => b[1] - a[1]); // 빈도 순으로 내림차순 정렬
numMap = new Map(numArr);

for (const [num, frequncy] of numMap) {
    for (let i = 0; i < frequncy; i++) {
        answer += num + ' ';
    }
}

console.log(answer);
