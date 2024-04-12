const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((row) => row.split(' ').map(Number));
const answer = Array(4).fill(0);
input.forEach((row, index) => {
    const arr = [];
    const match = [];
    for (let i = 0; i < 6; i++) {
        arr.push(row.splice(0, 3));
    }
    // 대진표
    for (let i = 0; i < 6; i++) {
        for (let j = i + 1; j < 6; j++) {
            match.push([i, j]);
        }
    }

    backTracking(0, arr, match, index);
});

function backTracking(cur, arr, match, index) {
    if (cur === 15) {
        let possible = true;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 3; j++) {
                if (arr[i][j] !== 0) possible = false;
            }
        }
        if (possible) answer[index] = 1;
        return;
    }

    const [a, b] = match[cur];
    // 승, 패 비교
    if (arr[a][0] && arr[b][2]) {
        arr[a][0]--;
        arr[b][2]--;
        backTracking(cur + 1, arr, match, index);
        arr[a][0]++;
        arr[b][2]++;
    }
    // 패, 승 비교
    if (arr[a][2] && arr[b][0]) {
        arr[a][2]--;
        arr[b][0]--;
        backTracking(cur + 1, arr, match, index);
        arr[a][2]++;
        arr[b][0]++;
    }
    // 무승부 끼리 비교
    if (arr[a][1] && arr[b][1]) {
        arr[a][1]--;
        arr[b][1]--;
        backTracking(cur + 1, arr, match, index);
        arr[a][1]++;
        arr[b][1]++;
    }
}

console.log(answer.join(' '));
