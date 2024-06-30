## 문제

[BOJ7576\_토마토](https://www.acmicpc.net/problem/7576)

## 코드

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const box = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

const queue = [];
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 1) queue.push([i, j, 0]);
        if (box[i][j] === 0) count++; // 안익은 토마토의 개수
    }
}

bfs(queue);
console.log(count ? -1 : answer);

function bfs(queue) {
    let front = 0;
    while (queue.length > front) {
        const [y, x, day] = queue[front++];
        answer = Math.max(answer, day);
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < M && ny < N && box[ny][nx] === 0) {
                queue.push([ny, nx, day + 1]);
                box[ny][nx] = 1;
                count--;
            }
        }
    }
}
```

![](https://velog.velcdn.com/images/ahhpc2012/post/d1a8ae7c-f5f6-4937-acc8-1db0310740cd/image.png)

## 접근법

>

-   상하좌우를 확인하며 토마토가 다 익을 수 있는 최소 일수를 구하라
    -> BFS로 하면 되겠다.
-   0일차에 익은 토마토들을 전부 큐에 미리 넣어놓고 BFS를 시작해야 한다.
-   익은 토마토(1)는 이미 큐에 있거나 전에 방문한 곳일테니 다시 방문할 필요가 없고, 토마토가 없는 곳(-1)은 방문할 수 없는 곳이므로 방문할 수 있는 곳은 안익은 토마토(0)가 있는 곳 뿐이다.
    -> `visited` 변수를 따로 만들어주지 않고, 안익은 토마토(0)가 있는곳만 방문해주도록 하면 된다.
-   0일차에 안익은 토마토들의 개수를 미리 세어둔 다음에 BFS가 종료되었을 때 안익은 토마토의 개수를 확인하여 안익은 토마토가 남아있다면 -1을 출력하도록 한다.

## 개선된 코드

**2차원 큐 -> 1차원 큐**

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const box = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

const queue = [];
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 1) queue.push(i, j, 0);
        if (box[i][j] === 0) count++; // 안익은 토마토의 개수
    }
}

bfs(queue);
console.log(count ? -1 : answer);

function bfs(queue) {
    let front = 0;
    while (queue.length > front) {
        const y = queue[front++];
        const x = queue[front++];
        const day = queue[front++];
        answer = day;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < M && ny < N && box[ny][nx] === 0) {
                queue.push(ny, nx, day + 1);
                box[ny][nx] = 1;
                count--;
            }
        }
    }
}
```

![](https://velog.velcdn.com/images/ahhpc2012/post/f4854233-93bf-488e-936c-7c77e22fb5b5/image.png)

### 개선사항

`queue`가 2차원 배열이면 원소로 존재하는 1차원 배열은 메모리 상에서 각각 떨어져 있기 때문에 <u>"지역성의 원리"</u>로 인해 캐시 메모리에 저장될 확률이 낮아진다.

지역성의 원리란 간단히 말해서 CPU는 빠른 시일내에 다시 사용할 것 같은 데이터를 캐시 메모리에 저장해놓는데, 빠른 시일내의 다시 사용할 것 같은 데이터를 어떻게 판단할 것이냐에 대한 기준이다.

메모리에서 데이터를 가져오는 것보다 캐시에서 데이터를 가져오는 것이 더 빠르기 때문에 캐시를 잘 사용할 경우 동작 속도는 더 빨라진다.

1차원 배열의 각 원소는 메모리 상에서 서로 연속되어 저장되기 때문에 지역성의 원리로 인해 캐시의 사용률이 높아진다. 따라서 2차원 배열 대신 1차원 배열을 사용하면 **속도가 더 빨라진다.**

또한 데이터가 하나로 이어서 메모리에 저장되지 않고 따로 분리되어서 메모리에 저장될 경우 <u>"단편화"</u>가 생길 우려가 높다.

단편화란 간단히 말해서 메모리에 **1Byte 공간 10개(10Byte)** 가 연속되어 있다고 했을때, **0~3번 공간(4Byte)** 과, **6~9번 공간(4Byte)** 이 사용중일 때 **4~5번 공간(2Byte)** 에 4Byte짜리 데이터를 저장할 수 없어서 생기는 메모리 낭비 문제다.

따라서 단편화를 줄일 경우 메모리 누수를 방지할 수 있는데, 1차원 배열을 사용하면 데이터가 메모리 상에서 연속되어 저장되기 때문에 단편화가 발생하지 않아 **메모리가 절약된다.**

## 더 개선된 코드

**데이터 중복 제거**

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const box = input.slice(1).map((e) => e.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

const queue = [];
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 1) queue.push(i, j);
        if (box[i][j] === 0) count++; // 안익은 토마토의 개수
    }
}

bfs(queue);
console.log(count ? -1 : answer);

function bfs(queue) {
    for (let front = 0, day = 0; front < queue.length; day++) {
        // 하루
        for (let { length } = queue; front < length; ) {
            const y = queue[front++];
            const x = queue[front++];

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (nx >= 0 && ny >= 0 && nx < M && ny < N && box[ny][nx] === 0) {
                    queue.push(ny, nx);
                    box[ny][nx] = 1;
                    count--;
                }
            }
        }
        answer = day;
    }
}
```

![](https://velog.velcdn.com/images/ahhpc2012/post/1cac827e-9058-4d6f-81ce-8aee86bfd3ef/image.png)

### 개선사항

큐에 `day`를 저장하면 안익은 토마토를 방문할 때마다 최대 4가지(상하좌우) `day`데이터가 중복된다.

중복을 제거하기 위해 2중 for문을 사용해서 안쪽에 있는 반복문이 한 번 끝날때만 `day`를 증가시키도록 수정했다. 큐에 저장되는 데이터가 줄었으므로 메모리와 속도가 더 개선된 것을 확인할 수 있다.
