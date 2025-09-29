function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a) {
        const cola = Math.floor(n / a) * b;
        answer += cola;
        n = cola + n % a;
    }
    
    return answer;
}

/*
    n = 남은 병 개수
    Math.floor(n / a) * b == a병을 가져다줬을 때 돌려주는 콜라의 개수
    
    if(Math.floor(n / a) === 0) return answer;
    answer+= n = Math.floor(n / a) * b
*/