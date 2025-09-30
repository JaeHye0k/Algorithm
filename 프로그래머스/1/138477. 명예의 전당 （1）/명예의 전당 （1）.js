function solution(k, score) {
    var answer = [];
    const prize = [];
    for(let i=0; i<score.length; i++) {
        if(i <= k-1) {
            prize.push(score[i]);
        } else if(score[i] > prize[k-1]) {
            prize[k-1] = score[i];
        }
        prize.sort((a, b) => b - a);
        answer.push(prize.at(-1));
    }
    
    return answer;
}

/*
1-1. k일 까지는 그대로 배열에 삽입
1-2. k+1일 부터는 당일 score와 기존 명예의 전당 k번째 스코어와 비교
    1-2-1. 기존 명예의 전당 점수가 더 높다면 그대로 유지
    1-2-2. 당일 score가 더 높다면 k번째 스코어와 교체
2. 명예의 전당 마지막에서 가장 작은 값 answer에 삽입
*/