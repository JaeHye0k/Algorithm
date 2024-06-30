const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.map(Number);
const broken = M ? input[2].split(' ') : []; // 고장난 버튼이 없는 경우도 고려한다.
const maxChannel = N * 2 + 100;
let count = Math.abs(N - 100); // 버튼 누른 횟수

for (let i = 0; i <= maxChannel; i++) {
    const numStr = i.toString();
    const strLen = numStr.length;
    let isValid = true;

    for (let c of numStr) {
        // 지금 누른 버튼중에 고장난 버튼이 포함되어 있다면
        if (broken.includes(c)) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        count = Math.min(count, strLen + Math.abs(N - i));
    }
}

console.log(count);
