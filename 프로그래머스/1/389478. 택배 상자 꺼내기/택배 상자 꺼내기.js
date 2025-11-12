function solution(n, w, num) {
    var answer = 0;
    const arr = Array.from({length: Math.ceil(n / w)}, (_, i) => new Array(w).fill(0));
    
    for(let i=1; i<=n; i++) {
        const {x, y} = getXY(i, w);
        arr[y][x] = i;
    }
    
    const {x, y} = getXY(num, w);
    
    for(let i=y; i<arr.length; i++) {
        if(arr[i][x]) answer++;
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
    
    2차원 배열에 상자를 순서에 맞게 쌓고
    num상자의 위치를 파악하고,
    행을 축으로 움직이면서 상자가 있는지 파악
*/