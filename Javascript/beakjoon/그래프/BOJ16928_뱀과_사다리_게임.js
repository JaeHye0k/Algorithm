const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const ladder = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
const snake = input.slice(N + 1).map((e) => e.split(' ').map(Number));
const visited = Array(101).fill(false);
const arr = Array(101).fill(0);

// 사다리
for (let [x, y] of ladder) {
    arr[x] = y;
}
// 뱀
for (let [u, v] of snake) {
    arr[u] = v;
}

let answer = bfs(1, 0);
console.log(answer);

function bfs(start, count) {
    const queue = [[start, count]];
    let front = 0;
    visited[start] = true;
    while (queue.length > front) {
        const [v, diceCount] = queue[front++];
        for (let i = 1; i <= 6; i++) {
            let next = v + i;
            if (next === 100) return diceCount + 1;
            else if (next < 100) {
                // 사다리 혹은 뱀일 경우 해당 위치로 이동 (카운트는 증가하지 않음)
                if (arr[next] !== 0) {
                    next = arr[next];
                }
                if (!visited[next]) {
                    queue.push([next, diceCount + 1]);
                    visited[next] = true;
                }
            }
        }
    }
}
