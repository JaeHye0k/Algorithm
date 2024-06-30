## 문제

[BOJ20165\_인내의 도미노 장인 호석](https://www.acmicpc.net/problem/20165)

## 풀이

### 요구사항

N,M 크기의 맵이 존재하고 각 칸에는 도미노의 높이가 있다.
매 라운드마다 공격자는 도미노를 상,하,좌,우 중에 한 방향으로 도미노를 하나 쓰러트린다.도미노가 쓰러지는 방향으로 높이를 고려하여 연쇄적으로 쓰러진다. 공격자는 해당 라운드에서 쓰러진 도미노의 개수만큼 점수를 얻는다.
수비자는 쓰러진 도미노 하나를 세울 수 있다.

모든 라운드가 끝난 뒤, 공격자의 총 점수와 도미노의 상태를 출력하시오.

### 해결방안

해당 문제는 BFS를 적용하여 구현할 수 있다.
방향 E,W,S,N을 키로 하는 객체를 만들고, 방향에 맞게 `[x,y]` 값을 넣어준다.

각 지점의 도미노의 높이 만큼 주어진 방향으로 이동하면서 아직 쓰러지지 않은 도미노(`'S'`)를 만나면 큐에 넣어주고 쓰러뜨린다.

높이만큼 전부 이동했으면 큐에 들어있는 다음 도미노를 꺼내서 해당 도미노의 높이만큼 주어진 방향으로 이동하며 위 과정을 반복해주면 된다.

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, R] = input[0].split(' ').map(Number);
const domino = input.slice(1, 1 + N).map((e) => e.split(' ').map(Number));
const result = Array.from(Array(N), () => Array(M).fill('S'));
let answer = 0;
let idx = 1 + N;
const dir = {
    E: [1, 0],
    W: [-1, 0],
    S: [0, 1],
    N: [0, -1],
};

while (idx < input.length) {
    let [aY, aX, d] = input[idx++].trim().split(' ');
    let [bY, bX] = input[idx++]
        .trim()
        .split(' ')
        .map((e) => +e - 1);
    [aY, aX] = [+aY - 1, +aX - 1];

    bfs(aX, aY, d);
    result[bY][bX] = 'S';
}

console.log(answer);
console.log(result.map((e) => e.join(' ')).join('\n'));

function bfs(x, y, d) {
    const queue = [[x, y]];
    const [dx, dy] = dir[d];
    let front = 0;
    while (queue.length > front) {
        const [x, y] = queue[front++];
        const height = domino[y][x];
        for (let i = 0; i < height; i++) {
            const nx = x + dx * i;
            const ny = y + dy * i;
            if (nx >= 0 && ny >= 0 && nx < M && ny < N && result[ny][nx] === 'S') {
                queue.push([nx, ny]);
                result[ny][nx] = 'F';
                answer++;
            }
        }
    }
}
```

![](https://velog.velcdn.com/images/ahhpc2012/post/93192557-363b-4e4b-9913-7aff51b3b5e9/image.png)
