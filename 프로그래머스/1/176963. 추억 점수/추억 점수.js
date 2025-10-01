function solution(name, yearning, photo) {
    var answer = [];
    const map = name.reduce((acc, cur, i) => ({ ...acc, [cur]: yearning[i] }), {});
    
    for(let i=0; i<photo.length; i++) {
        let sum = 0;
        for(let j=0; j<photo[i].length; j++) {
            const name = photo[i][j];
            sum += map[name] ? map[name] : 0;
        }
        answer.push(sum);
    }
    
    return answer;
}

/*
- 이름과 그리움 점수 매핑 { "may": 5 }
- 매핑 정보에 없는 사람의 경우 0점
*/