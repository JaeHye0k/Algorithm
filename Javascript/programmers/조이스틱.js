function solution(name) {
    let answer = 0;
    let min = name.length - 1; // 최소 이동 횟수

    for (let i = 0; i < name.length; i++) {
        const curAlphabet = name[i].codePointAt();
        const dist = getDist(65, curAlphabet, 26);
        answer += dist;

        let nextIdx = i + 1;
        // A가 아닌곳을 찾을 때까지 nextIdx 증가
        while (nextIdx < name.length && name[nextIdx] === 'A') nextIdx++;

        min = Math.min(min, i * 2 + name.length - nextIdx, i + (name.length - nextIdx) * 2);
    }
    answer += min;

    // 거리 구하는 함수
    function getDist(from, to, len) {
        const diff = Math.abs(from - to);
        return Math.min(diff, len - diff);
    }

    return answer;
}

console.log(solution('ABABAAAAABA'));
