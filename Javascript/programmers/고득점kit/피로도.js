// dfs
function solution(k, dungeons) {
    let n = dungeons.length;
    let visited = Array.from({ length: n }, () => false);
    let answer = [];
    function dfs(tired, count) {
        answer.push(count);
        for (let i = 0; i < n; i++) {
            let [a, b] = dungeons[i];
            if (tired >= a && !visited[i]) {
                visited[i] = true;
                dfs(tired - b, count + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    return Math.max(...answer);
}
