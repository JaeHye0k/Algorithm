function solution(N, stages) {
    const answer = [];
    
    for(let i=1; i<=N; i++) {
        const notClear = stages.filter((e) => e === i).length;
        const reach = stages.filter((e) => e >= i).length;
        answer.push([i, notClear / reach]);
    }
    
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map((e) => e[0]);
}


/*

n번 스테이지의 실패율: 배열에서 n의 개수 / n보다 큰 숫자의 개수

N = 마지막 스테이지
N + 1 = 마지막 스테이지까지 클리어
*/