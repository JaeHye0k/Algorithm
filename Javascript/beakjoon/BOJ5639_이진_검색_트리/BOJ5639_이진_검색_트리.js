const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const input = Array.from({ length: 10000 }, (e, i) => i);
console.log(input);

const tree = makeTree(input);
const result = getPosfixResult(tree);
console.log(result);

// 전위 순회 결과로 트리 생성
function makeTree(input) {
    const tree = [input[0]];
    for (let i = 1; i < input.length; i++) {
        treeDown(input[i]);
    }

    function treeDown(val) {
        let cur, isLeft, lcIdx, rcIdx, isLeftExist, isRightExist;
        let idx = 0;

        do {
            cur = tree[idx];
            isLeft = cur > val;
            [lcIdx, rcIdx] = [idx * 2 + 1, idx * 2 + 2];
            [isLeftExist, isRightExist] = [!!tree[lcIdx], !!tree[rcIdx]];

            if (isLeft) {
                if (isLeftExist) idx = lcIdx;
                else tree[lcIdx] = val;
            } else {
                if (isRightExist) idx = rcIdx;
                else tree[rcIdx] = val;
            }
        } while (idx === lcIdx || idx === rcIdx); // 인덱스가 변경되지 않았다면 종료
    }

    return tree;
}

// 트리를 후위 순회한 결과 반환
function getPosfixResult(tree) {
    let result = '';

    searchPosfix(0);

    // 트리 후위 순회
    function searchPosfix(idx) {
        const [lcIdx, rcIdx] = [idx * 2 + 1, idx * 2 + 2];
        const [isLeftExist, isRightExist] = [!!tree[lcIdx], !!tree[rcIdx]];

        if (isLeftExist) searchPosfix(lcIdx);
        if (isRightExist) searchPosfix(rcIdx);
        result += tree[idx] + '\n';
    }

    return result.trimEnd();
}
