const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const buildings = [0].concat(input[1].split(' ').map(Number));
let answer = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    let rightMax = -Infinity;
    let leftMax = Infinity;
    const x1 = i;
    const y1 = buildings[i];
    // 오른쪽 빌딩 탐색
    for (let j = i; j <= N; j++) {
        if (i === j) continue;
        const x2 = j;
        const y2 = buildings[j];
        const incline = (y2 - y1) / (x2 - x1);
        if (incline > rightMax) {
            answer[i]++;
            rightMax = incline;
        }
    }
    // 왼쪽 빌딩 탐색
    for (let j = i; j >= 1; j--) {
        if (i === j) continue;
        const x2 = j;
        const y2 = buildings[j];
        const incline = (y2 - y1) / (x2 - x1);
        if (incline < leftMax) {
            answer[i]++;
            leftMax = incline;
        }
    }
}
console.log(Math.max(...answer));
