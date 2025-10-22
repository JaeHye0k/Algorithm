function solution(N, stages) {
    const answer = [];
    const fail = new Array(N+1).fill(0);
    
    for(let i=1; i<=N; i++) {
        let notClear = 0;
        let visit = 0;
        for(let j=0; j<stages.length; j++) {
            if(stages[j] === i) { 
                notClear++;
                visit++;
            } 
            if(stages[j] > i) { 
                visit++;
            }
        }
        fail[i] = visit > 0 ? notClear / visit : 0;
    }
    
    for(let i=1; i<fail.length; i++) {
        answer.push({ stage: i, percent: fail[i] });
    }
    
    answer.sort((a, b) => {
        if(a.percent === b.percent) return a.stage - b.stage;
        return b.percent - a.percent;
    })
    
    return answer.map(e => e.stage);
}


/*

n번 스테이지의 실패율: 배열에서 n의 개수 / n보다 큰 숫자의 개수

N = 마지막 스테이지
N + 1 = 마지막 스테이지까지 클리어
*/