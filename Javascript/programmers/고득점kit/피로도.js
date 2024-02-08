// bfs
function solution(k, dungeons) {
    let answer = 0;
    let queue = [[k, []]];

    while (queue.length) {
        let [k, route] = queue.shift();
        for (let i = 0; i < dungeons.length; i++) {
            let [a, b] = dungeons[i];
            if (k >= a && !route.includes(i)) {
                queue.push([k - b, route.concat(i)]);
            }
            answer = Math.max(answer, route.length);
        }
    }
    return answer;
}
// dfs
// function solution(k, dungeons) {
//     let n = dungeons.length;
//     let visited = Array(n).fill(false);
//     let answer = 0;
//     function dfs(k, count){
//         answer = Math.max(answer, count);
//         for(let i=0; i<n; i++){
//             let [a,b] = dungeons[i];
//             if(k >= a && !visited[i]){
//                 visited[i] = true;
//                 dfs(k-b, count+1);
//                 visited[i] = false;
//             }
//         }
//         return answer;
//     }
//     dfs(k,0);
//     return answer;
// }
solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
]);
