const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const laboratory = input.slice(1).map((e) => e.split(' ').map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 초기에 모든 바이러스는 비활성 바이러스,
// 그 중 M개의 바이러스를 사용해서 모든 빈 칸을 바이러스로 채울 수 있는 최단 시간
// 1. 조합 구하기 (nCr) = (10Cm)
// 2. m개의 조합 구했으면 해당 조합으로 BFS탐색하기

let space = 0;
let virus = [];
let answer = [];
let stack = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (laboratory[i][j] === 0) space++;
        else if (laboratory[i][j] === 2) {
            virus.push([i, j]); // [x,y]
        }
    }
}

combination(0, 0);
let min = Math.min(...answer);
console.log(answer);
console.log(min === Infinity ? -1 : min);

function combination(cur, count) {
    if (cur >= virus.length) return;

    const [x, y] = virus[cur];

    if (count === M) {
        const laboratoryCopy = JSON.parse(JSON.stringify(laboratory));
        stack.forEach(([x, y]) => {
            laboratoryCopy[x][y] = 'v';
        });
        laboratoryCopy.forEach((row, i) => {
            row.forEach((col, j) => {
                if (laboratoryCopy[i][j] === 1) laboratoryCopy[i][j] = '-';
            });
        });
        const visitedCopy = JSON.parse(JSON.stringify(visited));
        bfs([...stack], space, visitedCopy, laboratoryCopy);
        return;
    }
    for (let i = cur; i < virus.length; i++) {
        stack.push([...virus[i], 0]);
        visited[x][y] = true;
        combination(i + 1, count + 1);
        stack.pop();
        visited[x][y] = false;
    }
}

function bfs(queue, space, visited, laboratory) {
    let front = 0;
    let maxSec = 0;
    let preSec = 0;
    while (queue.length > front) {
        let [x, y, curSec] = queue[front++];
        maxSec = Math.max(curSec, preSec);
        preSec = curSec;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny] && laboratory[nx][ny] !== 1) {
                // 다음에 가야할 칸이 빈 칸이라면
                if (laboratory[nx][ny] === 0) {
                    queue.push([nx, ny, curSec + 1]);
                    visited[nx][ny] = true;
                    laboratory[nx][ny] = curSec + 1;
                    space--;
                }
                // 다음에 가야할 칸에 비활성 바이러스가 있다면
                else if (laboratory[nx][ny] === 2) {
                    queue.push([nx, ny, curSec]);
                    visited[nx][ny] = true;
                    laboratory[nx][ny] = '*';
                }
            }
        }
    }
    // 빈 공간이 존재한다면 -1
    if (space > 0) maxSec = Infinity;
    answer.push(maxSec);
}
