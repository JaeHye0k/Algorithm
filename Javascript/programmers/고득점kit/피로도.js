function solution(k, dungeons) {
    let n = dungeons.length;
    let answer = Array(n).fill(0);
    let visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        bfs(i);
    }
    function bfs() {
        let queue = [];
        let tempK = k;
        while (queue.length) {
            for (let i = 0; i < n; i++) {
                if (!visited[i]) queue.push(i);
            }
            let v = queue.shift();
            visited[v] = true;
            let [a, b] = dungeons[v];
            // 현재 피로도가 다음 던전의 최소 필요 피로도보다 적을 경우
            if (tempK < a) {
                visited[v] = false;
                continue;
            }
            tempK -= b;
            // if(tempK >= 0) {
            // for(let i=0; i<n; i++){
            //     if(!visited[i]) queue.push(i);
            // }
            // }
        }
    }
}
