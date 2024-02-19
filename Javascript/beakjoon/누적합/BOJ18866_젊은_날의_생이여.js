const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const young = Array.from({ length: N }, () => Array(2));
const old = Array.from({ length: N }, () => Array(2));

let maxHappy = 0;
let minHappy = Number.MAX_SAFE_INTEGER;
let maxTired = 0;
let minTired = Number.MAX_SAFE_INTEGER;

// 젋은 날
for (let i = 0; i < N; i++) {
    // 행복 최솟값 구하기
    if (minHappy > arr[i][0] && arr[i][0] !== 0) minHappy = arr[i][0];
    // 피로 최대값 구하기
    if (maxTired < arr[i][1] && arr[i][1] !== 0) maxTired = arr[i][1];

    young[i][0] = minHappy;
    young[i][1] = maxTired;
}

// 늙은 날
for (let i = N - 1; i >= 0; i--) {
    // 행복 최댓값 구하기
    if (maxHappy < arr[i][0] && arr[i][0] !== 0) maxHappy = arr[i][0];
    // 피로 최솟값 구하기
    if (minTired > arr[i][1] && arr[i][1] !== 0) minTired = arr[i][1];

    old[i][0] = maxHappy;
    old[i][1] = minTired;
}

let answer = 0;

for (let i = 1; i < N; i++) {
    if (young[i - 1][0] > old[i][0] && young[i - 1][1] < old[i][1]) answer = i;
}

console.log(answer ? answer : -1);
