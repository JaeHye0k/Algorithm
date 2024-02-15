const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const students = require("fs").readFileSync(filePath).toString().trim().split("\n");
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const combination = [];
let answer = 0;

// 7명의 여학생 조합이 만들어졌다면 BFS로 이 여학생들이 전부 인접해있는지 확인한다.
function bfs(combination) {
    // 모든 위치를 방문처리 해준다. (true로 초기화)
    const visited = Array.from({ length: 5 }, () => Array(5).fill(true));
    // 조합에 속해있는 여학생의 위치는 방문 처리를 해제 해준다.
    for (const [y, x] of combination) {
        visited[y][x] = false;
    }
    // 첫 번째 여학생의 위치를 큐에 삽입하고 방문 처리한다.
    const queue = [combination[0]];
    visited[combination[0][0]][combination[0][1]] = true;
    let visitCount = 1; // 방문 횟수
    let front = 0;
    while (queue.length > front) {
        let [y, x] = queue[front++];
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

// 우선 인접한지 여부 상관없이 7명이 모일수 있는 조합을 전부 구한다. (임도연파가 4명 이상 속해있는 경우는 빼고)
function dfs(depth, cur, countY) {
    if (countY >= 4) return; // 임도연파가 4명 이상이라면 재귀 탈출
    if (depth === 7) {
        // 7명이 모두 인접해 있을 경우 true를 반환하고, 따라서 카운트가 증가한다.
        if (bfs(combination)) answer++; // 모든 여학생들이 인접해있다면 카운트
        return;
    }
    for (let i = cur; i < 25; i++) {
        let y = Math.floor(i / 5); // 행
        let x = i % 5; // 열
        combination.push([y, x]); // 현재 여학생의 위치 추가
        dfs(depth + 1, i + 1, countY + (students[y][x] === "Y" ? 1 : 0));
        combination.pop(); // 재귀를 탈출하고 나면 맨 마지막에 저장된 여학생의 위치 제거
    }
}

dfs(0, 0, 0);
console.log(answer);
