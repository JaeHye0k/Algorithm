const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const circles = input.slice(1).map((e) => e.split(' ').map(Number));
circles.sort((a, b) => b[2] - a[2]);
circles.unshift([0, 0, Infinity]);
const visited = Array(N + 1).fill(false);
const tree = Array.from({ length: N + 1 }, () => []);
let answer = 0;
let start = 0;

dfsConnect(0);

visited.fill(false);
visited[0] = true;
dfsDepth(0, 0);

visited.fill(false);
dfsDepth(start, 0); // 가장 깊은 곳에서 다시 dfs수행 (처음에 visited[0]=true로 해주어서 좌표평면에 있는 원은 탐색하지 못했기 때문에)

console.log(answer);

// 두 점 사이에 거리를 구한 뒤 포함 관계인지 확인하여 트리를 만들어 준다.
// 원들은 내접, 외접 등 교점이 존재하지 않기에 임의의 두 개의 원이 주어졌을 때,
// 두 원은 완전히 포함되거나 완전히 포함되지 않거나 둘 중의 하나인 경우만 존재한다.
// 반지름이 큰 원은 반지름이 작은 원 안에 포함될 수 없다. 즉 반지름이 큰 원은 반지름이 작은 원의 자식 노드가 될 수 없다.
// 따라서 반지름 순으로 내림차순 정렬 후 포함 관계인지 확인한다.
function dfsConnect(start) {
    const [x1, y1, r1] = circles[start];
    for (let i = start + 1; i <= N; i++) {
        if (!visited[i]) {
            const [x2, y2, r2] = circles[i];
            const powX = Math.pow(x1 - x2, 2);
            const powY = Math.pow(y1 - y2, 2);
            const d = Math.sqrt(powX + powY);
            if (d < r1) {
                tree[start].push(i);
                tree[i].push(start);
                visited[i] = true;
                dfsConnect(i);
            }
        }
    }
}

// 가장 깊은 깊이를 고른다.
function dfsDepth(cur, depth) {
    if (depth > answer) {
        answer = depth;
        start = cur;
    }
    for (let next of tree[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            dfsDepth(next, depth + 1);
            visited[next] = false;
        }
    }
}
