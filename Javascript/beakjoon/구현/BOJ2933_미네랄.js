const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let R, C;
let cave = [];
let N; // 막대 던진 횟수
let height; // 던진 높이
rl.on('line', (line) => {
    if (!R && !C) [R, C] = line.split(' ').map(Number);
    else if (cave.length < R) cave.push(line.split(''));
    else if (!N) N = +line;
    else if (!height) height = line.split(' ').map((e) => +e - 1); //높이 1 감소
    if (height) rl.close();
}).on('close', () => {
    solution();
});

function solution() {
    let L = false;
    cave = cave.reverse();
    const clusters = [];
    const visited = Array.from(Array(R), () => Array(C).fill(false));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let answer = '';

    for (let i = 0; i < N; i++) {
        L = !L;
        // 왼쪽 오른쪽 번갈아가며 막대기 던지기
        // 콘솔창에 출력했을 때 R-1이 가장 바닥면임
        throwStick(L, cave[height[i]]);

        visited.forEach((e) => e.fill(false));
        // 클러스터가 분리됐는지 확인
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (!visited[i][j] && cave[i][j] === 'x') {
                    visited[i][j] = true;
                    clusters.push(bfs(i, j));
                }
            }
        }

        // 클러스터가 두 개 이상이라면 땅과 이어져있지 않은 클러스터는 아래로 떨어져야 한다.
        if (clusters.length > 1) {
            // 각각의 클러스터의 미네랄을 y축 기준으로 오름차순 정렬
            // 그러면 클러스터를 순회할 때 y축이 낮은 미네랄부터 접근할 수 있음
            clusters.forEach((e) => {
                e.sort((a, b) => a[0] - b[0]);
            });

            for (const cluster of clusters) {
                fallDown(cluster);
            }
        }
        // 클러스터 배열 초기화
        clusters.length = 0;
    }

    for (let i = cave.length - 1; i >= 0; i--) {
        answer += cave[i].join('') + '\n';
    }
    console.log(answer.trimEnd());

    function throwStick(L, arr) {
        // 막대기에 맞은 미네랄은 '.'으로 바뀜
        if (L) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === 'x') {
                    arr[i] = '.';
                    return;
                }
            }
        } else {
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === 'x') {
                    arr[i] = '.';
                    return;
                }
            }
        }
    }

    function bfs(y, x) {
        const queue = [[y, x]];
        let front = 0;
        while (queue.length > front) {
            const [y, x] = queue[front++];
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (nx >= 0 && ny >= 0 && nx < C && ny < R && !visited[ny][nx] && cave[ny][nx] === 'x') {
                    visited[ny][nx] = true;
                    queue.push([ny, nx]);
                }
            }
        }
        return queue;
    }

    function fallDown(cluster) {
        while (true) {
            let cantFalldown = false;
            const partOfCluster = [];
            for (const [y, x] of cluster) {
                // 땅과 이어져있다면 해당 클러스터는 바닥으로 안떨어짐
                if (y === 0) return;

                // 다음 칸이 미네랄이거나, 바닥보다 아래라면 다음 차례에서 아래로 내려가지 못함
                if (cave[y - 1][x] === 'x' || y - 1 === -1) {
                    cantFalldown = true;
                    break;
                }

                // 한 칸은 무조건 떨어짐
                cave[y][x] = '.';
                cave[y - 1][x] = 'x';
                partOfCluster.push([y, x]);
            }
            // 다음 차례에 낙하가 불가능한 경우
            if (cantFalldown) {
                // 부분적으로 떨어졌던 미네랄들 다시 되돌리기
                while (partOfCluster.length) {
                    const [y, x] = partOfCluster.pop();
                    cave[y - 1][x] = '.';
                    cave[y][x] = 'x';
                }
                break;
            } else {
                // 낙하한 지점 클러스터에 반영
                cluster.forEach(([y, x], i) => (cluster[i] = [y - 1, x]));
            }
        }
    }
}

// 막대를 던진 높이에 있는 첫번째 미네랄 파괴
// 클러스터가 분리되면, 둘 중 더 위에 있는 클러스터가 아래로 떨어진다.
// 떨어지는 클러스터는 아래에 있는 클러스터나, 땅을 만나기 전까지 계속해서 떨어진다.

// 막대 던지기
// h높이에 있는 미네랄 파괴 (왼쪽에서 던지면 0번인덱스부터 탐색, 오른쪽에서 던지면 마지막 인덱스부터 탐색)
// 클러스터가 나눠져있는가? (이중 for문으로 아래에서부터 올라오면서 bfs 시작 인덱스를 결정,
// bfs가 수행된 횟수만큼 클러스터가 나눠져 있음, bfs시작 인덱스 저장)
// (네) 클러스터의 아래부터 한 칸씩 아래로 옮겨줘야 하기 때문에 clusters[i]를 y축 기준으로 오름차순 정렬

// 반례
// 7 5
// .....
// .xxx.
// .x...
// xx.xx
// x...x
// x...x
// x...x
// 1
// 4

// answer
// .....
// .....
// .xxx.
// .x.xx
// xx..x
// x...x
// x...x
