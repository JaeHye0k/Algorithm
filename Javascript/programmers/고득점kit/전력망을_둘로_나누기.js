function solution(n, wires) {
    let graph = Array.from(Array(n + 1), () => []);
    // 그래프 형태로 만들어주기
    wires.map(([s, e]) => {
        graph[s].push(e);
        graph[e].push(s);
    });
    function bfs(root, except) {
        // except는 다음 노드 사이를 끊어주는 역할을 한다.
        let queue = [root];
        let visited = [];
        let count = 0;
        visited[root] = true;
        while (queue.length) {
            let v = queue.shift();
            graph[v].forEach((e) => {
                if (!visited[e] && e !== except) {
                    queue.push(e);
                    visited[e] = true;
                    count++;
                }
            });
        }
        // root에 이어져있는 노드의 개수를 반환한다. (except는 제외)
        return count;
    }

    let answer = 100; // n의 최대값
    wires.forEach(([s, e]) => {
        // 두 그룹으로 나누었을 때 노드의 개수 차이가 가장 작은 값을 저장
        answer = Math.min(answer, Math.abs(bfs(s, e) - bfs(e, s)));
    });
    return answer;
}
