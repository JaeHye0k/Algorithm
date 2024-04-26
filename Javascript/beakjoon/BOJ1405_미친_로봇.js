// 방문한 곳을 다시 방문하지 않는 경로를 단순한 경로라고 한다.
// 로봇이 단순한 경로로 이동할 확률을 구하시오.

// 29*29 크기의 배열을 만들고, 중심점에서 시뮬레이션을 시작한다.
// 네 방향을 탐색하며 이동할 위치에 "현재 칸에 적혀있는 확률" * "해당 방향으로 이동할 확률" 을 한다.
// 그러면 해당 칸으로 이동할 확률이 구해진다.
// 이미 방문한 칸일경우 방문하지 않는다.
// dfs의 최대 깊이까지 들어갔다면 그때의 확률을 acc에 누적해준다.
// 그러면 acc에는 단순한 경로로 이동할 확률만 누적된다.

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, east, west, south, north] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const map = Array.from({ length: 29 }, () => Array.from({ length: 29 }, () => 0));
const [x, y] = [14, 14];
map[y][x] = 1;
let acc = 0;
const percentage = [west, east, north, south].map((d) => d / 100);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

dfs(x, y, 0);
console.log(acc === 1 ? '1.0' : acc);

function dfs(x, y, depth) {
    if (depth === N) acc += map[y][x];
    for (let i = 0; i < 4; i++) {
        // 해당 방향으로 갈 확률이 0퍼센트라면 무시
        if (percentage[i] === 0) continue;
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx <= 28 && ny <= 28 && depth < N && map[ny][nx] === 0) {
            map[ny][nx] = map[y][x] * percentage[i];
            dfs(nx, ny, depth + 1);
            map[ny][nx] -= map[y][x] * percentage[i];
        }
    }
}
