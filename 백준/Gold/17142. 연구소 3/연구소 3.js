const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const laboratory = input.slice(1).map((e) => e.split(' ').map(Number));
const time = Array.from({ length: N }, () => Array(N).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const selected = Array(10);

// 초기에 모든 바이러스는 비활성 바이러스,
// 그 중 M개의 바이러스를 사용해서 모든 빈 칸을 바이러스로 채울 수 있는 최단 시간
// 1. 조합 구하기 (nCr) = (10Cm)
// 2. m개의 조합 구했으면 해당 조합으로 BFS탐색하기

let emptyPlace = 0;
let virus = [];
let answer = Infinity;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (laboratory[i][j] === 0) emptyPlace++;
        else if (laboratory[i][j] === 2) {
            virus.push([i, j]); // [x,y]
        }
    }
}

combination(0, 0);
console.log(answer === Infinity ? -1 : answer);

function combination(cur, count) {
    if (count === M) {
        let queue = [];
        time.forEach((row) => {
            row.fill(-1);
        });
        for (let i = 0; i < virus.length; i++) {
            if (selected[i]) {
                queue.push(virus[i]);
                time[virus[i][0]][virus[i][1]] = 0;
            }
        }
        bfs(queue);
        return;
    }
    for (let i = cur; i < virus.length; i++) {
        if (selected[i]) continue;
        selected[i] = true;
        combination(i + 1, count + 1);
        selected[i] = false;
    }
}

function bfs(queue) {
    let front = 0;
    let infectPlace = 0;
    let totalTime = 0;
    while (queue.length > front) {
        let [x, y] = queue[front++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < N && ny < N && time[nx][ny] === -1 && laboratory[nx][ny] !== 1) {
                time[nx][ny] = time[x][y] + 1;
                // 다음에 가야할 칸이 빈 칸이라면
                if (laboratory[nx][ny] === 0) {
                    infectPlace++;
                    totalTime = time[nx][ny];
                }
                queue.push([nx, ny]);
            }
        }
    }

    if (infectPlace === emptyPlace) answer = Math.min(answer, totalTime);
}
