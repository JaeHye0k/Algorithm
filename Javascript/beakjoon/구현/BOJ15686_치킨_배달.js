const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
let answer = Infinity;

const chickens = [];
const house = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (arr[i][j] === 1) house.push([i, j]);
        if (arr[i][j] === 2) chickens.push([i, j]);
    }
}

// 치킨집 M개를 골랐을 때 도시의 치킨거리중 가장 작은값이 정답
function caculateDist(arr) {
    let dist = 0;
    let min = Infinity;
    for (const [y1, x1] of house) {
        for (const [y2, x2] of arr) {
            min = Math.min(Math.abs(y1 - y2) + Math.abs(x1 - x2), min);
        }
        dist += min;
        min = Infinity;
    }
    answer = Math.min(dist, answer);
}

function combination(cur, arr) {
    if (arr.length === M) {
        caculateDist(arr);
        return;
    }
    for (let i = cur; i < chickens.length; i++) {
        combination(i + 1, [...arr, chickens[i]]);
    }
}

combination(0, []);
console.log(answer);
