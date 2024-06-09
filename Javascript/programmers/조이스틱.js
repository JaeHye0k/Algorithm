function solution(name) {
    let answer = 0;
    let str = 'A'.repeat(name.length);
    const visited = Array(name.length).fill(false);
    let curIdx = 0;
    String.prototype.replaceAt = function (idx, str) {
        return this.substring(0, idx) + str + this.substring(idx + str.length);
    };
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
        str = str.replaceAt(curIdx, name[curIdx]); // 알파벳 변경
    }

    // 거리 구하는 함수
    function getDist(from, to, n) {
        const diff = Math.abs(from - to);
        const half = Math.floor(n / 2);
        if (diff > half) return n - diff; // 반대로 이동했을 때 더 빠른 경우
        else return diff;
    }

    return answer;
}
console.log(solution('BBAAB'));

// 반례
// BBAAB
// answer: 6
