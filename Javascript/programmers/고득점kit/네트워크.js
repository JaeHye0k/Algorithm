function solution(n, computers) {
    let visited = Array(n).fill(false);
    let answer = 0;
    function dfs(cur) {
        if (visited[cur]) return;
        visited[cur] = true;
        computers[cur].forEach((v, i) => {
            if (cur !== i) {
                if (v) dfs(i);
            }
        });
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}
