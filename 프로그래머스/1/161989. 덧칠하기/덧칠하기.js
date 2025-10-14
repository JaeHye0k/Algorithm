function solution(n, m, section) {
    var answer = 0;
    let last = 0;
    
    for(let i=0; i<section.length; i++) {
        if(section[i] > last) {
            answer++;
            last = section[i] + m - 1;
        }
    }

    return answer;
}

/*
    왼쪽부터 안 칠한 곳을 만나면 해당 벽 포함 m개의 벽에 페인트 칠

*/