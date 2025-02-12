const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const fileFolder = input.slice(1, N + M + 1).map((e) => e.split(' '));
const Q = +input[N + M + 1];
const query = input.slice(N + M + 2).map((e) => e.split('/'));
let answer = '';

const tree = {};
fileFolder.forEach(([p, f, c]) => {
    if (tree[p]) tree[p].push([f, c]);
    else {
        tree[p] = [];
        tree[p].push([f, c]);
    }
    if (c === '1' && !tree.hasOwnProperty(f)) tree[f] = [];
});

query.forEach((q) => {
    const folder = q.at(-1);
    bfs(folder);
});

function bfs(folder) {
    let files = [];
    let filesNoDup = new Set();
    const queue = [folder];
    let front = 0;
    while (queue.length > front) {
        const f = queue[front++];
        for (let next of tree[f]) {
            // 폴더일 경우
            if (next[1] === '1') {
                queue.push(next[0]);
            } else {
                files.push(next[0]);
                filesNoDup.add(next[0]);
            }
        }
    }
    answer += `${filesNoDup.size} ${files.length}\n`;
}

console.log(answer.trimEnd());
