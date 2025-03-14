function solution(progresses, speeds) {
    const answer = new Array(100).fill(0);
    // 각 기능마다 배포까지 며칠걸리는지 저장
    const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    let maxDay = days[0];
    
    for(let i = 0; i < days.length; i++) {
        if(days[i] > maxDay) {
            maxDay = days[i];
        } 
        answer[maxDay]++;
    }
    
    return answer.filter((count) => count !== 0);
}


/*
    i번째 기능이 먼저 개발되더라도 먼저 배포되야할 기능들이 배포되지 않았다면 배포가 미뤄짐
    
    
    day[i] = progresses[i]
    day[i] = day[i-1] + speeds[i]
*/