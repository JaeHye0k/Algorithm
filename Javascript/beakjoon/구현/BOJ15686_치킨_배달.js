// 빈칸 0, 치킨집 2, 집 1
// 집부터 가장 가까운 치킨집까지의 거리 = 치킨거리
// 도시의 치킨 거리 = 모든 집의 치킨 거리의 합
// 모든 집부터 M개의 치킨집 까지의 거리의 총 합이 최소가 되도록 만드시오.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));
const chicken = Array.from(Array(13), () => []);
let count = 0;

// r,c치킨집 부터 모든 집 까지의 거리를 구하는 함수 O(N^2)
function setDist(r, c, count) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === 1) {
                chicken[count].push(Math.abs(r - i) + Math.abs(c - j));
            }
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (arr[i][j] === 2) {
            setDist(i, j, count);
            count++;
        }
    }
}

const answer = [];
const sum = Array.from(Array(13), () => []);
for (let i = 0; i < count; i++) {
    for (let j = 0; j < chicken[i].length; j++) {
        if (answer[j] === undefined) answer[j] = chicken[i][j];
        else answer[j] = Math.min(answer[j], chicken[i][j]);
        if (j === 0) sum[i].push(chicken[i][j]);
        else sum[i].push(sum[i][j - 1] + chicken[i][j]);
    }
}

console.table(chicken);
console.log(answer);
console.table(sum);
