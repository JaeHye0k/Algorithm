//  건물 x의 접근성은 x에서 가장 가까운 호석이 두 마리 치킨집 까지 왕복 최단거리
// 가능한 건물 번호의 조합을 구한다.
// 처음에 2차원 배열을 이용하여 건물간의 이동 거리를 저장해놓는다.
// 조합이 완성되면 N개의 건물에서 치킨집까지 가는 거리를 계산한다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));

let answer;
for (const [a, b] of arr) {
    graph[a][b] = 1;
    graph[b][a] = 1;
}
// 자기 자신으로 가는 거리는 0
for (let i = 1; i <= N; i++) {
    graph[i][i] = 0;
}

// 플로이드 워셜
for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (graph[i][k] + graph[k][j] < graph[i][j]) {
                graph[i][j] = graph[i][k] + graph[k][j];
            }
        }
    }
}

let min = Infinity;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        if (i === j) continue;
        let sum = 0;
        // k번 집에서 i번과 j번 중 어디가 더 가까운지
        for (let k = 1; k <= N; k++) {
            sum += Math.min(graph[k][i], graph[k][j]) * 2;
        }
        if (sum < min) {
            min = sum;
            if (i < j) answer = `${i} ${j} ${min}`;
            else answer = `${j} ${i} ${min}`;
        }
    }
}

console.log(answer);
