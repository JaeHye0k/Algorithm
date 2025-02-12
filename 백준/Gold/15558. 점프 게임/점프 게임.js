const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const line = input.slice(1).map((e) => e.trimEnd().split('').map(Number));

console.log(bfs([0, 0, 0]));

function bfs(start) {
    const queue = [start];
    let front = 0;
    while (queue.length > front) {
        const [curLine, i, time] = queue[front++];
        const acrossLine = curLine ? 0 : 1;
        if (i >= N - 1) return 1;
        if (line[curLine][i + 1] === 1 || i + 1 > N - 1) {
            line[curLine][i + 1] = 0;
            queue.push([curLine, i + 1, time + 1]);
        }
        if (line[curLine][i - 1] === 1) {
            line[curLine][i - 1] = 0;
            queue.push([curLine, i - 1, time + 1]);
        }
        if (line[acrossLine][i + K] === 1 || i + K > N - 1) {
            line[acrossLine][i + K] = 0;
            queue.push([acrossLine, i + K, time + 1]);
        }
        line[curLine][time] = 0;
        line[acrossLine][time] = 0;
    }
    return 0;
}