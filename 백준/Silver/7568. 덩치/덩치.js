const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const answer = Array(N).fill(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i !== j) {
            // i번째 사람이 j번째 사람보다 몸무게도 가볍고, 키도 작으면
            if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
                answer[i] += 1;
            }
        }
    }
}

console.log(...answer);