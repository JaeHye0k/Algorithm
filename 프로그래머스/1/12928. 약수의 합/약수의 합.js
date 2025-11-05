function solution(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    var answer = 0;
    for(let i=1; i<=Math.sqrt(n); i++) {
        let a, b;
        if(n % i === 0) {
            a = Math.floor(n / i);
            b = i;
            
            if(a === b) answer += a;
            else answer+= a + b;
        }
    }
    return answer;
}

/*
6 의 약수 = 1 * 6, 2*3

*/