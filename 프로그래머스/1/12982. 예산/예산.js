function solution(d, budget) {
    var answer = 0;
    d.sort((a,b) => a-b);
    for(let i=0; i<d.length; i++) {
        budget -= d[i];
        if(budget >= 0) answer++;
    }
    return answer;
}

/*
금액이 작은 부서부터 배정 (x원을 지원해줄 수 없다면, x보다 큰 금액도 지원해줄 수 없기 때문에 성립)
*/