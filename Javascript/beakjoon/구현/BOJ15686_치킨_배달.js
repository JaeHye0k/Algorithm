// 빈칸 0, 치킨집 2, 집 1
// 집부터 가장 가까운 치킨집까지의 거리 = 치킨거리
// 도시의 치킨 거리 = 모든 집의 치킨 거리의 합
// 모든 집부터 M개의 치킨집 까지의 거리의 총 합이 최소가 되도록 만드시오.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));
const house = [];
const chicken = [];
let answer = Infinity;

function combination(cur, chickens) {
    // 치킨집이 M개가 되었을 경우
    // 모든 집부터 M개의 치킨집 까지의 치킨 거리를 구함
    if (chickens.length === M) {
        let chickenDistOfCity = 0; // 도시의 치킨 거리
        for (const [hy, hx] of house) {
            let chickenDist = Infinity; // 현재 집의 치킨 거리
            for (const num of chickens) {
                const [cy, cx] = chicken[num];
                const dist = Math.abs(hy - cy) + Math.abs(hx - cx);
                chickenDist = Math.min(chickenDist, dist);
            }
            chickenDistOfCity += chickenDist;
        }
        answer = Math.min(answer, chickenDistOfCity);
    }

    for (let i = cur; i < chicken.length; i++) {
        combination(i + 1, [...chickens, i]);
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (arr[i][j] === 1) house.push([i, j]);
        else if (arr[i][j] === 2) chicken.push([i, j]);
    }
}

combination(0, []);
console.log(answer);
