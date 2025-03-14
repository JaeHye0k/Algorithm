function solution(progresses, speeds) {
    const answer = [];
    let lastDeployIdx = -1;
    let totalDeployCount = 0;
    const prevProgresses = [...progresses];
    
    while(totalDeployCount < progresses.length) {
        let curDeployCount = 0;
        for(let i = lastDeployIdx + 1; i < progresses.length; i++) {
            prevProgresses[i] += speeds[i];
        }
        for(let i = lastDeployIdx + 1; i < prevProgresses.length; i++) {
            if(prevProgresses[i] >= 100) {
                curDeployCount++;
                lastDeployIdx = i;
            }
            else break;
        }
        if(curDeployCount > 0) answer.push(curDeployCount);
        totalDeployCount += curDeployCount;
    }
    return answer;
}


/*
    i번째 기능이 먼저 개발되더라도 먼저 배포되야할 기능들이 배포되지 않았다면 배포가 미뤄짐
    
    
    day[i] = progresses[i]
    day[i] = day[i-1] + speeds[i]
*/