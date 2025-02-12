const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const broken = M ? input[2].split(' ') : [];
const maxChannel = N * 2 + 100;
let count = Math.abs(N - 100); // 버튼 누른 횟수

for (let i = 0; i <= maxChannel; i++) {
    const numStr = i.toString();
    const strLen = numStr.length;
    let isValid = true;

    for (let j = 0; j < strLen; j++) {
        // 지금 누른 버튼중에 고장난 버튼이 포함되어 있다면
        if (broken.includes(numStr[j])) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        count = Math.min(count, strLen + Math.abs(N - i));
    }
}

console.log(count);
