const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const visited = Array(10 ** 5 + 1).fill(false);

const queue = [[0, N]];
visited[N] = true;
double(0, N * 2);
let front = 0;
let answer;

while (queue.length > front) {
    const [time, cur] = queue[front++];
    if (cur === K) {
        answer = time;
        break;
    }
    for (const next of [cur - 1, cur + 1]) {
        if (!visited[next] && next >= 0 && next <= 100000) {
            queue.push([time + 1, next]);
            visited[next] = true;
            double(time + 1, next * 2);
        }
    }
}

function double(time, cur) {
    if (cur > 100000 || visited[cur] || cur === 0) return;
    double(time, cur * 2);
    queue.push([time, cur]);
    visited[cur] = true;
}

console.log(answer);
