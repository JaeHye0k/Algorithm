function solution(dirs) {
    var answer = 0;

    const n = 5;
    let [x, y] = [0, 0];
    const visited = new Map();
    
    for(const dir of dirs) {
        const [nx, ny] = move(dir, x, y);
        if(nx < -n || ny < -n || nx > n || ny > n) continue;
        const road = generateKey(x, y, nx, ny);
        visited.set(road, true);
        [x, y] = [nx, ny];
    }
    return visited.size;
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

function generateKey(x, y, nx, ny) {
    const x1 = Math.min(x, nx);
    const y1 = Math.min(y, ny);
    const x2 = Math.max(x, nx);
    const y2 = Math.max(y, ny);
    
    return `${x1},${y1},${x2},${y2}`
}



/* 
    정점이 아니라 '길'에 방문 여부를 표시해야 됨
    정점과 길을 모두 2차원 배열로 저장
*/