function solution(n, wires) {
    // n === wires.length+1
    let visited = Array(n - 1).fill(false);
    // 하나하나 다 끊어보기.
    for (let i = 0; i < n - 2; i++) {
        let count = 0;
        let w1 = wires.filter((_, j) => j <= i); // O(N)
        let w2 = wires.filter((_, j) => j > i); // O(N)
        dfs(i, w1);
        dfs(i, w2);
    }

    function dfs(v, graph) {
        for (let i = 0; i < graph.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                let [s, e] = graph[i];
                dfs(e, graph);
            }
        }
    }
}
