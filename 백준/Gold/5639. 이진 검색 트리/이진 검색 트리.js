const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const stack = [];
const result = [];

stack.push([0, input.length - 1]);
while (stack.length) {
    const [start, end] = stack.pop();
    if (start > end) continue;

    // 오른쪽 서브 트리의 루트 구하기
    const rootRightSubTree = getRootRightSubTree(start, end);

    // 오른쪽 서브 트리가 있을 경우
    if (rootRightSubTree) {
        stack.push([start + 1, rootRightSubTree - 1]); // 왼쪽 서브 트리의 시작, 끝 인덱스
        stack.push([rootRightSubTree, end]); // 오른쪽 서브 트리의 시작, 끝 인덱스
    } else {
        stack.push([start + 1, end]); // 루트 노드만 제거
    }

    result.push(input[start]);
}

console.log(result.reverse().join('\n'));

function getRootRightSubTree(start, end) {
    for (let i = start + 1; i <= end; i++) {
        if (input[i] > input[start]) return i;
    }
}
