const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const path = input.slice(1).map((e) => e.split(' ').map(Number));
const distance = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
let arr = Array.from({ length: n + 1 }, () => Array(n + 1));
path.forEach(([s, e, cost]) => {
    distance[s][e] = cost;
    distance[e][s] = cost;
    arr[s][e] = e;
    arr[e][s] = s;
});

// 플로이드 워셜 알고리즘 수행
for (let k = 1; k <= n; k++) {
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            if (a === b) {
                arr[a][b] = '-';
                continue;
            }
            if (distance[a][b] > distance[a][k] + distance[k][b]) {
                distance[a][b] = distance[a][k] + distance[k][b];
                arr[a][b] = arr[a][k];
            }
        }
    }
}
arr = arr.slice(1).map((e) => e.slice(1));
let answer = '';
arr.forEach((row) => {
    answer += row.join(' ') + '\n';
});
console.log(answer.trimEnd());
