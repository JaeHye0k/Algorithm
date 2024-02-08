function solution(n, wires) {
    let graph = Array.from(Array(n + 1), () => []);
    // 그래프 형태로 만들어주기
    wires.forEach(([s, e]) => {
        graph[s].push(e);
        graph[e].push(s);
    });
    function bfs(root, except) {
        let queue = [root];
        let visited = [];
        let count = 0;
        visited[root] = true;
        while (queue.length) {
            let v = queue.shift();
            graph[v].forEach((e) => {
                if (!visited[e] && e !== except) {
                    // 여기서 except노드로 가지 못하게 막는다.
                    queue.push(e);
                    visited[e] = true;
                    count++;
                }
            });
        }
        // 해당 그룹에 연결되어 있는 노드의 개수 반환
        return count;
    }

    let answer = 100; // n의 최대값
    wires.forEach(([s, e]) => {
        // 두 그룹으로 나누었을 때 노드의 개수 차이 구한 뒤 최소값으로 갱신
        answer = Math.min(answer, Math.abs(bfs(s, e) - bfs(e, s)));
    });
    return answer;
}
