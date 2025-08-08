function solution(players, m, k) {
    var answer = 0;
    let servers = []; // []
    for(let i=0; i<24; i++) { // 2
        const n = servers.length + 1; //  1
        if(players[i] >= n * m) { // 3 >= 1 * 3
            const overPlayerCount = players[i] - n * m + 1; // 5 - 3 + 1 = 3 만약 
            let addedServerCount = Math.floor(overPlayerCount / m); // 3 / 3 = 0
            if(overPlayerCount % m) addedServerCount++;
            answer += addedServerCount;
            for(let j=0; j<addedServerCount; j++) {
                servers.push(i+k);
            }
        }
        servers = servers.filter(server => server-1 > i);
    }
    return answer;
}
/*
    
    - players 를 순회하다가 players[i]가 n * m 이상이면 (n = 서버 개수)
        - 초과 인원 수 = players[i] - n * m + 1 (10 - 1 * 3 + 1 = 8)
        - 추가로 증설해야할 서버 개수 = 초과 인원 수 / m (8 / 3 = 2)
        - 서버 개수 = 기존 서버 개수 + 추가로 증설한 서버 개수
        - 서버 반납 시각 === i 라면 서버 제거
*/
