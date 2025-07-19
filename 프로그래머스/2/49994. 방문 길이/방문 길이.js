function solution(dirs) {
    var answer = 0;

    const n = 5;
    const v = n * 2 + 1; // 정점의 개수
    const r = v - 1; // 길의 개수
    const center = Math.floor((v + r) / 2);
    let x = center;
    let y = center;
    const visited = Array.from({length: v + r}, () => Array(v + r).fill(false));
    visited[x][y] = true;
    
    for(const dir of dirs) {
        let [nx, ny] = move(dir, x, y);
        if(nx < 0 || ny < 0 || nx >= v+r || ny >= v+r) continue;
        // 이미 방문한 길이라면
        if(visited[nx][ny]) {
            [x, y] = move(dir, nx, ny);
            continue;
        }
        visited[nx][ny] = true;
        [nx, ny] = move(dir, nx, ny);
        visited[nx][ny] = true;
        answer += 1;
        x = nx;
        y = ny;
    }
    
    return answer;
}

function move(dir, x, y) {
    const d = {
        "U": [0, 1],
        "D": [0, -1],
        "L": [-1, 0],
        "R": [1, 0]
    }
    const [dx, dy] = d[dir]
    return [x+dx, y+dy];
}



/* 
    정점이 아니라 '길'에 방문 여부를 표시해야 됨
    정점과 길을 모두 2차원 배열로 저장
    
*/