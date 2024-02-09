// 테스트 케이스 1,2 시간초과 (BFS)
// function solution(numbers, target) {
//     let n = numbers.length;
//     let queue = [[0, 0]];
//     let answer = 0;
//     while (queue.length) {
//         let [v, depth] = queue.shift();
//         if (depth < n) {
//             queue.push([v + numbers[depth], depth + 1]);
//             queue.push([v - numbers[depth], depth + 1]);
//         }
//         if (depth === n && v === target) answer++;
//     }
//     return answer;
// }

// 통과 (DFS)
function solution(numbers, target) {
    let n = numbers.length;
    let answer = 0;
    function dfs(sum, depth) {
        if (depth < n) {
            dfs(sum + numbers[depth], depth + 1);
            dfs(sum - numbers[depth], depth + 1);
        } else {
            if (sum === target) answer++;
            return;
        }
    }
    dfs(0, 0);
    return answer;
}
console.time();
let answer = solution(
    Array.from({ length: 20 }, () => 1),
    20
);
console.log(answer);
console.timeEnd();
