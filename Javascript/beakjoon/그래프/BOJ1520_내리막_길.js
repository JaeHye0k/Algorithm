const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const dp = Array.from({ length: M }, () => Array(N).fill(-1));
console.log(dfs(0, 0));

function dfs(x, y) {
    // 도착 지점에 도달했을 경우 1(한 가지 경우의 수)리턴
    if (x === N - 1 && y === M - 1) return 1;

    // 현재 지점이 이미 방문한적 있는 경우 그 위치에서 출발했을 때의 경우의 수 리턴
    if (dp[y][x] !== -1) return dp[y][x];

    let ways = 0;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < M && arr[ny][nx] < arr[y][x]) {
            ways += dfs(nx, ny);
        }
    }

    dp[y][x] = ways;
    return dp[y][x];
}
