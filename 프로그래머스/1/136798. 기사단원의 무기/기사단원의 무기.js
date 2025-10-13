function solution(number, limit, power) {
    const answer = [1];
    
    for(let i=2; i<=number; i++) {
        const set = new Set();
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(i % j === 0) {
                set.add(j);
                set.add(i / j);
            } 
        }
        answer.push(set.size);
    }
    
    return answer.reduce((acc, cur) => {
        return acc + (cur > limit ? power : cur);
    }, 0);
}

/*
무기의 공격력 = 기사 번호의 약수의 개수
limit을 초과할 경우 공격력 = power

1. number의 약수의 개수 구하기
2. 약수의 개수가 limit 을 초과하는지 확인

약수의 개수 구하기
- 1부터 number까지 1씩 증가하며 나누어 떨어지는 수의 개수
- i~j 까지 중복되니까 메모이제이션

*/