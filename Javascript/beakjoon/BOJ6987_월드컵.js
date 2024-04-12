const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((row) => row.split(' ').map(Number));
const answer = [];
input.forEach((row) => {
    const arr = [];
    let possible = true;
    for (let i = 0; i < 6; i++) {
        arr.push(row.splice(0, 3));
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (i === j) continue;
            // 승, 패 비교
            if (arr[i][0] && arr[j][2]) {
                arr[i][0]--;
                arr[j][2]--;
            }
            if (arr[i][2] && arr[j][0]) {
                arr[i][2]--;
                arr[j][0]--;
            }
            // 무승부 끼리 비교
            if (arr[i][1] && arr[j][1]) {
                arr[i][1]--;
                arr[j][1]--;
            }
        }
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j] !== 0) possible = false;
        }
    }
    if (possible) answer.push(1);
    else answer.push(0);
});

console.log(answer.join(' '));
// 승, 무, 패는 6이상이 될 수 없다.
// 승의 합과 패의 합이 동일해야 한다.
// 한 국가의 승+무+패 = 0이다.
