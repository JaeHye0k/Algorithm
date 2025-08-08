function solution(storage, requests) {
    var answer = 0;
    storage = storage.map((e) => e.split(''));
    
    for(const request of requests) {
        const isCrain = request.length === 2;
        const newStorage = storage.map((e) => [...e]);
        if(isCrain) {
            for(let i=0; i<storage.length; i++) {
                for(let j=0; j<storage[0].length; j++) {
                    if(storage[i][j] === request[0]) newStorage[i][j] = undefined;
                }
            }
        } else {
            for(let i=0; i<storage.length; i++) {
                for(let j=0; j<storage[0].length; j++) {
                    if(storage[i][j] === request[0] && bfs(i, j, storage)) {
                        newStorage[i][j] = undefined;
                    }
                }
            }
        }
        storage = newStorage;
    }
    
    for(let i=0; i<storage.length; i++) {
        for(let j=0; j<storage[0].length; j++) {
            if(storage[i][j]) answer++;
        }
    }
    
    return answer;
}

function bfs(x, y, storage) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const visited = Array.from({length: storage.length}, () => new Array(storage[0].length).fill(0));
    
    const queue = [[x, y]];
    visited[x][y] = 1;
    let front = 0;
    
    while(queue.length > front) {
        const [x, y] = queue[front++];
        for(let i=0; i<4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(nx < 0 || ny < 0 || nx >= storage.length || ny >= storage[0].length) return true;
            if(visited[nx][ny] || storage[nx][ny]) continue;
            visited[nx][ny] = 1;
            queue.push([nx, ny]);
        }
    }
    return false;
}


    

/*
    - 편의를 위해 storage[i] 도 배열로 변경
    - requests[i].length === 2라면 해당 문자를 storage에서 모두 제거
    - 그렇지 않다면
        storage에 있는 모든 원소를 확인
            storage[i][j] === requests[i] 라면
                bfs로 네 방향을 확인하며 연결된 빈칸을 모두 조회하기
                끝까지 갔다면 true 반환 (접근 가능)
                끝까지 못갔는데 막혀있다면 false 반환 (접근 불가)
                    
    - storage[i][j] 가 undefined가 아닌 원소의 개수가 정답
        
*/