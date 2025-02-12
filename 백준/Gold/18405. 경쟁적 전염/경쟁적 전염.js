const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const test = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const [S, X, Y] = input.at(-1).split(' ').map(Number);
// N * N 크기의 시험관, K종류의 바이러스, 낮은 번호부터 증식,
// S초가 지난 후에 (X,Y)에 있는 바이러스의 번호
// X = 행, Y = 열

// 1. N*N 크기의 시험관을 전부 탐색한다.
// 2. 만약 현재 칸에 0보다 큰 수가 있다면 현재 [k, x, y, s]를 우선순위 큐에 삽입하고 방문처리 한다.
// 3. 우선순위의 키 값은 s로 하고 s가 동일할 경우 k로 한다.
// 3. 우선순위 큐를 이용해 BFS 탐색을 하며 큐에 저장할 때는 s를 1 증가시켜서 삽입한다.
// 4. s가 S보다 클 경우 탐색을 종료하고 현재 x,y위치에 있는 바이러스의 번호를 출력한다.

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];
let front = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (test[i][j] > 0) {
            queue.push([test[i][j], i, j, 1]);
            visited[i][j] = true;
        }
    }
}
queue.sort((a, b) => a[0] - b[0]);

while (queue.length > front) {
    const [k, x, y, s] = queue[front++];
    if (s > S) break;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
            test[nx][ny] = k;
            queue.push([k, nx, ny, s + 1]);
            visited[nx][ny] = true;
        }
    }
}

console.log(test[X - 1][Y - 1]);
