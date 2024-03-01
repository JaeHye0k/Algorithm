const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1, -1).map((e) => e.split(' ').map(Number));
const [A, B] = input.at(-1).split(' ').map(Number);
const visited = Array(N + 1).fill(false);

const circles = [];
for (let [k, x, r] of arr) {
    circles.push([k, x - r]);
    circles.push([-k, x + r]);
}
circles.sort((a, b) => a[1] - b[1]);

const stack = [0];
const tree = Array.from({ length: N + 1 }, () => []);

makeTree();
visited[A] = true;
dfs(A, [A]);

// 괄호쌍 판별 O(n)
function makeTree() {
    for (let [k, _] of circles) {
        if (k < 0) stack.pop();
        else {
            tree[stack.at(-1)].push(k);
            tree[k].push(stack.at(-1));
            stack.push(k);
        }
    }
}

// A -> B 경로 찾기
function dfs(cur, path) {
    if (cur === B) {
        console.log(path.length);
        console.log(...path);
    } else {
        for (let next of tree[cur]) {
            if (!visited[next]) {
                visited[next] = true;
                dfs(next, [...path, next]);
                visited[next] = false;
            }
        }
    }
}
