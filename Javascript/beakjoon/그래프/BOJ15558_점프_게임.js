const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const line = input.slice(1).map((e) => e.trimEnd().split('').map(Number));

// line[0] = 왼쪽,  line[1] = 오른쪽

// 현재줄[i+1]===1이고, 방문하지 않았고, i+1 >= time+1 이라면 [현재줄, i+1, tiem+1]을 큐에 삽입한다.
// 현재줄[i-1]===1이고, 방문하지 않았고, i-1 >= time+1 이라면 [현재줄, i-1, tiem+1]을 큐에 삽입한다.
// 반대줄[i+k]===1이고, 방문하지 않았고, i+k >= time+1 이라면 [반대줄, i+k, item+1]큐에 삽입한다.

// i >= N 이라면 실행을 마치고 1을 출력한다.
// 큐가 비었는데 끝나지 않았다면 0을 출력한다.
// N번째 칸을 넘어가도 클리어 처리되도록 한다.

// * 방문한 칸은 0으로 만들어서 방문처리 한다.

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
