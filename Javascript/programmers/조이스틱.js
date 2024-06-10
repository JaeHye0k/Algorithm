function solution(name) {
    let answer = 0;
    let str = 'A'.repeat(name.length);
    const visited = Array(name.length).fill(false);
    let curIdx = 0;

    while (str !== name) {
        let closeDist = Infinity;
        let closeIdx = curIdx;
        // 가장 가까운 인덱스 찾기
        for (let i = 0; i < name.length; i++) {
            if (name[i] !== 'A' && !visited[i]) {
                const dist = getDist(curIdx, i, name.length);
                if (dist < closeDist) {
                    closeDist = dist;
                    closeIdx = i;
                }
            }
        }
        curIdx = closeIdx; // 가장 가까운 인덱스로 이동
        answer += closeDist; // 이동 횟수 누적
        visited[curIdx] = true;

        const from = str[curIdx].codePointAt() - 65;
        const to = name[curIdx].codePointAt() - 65;
        const dist = getDist(from, to, 26); // 두 알파벳 사이의 최단 거리
        answer += dist;
        str = str.slice(0, curIdx) + name[curIdx] + str.slice(curIdx + 1); // 알파벳 변경
    }

    // 거리 구하는 함수
    function getDist(from, to, n) {
        const diff = Math.abs(from - to);
        return Math.min(diff, n - diff);
    }

    return answer;
}

// 오른쪽으로만 이동하거나, 왼쪽으
function AnswerSolution(name) {
    var answer = 0;
    let min = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let currentAlphabet = name.charCodeAt(i);

        if (currentAlphabet < 78) {
            answer += currentAlphabet % 65;
        } else {
            answer += 91 - currentAlphabet;
        }

        let nextIndex = i + 1;

        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex += 1;
        }
        min = Math.min(
            min,
            i * 2 + name.length - nextIndex, // 먼저 오른쪽으로 가기
            i + (name.length - nextIndex) * 2 // 처음부터 반대로 가기
        );
    }
    answer += min;
    return answer;
}
console.log(solution('ABABAAAAABA'));
console.log(AnswerSolution('ABABAAAAABA'));

// 반례
// ABABAAAAABA
// answer: 10

// ← ← ↑ → → → ↑ → → ↑
