function solution(m, n, board) {
    var answer = 0;
    board = board.map(e => e.split(''));
    const founded = [];
    
    function checkBlock() {
        for(let i=0; i<m-1; i++) {
            for(let j=0; j<n-1; j++) {
                const v = board[i][j];
                if(v === board[i+1][j] && v === board[i][j+1] && v === board[i+1][j+1]) {
                    founded.push([i, j]);
                    founded.push([i+1, j]);
                    founded.push([i, j+1]);
                    founded.push([i+1, j+1]);
                }
            }     
        }
    }
    
    function breakBlock() {
        let count = 0;
        for (const [i, j] of founded) {
            if(!board[i][j]) continue;
            board[i][j] = null;
            count++;
        }
        return count;
    }
    
    function fallBlock() {
        for(let i=m-2; i>=0; i--) {
            for(let j=0; j<n; j++) {
                for(let k=i; k < m-1; k++) {
                    if(board[k+1][j] === null) {
                        board[k+1][j] = board[k][j];
                        board[k][j] = null;
                    } 
                }
            }
        }
    }
    
    while(true) {
        checkBlock();
        const count = breakBlock();
        if(count === 0) return answer;
        answer += count;
        fallBlock();
        founded.length = 0;
    }

    return answer;
}



/*

2*2 블록 찾으면 1로 표시하기
1로 표시한 블록 지우기 (별도의 플래그 배열) 지우면서 카운트 세기
이번 사이클에서 카운트가 0이라면 종료
위에 있는 블록 아래로 내리기 -> 옆으로 눞히면 편함

rotate
앞쪽 인덱스가 null 이라면 

*/