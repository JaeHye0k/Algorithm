const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const students = require("fs").readFileSync(filePath).toString().trim().split("\n");
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const arr = []; // 여학생의 조합이 저장될 배열
let answer = 0;

// BFS로 현재 여학생 조합이 인접해있는지 확인한다.
function bfs(arr) {
    // false가 아니라 true로 초기화 한다.
    const visited = Array.from({ length: 5 }, () => Array(5).fill(true));
    // 여학생 7명의 위치를 전부 방문 처리한다.
    for (const [y, x] of arr) {
        visited[y][x] = false;
    }
    // 첫 번째 여학생의 위치를 큐에 삽입하고 방문 처리한다.
    const queue = [arr[0]];
    visited[arr[0][0]][arr[0][1]] = true;
    let visitCount = 1; // 방문 횟수
    while (queue.length) {
        let [y, x] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];
            // 범위를 벗어나지 않고 방문한 적 없는 위치일 경우
            if (ny >= 0 && nx >= 0 && ny < 5 && nx < 5 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                visitCount++;
                queue.push([ny, nx]);
            }
        }
    }
    return visitCount === 7;
}

// DFS로 여학생들이 7명이 되는 경우를 조합한다.
function dfs(depth, start, countY) {
    if (countY >= 4) return; // 임도연파가 4명 이상이라면 재귀 탈출
    if (depth === 7) {
        // 7명을 뽑았다면
        if (bfs(arr)) answer++; // 모든 여학생들이 인접해있다면 카운트
        return;
    }
    for (let i = start; i < 25; i++) {
        let y = Math.floor(i / 5); // 행
        let x = i % 5; // 열
        arr.push([y, x]); // 해당 위치 배열에 추가
        dfs(depth + 1, i + 1, countY + (students[y][x] === "Y" ? 1 : 0)); // 재귀 호출
        arr.pop(); // 재귀를 탈출 하고나면 해당 위치 제거
    }
}

dfs(0, 0, 0);
console.log(answer);
