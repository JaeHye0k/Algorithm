function solution(n, w, num) {
    var answer = 0;
    const {x: nx, y: ny} = getXY(n, w);
    const {x: numX, y: numY} = getXY(num, w);
    answer += ny - numY;
    
    if(n % w === 0) return answer+1;
    
    if(ny % 2 === 0) {
        if(numX <= (n - 1) % w) return answer+1;
    } else {
        if(w - numX - 1 <= (n - 1) % w) return answer+1;
    }
    
    return answer;
}

function getXY(num, w) {
    const y = Math.floor((num - 1) / w);
    let x;
    if(y % 2 === 0) {
        x = (num - 1) % w;
    } else {
        x = (w - (num - 1) % w) - 1;
    }
    return {x, y};
}

/*
    i번 상자가 있는 행 번호 = (i - 1) / w (0번째 행부터 시작)
    i번 상자가 있는 열 번호 
        1. i번 상자가 짝수 행일 때 = (i - 1) % w (0번째 열부터 시작)
        2. i번 상자가 홀수 행일 때 = (w - (i - 1) % w) - 1 
    
    num이 있는 행의 번호를 얻어
    n의 행의 번호를 얻어 
    두 행 번호의 차이만큼의 개수 차이 구하기(마지막 행이 포함됨)
    마지막 행에 상자가 없다면 상자를 하나 빼줘야 함
    n이 w로 나누어떨어지면 마지막 행까지 꽉찬것
    나누어 떨어지지 않으면 나머지 개수만큼의 상자가 마지막 행에 있는것
    마지막 행 번호가 짝수(또는 0)면 왼쪽에서 오른쪽, 홀수면 오른쪽에서 왼쪽으로 상자가 쌓임
    n을 w로 나누었을 때 나머지를 구함
    나머지가 3이라면 마지막 행에 상자가 3개 있는 것. 마지막 행 번호가 짝수라면 1, 2, 3, 홀수라면 3, 2, 1
    num의 열 번호 매핑
    num의 열 번호를 얻어
    
*/