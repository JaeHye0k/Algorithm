function solution(info, edges) {
    let answer = 0;

    const graph = Array.from(Array(info.length), () => []);
    for (const [a, b] of edges) {
        graph[a].push(b);
    }

    dfs(0, 0, 0, [0]);
    function dfs(cur, wolf, sheep, nextNodes) {
        if (info[cur]) wolf++;
        else sheep++;

        if (wolf >= sheep) return;
        answer = Math.max(sheep, answer);

        nextNodes = [...nextNodes];
        const curIdx = nextNodes.indexOf(cur);
        nextNodes.push(...graph[cur]);
        nextNodes.splice(curIdx, 1); // 현재 노드는 탐색 리스트에서 제외

        for (let next of nextNodes) {
            dfs(next, wolf, sheep, nextNodes);
        }
    }

    return answer;
}

console.log(
    solution(
        [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [
            [0, 1],
            [1, 2],
            [1, 4],
            [0, 8],
            [8, 7],
            [9, 10],
            [9, 11],
            [4, 3],
            [6, 5],
            [4, 6],
            [8, 9],
        ]
    )
);
