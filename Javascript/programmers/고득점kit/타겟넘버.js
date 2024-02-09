// 테스트 케이스 1,2 시간초과
function solution(numbers, target) {
    let n = numbers.length;
    let queue = [[0, 0]];
    let answer = 0;
    while (queue.length) {
        let [v, depth] = queue.shift();
        if (depth < n) {
            queue.push([v + numbers[depth], depth + 1]);
            queue.push([v - numbers[depth], depth + 1]);
        }
        if (depth === n && v === target) answer++;
    }
    return answer;
}
