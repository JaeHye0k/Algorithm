const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const circles = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const [A, B] = input.at(-1).split(' ').map(Number);
const tree = Array.from({ length: N + 1 }, () => []);

// 트리 형성 O(N)
const stack = [0]; // 원의 번호가 저장됨
const queue = [];
let front = 0;
for (let [i, x, r] of circles) {
    queue.push([x - r, i]);
    queue.push([x + r, -i]);
}
queue.sort((a, b) => a[0] - b[0]);

while (queue.length > front) {
    const [x, num] = queue[front++];
    if (num <= 0) stack.pop();
    else {
        tree[num].push(stack.at(-1));
        tree[stack.at(-1)].push(num);
        stack.push(num);
    }
}

const visited = Array(N + 1).fill(false);
visited[A] = true;
dfs(A, [A]); // dfs 수행

function dfs(cur, path) {
    if (cur === B) {
        console.log(path.length);
        console.log(...path);
        return;
    }
    for (let next of tree[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            path.push(next);
            dfs(next, path);
            visited[next] = false;
            path.pop();
        }
    }
}
