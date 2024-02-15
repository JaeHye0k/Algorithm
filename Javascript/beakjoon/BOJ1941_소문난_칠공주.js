const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
let answer = 0;

function dfs(x, y, countY, countS) {
    // 범위를 벗어나거나 이미 방문한 학생일 경우
    if (x < 0 || y < 0 || x >= 5 || y >= 5 || visited[x][y]) return;
    else {
        visited[x][y] = true; // 방문
        if (input[x][y] === "Y") countY += 1; // 현재 학생이 임도연파일 경우
        else countS += 1; // 현재 학생이 이다솜파일 경우

        // 임도연파가 3명을 초과할 경우
        if (countY > 3) {
            visited[x][y] = false;
            return;
        }

        // 7명이 되었을 경우
        if (countY + countS === 7) {
            answer += 1;
            visited[x][y] = false;
            return;
        }

        dfs(x + 1, y, countY, countS);
        dfs(x - 1, y, countY, countS);
        dfs(x, y + 1, countY, countS);
        dfs(x, y - 1, countY, countS);
        visited[x][y] = false;
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        dfs(i, j, 0, 0);
    }
}
console.log(answer);
